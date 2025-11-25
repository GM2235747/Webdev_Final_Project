# Nanami

Personal music archive front-end. Cryptic, minimal, anti-algorithm. Built with Next.js 15, Tailwind CSS 4, and shadcn/ui.

![Nanami screenshot](./public/og-image.jpg)

## Structure

### Pages
- `/` - Landing with cryptic feature list
- `/selections` - Curated playlist grid
- `/selections/[slug]` - Individual selection detail with tracklist
- `/archive` - Full archive index with methodology notes
- `/about` - Solo archive mission statement
- `/contact` - Inquiry form with obfuscated references

### Data
- `src/data/selections.ts` - Centralized playlist metadata & tracklists extracted from `mai.md`

### Theme
- Minimal, archival aesthetic
- Dark/light mode toggle
- Color-coded system (red/green/blue) for notes/recs/links (not visually rendered)
- Anti-algorithm stance, manual curation emphasis

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** components
- **React Hook Form** + Zod validation
- **next-themes** for dark/light mode

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Notes

- Originally based on shadcnblocks Mainline template
- Adapted for personal music archiving project (Webdev Final Project)
- All SaaS/business components removed (pricing, testimonials, FAQ, login/signup)
- Rebranded from "Mainline" → "Nanami"
- Tracklists sourced from `mai.md` reference document

## Attribution

- **Student**: Guilliano D. Magbitang
- **Course**: BSIT
- **Date**: November 2025
- **Base Template**: [shadcnblocks Mainline](https://shadcnblocks.com) by Callum Flack, Yassine Zaanouni, Rob Austin
