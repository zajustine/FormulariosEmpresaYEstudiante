var dni;
var nom;
var cognoms;
var email;
var contactNumber;

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

   var snom;
   var scognom;
   var emailStudent;
   var telefono;
   var TipoPracticas;
   var Empresadepracticas;
   var cicle;
   var curso;
   var relacioncompaeros; //Como calificarias la relacion con los compañeros de trabajo
   var relaciontutorE; //Como calificarias la relacion con el tutor de trabajo
   var aprendizaje; //Valoracion del aprendizaje en la empresa
   var Repetir; // Trabajarias con esta empresa
   var ValoracionGlobalS;
   var Scomentarios;

function writeStudentData()
{

  var studentData = ref.child('FormularioEmpresa/');

  dniStudent = document.getElementById('dniStudent').value;
  snom = document.getElementById('snom').value;
  scognom = document.getElementById('scognom').value;
  emailStudent = document.getElementById('emailStudent').value;
  telefono = document.getElementById('telefono').value;
  TipoPracticas = document.getElementById('TipoPracticas').value;
  Empresadepracticas = document.getElementById('Empresadepracticas').value;
  cicle = document.getElementById('cicle').value;
  curso = document.getElementById('curso').value;
  relacioncompaneros = document.getElementById('relacioncompaneros').value;
  relaciontutorE = document.getElementById('relaciontutorE').value;
  aprendizaje = document.getElementById('aprendizaje').value;
  Repetir = document.getElementById('Repetir').value;
  ValoracionGlobalS = document.getElementById('ValoracionGlobalS').value;
  Scomentarios = document.getElementById('Scomentarios').value;

  studentData.child(Empresadepracticas).set({
  snom:snom,
  scognom:scognom,
  emailStudent:emailStudent,
  telefono:telefono,
  TipoPracticas:TipoPracticas,
  cicle:cicle,
  curse:curso,
  relacioncompaneros:relacioncompaneros,
  relaciontutorE:relaciontutorE,
  aprendizaje:aprendizaje,
  Repetir:Repetir,
  ValoracionGlobalS:ValoracionGlobalS,
  Scomentarios:Scomentarios
 });

alert('Submission successful!');
}
