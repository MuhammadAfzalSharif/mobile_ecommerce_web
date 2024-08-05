
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});


class product {
    constructor(name, price, company, color, url, keyword) {
        this.name = name
        this.price = price
        this.company = company
        this.color = color
        this.url = url
        this.keyword = keyword
    }
}


let add_to_cart = document.querySelectorAll(".add-to-cart")

let products = [];

//pushing all product(object type) in array
for (const item of add_to_cart) {

    let obj = new product(item.getAttribute("pName"), item.getAttribute("pPrice"), item.getAttribute("pCompany"), item.getAttribute("pColor"), item.getAttribute("pImg"), item.getAttribute("pKeyword"))
    products.push(obj);
}


// store product in local storage 

for (const item of add_to_cart) {

    item.addEventListener("click", () => {

        for (const cart_product of products) {

            if (cart_product.name === item.getAttribute("pName")) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(cart_product);
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.href = "http://localhost:3000/added"
            }
        }

    })
}



// searching input
let search_brand = document.querySelector(".sorting .brand")
let search_color = document.querySelector(".sorting .color")
let search_price = document.querySelector(".sorting .price")
let search_mobile = document.querySelector(".sorting .mobile")

let input_brand = document.querySelector(".sorting .brand-field")
let input_color = document.querySelector(".sorting .color-field")
let input_price = document.querySelector(".sorting .price-field")
let input_mobile = document.querySelector(".sorting .mobile-field")


let cards = document.querySelectorAll(".card")



//brand 

search_brand.addEventListener("click", ()=> {
    for (const item of add_to_cart) {

        if (item.getAttribute("pCompany").toLowerCase() != input_brand.value.toLowerCase()) {

            item.parentElement.parentElement.classList.add("display")
        }

    }

})


input_brand.addEventListener("click", () => {

    for (const iterator of cards) {
        input_mobile.value = ""
        input_brand.value = ""
        input_color.value = ""
        input_price.value = ""
        iterator.classList.remove("display")
    }
})


//color

search_color.addEventListener("click", () => {
    for (const item of add_to_cart) {

        if (item.getAttribute("pColor").toLowerCase() != input_color.value.toLowerCase()) {

            item.parentElement.parentElement.classList.add("display")
        }


        // else if (item.getAttribute("pColor") == input_color.value) {

        // }

        // else {
        //     for (const iterator of cards) {
        //         iterator.classList.add("display")
        //     }
        // }



        // console.log(input_brand.value);
    }

})


input_color.addEventListener("click", () => {

    for (const iterator of cards) {

        input_mobile.value = ""
        input_brand.value = ""
        input_color.value = ""
        input_price.value = ""
        iterator.classList.remove("display")
    }
})



// price

search_price.addEventListener("click", () => {
    for (const item of add_to_cart) {

    if(Number(item.getAttribute("pPrice"))>Number(input_price.value))
    {

        item.parentElement.parentElement.classList.add("display")     
    }


    }
    });




input_price.addEventListener("click", () => {

    for (const iterator of cards) {

        input_mobile.value = ""
        input_brand.value = ""
        input_color.value = ""
        input_price.value = ""
        iterator.classList.remove("display")
    }
})


//  exact mobile name        

search_mobile.addEventListener("click", () => {
    for (const item of add_to_cart) {

        if (item.getAttribute("pName").toLowerCase() != input_mobile.value.toLowerCase()) {

            item.parentElement.parentElement.classList.add("display")
        }

        // console.log(input_brand.value);
    }

})


input_mobile.addEventListener("click", () => {

    for (const iterator of cards) {

        input_mobile.value = ""
        input_brand.value = ""
        input_color.value = ""
        input_price.value = ""
        iterator.classList.remove("display")
    }
})


// navabar searching keyword

let nav_search_input=document.querySelector(".searchbox")
let nav_search_btn=document.querySelector(".search-btn")

nav_search_btn.addEventListener("click",()=>
{
    for (const item of add_to_cart) {

        if(!(item.getAttribute("pKeyword").toLowerCase().includes(nav_search_input.value) )){

            item.parentElement.parentElement.classList.add("display")
        }

        

    }

})



nav_search_input.addEventListener("click", () => {

    for (const iterator of cards) {
        nav_search_input.value=""
        input_mobile.value = ""
        input_brand.value = ""
        input_color.value = ""
        input_price.value = ""
        iterator.classList.remove("display")
    }
})
