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
  },
  {
    title: "RYST SHOE STORE",
    description: "A simple front-end Shoe store website, developed with HTML, TAILWIND, and JavaScript. and the animate on scroll Library",
    imageUrl: "../img/projects/RYST.png",
    link: "https://shoe-store-peach-xi.vercel.app/",
  },
  {
    title: "COMPTIA QUIZ",
    description: "A brief description of project three.",
    imageUrl: "../img/projects/comptia01.png",
    link: "https://comptia-quiz.vercel.app/",
  },
    {
    title: "SORA SOFT",
    description: "A brief description of project three.",
    imageUrl: "../img/projects/sorasoft.png",
    link: "https://sora-soft.vercel.app/",
  },
    {
    title: "SORA SOFT",
    description: "A brief description of project three.",
    imageUrl: "../img/projects/weatherApp.png",
    link: "https://sora-soft.vercel.app/",
  },
    {
    title: "SORA SOFT",
    description: "A brief description of project three.",
    imageUrl: "../img/projects/sorasoft.png",
    link: "https://sora-soft.vercel.app/",
  },
];

const container = document.getElementById("projectsGrid");

// Create a card element for each project
projects.forEach(({ title, description, imageUrl, link }) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow-md overflow-hidden flex flex-col";

  card.innerHTML = `
        <img src="${imageUrl}" alt="${title}" class="h-48 w-full object-cover" />
        <div class="p-6 flex flex-col flex-grow">
          <h2 class="text-xl font-semibold mb-2">${title}</h2>
          <p class="text-gray-600 flex-grow">${description}</p>
          <a href="${link}"
             class="mt-4 inline-block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            <i class="fa-solid fa-up-right-from-square mr-2"></i>  View Project
          </a>
        </div>
      `; // :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}

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
