# Publication Output Contract

## Purpose

The Shopify App Review workflow has two different artifacts and they must not be mixed:

1. **Internal research/evidence** — working material used to reach a trustworthy conclusion.
2. **Final review** — the reader-facing article Blinto intends to publish.

The research exists to support the article. It is not the article.

## Canonical Locations

- Internal working material should use `templates/review-research.md` and live outside `reviews/`.
- Final publication-ready articles use `templates/app-review.md` and live under `reviews/`.
- `reviews/` is therefore a publication surface, not a research notebook.

## Final Review Standard

A file under `reviews/` must read as though it is already on the Blinto public website.

It should contain only content useful to the merchant/reader, such as:

- clear editorial title and summary
- early verdict
- what the app does
- transparent testing scope
- hands-on experience and findings
- important features
- current pricing and meaningful plan limits
- evidence-based strengths and limitations
- best-fit / poor-fit guidance
- final verdict
- useful FAQs where appropriate
- concise reviewer/testing disclosure

The structure may adapt to the app and search intent. The template is a baseline, not a requirement to manufacture empty sections.

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

If one of these affects the reader's decision, resolve it before publication or convert it into clean editorial qualification. Example: instead of exposing an internal pricing discrepancy note, write the verified current pricing and, only if genuinely relevant, explain the observed product behavior clearly to the reader.

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

> Could a Blinto editor copy this article into the public CMS today and publish it after only normal proofreading, formatting, images, links, and SEO metadata work?

If **no**, the article is not finished.

A review is not complete merely because research is comprehensive.

## AI Workflow

1. Gather public research.
2. Interview/guide the human reviewer through testing.
3. Record raw evidence in the internal research artifact.
4. Resolve material missing evidence and contradictions.
5. Form an evidence-based editorial judgment.
6. Write the complete reader-facing article using `templates/app-review.md`.
7. Run a separate factual verification pass against the internal evidence.
8. Ask the human reviewer to approve factual accuracy.
9. Save only the final publication-ready article under `reviews/`.
10. Continue with Content Preview and SEO Check.

**AI may write 100% of the prose. AI may invent 0% of the evidence. Internal evidence may be extensive; final output must still be clean editorial content.**
