inp = document.querySelector(".tipCalc");
inpBtn = document.querySelector('#calcBtn');
outp = document.querySelector('.output');

console.log(inp)
console.log(inpBtn)
console.log(outp)

inpBtn.addEventListener("click", function() {
  let tip = inp.value * 0.15
  let tmp = `You should tip $${tip} on $${inp.value}`;
  outp.innerText = tmp
})