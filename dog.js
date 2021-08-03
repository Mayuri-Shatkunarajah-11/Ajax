const xhr= new XMLHttpRequest();
const url="https://dog.ceo/api/breeds/image/random";
const btn=document.getElementById("btn");

console.log("hi");
let img=document.querySelector("img");
btn.addEventListener("click",()=>{
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4&&xhr.status==200){
            const parsed=JSON.parse(xhr.responseText);
            img.src=parsed.message;

        }
    }
    xhr.open("GET",url);
    xhr.send();
});