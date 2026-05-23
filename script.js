let game = document.getElementById("game")

function createDivs(amount)
{
    for (i = 0;i<amount;i++)
    {
        let newColumnDiv = document.createElement("div")
        newColumnDiv.setAttribute("id", "gamecolumn")

        for (j = 0;j<amount;j++) {
            let newDiv = document.createElement("div")
            let wh = 100 / amount / 2 + "vh"

            newColumnDiv.appendChild(newDiv)
            newDiv.setAttribute("style", `width: ${wh}; height: ${wh};`)
        }

        game.appendChild(newColumnDiv)
    }
    
}

createDivs(16)