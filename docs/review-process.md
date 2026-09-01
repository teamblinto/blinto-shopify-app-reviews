# Shopify App Review — Execution Workflow

This is the approved practical workflow for the Shopify App Review operation.

The detailed requirements remain in `source-sops/`. The execution layer stays lightweight while preserving evidence, transparency, SEO quality, and merchant usefulness.

## Core Model

**Merchant problem → human reviewer tests a realistic scenario → AI researches/interviews/writes → human fact-checks → preview → SEO Check → publish.**

The app is the subject of each single-app review. The merchant problem is the evaluation lens.

The human assignee is the named reviewer/author and owns the experience, evidence, judgment, and factual approval. The AI assistant produces the complete polished article from verified public research plus the reviewer's supplied testing experience and evidence.

**AI may write 100% of the prose. AI may invent 0% of the experience or evidence.**

## ClickUp Workflow

**Backlog → Research & Write → SEO Check → Ready to Publish → Published**

## 1. Backlog

An approved/proposed review task waits here until production starts. The task should contain the Shopify App Store link, GitHub repository link, Review Hub link, app/category/assignee, and any approval blocker.

## 2. Research & Write — Human Reviewer + AI Writer

When the assignee starts, move the task to **Research & Write** and open the repository with ChatGPT or Claude.

### Step A — Define the merchant decision

Before testing becomes a feature walkthrough, establish:

1. What real merchant problem causes someone to consider this app?
2. What does the app promise to solve?
3. What is the most important buying/install question this review should answer?
4. What realistic scenario must we test to answer it?

The question can evolve as hands-on evidence reveals a more important trade-off.

Examples:
- Judge.me: Can a Shopify merchant genuinely run product reviews for free, or will the limitations quickly require the paid plan?
- PageFly: Can a non-technical merchant build and launch a professional custom Shopify page without relying on a developer?

### Step B — Test the merchant scenario

Use the dedicated development/test store for normal reviews. Do not merely inspect screens. Complete the realistic workflow needed to evaluate the app's core promise where practical.

Examples include test products, test customers/orders, review requests, submitted reviews, email flows, discounts, imports, automations, published pages, responsive behavior, theme interactions, and outputs.

Use real-world/live validation only when a conclusion genuinely depends on traffic, conversion, revenue, real customers, long-term operations, or another condition a development store cannot establish.

Never claim beyond the testing level. If a workflow was only inspected rather than completed, say so or avoid the claim.

### Human reviewer owns

- Real app access and hands-on testing.
- Running the realistic merchant scenario requested by the review plan.
- Screenshots and other evidence from testing.
- Raw observations, opinions, UX/technical/product judgment, problems, strengths, limitations, and merchant-fit conclusions.
- Answering AI follow-up questions when experience cannot be learned from public sources.
- Final factual verification of the generated article.

### AI assistant owns

- Reading and following this repository, `docs/`, templates, and applicable `source-sops/`.
- Legitimate public research and source organization.
- Helping define the merchant problem and decision question.
- Designing/asking for the minimum realistic testing needed to answer that question.
- Asking the reviewer for missing testing, screenshots, observations, or decisions.
- Separating developer claims, Blinto observations, and merchant feedback.
- Converting technical findings into merchant/business implications without inventing outcomes.
- Writing the complete merchant-focused article in polished prose.
- Editing, consistency checks, and pre-handoff QA.
- Creating/updating the review file in `reviews/` and committing/pushing it when the connected environment supports GitHub writes.

AI must never fabricate testing, product behavior, pricing, merchant feedback, screenshots, scores, quotations, statistics, citations, technical verification, conversion impact, or revenue impact. Missing evidence must be requested, removed, qualified, or disclosed.

### Step C — Write around the decision, not the interface

The final review should normally follow this editorial logic:

**Merchant problem → app promise → what we tested → what actually happened → important trade-offs → cost/value → who should use it → who should not → final recommendation.**

Do not publish a heading called “Merchant Problem.” Establish it naturally in the introduction.

Technical findings are evidence. They should earn space because they change or support the merchant's decision.

Alternatives may be mentioned briefly when useful, but a single-app review should not be forced into a comparison article.

## 3. Preview & Human Fact-check

Every review file under `reviews/` is automatically included in the Astro Review Hub collection. After the review is committed/pushed and deployment completes, its private preview is available at:

`https://reviews.blinto.co/reviews/[review-file-id]/`

Before handoff, the human reviewer must read the generated review and confirm it accurately represents what they tested and found.

The reviewer/AI must then add the exact **Content Preview** URL to the ClickUp task.

A task is **not ready for SEO Check** until all three are true:

1. Review content is committed/pushed to GitHub.
2. Rendered content preview is available on `reviews.blinto.co`.
3. Exact Content Preview URL is recorded in ClickUp.

## 4. SEO Check — Shemanto

The reviewer moves the task to **SEO Check** only after the preview handoff requirements are satisfied.

Shemanto checks search intent/topic alignment, title/H1 and headings, topical coverage, metadata direction, internal links, comparison/cannibalization opportunities, readability, merchant usefulness, disclosures, and unsupported claims/evidence gaps.

SEO optimization must preserve the review's merchant-decision thesis rather than turning the article back into a generic feature/pricing/pros-cons template.

If corrections are needed, keep the task in **SEO Check**. The same human reviewer works with their AI assistant to resolve feedback and update the preview.

When the check passes, Shemanto moves the task to **Ready to Publish**.

## 5. Ready to Publish

The article has passed the quality gate. Fazle or Shemanto completes final publishing/QA without adding another routine approval stage.

## 6. Published

Once the public article is live and verified, Fazle or Shemanto adds the published URL to ClickUp and moves the task to **Published**.

Performance tracking, refreshes, pricing/product changes, and maintenance continue according to SOP 7, outside the production-board statuses.

## Required ClickUp Links

Every review task should expose:

- **Shopify App** — direct Shopify App Store listing.
- **GitHub Repository** — `teamblinto/blinto-shopify-app-reviews`.
- **Review Hub** — `https://reviews.blinto.co`.
- **Content Preview** — exact rendered review URL; mandatory before SEO Check.
- **Published URL** — added after public publication.

## Status Ownership

- Task created/approved → **Backlog**.
- Human reviewer starts → **Research & Write**.
- Human reviewer fact-checks + preview is live + preview URL is in ClickUp → **SEO Check**.
- Shemanto passes SEO/quality gate → **Ready to Publish**.
- Fazle/Shemanto publishes and verifies → **Published**.

Planning/topic-validation work belongs in Shopify GTM Execution, not the review-production board.
