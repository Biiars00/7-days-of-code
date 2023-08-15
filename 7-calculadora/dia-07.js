function writeNumber(elementId) {
  var valorNumerico = document.getElementById('campoNumerico');

  if (valorNumerico.value == '0' || valorNumerico.value == 'Operação Inválida!') {
    valorNumerico.value = elementId.textContent;
  } else {

    valorNumerico.value += elementId.textContent;
  }
}

function cleartxt() {
  document.getElementById('campoNumerico').value = '0';
  document.getElementById('decimal').disabled = false;
}

function setOperator(elementId) {
  var valorNumerico = document.getElementById('campoNumerico');
  
  if (valorNumerico.value == '0' || valorNumerico.value == 'Operação Inválida!') {
    valorNumerico.value = '0';
  } else {
    valorNumerico.value += elementId.textContent;
    document.getElementById('decimal').disabled = false;
  }
}

function setDecimal(elementId, status) {
  var valorNumerico = document.getElementById('campoNumerico');
  valorNumerico.value += elementId.textContent;
  document.getElementById('decimal').disabled = status;
}

function calculate() {

  try {
    var valorOperacao = document.getElementById('campoNumerico');
    
    if (valorOperacao.value != '') {
      var calculateResult = eval(valorOperacao.value);
      valorOperacao.value = calculateResult;
    }
  } catch (err) {
    valorOperacao.value = 'Operação Inválida!';
  }
}

function removeLastNumber() {
  var valorOperacao = document.getElementById('campoNumerico');

  if (valorOperacao.value.length == 1 || valorOperacao.value == '0' || valorOperacao.value == 'Operação Inválida!') {
    valorOperacao.value = '0';
    document.getElementById('decimal').disabled = false;
  } else {
    valorOperacao.value = valorOperacao.value.substring(0, valorOperacao.value.length - 1);
  }
}