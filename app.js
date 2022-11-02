var currentPrice = document.querySelector("#currentStockPrice");
var purchasePrice = document.querySelector("#StockPurchasePrice");
var numberOfStocks = document.querySelector("#numberOfStocks");
var submitButton = document.querySelector('#tellMe');
var outputBox = document.querySelector("#outputBox");

submitButton.addEventListener('click', submitHandler);


function submitHandler() {
    var ip = purchasePrice.value;
    var qty = numberOfStocks.value;
    var curr = currentPrice.value;

    try {
        calculateProfitAndLoss(ip,qty,curr);
      }
      catch(err) {
        showOutput(err.message);
      }
    
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        // loss logic here
        var loss = (initial - current)*quantity;
        var lossPercentage = ((initial-current)/initial)*100
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`)
    }else if(current>initial){
        var profit = (current - initial)*quantity;
        var profitPercentage = ((current-initial)/initial)*100
        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`)
        // profit logic here
    }else{
        showOutput('No pain, No gain');
        // the rest of the logic
    }
}

function showOutput(message){
    outputBox.innerHTML = message
}
