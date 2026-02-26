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
 