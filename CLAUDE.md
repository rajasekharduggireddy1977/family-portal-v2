# Family Portal v2 — Claude Instructions
> Auto-loaded when working in this repo. Complements `~/CLAUDE.md` (user profile, documents, expiry data).

---

## 🖥️ REPO STRUCTURE

```
C:\Users\Raj\Documents\GitHub\family-portal-v2\
├── portal.js     ~11,600 lines   (all JS logic)
├── portal.css    ~5,820 lines    (all styles)
├── index.html    ~1,706 lines    (HTML shell)
├── banking/                      (statement analysis JSONs)
│   ├── index.json                (master index — list of available files)
│   ├── icici/ hdfc/ axis/        (per-bank folders)
│   └── {bank}/{YYYY-MM}.json     (Cowork-generated analysis files)
└── CLAUDE.md                     (this file)
```

**Active branch: `develop`** — NEVER push to `main`. GitHub Pages deploys from `develop`.

---

## ⚡ PORTAL EDITING PROTOCOL

> **NEVER run preview verification after edits** — skip all `preview_*` calls (screenshot, eval, snapshot) unless explicitly asked. Commit + push → report back is sufficient.

> **NEVER read `portal.js` or `portal.css` in full** — always grep → targeted Read → Edit.

> **NEVER launch portal-edit skill for large rewrites** — it loads heavy SKILL.md context + a sub-agent and wastes tokens without completing. Do all edits directly: grep → Read → Edit → commit.

> **NEVER start a preview server unless user explicitly asks to preview.** After previewing, always stop it with `preview_stop`. A running server triggers a built-in Stop hook "[Verification Required]" on every response — stopping the server is the only fix.

### Workflow
```
1. grep -n "§ MARKER" portal.js   →  get LIVE line N
2. Read offset=N limit=200        →  see only that section
3. Edit → commit → push
```

The `§` markers are permanent anchors — they travel with lines as the file grows. Never hardcode line numbers.

### Deploy
```bash
cd C:\Users\Raj\Documents\GitHub\family-portal-v2
git add <only changed files>
git commit -m "fix/feat/style: description"
git push origin develop
```

---

## 🗺️ SECTION REGISTRY

> `grep -n "§ MARKER" portal.js` at edit time → always accurate line number.

### portal.js — `§` markers

| Feature / Page | Grep string |
|---|---|
| Agenda / Tasks / Events | `§ SCHEDULER` |
| Appointments hub | `§ APPOINTMENTS_PAGE` |
| Health page | `§ HEALTH` |
| Budget tracker | `§ BUDGET` |
| Bank vault carousel | `§ BANK VAULT` |
| Non-banking assets | `§ NON-BANKING` |
| Members page | `§ MEMBERS` |
| Documents page | `§ DOCUMENTS` |
| Expiry tracker | `§ EXPIRY` |
| Home dashboard | `§ DASHBOARD` |
| Navigation / routing | `§ NAVIGATION` |
| Global member picker | `§ GLOBAL_MEMBER` |
| Search | `§ SEARCH` |
| AI panel (chat) | `§ AI_PANEL` |
| AI briefing widget | `§ AI_BRIEFING` |
| AI Groq integration | `§ AI_GROQ` |
| Command palette (⌘K) | `§ COMMAND_PALETTE` |
| Backup / restore | `§ BACKUP` |
| Upload hub | `§ UPLOAD_HUB` |
| Finance widget | `§ FINANCE` |
| Bills tracker | `§ BILLS` |
| Vehicle tracker | `§ VEHICLE` |
| Education / academics | `§ EDUCATION` |
| Widgets system | `§ WIDGETS` |
| App boot / init | `§ BOOT` |
| Theme toggle | `§ THEME` |
| PIN auth | `§ PIN_AUTH` |
| Utils / helpers | `§ UTILS_UI` |
| Vehicle service modal | `§ VEHICLE_SERVICE_MODAL` |

### portal.css — `§` markers

| Feature / Page | Grep string |
|---|---|
| Agenda / Scheduler page | `§ SCHEDULER` |
| Task sheet (add/edit form) | `§ TASK SHEET v2` |
| Health page | `§ HEALTH` |
| Budget page | `§ BUDGET` |
| Budget Analysis panel | `§ BUDGET ANALYSIS` |
| Members page | `§ MEMBERS` |
| Documents page | `§ DOCUMENTS` |
| Expiry page | `§ EXPIRY` |
| Home page (greeting, hero) | `§ HOME` |
| Dashboard overview panel | `§ OVERVIEW PANEL` |
| Bottom nav bar | `§ BOTTOM_NAV` |
| Dashboard bento cards | `§ DASHBOARD` |
| Bank vault carousel | `§ BANK_VAULT` |
| Non-banking assets | `§ NON_BANKING` |
| Vehicle service modal | `§ VEHICLE SERVICE MODAL` |

### index.html — `id=` grep patterns

| Feature | Grep pattern |
|---|---|
| Scheduler / Agenda page | `id="page-scheduler"` |
| Task add sheet | `id="sc-task-sheet"` |
| Event add sheet | `id="sc-event-sheet"` |
| Appointment sheet | `id="apptv4-sheet"` |
| Health page | `id="page-health"` |
| Budget page | `id="page-budget"` |
| Members page | `id="page-members"` |
| Documents page | `id="page-documents"` |
| Bottom nav | `id="bottom-nav"` |
| Topbar | `id="topbar"` |
| Agenda FAB button | `id="sc-fab-wrap"` |
| Welcome overlay | `id="welcome-overlay"` |

---

## ⚡ FUNCTION REGISTRY

> `grep -n "function saveSchedTask" portal.js` → live line → `Read offset=N limit=80`

| Function | Section | Purpose |
|---|---|---|
| `openSchedTaskSheet` / `saveSchedTask` | `§ SCHEDULER` | Task add/edit sheet open + save |
| `_sct2OpenMenu` | `§ SCHEDULER` | `···` context menu (Edit/Pin/Done/Delete) |
| `renderSchedTasks` / `renderSchedEvents` | `§ SCHEDULER` | Render task rail + events timeline |
| `openApptSheetV4` / `saveApptV4` | `§ APPOINTMENTS_PAGE` | Appointment add/edit/save |
| `openBmSheet` / `saveLabReport` | `§ HEALTH` | Biomarker sheet + lab report save |
| `bgtGoPanel` / `bgtSheetSave` | `§ BUDGET` | Budget panel nav + transaction save |
| `renderBgtAnalysis` | `§ BUDGET` | Statement analysis panel (panel 4) |
| `goPage` | `§ NAVIGATION` | Route to any page by name |
| `initApp` | `§ BOOT` | Master boot — init all modules |
| `setGlobalMember` | `§ GLOBAL_MEMBER` | Switch active member (all pages react) |

> ⚠️ `markTaskDone`, `undoTaskDone`, `_addToDoneList` — **DELETED** (2026-03-19). Done state handled via `_sct2OpenMenu` only.

---

## 🔄 DATA SYNC RULE

When editing portal data (expiry items, documents, member info), mirror changes in:
- `~/CLAUDE.md` — Document Registry / Expiry Quick-Reference
- `banking/index.json` — if adding a new statement analysis file

---

*Last updated: 2026-03-24 — added preview server stop rule + portal-edit skill token warning*
