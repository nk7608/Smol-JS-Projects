const tempByUser = Number(document.getElementById("tempByUser").value);
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(event){
  event.preventDefault();
  if(toFahrenheit.checked){
  temp = tempByUser * 9/5 + 32;
  result.textContent = `Temperature: ${temp} °F`;
  }
  else if(toCelsius.checked){
  temp = (tempByUser - 32) * 5 / 9;
  result.textContent = `Temperature: ${temp} °C`;
  }
  else{
    result.textContent = "Select an unit to convert your Temperature!";
  }
}

