# Publication Output Contract

## Purpose

The Shopify App Review workflow has two different artifacts and they must not be mixed:

1. **Internal research/evidence** — working material used to reach a trustworthy conclusion.
2. **Final review** — the reader-facing article Blinto intends to publish, including selected publication-ready screenshots/images.

The research exists to support the article. It is not the article.

## Canonical Locations

- Internal working material should use `templates/review-research.md` and live outside `reviews/`.
- Final publication-ready articles use `templates/app-review.md` and live under `reviews/`.
- Publishable review images live under `public/images/reviews/[app-slug]/` and are referenced directly from the final Markdown article.
- `reviews/` is therefore a publication surface, not a research notebook.

## Final Review Standard

A file under `reviews/` must read as though it is already on the Blinto public website.

It should contain only content useful to the merchant/reader, such as:

- clear editorial title and summary
- early verdict
- what the app does
- transparent testing scope
- hands-on experience and findings
- selected real screenshots/images that demonstrate important workflows or findings
- important features
- current pricing and meaningful plan limits
- evidence-based strengths and limitations
- best-fit / poor-fit guidance
- final verdict
- useful FAQs where appropriate
- concise reviewer/testing disclosure

The structure may adapt to the app and search intent. The template is a baseline, not a requirement to manufacture empty sections.

## Publication Image Contract

Hands-on screenshots are part of the final article when they materially help the reader. The goal is not to publish every evidence screenshot; the goal is to publish the strongest visual evidence in the right place.

For each review:

1. Keep the complete/raw evidence inventory in the internal research workflow.
2. Select only screenshots that demonstrate important setup steps, workflows, features, pricing, outputs, or limitations discussed in the article.
3. Store selected publishable images under `public/images/reviews/[app-slug]/`.
4. Use descriptive lowercase filenames such as `pagefly-editor.webp`, `pagefly-pricing.webp`, or `pagefly-homepage-result.webp`.
5. Prefer WebP for screenshots where practical while preserving legibility.
6. Crop unnecessary browser/UI chrome when useful and redact any customer data, account information, email addresses, tokens, private store details, or other sensitive information.
7. Add meaningful alt text describing what the reader can see. Do not use filenames as alt text.
8. Place each image immediately beside the paragraph/section whose claim it supports.
9. Use a short caption only when it adds context that is not obvious from the image itself.
10. Verify every selected image renders correctly in the Review Hub Content Preview before SEO Check.

A final review should normally contain several useful screenshots when a Level 1 or Level 2 hands-on test produced them. There is no fixed screenshot count; relevance and readability matter more than volume.

**Raw evidence is internal. Selected visual evidence is editorial content.**

## Never Expose Internal Workflow in the Final Article

Do not include any of the following in `reviews/` output:

- AI instructions or prompts
- research methodology notes intended only for the team
- evidence tables used for internal verification
- TODO/TBD placeholders
- questions for the human reviewer
- "reviewer to confirm" notes
- missing-evidence queues
- raw screenshot inventories
- source-discovery notes
- unresolved internal contradictions
- claims-we-must-not-make lists
- SEO planning notes
- ClickUp workflow/checklists
- approval checklists
- preview/publishing operations
- commentary about what Claude/ChatGPT/the AI assistant could or could not access

If one of these affects the reader's decision, resolve it before publication or convert it into clean editorial qualification.

## Voice and Synthesis

The AI writer is expected to transform evidence into original editorial prose. It should not merely reorganize the research notes.

Use language such as:

- "In our hands-on test..."
- "We found..."
- "During setup..."
- "For merchants who..."
- "The main limitation we encountered..."

Only use first-hand language when supported by the named human reviewer's actual testing.

Developer claims should be attributed when not independently verified. Merchant feedback should be described as sourced patterns rather than Blinto's own experience.

## Publishability Gate

Before a review is considered complete, ask:

> Could a Blinto editor copy this article and its selected images into the public CMS today and publish it after only normal proofreading, formatting, links, and SEO metadata work?

If **no**, the article is not finished.

When useful publishable screenshots exist, missing images also means the publication package is not finished.

## AI Workflow

1. Gather public research.
2. Interview/guide the human reviewer through testing.
3. Record raw evidence and all screenshots in the internal research workflow.
4. Resolve material missing evidence and contradictions.
5. Form an evidence-based editorial judgment.
6. Write the complete reader-facing article using `templates/app-review.md`.
7. Select the strongest publishable screenshots, prepare safe/descriptive image assets, and place them naturally in the article.
8. Run a separate factual verification pass against the internal evidence.
9. Ask the human reviewer to approve factual accuracy and the selected visual evidence.
10. Save the final publication-ready article under `reviews/` and its publishable images under `public/images/reviews/[app-slug]/`.
11. Verify text and images together in Content Preview.
12. Continue with SEO Check.

**AI may write 100% of the prose. AI may invent 0% of the evidence. Internal evidence may be extensive; final output must still be clean editorial content with only the strongest useful visual evidence.**
