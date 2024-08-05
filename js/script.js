document.addEventListener('DOMContentLoaded', function() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    // sessionStorage.clear(); //clear this storage local buffer
    // localStorage.clear();


});



let drop=document.querySelector(".dropdown-item1")

    drop.addEventListener("click",()=>
    {
        console.log("hello");
        window.location.href="login.htm"
    })


let drop1=document.querySelector(".dropdown-item2")

    drop1.addEventListener("click",()=>
    {
        window.location.href="signup.htm"
    })

    function shop()
    {
        window.location.href="/shop.htm"
    }