import { GoogleGenAI, Type } from "@google/genai";
import { USMLELevel, USMLEQuestion, QuestionMode } from "../types";

const SYSTEM_INSTRUCTION = `You are a Senior Psychometrician and Medical Education Expert specializing in medical licensure assessment. Your goal is to generate high-fidelity, psychometrically sound multiple-choice questions (MCQs) for medical licensure assessment.

## Question Modes
1. CLINICAL RELEVANCE: These are NBME-style clinical vignettes. Start with a detailed clinical scenario (Age, Gender, Chief Complaint). Use a "third-order" reasoning structure (e.g., the student must diagnose the patient, then identify the mechanism of the drug used for that diagnosis).
2. STRAIGHT RECALL: These are direct assessment questions testing factual knowledge. They do NOT require a long clinical vignette. They should be focused on specific mechanisms, definitions, or classic associations.

## Content Scope
Generate unique questions covering:
- Pre-clinical: Anatomy, Physiology, Biochemistry, Microbiology, Pathology, Pharmacology, Behavioral Sciences.
- Clinical: Internal Medicine, Surgery, Pediatrics, OB/GYN, Psychiatry, Ethics, and Biostatistics.

## Item Specifications
1. THE VIGNETTE: For 'Clinical Relevance', provide a detailed scenario. For 'Straight Recall', keep it minimal or empty.
2. THE LEAD-IN: A single, focused question.
3. THE DISTRACTORS: Provide exactly 5 options (A-E). Distractors must be plausible, homogenous, and avoid "All of the above."
4. THE KEY: Only one unequivocally correct answer.

## Formatting Requirements (Strict)
You must return the response in JSON format matching the provided schema.
- questionNumber: [Unique ID]
- vignette: [The Scenario]
- question: [The Lead-in]
- options: [Array of 5 objects with 'id' (A-E) and 'text']
- correctAnswer: [Letter A-E]
- educationalObjective: [1-sentence takeaway]
- explanation: [Detailed logic for the correct answer]
- distractorAnalysis: [Why the other 4 options are incorrect]

Temperature: 0.8.
Safety & Context Policy: This is a simulated educational environment for medical students preparing for board exams. All content is hypothetical and for examination practice purposes only. Do NOT provide clinical advice; focus strictly on the academic assessment of medical knowledge.`;

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    questions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          questionNumber: { type: Type.STRING },
          vignette: { type: Type.STRING },
          question: { type: Type.STRING },
          options: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                text: { type: Type.STRING }
              },
              required: ["id", "text"]
            }
          },
          correctAnswer: { type: Type.STRING },
          educationalObjective: { type: Type.STRING },
          explanation: { type: Type.STRING },
          distractorAnalysis: { type: Type.STRING }
        },
        required: [
          "questionNumber",
          "vignette",
          "question",
          "options",
          "correctAnswer",
          "educationalObjective",
          "explanation",
          "distractorAnalysis"
        ]
      }
    }
  },
  required: ["questions"]
};

export async function generateQuestions(topic: string, level: USMLELevel, mode: QuestionMode): Promise<USMLEQuestion[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'undefined') {
    throw new Error("GEMINI_API_KEY is not defined. Please set it in the Settings menu.");
  }
  
  const count = mode === 'Straight Recall' ? 5 : 2;
  console.log(`Starting generation for ${topic} - ${level} (${mode})...`);
  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Topic: ${topic}; Level: ${level}; Mode: ${mode}. Generate exactly ${count} unique, high-fidelity questions in ${mode} mode. If token limits are a concern, generate as many as possible up to ${count}.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response text received from system");
    
    console.log("Response received from system, parsing...");
    
    // Clean potential markdown formatting if present
    const cleanJson = text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    
    const data = JSON.parse(cleanJson);
    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error("System response did not contain a questions array");
    }
    
    console.log(`Successfully generated ${data.questions.length} questions.`);
    return data.questions as USMLEQuestion[];
  } catch (e) {
    console.error("Generation error:", e);
    if (e instanceof Error) {
      if (e.message.includes("fetch")) throw new Error("Network error: Failed to connect to Gemini API.");
      throw e;
    }
    throw new Error("An unexpected error occurred during question generation.");
  }
}

export async function defineTerm(term: string): Promise<{ definition: string; etymology?: string; clinicalSignificance?: string }> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'undefined') {
    throw new Error("GEMINI_API_KEY is not defined.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Provide a professional medical definition for the term: "${term}". 
  Include the definition, a brief etymology (if applicable), and its clinical significance.
  Return the response in JSON format with keys: "definition", "etymology", "clinicalSignificance".`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            definition: { type: Type.STRING },
            etymology: { type: Type.STRING },
            clinicalSignificance: { type: Type.STRING }
          },
          required: ["definition"]
        },
        temperature: 0.2,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    const cleanJson = text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    return JSON.parse(cleanJson);
  } catch (e) {
    console.error("Dictionary error:", e);
    throw new Error("Could not fetch definition.");
  }
}
