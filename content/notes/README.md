# 9.00 Introduction to Psychology — Note System

## Overview
Personal course notes for MIT 9.00 (Fall 2011, John Gabrieli).

**Format**: Markdown → Obsidian vault
**Language**: English (primary) + Chinese annotations (terms)
**Structure**: Modular, cross-linked, optimized for spaced retrieval

---

## Note Template Structure

Every lecture follows this 9-section framework:

1. **Driving Question** — What is this lecture really trying to answer?
2. **Key Concepts** (≤5) — Table: term | one-liner definition | confusable neighbor
3. **Evidence Chain** — Classical studies: design | result | inference | limitations
4. **Theoretical Tension** — Which opposing views does this lecture test? What evidence discriminates?
5. **Levels of Analysis** — How the conclusion holds at neural/cognitive/behavioral/social levels
6. **Boundaries & Failures** — When does this model break? Developmental/clinical/cross-cultural exceptions?
7. **Connections** — Links to prior lectures and future ones; one real-world example (student's own)
8. **Self-Test** (closed-notebook) — 3 applied questions; write before checking notes
9. **Open Questions** — Unresolved tensions or gaps left for next lecture

---

## Lecture Groups (Parallel Processing)

### ✅ Group 0: Foundation
- **Lec 10: Memory I** ✓
  - Punch bowl vs. camera; forgetting: decay vs. interference; false memories

### 🧠 Group 1: Neuroscience & Perception
Shared theme: **Bottom-up vs. top-down**; binding problem; receptive fields
- Introduction
- Science & Research (methods preview)
- **Brain I (Neuroanatomy, localization, lateralization)** ✓
- **Brain II (Research methods: lesion, TMS, EEG/MEG, PET/fMRI; empathy & vegetative-state case studies)** ✓
- Vision I (Eyes → V1; receptive fields; color)
- Vision II (Shape, motion, binding)
- Attention (Selective filtering; capacity)

### 🧩 Group 2: Learning, Memory, Cognition
Shared theme: **Encoding depth, organizational structure, transfer**
- Learning (Classical/operant conditioning; reinforcement schedules)
- Memory II (H.M. & system dissociation; amnesia types)
- Thinking (Heuristics, reasoning, judgment biases)
- Language I (Phonology → semantics; acquisition)

### 🌀 Group 3: States & Motivation
Shared theme: **Arousal, reward prediction, subjective report**
- Consciousness (Awareness; sleep; altered states)
- Emotion & Motivation (Amygdala; appraisal; drives)

### 📊 Group 4: Individual Differences & Development
Shared theme: **Stability, trajectories, measurement**
- Intelligence (g factor; testing; heritability)
- Personality (Traits; Big Five; stability)
- Child Development (Attachment, cognition, language growth)
- Adult Development (Cognitive aging, life stages)

### 🏥 Group 5: Applied & Clinical
Shared theme: **When systems fail or interact; real-world stakes**
- Psychopathology I (Anxiety, mood disorders)
- Psychopathology II (Schizophrenia, personality disorders)
- Stress (Appraisal, coping, physiology)
- Social Psychology I (Attribution, conformity, persuasion)
- Social Psychology II (Prejudice, aggression, attraction)

---

## Obsidian Setup

### Folder Structure
```
9.00-Psychology/
├── lectures/
│   ├── Group-1-Neuroscience/
│   │   ├── Lec-01-Introduction.md
│   │   ├── Lec-04-Brain-I.md
│   │   └── ...
│   ├── Group-2-Learning-Memory/
│   │   ├── Lec-10-Memory-I.md
│   │   ├── Lec-11-Memory-II.md
│   │   └── ...
│   └── ...
├── concepts/
│   ├── chunk.md
│   ├── receptive-field.md
│   └── ...
├── theorists/
│   ├── Gabrieli-John.md
│   ├── Sperling-George.md
│   └── ...
├── experiments/
│   ├── Sperling-partial-report.md
│   ├── Loftus-misinformation.md
│   └── ...
└── index.md
```

### Wiki Link Conventions
- **Cross-lecture reference**: `[[Lec 06 - Vision I#Receptive Fields]]`
- **Concept note**: `[[Chunk]]` or `[[Deep Processing]]`
- **Experiment**: `[[Sperling Partial Report (1960)]]`
- **Theorist**: `[[Gabrieli, John]]`

### Obsidian Plugins (Suggested)
- Dataview: Query tables of experiments by era, theorist, domain
- Graph view: Visualize connections between lectures and concepts
- Backlinks: See which lectures reference each concept

---

## Reference Materials

### Textbooks (as cited in syllabus)
- **K&R**: Kandel, E. R., & Schwartz, J. H. (1985). *The Biology of Mind & Behavior*
- **Stangor**: Stangor, C. (2010). *Introduction to Psychology*
- **Sacks**: Sacks, O. (1985). *The Man Who Mistook His Wife for a Hat* (neuropsychology case studies)

### Video Resources
- Each lecture has segmented video chapters (hosted on MIT OCW)
- Lecture slides (PDF) linked in each note's "References" section
- Archival footage (e.g., H.M., patient interviews)

---

## Timeline & Status

| Group | Target | Lecture Count | Status |
|-------|--------|---------------|--------|
| 0 | Foundation | 1 | ✅ Done |
| 1 | Neuroscience | 7 | ⏳ In progress |
| 2 | Learning/Cognition | 4 | ⏳ Queued |
| 3 | Consciousness | 2 | ⏳ Queued |
| 4 | Development | 4 | ⏳ Queued |
| 5 | Applied | 5 | ⏳ Queued |

---

## Notes for Future Obsidian Migration

1. **Metadata frontmatter** (for dataview queries):
   ```yaml
   ---
   lecture: 10
   topic: Memory I
   group: Foundation
   theorists: [Sperling, Miller, Craik, Lockhart, Godden, Baddeley, Loftus]
   key_concepts: [chunk, depth_of_processing, encoding_specificity, interference]
   connections: [Lec 05 - Attention, Lec 11 - Memory II]
   ---
   ```

2. **Transclusion** for shared study tables (e.g., all encoding manipulations across group 2)

3. **Daily notes** for exam prep (pull questions from `self-test` sections)

---

## Quick Navigation

**By Topic**: [Neuroscience](#group-1) | [Learning](#group-2) | [Consciousness](#group-3) | [Development](#group-4) | [Applied](#group-5)

**By Study Phase**: 
- First pass: Read "Driving Question" + "Evidence Chain"
- Review: "Key Concepts" table + "Theoretical Tension"
- Exam prep: "Self-Test" (closed-notebook) → check answers → "Connections" (synthesis)

---

Last updated: 2026-08-04
Next: Lec01-Introduction, Lec02-Science-Research (fill gap before Brain I/II), or continue forward to Lec05-Vision-I
