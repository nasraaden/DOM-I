const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar
const navBar = document.querySelectorAll('nav a');
navBar[0].textContent = "Services";
navBar[1].textContent = "Product";
navBar[2].textContent = "Vision";
navBar[3].textContent = "Features";
navBar[4].textContent = "About";
navBar[5].textContent = "Contact";

//header h1 and button
const headerh1 = document.querySelector('h1');
headerh1.textContent = siteContent['cta']['h1'];

const headerButton = document.querySelector('button');
headerButton.textContent = siteContent['cta']['button'];

//header pic
const headerPic = document.getElementById("cta-img");
headerPic.setAttribute('src', siteContent["cta"]["img-src"]);

//features and about h4
const mainContentTitle = document.querySelectorAll('.main-content h4');
mainContentTitle[0].textContent = siteContent["main-content"]["features-h4"];
mainContentTitle[1].textContent = siteContent["main-content"]["about-h4"]

// const featuresContent = document.querySelector('.text-content p');
// featuresContent.textContent = siteContent["main-content"]["features-content"]

//features and about p
const mainContentParagraph = document.querySelectorAll('.main-content p');
mainContentParagraph[0].textContent = siteContent["main-content"]["features-content"];
mainContentParagraph[1].textContent = siteContent["main-content"]["about-content"];

//last pic
const middlePic = document.getElementById("middle-img");
middlePic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content h4
const bottomContentTitle = document.querySelectorAll('.bottom-content h4');
bottomContentTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentTitle[2].textContent = siteContent["main-content"]["vision-h4"];

//bottom content p
const bottomContentParagraph = document.querySelectorAll('.bottom-content p');
bottomContentParagraph[0].textContent = siteContent["main-content"]["services-content"];
bottomContentParagraph[1].textContent = siteContent["main-content"]["product-content"];
bottomContentParagraph[2].textContent = siteContent["main-content"]["vision-content"];

//contact title
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"];

//contact p
const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].textContent = siteContent["contact"]["address"];
contactParagraph[1].textContent = siteContent["contact"]["phone"];
contactParagraph[2].textContent = siteContent["contact"]["email"];

//footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];