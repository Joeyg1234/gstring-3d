G-STRING 3D VIEWER — HOSTED SITE
=================================

WHAT THIS IS
One small viewer page (viewer.html) that can show ANY of your parts in 3D,
plus a models/ folder with one .json file per part. The viewer picks the
model from the web address.

HOSTING — ALREADY DONE
  This folder is published from the GitHub repo  Joeyg1234/gstring-3d
  via GitHub Pages. Live base URL:
      https://joeyg1234.github.io/gstring-3d
  Test link (spinning shelf rest):
      https://joeyg1234.github.io/gstring-3d/viewer.html?model=osprey-shelf-rest

WIRE THE WIX PRODUCT PAGE (one time)
  Open velo-product-page.js (in this folder) — instructions at the top.
  Short version:
    1. Wix Editor -> Product Page template -> add an Embed HTML element
       ("Website address" mode, leave address blank)
    2. Turn on Dev Mode, open the Product Page's code panel
    3. Paste the contents of velo-product-page.js
       (VIEWER_BASE is already set to your GitHub Pages URL)
    4. In MODELS, list each product slug -> model name
    5. Preview, then Publish

ADDING A NEW PART LATER
    1. Give Claude the STEP file -> new models/NAME.json goes in the repo
       and gets pushed (Claude can do this from your machine)
    2. Add one line to MODELS in the product page code
  That's the whole process.

EXTRAS
  - Force a display rotation:  ...&rot=90   (or set "rot" in the json)
  - Override the title label:  ...&title=My Part Name
  - Models with a body named "string" get string-color swatches;
    all other parts get Anodize (metallic) + Powder coat (matte) rows.

CURRENT MODELS
  osprey-shelf-rest   (rot 90 baked in)
  pro2g-shelf-rest
  grex-gen2           (full bow, string color picker)
