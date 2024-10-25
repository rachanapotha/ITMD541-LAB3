function calculateTip() {
    const amount = parseFloat(document.getElementById('amount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const currency = document.getElementById('currency').value;
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.innerText = '';

    // Validate the amount: it should be a non-negative number
    if (isNaN(amount) || amount < 0) {
        errorMessage.innerText = 'Please enter a valid amount (non-negative number).';
        document.getElementById('tipAmount').value = '';
        document.getElementById('totalAmount').value = '';
        document.getElementById('displayTipPercentage').value = '';
        return;
    }

    // Calculate the tip amount in USD
    const tipAmountUSD = (amount * tipPercentage) / 100;
    const totalAmountUSD = amount + tipAmountUSD;

    // Initialize conversion rates
    let conversionRate = 1; // Default for USD
    let tipAmountConverted = tipAmountUSD;
    let totalAmountConverted = totalAmountUSD;

    if (currency === 'INR') {
        conversionRate = 84.07; // Conversion rate from USD to INR
    } else if (currency === 'JPY') {
        conversionRate = 149.34; // Conversion rate from USD to JPY
    }

    // Convert tip and total amounts to selected currency
    tipAmountConverted = tipAmountUSD * conversionRate;
    totalAmountConverted = totalAmountUSD * conversionRate;

    // Update the displayed values
    document.getElementById('tipValue').innerText = tipPercentage;
    document.getElementById('tipAmount').value = currency === 'USD' ? tipAmountUSD.toFixed(2) : tipAmountConverted.toFixed(2);
    document.getElementById('totalAmount').value = currency === 'USD' ? totalAmountUSD.toFixed(2) : totalAmountConverted.toFixed(2);
    document.getElementById('displayTipPercentage').value = tipPercentage; // Display the selected tip percentage
}