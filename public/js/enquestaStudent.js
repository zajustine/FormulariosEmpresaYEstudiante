var dni;
var  nom;
var cognoms;
var email;
var contactNumber;

var gm;
var gs;
var especialitat;

var tutor;
var others;

/*B cuestion #3 1st to 4th radio button*/
var b1;
var b2;
var b3;
var b4;

/*B cuestion #4 1st to 4th radio button*/
var b41;
var b42;
var b43;
var b44;

/*B cuestion #5 1st to 4th radio button*/
var b51;
var b52;
var b53;
var b54;

/*C cuestion #6 1st to 4th radio button*/
var c61;
var c62;
var c63;
var c64;

/*C cuestion #7 1st to 4th radio button*/
var c71;
var c72;
var c73;
var c74;

/*C cuestion #8 1st to 4th radio button*/
var c81;
var c82;
var c83;
var c84;

var opinion;

function myFunction()
{

    dni = document.getElementById("dni").value;
    nom = document.getElementById("nom").value;
    cognoms =document.getElementById("cognoms").value;
    email=document.getElementById("email").value;
    contactNumber=document.getElementById("contactNumber").value;
    gm=document.getElementById("gm").value;

    var graumitja = checkCicle(gm);

    alert(dni+nom+cognoms+email+contactNumber);
}

function checkCicle(x)
{
  var graumitja = document.getElementById("gm").value;
  var grausuperior = document.getElementById("gs").value;
  var specialty = document.getElementById("especialitat").value;

  var res = x;
if(x=="gm")
res="Grau Mitja";

  document.open();
  document.write(res);
  document.close();


}
