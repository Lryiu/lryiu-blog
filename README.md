# lryiu — blog

Astro ile kurulmuş, GitHub + Vercel'e deploy edilecek şekilde hazırlanmış statik blog.
Tasarım dili: sıcak kağıt zemin, mürekkep siyahı metin, çivit mavisi ve altın vurgular.

## Klasör yapısı

```
src/
  content/blog/*.md     ← her yazı ayrı bir markdown dosyası (asıl düzenleyeceğin yer burası)
  content.config.ts     ← yazı şeması (başlık, kategori, tarih, özet, etiketler)
  layouts/BaseLayout.astro
  pages/index.astro     ← ana sayfa (liste + kategori filtreleri)
  pages/blog/[id].astro ← tekil yazı sayfası şablonu
  styles/global.css     ← tüm renk/tipografi tanımları burada
```

## Yeni bir yazı eklemek

`src/content/blog/` altına yeni bir `.md` dosyası oluştur:

```md
---
title: "Yazı Başlığı"
category: "Gezi"        ← yeni bir kategori istersen burada farklı bir isim yaz, başka hiçbir yeri değiştirmene gerek yok
date: 2026-08-22
excerpt: "Liste sayfasında görünecek kısa özet."
tags: ["etiket1", "etiket2"]
readingTime: "5 dk okuma"
---

Yazının gövdesi burada, normal markdown.
```

Dosya adı, yazının URL'sindeki slug'ı belirler (`/blog/dosya-adi`).
Bunu doğrudan GitHub'ın web arayüzünden ("Add file" → "Create new file") kod yazmadan da yapabilirsin.

## Yerelde çalıştırmak

```
npm install
npm run dev
```

## Vercel'e deploy

1. Bu klasörü bir GitHub reposuna push et.
2. Vercel'de "New Project" → GitHub reposunu seç. Framework otomatik olarak Astro
   tanınır, ekstra ayar gerekmez.
3. Deploy tamamlanınca Vercel sana otomatik bir `proje-adi.vercel.app` linki verir.
   Project Settings → General → "Project Name" kısmından bu adı değiştirebilirsin
   (ör. `lryiu-gunluk.vercel.app` gibi daha temiz bir isim seçebilirsin).
4. Lryiu.com'u bu domain'e bağlamana gerek yok — Lryiu.com tarafında istediğin
   yerden (menü, buton, bülten içindeki bir link) bu `.vercel.app` adresine
   yönlendirme/link verirsin. Blog kendi bağımsız adresinde durur.
5. Her `main` branch'e push'ta site otomatik yeniden build edilip yayınlanır.

Not: paylaşım linkleri (`Bağlantıyı kopyala` butonu) bu durumda
`https://proje-adi.vercel.app/blog/yazi-adi` şeklinde olacak. İleride istersen
farklı bir custom domain (lryiu.com dışında, ayrı satın alacağın bir domain gibi)
bağlamak istersen Vercel → Settings → Domains'ten aynı şekilde ekleyebilirsin.
