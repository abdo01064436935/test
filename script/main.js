var imgs = document.querySelectorAll(".child img");
var main = document.querySelector("#main");

for(var i =0 ; i < imgs.length ; i++){
    imgs[i].addEventListener("click" , function(e){
        console.log(e.target.getAttribute("src"));
        
        var targetSrc = e.target.getAttribute("src");
        main.setAttribute("src" , targetSrc);
    })
}