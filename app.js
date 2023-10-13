const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var lang = "en";
const de = document.getElementById("de");
const en = document.getElementById("en");
const sitede = document.getElementById("site-de");
const siteen = document.getElementById("site-en");

function changeLang() {
  if (lang === "en") {
    lang = "de";
    de.style.backgroundColor = "rgb(90, 90, 90)";
    en.style.backgroundColor = "rgb(54, 54, 54)";
    sitede.style.display = "block";
    siteen.style.display = "none";
  } else {
    lang = "en";
    en.style.backgroundColor = "rgb(90, 90, 90)";
    de.style.backgroundColor = "rgb(54, 54, 54)";
    sitede.style.display = "none";
    siteen.style.display = "block";
  }
}
