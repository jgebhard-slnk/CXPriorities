Global CX Priority Review
The priorities board for the review with Steffi. This version has no sales or SKU data: the topics have no figures, and people's names are replaced with roles, so it is safe even if the site ends up public.
What's in the folder
File	What it is
`index.html`	The page. You rarely need to touch it.
`data/topics.js`	The priorities: bucket, owner, notes, order and text. This is the file you edit.
Keep `data/topics.js` inside a folder called `data`, next to `index.html`.
Setup, one step at a time
Step 1: Upload the files
Unzip the download. You'll see `index.html`, `README.md` and a `data` folder.
Open your repository in GitHub and click Add file → Upload files.
Drag in `index.html`, `README.md` and the whole `data` folder, then click Commit changes.
Check: the repository's front page lists `data/`, `index.html` and `README.md`.
Step 2: Turn on GitHub Pages
Click Settings, then Pages in the left sidebar.
Under "Build and deployment", set Source = Deploy from a branch, Branch = main and Folder = / (root), then click Save.
Step 3: Check who can see it
If you see a GitHub Pages visibility dropdown, choose Private. Only signed-in members of your organization can open the site.
If there's no dropdown, the site is public to anyone with the link, even though the repository is private. That's why this version has no sales data.
If it asks you to upgrade or make the repository public, Pages isn't available on this account for a private repository.
Step 4: Open the site
Wait about a minute, then refresh the Pages screen and click Visit site.
Updating the priorities
During the review, on the page
Use the dropdowns to set each topic to Now, Next, Later, Park or Questions (open questions, not priorities). Type an owner and notes, and use the arrows to reorder.
These changes are saved in your browser only. The page shows "Unsaved changes" until you save them to GitHub.
Click Copy for GitHub.
In GitHub, open `data/topics.js` and click the pencil icon. Select all (Ctrl+A or Cmd+A), paste, and click Commit changes.
The live page updates in about a minute, and everyone sees the same priorities.
"Discard my changes" throws away your browser's unsaved edits and goes back to what's in GitHub.
Straight in GitHub
Open `data/topics.js`, click the pencil, and change the values between the quotes:
```
"bucket": "now",      ← now, next, later, park, question or unsorted
"order": 0,           ← position inside its bucket; 0 is the top
"owner": "Jennifer",
"notes": "Pilot starts in November",
```
Rules:
Keep the double quotes around text, and a comma at the end of every line except the last one in a `{ }` block.
To add a topic, copy a whole `{ … },` block and change the code and text.
To remove a topic, delete its whole `{ … },` block.
If the page says "No topics found" after a commit, there's a typo, usually a missing comma or quote. Open the file's History to compare with the previous version, and fix or revert.
Changing page wording
Open `index.html`, click the pencil, find the sentence with Ctrl+F, change it and commit. Leave the code between `<script>` tags alone.
