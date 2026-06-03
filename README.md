# Aubaid Ahmed Saiyed — MERN Portfolio

Personal engineering portfolio: full stack, backend-focused, product-minded.

## Stack

- **Client:** React, Vite, Tailwind, Framer Motion, Axios
- **Server:** Express, MongoDB

## Run locally

```bash
cd server && npm install && cp .env.example .env
cd ../client && npm install && npm run dev
# Terminal 2:
cd server && npm run dev
```

Open [http://localhost:4173](http://localhost:4173)

## Customize

| File | What to update |
|------|----------------|
| `client/src/data/siteData.js` | Email, social links, resume, `profileImage` |
| `client/src/data/projects.js` | GitHub and demo URLs |

Place your portrait at `client/public/photo.jpg` and set `profileImage: '/photo.jpg'`.

## Deploy

- **Vercel:** `VITE_API_URL` → backend URL
- **Render:** `MONGO_URI`, `PORT`, `CLIENT_URL`
