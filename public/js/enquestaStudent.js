var dni;
var nom;
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


  // Initialize Firebase

  var config = {
		apiKey: "AIzaSyBPonpL--ZV2Tf0Tb5j2DzRgZgX13st540",
		authDomain: "empresasypracticas.firebaseapp.com",
		databaseURL: "https://empresasypracticas.firebaseio.com",
		projectId: "empresasypracticas",
		storageBucket: "empresasypracticas.appspot.com",
		messagingSenderId: "699325239796"
  };
  firebase.initializeApp(config);
var ref = new Firebase("https://empresasypracticas.firebaseio.com/");

function writeStudentData(dni, nom, cognoms, email, contactNumber)
{

  var studentData = ref.child('Formulario/Estudiante');

  dni = document.getElementById("dni").value;
  nom = document.getElementById("nom").value;
  cognoms =document.getElementById("cognoms").value;
  email=document.getElementById("email").value;
  contactNumber=document.getElementById("contactNumber").value;


//var enquestaStudentID = studentData.push();

  studentData.child(dni).set({
   nom:nom,
   cognoms:cognoms,
   email:email,
   contactNumber:contactNumber
 });

  var res;
    /*
  if(x=="gm")
  res="Grau Mitja";*/

  /*if(document.getElementById('gm').checked) {
    document.getElementById("gs").disabled=true;
    document.getElementById("especialitat").disabled=true;
    res="Grau Mitja";
  }else if(document.getElementById('gs').checked) {
    document.getElementById("gm").disabled=true;
    document.getElementById("especialitat").disabled=true;
    res="Grau Superior";
  }
  else {
    document.getElementById("gm").disabled=true;
    document.getElementById("gs").disabled=true;
    res=specialty;
  }*/

}


function checkCicle()
{

  document.open();
  document.write(res);
  document.close();


}
