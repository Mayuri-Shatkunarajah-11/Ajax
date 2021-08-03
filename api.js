const xhr=new XMLHttpRequest();
const url="https://api.github.com/zen";
xhr.onreadystatechange=()=>{
    if(xhr.readyState==4&&xhr.status==200){
        console.log(xhr.responseText);
    }
}
xhr.open("GET",url);
xhr.send();