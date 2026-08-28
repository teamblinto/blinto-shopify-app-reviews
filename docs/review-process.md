# Shopify App Review — Execution Workflow

This is the approved practical workflow for the current Shopify App Review pilot.

The detailed requirements remain in `source-sops/`. The execution layer stays lightweight while preserving evidence, transparency, and SEO quality.

## Core Model

**Human reviewer tests → AI assistant researches/interviews/writes → human fact-checks → preview → SEO Check → publish.**

The human assignee is the named reviewer/author and owns the experience, evidence, judgment, and factual approval. The AI assistant (ChatGPT, Claude, or another approved repository-capable assistant) is expected to produce the complete polished article from verified public research plus the reviewer's supplied testing experience and evidence.

**AI may write 100% of the prose. AI may invent 0% of the experience or evidence.**

## ClickUp Workflow

**Backlog → Research & Write → SEO Check → Ready to Publish → Published**

`Assigned` is not a status; ownership is represented by the ClickUp assignee. `Monitoring` is not a production-board status; performance and maintenance are handled separately after publication.

## 1. Backlog

An approved/proposed review task waits here until production starts. The task should contain the Shopify App Store link, GitHub repository link, Review Hub link, app/category/assignee, and any approval blocker.

## 2. Research & Write — Human Reviewer + AI Writer

When the assignee starts, move the task to **Research & Write** and open the repository with ChatGPT or Claude.

The AI assistant should guide the reviewer sequentially rather than requiring them to memorize the SOP. The reviewer may provide observations one-by-one or as a batch.

### Human reviewer owns

- Real app access and hands-on testing.
- Screenshots and other evidence from testing.
- Raw observations, opinions, UX/technical/product judgment, problems, strengths, limitations, and merchant-fit conclusions.
- Answering AI follow-up questions when experience cannot be learned from public sources.
- Final factual verification of the generated article.

### AI assistant owns

- Reading and following this repository, `docs/`, templates, and applicable `source-sops/`.
- Legitimate public research and source organization.
- Asking the reviewer for missing testing, screenshots, observations, or decisions.
- Separating developer claims, Blinto observations, and merchant feedback.
- Organizing evidence and creating the content/SEO direction.
- Writing the complete merchant-focused article in polished prose.
- Editing, consistency checks, and pre-handoff QA.
- Creating/updating the review file in `reviews/` and committing/pushing it to the repository when the connected AI environment supports GitHub writes.

AI must never fabricate testing, product behavior, pricing, merchant feedback, screenshots, scores, quotations, statistics, citations, or technical verification. Missing evidence must be requested, removed, qualified, or disclosed.

## 3. Preview & Human Fact-check

Every review file under `reviews/` is automatically included in the Astro Review Hub collection. After the review is committed/pushed to the deployed branch and the site deployment completes, its private preview is available at:

`https://reviews.blinto.co/reviews/[review-file-id]/`

Before handoff, the human reviewer must read the generated review and confirm it accurately represents what they tested and found.

The reviewer/AI must then add the exact **Content Preview** URL to the ClickUp task.

A task is **not ready for SEO Check** until all three are true:

1. Review content is committed/pushed to GitHub.
2. Rendered content preview is available on `reviews.blinto.co`.
3. Exact Content Preview URL is recorded in ClickUp.

## 4. SEO Check — Shemanto

The reviewer moves the ClickUp task to **SEO Check** only after the preview handoff requirements are satisfied.

Shemanto opens the Content Preview link from ClickUp and checks search intent/topic alignment, title/H1 and headings, topical coverage, metadata direction, internal links, comparison/cannibalization opportunities, readability, merchant usefulness, disclosures, and obvious unsupported claims/evidence gaps.

If corrections are needed, keep the task in **SEO Check**. The same human reviewer works with their AI assistant to resolve the feedback and update the preview.

When the check passes, Shemanto moves the task to **Ready to Publish**.

## 5. Ready to Publish

The article has passed the pilot gate. Fazle or Shemanto completes final publishing/QA without adding another routine approval stage.

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
