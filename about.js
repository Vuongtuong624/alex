let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick  = () =>{
    search.classList.toggle('active');
}

function openPage(){
    var x = document.getElementById("search").value;
    if(x === "car" || x === "vehicle" || x === "cars" || x === "vehicles"){
        window.open("/Cars.html");
    }
    if(x === "Mercedes" || x === "mercedes" || x === "mercedes benz"){
        window.open("/index.html");
    }
    if(x === "about" || x === "About"){
        window.open("/about.html");
    }
    if(x === "innovation" || x === "Innovation"){
        window.open("/innovation.html");
    }
    else{
        window.open("http://404.com/");
    }
}