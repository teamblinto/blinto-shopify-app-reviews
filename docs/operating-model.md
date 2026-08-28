# Shopify App Review — Operating Model

This document defines Blinto's approved lightweight operating model for the Shopify App Review pilot. The Core Strategy + SOP 1–7 in `source-sops/` remain the detailed knowledge base.

## Objective

Build authoritative, evidence-based Shopify app reviews using Blinto's technical/product expertise without requiring developers and designers to become professional writers.

**Human Reviewer + AI Writer → Human Verification → SEO Check → Publish.**

## Roles

### Human Reviewer / Named Author

One ClickUp assignee owns each review. Their normal Blinto role may be developer, designer, or another technical/product role. They do not need professional writing experience.

They own real-world app testing, screenshots/evidence, observations, product/UX/technical judgment, answers to AI questions, and final factual approval. The published byline remains the human reviewer because the experience, evaluation, judgment, and verification are theirs.

### AI Writer

ChatGPT, Claude, or another approved AI assistant with repository context acts as researcher, interviewer, evidence organizer, editor, QA assistant, and primary prose writer.

The AI may write the entire article. It should proactively guide the human through the repository process, ask for missing manual evidence sequentially, conduct legitimate public research, organize evidence, create the brief/SEO direction, draft the complete review, edit it, and prepare it for repository preview.

**AI may write 100% of the prose. AI may invent 0% of the experience or evidence.**

It must never fabricate testing, product behavior, screenshots, pricing, merchant feedback, quotations, statistics, scores, citations, or technical verification.

### SEO / Quality Check

**Owner: Shemanto**, or a calibrated SEO agent later.

This is the only routine human review handoff. Shemanto reviews the rendered Content Preview linked from ClickUp. If changes are requested, the task remains in SEO Check and the original reviewer works with their AI assistant to resolve them.

### Publishing

**Owner: Fazle or Shemanto.**

After SEO Check passes, the task moves to Ready to Publish. Publication and final live QA then move it to Published.

## Source of Truth

1. `source-sops/` — detailed original strategy and SOP knowledge.
2. `docs/` — approved execution model.
3. `templates/` — working structures and task templates.
4. `reviews/` — review content/evidence records and content source of truth.
5. GitHub — version history and collaboration layer.
6. ClickUp — assignment, due date, stage, blockers, and working links.
7. Review Hub — rendered private content preview and human-friendly process interface.

## Production Workflow

**Backlog → Research & Write → SEO Check → Ready to Publish → Published**

`Assigned` is handled by the assignee field, not a status. `Monitoring` is handled as post-publication maintenance, not a production-board status.

## Handoff Contract

The reviewer cannot move a task from Research & Write to SEO Check until:

- The complete AI-written review has been fact-checked by the human reviewer.
- The review is committed/pushed under `reviews/`.
- The deployed Review Hub renders the review.
- The exact `https://reviews.blinto.co/reviews/.../` Content Preview URL is added to ClickUp.

This means Shemanto should never need to hunt through GitHub or inspect raw Markdown to review an article.

## Review Hub Contract

The Astro site loads `reviews/**/*.{md,mdx}` as the `reviews` content collection and generates a route for every review at `/reviews/[review-file-id]/`. Therefore a correctly formatted review committed to the deployed branch is part of the Review Hub build automatically.

The AI/reviewer should use a stable, URL-safe review filename/ID and record the resulting preview URL in ClickUp after deployment.

## Evidence & Testing Standard

Every review must state its actual evaluation level:

1. Full Hands-On Test
2. Partial Hands-On Test
3. Demo and Documentation Review
4. Research-Only Evaluation
5. Insufficient Evidence

Never present partial/documentation research as full hands-on testing. Keep developer claims, Blinto observations, and merchant feedback distinct. Verify/date pricing. Mark missing evidence rather than filling gaps by assumption.

## Required ClickUp Entry Points

Every production task should contain:

- Shopify App — direct App Store listing.
- GitHub Repository — source of truth.
- Review Hub — process/preview interface.
- Content Preview — exact review page; mandatory before SEO Check.
- Published URL — once live publicly.

## Editorial Independence

Founder relationships, partnerships, sponsorships, affiliate opportunities, discounts, free access, or potential Blinto business cannot control the review conclusion. Factual corrections can be considered and independently verified; external parties do not control pros/cons, rankings, verdicts, or publication decisions.

## Validation Before Scale

Start with the five-review pilot and optimize for learning and publishing velocity. The broader SOP validation target remains 10 pieces: 3 category/bulk reviews, 5 single-app reviews, and 2 comparisons. Scale toward 100 only after the program demonstrates useful SEO/business outcomes and a repeatable production model.

## Non-Negotiables

- One human reviewer/assignee per review.
- Human owns testing, evidence, judgment, and factual approval.
- AI is expected to produce the polished content and may write the full article.
- AI cannot invent evidence or experience.
- Reviewer must fact-check before handoff.
- Content Preview URL is mandatory before SEO Check.
- One routine final SEO/quality gate: Shemanto.
- Fazle or Shemanto publishes after that gate passes.
- No separate Technical Review, Revision, Final Approval, Assigned, or Monitoring production status.
- Testing level and limitations must be transparent.
- Keep the pilot simple; add gates only when observed problems justify them.
