## What technologies are used?

1. **React** — A popular JavaScript library for building UI components.
2. **Vite** — A modern, fast build tool and dev server, especially great for React projects.
3. **TypeScript** — A typed superset of JavaScript, adds type safety to your code.
4. **Tailwind CSS** — Utility-first CSS framework for styling your app.
5. **shadcn/ui** — A component library based on Radix UI and Tailwind CSS (used for building UI components).
6. **React Router** — For routing between pages (if your app has multiple views).

---

## How is the code structured?

* **`src/` folder**: This is where your main React app lives.

  * `main.tsx` — Entry point of the React app, this file renders your root React component (`App`) into the DOM.
  * `App.tsx` — The main component where you define your page layout and routes (if any).
  * `components/` — Reusable UI components (buttons, headers, cards, etc.).
  * `pages/` (if present) — Components that represent different pages/views.
  * `styles/` or Tailwind config — For styling your app with Tailwind CSS.

* **`public/` folder**: Static assets like favicon, images, etc.

* **`package.json`**: Defines dependencies and scripts to run/build the app.

* **`vite.config.ts`**: Configuration for Vite (dev server, build, aliases).

---

## How does it work?

* When you run `npm run dev`:

  * Vite starts a dev server and serves your React app on a local URL (like [http://localhost:3000](http://localhost:3000)).
* When you run `npm run build`:

  * Vite compiles your React + TypeScript + Tailwind code into static files (`index.html`, `.js` bundles, `.css`) in the `dist/` folder.
* You deploy the `dist/` folder content to GitHub Pages or any static hosting.

---

## How to do simple modifications?

### Example: Change the homepage title

1. Open `src/App.tsx` (or wherever your main page content is).

2. Find the element showing the title or heading, e.g.:

```tsx
<h1 className="text-4xl font-bold">Welcome to VemaraHub</h1>
```

3. Change the text inside the `<h1>`:

```tsx
<h1 className="text-4xl font-bold">Hello Wereld - IT Consultancy & Training</h1>
```

4. Save the file.

5. Run locally to see changes:

```bash
npm run dev
```

6. Your browser opens [http://localhost:3000](http://localhost:3000) and you see the updated title.

7. When happy, rebuild and redeploy:

```bash
npm run build
# push dist/ contents to your gh-pages branch or deploy method
```

---

### Another simple example: Add a new paragraph below title

In the same `src/App.tsx`:

```tsx
<h1 className="text-4xl font-bold">Hello Wereld - IT Consultancy & Training</h1>
<p className="mt-4 text-lg text-gray-600">Helping you grow with expert IT consulting and hands-on training.</p>
```

---

## Quick tips for you:

* **JSX syntax:** React uses HTML-like code inside JavaScript/TypeScript files — easy once you get used to it.
* **Tailwind CSS:** The `className` attribute contains utility classes that style elements without writing separate CSS files.
* **Editing:** Use VSCode or any code editor that supports TypeScript and React.
* **Testing:** Run `npm run dev` for quick feedback in the browser.
* **Deploying:** Always build (`npm run build`) and push your static files to your hosting (GitHub Pages in your case).
