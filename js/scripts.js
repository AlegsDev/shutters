const translations = {
    ru: {
        // title: "Шторы и жалюзи в городе Тараз",
        // subtitle: "Создайте уют и комфорт в вашем доме с нашими шторами и жалюзи.",
        experienceTitle: "Опыт",
        experienceText: "Наша команда обладает многолетним опытом в сфере производства и установки жалюзи.",
        qualityTitle: "Качество",
        qualityText: "Мы используем только высококачественные материалы и современные технологии.",
        serviceTitle: "Сервис",
        serviceText: "Мы предлагаем индивидуальный подход к каждому клиенту и гарантируем высокое качество обслуживания."
    },
    kz: {
        // title: "Тараз қаласында перде мен жалюзи",
        // subtitle: "Үйіңізде жайлылық пен жылулықты біздің перделер мен жализдермен жасаңыз.",
        experienceTitle: "Тәжірибе",
        experienceText: "Біздің команда перде және жалюзи өндіру мен орнатуда көп жылдық тәжірибеге ие.",
        qualityTitle: "Сапа",
        qualityText: "Біз тек жоғары сапалы материалдар мен заманауи технологияларды қолданамыз.",
        serviceTitle: "Қызмет",
        serviceText: "Біз әр клиентке жеке көзқарас ұсынамыз және жоғары сапалы қызмет көрсетуге кепілдік береміз."
    }
};

function switchLanguage(lang) {
    // document.getElementById('title').textContent = translations[lang].title;
    // document.getElementById('subtitle').textContent = translations[lang].subtitle;
    document.getElementById('experience-title').textContent = translations[lang].experienceTitle;
    document.getElementById('experience-text').textContent = translations[lang].experienceText;
    document.getElementById('quality-title').textContent = translations[lang].qualityTitle;
    document.getElementById('quality-text').textContent = translations[lang].qualityText;
    document.getElementById('service-title').textContent = translations[lang].serviceTitle;
    document.getElementById('service-text').textContent = translations[lang].serviceText;
}
var acc = document.getElementsByClassName("accordion");
var i;

if (acc.length > 0) {
  acc[0].classList.add("active");
  acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (let j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.maxHeight = null;
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  modal.style.display = "flex";
  modalImage.src = src;
}

document.getElementById("close-modal").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

document.getElementById("modal").onclick = function (event) {
  if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
  }
};
