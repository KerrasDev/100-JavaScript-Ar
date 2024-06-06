// script.js

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('header, section, footer, #result-output').forEach(function(element) {
      element.classList.toggle('dark-mode');
  });
});

document.getElementById('computation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const value1 = parseInt(document.getElementById('value1').value);
  const value2 = parseInt(document.getElementById('value2').value);
  try {
      const result = computeSum(value1, value2);
      document.getElementById('result').textContent = result;
  } catch (error) {
      document.getElementById('result').textContent = error.message;
  }
});

function computeSum(value1, value2) {
  if (typeof value1 !== 'number' || isNaN(value1) || typeof value2 !== 'number' || isNaN(value2)) {
      throw new Error('يجب أن تكون كلا القيمتين أرقام صحيحة صالحة');
  }
  let sum = value1 + value2;
  if (value1 === value2) {
      sum *= 3;
  }
  return sum;
}
