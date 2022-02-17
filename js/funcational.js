function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}

function updateBalance(amount, isAdding){
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;

}

document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('clicked');
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
})

// Handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);
    updateBalance(amount,  false);
});