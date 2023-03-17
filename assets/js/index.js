
const finish = document.getElementById("finishsfx")
const btnClick = document.getElementById("clicksfx")

function animation(){

    setTimeout(() => {
        document.getElementById("gauge-needle").classList.add("needle-animate")
    },1000)

    setTimeout(() => {
        document.getElementById("coffee").classList.add("coffee-animate")
    },4750)

    setTimeout(() => {
        document.getElementById("steam1").classList.add("steam-animate")
    },6500)

    setTimeout(() => {
        document.getElementById("steam2").classList.add("steam-animate")
    },8300)

    setTimeout(() => {
        document.getElementById("steam3").classList.add("steam-animate")
    },10500)

    setTimeout(() => {
        document.getElementById("steam4").classList.add("steam-animate")
    },7000)

    setTimeout(() => {
        document.getElementById("steam5").classList.add("steam-animate")
    },7800)

    setTimeout(() => {
        document.getElementById("steam6").classList.add("steam-animate")
    },10100)

    setTimeout(() => {
        document.getElementById("steam7").classList.add("steam-animate")
    },7200)

    setTimeout(() => {
        document.getElementById("steam8").classList.add("steam-animate")
    },9300)

    setTimeout(() => {
        document.getElementById("coffee-drop1").classList.add("drop-animate")
    }, 10750)

    setTimeout(() => {
        document.getElementById("coffee-drop2").classList.add("drop-animate")
    }, 11500)

    setTimeout(() => {
        finish.play()
    }, 12250)

    setTimeout(() => {
        document.getElementById("gauge-needle").classList.remove("needle-animate")
        document.getElementById("coffee").classList.remove("coffee-animate")
        document.getElementById("coffee-drop1").classList.remove("drop-animate")
        document.getElementById("coffee-drop2").classList.remove("drop-animate")

        for(let i = 1; i < 9; i++){
            document.getElementById(`steam${i}`).classList.remove("steam-animate")
        }
    }, 16000)

}

document.getElementById("top-deco6").addEventListener("click", () => {
    btnClick.play()
    animation()
})
