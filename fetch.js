const url1="https://jsonplaceholder.typicode.com/posts";
fetch (url1)
    .then((res)=>{
        if(!res.ok){
            throw Error(res.status);
        }
        return res.json();
        //console.log(res);
    })
 .then((par)=>{
     console.log(par);
 })
 .catch((err)=>{
  alert(err+"Something went wrong");
 });