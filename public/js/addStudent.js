
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

var nom;
var cognom;
var empresa;
var correo;
var curso;
var nie;
var fin_practicas;
var inicio_practicas
var telefono;
var tipo_practicas;
var tareas = str.split(',');
var estado;
var cicle;

function writeStudent()
{
    var data = ref.child('Estudiantes/');

    nom = document.getElementById('nom').value;
    cognom = document.getElementById('cognom').value;
    empresa = document.getElementById('Empresadepracticas').value;
    correo = document.getElementById('correo').value;
    cicle = document.getElementById('cicle').value;
    curso = document.getElementById('curso').value;
    nie = document.getElementById('nie').value;
    fin_practicas = document.getElementById('fin_practicas').value;
    inicio_practicas = document.getElementById('inicio_practicas').value;
    telefono = document.getElementById('telefono').value;
    tipo_practicas= document.getElementById('TipoPracticas').value;
    tareas = document.getElementById('tareas').value;
    estado = document.getElementById('estado').value;

    data.child(nie).set({
    nom:nom,
    cognom:cognom,
    curso:curso,
    empresa:empresa,
    correo:correo,
    cicle:cicle,
    nie:nie,
    fin_practicas:fin_practicas,
    inicio_practicas:inicio_practicas,
    telefono:telefono,
    tipo_practicas:tipo_practicas,
    tareas:tareas,
    estadoPracticas:estado
   });

    alert('Submission successful!');

}
