# Publication Output Contract

## Purpose

The Shopify App Review workflow has two different artifacts and they must not be mixed:

1. **Internal research/evidence** — working material used to reach a trustworthy conclusion.
2. **Final review** — the reader-facing article Blinto intends to publish, including selected publication-ready screenshots/images.

The research exists to support the article. It is not the article.

## Blinto Editorial Position

**We do not review Shopify apps feature by feature. We test whether they solve the merchant problem they are supposed to solve.**

Every single-app review should begin by identifying the real merchant situation or decision that makes someone consider the app. The app remains the subject of the article; the merchant problem is the lens used to evaluate it.

Canonical review logic:

**Merchant problem → app promise → realistic hands-on test → evidence → merchant/business impact → cost/value → best fit / poor fit → recommendation.**

Technical and UX findings remain important, but they are evidence supporting the merchant decision rather than the story itself.

A review does not need to become a comparison article. Alternatives should be mentioned briefly only when they materially help the reader choose. Full app-vs-app analysis belongs in separate comparison content.

## Merchant Decision Question

Before drafting, the reviewer and AI writer should be able to state one primary question the review is trying to answer.

Examples:

- Judge.me: **Can a Shopify merchant genuinely run product reviews for free, or will the limitations quickly require the paid plan?**
- PageFly: **Can a non-technical Shopify merchant build and launch a professional custom page without relying on a developer?**

The exact question should emerge from search intent, the app's promise, merchant needs, and hands-on testing. Do not force the same question structure onto every app.

The title should normally follow:

**[App Name] Review: [Important Merchant Question / Outcome]**

Keep the app name and “Review” for entity/search clarity. Use the second half to communicate why a merchant should read this specific review.

## Testing Standard

Use a dedicated Shopify development/test store as the normal review environment. Build realistic merchant scenarios rather than merely clicking through every screen.

Testing depth should match the claim being evaluated:

- **Hands-on setup test:** installation, onboarding, UX, configuration, theme integration, features and plan limits.
- **Scenario test:** realistic products, customers, test orders, emails, reviews, discounts, imports, automations or other end-to-end workflows needed to evaluate the app's core promise.
- **Real-world/live validation:** only when claims depend on genuine traffic, customers, revenue, conversion, long-term operations or other conditions a development store cannot establish.

Do not run live experiments merely to make a review sound more authoritative. Test as deeply as necessary to answer the merchant question and never claim beyond what was actually tested.

For example, a review app should ideally test the full order → review request → customer submission → moderation → storefront display flow before making strong claims about review collection. A page builder can be evaluated substantially on a development store, but conversion improvement cannot be claimed without appropriate real-world evidence.

## Canonical Locations

- Internal working material should use `templates/review-research.md` and live outside `reviews/`.
- Final publication-ready articles use `templates/app-review.md` and live under `reviews/`.
- Publishable review images live under `public/images/reviews/[app-slug]/` and are referenced directly from the final Markdown article.
- `reviews/` is therefore a publication surface, not a research notebook.

## Final Review Standard

A file under `reviews/` must read as though it is already on the Blinto public website.

It should normally contain:

- editorial title built around an important merchant decision
- opening that naturally establishes the merchant problem (do not publish a heading called “Merchant Problem”)
- early verdict
- concise app context
- transparent testing scope and realistic merchant scenario
- hands-on evidence answering the primary merchant question
- selected screenshots that demonstrate important findings
- consequential strengths, limitations and trade-offs
- pricing interpreted as cost/value, not merely copied into a table
- best-fit / poor-fit guidance
- brief alternatives only where decision-useful
- final merchant recommendation
- useful FAQs only where they add value
- concise reviewer/testing disclosure

The structure should adapt to the app and search intent. Do not manufacture sections simply to satisfy a template.

## Publication Image Contract

Hands-on screenshots are part of the final article when they materially help the reader. The goal is not to publish every evidence screenshot; the goal is to publish the strongest visual evidence in the right place.

For each review:

1. Keep the complete/raw evidence inventory in the internal research workflow.
2. Select only screenshots that demonstrate important setup steps, workflows, features, pricing, outputs, or limitations discussed in the article.
3. Store selected publishable images under `public/images/reviews/[app-slug]/`.
4. Use descriptive lowercase filenames.
5. Prefer WebP for screenshots where practical while preserving legibility.
6. Crop unnecessary browser/UI chrome when useful and redact sensitive information.
7. Add meaningful alt text.
8. Place each image immediately beside the claim it supports.
9. Use a short caption only when it adds useful context.
10. Verify every selected image renders correctly in Content Preview before SEO Check.

**Raw evidence is internal. Selected visual evidence is editorial content.**

## Evidence and Voice

The AI writer transforms evidence into original editorial judgment; it must not merely reorganize research notes.

First-hand language such as “In our hands-on test,” “We found,” and “During setup” is allowed only when supported by the named human reviewer's actual testing.

Separate clearly:

- **Blinto tested:** first-hand evidence.
- **Developer claims:** attributed unless independently verified.
- **Merchant reports:** sourced patterns, not Blinto experience.

Never convert interface availability into proof that a workflow works. Seeing an import button is not the same as completing an import. Seeing analytics is not proof that the numbers are accurate. Building a page is not proof that it improves conversion.

## Never Expose Internal Workflow in the Final Article

Do not include AI instructions/prompts, evidence tables, TODO/TBD notes, reviewer questions, screenshot inventories, source-discovery notes, unresolved contradictions, claims-we-must-not-make lists, SEO planning notes, ClickUp checklists, approval operations, or commentary about AI access.

If one affects the reader's decision, resolve it before publication or convert it into a clean editorial qualification.

## Publishability Gate

Before a review is complete, ask:

> Could a Blinto editor copy this article and its selected images into the public CMS today and publish it after only normal proofreading, formatting, links, and SEO metadata work?

And:

> Does this article clearly answer an important merchant buying/install decision using evidence from what we actually tested?

If either answer is **no**, the article is not finished.

## AI Workflow

1. Gather public research and understand search/merchant intent.
2. Identify the primary merchant problem and provisional decision question.
3. Guide the human reviewer through a realistic test designed to answer that question.
4. Record raw evidence and screenshots in the internal research workflow.
5. Ask for deeper scenario testing when the core app promise cannot be evaluated from setup alone.
6. Resolve material missing evidence and contradictions.
7. Form an evidence-based merchant judgment.
8. Write the complete reader-facing article using `templates/app-review.md`.
9. Select and place the strongest publishable screenshots.
10. Run factual verification against internal evidence.
11. Human reviewer approves factual accuracy and visual evidence.
12. Save the final article under `reviews/` and images under `public/images/reviews/[app-slug]/`.
13. Verify text and images together in Content Preview.
14. Continue with SEO Check.

**AI may write 100% of the prose. AI may invent 0% of the evidence. Internal evidence may be extensive; final output must still be clean merchant-focused editorial content.**
