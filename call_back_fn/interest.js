function calculateSimpleInterest(principal, rate, time, callback) {
  const interest = (principal * rate * time) / 100;
  
  
  callback(interest);
}
function notifyUser(interest) {
  console.log("Interest Calculation Complete");
  console.log(`Interest Earned: ₹${interest.toFixed(2)}`);
}
const principal = 20000; 
const rate = 8.5;    
const time = 2;           

calculateSimpleInterest(principal, rate, time, notifyUser);
