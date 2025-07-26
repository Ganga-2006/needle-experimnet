function calculateTotalTax(basePrice, gstRate, callback) {
  const taxAmount = basePrice * (gstRate / 100);
  const totalAmount = basePrice + taxAmount;
  callback(totalAmount);
}
function displayBill(totalAmount) {
  console.log(`Total (including GST): ₹${totalAmount.toFixed(2)}`);
}


const basePrice = 2000;   
const gstRate = 20;        

calculateTotalTax(basePrice, gstRate, displayBill);