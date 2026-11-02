# Global CX Priority Review

The priorities board for the review with Steffi: 36 topics, each with its discovery notes (Fact, To verify, Idea, Target) under "Discovery notes".

**Confidentiality:** this file has no sales or SKU figures, but it does include colleagues' names and customer and partner names (for example Nestlé, CHS, ProMix, Axius). Publish it with GitHub Pages only if Step 3 below shows the **Private** option. Otherwise keep the repository private and open `index.html` from a downloaded copy.

## What's in the folder

| File | What it is |
|---|---|
| `index.html` | The page. You rarely need to touch it. |
| `data/topics.js` | The priorities: bucket, owner, notes, order and text. **This is the file you edit.** |

Keep `data/topics.js` inside a folder called `data`, next to `index.html`.

## Already uploaded the first version?

Replace both files: upload the new `index.html` and the new `data/topics.js` over the old ones (Add file → Upload files, then Commit). If you already sorted topics or added notes in the old file, tell me before you replace it and I'll merge your changes in, or copy your buckets, owners and notes across by hand.

## Setup, one step at a time

**Step 1: Upload the files**
1. Unzip the download. You'll see `index.html`, `README.md` and a `data` folder.
2. Open your repository in GitHub and click **Add file → Upload files**.
3. Drag in `index.html`, `README.md` and the whole `data` folder, then click **Commit changes**.
4. Check: the repository's front page lists `data/`, `index.html` and `README.md`.

**Step 2: Turn on GitHub Pages**
1. Click **Settings**, then **Pages** in the left sidebar.
2. Under "Build and deployment", set **Source = Deploy from a branch**, **Branch = main** and **Folder = / (root)**, then click **Save**.

**Step 3: Check who can see it**
- If you see a **GitHub Pages visibility** dropdown, choose **Private**. Only signed-in members of your organization can open the site.
- If there's no dropdown, the site is public to anyone with the link, even though the repository is private. That's why this version has no sales data.
- If it asks you to upgrade or make the repository public, Pages isn't available on this account for a private repository.

**Step 4: Open the site**
Wait about a minute, then refresh the Pages screen and click **Visit site**.

## Updating the priorities

### During the review, on the page
1. Use the dropdowns to set each topic to Now, Next, Later or Park. Type an owner and notes, and use the arrows to reorder.
   These changes are saved in your browser only. The page shows "Unsaved changes" until you save them to GitHub.
2. Click **Copy for GitHub**.
3. In GitHub, open `data/topics.js` and click the **pencil icon**. Select all (Ctrl+A or Cmd+A), paste, and click **Commit changes**.
4. The live page updates in about a minute, and everyone sees the same priorities.

"Discard my changes" throws away your browser's unsaved edits and goes back to what's in GitHub.

### Straight in GitHub
Open `data/topics.js`, click the pencil, and change the values between the quotes. To add a discovery note, copy a line inside `"details"` such as `{ "type": "Fact", "text": "..." },` and change the text:

```
"bucket": "now",      ← now, next, later, park or unsorted
"order": 0,           ← position inside its bucket; 0 is the top
"owner": "Jennifer",
"notes": "Pilot starts in November",
```

Rules:
- Keep the double quotes around text, and a comma at the end of every line except the last one in a `{ }` block.
- To add a topic, copy a whole `{ … },` block and change the code and text.
- To remove a topic, delete its whole `{ … },` block.
- If the page says "No topics found" after a commit, there's a typo, usually a missing comma or quote. Open the file's **History** to compare with the previous version, and fix or revert.

### Changing page wording
Open `index.html`, click the pencil, find the sentence with Ctrl+F, change it and commit. Leave the code between `<script>` tags alone.
