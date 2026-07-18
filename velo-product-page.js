// ============================================================
// G-String 3D viewer — Product Page code
// Paste this into the PAGE CODE of the "Product Page" template
// (Wix Editor -> Dev Mode on -> open Product Page -> code panel).
//
// Setup (one time):
// 1. Add an Embed HTML element to the Product Page template.
//    Set "What do you want to add?" = Website address, leave the
//    address blank (this code fills it in). Note its ID (e.g. #html1)
//    in the Properties panel — change HTML_ID below if different.
// 2. Host the gstring-3d-site folder (Netlify Drop or GitHub Pages)
//    and put your site URL in VIEWER_BASE below.
// 3. Add one line to MODELS for every product that has a 3D model.
//    The key is the product's URL slug — the last part of its
//    product-page address. Example: for
//    .../product-page/enclosed-aluminum-osprey-rest
//    the slug is "enclosed-aluminum-osprey-rest".
//    The value is the model file name in /models (without .json).
//
// Products NOT listed here simply hide the viewer — safe for your
// whole store from day one.
// ============================================================

const VIEWER_BASE = "https://YOUR-SITE-NAME.netlify.app"; // <-- change me
const HTML_ID = "#html1";                                  // <-- your embed element's ID

const MODELS = {
    "enclosed-aluminum-osprey-rest": "osprey-shelf-rest",
    // "some-other-product-slug": "pro2g-shelf-rest",
    // "another-product-slug": "grex-gen2",
};

$w.onReady(async function () {
    try {
        const product = await $w('#productPage1').getProduct();
        const model = MODELS[product.slug];
        if (model) {
            $w(HTML_ID).src = `${VIEWER_BASE}/viewer.html?model=${model}`;
            $w(HTML_ID).expand();
        } else {
            $w(HTML_ID).collapse();
        }
    } catch (err) {
        console.log("3D viewer:", err);
        $w(HTML_ID).collapse();
    }
});
