const click=document.querySelector(".bar")
const ul=document.querySelector(".ul-header")
const id_bar=document.querySelector("#id-bar")



import { data } from "./data-/data.js"
console.log(data);

const data1=document.querySelector(".data2")
const data4=document.querySelector(".data4")

//AI 
const textElement = document.getElementById('typing-text');
const text = "Welcome to my Family";
let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
  } else {
    textElement.textContent = ""; // Reset the text
    index = 0; // Reset the index
  }
  
  setTimeout(type, 120); // Adjust typing speed here (in milliseconds)
}

type();;




click.addEventListener("click",()=>{
    ul.classList.toggle("add")
    click.classList.toggle("true")
    if(click.classList.contains("true")){
        id_bar.classList.replace("fa-bars","fa-xmark")
    }
    else{
        id_bar.classList.replace("fa-xmark","fa-bars")

    }
})
data1.innerHTML=data.map((p)=>(
    `
    <div class="data3"> 
    <p id="p-id">${p.id}</p>
    <img src=${p.img} alt="">
    <h1>${p.name}</h1>
    </div>
            
    `
))

const add=(ID)=>{
    const data_find=data.filter((p)=>p.id==ID)

    if(ID==1){
        data4.innerHTML=data_find.map((p)=>(
            `<div class="data-show"> 
            <span class="span-back"><i class="fa-solid fa-chevron-left fa-xl"></i></span>
            <p id="p-id">${p.id}</p>
            <img src=${p.img} alt="">
            <h1> <span> <i class="fa-solid fa-user"></i> </span> My Mom</h1>
            <h1>age: ${p.age}</h1>
            <h1>Job: ${p.job}</h1>

            <p> <h1>Favorite</h1> ${p.fav}</p>
            </div>`
        )).join("")
    }else{
        data4.innerHTML=data_find.map((p)=>(
        `<div class="data-show"> 
        <span class="span-back"><i class="fa-solid fa-chevron-left fa-xl"></i></span>
        <p id="p-id">${p.id}</p>
        <img src=${p.img} alt="">
        <h1> <span> <i class="fa-solid fa-user"></i> </span>  Name: Rorn ${p.name}</h1>
        <h1> <span> age: ${p.age}</h1>
        <h1>Job: ${p.job}</h1>
        <div class="contact">
                <a href="${p.fb}"><span><i class="fa-brands fa-facebook fa-xl"></i></span></a>
                <a href=${p.ig}><span><i class="fa-brands fa-telegram fa-xl"></i></span></a>
        </div>
        <p> <h1>Favorite</h1> ${p.fav}</p>
        <a class="cv" href="#">Download CV</a>
        </div>`
    )).join("")
    }
     
    
    data1.style.display="none"
}

const box = document.querySelectorAll(".data3");

box.forEach((element) => {
  element.addEventListener("click", (e) => {
    data4.style.display="flex"
    const nameTxt=element.querySelector("#p-id").textContent;
    
    add(nameTxt)
    const back=document.querySelector(".span-back")
    console.log(back);

    back.addEventListener("click",()=>{
        data1.style.display="flex"
        data4.style.display="none"
    })




  });
});
