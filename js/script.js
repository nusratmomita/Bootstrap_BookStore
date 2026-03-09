// top menu dropdown 
document.addEventListener("DOMContentLoaded", function() {
    const currencyItems = document.querySelectorAll(".country_money");
    const dropdownToggle = document.getElementById("currencyDropdown");

    currencyItems.forEach(function(item){
      item.addEventListener("click" , function(e){
        e.preventDefault();

        currencyItems.forEach(function(ele){
          ele.classList.remove("active_currency");
        })

        this.classList.add('active_currency')

        const selectedItem = this.textContent.split(" - ")[0];
        // console.log(selectedItem)

        dropdownToggle.textContent = selectedItem;
        // console.log(dropdownToggle)
      })
    })
});

// top menu dropdown for mobile dropdown
document.addEventListener("DOMContentLoaded", function() {
    const currencyItems = document.querySelectorAll(".country_money");
    const dropdownToggle = document.getElementById("currencyDropdown2");

    currencyItems.forEach(function(item){
      item.addEventListener("click" , function(e){
        e.preventDefault();

        currencyItems.forEach(function(ele){
          ele.classList.remove("active_currency");
        })

        this.classList.add('active_currency')

        const selectedItem = this.textContent.split(" - ")[0];
        // console.log(selectedItem)

        dropdownToggle.textContent = selectedItem;
        // console.log(dropdownToggle)
      })
    })
});

// banner swiper
var swiper = new Swiper(".banner_swiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-btn-prev',
    prevEl: '.swiper-btn-next',
  },
  pagination: {
    el: '.swiper_pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

});

var swiper = new Swiper(".our_product_swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: ".product-swiper-btn-prev",
    prevEl: ".product-swiper-btn-next"
  }
});

// our products tab
function bookLists(event, index) {
  var tabContents = document.getElementsByClassName("tabContent");
  var tabLinks = document.getElementsByClassName("tablinks");

  // Hide all tab contents
  for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
  }

  // Remove active class from all buttons
  for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
  }

  // Show selected tab
  tabContents[index].style.display = "block";

  // Add active class to clicked button
  event.currentTarget.classList.add("active");
};

// show adventure tab by default  
document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("tablinks")[0].click();
});


// testimonial swiper
var swiper = new Swiper(".testimonial_swiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.testimonial-swiper-btn-prev',
    prevEl: '.testimonial-swiper-btn-next',
  },
});



// blog swiper
var swiper = new Swiper(".blog_swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});

// mobile navbar
const sidebar = document.querySelector(".mobile_menu_sidebar");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close_btn");

// console.log(sidebar,closeBtn)
hamburger.addEventListener("click", function(){
  sidebar.classList.add("active");
})

closeBtn.addEventListener("click", function(){
  sidebar.classList.remove("active");
})
 


// mobile home menu dropdown
const mobileHomeMenu = document.querySelector(".mobile_home_diff_styles");
const plusIcon = document.querySelector(".plus_icon");
const minusIcon = document.querySelector(".minus_icon");
const mobileShopMenu = document.querySelector(".mobile_shop_diff_styles");

const shopPlus = document.querySelector(".mobile_shop_menu_parent .plus_icon");
const shopMinus = document.querySelector(".mobile_shop_menu_parent .minus_icon");

const mobileAccountMenu = document.querySelector(".mobile_my_account_menu");
const myAccountPlus = document.querySelector(".mobile_my_account_menu_parent .plus_icon");
const myAccountMinus = document.querySelector(".mobile_my_account_menu_parent .minus_icon");

plusIcon.addEventListener("click", function(){
  mobileHomeMenu.classList.add("showDropdown");
  minusIcon.style.display = "block";
  plusIcon.style.display = "none";
});

minusIcon.addEventListener("click", function(){
  mobileHomeMenu.classList.remove("showDropdown");
  minusIcon.style.display = "none";
  plusIcon.style.display = "block";
});

shopPlus.addEventListener("click", function(){
  mobileShopMenu.classList.add("showDropdown");
  shopMinus.style.display = "block";
  shopPlus.style.display = "none";
});

shopMinus.addEventListener("click", function(){
  mobileShopMenu.classList.remove("showDropdown");
  shopMinus.style.display = "none";
  shopPlus.style.display = "block";
});

myAccountPlus.addEventListener("click", function(){
  mobileAccountMenu.classList.add("showDropdown");
  myAccountMinus.style.display = "block";
  myAccountPlus.style.display = "none";
});

myAccountMinus.addEventListener("click", function(){
  mobileAccountMenu.classList.remove("showDropdown");
  myAccountMinus.style.display = "none";
  myAccountPlus.style.display = "block";
});


// sticky header
window.addEventListener("scroll", () => {
  const BottomHeader = document.querySelector(".header_bottom_part");
  const TopHeader = document.querySelector(".header_top_part");
  
  if(window.scrollY > 0){
    BottomHeader.classList.add("sticky");
    TopHeader.classList.add("display_hide");
  }
  else{
    BottomHeader.classList.remove("sticky");
    TopHeader.classList.remove("display_hide")
  }
})

// pre loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.transition = "opacity 0.7s ease";
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 700);
}, 3000);
});


// back to top button
document.addEventListener("DOMContentLoaded", () => {

  const backToTop = document.querySelector(".scroll_up");

  window.addEventListener("scroll", () => {

    let currentScroll = window.scrollY;

    if (currentScroll > 100) {
      // scrolling up
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
