import rss from '@astrojs/rss';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/config_BkLJQz7g.mjs';
import { g as getCollection } from '../chunks/_astro_content_C_JTSOXj.mjs';
export { renderers } from '../renderers.mjs';

async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "https://carmelina-ayala.netlify.app",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
