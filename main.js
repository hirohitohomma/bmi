document.getElementById('btn').addEventListener('click',anserCheck);
function anserCheck() {
  var yourName = document.getElementById('ans_name').value;
  var yourHeight = document.getElementById('ans_height').value;
  var yourWeight = document.getElementById('ans_weight').value;
  var bmi = (yourWeight/(yourHeight/100)**2);
  console.log(bmi);
   document.write(`こんにちは${yourName}さん<BR>${yourName}さんのBMIは<BR>${bmi.toFixed(2)}です<BR>`);
  var x = (bmi);
  console.log(x);
  if (x<16) {
    document.write("痩せすぎです");
  } else if (x >= 16 && x < 17) {
    document.write("痩せています");
  } else if (x >= 17 && x <= 18.49) {
    document.write("痩せ気味です");
  }else if (x >= 18.50 && x <= 24.99) {
    document.write("普通体重です"); 
  }else if (x >= 25.00 && x <= 29.99) {
    document.write("前肥満です"); 
  }else if (x >= 30.00 && x <= 34.99) {
    document.write("肥満（1度）です"); 
  }else if (x >= 35.00 && x <= 39.99) {
    document.write("肥満（2度）です"); 
  }else if (x >= 40.00) {
    document.write("肥満（3度）です"); 
  }
}

var head =document.head;
var linkElement = document.createElement("link");

linkElement.type = "text/css";
linkElement.rel = "stylesheet";
linkElement.href = "javascript.css";

head.appendChild(linkElement);
