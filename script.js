const form = document.querySelector("form")

let amount = document.getElementById("amount")

let coin = document.querySelector("select#currency")

let footer = document.querySelector("main footer")

//Cotaçao das moedas
const dolarPrice = 6.11
const euroPrice = 6.26
const poundsPrice = 7.46




form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    
    switch(coin.value) {
        case "USD":
            convertCoin(amount.value, dolarPrice, "$")
            break
        
        case "EUR":
            convertCoin(amount.value, euroPrice, "€")
            break
        
        case "GBP":
            convertCoin(amount.value, poundsPrice, "£")
            break
    }
    
})


function convertCoin(amount, price, symbol) {
    let total = amount * price
    total = total.toFixed(2)
    

    try{
        footer.classList.add("show-result")
        document.querySelector("footer span#description").textContent = `${symbol} ${price} = R$ 1`.replace('.', ',');
        document.querySelector("footer h1#result").textContent = `R$ ${total}`.replace('.', ',');
    }catch(e){
        footer.classList.remove("show-result")
        alert("nao foi possivel")
    }

}
