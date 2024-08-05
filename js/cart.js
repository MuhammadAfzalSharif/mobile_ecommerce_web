let product_container = document.querySelector(".products-container");
let totalAmountInput = document.querySelector(".payment input");
let placeorder= document.querySelector(".placeorder")
let totalAmount;
let a1,a2,a3=[]


document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);

    let products = JSON.parse(localStorage.getItem('cart')) || [];
    let unique_products = [];

    products.forEach(element => {
        // Check if the unique_products array already contains an element with the same name
        if (!unique_products.some(ele => ele.name === element.name)) {
            unique_products.push(element);
        }
    });

    // Now unique_products contains only unique items based on the 'name' property

    for (const pro of unique_products) {

        let div = document.createElement("div");
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let h6 = document.createElement("h6");
        let p = document.createElement("p");
        let input = document.createElement("input");
        let btn = document.createElement("button");
        div.setAttribute("class", "product");

        img.src = pro.url;
        h6.innerText = pro.name;
        p.innerText = pro.price;
        input.type = "number";
        input.value = 1;
        input.className="quantity"
        btn.innerText = "Remove From Cart";
        btn.className = "single-clear";

        div1.setAttribute("class", "info");
        div.appendChild(img);
        div1.appendChild(h6);
        div1.appendChild(p);
        div1.appendChild(input);
        div1.appendChild(btn);
        div.appendChild(div1);

        // Calculate and update total amount
        

        product_container.appendChild(div);
    }

    // Update total amount input field
    totalAmountInput.value = totalAmount.toFixed(2); // Display total amount with 2 decimal places

});

document.querySelector(".clear-cart").addEventListener("click", () => {
    localStorage.clear();
    product_container.innerHTML = "";
    totalAmount = 0;
    totalAmountInput.value = totalAmount.toFixed(2); // Reset total amount to zero
});

product_container.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("single-clear")) {
        const button = event.target;
        const productElement = button.parentElement.parentElement;
        productElement.remove();
        
    }

    
});

document.body.addEventListener("mousemove", function (event) {
    if (event.target && event.target.classList.contains("products-container")) {
        const productElement= event.target
        let prod=document.querySelectorAll(".product")
        totalAmountInput.value=0.00
        totalAmount=0
        a1=[]
        a2=[]
        a3=[]

        for (const iterator of prod) {
            const productPrice = parseFloat(iterator.querySelector("p").innerText);
            const productQuantity = parseInt(iterator.querySelector("input").value);
            const productName= iterator.querySelector("h6").innerText;

            totalAmount+=productPrice*productQuantity
            a1.push(productQuantity)
            a2.push(productPrice)
            a3.push(productName)
        }
        
        totalAmountInput.value=totalAmount;
        
       
    }

    
});

// localStorage 

placeorder.addEventListener("click",(event)=>
{
    localStorage.clear()
    let order = JSON.parse(localStorage.getItem('order')) || [];

    order.push(a1,a2,a3,totalAmountInput.value);
    localStorage.setItem('order', JSON.stringify(order));
    
    
    
    
})