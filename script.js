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


//function to get and display current time
function getCurrentTime() {
  let time = document.getElementById("time");
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  time.textContent = formattedTime;
  document.getElementById("currentTime").textContent = formattedTime;
}
setInterval(getCurrentTime, 1000);
function getCurrentDate() { 
  let date = document.getElementById("date");
  const currentDate = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  date.textContent = formattedDate;
}
getCurrentDate();


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

// project section
const projects = [
    {
    title: "Bells Study V1",
    description: "AI study web app powered by AI developed to help make study more Engaging and Interactive using AI powered Quizes based on your Uploaded File(A updated version of The ComptiaA+ quiz) ",
    imageUrl: "../img/projects/Bells-study.png",
    link: "https://bells-study.vercel.app/",
    code: "https://github.com/UFOASTRO/SORA",
    technologies: ["HTML", "CSS", "JS"],
  },
    {
    title: "RYST SHOE STORE",
    description:
      "A simple front-end Shoe store website, cloned and modified from a WIX template developed with the animate on scroll Library, I developed while learning the Tailwind Framework.",
    imageUrl: "../img/projects/RYST.png",
    link: "https://shoe-store-peach-xi.vercel.app/",
    code: "https://github.com/UFOASTRO/Shoe-Store",
    technologies: ["HTML", "Tailwind", "JS"],
  },
  {
    title: "Age Calculator",
    description:
      "Age Calulator Project Developed by me shortly after I started learning JavaScript to test my skills , with the Age Calculation logic calculated and Implemented by Myself. ",
    imageUrl: "../img/projects/AgeCalculator.png",
    link: "https://ufoastro.github.io/AgeCalculator/",
    code: "https://github.com/ufoastro/AgeCalculator",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "COMPTIA QUIZ",
    description: "A Quiz web App I created to help Myself and my coleuges simulate the COMPTIA A+ exam in preparation for the exam which was our first examination in 100 level.",
    imageUrl: "../img/projects/comptia01.png",
    link: "https://comptia-quiz.vercel.app/",
    code: "https://github.com/UFOASTRO/COMPTIA-QUIZ",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "Weather App",
    description: "A simple weather app that fetches data from an API and displays Live weather Information based on the location Inputed into the seach bar.",
    imageUrl: "../img/projects/weatherApp.png",
    link: "https://sora-soft.vercel.app/",
    code: "https://github.com/UFOASTRO/weatherAPI",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "Jay's Burger",
    description: "A simple web development project I created to practice my skills in CSS breifly after completing learning CSS. Fully designed and developed by Me. P'tss:: one of the projects that I learnt a lot from and I am proud of.",
    imageUrl: "../img/projects/jays-burger.png",
    code: "https://github.com/UFOASTRO/Jays-Burger-project ",
    link: "https://jays-burger-project.vercel.app/",
    technologies: ["HTML", "CSS", "JS"],
  },
];

const techStyles = {
  HTML: "w-fit text-sm rounded-md bg-orange-500 p-2 font-bold text-orange-300 flex items-center gap-2",
  CSS: "w-fit rounded-md text-sm bg-blue-500 p-2 font-bold text-blue-300 flex items-center gap-2",
  JS: "w-fit rounded-md text-sm bg-yellow-500 p-2 font-bold text-yellow-700 flex items-center gap-2",
  Tailwind:
    "w-fit text-sm rounded-md bg-blue-500  p-2 font-bold text-blue-300 flex items-center gap-2",
  AOS: "w-fit text-sm rounded-md bg-purple-500 p-2 font-bold text-purple-100 flex items-center gap-2",
};

const techLogos = {
  HTML: "https://img.icons8.com/ffffff/material-outlined/48/html-5.png",
  CSS: "https://img.icons8.com/ffffff/ios/100/css3.png",
  JS: "https://img.icons8.com/ffffff/ios-filled/100/javascript.png",
  Tailwind:
    "https://img.icons8.com/ffffff/material-outlined/96/tailwind_css.png",
  AOS: "../img/tech/aos.svg",
};

const container = document.getElementById("projectsGrid");

projects.forEach(
  ({ title, description, imageUrl, link, code, technologies = [] }) => {
    const card = document.createElement("div");
    card.className =
      "group bg-[#101a23] border border-blue-900 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl";

    // Card image
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title;
    img.className =
      "h-48 w-full object-cover object-top transition-all duration-300 group-hover:scale-105";

    // Card content
    const content = document.createElement("div");
    content.className = "flex flex-col flex-grow p-6";

    // Title
    const titleEl = document.createElement("h2");
    titleEl.className =
      "text-xl font-bold mb-2 text-white font-Montserrat tracking-tight";
    titleEl.textContent = title;

    // Description
    const descEl = document.createElement("p");
    descEl.className = "text-gray-300 mb-4 font-Rubik flex-grow";
    descEl.textContent = description;

    // Technologies
    const techDiv = document.createElement("div");
    techDiv.className = "flex flex-wrap gap-2 mb-4";
    techDiv.innerHTML = technologies
      .map(
        (tech) => `
      <span class="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold
        ${
          tech === "HTML"
            ? "bg-orange-500/20 text-orange-300 border border-orange-500"
            : tech === "CSS"
            ? "bg-blue-500/20 text-blue-300 border border-blue-500"
            : tech === "JS"
            ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500"
            : tech === "Tailwind"
            ? "bg-blue-900/40 text-blue-300 border border-blue-700"
            : "bg-gray-700/40 text-gray-200 border border-gray-600"
        }
        font-Rubik"
      >
        ${
          tech === "HTML"
            ? `<img src="https://img.icons8.com/ffffff/material-outlined/48/html-5.png" alt="HTML5" class="w-4 h-4" />`
            : tech === "CSS"
            ? `<img src="https://img.icons8.com/ffffff/ios/100/css3.png" alt="CSS3" class="w-4 h-4" />`
            : tech === "JS"
            ? `<img src="https://img.icons8.com/ffffff/ios-filled/100/javascript.png" alt="JS" class="w-4 h-4" />`
            : tech === "Tailwind"
            ? `<img src="https://img.icons8.com/ffffff/material-outlined/96/tailwind_css.png" alt="Tailwind" class="w-4 h-4" />`
            : ""
        }
        <span>${tech === "HTML" ? "HTML5" : tech}</span>
      </span>
    `
      )
      .join("");

    // Actions
    const actions = document.createElement("div");
    actions.className = "flex gap-3 mt-4";

    // View Project button
    const viewBtn = document.createElement("a");
    viewBtn.href = link;
    viewBtn.target = "_blank";
    viewBtn.rel = "noopener noreferrer";
    viewBtn.className =
      "flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold font-Montserrat shadow hover:bg-blue-600 transition";
    viewBtn.innerHTML =
      '<i class="fa-solid fa-up-right-from-square"></i> <span>Live Demo</span>';

    // View Code button (GitHub icon)
    const codeBtn = document.createElement("a");
    codeBtn.href = code || link; // fallback to link if code is missing
    codeBtn.target = "_blank";
    codeBtn.rel = "noopener noreferrer";
    codeBtn.className =
      "flex items-center gap-2 px-4 py-2 rounded-lg bg-[#192734] text-blue-300 font-semibold font-Montserrat border border-blue-900 hover:bg-blue-900 hover:text-yellow-300 transition";
    codeBtn.innerHTML =
      '<img width="20" height="20" src="https://img.icons8.com/60a5fa/ios-filled/100/github--v1.png" alt="GitHub" /> <span>View Code</span>';

    actions.appendChild(viewBtn);
    actions.appendChild(codeBtn);

    // Assemble card
    content.appendChild(titleEl);
    content.appendChild(descEl);
    content.appendChild(techDiv);
    content.appendChild(actions);

    card.appendChild(img);
    card.appendChild(content);

    container.appendChild(card);
  }
);

// Cursor Following Div
const cursorBg = document.getElementById("cursorbg");
document.addEventListener("pointermove", (e) => {
  // Only activate on desktop (md: 768px and up)
  if (window.innerWidth >= 768) {
    cursorBg.style.display = "block";
    cursorBg.animate(
      {
        top: e.clientY + "px",
        left: e.clientX + "px",
      },
      { duration: 600, fill: "forwards" }
    );
  } else {
    cursorBg.style.display = "none";
  }
});

function renderProjects(filteredProjects) {
  // Animate out
  container.classList.add("opacity-0", "scale-95", "transition-all", "duration-300");
  setTimeout(() => {
    container.innerHTML = "";
    filteredProjects.forEach(
      ({ title, description, imageUrl, link, code, technologies = [] }) => {
        const card = document.createElement("div");
        card.className =
          "group bg-[#101a23] border border-blue-900 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp";

        // Card image
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = title;
        img.className =
          "h-48 w-full object-cover object-top transition-all duration-300 group-hover:scale-105";

        // Card content
        const content = document.createElement("div");
        content.className = "flex flex-col flex-grow p-6";

        // Title
        const titleEl = document.createElement("h2");
        titleEl.className =
          "text-xl font-bold mb-2 text-white font-Montserrat tracking-tight";
        titleEl.textContent = title;

        // Description
        const descEl = document.createElement("p");
        descEl.className = "text-gray-300 mb-4 font-Rubik flex-grow";
        descEl.textContent = description;

        // Technologies
        const techDiv = document.createElement("div");
        techDiv.className = "flex flex-wrap gap-2 mb-4";
        techDiv.innerHTML = technologies
          .map(
            (tech) => `
          <span class="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold
            ${
              tech === "HTML"
                ? "bg-orange-500/20 text-orange-300 border border-orange-500"
                : tech === "CSS"
                ? "bg-blue-500/20 text-blue-300 border border-blue-500"
                : tech === "JS"
                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500"
                : tech === "Tailwind"
                ? "bg-blue-900/40 text-blue-300 border border-blue-700"
                : "bg-gray-700/40 text-gray-200 border border-gray-600"
            }
            font-Rubik"
          >
            ${
              tech === "HTML"
                ? `<img src="https://img.icons8.com/ffffff/material-outlined/48/html-5.png" alt="HTML5" class="w-4 h-4" />`
                : tech === "CSS"
                ? `<img src="https://img.icons8.com/ffffff/ios/100/css3.png" alt="CSS3" class="w-4 h-4" />`
                : tech === "JS"
                ? `<img src="https://img.icons8.com/ffffff/ios-filled/100/javascript.png" alt="JS" class="w-4 h-4" />`
                : tech === "Tailwind"
                ? `<img src="https://img.icons8.com/ffffff/material-outlined/96/tailwind_css.png" alt="Tailwind" class="w-4 h-4" />`
                : ""
            }
            <span>${tech === "HTML" ? "HTML5" : tech}</span>
          </span>
        `
          )
          .join("");

        // Actions
        const actions = document.createElement("div");
        actions.className = "flex gap-3 mt-4";

        // View Project button
        const viewBtn = document.createElement("a");
        viewBtn.href = link;
        viewBtn.target = "_blank";
        viewBtn.rel = "noopener noreferrer";
        viewBtn.className =
          "flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold font-Montserrat shadow hover:bg-blue-600 transition";
        viewBtn.innerHTML =
          '<i class="fa-solid fa-up-right-from-square"></i> <span>Live Demo</span>';

        // View Code button (GitHub icon)
        const codeBtn = document.createElement("a");
        codeBtn.href = code || link;
        codeBtn.target = "_blank";
        codeBtn.rel = "noopener noreferrer";
        codeBtn.className =
          "flex items-center gap-2 px-4 py-2 rounded-lg bg-[#192734] text-blue-300 font-semibold font-Montserrat border border-blue-900 hover:bg-blue-900 hover:text-yellow-300 transition";
        codeBtn.innerHTML =
          '<img width="20" height="20" src="https://img.icons8.com/60a5fa/ios-filled/100/github--v1.png" alt="GitHub" /> <span>View Code</span>';

        actions.appendChild(viewBtn);
        actions.appendChild(codeBtn);

        // Assemble card
        content.appendChild(titleEl);
        content.appendChild(descEl);
        content.appendChild(techDiv);
        content.appendChild(actions);

        card.appendChild(img);
        card.appendChild(content);

        container.appendChild(card);
      }
    );
    // Animate in
    setTimeout(() => {
      container.classList.remove("opacity-0", "scale-95");
      container.classList.add("opacity-100", "scale-100");
    }, 30);
  }, 300);
}

// Initial render
renderProjects(projects);

// Filter logic
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("bg-yellow-400", "text-black"));
    btn.classList.add("bg-yellow-400", "text-black");
    const tech = btn.dataset.tech;
    if (tech === "All") {
      renderProjects(projects);
    } else if (tech === "JS" || tech === "JavaScript") {
      renderProjects(projects.filter((p) => p.technologies.includes("JS")));
    } else {
      renderProjects(projects.filter((p) => p.technologies.includes(tech)));
    }
  });
});

// Animation for cards (fade in up)
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.5s cubic-bezier(.4,0,.2,1) both;
}
`;
document.head.appendChild(style);

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Success Modal logic
const contactForm = document.getElementById('contact');
const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

 successModal.classList.remove("hidden");
    // Clear form fields
  });
}

closeModalBtn.addEventListener("click", () => {
  successModal.classList.add("hidden");

  let gmailInput = document.getElementById("email");
  let subjectInput = document.getElementById("subject");
  let messageInput = document.getElementById("message");

  gmailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";

});
