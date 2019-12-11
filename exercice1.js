var nomVoiture = "peugeot";
var x = 50;

var z = 5;
var w = 10;

document.getElementById('demo').innerHTML =
    'z vaut' + ' ' + z + ',' + ' ' + 'w vaut' + ' ' + w + ',' + ' ' + 'le resultat est : {' + parseInt(z + w) + '}';

//----------------

var d = z + w;
//alert(d);

//----------------

var nom = {Prenom:"John", Nom:"Doe", age:"35"};
console.log(nom);

//----------------
//alert(10*5);
//alert(10/2);
//alert(15%9);

//----------------
var l= 10;
var k = 5;
if(k === 5){ l = 15}
console.log(l);

//----------------
function Mafonction() {
        alert("Bonjour tout les monde !")
}
Mafonction();
//----------------
function  maFonctionDeRetour() {
    document.getElementById('demoRetour').innerHTML = 'Bonjour !';
}
maFonctionDeRetour();

//----------------
document.getElementById('monBoutton').onclick = function () {
    alert('nothing');
};
//----------------
  document.getElementById('changeSurOver').onmouseover = function () {
      var ch =document.getElementById('changeSurOver');
      ch.style.backgroundColor = 'red';
};
//----------------
var txt = 'une longue phrase';
var longueur = txt;
//alert(longueur);

//----------------

var str1 = 'Bonjour';
var str2 = 'le Monde';
//alert(str1 + ' ' + str2);

//----------------
listeVoiture = ["Renault","Volvo","Citroen" ];
var maVoiture = listeVoiture[1];
console.log(maVoiture);

listeVoiture[0] = 'Ford';
alert(listeVoiture.length);
listeVoiture.pop(0,2);
listeVoiture.push('Ferrari');
console.log(listeVoiture);

//----------------
var rNumber = Math.round(Math.random());
var fNumber = 33.4;
console.log(Math.round(fNumber));

//----------------
var nombreTrois = 10;
var nombreQuatre = 10;

if (4 > 5){
    nombreQuatre = nombreTrois;
    alert("nombreTrois est égal à nombreQuatre");
}else{
    alert("nombreTrois n'est pas égal à nombreQuatre");
}
//----------------
for (i = 0; i < 10; i++){
    console.log(i);
}

//----------------
var fruits = ["pomme","banane","poire"];

for (var i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

while(i <= 10){
    i++;
    console.log(i);
}
while(i < 10){
    i++;
    console.log(i);
}
//----------------
for (i = 0; i < 11; i++){
    if (i === 5){
        alert('Revision JS fini!')
    }
}
