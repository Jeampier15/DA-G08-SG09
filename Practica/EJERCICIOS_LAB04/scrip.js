function calculateTip() { 
    let billAmount = parseFloat(document.getElementById('billAmount').value); 
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value); 
 
    if (isNaN(billAmount) || isNaN(tipPercentage)) { 
        alert("Por favor, ingresa valores válidos.");        
        return; 
    } 
 
    let tipAmount = billAmount * (tipPercentage / 100); 
 
    let totalAmount = billAmount + tipAmount; 
 
    document.getElementById('tipAmount').innerText = `Monto de la Propina: $${tipAmount.toFixed(2)}`; 
    document.getElementById('totalAmount').innerText = `Total a Pagar: $${totalAmount.toFixed(2)}`; 
} 