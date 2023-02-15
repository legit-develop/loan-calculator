calculateLoan();

function calculateLoan() {
  const loanAmountValue = document.getElementById("loan-amount").value;
  const interestRateValue = document.getElementById("interest-rate").value;
  const monthsToPayValue = document.getElementById("months-to-pay").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(0);
  monthPay = document.getElementById("payment");
  monthPay.innerHTML = `Monthly Payment: R ${monthlyPayment}`;
  totalAmountPayed = (monthlyPayment * monthsToPayValue).toFixed(0);
  totalAmount = document.getElementById("total-amount");
  totalAmount.innerText = `Total Amount Payed: R ${totalAmountPayed}`;
  bankMoney = (totalAmountPayed - loanAmountValue).toFixed(0);
  bankProfitEl = document.getElementById("bank-profit");
  bankProfitEl.innerText = `Bank Profit: R ${bankMoney}`;
}
