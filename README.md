# Global CX Priority Review

The priorities board for the review with Steffi: 29 projects on the board (the tool topics now sit inside one **Tool stack strategy** project), each with its discovery notes. Four views: **List**, **Board** (drag between buckets), **Timeline** (Gantt) and **Tools** (the tool stack, one row per tool need).

## Before you publish

GitHub Pages sites on a personal account are **public**. Anyone with the link can open the page and read `data/topics.js`. This version holds no sales or SKU figures, but it does include colleagues' and customers' names.

GitHub Pages has nowhere to store changes. On this copy, edits stay **in each person's own browser**. The shared version on claude.ai saves changes for everyone; use that one for the review itself.

## What's in the folder

| File | What it is |
|---|---|
| `index.html` | The page. You rarely need to touch it. |
| `data/topics.js` | The priorities (bucket, timeframe, owner, notes, context, text) and the tool list (status, selected tool, owner, strategy). This is the file you update. |
| `README.md` | This file. |

Keep `topics.js` inside a folder called `data`, next to `index.html`.

## Set up (about 5 minutes)

1. In the repository, click **Add file → Upload files**. Drag in `index.html`, `README.md` and the whole `data` folder, then click **Commit changes**. Replace the old files if GitHub asks.
2. Go to **Settings → Pages**. Set Source to **Deploy from a branch**, Branch to **main**, folder to **/ (root)**, and click **Save**.
3. Wait 1–2 minutes and refresh. The live link appears at the top of that Pages screen.

## Using the page

- **Bucket:** click the bucket pill in the List, drag a card on the Board, or open a topic and pick Now, Next, Later, Park or To sort.
- **Timeframe:** click the timeframe. Pick a start (Day 0 to 180) and a finish (30 to 210 days), or enter exact dates with the calendar.
- **Context:** click the speech-bubble count, or open a topic. Add an owner, decision notes and dated context entries.
- **Tools:** open the Tools tab and click a tool to set its status, selected tool, owner and strategy. **+ Add a tool** adds a row.
- **Excel:** **Export to Excel** downloads one workbook with four sheets: all priorities, added context, decision notes, and the tool stack.

## Saving changes to GitHub, so everyone sees them

1. Click **Save to GitHub** in the orange note at the top of the page. The page copies the full contents of `data/topics.js`.
2. In GitHub, open `data/topics.js`, click the **pencil icon**, select all (Ctrl+A), paste, and click **Commit changes**.
3. The live page updates within about a minute.

If the page shows "No topics found" after a commit, the file has a typo, usually a missing comma or quote. Open the file's **History**, compare it with the previous version, and fix or revert it.
