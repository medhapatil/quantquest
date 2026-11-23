# Adding questions without installing anything

You can edit questions entirely in GitHub's website. Vercel automatically redeploys when you commit to the connected repository.

## Add one question

1. Open your GitHub repository and click `data`.
2. Open the matching category file, such as `01-probability.json`.
3. Click the pencil icon (**Edit this file**).
4. Go to the end of the JSON array. Add a comma after the existing final question object, then paste a new question object *before* the closing `]`.
5. Change its `id` to a new unique value (for example `01-011`), and fill in the fields. Keep the category spelling identical to the existing entries.
6. Click **Commit changes**. Vercel should deploy the updated bank automatically. Open the Vercel deployment page to check the build status.

Use `templates/question-template.json` as a complete working example; copy the object inside the array, not the surrounding square brackets.

## Add many questions at once

Create a new JSON file in `data` (e.g. `01-probability-extra.json`) containing an array of question objects. Then edit `data/index.ts` to import it and append its questions to the exported `questions` array. This extra step is necessary: new files are **not** automatically loaded by the browser bundle. Existing category files require no `index.ts` changes.

## Multiple choice

Use `"inputType": "multiple-choice"`, add `"options": ["2", "3", "4", "5"]`, and set `"answer": "4"` (an exact option string). Numeric questions use `"inputType": "numeric"` and a numeric string answer such as `"0.25"`.

## Writing good questions

Use a unique ID, one of the six exact category names, a subtopic, beginner/intermediate/advanced difficulty, a precise question, a correct answer, a useful hint, a step-by-step explanation (45+ characters), positive estimatedSeconds, and at least one tag. Check the solution yourself; schema validation cannot prove mathematical correctness.

## Automatic checks

The repository includes `npm run validate` and `npm test`. To enforce these on every Vercel build, the `build` script runs them before `next build`. A bad JSON edit will fail deployment rather than silently publish broken questions. Fix the file in GitHub and commit again.

## Question generation without runtime AI

You may ask ChatGPT to *draft* 10–50 original questions in this JSON format, then check each answer and explanation before pasting them into GitHub. QuantQuest itself never calls an AI service.
