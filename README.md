# Your Portfolio Site

A self-contained website – no build tools, no npm, no server required.
Three files do everything:

- **`data.js`** – all your real content (name, KSBs, projects, CV). This is the only file you should need to touch day-to-day.
- **`index.html`** – page structure. Edit only if you want to change what sections exist.
- **`styles.css`** – visual design (colours, type, layout).
- **`script.js`** – behaviour (filtering, the KSB detail popup, navigation). You shouldn't need to touch this.

## Editing your content

Open `data.js` in any text editor (VS Code is a good free option). It's split into:

1. **`SITE`** – your name, role, tagline, contact details.
2. **`KSBS`** – pre-filled with the 14 Knowledge, 15 Skill and 7 Behaviour points from the ST0481 standard, paraphrased into plain language. For each one, as you complete real work:
   - Change `status` to `"in-progress"` or `"complete"`.
   - Add entries to the `evidence` array (e.g. `evidence: ["Wrote the Q3 campaign brief", "Presented results to the marketing lead"]`).
   - Set `linkedProject` to a project's `id` (see below) to connect the two.
3. **`PROJECTS`** – one entry per real piece of work. Delete the two example entries and add your own. The `ksbs` array should list the KSB codes that project demonstrates – this is what ties your evidence together across the site.
4. **`CV`** – your experience, education and skills, in the same format as the placeholder entries.

Save the file, refresh the page in your browser (just double-click `index.html`), and you'll see your changes.

## Previewing locally

Just open `index.html` directly in a browser – double-click it. Everything works without a local server.

## Deploying it for free

**Easiest option – GitHub Pages:**
1. Create a free GitHub account if you don't have one, and a new repository (e.g. `portfolio`).
2. Upload all the files in this folder to that repository (drag-and-drop works on github.com, or use `git push` if you're comfortable with it).
3. In the repo, go to **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`, and save.
4. Your site will be live within a minute or two at `https://yourusername.github.io/portfolio`.

**Alternative – Netlify or Vercel:** both let you drag-and-drop this folder in a browser and get a live URL instantly, no account setup for GitHub required. Worth trying if GitHub feels like a hurdle.

**Custom domain (optional, ~£10–15/year):** once you're happy with the site, buying a domain like `yourname.com` and pointing it at GitHub Pages (or Netlify/Vercel) takes about 15 minutes and reads much better on a CV than a generated subdomain.

## A note on the KSB section and privacy

If any of your evidence references confidential employer information, consider either:
- Keeping the write-ups general enough not to disclose sensitive detail, or
- Not making the site's URL public/indexed, and sharing the link directly with your assessor instead.

GitHub Pages and Netlify sites are public by default – there's no built-in password gate on the free tier of either.
