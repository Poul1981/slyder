let tabs = document.querySelectorAll(".tab");
let paragr = document.querySelectorAll(".paragraf");
// for (let i = 0; i < tabs.length; i++) {
//     document.write(tabs[i]);
// }
// for (let key in tabs) {
//     document.write(key);
// }
tabs.forEach((element, index) => {
    // alert(`${element}, индекс: ${index}`);
    element.addEventListener('click',
        function () {
            tabs.forEach((item) => item.classList.remove("open"));
            element.classList.add("open");

            paragr.forEach((p) => p.classList.add("hide"));
            paragr[index].classList.remove("hide");
        });
});

function createHendler(ind) {
    return function () {
        changePages(ind);
    }
}

function changePages(index) {
    tabs.forEach((item) => {
        item.classList.remove("open");
    });
    this.classList.add("open");

    paragr.forEach((p) => p.classList.add("hide"));
    paragr[index].classList.remove("hide");
    // paragr[tabIndex].classList.add("visible");
}