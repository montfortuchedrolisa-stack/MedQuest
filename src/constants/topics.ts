import { TopicCategory } from '../types';

export const TOPIC_CATEGORIES: TopicCategory[] = [
  // PRECLINICAL
  {
    name: 'Anatomy',
    divisions: [
      {
        name: 'Gross Anatomy',
        subdivisions: [
          { name: 'Head & Neck', description: 'Skull, cranial nerves, pharyngeal arches, triangles of the neck, thyroid, salivary glands' },
          { name: 'Thorax', description: 'Thoracic wall, mediastinum, heart, lungs, pleura, great vessels' },
          { name: 'Abdomen', description: 'Abdominal wall, peritoneum, GI tract, liver, pancreas, spleen, kidneys, vasculature' },
          { name: 'Pelvis & Perineum', description: 'Bony pelvis, pelvic floor, reproductive organs, bladder, rectum, perineal spaces' },
          { name: 'Back', description: 'Vertebral column, spinal cord, meninges, deep muscles of the back' },
          { name: 'Upper Limb', description: 'Shoulder girdle, axilla, brachial plexus, arm, forearm, hand, joints, vasculature' },
          { name: 'Lower Limb', description: 'Gluteal region, thigh, leg, foot, joints, lumbosacral plexus, vasculature' }
        ]
      },
      {
        name: 'Neuroanatomy',
        subdivisions: [
          { name: 'Spinal Cord', description: 'Tracts (ascending/descending), cross-sectional anatomy, lesions' },
          { name: 'Brainstem & Cerebellum', description: 'Medulla, pons, midbrain, cranial nerve nuclei, cerebellar circuits' },
          { name: 'Diencephalon & Basal Ganglia', description: 'Thalamus, hypothalamus, basal ganglia pathways, limbic system' },
          { name: 'Cerebral Hemispheres', description: 'Cortical areas, white matter tracts, internal capsule' },
          { name: 'Vasculature & CSF', description: 'Circle of Willis, dural sinuses, ventricular system, blood-brain barrier' }
        ]
      },
      {
        name: 'Embryology',
        subdivisions: [
          { name: 'General Embryology', description: 'Gastrulation, neurulation, folding, twinning, placenta' },
          { name: 'Systemic Development', description: 'Heart, branchial apparatus, GI tract, urogenital system, CNS development' },
          { name: 'Teratology', description: 'Teratogens, critical periods, congenital malformations' }
        ]
      },
      {
        name: 'Histology',
        subdivisions: [
          { name: 'Basic Tissues', description: 'Epithelium, connective tissue, adipose, cartilage, bone' },
          { name: 'Muscle & Nerve Histology', description: 'Skeletal, cardiac, smooth muscle; neurons, glia, peripheral nerves' },
          { name: 'Organ System Histology', description: 'Microscopic structure of circulatory, respiratory, GI, renal, endocrine systems' }
        ]
      }
    ]
  },
  {
    name: 'Physiology',
    divisions: [
      {
        name: 'Cellular & General Physiology',
        subdivisions: [
          { name: 'Membrane Transport', description: 'Diffusion, osmosis, active transport, ion channels, carrier-mediated transport' },
          { name: 'Signal Transduction', description: 'Receptors, second messengers (cAMP, IP3/DAG), G-proteins' },
          { name: 'Homeostasis', description: 'Negative/positive feedback, body fluid compartments, osmolarity' }
        ]
      },
      {
        name: 'Nerve & Muscle Physiology',
        subdivisions: [
          { name: 'Excitable Tissues', description: 'Resting membrane potential, action potentials, conduction velocity' },
          { name: 'Synaptic Transmission', description: 'Neuromuscular junction, neurotransmitters, EPSPs/IPSPs' },
          { name: 'Muscle Contraction', description: 'Skeletal, smooth, and cardiac muscle mechanics; excitation-contraction coupling' }
        ]
      },
      {
        name: 'Cardiovascular Physiology',
        subdivisions: [
          { name: 'Cardiac Electrophysiology', description: 'SA/AV nodes, conduction system, ECG interpretation, arrhythmias' },
          { name: 'Cardiac Mechanics', description: 'Cardiac cycle, pressure-volume loops, Starling curve, contractility' },
          { name: 'Hemodynamics', description: 'Flow, pressure, resistance, Poiseuille\'s law, compliance' },
          { name: 'Regulation of BP', description: 'Baroreceptors, chemoreceptors, RAAS, atrial natriuretic peptide' },
          { name: 'Microcirculation', description: 'Capillary exchange, Starling forces, lymphatics, edema' },
          { name: 'Special Circulations', description: 'Coronary, cerebral, skeletal muscle, splanchnic, fetal circulation' }
        ]
      },
      {
        name: 'Respiratory Physiology',
        subdivisions: [
          { name: 'Pulmonary Mechanics', description: 'Compliance, airway resistance, surfactants, lung volumes and capacities' },
          { name: 'Gas Exchange', description: 'Diffusion, V/Q matching, A-a gradient, pulmonary circulation' },
          { name: 'Gas Transport', description: 'Oxygen-hemoglobin dissociation curve, CO2 transport, Bohr/Haldane effects' },
          { name: 'Control of Breathing', description: 'Central and peripheral chemoreceptors, neural regulation' }
        ]
      },
      {
        name: 'Renal Physiology',
        subdivisions: [
          { name: 'Glomerular Function', description: 'GFR, renal blood flow, autoregulation, filtration fraction' },
          { name: 'Tubular Processing', description: 'Reabsorption and secretion in PCT, Loop, DCT, and Collecting Duct' },
          { name: 'Concentration & Dilution', description: 'Countercurrent mechanism, ADH action, free water clearance' },
          { name: 'Acid-Base Balance', description: 'Bicarbonate reabsorption, titratable acid, ammonium excretion' },
          { name: 'Electrolyte Balance', description: 'Sodium, potassium, calcium, and phosphate regulation' }
        ]
      },
      {
        name: 'Gastrointestinal Physiology',
        subdivisions: [
          { name: 'GI Motility', description: 'Peristalsis, segmentation, MMC, gastric emptying, defecation' },
          { name: 'GI Secretions', description: 'Salivary, gastric, pancreatic, biliary, and intestinal secretions' },
          { name: 'Digestion & Absorption', description: 'Carbohydrates, proteins, lipids, vitamins, and minerals' },
          { name: 'Liver & Biliary Function', description: 'Bile synthesis, metabolic functions, detoxification' }
        ]
      },
      {
        name: 'Endocrine Physiology',
        subdivisions: [
          { name: 'Hypothalamus-Pituitary Axis', description: 'Anterior and posterior pituitary hormones, feedback loops' },
          { name: 'Thyroid & Parathyroid', description: 'T3/T4 synthesis, metabolic rate, calcium and phosphate homeostasis' },
          { name: 'Adrenal Gland', description: 'Glucocorticoids, mineralocorticoids, catecholamines' },
          { name: 'Endocrine Pancreas', description: 'Insulin, glucagon, somatostatin, glucose regulation' }
        ]
      },
      {
        name: 'Reproductive Physiology',
        subdivisions: [
          { name: 'Male Reproductive', description: 'Spermatogenesis, testosterone, hypothalamic-pituitary-gonadal axis' },
          { name: 'Female Reproductive', description: 'Oogenesis, menstrual cycle, hormonal regulation' },
          { name: 'Pregnancy & Lactation', description: 'Fertilization, implantation, placental hormones, parturition' }
        ]
      },
      {
        name: 'Neurophysiology',
        subdivisions: [
          { name: 'Sensory Physiology', description: 'Somatosensory, vision, hearing, taste, smell' },
          { name: 'Motor Physiology', description: 'Reflexes, basal ganglia, cerebellum, pyramidal/extrapyramidal systems' },
          { name: 'Autonomic Nervous System', description: 'Sympathetic and parasympathetic regulation of organ systems' },
          { name: 'Higher Functions', description: 'Sleep, memory, learning, language, EEG' }
        ]
      }
    ]
  },
  {
    name: 'Biochemistry',
    divisions: [
      {
        name: 'Molecular Biology & Genetics',
        subdivisions: [
          { name: 'DNA Structure & Replication', description: 'Nucleotides, DNA polymerases, replication fork, DNA repair mechanisms' },
          { name: 'Transcription & RNA Processing', description: 'RNA polymerases, promoters, splicing, polyadenylation, capping' },
          { name: 'Translation & Mutations', description: 'Genetic code, tRNA, ribosomes, post-translational modifications, types of mutations' },
          { name: 'Gene Regulation', description: 'Operons, transcription factors, chromatin remodeling, RNA interference' },
          { name: 'Laboratory Techniques', description: 'PCR, blotting, DNA sequencing, CRISPR, cloning, microarrays' }
        ]
      },
      {
        name: 'Protein & Enzyme Biochemistry',
        subdivisions: [
          { name: 'Amino Acids & Proteins', description: 'Structure, properties, peptide bonds, protein folding, fibrous/globular proteins' },
          { name: 'Enzyme Kinetics', description: 'Michaelis-Menten, Vmax, Km, Lineweaver-Burk plots' },
          { name: 'Enzyme Regulation', description: 'Allosteric regulation, covalent modification, competitive/non-competitive inhibition' }
        ]
      },
      {
        name: 'Carbohydrate Metabolism',
        subdivisions: [
          { name: 'Glycolysis & Pyruvate', description: 'Steps, regulation, anaerobic vs aerobic, PDH complex' },
          { name: 'TCA Cycle & Bioenergetics', description: 'Krebs cycle steps, regulation, ATP yield' },
          { name: 'Gluconeogenesis', description: 'Key enzymes, substrates, regulation, fasting state' },
          { name: 'Glycogen Metabolism', description: 'Glycogenesis, glycogenolysis, regulation, storage diseases' },
          { name: 'HMP Shunt & Other Sugars', description: 'Pentose phosphate pathway, NADPH, fructose/galactose metabolism' }
        ]
      },
      {
        name: 'Lipid Metabolism',
        subdivisions: [
          { name: 'Fatty Acid Metabolism', description: 'Synthesis, beta-oxidation, regulation, essential fatty acids' },
          { name: 'Ketogenesis & Cholesterol', description: 'Ketone bodies, cholesterol synthesis, bile acids' },
          { name: 'Lipoproteins', description: 'Chylomicrons, VLDL, LDL, HDL, apolipoproteins, dyslipidemias' },
          { name: 'Sphingolipids & Lysosomal Storage', description: 'Sphingomyelin, cerebrosides, Gaucher, Tay-Sachs, Niemann-Pick' }
        ]
      },
      {
        name: 'Amino Acid & Nucleotide Metabolism',
        subdivisions: [
          { name: 'Urea Cycle', description: 'Nitrogen transport, steps, regulation, hyperammonemia' },
          { name: 'Amino Acid Derivatives', description: 'Heme synthesis, porphyrias, catecholamines, serotonin, histamine' },
          { name: 'Nucleotide Metabolism', description: 'Purine/pyrimidine synthesis, salvage pathways, Gout, Lesch-Nyhan' }
        ]
      },
      {
        name: 'Oxidative Phosphorylation',
        subdivisions: [
          { name: 'Electron Transport Chain', description: 'Complexes I-IV, cytochrome c, inhibitors, uncouplers' },
          { name: 'ATP Synthesis', description: 'Chemiosmotic hypothesis, ATP synthase' }
        ]
      },
      {
        name: 'Nutrition & Vitamins',
        subdivisions: [
          { name: 'Water-Soluble Vitamins', description: 'B complex (B1, B2, B3, B5, B6, B7, B9, B12), Vitamin C' },
          { name: 'Fat-Soluble Vitamins', description: 'Vitamins A, D, E, K; toxicity and deficiency states' },
          { name: 'Minerals & Malnutrition', description: 'Iron, zinc, iodine, copper, selenium; Marasmus, Kwashiorkor' }
        ]
      }
    ]
  },
  {
    name: 'Microbiology',
    divisions: [
      {
        name: 'Basic Bacteriology',
        subdivisions: [
          { name: 'Bacterial Structure', description: 'Cell wall (Gram +/-), flagella, pili, capsules, spores' },
          { name: 'Bacterial Genetics', description: 'Transformation, conjugation, transduction, transposition' },
          { name: 'Bacterial Growth & Toxins', description: 'Growth curves, exotoxins vs endotoxins' }
        ]
      },
      {
        name: 'Clinical Bacteriology',
        subdivisions: [
          { name: 'Gram-Positive Cocci', description: 'Staphylococcus, Streptococcus, Enterococcus' },
          { name: 'Gram-Positive Rods', description: 'Bacillus, Clostridium, Corynebacterium, Listeria, Actinomyces, Nocardia' },
          { name: 'Gram-Negative Cocci', description: 'Neisseria, Moraxella' },
          { name: 'Gram-Negative Rods', description: 'Enterics (E. coli, Salmonella, etc.), Respiratory (Haemophilus, Legionella), Zoonotic' },
          { name: 'Spirochetes & Others', description: 'Treponema, Borrelia, Leptospira; Chlamydia, Rickettsia, Mycoplasma' },
          { name: 'Mycobacteria', description: 'M. tuberculosis, M. leprae, atypical mycobacteria' }
        ]
      },
      {
        name: 'Virology',
        subdivisions: [
          { name: 'DNA Viruses', description: 'Herpesviruses, Hepadnavirus, Poxvirus, Adenovirus, Papillomavirus, Parvovirus' },
          { name: 'RNA Viruses', description: 'Orthomyxo, Paramyxo, Retro (HIV), Reo, Picorna, Calici, Flavi, Toga, Corona' },
          { name: 'Viral Pathogenesis', description: 'Replication cycles, genetics, slow viruses, prions' }
        ]
      },
      {
        name: 'Mycology',
        subdivisions: [
          { name: 'Systemic Mycoses', description: 'Histoplasmosis, Blastomycosis, Coccidioidomycosis, Paracoccidioidomycosis' },
          { name: 'Opportunistic Fungi', description: 'Candida, Aspergillus, Cryptococcus, Mucor/Rhizopus, Pneumocystis' },
          { name: 'Cutaneous Mycoses', description: 'Tinea, Malassezia, Sporothrix' }
        ]
      },
      {
        name: 'Parasitology',
        subdivisions: [
          { name: 'Protozoa', description: 'GI (Giardia, Entamoeba), CNS (Toxoplasma, Naegleria), Blood (Malaria, Babesia, Trypanosoma)' },
          { name: 'Helminths', description: 'Nematodes (Roundworms), Cestodes (Tapeworms), Trematodes (Flukes)' }
        ]
      }
    ]
  },
  {
    name: 'Immunology',
    divisions: [
      {
        name: 'Innate Immunity',
        subdivisions: [
          { name: 'Barriers & Phagocytes', description: 'Skin, mucus, neutrophils, macrophages, toll-like receptors' },
          { name: 'Complement System', description: 'Classical, alternative, and lectin pathways; MAC complex' },
          { name: 'Cytokines & Inflammation', description: 'Interleukins, TNF, interferons, acute phase reactants' }
        ]
      },
      {
        name: 'Adaptive Immunity',
        subdivisions: [
          { name: 'T-Cell Immunity', description: 'MHC I/II, T-cell development, CD4+ vs CD8+, Th1/Th2/Th17/Treg' },
          { name: 'B-Cell Immunity', description: 'Antibody structure, classes (IgG, IgA, IgM, IgE, IgD), isotype switching' },
          { name: 'Lymphoid Organs', description: 'Thymus, spleen, lymph nodes, MALT, lymphocyte trafficking' }
        ]
      },
      {
        name: 'Clinical Immunology',
        subdivisions: [
          { name: 'Hypersensitivity', description: 'Types I, II, III, and IV; anaphylaxis, serum sickness' },
          { name: 'Immunodeficiency', description: 'Primary (B-cell, T-cell, combined, phagocyte), Secondary (HIV)' },
          { name: 'Autoimmunity & Tolerance', description: 'Central/peripheral tolerance, HLA associations, common autoimmune mechanisms' },
          { name: 'Transplant & Cancer', description: 'Graft-vs-host, rejection types, tumor immunology, vaccines' }
        ]
      }
    ]
  },
  {
    name: 'Pathology',
    divisions: [
      {
        name: 'General Pathology',
        subdivisions: [
          { name: 'Cellular Injury & Adaptation', description: 'Atrophy, hypertrophy, hyperplasia, metaplasia; necrosis vs apoptosis; intracellular accumulations' },
          { name: 'Inflammation & Repair', description: 'Acute vs chronic inflammation, vascular/cellular events, mediators, wound healing, fibrosis' },
          { name: 'Hemodynamic Disorders', description: 'Edema, hyperemia, congestion, hemorrhage, thrombosis, embolism, infarction, shock' },
          { name: 'Genetic & Pediatric Path', description: 'Karyotypic abnormalities, single-gene disorders, neonatal diseases, pediatric tumors' },
          { name: 'Environmental & Nutritional', description: 'Toxins, radiation, smoking, alcohol, vitamin deficiencies, obesity' }
        ]
      },
      {
        name: 'Neoplasia',
        subdivisions: [
          { name: 'Characteristics of Neoplasia', description: 'Benign vs malignant, nomenclature, differentiation, anaplasia, rate of growth' },
          { name: 'Molecular Basis of Cancer', description: 'Oncogenes, tumor suppressor genes, apoptosis regulation, DNA repair' },
          { name: 'Biology of Tumor Growth', description: 'Angiogenesis, invasion, metastasis, tumor immunity' },
          { name: 'Clinical Aspects', description: 'Grading, staging, paraneoplastic syndromes, tumor markers' }
        ]
      },
      {
        name: 'Systemic Pathology I',
        subdivisions: [
          { name: 'Cardiovascular Pathology', description: 'Atherosclerosis, aneurysms, vasculitis, ischemic heart disease, valvular disease, cardiomyopathies' },
          { name: 'Respiratory Pathology', description: 'Atelectasis, obstructive/restrictive diseases, pulmonary infections, lung tumors, pleural diseases' },
          { name: 'Renal & Urinary Pathology', description: 'Glomerular diseases, tubular/interstitial diseases, nephrolithiasis, renal tumors, bladder cancer' }
        ]
      },
      {
        name: 'Systemic Pathology II',
        subdivisions: [
          { name: 'Gastrointestinal Pathology', description: 'Esophagitis, PUD, IBD, polyps, colorectal cancer, appendicitis' },
          { name: 'Hepatobiliary & Pancreas', description: 'Hepatitis, cirrhosis, liver tumors, cholecystitis, pancreatitis, pancreatic cancer' },
          { name: 'Endocrine Pathology', description: 'Pituitary adenomas, thyroiditis, thyroid tumors, adrenal disorders, diabetes mellitus' }
        ]
      },
      {
        name: 'Systemic Pathology III',
        subdivisions: [
          { name: 'Hematologic Pathology', description: 'Anemias, leukemias, lymphomas, plasma cell dyscrasias, bleeding disorders' },
          { name: 'CNS Pathology', description: 'Cerebral edema, stroke, CNS infections, demyelinating diseases, neurodegeneration, CNS tumors' },
          { name: 'Musculoskeletal & Skin', description: 'Osteoporosis, osteomyelitis, bone tumors, arthritis, soft tissue tumors, common dermatoses' }
        ]
      }
    ]
  },
  {
    name: 'Pharmacology',
    divisions: [
      {
        name: 'General Principles',
        subdivisions: [
          { name: 'Pharmacokinetics', description: 'Absorption, distribution, metabolism (Phase I/II), excretion, half-life, clearance' },
          { name: 'Pharmacodynamics', description: 'Receptor binding, agonists/antagonists, dose-response curves, therapeutic index' }
        ]
      },
      {
        name: 'Autonomic Drugs',
        subdivisions: [
          { name: 'Cholinergic Drugs', description: 'Muscarinic/nicotinic agonists, AChE inhibitors, antimuscarinics, neuromuscular blockers' },
          { name: 'Adrenergic Drugs', description: 'Sympathomimetics (alpha/beta agonists), sympatholytics (alpha/beta blockers)' }
        ]
      },
      {
        name: 'Cardiovascular Pharmacology',
        subdivisions: [
          { name: 'Antihypertensives', description: 'Diuretics, ACE inhibitors, ARBs, CCBs, beta-blockers, vasodilators' },
          { name: 'Heart Failure & Angina', description: 'Digoxin, nitrates, beta-blockers, CCBs, ranolazine' },
          { name: 'Antiarrhythmics', description: 'Classes I, II, III, and IV; adenosine, magnesium' },
          { name: 'Lipid-Lowering Drugs', description: 'Statins, fibrates, niacin, bile acid sequestrants, PCSK9 inhibitors' }
        ]
      },
      {
        name: 'CNS Pharmacology',
        subdivisions: [
          { name: 'Anesthetics & Sedatives', description: 'Inhaled/IV anesthetics, local anesthetics, benzodiazepines, barbiturates' },
          { name: 'Psychotropic Drugs', description: 'Antidepressants (SSRIs, SNRIs, TCAs, MAOIs), antipsychotics (typical/atypical), lithium' },
          { name: 'Neurologic Drugs', description: 'Antiepileptics, Parkinson\'s drugs, Alzheimer\'s drugs, triptans' },
          { name: 'Drugs of Abuse', description: 'Opioids, stimulants, depressants, hallucinogens' }
        ]
      },
      {
        name: 'Antimicrobials',
        subdivisions: [
          { name: 'Antibacterial Drugs', description: 'Cell wall inhibitors, protein synthesis inhibitors, fluoroquinolones, sulfonamides' },
          { name: 'Antiviral & Antifungal', description: 'Anti-herpes, anti-HIV, anti-hepatitis; azoles, polyenes, echinocandins' },
          { name: 'Antiparasitic Drugs', description: 'Antimalarials, antihelminthics' }
        ]
      },
      {
        name: 'Endocrine & Other Systems',
        subdivisions: [
          { name: 'Endocrine Pharmacology', description: 'Insulin, oral hypoglycemics, thyroid drugs, steroids, bisphosphonates' },
          { name: 'GI & Respiratory', description: 'PPIs, H2 blockers, antiemetics; albuterol, inhaled steroids, leukotriene modifiers' },
          { name: 'Hematologic & Cancer', description: 'Anticoagulants, thrombolytics, antiplatelets; cytotoxic chemo, targeted therapy' }
        ]
      }
    ]
  },

  // CLINICAL
  {
    name: 'Cardiology',
    divisions: [
      {
        name: 'Ischemic Heart Disease',
        subdivisions: [
          { name: 'Stable Angina', description: 'Pathophysiology, diagnosis (stress testing), medical management, revascularization indications' },
          { name: 'Acute Coronary Syndrome', description: 'Unstable angina, NSTEMI, STEMI; EKG changes, biomarkers, emergency management, PCI/CABG' },
          { name: 'Complications of MI', description: 'Arrhythmias, papillary muscle rupture, VSD, free wall rupture, LV aneurysm' }
        ]
      },
      {
        name: 'Heart Failure',
        subdivisions: [
          { name: 'Chronic Heart Failure', description: 'HFrEF vs HFpEF, NYHA/ACC staging, GDMT (ACEi/ARB/ARNI, beta-blockers, MRA, SGLT2i)' },
          { name: 'Acute Decompensated HF', description: 'Pulmonary edema, cardiogenic shock, diuretics, inotropes, vasopressors' },
          { name: 'Right-Sided Heart Failure', description: 'Causes (pulmonary HTN, RV infarction), clinical signs (JVD, edema, hepatomegaly)' }
        ]
      },
      {
        name: 'Valvular Heart Disease',
        subdivisions: [
          { name: 'Aortic Valve Disease', description: 'Aortic stenosis (calcific, bicuspid), aortic regurgitation; murmurs, management' },
          { name: 'Mitral Valve Disease', description: 'Mitral stenosis (rheumatic), mitral regurgitation (prolapse, functional); murmurs, management' },
          { name: 'Tricuspid & Pulmonary', description: 'Tricuspid regurgitation (endocarditis, RV dilation), pulmonary stenosis' }
        ]
      },
      {
        name: 'Arrhythmias & Conduction',
        subdivisions: [
          { name: 'Supraventricular', description: 'Atrial fibrillation, atrial flutter, SVT (AVNRT, WPW), anticoagulation strategies' },
          { name: 'Ventricular', description: 'Premature ventricular contractions, VT, VF, sudden cardiac death, ICD indications' },
          { name: 'Bradyarrhythmias', description: 'Sinus bradycardia, AV blocks (1st, 2nd, 3rd degree), sick sinus syndrome, pacemakers' }
        ]
      },
      {
        name: 'Myocardial & Pericardial',
        subdivisions: [
          { name: 'Cardiomyopathies', description: 'Dilated, hypertrophic (HOCM), restrictive cardiomyopathy' },
          { name: 'Pericardial Disease', description: 'Acute pericarditis, pericardial effusion, cardiac tamponade, constrictive pericarditis' },
          { name: 'Myocarditis & Endocarditis', description: 'Infective endocarditis (Duke criteria, prophylaxis), viral myocarditis' }
        ]
      },
      {
        name: 'Vascular & Congenital',
        subdivisions: [
          { name: 'Hypertension', description: 'Primary vs secondary, hypertensive urgency/emergency, management' },
          { name: 'Aortic & Peripheral', description: 'Aortic aneurysm, aortic dissection, peripheral artery disease (ABI, claudication)' },
          { name: 'Adult Congenital', description: 'ASD, VSD, PDA, Coarctation of the aorta, Tetralogy of Fallot' }
        ]
      }
    ]
  },
  {
    name: 'Neurology',
    divisions: [
      {
        name: 'Vascular Neurology',
        subdivisions: [
          { name: 'Ischemic Stroke', description: 'Anterior vs posterior circulation, tPA/thrombectomy windows, secondary prevention' },
          { name: 'Hemorrhagic Stroke', description: 'Intracerebral hemorrhage, subarachnoid hemorrhage (aneurysms), management of ICP' },
          { name: 'TIA & Small Vessel', description: 'TIA workup, lacunar strokes, vascular dementia' }
        ]
      },
      {
        name: 'Epilepsy & Seizures',
        subdivisions: [
          { name: 'Seizure Types', description: 'Focal vs generalized, absence, myoclonic, tonic-clonic' },
          { name: 'Epilepsy Management', description: 'Antiepileptic drug selection, surgical options, EEG findings' },
          { name: 'Status Epilepticus', description: 'Definition, emergency treatment algorithm' }
        ]
      },
      {
        name: 'Movement Disorders',
        subdivisions: [
          { name: 'Parkinsonism', description: 'Parkinson disease, Parkinson-plus syndromes (MSA, PSP, CBD)' },
          { name: 'Hyperkinetic Disorders', description: 'Essential tremor, Huntington disease, dystonia, chorea, tics' }
        ]
      },
      {
        name: 'Dementia & Cognitive',
        subdivisions: [
          { name: 'Alzheimer Disease', description: 'Pathophysiology, clinical stages, management' },
          { name: 'Other Dementias', description: 'Vascular, Lewy body, Frontotemporal dementia, NPH' }
        ]
      },
      {
        name: 'Demyelinating & Inflammatory',
        subdivisions: [
          { name: 'Multiple Sclerosis', description: 'Phenotypes, diagnostic criteria (McDonald), acute vs chronic management' },
          { name: 'Neuromyelitis Optica', description: 'NMO (Devic disease), anti-AQP4 antibodies' },
          { name: 'CNS Infections', description: 'Meningitis, encephalitis, brain abscess, neurosyphilis' }
        ]
      },
      {
        name: 'Neuromuscular Disorders',
        subdivisions: [
          { name: 'Motor Neuron Disease', description: 'ALS, spinal muscular atrophy' },
          { name: 'Peripheral Neuropathy', description: 'Diabetic, toxic, hereditary (CMT), inflammatory (GBS, CIDP)' },
          { name: 'NMJ & Muscle', description: 'Myasthenia gravis, Lambert-Eaton, inflammatory myopathies, muscular dystrophies' }
        ]
      },
      {
        name: 'Headache & Pain',
        subdivisions: [
          { name: 'Primary Headaches', description: 'Migraine, tension-type, cluster headache; abortive and preventive therapy' },
          { name: 'Secondary Headaches', description: 'Idiopathic intracranial hypertension, giant cell arteritis, trigeminal neuralgia' }
        ]
      }
    ]
  },
  {
    name: 'Gastroenterology',
    divisions: [
      {
        name: 'Esophagus & Stomach',
        subdivisions: [
          { name: 'Esophageal Disorders', description: 'GERD, eosinophilic esophagitis, motility (achalasia), Barrett\'s, cancer' },
          { name: 'Gastric Disorders', description: 'Gastritis, PUD (H. pylori, NSAIDs), gastroparesis, gastric cancer' }
        ]
      },
      {
        name: 'Small & Large Intestine',
        subdivisions: [
          { name: 'Inflammatory Bowel Disease', description: 'Crohn disease vs Ulcerative colitis; extra-intestinal manifestations, management' },
          { name: 'Malabsorption & Celiac', description: 'Celiac disease, lactose intolerance, SIBO, pancreatic insufficiency' },
          { name: 'Colorectal Disorders', description: 'Diverticular disease, polyps, colorectal cancer screening and management' },
          { name: 'Functional & Motility', description: 'Irritable bowel syndrome (IBS), chronic constipation, diarrhea (acute/chronic)' }
        ]
      },
      {
        name: 'Hepatology',
        subdivisions: [
          { name: 'Chronic Liver Disease', description: 'Cirrhosis, portal hypertension, ascites, encephalopathy, varices' },
          { name: 'Viral Hepatitis', description: 'Acute and chronic management of Hep A, B, C, D, E' },
          { name: 'Metabolic & Autoimmune', description: 'NAFLD/NASH, alcoholic liver disease, Wilson, hemochromatosis, AIH, PBC, PSC' },
          { name: 'Liver Masses', description: 'Hepatocellular carcinoma, hemangioma, adenoma, focal nodular hyperplasia' }
        ]
      },
      {
        name: 'Biliary & Pancreas',
        subdivisions: [
          { name: 'Biliary Tract', description: 'Cholelithiasis, cholecystitis, choledocholithiasis, cholangitis' },
          { name: 'Pancreatic Disorders', description: 'Acute pancreatitis (etiology, severity), chronic pancreatitis, pancreatic adenocarcinoma' }
        ]
      },
      {
        name: 'GI Bleeding',
        subdivisions: [
          { name: 'Upper GI Bleed', description: 'Variceal vs non-variceal, management, endoscopy' },
          { name: 'Lower GI Bleed', description: 'Diverticular, angiodysplasia, hemorrhoids, ischemic colitis' }
        ]
      }
    ]
  },
  {
    name: 'Endocrinology',
    divisions: [
      {
        name: 'Glucose Metabolism',
        subdivisions: [
          { name: 'Diabetes Mellitus', description: 'Type 1, Type 2, screening, diagnosis, long-term management, GLP-1/SGLT2i' },
          { name: 'Diabetes Complications', description: 'DKA, HHS, retinopathy, nephropathy, neuropathy, diabetic foot' },
          { name: 'Hypoglycemia', description: 'Insulinoma, reactive hypoglycemia, fasting hypoglycemia' }
        ]
      },
      {
        name: 'Thyroid Disorders',
        subdivisions: [
          { name: 'Hyperthyroidism', description: 'Graves, toxic multinodular goiter, thyroid storm, subacute thyroiditis' },
          { name: 'Hypothyroidism', description: 'Hashimoto, iodine deficiency, central hypothyroidism, myxedema coma' },
          { name: 'Thyroid Nodules', description: 'Workup (TSH, US, FNA), thyroid cancers (papillary, follicular, medullary, anaplastic)' }
        ]
      },
      {
        name: 'Adrenal Disorders',
        subdivisions: [
          { name: 'Adrenal Insufficiency', description: 'Primary (Addison), secondary, adrenal crisis management' },
          { name: 'Adrenal Excess', description: 'Cushing syndrome, primary aldosteronism (Conn), pheochromocytoma' },
          { name: 'Congenital Adrenal Hyperplasia', description: '21-hydroxylase deficiency, other variants' }
        ]
      },
      {
        name: 'Pituitary & Hypothalamus',
        subdivisions: [
          { name: 'Anterior Pituitary', description: 'Prolactinoma, acromegaly, Cushing disease, hypopituitarism' },
          { name: 'Posterior Pituitary', description: 'Diabetes insipidus (central/nephrogenic), SIADH' }
        ]
      },
      {
        name: 'Calcium & Bone',
        subdivisions: [
          { name: 'Parathyroid Disorders', description: 'Primary/secondary/tertiary hyperparathyroidism, hypoparathyroidism' },
          { name: 'Bone Health', description: 'Osteoporosis (DXA, bisphosphonates), Osteomalacia, Paget disease' }
        ]
      },
      {
        name: 'Reproductive Endocrinology',
        subdivisions: [
          { name: 'Female Reproductive', description: 'PCOS, amenorrhea, premature ovarian failure, menopause' },
          { name: 'Male Reproductive', description: 'Hypogonadism (primary/secondary), gynecomastia' }
        ]
      }
    ]
  },
  {
    name: 'Pulmonology',
    divisions: [
      {
        name: 'Obstructive Lung Disease',
        subdivisions: [
          { name: 'Asthma', description: 'Diagnosis (PFTs), step-wise management, acute exacerbation' },
          { name: 'COPD', description: 'Chronic bronchitis, emphysema, GOLD criteria, management, oxygen therapy' },
          { name: 'Bronchiectasis', description: 'Cystic fibrosis, primary ciliary dyskinesia, allergic bronchopulmonary aspergillosis' }
        ]
      },
      {
        name: 'Restrictive Lung Disease',
        subdivisions: [
          { name: 'Interstitial Lung Disease', description: 'Idiopathic pulmonary fibrosis, sarcoidosis, pneumoconioses, hypersensitivity pneumonitis' },
          { name: 'Extrapulmonary Restriction', description: 'Obesity-hypoventilation, kyphoscoliosis, neuromuscular weakness' }
        ]
      },
      {
        name: 'Pulmonary Vascular Disease',
        subdivisions: [
          { name: 'Venous Thromboembolism', description: 'DVT, pulmonary embolism (Wells criteria, PERC, anticoagulation)' },
          { name: 'Pulmonary Hypertension', description: 'WHO Groups 1-5, diagnosis (right heart cath), management' }
        ]
      },
      {
        name: 'Infectious & Neoplastic',
        subdivisions: [
          { name: 'Pneumonia', description: 'CAP, HAP/VAP, aspiration pneumonia, fungal/opportunistic infections' },
          { name: 'Tuberculosis', description: 'Latent vs active TB, screening, multi-drug treatment, side effects' },
          { name: 'Lung Cancer', description: 'Small cell vs non-small cell, paraneoplastic syndromes, staging' }
        ]
      },
      {
        name: 'Pleural & Sleep Disorders',
        subdivisions: [
          { name: 'Pleural Disease', description: 'Pleural effusion (Light\'s criteria), pneumothorax (tension vs spontaneous)' },
          { name: 'Sleep-Disordered Breathing', description: 'Obstructive sleep apnea, central sleep apnea, obesity hypoventilation' }
        ]
      }
    ]
  },
  {
    name: 'Surgery',
    divisions: [
      {
        name: 'General Surgery',
        subdivisions: [
          { name: 'Acute Abdomen', description: 'Differential diagnosis, appendicitis, cholecystitis, bowel obstruction, perforation' },
          { name: 'Hernias', description: 'Inguinal (direct/indirect), femoral, ventral, incisional; incarceration and strangulation' },
          { name: 'Breast Surgery', description: 'Benign masses, breast cancer (ductal/lobular), surgical options (lumpectomy/mastectomy)' },
          { name: 'Colorectal Surgery', description: 'Diverticulitis, colorectal cancer, hemorrhoids, anal fissures, abscesses' },
          { name: 'Endocrine Surgery', description: 'Thyroidectomy, parathyroidectomy, adrenalectomy' }
        ]
      },
      {
        name: 'Trauma & Critical Care',
        subdivisions: [
          { name: 'Initial Evaluation', description: 'ATLS primary survey (ABCDEs), secondary survey, adjuncts' },
          { name: 'Thoracic & Abdominal Trauma', description: 'Pneumothorax, hemothorax, cardiac tamponade; FAST exam, solid organ injury' },
          { name: 'Burns & Resuscitation', description: 'Classification, Parkland formula, inhalation injury, wound management' },
          { name: 'Surgical Critical Care', description: 'Shock (hemorrhagic, septic, neurogenic), ventilator management, nutrition' }
        ]
      },
      {
        name: 'Vascular Surgery',
        subdivisions: [
          { name: 'Aortic Disease', description: 'Abdominal aortic aneurysm (AAA) screening and repair, aortic dissection' },
          { name: 'Peripheral & Carotid', description: 'Chronic limb-threatening ischemia, carotid artery stenosis (CEA vs stenting)' }
        ]
      },
      {
        name: 'Surgical Specialties',
        subdivisions: [
          { name: 'Urology', description: 'Nephrolithiasis, BPH, prostate cancer, testicular torsion, hematuria workup' },
          { name: 'Orthopedic Surgery', description: 'Fracture management, compartment syndrome, septic arthritis, osteoarthritis' },
          { name: 'Neurosurgery', description: 'Traumatic brain injury (epidural/subdural), spinal cord compression, brain tumors' },
          { name: 'Pediatric Surgery', description: 'Hypertrophic pyloric stenosis, intussusception, Hirschsprung disease, malrotation' }
        ]
      }
    ]
  },
  {
    name: 'OB/GYN',
    divisions: [
      {
        name: 'Obstetrics',
        subdivisions: [
          { name: 'Prenatal Care', description: 'Routine screening, genetic testing, nutrition, normal physiological changes' },
          { name: 'Maternal Complications', description: 'Hypertensive disorders (preeclampsia), gestational diabetes, placenta previa/abruption' },
          { name: 'Fetal Complications', description: 'Intrauterine growth restriction (IUGR), fetal distress, multiple gestations' },
          { name: 'Labor & Delivery', description: 'Stages of labor, fetal heart rate monitoring, induction, operative delivery' },
          { name: 'Postpartum Care', description: 'Postpartum hemorrhage, endometritis, breastfeeding, contraception' }
        ]
      },
      {
        name: 'Gynecology',
        subdivisions: [
          { name: 'Benign Disorders', description: 'Abnormal uterine bleeding, fibroids, endometriosis, pelvic inflammatory disease' },
          { name: 'Reproductive Endocrinology', description: 'PCOS, infertility workup, amenorrhea (primary/secondary), menopause' },
          { name: 'Urogynecology', description: 'Urinary incontinence (stress/urge), pelvic organ prolapse' }
        ]
      },
      {
        name: 'Gynecologic Oncology',
        subdivisions: [
          { name: 'Cervical & Vulvar', description: 'Pap smear guidelines, HPV, cervical dysplasia, vulvar cancer' },
          { name: 'Uterine & Ovarian', description: 'Endometrial hyperplasia/cancer, ovarian cysts and tumors (epithelial/germ cell)' }
        ]
      }
    ]
  },
  {
    name: 'Pediatrics',
    divisions: [
      {
        name: 'General Pediatrics',
        subdivisions: [
          { name: 'Growth & Development', description: 'Developmental milestones, growth charts, failure to thrive, puberty' },
          { name: 'Nutrition & Prevention', description: 'Breastfeeding, vitamin supplementation, immunizations, lead screening' },
          { name: 'Adolescent Medicine', description: 'Eating disorders, substance use, psychosocial screening (HEADSS)' }
        ]
      },
      {
        name: 'Neonatology',
        subdivisions: [
          { name: 'Neonatal Care', description: 'APGAR scores, routine newborn care, neonatal resuscitation' },
          { name: 'Neonatal Pathologies', description: 'Respiratory distress syndrome, necrotizing enterocolitis, neonatal jaundice' }
        ]
      },
      {
        name: 'Pediatric Infectious Disease',
        subdivisions: [
          { name: 'Viral Exanthems', description: 'Measles, mumps, rubella, varicella, roseola, erythema infectiosum' },
          { name: 'Respiratory Infections', description: 'Croup, bronchiolitis (RSV), pertussis, epiglottitis, otitis media' },
          { name: 'Other Infections', description: 'Meningitis, urinary tract infections, osteomyelitis' }
        ]
      },
      {
        name: 'Pediatric Specialties',
        subdivisions: [
          { name: 'Cardiology', description: 'Congenital heart disease (left-to-right vs right-to-left shunts), Kawasaki disease' },
          { name: 'Gastroenterology', description: 'Pyloric stenosis, intussusception, Meckel diverticulum, Hirschsprung' },
          { name: 'Nephrology & Hema/Onco', description: 'HSP, HUS, PSGN; sickle cell disease, pediatric leukemias, Wilms tumor' }
        ]
      }
    ]
  },
  {
    name: 'Psychiatry',
    divisions: [
      {
        name: 'Mood & Psychotic Disorders',
        subdivisions: [
          { name: 'Depressive Disorders', description: 'MDD, persistent depressive disorder, seasonal affective, peripartum' },
          { name: 'Bipolar Disorders', description: 'Bipolar I, Bipolar II, cyclothymic disorder, mania vs hypomania' },
          { name: 'Schizophrenia Spectrum', description: 'Schizophrenia, schizoaffective, delusional disorder, brief psychotic disorder' }
        ]
      },
      {
        name: 'Anxiety & Trauma',
        subdivisions: [
          { name: 'Anxiety Disorders', description: 'Generalized anxiety, panic disorder, social anxiety, specific phobias' },
          { name: 'Trauma & Stressor', description: 'PTSD, acute stress disorder, adjustment disorder' },
          { name: 'OCD & Related', description: 'Obsessive-compulsive disorder, body dysmorphic disorder, hoarding' }
        ]
      },
      {
        name: 'Substance & Personality',
        subdivisions: [
          { name: 'Substance Use Disorders', description: 'Alcohol, opioids, stimulants, sedative-hypnotics; intoxication and withdrawal' },
          { name: 'Personality Disorders', description: 'Cluster A (odd/eccentric), Cluster B (dramatic/erratic), Cluster C (anxious/fearful)' }
        ]
      },
      {
        name: 'Other Psychiatric Disorders',
        subdivisions: [
          { name: 'Childhood Disorders', description: 'ADHD, autism spectrum, conduct disorder, oppositional defiant' },
          { name: 'Eating & Somatic', description: 'Anorexia, bulimia, binge-eating; somatic symptom, conversion, factitious' },
          { name: 'Cognitive Disorders', description: 'Delirium, neurocognitive disorders (dementia)' }
        ]
      }
    ]
  },
  {
    name: 'Hematology/Oncology',
    divisions: [
      {
        name: 'Anemias',
        subdivisions: [
          { name: 'Microcytic Anemia', description: 'Iron deficiency, thalassemia, sideroblastic anemia, anemia of chronic disease' },
          { name: 'Macrocytic Anemia', description: 'B12 deficiency, folate deficiency, non-megaloblastic causes' },
          { name: 'Hemolytic Anemia', description: 'Intrinsic (sickle cell, G6PD, HS) vs extrinsic (AIHA, microangiopathic)' }
        ]
      },
      {
        name: 'Hemostasis & Thrombosis',
        subdivisions: [
          { name: 'Platelet Disorders', description: 'ITP, TTP, HUS, von Willebrand disease, qualitative defects' },
          { name: 'Coagulation Disorders', description: 'Hemophilia A/B/C, Vitamin K deficiency, liver disease, DIC' },
          { name: 'Hypercoagulable States', description: 'Factor V Leiden, prothrombin mutation, antithrombin deficiency, APLS' }
        ]
      },
      {
        name: 'Hematologic Malignancies',
        subdivisions: [
          { name: 'Leukemias', description: 'Acute (ALL, AML) and chronic (CLL, CML) leukemias; diagnosis and management' },
          { name: 'Lymphomas', description: 'Hodgkin lymphoma vs Non-Hodgkin lymphoma (diffuse large B-cell, follicular, etc.)' },
          { name: 'Plasma Cell Dyscrasias', description: 'Multiple myeloma, MGUS, Waldenström macroglobulinemia' }
        ]
      },
      {
        name: 'Solid Tumors & Emergencies',
        subdivisions: [
          { name: 'Common Solid Tumors', description: 'Breast, lung, colorectal, prostate, and testicular cancer basics' },
          { name: 'Oncologic Emergencies', description: 'Tumor lysis syndrome, hypercalcemia of malignancy, SVC syndrome, spinal cord compression' }
        ]
      }
    ]
  },
  {
    name: 'Nephrology',
    divisions: [
      {
        name: 'Glomerular Disease',
        subdivisions: [
          { name: 'Nephrotic Syndrome', description: 'Minimal change disease, FSGS, membranous nephropathy, diabetic nephropathy' },
          { name: 'Nephritic Syndrome', description: 'PSGN, IgA nephropathy, Alport syndrome, RPGN, lupus nephritis' }
        ]
      },
      {
        name: 'Acute & Chronic Kidney Injury',
        subdivisions: [
          { name: 'Acute Kidney Injury', description: 'Prerenal, intrinsic (ATN, AIN), and postrenal causes; management' },
          { name: 'Chronic Kidney Disease', description: 'Staging, complications (anemia, bone disease), dialysis indications' }
        ]
      },
      {
        name: 'Electrolytes & Acid-Base',
        subdivisions: [
          { name: 'Sodium & Water Balance', description: 'Hyponatremia (SIADH, volume depletion), hypernatremia' },
          { name: 'Potassium & Other Ions', description: 'Hypo/hyperkalemia, calcium, magnesium, and phosphate disorders' },
          { name: 'Acid-Base Disorders', description: 'Metabolic acidosis (anion gap), metabolic alkalosis, respiratory compensation' }
        ]
      },
      {
        name: 'Other Renal Disorders',
        subdivisions: [
          { name: 'Tubulointerstitial & Cystic', description: 'Polycystic kidney disease, medullary cystic disease, fanconi syndrome' },
          { name: 'Renovascular & Stones', description: 'Renal artery stenosis, nephrolithiasis (calcium, oxalate, uric acid, struvite)' }
        ]
      }
    ]
  },
  {
    name: 'Rheumatology',
    divisions: [
      {
        name: 'Connective Tissue Diseases',
        subdivisions: [
          { name: 'Rheumatoid Arthritis', description: 'Clinical features, extra-articular manifestations, DMARD therapy' },
          { name: 'Systemic Lupus Erythematosus', description: 'Diagnostic criteria, lupus nephritis, drug-induced lupus, APLS' },
          { name: 'Systemic Sclerosis & Sjogren', description: 'Diffuse vs limited scleroderma, Sjogren syndrome clinical features' },
          { name: 'Inflammatory Myopathies', description: 'Polymyositis, dermatomyositis, inclusion body myositis' }
        ]
      },
      {
        name: 'Arthropathies',
        subdivisions: [
          { name: 'Crystal Arthropathies', description: 'Gout (acute/chronic management), pseudogout (CPPD)' },
          { name: 'Spondyloarthropathies', description: 'Ankylosing spondylitis, psoriatic arthritis, reactive arthritis, IBD-associated' },
          { name: 'Infectious Arthritis', description: 'Septic arthritis (gonococcal vs non-gonococcal), Lyme disease' }
        ]
      },
      {
        name: 'Vasculitis',
        subdivisions: [
          { name: 'Large & Medium Vessel', description: 'Giant cell arteritis, Takayasu, Polyarteritis nodosa, Kawasaki' },
          { name: 'Small Vessel Vasculitis', description: 'GPA (Wegener), MPA, EGPA (Churg-Strauss), IgA vasculitis (HSP)' }
        ]
      }
    ]
  },
  {
    name: 'Dermatology',
    divisions: [
      {
        name: 'Inflammatory Dermatoses',
        subdivisions: [
          { name: 'Papulosquamous', description: 'Psoriasis, lichen planus, pityriasis rosea' },
          { name: 'Eczematous', description: 'Atopic dermatitis, contact dermatitis, seborrheic dermatitis' },
          { name: 'Blistering Diseases', description: 'Pemphigus vulgaris, bullous pemphigoid, dermatitis herpetiformis' }
        ]
      },
      {
        name: 'Infectious & Neoplastic',
        subdivisions: [
          { name: 'Skin Infections', description: 'Bacterial (impetigo, cellulitis), viral (HSV, VZV, HPV), fungal (tinea)' },
          { name: 'Skin Malignancy', description: 'Basal cell carcinoma, squamous cell carcinoma, melanoma, Kaposi sarcoma' }
        ]
      },
      {
        name: 'Systemic Manifestations',
        subdivisions: [
          { name: 'Acne & Rosacea', description: 'Pathogenesis, grading, topical and systemic treatments' },
          { name: 'Drug Eruptions', description: 'Exanthematous, urticaria, SJS/TEN, fixed drug eruption' },
          { name: 'Cutaneous Markers', description: 'Acanthosis nigricans, erythema nodosum, pyoderma gangrenosum' }
        ]
      }
    ]
  },
  {
    name: 'Ethics & Biostatistics',
    divisions: [
      {
        name: 'Medical Ethics',
        subdivisions: [
          { name: 'Ethical Principles', description: 'Autonomy, beneficence, non-maleficence, justice' },
          { name: 'Informed Consent', description: 'Capacity, disclosure, voluntariness, emergency exceptions' },
          { name: 'Confidentiality', description: 'HIPAA, exceptions (harm to self/others, reportable diseases)' },
          { name: 'End-of-Life Care', description: 'Advance directives, DNR/DNI, palliative care, brain death' }
        ]
      },
      {
        name: 'Biostatistics',
        subdivisions: [
          { name: 'Study Design', description: 'Cohort, case-control, cross-sectional, RCT, meta-analysis' },
          { name: 'Statistical Inference', description: 'Null hypothesis, p-values, Type I/II errors, power, confidence intervals' },
          { name: 'Measures of Association', description: 'Relative risk, odds ratio, attributable risk, NNT/NNH' },
          { name: 'Screening & Diagnostic', description: 'Sensitivity, specificity, PPV, NPV, likelihood ratios' }
        ]
      },
      {
        name: 'Patient Safety & Quality',
        subdivisions: [
          { name: 'Quality Improvement', description: 'Root cause analysis, PDSA cycle, Swiss cheese model' },
          { name: 'Medical Errors', description: 'Active vs latent errors, communication failures, handoffs' }
        ]
      }
    ]
  }
];
