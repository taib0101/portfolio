const hamburgerDisplayOpen = document.querySelector("#hamburgerDisplayOpen");
const hamburgerDisplayParent = document.querySelector("#hamburgerDisplayParent");
const hamburgerDisplayChild = document.querySelector("#hamburgerDisplayChild");
const hamburgerDisplayClose = document.querySelector("#hamburgerDisplayClose");

hamburgerDisplayOpen.addEventListener("click" , (event) => {
    event.preventDefault();
    // console.log("hamburgerDisplayOpen clicked");
    hamburgerDisplayParent.style.right = "0";
});

hamburgerDisplayParent.addEventListener("click" , (event) => {
    event.stopPropagation();
    hamburgerDisplayParent.style.right = "-10000px";
});


hamburgerDisplayChild.addEventListener("click" , (event) => {
    event.stopPropagation();
});

hamburgerDisplayClose.addEventListener("click" , (event) => {
    hamburgerDisplayParent.style.right = "-10000px";
});