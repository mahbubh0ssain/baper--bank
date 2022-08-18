document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawFieldValue = getInputFieldById("withdraw-field");

  const previousWithdrawTotal = getInnerTextById("withdraw-total");

  document.getElementById("withdraw-total").innerText =
    withdrawFieldValue + previousWithdrawTotal;
  
  const previousBalanceTotal = getInnerTextById("balance-total");
  
  document.getElementById("balance-total").innerText =
    previousBalanceTotal - withdrawFieldValue;
});
