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



// banner swiper
var swiper = new Swiper(".banner_swiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  loop: true,
  navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
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
    nextEl: '.testimonial-swiper-btn-next',
    prevEl: '.testimonial-swiper-btn-prev',
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

 
 