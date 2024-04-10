// Implement Booking functionality

var typed = new Typed("#element", {
  strings: [
    "Efficient Car Distribution System",
    "Awesome Customer Service",
    "Affordable Rentals",
    "Government Certified",
    "Used my Major Tech Companies",
  ],
  typeSpeed: 50,
  backDelay: 180,
  backSpeed: 30,
});

const firmProductData = [
  {
    name: "Honda XCT",
    model: "KC1509",
    price: 169.99,
    seats: 5,
    img: "Images/product--1.jpg",
    productAvailability: true,
    URL: "link to the product",
  },
  {
    name: "Mazda CX9",
    model: "MP8700",
    price: 199.99,
    seats: 7,
    img: "Images/product--2.jpg",
    productAvailability: true,
    URL: "link to the product",
  },
  {
    name: "Toyota Seron",
    model: "SR5654",
    price: 149.99,
    seats : 5
    img: "Images/product--3.jpg",
    productAvailability: false,
    URL: "link to the product",
  },
  {
    name: "Volks Golf",
    model: "GF3665",
    price: 170,
    img: "Images/product--4.jpg",
    productAvailability: true,
    URL: "link to the first product",
  },
];

const openMobileNavbtn = document.querySelector(".bars");
const mobileNav = document.querySelector(".mobile--nav");

function openMobNav() {
  mobileNav.classList.toggle("hideNav");
}

openMobileNavbtn.addEventListener("click", openMobNav);

// console.log(firmProductData);
