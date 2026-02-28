const one = document.querySelector("#one");
const two = document.querySelector("#two");
const five = document.querySelector("#five");
const ten = document.querySelector("#ten");
const clickArea = document.querySelector(".clickArea");
const start = document.querySelector(".start");
const result_back = document.querySelector(".result_back");
const cps = document.querySelector(".cps");
const liveClicks = document.querySelector(".liveClicks");
const again = document.querySelector(".again")

let sec = 0;

one.addEventListener("click", () => {
    sec = 1;
    one.classList.add('selected')
    two.classList.remove('selected')
    five.classList.remove('selected')
    ten.classList.remove('selected')
    console.log(sec);
})
two.addEventListener("click", () => {
    sec = 2;
    two.classList.add('selected')
    one.classList.remove('selected')
    five.classList.remove('selected')
    ten.classList.remove('selected')
    console.log(sec);

})
ten.addEventListener("click", () => {
    sec = 10;
    ten.classList.add('selected')
    two.classList.remove('selected')
    one.classList.remove('selected')
    five.classList.remove('selected')
    console.log(sec);
})
five.addEventListener("click", () => {
    sec = 5;
    five.classList.add('selected')
    ten.classList.remove('selected')
    two.classList.remove('selected')
    one.classList.remove('selected')
    console.log(sec);
})

let clicks = 0;

start.addEventListener("click", () => {
    if (sec === 0) {
        result_back.classList.remove("hide")
        cps.innerHTML = `Select timestamp`
        cps.style.fontSize = "20px"
    }
    else {
        liveClicks.classList.remove("hide")
        clickArea.addEventListener("click", () => {
            clicks++;
            liveClicks.innerHTML = clicks;
        })
        setTimeout(() => {
            result_back.classList.remove("hide")
            cps.innerHTML = `${clicks} cps`
        }, sec * 1000)
    }
})

again.addEventListener("click", () => {
    location.reload() 
})