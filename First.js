
let resultat = 0;

function flipIt() {
  resultat = Math.floor(Math.random()*2);
  console.log(resultat)
  document.querySelector('.endResult').innerHTML = "";
}
function chooseKlave() {
  if (resultat === 0){
    document.querySelector('.endResult').innerHTML = "You lose, try again!";
  }
  else {
    document.querySelector('.endResult').innerHTML = "Winner Winner ( Without chicken dinner!)";
  }
}
function chooseKrona() {
  if (resultat === 1){
    document.querySelector('.endResult').innerHTML = "You lose, try again!";
  }
  else {
    document.querySelector('.endResult').innerHTML = "Winner Winner ( Without chicken dinner!)";
  }
}


/*
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM test", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

*/