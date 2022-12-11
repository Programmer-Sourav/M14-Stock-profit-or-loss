const initialPrice = document.querySelector("#initial-price")
const currentPrice = document.querySelector("#current-price")
const quantityOfStock = document.querySelector("#quantity-of-stock")
const showMessage = document.querySelector("#show-result")
const showBtn = document.querySelector("#tell-me")


showBtn.addEventListener("click", calculateProfitAndLoss)

function calculateProfitAndLoss(){
  
 if(initialPrice.value=== ""||  currentPrice.value==="" ||  quantityOfStock.value === ""){
    alert('Please fill out all Fields')
 }

 else if(initialPrice.value<=0 || currentPrice.value<=0){
    alert('Initial Price and Current Price should always be positive')
 }

 else{

    if( quantityOfStock.value <=0){
        alert('Quantity should be atleast One.')
     }
    else{

    var costPrice = Number(initialPrice.value)* Number(quantityOfStock.value);
    var sellingPrice = Number(currentPrice.value)* Number(quantityOfStock.value);

    if(Number(initialPrice.value)<Number(currentPrice.value)){

        var profit = sellingPrice - costPrice; 

        console.log("p selling price"+sellingPrice)
        console.log("p cost price "+costPrice)

        var profitPercentage = (profit/costPrice)*100;
        showMessage.innerText = `Hey, the profit is ${profit} and the percent is ${profitPercentage.toFixed(2)}%`
        showMessage.style.display = "block";
        showMessage.style.color = "white";
        showMessage.style.backgroundColor = "green"
    }
    else if (Number(initialPrice.value)>Number(currentPrice.value)){
        var loss = costPrice  - sellingPrice ;
        var lossPercentage = (loss/costPrice)*100;

        console.log("l selling price"+sellingPrice)
        console.log("l cost price "+costPrice)

        showMessage.innerText = `Hey, the loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}%`
        showMessage.style.display = "block";
        showMessage.style.color = "white";
        showMessage.style.backgroundColor = "red"
    }
    else{
        showMessage.innerText = `Hey, there is no profit or no loss.`
        showMessage.style.display = "block";
        showMessage.style.color = "white";
        showMessage.style.backgroundColor = "blue"
    }
   }
 }
}
