G-STRING 3D VIEWER — HOSTED SITE FOLDER
========================================

WHAT THIS IS
One small viewer page (viewer.html) that can show ANY of your parts in 3D,
plus a models/ folder with one .json file per part. The viewer picks the
model from the web address, like:
    https://YOUR-SITE/viewer.html?model=osprey-shelf-rest

STEP 1 — HOST IT (one time, ~10 minutes, free)
  Easiest: Netlify Drop
    1. Go to  https://app.netlify.com/drop
    2. Create the free account it asks for
    3. Drag this WHOLE gstring-3d-site folder onto the page
    4. It gives you a link like  https://something-1234.netlify.app
       (you can rename it in Site settings, e.g. gstring3d.netlify.app)
    5. Test it:  open  YOUR-LINK/viewer.html?model=osprey-shelf-rest
       — you should see the shelf rest spinning.

STEP 2 — WIRE THE PRODUCT PAGE (one time)
  Open velo-product-page.js (in this folder) — the instructions are at
  the top of the file. Short version:
    1. Wix Editor -> Product Page template -> add an Embed HTML element
    2. Turn on Dev Mode, open the Product Page's code panel
    3. Paste the contents of velo-product-page.js
    4. Put your Netlify link in VIEWER_BASE
    5. List your products in MODELS (slug -> model name)
    6. Preview, then Publish

ADDING A NEW PART LATER
    1. Give Claude the STEP file -> you get a new models/NAME.json
    2. Drag the updated folder onto Netlify Drop again (same site,
       "Deploys" tab -> drag & drop)
    3. Add one line to MODELS in the product page code
  That's the whole process. No re-pasting 50KB blobs anywhere.

EXTRAS
  - Force a display rotation:  ...&rot=90   (or set "rot" in the json)
  - Override the title label:  ...&title=My Part Name
  - Models with a body named "string" get string-color swatches;
    all other parts get Anodize (metallic) + Powder coat (matte) rows.

CURRENT MODELS
  osprey-shelf-rest   (rot 90 baked in)
  pro2g-shelf-rest
  grex-gen2           (full bow, string color picker)
