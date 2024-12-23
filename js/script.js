const hamburgerMenu = document.querySelector(".hamburger-menu");
const body = document.body;

// navbar muncul dan hilang
hamburgerMenu.addEventListener("click", function () {
  const navigationBar = document.querySelector("header ul");
  navigationBar.classList.toggle("ul-active");

  const menuNavigationBar = document.querySelectorAll("header ul li");
  menuNavigationBar.forEach(function (menu) {
    menu.addEventListener("click", function () {
      navigationBar.classList.remove("ul-active");
    });
  });
});

// efek scroll smooth
// navbar
document.querySelectorAll(".home a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// swipe up

// animation show image certificate
const spanCertificate = document.querySelectorAll(".icon-eye");
const overlayCertificate = document.querySelectorAll(
  ".overlay-image-certificate"
);
const fieldOverlayCertificate = document.querySelectorAll(
  ".field-overlay-certificate"
);
const buttonCloseOverlay = document.querySelectorAll(
  ".overlay-image-certificate button"
);
const slideBeforeCertificate = document.querySelectorAll(
  ".slide-before-image-certificate"
);
const slideAfterCertificate = document.querySelectorAll(
  ".slide-after-image-certificate"
);
const imageCertificate = document.querySelectorAll(".img-certificate");

spanCertificate.forEach(function (e, i) {
  e.addEventListener("click", function () {
    overlayCertificate[i].style.transform = "scale(1)";
  });
});

buttonCloseOverlay.forEach(function (e, i) {
  e.addEventListener("click", function () {
    overlayCertificate[i].style.transform = "scale(0)";
  });
});

for (let i = 0; i < slideAfterCertificate.length; i++) {
  slideAfterCertificate[i].addEventListener("click", function () {
    overlayCertificate[i].style.transform = "scale(0)";
    overlayCertificate[i + 1].style.transform = "scale(1)";
  });
}

for (let i = 0; i < slideBeforeCertificate.length; i++) {
  slideBeforeCertificate[i].addEventListener("click", function () {
    overlayCertificate[i].style.transform = "scale(0)";
    overlayCertificate[i - 1].style.transform = "scale(1)";
  });
}

// ANIMATION SECTION SKILL
const fieldSkill = document.querySelectorAll(".field-image-skill");
for (let i = 0; i < fieldSkill.length; i++) {
  if (i % 2 === 0) {
    // Index genap
    fieldSkill[i].setAttribute("data-aos", "flip-right");
  }
  if (i % 2 === 1) {
    // Index ganjil
    fieldSkill[i].setAttribute("data-aos", "flip-left");
  }
  if (window.innerWidth > 768) {
    if (i == 0) {
      fieldSkill[i].setAttribute("data-aos-duration", "300");
    } else {
      fieldSkill[i].setAttribute("data-aos-delay", `${i * 300}`);
    }
  }
}

// ALERT SECTION PROJECT
const linkToProject = document.querySelectorAll(".link-to-project");
linkToProject.forEach(function (project) {
  project.addEventListener("click", function (e) {
    e.preventDefault();

    let atributLinkProject = project.getAttribute("href");

    Swal.fire({
      title: "Are you sure?",
      text: "This action will bring you to project",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, go there",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = atributLinkProject;
      }
    });
  });
});

// // ANIMATION SECTION PROJECT
const fieldProject = document.querySelectorAll(".field-project");
for (let i = 0; i < fieldProject.length; i++) {
  if (window.innerWidth > 768) {
    fieldProject[i].setAttribute("data-aos-duration", "1000");
    if (i % 2 === 0) {
      fieldProject[i].setAttribute("data-aos", "fade-up-right");
    } else {
      fieldProject[i].setAttribute("data-aos", "fade-up-left");
    }
  } else {
    fieldProject[i].setAttribute("data-aos", "fade-up");
    fieldProject[i].setAttribute("data-aos-duration", "700");
  }
}

// ANIMATION SECTION CONTACT
const formMessage = document.querySelector(".form-message");
if (window.innerWidth > 768) {
  const fieldMap = document.querySelector(".sosmed-and-maps");
  fieldMap.setAttribute("data-aos", "fade-right");
  formMessage.setAttribute("data-aos", "fade-left");
} else {
  const sosmedAndMaps = document.querySelector(".sosmed-and-maps");
  sosmedAndMaps.setAttribute("data-aos", "zoom-in-up");
  formMessage.setAttribute("data-aos", "zoom-in-down");
}

// ALERTSECTION CONTACT
const formContact = document.querySelector(".form-message");
formContact.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputMessage = document.querySelector("#message");

  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    inputMessage.value == ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Form Validation",
      text: "Please fill in the form correctly",
    });
  } else {
    Swal.fire({
      title: "Thank you! your message has been sent",
      color: "black",
    });
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
  }
});

AOS.init({
  once: false,
});
// Переводы
const translations = {
  en: {
    home: "Home",
    aboutMe: "About Me",
    skill: "Skill",
    project: "Project",
    certification: "Certification",
    contact: "Social Media",
    hello: "Hello, I am Nurlanbekov Nurtilek",
    profession:
      "I am a front-end developer, creating modern and user-friendly websites.",
    aboutText: `I am a passionate Front-End developer focused on creating modern and user-friendly websites. I aim to provide quality solutions while keeping up with the latest web development technologies.`,
    skillTitle: "My Skills",
    projectTitle: "Projects",
    certificationTitle: "Certifications",
    contactTitle: "Social Media",
  },
  ru: {
    home: "Главная",
    aboutMe: "Обо мне",
    skill: "Навыки",
    project: "Проекты",
    certification: "Сертификаты",
    contact: "Соцсети",
    hello: "Здравствуйте, я Нурланбеков Нуртилек",
    profession:
      "Я фронтенд-разработчик, создающий современные и удобные веб-сайты.",
    aboutText: `Я увлеченный Front-End разработчик, который стремится создавать современные и удобные веб-сайты. Я нацелен на предоставление качественных решений и постоянно слежу за новейшими технологиями в области веб-разработки.`,
    skillTitle: "Мои навыки",
    projectTitle: "Проекты",
    certificationTitle: "Сертификаты",
    contactTitle: "Социальные сети",
  },
  ky: {
    home: "Башкы бет",
    aboutMe: "Мен жөнүндө",
    skill: "Көндүмдөр",
    project: "Долбоорлор",
    certification: "Сертификаттар",
    contact: "Социалдык тармактар",
    hello: "Салам, мен Нурланбеков Нуртилек",
    profession:
      "Мен замандын талабына жооп берген сайттарды түзгөн фронтенд иштеп чыгуучумун.",
    aboutText: `Мен колдонуучуга ыңгайлуу веб-сайттарды түзүүгө багытталган Front-End иштеп чыгуучумун. Ар дайым мыкты чечимдерди сунуштоого жана жаңы технологияларды үйрөнүүгө умтулам.`,
    skillTitle: "Менин көндүмдөрүм",
    projectTitle: "Долбоорлор",
    certificationTitle: "Сертификаттар",
    contactTitle: "Социалдык медиа",
  },
};

// Функция для изменения языка
function changeLanguage() {
  const selectedLanguage = document.getElementById("language-selector").value;

  // Обновляем тексты
  document.querySelector('a[href="#home"]').textContent =
    translations[selectedLanguage].home;
  document.querySelector('a[href="#about"]').textContent =
    translations[selectedLanguage].aboutMe;
  document.querySelector('a[href="#skill"]').textContent =
    translations[selectedLanguage].skill;
  document.querySelector('a[href="#project"]').textContent =
    translations[selectedLanguage].project;
  document.querySelector('a[href="#certification"]').textContent =
    translations[selectedLanguage].certification;
  document.querySelector('a[href="#contact"]').textContent =
    translations[selectedLanguage].contact;

  document.querySelector(
    ".field-text-home h1"
  ).innerHTML = `${translations[selectedLanguage].hello} `;
  document.querySelector(".field-text-home h3").innerHTML =
    translations[selectedLanguage].profession;

  document.querySelector(
    ".about h1"
  ).innerHTML = `${translations[selectedLanguage].aboutMe}`;
  document.querySelector(".about p").textContent =
    translations[selectedLanguage].aboutText;

  document.querySelector(
    ".skill h1"
  ).innerHTML = `${translations[selectedLanguage].skillTitle}`;
  document.querySelector(
    ".project h1"
  ).innerHTML = `${translations[selectedLanguage].projectTitle}`;
  document.querySelector(
    ".certification h1"
  ).innerHTML = `${translations[selectedLanguage].certificationTitle}`;
  document.querySelector(
    ".contact h1"
  ).innerHTML = `${translations[selectedLanguage].contactTitle}`;
}
