
var n = parseInt(window.prompt("enter number of rows"))
alert("Convince Sasuke To Come to hidden leaf Village for 3 times to get him back to hidden leaf village")
var meet = 0
var main = document.querySelector(".main")
for (let i = 0; i < n; i++) {
    var row = document.createElement("div")
    row.setAttribute("class", "row");
    for (let j = 0; j < n; j++) {
        var item = document.createElement("div")
        row.appendChild(item)
    }
    main.appendChild(row)
}
function checkcondition(){
    if (x == sasukex && y == sasukey) {
        meet++
        while (sasukex == x && sasukey == y) {
            sasukex = Math.floor(Math.random() * n) *6;
            sasukey = Math.floor(Math.random() * n) * 6;
        }

        if (meet != 3) {
            alert(`You Have to convience sasuke for ${3 - meet} more times`)
            sasuke.style.left = `${sasukex}vmax`
            sasuke.style.top = `${sasukey}vmax`
        }
        else {
            alert("sasuke agreed to come to konoha ! Hurray")
            sasuke.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTN5cXp6Z2h0MmcyNHByaHNmdmF6dHhxeXJuMGo2d3BhdHZjaGU0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y5efFpqW5knlu/giphy.webp"
            sasuke.style.top = "-5%"
            sasuke.style.width = "40vmax"
            sasuke.style.height = "40vmax"
            sasuke.style.top = "50%"
            sasuke.style.left = "50%"
            sasuke.style.transform = "translate(-50%,-50%)"
            setTimeout(() => {
                if (confirm('Do you want to play the game again?')) {
                    location.reload();
                } else {
                    alert.log('game stopped !');
                }
            }, 1000);
        }
    }
}
var sasukex = Math.floor(Math.random() * n) * 6;
var sasukey = Math.floor(Math.random() * n) * 6;
while (sasukex == 0 && sasukey == 0) {
    sasukex = Math.floor(Math.random() * n) * 6;
    sasukey = Math.floor(Math.random() * n) * 6;
}
var sasuke = document.querySelector("#sasuke")
console.log(sasukex, sasukey)
sasuke.style.left = `${sasukex}vmax`
sasuke.style.top = `${sasukey}vmax`
var naruto = document.querySelector("#naruto")
var x = 0;
var y = 0;
naruto.style.left = `${x}vmax`
naruto.style.top = `${y}vmax`
document.querySelector(".ri-arrow-down-line").addEventListener("click", function () {
    if (y != ((n - 1) * 6)) {
        y += 6
        naruto.style.top = `${y}vmax`
    }
    checkcondition()
})
document.querySelector(".ri-arrow-up-line").addEventListener("click", function () {
    if (y != 0) {
        y -= 6
        naruto.style.top = `${y}vmax`
    }
    checkcondition()
})
document.querySelector(".ri-arrow-right-line").addEventListener("click", function () {
    if (x != ((n - 1) * 6)) {
        x += 6
        naruto.style.left = `${x}vmax`
        naruto.style.transform = 'rotateY(180deg)'

    }
    checkcondition()
})
document.querySelector(".ri-arrow-left-line").addEventListener("click", function () {
    if (x != 0) {
        x -= 6
        naruto.style.left = `${x}vmax`
        naruto.style.transform = 'rotateY(0deg)'

    }
    checkcondition()
})
