/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent } from '../chunks/astro/server_BHtpMd9k.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DcjcFDkL.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://carmelina-ayala.netlify.app");
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/components/cv/TimeLine.astro", void 0);

const $$Cv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto print:prose-xs print:leading-tight print:space-y-2 print:m-6 print:pb-10"> <div class="mb-5 print:mb-2"> <div class="mb-10 print:hidden flex justify-end"> <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onclick="window.print()">
Print PDF
</button> </div> <div class="text-3xl w-full font-bold print:text-xl">Overview</div> </div> <div class="mb-10 text-justify print:mb-4"> <p class="text-lg">
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
</p> </div> <div class="mb-5 print:mb-2"> <div class="text-3xl w-full font-bold print:text-xl">Experience</div> </div> <div class="time-line-container mb-10 space-y-2 print:space-y-2 print:mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Full-Time Nanny", "subtitle": "From January 2024 to November 2024 with The Manning Family, Ashburn, VA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 print:mx-4"> <li>Cared for their daughter in her daily needs.</li> <li>Supported the family with daily childcare chores and meals.</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Full-Time Nanny", "subtitle": "From January 2023 to September 2023 with The McCormick Family, Sterling, VA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 print:mx-4"> <li>Cared for their daughter (14 months) and newborn son.</li> <li>Supported the family with daily childcare chores and meals.</li> <li>
Engaged both children in learning, outdoor play, and well-being
            activities such as walks, park visits, and playdates.
</li> <li>
Helped maintain the children's toys, clothes, and other belongings.
</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Full-Time Nanny", "subtitle": "From September 2020 to December 2022 with The Williams Family, Broadlands, VA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 print:mx-4"> <li>
Cared for their daughter from 4 months old until almost 3 years old.
</li> <li>
Developed daily activity and development plans for positive and
            enriching skill-building.
</li> <li>
Organized daily walks in the park and other outdoor activities.
</li> <li>
Supported the development of socialization, interaction, and
            communication skills in preparation for pre-kindergarten and
            kindergarten.
</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Full-Time Nanny", "subtitle": "From January 2015 to July 2020 with The Colatosti Family, Brambleton, VA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 print:mx-4"> <li>
Cared for their daughter from birth until they moved to Boston.
</li> <li>
Supported the family by driving, walking, and running with their
            daughter to various activities, including dance, swim class, school,
            events, and playdates.
</li> <li>
Developed a deep trust and bond with the family, with their daughter
            often by my side throughout the day.
</li> </ul> ` })} </div> <div class="mb-5 print:mb-10 print:mt-10"> <div class="text-3xl w-full font-bold print:text-xl">
Training & Certifications
</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2 print:mx-4 print:mb-4"> <li>Infant & Child CPR</li> <li>Emergency Care Certificate</li> <li>Current Virginia Driver's License</li> </ul> <div class="mb-5 print:mb-2"> <div class="text-3xl w-full font-bold print:text-xl">Education</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2 print:mx-4 print:mb-4"> <li> <div class="font-bold text-lg">Central Escolar High School</div> <div class="text-sm text-gray-600">
2000 to 2004, San Salvador, El Salvador
</div> </li> </ul> <div class="mb-5 print:mb-2"> <div class="text-3xl w-full font-bold print:text-xl">Languages</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2 print:mx-4 print:mb-4"> <li>Spanish</li> <li>English</li> </ul> <div class="mb-5 print:mb-2"> <div class="text-3xl w-full font-bold print:text-xl">Skills</div> </div> <ul class="list-disc columns-2 mx-6 mb-10 gap-2 sm:columns-1 print:columns-1 print:mx-4 print:mb-4 leading-relaxed sm:leading-normal"> <li>Learning through Play & Activities</li> <li>Emotionally Supportive</li> <li>Long-Term Relationships</li> <li>Newborn & Infants (0-6)</li> <li>Active Enrichment Activities</li> <li>Family-Oriented</li> </ul> <div class="mb-5 print:mb-2"> <div class="text-3xl w-full font-bold print:text-xl">References</div> <p class="print:mb-4">
References' contact information is available upon request.
</p> </div> </div> ` })}`;
}, "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/cv.astro", void 0);

const $$file = "/Users/alippold/github/aaronlippold/carmelina-ayala-netlify-app/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
