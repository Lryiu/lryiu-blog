import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Her .md dosyası src/content/blog/ altında bir yazı olur.
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Kategori serbest metin — yeni bir kategori açmak için burada
    // sadece farklı bir isim yazman yeterli, başka hiçbir yeri değiştirmene gerek yok.
    category: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('5 dk okuma'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
