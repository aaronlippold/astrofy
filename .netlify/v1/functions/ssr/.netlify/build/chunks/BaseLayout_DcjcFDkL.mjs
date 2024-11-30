import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, i as defineScriptVars, a as renderComponent, j as renderHead, e as renderSlot } from './astro/server_BHtpMd9k.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Dmo1YDdc.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './config_BkLJQz7g.mjs';

const $$Astro$5 = createAstro("https://carmelina-ayala.netlify.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/social_img.webp", ogType = "website" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/BaseHead.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm print:hidden"> <div class="navbar"> <div class="navbar-start"> <label for="my-drawer" class="btn btn-square btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> </div> <div class="navbar-center"> <a class="btn btn-ghost normal-case text-xl" href="/">Carmelina Ayala</a> </div> <div class="navbar-end"></div> </div> </div>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center text-base-content py-6 print:hidden"> <div class="container mx-auto px-4"> <div class="pb-2"> <p class="text-sm">
&copy; ${today.getFullYear()} Carmelina Ayala
</p> <!-- <p class="text-sm">
        <a href="https://maps.google.com/?q=23661+Sailfish+Square,+Brambleton,+VA+20148" target="_blank" class="text-blue-500 hover:underline">
          23661 Sailfish Square, Brambleton, VA 20148
        </a>
      </p>
      <p class="text-sm">
        <a href="tel:+17038629240" class="text-blue-500 hover:underline">
          703-862-9240
        </a>
      </p>
      <p class="text-sm">
        <a href="mailto:carmelinaayalapineda@gmail.com" class="text-blue-500 hover:underline">
          carmelinaayalapineda@gmail.com
        </a>
      </p> --> </div> </div> </footer>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/Footer.astro", void 0);

const $$SideBarFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="block sticky pointer-events-none bottom-10 bg-base-200 justify-center h-12 [mask-image:linear-gradient(transparent,#000000)]"></div> <div class="social-icons px-4 pb-5 pt-1 flex self-center justify-center sticky bottom-0 bg-base-200"> <!-- <a
        href="https://manuelernestog.github.io/support-my-work/"
        target="_blank"
        class="mx-3"
        aria-label="Support my work"
        title="Support my work"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: currentColor;transform: ;msFilter:;"
            ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z"
            ></path></svg
        >
    </a>
    <a href="https://github.com/manuelernestog" target="_blank" class="mx-3" aria-label="Github" title="Github">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: currentColor;transform: ;msFilter:;"
            ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
        </svg>
    </a>
    <a href="https://twitter.com/manuelernestog" target="_blank" class="mx-3" aria-label="Twitter" title="Twitter">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: currentColor;transform: ;msFilter:;"
            ><path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
            ></path>
        </svg>
    </a> --> <a href="https://www.facebook.com/carmelina.ayala/" target="_blank" class="mx-3" aria-label="Facebook" title="Facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"> <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"></path> </svg> </a> </div>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/SideBarFooter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://carmelina-ayala.netlify.app");
const $$SideBarMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SideBarMenu;
  const { sideBarActiveItemID } = Astro2.props;
  const activeClass = "bg-base-300";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<ul class="menu grow shrink menu-md overflow-y-auto"> <li><a class="py-3 text-base" id="home" href="/">Home</a></li> <!-- <li><a class="py-3 text-base" id="projects" href="/projects">Projects</a></li>\n    <li><a class="py-3 text-base" id="services" href="/services">Services</a></li>\n    <li><a class="py-3 text-base" id="store" href="/store">Store</a></li> --> <li><a class="py-3 text-base" id="blog" href="/blog/">Blog</a></li> <li><a class="py-3 text-base" id="cv" href="/cv">Resume</a></li> <li> <a class="py-3 text-base" href="mailto:carmelinaayalapineda@gmail.com" target="_blank" referrerpolicy="no-referrer-when-downgrade">Contact</a> </li> </ul> <script>(function(){', "\nconst activeItemElem = document.getElementById(sideBarActiveItemID);\nactiveItemElem && activeItemElem.classList.add(activeClass);\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({ sideBarActiveItemID, activeClass }));
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/SideBarMenu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://carmelina-ayala.netlify.app");
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const { sideBarActiveItemID } = Astro2.props;
  const activeClass = "bg-base-300";
  return renderTemplate(_a || (_a = __template(["", '<div class="px-4 pb-5 pt-1 print:block p-2 bg-base-200"> <p class="text-lg font-semibold">Carmelina Ayala</p> <p class="text-sm"> <a href="https://maps.app.goo.gl/XrekKwmKY7HVJzmx5" target="_blank" class="text-blue-500 hover:underline">\nBrambleton, VA 20148\n</a> </p> <p class="text-sm"> <a href="tel:+17038629240" class="text-blue-500 hover:underline">\n703-862-9240\n</a> </p> <p class="text-sm"> <a href="mailto:carmelinaayalapineda@gmail.com" class="text-blue-500 hover:underline">\ncarmelinaayalapineda@gmail.com\n</a> </p> </div> <script>(function(){', "\nconst activeItemElem = document.getElementById(sideBarActiveItemID);\nactiveItemElem && activeItemElem.classList.add(activeClass);\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({ sideBarActiveItemID, activeClass }));
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/ContactInfo.astro", void 0);

const $$Astro$2 = createAstro("https://carmelina-ayala.netlify.app");
const $$SideBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { sideBarActiveItemID } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="drawer-side z-40"> <label for="my-drawer" class="drawer-overlay"></label> <aside class="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col"> <div class="w-fit mx-auto mt-5 mb-6"> <a href="/"> <div class="avatar transition ease-in-out hover:scale-[102%] block m-auto"> <div class="w-[8.5rem]"> ${renderComponent($$result, "Image", $$Image, { "class": "mask mask-circle", "format": "webp", "width": 300, "height": 300, "src": "/profile.webp", "alt": "Profile image" })} </div> </div> </a> ${renderComponent($$result, "ContactInfo", $$ContactInfo, {})} </div> ${renderComponent($$result, "SideBarMenu", $$SideBarMenu, { "sideBarActiveItemID": sideBarActiveItemID })} ${renderComponent($$result, "SideBarFooter", $$SideBarFooter, {})} </aside> </div>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/SideBar.astro", void 0);

const $$Astro$1 = createAstro("https://carmelina-ayala.netlify.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/node_modules/.pnpm/astro@4.15.11_rollup@4.24.0_typescript@5.6.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://carmelina-ayala.netlify.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    image,
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    includeSidebar = true,
    sideBarActiveItemID,
    ogType
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="lofi"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, ",": true, "ogType": ogType })}${renderTemplate`${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`}${renderHead()}</head> <body> <div class="bg-base-100 drawer lg:drawer-open"> <input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content bg-base-100"> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE, "class": "print:hidden" })} <div class="md:flex md:justify-center"> <main class="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, { "class": "print:hidden" })} </div> ${includeSidebar && renderTemplate`${renderComponent($$result, "SideBar", $$SideBar, { "sideBarActiveItemID": sideBarActiveItemID, "class": "print:hidden" })}`} </div> </body></html>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
