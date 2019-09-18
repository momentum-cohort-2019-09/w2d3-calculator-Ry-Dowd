let output = document.querySelector(".output")
let maths = ""
let decimalCount = false

function addNumToMaths(button) {
    console.log('button clicked')
    if (button.textContent === ".") {
        if (decimalCount === false) {
            decimalCount = true
            if (maths === "" || isNaN(maths.slice(-1))) {
            maths += "0"
            }
        } else {
            return
        }
    }
maths += button.textContent
output.textContent = maths
}
function clearOutput() {
    maths = ""
    decimalCount = false
    randResponse = Math.floor(Math.random() * 5)
    if (randResponse < 1) {
        output.textContent = "Feed me some math"
    } else if (randResponse < 2) {
        output.textContent = "How about a fresh start"
    } else if (randResponse < 3) {
        output.textContent = "Yeah... nah"
    } else {
        output.textContent = ""
    }

}
function addOperatorToMaths(button) {
    console.log("adding operator")
    let lastChar = maths.slice(-1)
    if (isNaN(lastChar) && lastChar !== ".") {
        return
    } else {
        maths += button.textContent
        output.textContent = maths
        decimalCount = false
    }
}
function solve() {
    console.log("solving")
    maths = eval(maths)
    if (maths === Infinity) {
        maths = ""
        output.textContent = "Why would you divide by zero?"
        return
    }
    output.textContent = maths
    maths = maths.toString()
    if(maths.includes(".")){
        decimalCount = true
    }
}
clear = document.querySelector(".clear")
clear.addEventListener("click", clearOutput)
let numbers = document.getElementsByClassName("num")
for (let i of numbers) {
    i.addEventListener('click', function () {
        addNumToMaths(i)
    })
}
let equals = document.querySelector(".equals")
equals.addEventListener("click", solve)

let operators = document.getElementsByClassName("operator")
for (let i of operators) {
    i.addEventListener('click', function () {
        addOperatorToMaths(i)
    })
}