
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

var nombre;
var tipo;
var correoElectronico;
var telefono;
var webPage;
var personaDeContacto;


function writeStudent()
{
    var data = ref.child('Empresas/');

    nombre = document.getElementById('nombre').value;
    tipo = document.getElementById('tipo').value;
    correoElectronico = document.getElementById('correoElectronico').value;
    telefono = document.getElementById('telefono').value;
    webpage = document.getElementById('webpage').value;
    personaDeContacto = document.getElementById('personaDeContacto').value;

    data.child(nombre).set({
    nombre:nombre,
    correoElectronico:correoElectronico,
    telefono:telefono,
    webpage:webpage,
    personaDeContacto:personaDeContacto,
    });

    alert('Empresa añadida correctamente');

}
