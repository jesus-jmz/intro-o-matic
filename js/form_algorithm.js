/*
0 - Presentación como autoridad o Presentación de etiqueta
1 - Concepto. Dato Relevante o Dato Interesante
2 - Starter
3 - Benefit
4 - Closing
*/
var data = [null, null, null, null, null];
var adds = 0;

function keepOnly1Checked(lastClicked, notLast){
  let first = document.getElementById(lastClicked);
  let second = document.getElementById(notLast);
  if (first.checked==true){
    second.checked=false;
  }
}

function show(section){
  document.getElementById(section).style.display = "block";
}

function hide(section){
  document.getElementById(section).style.display = "none";
}

function capture(input, index, prefix, pMark){
  let textField = document.getElementById(input).value;
  textField = addPeriod(textField, pMark);
  data[index] = (prefix + textField);
  recalculate();
}

function captureConcept(){
  let concepto = document.getElementById("concepto").value;
  let adjConcepto = document.getElementById("adjConcepto").value;
  let unionConcepto = document.getElementById("unionConcepto").value;
  let razConcepto = document.getElementById("razConcepto").value;
  let text = (concepto + " es " + adjConcepto + unionConcepto + razConcepto);
  text = addPeriod(text, '.');
  data[1] = text;
  recalculate();
}

function captureStarter(){
  const joins = [' Además, ', ' También, ', ' Después, ', ' Para finalizar, '];
  let starter1 = document.getElementById("starter1").value;
  let starter2 = document.getElementById("starter2").value;
  let starter3 = document.getElementById("starter3").value;
  if (adds === 0) {
    let text = starter1 + starter2 + starter3;
    text = addPeriod(text, '.');
    data[2] = text;
    adds++;
  } else if (adds <= 4) {
    let text = joins[adds-1] + starter2 + starter3;
    text = addPeriod(text, '.');
    data[2] += text;
    adds++;
  } else {
    window.alert("Solo se permite ingresar hasta 5 conceptos. Presiona clear para borrar todo.");
  }
  recalculate();
}

function clearStarter(){
  data[2] = "";
  adds = 0;
  recalculate();
}

function captureBenefit(){
  let benefit1 = document.getElementById("benefit1").value;
  let benefit2 = document.getElementById("benefit2").value;
  let benefit3 = document.getElementById("benefit3").value;
  let text = benefit1 + "te " + benefit2 + benefit3;
  text = addPeriod(text, '.');
  data[3] = text;
  recalculate();
}

function recalculate(){
  let finalOutput = document.getElementById("finalOutput");
  let finalIntro = '';
  for (var i = 0; i < data.length; i++) {
    if(data[i] !== null){
      finalIntro += (data[i] + ' ');
    }
  }
  finalOutput.value = finalIntro;
  //window.scrollTo(0,document.body.scrollHeight);
}

function addPeriod(text, pMark){
  text = text.split('');
  while(text[text.length - 1] === ' '){
    text.pop();
  }
  if (text[text.length - 1] !== pMark){
    text.push(pMark);
  }
  text = text.join('');
  return text;
}
