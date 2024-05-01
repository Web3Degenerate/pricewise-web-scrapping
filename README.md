## Project Setup

Run commands at [18th minute](https://www.youtube.com/watch?v=lh9XVGv6BHs&t=1129s).

- `npx create-next-app@latest ./`

  - TypeScript - Yes
  - ESLint - No
  - Tailwind CSS - Yes
  - 'src/' directory - No
  - App Router - Yes
  - import alias - No

- When prompted to update npm, we ran
  - `npm install -g npm@10.5.0`
    - This got the installation to work on the HP 15.6

### Run localhost:3000

- `npm run dev`

---

### Third Party Packages

1. [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
  - `npm i react-responsive-carousel`
  - _See Docs_


---

---

### Plugins

- Install **ES7+ React Snippets by dsznajder**

  - Allows you to run `rafce`

- Install **Tailwind CSS IntelliSense _(Intelligent Tailwind CSS tooling for VS Code)_ by Tailwind Labs** plugin. [29:14]

## Project Repositories

1. Update `app/globals.css`

   - [https://github.com/adrianhajdin/pricewise/blob/main/app/globals.css](https://github.com/adrianhajdin/pricewise/blob/main/app/globals.css)

2. Update `tailwind.config.ts`

   - [https://github.com/adrianhajdin/pricewise/blob/main/tailwind.config.ts](https://github.com/adrianhajdin/pricewise/blob/main/tailwind.config.ts)

3. ## Update `app/layout.tsx`

---

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
