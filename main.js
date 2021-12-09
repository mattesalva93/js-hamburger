openmenu = document.querySelector(".fas.fa-bars");

openmenu.addEventListener("click" , function(){
    const showmenu = document.querySelector(".hamburger-menu");
    showmenu.className = showmenu.classList + " active ";
})

closemenu = document.querySelector(".fas.fa-times");

closemenu.addEventListener("click" , function(){
    const hidemenu = document.querySelector(".hamburger-menu");
    hidemenu.className = "hamburger-menu";
})


/*openmenu = document.querySelector(".fas.fa-bars");

openmenu.addEventListener("click" , function(){
    const showmenu = document.querySelector(".hamburger-menu");
    showmenu.style.display = "block";
})

closemenu = document.querySelector(".fas.fa-times");

closemenu.addEventListener("click" , function(){
    const hidemenu = document.querySelector(".hamburger-menu");
    hidemenu.style.display = "none";
})*/