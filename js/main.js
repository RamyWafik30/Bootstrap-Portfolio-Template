


// let el = document.querySelector(".scroller");
// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


// console.log (documentElement.scrollHeight);
// console.log ( documentElement.clientHeight);
// console.log (height);

// window.addEventListener("scroll",() => {
//     const scrollTop = document.documentElement.scrollTop;
//     el.style.width = `${(scrollTop / height) * 100}%`;

// });


// let el = document.querySelector(".scroller");
// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);
// console.log(height);

// window.addEventListener("scroll", () => {
// const scrollTop = document.documentElement.scrollTop;
//   el.style.width = `${(scrollTop / height) * 100}%`;
// });




let div = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");


window.onscroll = function () {
    if (window.scrollY >= div.offsetTop - 300) {
        
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};




//******************************************** */


let divs = document.querySelector(".counter-box ");
let span = document.querySelectorAll(".counter-ico span");


window.onscroll = function () {
    if (window.scrollY >= div.offsetTop - 300) {
        
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

