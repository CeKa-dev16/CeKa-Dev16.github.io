// Declaring DOM objets inputs
const numbers_input = document.getElementById('data');
const req_input = document.getElementById('req');
const pos_input = document.getElementById("pos");
const quantity_input = document.getElementById("quantity");
const parts_input = document.getElementById("parts");
const action_button = document.getElementById("calcular");

// Declaring DOM objets outputs
const sort_output = document.getElementById('sort');
const min_output = document.getElementById('min');
const max_output = document.getElementById('max');
const intervals_output = document.getElementById('intervals');
const suma_output = document.getElementById('suma');
const kpos_output = document.getElementById('kpos');
const prom_output = document.getElementById('prom');
const moda_output = document.getElementById('moda');
const mediana_output = document.getElementById('mediana');


// Declaring regex's
const regex_input = /(,)+|(;| )+/g;
const regex_req = /(\))+|(;| )+|(,)+/g;

// Support functions
function sortArray(array, compareFunction) {
  return [...array].sort(compareFunction);
}

function min(numbers) {
  if(numbers == 0) {return ''} else {
    return Math.min.apply(0, numbers);
  }
}

function max(numbers) {
  if(numbers == 0) {return ''} else {
    return Math.max.apply(0, numbers);
  }
}

action_button.addEventListener("click", function () {
  // Declaring new values of user inputs 
  const numbers = JSON.parse('[' + numbers_input.value.replace(regex_input, function(match, p1, p2) {
    if (p1) {
      return '.';
    } else if (p2) {
      return ',';
    }
  }) + ']');
  const req = JSON.parse('[' + req_input.value.replace(regex_req, function(match, p1, p2, p3) {
    if (p1) {
      return ']';
    } else if (p2) {
      return ',';
    } else if (p3) {
      return '.';
    }
  }) + ']');
  const sorted = sortArray(numbers, (a, b) => a - b);

  // Output replace
  sort_output.innerHTML = sorted;
  min_output.innerHTML = min(numbers);
  max_output.innerHTML = max(numbers);
  intervals_output.innerHTML = calcInterval(numbers, req);
  suma_output.innerHTML = numbers.length;
  kpos_output.innerHTML = calcPos(pos_input.value, parseInt(quantity_input.value), parts_input.value);
  prom_output.innerHTML = prom(numbers);
  moda_output.innerHTML = moda(sorted);
  mediana_output.innerHTML = mediana(sorted);
});