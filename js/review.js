
let user=document.querySelector(".name")
let comment=document.querySelector(".comment")
let inner1=document.querySelector(".inner1")


document.querySelector(".submit-btn").addEventListener("click",()=>
{
    let div1=document.createElement("div")
    div1.className="review"
    let h4=document.createElement("h4")
    h4.innerText=user.value.toUpperCase()
    let p=document.createElement("p")
    p.innerText=comment.value.toUpperCase()
    let h6=document.createElement("h6")

    let date= new Date()
    let string_Date=date.toLocaleDateString()
    h6.innerText=string_Date

    console.log(date);
    user.value=" "
    comment.value=" "
    div1.appendChild(h4)
    div1.appendChild(p)
    div1.appendChild(h6)

    

    inner1.appendChild(div1)


})
