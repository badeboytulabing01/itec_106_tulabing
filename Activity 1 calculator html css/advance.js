function clearScreen(){
              document.getElementById("result").value = "";
      }

 function display(value){
      document.getElementById("result").value += value;
    }

  function calculate(){
     try {
    const p = eval(document.getElementById('result').value.replace(',', ''));
    document.getElementById('result').value = addCommas(p);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }

}

function addCommas(nStr) {
  nStr += '';
  const x = nStr.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


