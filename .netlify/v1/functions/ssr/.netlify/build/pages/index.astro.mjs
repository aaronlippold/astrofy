/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_BHtpMd9k.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DcjcFDkL.mjs';
import { $ as $$HorizontalCard } from '../chunks/HorizontalCard_B09oeghT.mjs';
import { g as getCollection } from '../chunks/_astro_content_C_JTSOXj.mjs';
import { c as createSlug } from '../chunks/createSlug_D-iatWqU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const last_posts = posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Hello 👋</div> <div class="text-5xl font-bold">I'm Carmelina Ayala</div> <div class="text-3xl py-3 font-bold">Professional Home Nanny</div> <div class="py-2"> <p class="text-lg">
I am delighted to serve as a nanny in the Brambleton community and
        surrounding areas. With over 15 years of experience, I specialize in
        caring for newborns up to 5 years old. I hold active Infant and Child
        CPR and Emergency Care certificates and am fully vaccinated with Pfizer.
</p> <br> <p class="text-lg">
I take pride in becoming a true part of the family. I prefer to support
        families through long-term relationships, as I genuinely enjoy being an
        integral part of the family.
</p> <br> <p class="text-lg">
I provide daily care, weekend support, and 'date-night' assistance, as
        well as enrichment activities, external activities, and day-to-day tasks
        around the home.
</p> <div class="text-2xl py-3 font-bold space-y-2">How I Work with Families</div> <p class="text-lg">
You can review my
<a href="/cv" class="inline-flex items-center text-blue-700 border border-blue-700 rounded text-sm px-2 py-1 transition-colors duration-300 hover:bg-blue-700 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path> </svg>
resume
</a>
and my general
<a href="/blog/nanny-work-agreement" class="inline-flex items-center text-blue-700 border border-blue-700 rounded text-sm px-2 py-1 transition-colors duration-300 hover:bg-blue-700 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l5.59-5.59L18 9.5l-7 7z"></path> </svg>
Nanny Work Agreement
</a>
to get a better idea of who I have worked with, how we worked together, and what to expect.
</p> </div> <!-- <div class="mt-8">
      <a class="btn" href="https://twitter.com/manuelernestog" target="_blank"> Let's connect!</a>
      <a href="https://github.com/manuelernestog/astrofy" target="_blank" class="btn btn-outline ml-5">
        Get This template
      </a>
    </div> --> </div>  <div> <div class="text-3xl w-full font-bold mb-5 mt-10">Latest from My Blog</div> </div> ${last_posts.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/blog/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge })} <div class="divider my-0"></div> ` })}`)}` })}`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/index.astro", void 0);

const $$file = "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };