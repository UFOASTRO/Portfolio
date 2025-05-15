const close = document.querySelector(".cancel");
const menu = document.querySelector(".hamburger");
const navmobile = document.querySelector(".navmobile");
menu.addEventListener("click", () => {
  navmobile.style.display = "flex";
});

close.addEventListener("click", () => {
  navmobile.style.display = "none";
});

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// Cursor Following Div
const cursorBg = document.getElementById("cursorbg");
document.addEventListener("pointermove", (e) => {
  cursorBg.style.display = "block";
  cursorBg.animate(
    {
      top: e.clientY + "px",
      left: e.clientX + "px",
    },
    { duration: 600, fill: "forwards" }
  );
});


// project section
const projects = [
  {
    title: "Age Calculator",
    description:
      "Age Calulator Project Developed with HTML, CSS, and Javascript.",
    imageUrl: "../img/projects/AgeCalculator.png",
    link: "https://ufoastro.github.io/AgeCalculator/",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "RYST SHOE STORE",
    description: "A simple front-end Shoe store website, developed with HTML, TAILWIND, and JavaScript. and the animate on scroll Library",
    imageUrl: "../img/projects/RYST.png",
    link: "https://shoe-store-peach-xi.vercel.app/",
    technologies: ["HTML", "Tailwind", "JS"],
  },
  {
    title: "COMPTIA QUIZ",
    description: "A brief description of project three.",
    imageUrl: "../img/projects/comptia01.png",
    link: "https://comptia-quiz.vercel.app/",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "SORA SOFT",
    description: "A brief description of project three.",
    imageUrl: "../img/projects/sorasoft.png",
    link: "https://sora-soft.vercel.app/",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "Weather App",
    description: "A brief description of project three.",
    imageUrl: "../img/projects/weatherApp.png",
    link: "https://sora-soft.vercel.app/",
    technologies: ["HTML", "CSS", "JS"],
  },
];

const techStyles = {
  HTML: "w-fit text-sm rounded-md bg-orange-500 p-2 font-bold text-orange-300 flex items-center gap-2",
  CSS: "w-fit rounded-md text-sm bg-blue-500 p-2 font-bold text-blue-300 flex items-center gap-2",
  JS: "w-fit rounded-md text-sm bg-yellow-500 p-2 font-bold text-yellow-700 flex items-center gap-2",
  Tailwind: "w-fit text-sm rounded-md bg-blue-500  p-2 font-bold text-blue-300 flex items-center gap-2",
  AOS: "w-fit text-sm rounded-md bg-purple-500 p-2 font-bold text-purple-100 flex items-center gap-2",
};

const techLogos = {
  HTML: "https://img.icons8.com/ffffff/material-outlined/48/html-5.png",
  CSS: "https://img.icons8.com/ffffff/ios/100/css3.png",
  JS: "https://img.icons8.com/ffffff/ios-filled/100/javascript.png",
  Tailwind: "https://img.icons8.com/ffffff/material-outlined/96/tailwind_css.png",
  AOS: "../img/tech/aos.svg",
};

const container = document.getElementById("projectsGrid");

projects.forEach(({ title, description, imageUrl, link, technologies = [] }) => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-lg shadow-md overflow-hidden flex flex-col items";

  // Technologies section
  const techDiv = document.createElement("div");
  techDiv.className = "flex flex-wrap gap-2 mb-4 mt-2";
  techDiv.innerHTML = technologies.map(tech => `
    <div class="${techStyles[tech] || "w-fit rounded-md bg-gray-400 p-3 font-bold text-white flex items-center gap-2"}">
      ${techLogos[tech] ? `<img src="${techLogos[tech]}" alt="${tech} logo" class="w-5 h-5 object-contain" />` : ""}
      <span>${tech === "HTML" ? "HTML5" : tech}</span>
    </div>
  `).join("");

  card.innerHTML = `
    <img src="${imageUrl}" alt="${title}" class="h-48 w-full object-cover" />
    <div class="p-6 flex flex-col flex-grow">
      <h2 class="text-xl text-black font-semibold mb-2">${title}</h2>
      <p class="text-gray-600 flex-grow">${description}</p>
    </div>
  `;

  const cardInner = card.querySelector(".p-6");
  cardInner.insertBefore(techDiv, cardInner.children[2] || null);

  // Add the link button
  cardInner.innerHTML += `
    <a href="${link}" class="mt-4 inline-block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
      <i class="fa-solid fa-up-right-from-square mr-2"></i> View Project
    </a>
  `;

  container.appendChild(card);
});

// Add hover effect to the cards
const cards = document.querySelectorAll(".bg-white");
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("shadow-lg");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("shadow-lg");
  });
});
