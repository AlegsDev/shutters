const translations = {
    ru: {
        // subtitle: "Создайте уют и комфорт в вашем доме с нашими шторами и жалюзи.",
        aboutUsTitle: "О нас",
        experienceTitle: "Опыт",
        experienceText: "Наша команда обладает многолетним опытом в сфере производства и установки жалюзи.",
        qualityTitle: "Качество",
        qualityText: "Мы используем только высококачественные материалы и современные технологии.",
        serviceTitle: "Сервис",
        serviceText: "Мы предлагаем индивидуальный подход к каждому клиенту и гарантируем высокое качество обслуживания.",
        blindsTypesTitle: "Виды жалюзи",
        horizontalBlinds: "Горизонтальные",
        horizontalBlindsDescription: "Классический вариант, подходит для большинства интерьеров.",
        tulleBlinds: "Тюлевые",
        tulleBlindsDescription: "Элегантное решение для мягкого света и уюта в интерьере.",
        rollerBlinds: "Рулонные",
        rollerBlindsDescription: "Компактный и стильный вариант, легко регулируется.",
        advantagesTitle: "Преимущества наших жалюзи",
        sunProtection: "Защита от солнца",
        sunProtectionDescription: "Жалюзи эффективно защищают от яркого солнечного света.",
        lightControl: "Регулировка света",
        lightControlDescription: "Позволяют регулировать уровень освещенности в помещении.",
        thermalInsulation: "Теплоизоляция",
        thermalInsulationDescription: "Снижают теплопотери зимой и защищают от жары летом.",
        soundInsulation: "Звукоизоляция",
        soundInsulationDescription: "Снижают уровень шума извне, создавая тихую и комфортную атмосферу.",
        clientReviews: "Отзывы наших клиентов",
        pricesAndOffers: "Цены и акции",
        blindsType: "Тип жалюзи",
        pricePerSquareMeter: "Цена за м²",
        specialOffer: "Акция",
        howToOrder: "Как сделать заказ",
        stepOne: "Напишите нам на WhatsApp. Наш оператор поможет с выбором и примет заказ.",
        stepTwo: "Наш специалист приедет, выполнит замеры окон и подготовит проект.",
        stepThree: "В течение трёх дней работа будет завершена, и вы сможете оценить результат.",
        contacts: "Контакты"
    },
    kz: {
        // subtitle: "Үйіңізде жайлылық пен жылулықты біздің перделер мен жализдермен жасаңыз.",
        aboutUsTitle: "Біз туралы",
        experienceTitle: "Тәжірибе",
        experienceText: "Біздің команда перде және жалюзи өндіру мен орнатуда көп жылдық тәжірибеге ие.",
        qualityTitle: "Сапа",
        qualityText: "Біз тек жоғары сапалы материалдар мен заманауи технологияларды қолданамыз.",
        serviceTitle: "Қызмет",
        serviceText: "Біз әр клиентке жеке көзқарас ұсынамыз және жоғары сапалы қызмет көрсетуге кепілдік береміз.",
        blindsTypesTitle: "Жалюзи түрлері",
        horizontalBlinds: "Көлденең",
        horizontalBlindsDescription: "Классикалық нұсқа, көптеген интерьерлерге жарамды.",
        tulleBlinds: "Тюль",
        tulleBlindsDescription: "Жұмсақ жарық пен жайлылық үшін талғампаз шешім.",
        rollerBlinds: "Рулонды",
        rollerBlindsDescription: "Ыңғайлы және стильді нұсқа, жарықты оңай реттеуге болады.",
        advantagesTitle: "Біздің жалюзилердің артықшылықтары",
        sunProtection: "Күннен қорғау",
        sunProtectionDescription: "Жалюзи ашық күн сәулесінен тиімді қорғайды.",
        lightControl: "Жарықты реттеу",
        lightControlDescription: "Бөлмедегі жарық деңгейін реттеуге мүмкіндік береді.",
        thermalInsulation: "Жылу оқшаулау",
        thermalInsulationDescription: "Қыста жылу шығынын азайтып, жазда ыстықтан қорғайды.",
        soundInsulation: "Дыбыс оқшаулау",
        soundInsulationDescription: "Сыртқы шуды азайтып, тыныш әрі жайлы атмосфера жасайды.",
        clientReviews: "Біздің клиенттердің пікірлері",
        pricesAndOffers: "Бағалар мен акциялар",
        blindsType: "Жалюзи түрі",
        pricePerSquareMeter: "м² үшін баға",
        specialOffer: "Акция",
        howToOrder: "Тапсырыс беру тәсілі",
        stepOne: "Бізге WhatsApp арқылы жазыңыз. Біздің оператор таңдауға көмектеседі және тапсырысыңызды қабылдайды.",
        stepTwo: "Біздің маман келіп, терезелерді өлшеп, жоба дайындайды.",
        stepThree: "Үш күн ішінде жұмыс аяқталып, нәтижені бағалай аласыз.",
        contacts: "Байланыстар"
    }
};

function switchLanguage(lang) {
    // document.getElementById('subtitle').textContent = translations[lang].subtitle;
    document.getElementById('about-us-title').textContent = translations[lang].aboutUsTitle;
    document.getElementById('experience-title').textContent = translations[lang].experienceTitle;
    document.getElementById('experience-text').textContent = translations[lang].experienceText;
    document.getElementById('quality-title').textContent = translations[lang].qualityTitle;
    document.getElementById('quality-text').textContent = translations[lang].qualityText;
    document.getElementById('service-title').textContent = translations[lang].serviceTitle;
    document.getElementById('service-text').textContent = translations[lang].serviceText;
    document.getElementById('blinds-types-title').textContent = translations[lang].blindsTypesTitle;
    document.getElementById('horizontal-blinds').textContent = translations[lang].horizontalBlinds;
    document.getElementById('horizontal-blinds-description').textContent = translations[lang].horizontalBlindsDescription;
    document.getElementById('tulle-blinds').textContent = translations[lang].tulleBlinds;
    document.getElementById('tulle-blinds-description').textContent = translations[lang].tulleBlindsDescription;
    document.getElementById('roller-blinds').textContent = translations[lang].rollerBlinds;
    document.getElementById('roller-blinds-description').textContent = translations[lang].rollerBlindsDescription;
    document.getElementById('advantages-title').textContent = translations[lang].advantagesTitle;
    document.getElementById('sun-protection').textContent = translations[lang].sunProtection;
    document.getElementById('sun-protection-description').textContent = translations[lang].sunProtectionDescription;
    document.getElementById('light-control').textContent = translations[lang].lightControl;
    document.getElementById('light-control-description').textContent = translations[lang].lightControlDescription;
    document.getElementById('thermal-insulation').textContent = translations[lang].thermalInsulation;
    document.getElementById('thermal-insulation-description').textContent = translations[lang].thermalInsulationDescription;
    document.getElementById('sound-insulation').textContent = translations[lang].soundInsulation;
    document.getElementById('sound-insulation-description').textContent = translations[lang].soundInsulationDescription;
    document.getElementById('client-reviews').textContent = translations[lang].clientReviews;
    document.getElementById('prices-and-offers').textContent = translations[lang].pricesAndOffers;
    document.getElementById('blinds-type').textContent = translations[lang].blindsType;
    document.getElementById('price-per-square-meter').textContent = translations[lang].pricePerSquareMeter;
    document.getElementById('special-offer').textContent = translations[lang].specialOffer;
    document.getElementById('how-to-order').textContent = translations[lang].howToOrder;
    document.getElementById('step-one').textContent = translations[lang].stepOne;
    document.getElementById('step-two').textContent = translations[lang].stepTwo;
    document.getElementById('step-three').textContent = translations[lang].stepThree;
    document.getElementById('contacts').textContent = translations[lang].contacts;
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
