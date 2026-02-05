# Moje Przepisy 🍳

Strona z przepisami kulinarnymi zbudowana na 11ty i hostowana na GitHub Pages.

## Szybki start

```bash
# Instalacja zależności
npm install

# Uruchomienie lokalnie
npm run dev

# Budowanie strony
npm run build
```

Strona będzie dostępna pod adresem: `http://localhost:8080/`

## Dodawanie przepisów

Dodaj nowy plik `.md` w folderze `content/recipes/`:

```markdown
---
title: "Nazwa przepisu"
slug: "nazwa-przepisu"
servings: 4
prep_time: 30
cook_time: 45
difficulty: "łatwy"
categories:
  - "dania główne"
  - "obiad"
ingredients:
  - "200g mąki"
  - "2 jajka"
  - "100ml mleka"
image: "/assets/images/przepis.jpg"
---

## Przygotowanie

Tutaj opisz kroki przygotowania...
```

### Poziomy trudności
- `łatwy`
- `średni` 
- `trudny`

## Deploy na GitHub Pages

1. Utwórz repozytorium na GitHub
2. Push kodu: `git push origin main`
3. W Settings → Pages wybierz "GitHub Actions"
4. Strona zostanie automatycznie zbudowana i wdrożona!

## Struktura projektu

```
recipe-page/
├── content/
│   ├── index.njk          # Strona główna
│   └── recipes/           # Przepisy w Markdown
├── _includes/             # Szablony Nunjucks
├── _data/                 # Konfiguracja strony
├── assets/
│   └── css/style.css      # Style CSS
└── .github/workflows/     # GitHub Actions
```

## Licencja

MIT
