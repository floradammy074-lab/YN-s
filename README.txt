WALLET APP (mobile UI prototype - home screen)
==============================================

FILES
  index.html     Page structure (top bar, balance, Deposit/Withdraw, cards, nav)
  style.css      All styling (colours and sizes are at the top and in each section)
  script.js      Copy-wallet-number button and bottom-nav highlight
  manifest.json  Web app manifest (name, colours) for Add to Home Screen
  README.txt     This file

HOW TO RUN
  1. Keep all four code files in the same folder.
  2. Open index.html in a browser (best at phone width, or use dev tools > device toolbar).
  3. On GitHub Pages: upload all files to the repo root, turn on Pages, open the link on your phone.

WHAT IS BUILT
  - Home screen only, laid out from the mockup. The PIN login screen is not built yet.
  - Balance starts at $0.00 (first launch). The small $ sits at the front of the amount and the
    cents (.00) are grey on every amount, including the transaction list.
  - The "wallet" wordmark is a placeholder: change it in index.html (class "logo").
  - Notification and Transactions cards use sample content from the mockup.
  - The copy icon next to the wallet number copies it. The bottom nav icons highlight when tapped.

NOTES
  - The font (Plus Jakarta Sans) loads from Google Fonts; it falls back to the system font offline.
  - No app icons are included yet, so Add to Home Screen will use a generic icon.
