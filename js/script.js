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
 
 