document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const billTotal = document.getElementById('billTotal');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmount = document.getElementById('tipAmount');
    const totalBill = document.getElementById('totalBill');
    const tipRange = document.getElementById('tipRange');

    form.addEventListener('input', updateTipValues);
    form.addEventListener('change', updateTipValues);

    function updateTipValues() {
        const billValue = parseFloat(billTotal.value);
        const tipPercentageValue = tipRange.value;
        const tipAmountValue = (billValue * (tipPercentageValue / 100)).toFixed(2);
        const totalBillValue = (billValue + parseFloat(tipAmountValue)).toFixed(2);

        if (isNaN(billValue)) {
            alert('Please enter a valid number for Bill Total.');
            return;
        }

        tipPercentage.value = tipPercentageValue + '%';
        tipAmount.value = tipAmountValue;
        totalBill.value = totalBillValue;
    }
});
