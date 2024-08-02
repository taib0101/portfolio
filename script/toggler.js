const hamburgerDisplayOpen = document.querySelector("#hamburgerDisplayOpen");
const hamburgerDisplayParent = document.querySelector("#hamburgerDisplayParent");
const hamburgerDisplayChild = document.querySelector("#hamburgerDisplayChild");
const hamburgerDisplayClose = document.querySelector("#hamburgerDisplayClose");

// when container window will grow over 958 hamburger will vanish
const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        console.log('Width:', entry.contentRect.width);
        if (entry.contentRect.width <= 958) {
            hamburgerDisplayParent.style.right = "0";
        } else {
            hamburgerDisplayParent.style.right = "-10000px";
        }
    }
});

hamburgerDisplayOpen.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("hamburgerDisplayOpen clicked");

    resizeObserver.observe(hamburgerDisplayParent);

});

hamburgerDisplayParent.addEventListener("click", (event) => {
    event.stopPropagation();
    hamburgerDisplayParent.style.right = "-10000px";
    resizeObserver.unobserve(hamburgerDisplayParent);
});


hamburgerDisplayChild.addEventListener("click", (event) => {
    event.stopPropagation();
});

hamburgerDisplayClose.addEventListener("click", (event) => {
    hamburgerDisplayParent.style.right = "-10000px";
    resizeObserver.unobserve(hamburgerDisplayParent);

});