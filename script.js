
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});


const skillData = {
  frontend: {
    title: "Frontend foundations",
    skills: [
      ["HTML5", "Page structure", "orange"],
      ["CSS3", "Layout & styling", "blue"],
      ["JavaScript", "Interactivity", "yellow"],
      ["React.js", "Reusable UI components", "cyan"],
      ["Tailwind CSS", "Utility-first styling", "purple"]
    ]
  },

  programming: {
    title: "Programming practice",
    skills: [
      ["Java", "Core programming concepts", "lavender"],
      ["DSA", "Problem solving with Java", "green"],
      ["Logic", "Step-by-step thinking", "pink"]
    ]
  },

  tools: {
    title: "Everyday tools",
    skills: [
      ["VS Code", "Code editor", "blue"],
      ["GitHub", "Project hosting", "lavender"],
      ["Browser", "Testing & debugging", "green"]
    ]
  }
};


const skillTitle = document.getElementById("skillTitle");
const skillGrid = document.getElementById("skillGrid");
document.querySelectorAll(".skill-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".skill-tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    const selected = skillData[tab.dataset.category];
    skillTitle.textContent = selected.title;
  
    
    



const skillSymbols = {
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "DSA": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg",
  "Logic": "💡",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Browser": "🌐"
};


skillGrid.innerHTML = "";
skillGrid.innerHTML = selected.skills.map(([name, detail, color]) =>
  `<div class="skill-card">
    <span class="skill-icon ${color}">
      ${skillSymbols[name]?.startsWith("http")
       ? `<img src="${skillSymbols[name]}" alt="${name} logo">`
       : (skillSymbols[name] || "✦")}
    </span>
    <b>${name}</b>
    <small>${detail}</small>
  </div>`
).join("");

  });
});

const words = ["beautiful websites", "useful interfaces", "creative ideas"];
let wordIndex = 0;
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  const word = document.getElementById("changingWord");
  if (word) word.textContent = words[wordIndex];
}, 2400);

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (name.length < 2) {
    formMessage.style.color = "#ff9eae";
    formMessage.textContent = "Please enter a name with at least 2 characters.";
  } else if (!validEmail) {
    formMessage.style.color = "#ff9eae";
    formMessage.textContent = "Please enter a valid email address.";
  } else if (message.length < 10) {
    formMessage.style.color = "#ff9eae";
    formMessage.textContent = "Please write a message of at least 10 characters.";
  } else {
    formMessage.style.color = "#73e4b0";
    formMessage.textContent = "Form validated! This demo does not send emails yet.";
    form.reset();
  }
});
