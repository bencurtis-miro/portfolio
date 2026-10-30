# Your Portfolio Site

A self-contained website – no build tools, no npm, no server required.

**The main site**
- **`data.js`** – all your real content (name, headline, stats, introduction, projects, CV). This is the file you'll touch day-to-day.
- **`index.html`** – page structure. Edit only if you want to change what sections exist.
- **`styles.css`** – visual design (colours, type, layout, animation).
- **`script.js`** – behaviour (navigation, animations, the short/full CV). You shouldn't need to touch this.
- **`contact.html`** and **`contact.js`** – the Get in touch page and its form.
- **`contours.js`** – the drifting contour lines behind the hero. Colours and speed are at the top of the file under Settings.

**The KSB evidence section (University – ST0481 apprenticeship)** – kept apart so it can be removed in one go:
- **`ksb-data.js`** – every KSB, its status and its evidence.
- **`ksb.js`** – the progress panel, filters, cards, evidence popup and the KSB pills on project cards.
- **`ksb.css`** – the section's styles.

## Editing your content

Open `data.js` in any text editor (VS Code is a good free option). It's split into:

1. **`SITE`** – your name, role, headline, contact details, and two switches: `contactForm` and `showKsbEvidence`.
2. **`HERO_STATS`** – the four numbers in the hero.
3. **`ABOUT`** – the introduction: the opening statement, the paragraphs and the Outside of work tiles.
4. **`PROJECTS`** – one entry per piece of work, including its `results`.
5. **`CV`** – the summary (one string per column), experience, education and skills. Entries with `overview: true` appear in the short CV.

KSB evidence lives in **`ksb-data.js`**. For each KSB, set `status` to `"not-started"`, `"in-progress"` or `"complete"` and add entries to its `evidence` list. An evidence entry with `project: "<project id>"` links to that project and adds a KSB pill to its card.

Save, refresh the page in your browser, and you'll see your changes.

## Removing the KSB section

**To hide it** (reversible): set `showKsbEvidence: false` in `SITE` in `data.js`. The section, its navigation links and the KSB pills on project cards all disappear.

**To remove it for good**, once the apprenticeship is finished:
1. Delete `ksb-data.js`, `ksb.js` and `ksb.css`, and the `evidence/` folder of screenshots.
2. In `index.html`, delete the three lines marked "KSB evidence (University)" in the head and at the bottom, the block between "KSB EVIDENCE (University) – start" and "KSB EVIDENCE – end", the "KSB DETAIL POPUP" block, and the "KSB evidence" navigation link.
3. In `contact.html`, delete the "KSB evidence" navigation link.

The rest of the site works without any of these, so if something is missed, nothing breaks.

## The Get in touch form

GitHub Pages can't receive form submissions on its own. Out of the box, the form on `contact.html` opens the visitor's email app with their message filled in, addressed to the `email` in `SITE`.

To have messages arrive straight in your inbox instead, create a free form at a service such as [Formspree](https://formspree.io), copy the form's endpoint (it looks like `https://formspree.io/f/abcdwxyz`) and paste it into `contactForm` in `SITE` in `data.js`.

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
