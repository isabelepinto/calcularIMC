function start() {
  var buttoncalculateImc = document.querySelector('#button-calcutale-imc');
  buttoncalculateImc.addEventListener('click', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  imc = weight / (height * height);
  return imc;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height).toFixed(2).replace('.', ',');

  imcResult.textContent = imc;
}

start();
