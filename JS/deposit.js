document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositFieldValue = getInputFieldById("deposit-field");

  const previousDepositTotal = getInnerTextById("deposit-total");

  document.getElementById("deposit-total").innerText =
    previousDepositTotal + depositFieldValue;

  const previousBalanceTotal = getInnerTextById("balance-total");
  
  document.getElementById("balance-total").innerText =
    previousBalanceTotal + depositFieldValue;
});
