import { Swiper } from "../static/slider/script.js";

const allHeaders = document.querySelector(".section__header");

function createSwiper(element) {

  return new Swiper(element, {
    effect: "cards",
    rewind: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}

console.info("Index file run")

const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const spanContainer = document.querySelector(".span-container");

menuToggle.addEventListener("click", () => {
  spanContainer.classList.toggle("active");
  menu.classList.toggle("active");
});

const menuHeaders = document.querySelectorAll(".menu-header");

menuHeaders.forEach(header => {
  header.addEventListener("click", (e) => {
    redirect(`#${e.target.getAttribute("data-redirect")}`);
    menu.classList.remove("active");
    spanContainer.classList.remove("active");
  });
})

const sectionHeaders = document.querySelectorAll(".section__header");
sectionHeaders.forEach(header => {
  header.addEventListener("click", (e) => {
    window.location.href = `#${e.target.parentElement.id}`
  })
});

const copyIPBtn = document.querySelector(".btn__copyIP");
copyIPBtn.addEventListener("click", () => {
  copyText("join.mercitysmp.cf");
  notify("Copied server IP", "success");
});

const swiper = createSwiper(".swiper1");

const staffMembers = [
  {
    "name": "Grailmit",
    "tag": "3114",
    "full_name": "Grailmit#3114",
    "avatar": "/assets/img/admin/grailmit.png",
    "role": "Owner"
  },
  {
    "name": "Optid2",
    "tag": "7706",
    "full_name": "Optid2#7706",
    "avatar": "/assets/img/admin/optid2.png",
    "role": "Owner"
  },
  {
    "name": "Satindar",
    "tag": "2927",
    "full_name": "Satindar#2927",
    "avatar": "/assets/img/admin/satindar.png",
    "role": "Co-Owner"
  },
  {
    "name": "TitanGamerOP",
    "tag": "3937",
    "full_name": "TitanGamerOP#3937",
    "avatar": "/assets/img/admin/titangamerOP.png",
    "role": "Admin"
  },
  {
    "name": "Chill31",
    "tag": "6466",
    "full_name": "Chill31#6466",
    "avatar": "/assets/img/admin/chill31.png",
    "role": "Website Developer"
  }
]

staffMembers.forEach(member => {

  const createdCard = document.createElement("div");
  createdCard.classList.add("swiper-slide");

  createdCard.innerHTML = `
  
<img src="${member.avatar}" alt="${member.name}" class="user-avatar" />

<span class="user-header notranslate">

  <span class="user-name">${member.name}</span><span class="user-tag">#${member.tag}</span>

</span>

<span class="user-role">${member.role}</span>

  `;

  swiper.appendSlide(createdCard);
  swiper.slideTo(0);

});

const swiperHeaders = document.querySelectorAll(".user-header");

for (let i = 0; i < swiperHeaders.length; i++) {

  swiperHeaders[i].addEventListener("click", () => {
    copyText(staffMembers[i].full_name);
    notify(`Copied username of ${staffMembers[i].name}`, "info");
  });

}

const swiper2 = createSwiper(".swiper2");


/* ACCORDION CODE */

const minusSign = "bi-dash";
const plusSign = "bi-plus";

let toggles = document.querySelectorAll(".toggle");
let contentDiv = document.querySelectorAll(".content");
let icons = document.querySelectorAll(".icon");

for (let i = 0; i < toggles.length; i++) {

  toggles[i].addEventListener("click", () => {

    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {

      contentDiv.forEach(div => {
        div.style.height = "0px";
      });

      icons.forEach(icon => {
        icon.classList.remove(minusSign);
        icon.classList.add(plusSign);
      })

      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      icons[i].classList.remove(plusSign);
      icons[i].classList.add(minusSign);

    } else {

      contentDiv[i].style.height = "0px";
      icons[i].classList.remove(minusSign);
      icons[i].classList.add(plusSign);
      
    }

  });

}

document.body.removeAttribute("style");