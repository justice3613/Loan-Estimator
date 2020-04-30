// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateResults, 2000);
  
    e.preventDefault();
  });
  
  // Calculate Results
  function calculateResults(){
    console.log('Calculating...');
    // UI Vars
   var amount = document.getElementById('amount');
   var interest = document.getElementById('interest');
   var years = document.getElementById('years');
   var monthlyPayment = document.getElementById('monthly-payment');
   var totalPayment = document.getElementById('total-payment');
   var totalInterest = document.getElementById('total-Interest');
  
   var principal = parseFloat(amount.value);
   var calculatedInterest = parseFloat(interest.value) / 100 / 12;
   var calculatedPayments = parseFloat(years.value) * 12;
  
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
  
    if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  
      // Show results
      document.getElementById('results').style.display = 'block';
  
      // Hide loader
      document.getElementById('loading').style.display = 'none';
  
    } else {
      showError('Please check your numbers');
    }
  }
  
  // Show Error
  function showError(error){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }