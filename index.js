function calculateLoan() {
  const loanAmountValue = document.getElementById("loan-amount").value;
  const interestRateValue = document.getElementById("interest-rate").value;
  const monthsToPayValue = document.getElementById("months-to-pay").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);
  monthPay = document.getElementById("payment");
  monthPay.innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
