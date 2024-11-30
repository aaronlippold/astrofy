import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { k as decodeKey } from './chunks/astro/server_BHtpMd9k.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.11_rollup@4.24.0_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/_page_.C6lIjJ0t.css"},{"type":"inline","content":".time-line-container>div:last-child .education__time>.education__line{display:none}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/_page_.C6lIjJ0t.css"},{"type":"inline","content":".time-line-container>div:last-child .education__time>.education__line{display:none}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/cv","isIndex":false,"type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/_page_.C6lIjJ0t.css"},{"type":"inline","content":".time-line-container>div:last-child .education__time>.education__line{display:none}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/_page_.C6lIjJ0t.css"},{"type":"inline","content":".time-line-container>div:last-child .education__time>.education__line{display:none}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"external","src":"/_astro/_page_.C6lIjJ0t.css"},{"type":"inline","content":".time-line-container>div:last-child .education__time>.education__line{display:none}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://carmelina-ayala.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/blog/tag/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/store/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/store/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/store/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/store/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/cv.astro",{"propagation":"none","containsHead":true}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.11_rollup@4.24.0_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro":"pages/blog/tag/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/cv@_@astro":"pages/cv.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/store/[slug]@_@astro":"pages/store/_slug_.astro.mjs","\u0000@astro-page:src/pages/store/[...page]@_@astro":"pages/store/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B0GtmL3r.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/blog/post1.md?astroContentCollectionEntry=true":"chunks/post1_9hVMNkAq.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item1.md?astroContentCollectionEntry=true":"chunks/item1_C6ZtRKR6.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item2.md?astroContentCollectionEntry=true":"chunks/item2_BAiQtUk3.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item3.md?astroContentCollectionEntry=true":"chunks/item3_CJz2Znb1.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/blog/post1.md?astroPropagatedAssets":"chunks/post1_C2zgrwAB.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item1.md?astroPropagatedAssets":"chunks/item1_Cw0DVBUD.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item2.md?astroPropagatedAssets":"chunks/item2_C9JvdSH8.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item3.md?astroPropagatedAssets":"chunks/item3_CLq6qwdU.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/blog/post1.md":"chunks/post1_3H93dwUJ.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item1.md":"chunks/item1_Cf1ARsCR.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item2.md":"chunks/item2_CUimRb6p.mjs","/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/content/store/item3.md":"chunks/item3_BpSAGq1Y.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fDDyMQpn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_page_.C6lIjJ0t.css","/family-agreement.webp","/favicon.png","/favicon.svg","/itemPreview.webp","/post1.docx","/post1.pdf","/post_img.webp","/profile.orig.webp","/profile.webp","/robots.txt","/social_img.webp","/_astro/hoisted.fDDyMQpn.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"vJdiDXvn0SNiu2RZffbEK2a8TRG1Mr6tcdR4JoayqR0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
