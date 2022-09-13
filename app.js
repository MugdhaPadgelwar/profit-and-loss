const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function submitHandler() {
  const ip = Number(initialPrice.value);
  const qtn = Number(stockQuantity.value);
  const curr = Number(currentPrice.value);
  if (ip != "" && qtn != "" && curr != "") {
    calculateProfitAndLoss(ip, qtn, curr);
  } else {
    output.innerText = "Please fill all the input fileds";
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    const loss = (initial - current) * quantity;
    const lossPercent = (loss / initial) * 100;
    output.innerText =
      "You are in loss, current loss is " +
      loss +
      "rs and loss percentage is " +
      lossPercent +
      "%";
  } else if (current > initial) {
    const profit = (current - initial) * quantity;
    const profitPercent = (profit / initial) * 100;
    output.innerText =
      "You are in profit, current profit is " +
      profit +
      "rs and profit percentage is " +
      profitPercent +
      "%";
  } else {
    output.innerText = "No pain no gain,No gain no pain";
  }
}

submitBtn.addEventListener("click", submitHandler);
