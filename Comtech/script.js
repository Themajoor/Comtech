const navLink = document.getElementById("nav-links");
const menu = document.getElementsByClassName("menu");
const close = document.getElementsByClassName("close");

function displayMenu() {
  navLink.style.left = "0%";
}
function hideMenu() {
  navLink.style.left = "-110%";
}

const reviews = [
  {
    id: 1,
    name: "susan smith",
    img: "images/review1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    img: "images/review2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    img: "images/review3.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    img: "images/review4.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showperson(currentItem);
});

function showperson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showperson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showperson(currentItem);
});
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * 4);
  showperson(currentItem);
});
