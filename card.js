let user = document.querySelector(".name");
let College= document.querySelector(".college");
let loc = document.querySelector(".loc");
let photo = document.querySelector(".profile");


let submit=()=>{
    document.querySelector(".inside").style= "display:flex"

    let username= document.querySelector("#Myname").value;
    user.innerHTML= username
    let Colname = document.querySelector("#Mycollege").value;
    College.innerHTML= Colname;
    let locname= document.querySelector("#Myloc").value;
    loc.innerHTML= locname;
}

function loadImage(event){
    const imgdisplayed=document.getElementById("abc");
    imgdisplayed.src=URL.createObjectURL(event.target.files[0]);
    // const showimg=document.getElementById('showimg')
    

}

document.getElementById("Btn").addEventListener("click", submit)
