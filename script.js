

const shopPhone = "917666933600";

const translations = {
  en: {
    home: "Home",
    about: "About",
    catalogue: "Products",
    contact: "Contact",
    welcome: "WELCOME TO",
    heroText: "Your trusted destination for quality plumbing and sanitaryware products.",
    explore: "Explore Products",
    ourShop: "OUR SHOP",
    shopGallery: "A Look Inside Our Store",
    aboutUs: "ABOUT US",
    trustedStore: "Your Trusted Plumbing & Sanitaryware Store",
    aboutText: "Shree Ganesh Traders offers plumbing, pipes, water tanks, bathroom fittings and sanitaryware products from various brands.",
    owner: "Shop Owner",
    address: "Near Amrut Hospital, Monda Road, Udgir, District Latur.",
    ourProducts: "OUR PRODUCTS",
    productCatalogue: "Product Catalogue",
    catalogueText: "Explore products from all our available brands.",
    searchPlaceholder: "Search products or brands...",
    getInTouch: "GET IN TOUCH",
    visitContact: "Visit or Contact Us",
    phone: "Phone",
    addressTitle: "Shop Address",
    whatsapp: "Contact on WhatsApp",
    footerText: "Quality Plumbing & Sanitaryware Products",
    enquire: "Enquire on WhatsApp",
    noResults: "No matching products found.",
    products: "Products"
  },

  mr: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    catalogue: "उत्पादने",
    contact: "संपर्क",
    welcome: "आपले स्वागत आहे",
    heroText: "दर्जेदार प्लंबिंग आणि सॅनिटरीवेअर उत्पादनांसाठी आपले विश्वासू दुकान.",
    explore: "उत्पादने पहा",
    ourShop: "आमचे दुकान",
    shopGallery: "आमच्या दुकानाची झलक",
    aboutUs: "आमच्याबद्दल",
    trustedStore: "आपले विश्वासू प्लंबिंग आणि सॅनिटरीवेअर दुकान",
    aboutText: "श्री गणेश ट्रेडर्स येथे विविध ब्रँडचे पाइप, पाण्याच्या टाक्या, बाथरूम फिटिंग्ज आणि सॅनिटरीवेअर उत्पादने उपलब्ध आहेत.",
    owner: "दुकानाचे मालक",
    address: "अमृत हॉस्पिटलजवळ, मोंढा रोड, उदगीर, जिल्हा लातूर.",
    ourProducts: "आमची उत्पादने",
    productCatalogue: "उत्पादन सूची",
    catalogueText: "आमच्या सर्व उपलब्ध ब्रँडची उत्पादने पहा.",
    searchPlaceholder: "उत्पादन किंवा ब्रँड शोधा...",
    getInTouch: "संपर्क साधा",
    visitContact: "आमच्या दुकानाला भेट द्या किंवा संपर्क करा",
    phone: "फोन",
    addressTitle: "दुकानाचा पत्ता",
    whatsapp: "व्हॉट्सअॅपवर संपर्क करा",
    footerText: "दर्जेदार प्लंबिंग आणि सॅनिटरीवेअर उत्पादने",
    enquire: "व्हॉट्सअॅपवर चौकशी करा",
    noResults: "जुळणारी उत्पादने सापडली नाहीत.",
    products: "उत्पादने"
  },

  hi: {
    home: "होम",
    about: "हमारे बारे में",
    catalogue: "उत्पाद",
    contact: "संपर्क",
    welcome: "आपका स्वागत है",
    heroText: "बेहतरीन प्लंबिंग और सैनिटरीवेयर उत्पादों के लिए आपका विश्वसनीय स्टोर।",
    explore: "उत्पाद देखें",
    ourShop: "हमारी दुकान",
    shopGallery: "हमारी दुकान की एक झलक",
    aboutUs: "हमारे बारे में",
    trustedStore: "आपकी विश्वसनीय प्लंबिंग और सैनिटरीवेयर दुकान",
    aboutText: "श्री गणेश ट्रेडर्स में विभिन्न ब्रांडों के पाइप, पानी की टंकियां, बाथरूम फिटिंग और सैनिटरीवेयर उत्पाद उपलब्ध हैं।",
    owner: "दुकान के मालिक",
    address: "अमृत हॉस्पिटल के पास, मोंढा रोड, उदगीर, जिला लातूर।",
    ourProducts: "हमारे उत्पाद",
    productCatalogue: "उत्पाद सूची",
    catalogueText: "हमारे सभी उपलब्ध ब्रांडों के उत्पाद देखें।",
    searchPlaceholder: "उत्पाद या ब्रांड खोजें...",
    getInTouch: "संपर्क करें",
    visitContact: "हमारी दुकान पर आएं या संपर्क करें",
    phone: "फोन",
    addressTitle: "दुकान का पता",
    whatsapp: "व्हाट्सऐप पर संपर्क करें",
    footerText: "गुणवत्तापूर्ण प्लंबिंग और सैनिटरीवेयर उत्पाद",
    enquire: "व्हाट्सऐप पर पूछताछ करें",
    noResults: "कोई मिलते-जुलते उत्पाद नहीं मिले।",
    products: "उत्पाद"
  }
};

// Every brand and its currently available image files.
const brands = [
  {
    id: "a-plus-sanitaryware",
    name: "A-Plus Sanitaryware",
    products: [
      { name: "Sanitaryware", image: "sanitaryware.jpeg" },
      { name: "Wash Basin", image: "washasinaplus.jpg" }
    ]
  },

  {
    id: "gravity-bathware",
    name: "Gravity Bathware",
    products: [
      { name: "Mixer", image: "mixer.jpg" },
      { name: "Shower", image: "shower.jpg" },
      { name: "Sink Cock", image: "sink-cock.jpg" },
      { name: "Tap", image: "tap.jpg" }
    ]
  },

  {
    id: "mizzaro-ceramic",
    name: "Mizzaro Ceramic",
    products: [
      { name: "All in One", image: "allinone.jpg" },
      { name: "Wash Basin", image: "washasin.jpg" }
    ]
  },

  {
    id: "plasto-pipes",
    name: "Plasto Pipes",
    products: [
      { name: "CPVC Pipe", image: "cpvcpipe.jpg" },
      { name: "Round Pipe", image: "roundpipe.jpg" },
      { name: "Vertical Pipe", image: "verticlepipe.jpg" }
    ]
  },

  {
    id: "plasto-tanks",
    name: "Plasto Tanks",
    products: [
      { name: "Water Tank 1", image: "tank1.jpg" },
      { name: "Water Tank 2", image: "tank2.jpg" }
    ]
  },

  {
    id: "sonet-sanitaryware",
    name: "Sonet Sanitaryware",
    products: [
      { name: "Commode", image: "comod.jpg" },
      { name: "Sanitaryware Product", image: "product1.jpg" }
    ]
  }
];

const catalogueContainer = document.getElementById("catalogueContainer");
const searchInput = document.getElementById("productSearch");
const noResults = document.getElementById("noResults");
const languageSelect = document.getElementById("languageSelect");

let currentLanguage = "en";

function createWhatsAppLink(productName, brandName) {
  const message = `Hello Shree Ganesh Traders, I want to enquire about ${productName} from ${brandName}.`;
  return `https://wa.me/${shopPhone}?text=${encodeURIComponent(message)}`;
}

function displayProducts(searchText = "") {
  catalogueContainer.innerHTML = "";

  let visibleProductCount = 0;
  const query = searchText.trim().toLowerCase();

  brands.forEach((brand) => {
    const matchingProducts = brand.products.filter((product) => {
      const searchableText =
        `${brand.name} ${product.name} ${product.image}`.toLowerCase();

      return searchableText.includes(query);
    });

    if (matchingProducts.length === 0) return;

    visibleProductCount += matchingProducts.length;

    const brandSection = document.createElement("section");
    brandSection.className = "brand-section";

    const heading = document.createElement("h3");
    heading.className = "brand-title";
    heading.textContent = brand.name;

    const productGrid = document.createElement("div");
    productGrid.className = "product-grid";

    matchingProducts.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";

      const image = document.createElement("img");
      image.src = `images/${brand.id}/${product.image}`;
      image.alt = `${product.name} - ${brand.name}`;
      image.loading = "lazy";

      image.onerror = function () {
        this.alt = "Product image unavailable";
        this.style.display = "none";
      };

      const info = document.createElement("div");
      info.className = "product-info";

      const name = document.createElement("h4");
      name.textContent = product.name;

      const brandName = document.createElement("p");
      brandName.textContent = brand.name;

      const enquire = document.createElement("a");
      enquire.className = "enquire-btn";
      enquire.href = createWhatsAppLink(product.name, brand.name);
      enquire.target = "_blank";
      enquire.rel = "noopener";
      enquire.textContent = translations[currentLanguage].enquire;

      info.appendChild(name);
      info.appendChild(brandName);
      info.appendChild(enquire);

      card.appendChild(image);
      card.appendChild(info);
      productGrid.appendChild(card);
    });

    brandSection.appendChild(heading);
    brandSection.appendChild(productGrid);
    catalogueContainer.appendChild(brandSection);
  });

  noResults.hidden = visibleProductCount !== 0;
  noResults.textContent = translations[currentLanguage].noResults;
}

function changeLanguage(language) {
  currentLanguage = language;
  const words = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (words[key]) {
      element.textContent = words[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (words[key]) {
      element.placeholder = words[key];
    }
  });

  document.documentElement.lang = language;
  displayProducts(searchInput.value);
}

searchInput.addEventListener("input", () => {
  displayProducts(searchInput.value);
});

languageSelect.addEventListener("change", (event) => {
  changeLanguage(event.target.value);
});

document.getElementById("year").textContent = new Date().getFullYear();

// Show every brand and product immediately when the page opens.
displayProducts();
