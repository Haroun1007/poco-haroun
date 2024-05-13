const billAmountInput = document.getElementById("billAmountInput");
const tipRateInput = document.getElementById("tipRateInput");
const excludeVATInput = document.getElementById("excludeVATInput");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let billAmount = parseFloat(billAmountInput.value);
  let tipRate = parseFloat(tipRateInput.value);
  let excludeVAT = parseFloat(excludeVATInput.value);

  if (isNaN(billAmount)) {
    result.textContent = "Please enter your bill amount as number, e.g. 230.50";
    return;
  }
  if (isNaN(tipRate)) {
    result.textContent = "Please enter the tip rate as number, e.g. 15 for 15%";
    return;
  }

  if (isNaN(excludeVAT)) {
    result.textContent =
      "Please enter the VAT as number if you want to exclude it, e.g. 18 for 18%";
  }

  billAmount = parseFloat(Math.ceil(billAmount * 20) / 20);
  tipRate = parseFloat(tipRate);
  excludeVAT = parseFloat(excludeVAT);

  let tip;
  let totalAmount;
  let billAmountExVAT;

  if (excludeVAT > 0) {
    billAmountExVAT = billAmount - (billAmount * excludeVAT) / 100;
    tip = (billAmountExVAT * tipRate) / 100;
  } else {
    tip = (billAmount * tipRate) / 100;
  }

  tip = Math.ceil(tip * 20) / 20;
  totalAmount = Math.ceil((billAmount + tip) * 20) / 20;

  result.innerHTML = `
        <p>Your bill amount is CHF ${billAmount.toFixed(2)}</p>
        <p>Your tip rate is ${tipRate.toFixed(2)}%</p>
        ${
          excludeVAT > 0
            ? `<p>You want to exclude the VAT of ${excludeVAT.toFixed(2)}%</p>`
            : ""
        }
        <p>You pay a total of CHF ${totalAmount.toFixed(
          2
        )} with a tip of CHF ${tip.toFixed(2)}</p>
      `;
});
