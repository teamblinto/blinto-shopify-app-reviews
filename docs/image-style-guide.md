# Editorial Fine-Art Image Style Guide

This is the canonical, permanent visual identity for the **hero/thumbnail (feature) image** of every blog post, case study, and review on Blinto's Review Hub. It is part of the approved execution layer (see `AGENTS.md` grounding hierarchy) and should not be silently loosened or reinterpreted per article.

**Scope note:** this system currently covers the thumbnail/feature image only — one per review/case study/blog post. It does not cover in-article supporting images, diagrams, or charts; those remain a separate, manual concern until/unless this scope is explicitly extended.

The thumbnail must be produced as an **image concept + a ready-to-use generation prompt**, following this guide exactly. This repository does not call an image-generation API automatically; the AI assistant writes the concept and prompt as part of authoring/updating a review, and a human runs the prompt through whatever image tool Blinto uses, then attaches the resulting file.

## 1. Core visual style

**Editorial fine-art / vintage oil painting.** Treat the Review Hub as a sophisticated editorial publication where every article is illustrated by a contemporary fine-art painter — not "an AI generated an illustration for this blog post."

The images should feel: sophisticated, artistic, editorial, intellectual, atmospheric, understated, human-made, tactile, timeless.

Visual references (feeling, not literal copying): vintage art-book illustrations, contemporary editorial paintings, impressionist oil paintings, museum/gallery artwork, old printed editorial artwork.

## 2. Avoid "AI slop"

This is one of the most important requirements. Do **not** produce: hyper-realistic AI images, extremely detailed objects, perfect faces, sharp photographic backgrounds, glossy digital paintings, overly cinematic AI artwork, excessive visual effects, perfect symmetry, overly complex scenes, generic corporate illustrations, stock-photo aesthetics, 3D renders, or cartoon/vector aesthetics.

Instead, deliberately use: soft focus, atmospheric blur, painterly abstraction, simplified shapes, broad brush masses, imperfect edges, subtle distortion, low-detail backgrounds, hazy distant objects, partially obscured objects, soft silhouettes, visible brushwork, canvas texture, pigment variation, subtle stippling, natural imperfections, restrained contrast, quiet negative space.

The image should feel like a real editorial painting photographed/scanned from a physical artwork.

## 3. Blur / abstraction hierarchy

Backgrounds must be significantly softer and more abstract than the foreground:

- **Foreground** — moderately recognizable, soft painterly definition.
- **Middle ground** — less defined, visible brush masses.
- **Background** — very soft, atmospheric, blurred, abstract, large areas of color.

Do not make every object equally sharp, and do not describe every background object in detail. The viewer should understand the overall idea without inspecting every object. Background can contain ambiguous shapes, architectural masses, light, shadows, color fields, and painterly forms — this is intentional.

Goal: **"clear concept + ambiguous execution"**, never "hyper-detailed AI scene."

## 4. Color language

Maintain a consistent muted palette across the site. Preferred colors: warm cream, ivory, beige, muted ochre, dusty yellow, muted teal, dusty blue, olive, sage, terracotta, burnt orange, muted brown. Use warm/cool contrast.

Avoid: neon, highly saturated colors, cyberpunk colors, excessive bright blue, glossy gradients, extreme contrast.

Exact colors can adapt to the subject, but the overall palette must stay restrained.

## 5. Lighting

Prefer: warm natural daylight, afternoon sunlight, soft directional light, long soft shadows, window light, atmospheric illumination. Lighting should feel natural and painterly.

Avoid: Hollywood lighting, neon lighting, extreme HDR, dramatic rim lights, glossy studio lighting.

## 6. Composition

Default format: **16:9**.

Prefer: wide editorial compositions, asymmetrical layouts, large negative space, simple geometric structures, architectural compositions, small human figures within large environments, strong visual metaphors, quiet scenes, restrained storytelling, off-center focal points.

Do not fill the entire frame with objects — let the painting breathe.

## 7. No text and official app-logo exception

Generated images must never contain article titles, headlines, captions, paragraphs, fake UI text, fake buttons, fake dashboards, or random readable text. Typography is added separately by the website.

For a review of an app or website, try to present the reviewed product's **official logo** naturally within the thumbnail when a verified, publication-safe logo asset is available. The logo should help identify the subject without becoming oversized, promotional, or more important than the editorial concept.

- Use only a verified official logo obtained from the product's official website, app listing, press/media kit, or material supplied by the reviewer.
- Never ask an image model to invent, redraw, approximate, spell, or reconstruct a logo. Generate the editorial artwork first and add the verified logo asset separately when necessary.
- Preserve the logo's official shape, spelling, proportions, colors, and clear space. Do not distort or restyle it to imitate the painting.
- A wordmark or letters that are part of the verified official logo are allowed. No other readable text is allowed.
- If an accurate official asset is unavailable, visually unsuitable, or cannot be used safely, omit the logo rather than fabricating it.

## 8. How to interpret each article

Do **not** simply turn the article title into an image. First understand the article's actual substance:

- What is it about? What is the central argument?
- What problem is being discussed? What is the main tension?
- What is the main outcome? What concept should the reader visually understand?
- Is there a useful metaphor? A human element? A process or system? A comparison? A transformation?

Then build the image concept from the strongest idea, not the headline.

## 9. Visual metaphor over literal screenshots

Prefer a conceptual/editorial metaphor to a literal software screenshot or UI mockup.

Example — "Traffic Is Up. Pipeline Isn't.":
- Bad: a literal screenshot of Google Analytics.
- Good: a large architectural channel filled with flowing figures/traffic, but the flow becomes blocked before reaching a distant business destination.

Example — "How Far Does the Free Plan Actually Get You?":
- Bad: a fake SaaS pricing table.
- Good: a person moving freely through a large architectural space, approaching a subtle translucent boundary beyond which certain areas are inaccessible.

Example — "Why Customers Abandon Checkout":
- Bad: a screenshot of a checkout page.
- Good: a shopper approaching a large doorway, with the path becoming confusing or obstructed just before the entrance.

Use metaphor whenever it produces a stronger editorial image than a literal depiction would.

## 10. Thumbnail (the only image this system produces)

Every review/case study/blog post automatically gets exactly **one** hero/thumbnail concept — this system does not generate in-article supporting images, diagrams, or charts (see Scope note above). The thumbnail must:

- summarize the central idea
- be visually interesting without being literal
- work at small sizes
- have a clear focal point
- contain negative space
- use the editorial fine-art style described above
- have a soft atmospheric background
- contain no text except a verified official app/website logo when appropriate under Section 7

## 11. Out of scope: in-article supporting images

If a future article genuinely needs an in-article illustration, visual metaphor, process diagram, technical diagram, or data visualization, that is a separate, manual decision outside this automated system — not something the AI assistant should generate automatically per heading. Should Blinto decide to extend this system to supporting images later, technical diagrams and charts should still use clean SVG/programmatic graphics and real data rather than an image model, since image models should never be asked to render accurate technical diagrams or numerically correct charts.

## 12. Style consistency across subjects

The **subject** changes article to article; the **visual language** never does. Example mappings (illustrative, not exhaustive):

- Marketing topic → architectural metaphor
- SaaS/product topic → human figure + abstract system
- Manufacturing topic → workshop/environment
- SEO/growth topic → paths, flows, architecture
- Finance topic → objects, space, balance

Whatever the subject, every image must still look like it belongs to the same publication.

## 13. Worked example

Article: "Judge.me Review: How Far the Free Plan Actually Gets You"

Understanding pass: easy setup; free review collection; storefront display; customization limits; free vs. paid boundary; email customization is the sharpest limitation; a merchant deciding whether the free plan is enough.

Concept: A small Shopify merchant standing inside a spacious contemporary architectural environment, observing a large wall of customer reviews and product feedback. Most of the space is open and accessible, while a subtle translucent architectural boundary separates a more refined area representing advanced customization. Warm afternoon sunlight creates long soft shadows. Muted teal, cream, ochre, olive and terracotta palette. The merchant is a simplified painterly figure. Background architecture is heavily atmospheric and softly blurred. The scene feels like a vintage editorial oil painting rather than a software illustration.

This communicates the article without a fake Judge.me dashboard.

## 14. The golden rule

The system must produce, every time:

**Consistent style + article-specific concept + soft atmospheric execution + visual metaphor + negative space + imperfect painterly texture.**

The output should feel like "a thoughtful editorial artist interpreted this article" — never "an AI generated an illustration for this blog post."

## 15. Prompt-writing checklist

When turning a concept into the final generation prompt, always include, explicitly, in the prompt text itself:

- [ ] The core scene/metaphor, described at a conceptual level (not a shot list of every object)
- [ ] "Editorial fine-art oil painting" / "vintage art-book illustration" style anchor
- [ ] Explicit anti-AI-slop instruction (soft focus, painterly abstraction, visible brushwork, canvas texture, imperfect edges — no hyper-detail, no photorealism, no 3D render, no glossy digital painting)
- [ ] Foreground/middle-ground/background sharpness hierarchy (sharpest in front, most abstract in back)
- [ ] Named palette drawn from Section 4
- [ ] Lighting direction from Section 5
- [ ] Composition/aspect ratio (16:9 default) and negative space instruction
- [ ] Explicit "no text, no UI, no readable typography" instruction, with the only permitted exception being a separately sourced and verified official app/website logo under Section 7
- [ ] For an app or website review, a decision on whether its verified official logo can be incorporated naturally without overpowering the editorial concept
- [ ] For thumbnails specifically: a note that it must read clearly at small size with one clear focal point
