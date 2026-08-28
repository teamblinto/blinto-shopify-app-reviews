# Blinto Shopify App Reviews

Blinto's operating system for researching, writing, reviewing, approving, publishing, and maintaining Shopify app reviews.

## Start Here

Every review has **one author** who owns the complete review from research through draft. Authors build expertise by owning a Shopify app category and writing multiple reviews within that category.

### Core workflow

**Assign → Research & Test → Brief → Write → Self-check → Technical Writing Review → SEO Review → Approve → Private Preview → Publish → Monitor**

Use [`docs/review-process.md`](docs/review-process.md) for the practical day-to-day workflow.

Use [`templates/app-review.md`](templates/app-review.md) when an app is assigned and a new review begins.

## Source of Truth

The original project strategy and SOPs written for this initiative are preserved under `source-sops/`. They are the canonical detailed requirements and must not be silently simplified, removed, or overwritten.

The execution guides, templates, checklists, assistant instructions, and website will translate those requirements into an easier day-to-day system. If an execution document conflicts with a source SOP, the source SOP must be reviewed and the conflict resolved explicitly.

## Operating Principles

1. One review = one primary author.
2. The author owns research, hands-on testing, evidence, analysis, and the initial draft.
3. AI may assist research organization, writing, editing, and QA, but must never invent testing, evidence, facts, merchant feedback, quotations, scores, or citations.
4. Missing evidence must be surfaced, never hidden by better writing.
5. Technical Writing Review and SEO Review are quality gates after the author's self-check.
6. Every published article includes its author's name and bio.
7. Reviews are first rendered on Blinto's private Astro review workspace.
8. Only approved reviews move to the publishing CMS/public website workflow.
9. Publication is not completion: reviews continue into performance monitoring and maintenance.
10. Category ownership is used to compound each author's Shopify app expertise.

## Systems

- **GitHub:** content, evidence, source SOPs, templates, assistant rules, version history.
- **ClickUp:** assignment, owner, due date, operational status, and management dashboard.
- **Private Astro workspace:** human-friendly strategy/SOP wiki, review workspace, status visibility, and publication preview.
- **WordPress CMS (later):** public blog CMS feeding the live Astro website through API.

## Initial Rollout

Start with **five reviews total: one review from each of the five writers**. Run all five through the complete workflow, identify weaknesses, improve the system, and only then expand the category review pipeline.

Category research and assignments are intentionally **TBD** until the category research is completed.

## Repository Build Plan

1. Preserve all original source SOPs.
2. Create the strategy and operating model.
3. Define category ownership and planning.
4. Define the review lifecycle and status model.
5. Create the canonical review schema.
6. Create research/testing instructions and checklist.
7. Create brief instructions and template.
8. Create writing instructions and article template.
9. Create author self-review checklist.
10. Create Technical Writing Assistant instructions.
11. Create technical/human editorial review checklist.
12. Create SEO review checklist.
13. Create final approval/publishing checklist.
14. Define ClickUp task structure and dashboard requirements.
15. Build the private Astro workspace.
16. Create the first five review records.
17. Run the five-review pilot.
18. Improve the system from pilot findings.
19. Expand toward five reviews per category.
20. Add the WordPress CMS publishing integration later.
