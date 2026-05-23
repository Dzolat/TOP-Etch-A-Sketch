let game = document.getElementById("game")
let sizeChanger = document.getElementById("change_size")
let resetCanvas = document.getElementById("reset_canvas")

let blackButton = document.getElementById("black")
let rainbowButton = document.getElementById("rainbow")
let opacityButton = document.getElementById("opacity")
let lastSize = 16
let colorMode = "black"

function getRGB()
{
    return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}

function changeOpacity(newDiv)
{
    if (newDiv.getAttribute("opacity") >= 1)
        return;

    newDiv.setAttribute("opacity", Number(Number(newDiv.getAttribute("opacity")) + 0.1).toFixed(1) || 0.1)
    
    console.log()

    newDiv.style.backgroundColor = `rgb(0 0 0 / ${Number(newDiv.getAttribute("opacity")) * 100 + "%"})`;
}

function createDivs(amount)
{
    if (amount > 100 || amount < 1)
    {
        alert("Choose a number between 1 and 100!")
        return
    }
        
    lastSize = amount

    game.innerHTML = ""
    for (i = 0;i<amount;i++)
    {
        let newColumnDiv = document.createElement("div")
        newColumnDiv.setAttribute("id", "gamecolumn")

        for (j = 0;j<amount;j++) {
            let newDiv = document.createElement("div")
            let wh = 100 / amount / 2 + "vh"

            newColumnDiv.appendChild(newDiv)
            newDiv.setAttribute("style", `width: ${wh}; height: ${wh};`)
            newDiv.addEventListener("mouseover", function() {
                newDiv.style.backgroundColor = (colorMode == "rainbow") ? getRGB() : (colorMode == "opacity") ? changeOpacity(newDiv) : "black"
            })
        }

        game.appendChild(newColumnDiv)
    }
    
}

createDivs(16)

sizeChanger.addEventListener("click", () => createDivs(prompt("Choose size: 1 - 100")))
resetCanvas.addEventListener("click", () => createDivs(lastSize))
blackButton.addEventListener("click", () => {colorMode = "black"; createDivs(lastSize)})
rainbowButton.addEventListener("click", () => {colorMode = "rainbow"; createDivs(lastSize)})
opacityButton.addEventListener("click", () => {colorMode = "opacity"; createDivs(lastSize)})
