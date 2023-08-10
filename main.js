let switcherlis=document.querySelectorAll(".switcher li")

let imgs =Array.from(document.images)
console.log(imgs)


switcherlis.forEach((li)=>{
    li.addEventListener("click",removeActive);
    li.addEventListener("click",mangeImgs);
})

//remove active class from all lis and add tocurrent

function removeActive(){
    switcherlis.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active")
    })
}
//Manage imgs
function mangeImgs  (){
    imgs.forEach((img)=>{
    img.style.display="none"
    });
  document.querySelectorAll(this.dataset.cat).forEach((el)=>{
    el.style.display="block";
  })
}