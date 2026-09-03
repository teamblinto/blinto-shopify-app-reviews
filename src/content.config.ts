import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '*.md', base: './docs' }),
});

const sops = defineCollection({
  loader: glob({ pattern: '*.md', base: './source-sops' }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './reviews' }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './research' }),
});

export const collections = { docs, sops, reviews, research };
