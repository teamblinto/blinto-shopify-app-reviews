# Blinto Shopify App Reviews

Blinto's operating system for evidence-based Shopify app reviews.

## Start Here

Every review has one primary human reviewer. The reviewer owns testing, evidence, judgment, and factual approval. The AI assistant may research, interview, organize evidence, and write the complete article, but it must never invent experience or evidence.

### Core workflow

**Backlog → Research & Write → Human Fact-check → Content Preview → SEO Check → Ready to Publish → Published**

The production model is:

**Internal research/evidence → editorial synthesis → publish-ready review.**

Use [`docs/review-process.md`](docs/review-process.md) for the execution workflow and [`docs/publication-output-contract.md`](docs/publication-output-contract.md) for the publication standard.

Use:

- [`templates/review-research.md`](templates/review-research.md) for internal research, screenshots, testing notes, source validation, discrepancies, and unresolved questions.
- [`templates/app-review.md`](templates/app-review.md) for the final public-facing article.

## Publication Rule

Files under `reviews/` are publication outputs, not research notebooks.

A finished review must read exactly like the article Blinto intends to publish on its website/blog. It must not expose TODOs, AI instructions, evidence-management notes, reviewer prompts, internal workflow commentary, unresolved research questions, or raw source logs.

Research supports the article; research is not the article.

A review is not complete if an editor cannot copy it into the CMS and publish it with only minor proofreading or formatting changes.

## Source of Truth

The detailed project strategy and SOPs are preserved under `source-sops/`. The execution layer in `docs/`, `templates/`, `research/`, and `reviews/` translates those requirements into the day-to-day system.

Grounding hierarchy:

1. `AGENTS.md`
2. `source-sops/`
3. `docs/`
4. `templates/`
5. `research/`
6. `reviews/`

Do not silently change source SOPs when improving the execution layer.

## Operating Principles

1. One review = one primary human reviewer.
2. Human reviewer owns real testing, screenshots/evidence, raw observations, product judgment, and final factual approval.
3. AI assistant owns research support, interviewing, evidence organization, article writing, editing, and QA.
4. AI may write 100% of the prose; AI may invent 0% of the experience or evidence.
5. Internal research and final editorial content must remain separate.
6. Pricing and other time-sensitive facts must be verified and dated.
7. Developer claims, Blinto observations, and merchant feedback must not be conflated.
8. Reviews are rendered first on the private Astro Review Hub for fact-checking and SEO review.
9. No Content Preview URL = no SEO Check handoff.
10. Publication is followed by monitoring and maintenance.

## Systems

- **GitHub:** research, evidence, final review content, SOPs, templates, assistant rules, and version history.
- **ClickUp:** assignment, assignee, due date, status, blockers, and required links.
- **Review Hub:** private human-friendly review preview at `https://reviews.blinto.co`.
- **WordPress CMS (future):** public publishing backend.
- **Public Blinto Astro website:** presentation layer for approved CMS content.

## Review File Structure

For each app, use two separate files when research material needs to be preserved:

- `research/[app-slug].md` — internal only.
- `reviews/[app-slug].md` — final publication-ready article only.

Example: PageFly uses `research/pagefly.md` for Imran's evidence and `reviews/pagefly.md` for the clean article rendered on the Review Hub.

Both render on the private Review Hub: the article at `/reviews/[app-slug]/` and its evidence record at `/research/[app-slug]/`, cross-linked when the slugs match. Only the `/reviews/` URL is a Content Preview URL.

## Pilot

The first operational pilot is five single-app reviews. Use those five to improve the workflow while preserving evidence quality and publishing velocity.

The broader source-SOP validation remains 10 pieces: 3 category/bulk reviews, 5 single-app reviews, and 2 comparisons.
