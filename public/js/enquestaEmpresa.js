
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

var Tutornom;
var Tutorcognom;
var EmpresaA; //empresa answering
var TutorEmail;
var Tutornumero;
var EstudentNIE;
var EstudenEmail;
var EstudentFullname;
var FormacionInicial; //Satisfaccion con la formacion inicial del alumno
var ValoracionGlobal; //Como califacaria la experiencia global;
var ValoracionEstudiante; //Como valoraria al estudiante;
var RepitirColaboracion; //¿Repitiria la colaboracion con este estudiante;
var Comentarios; //Comentarios extras;
var MotivoFin;

function writeEmpresaData()
{
    var data = ref.child('FormularioEstudiante');

    Tutornom = document.getElementById('Tutornom').value;
    Tutorcognom = document.getElementById('Tutorcognom').value;
    EmpresaA = document.getElementById('EmpresaA').value;
    TutorEmail = document.getElementById('TutorEmail').value;
    Tutornumero = document.getElementById('Tutornumero').value;
    EstudentNIE = document.getElementById('EstudentNIE').value;
    EstudentFullname = document.getElementById('EstudentFullname').value;
    EstudenEmail = document.getElementById('EstudenEmail').value;
    FormacionInicial = document.getElementById('FormacionInicial').value;
    ValoracionGlobal= document.getElementById('ValoracionGlobal').value;
    ValoracionEstudiante = document.getElementById('ValoracionEstudiante').value;
    RepitirColaboracion = document.getElementById('RepitirColaboracion').value;
    Comentarios = document.getElementById('Comentarios').value;
    MotivoFin = document.getElementById('MotivoFin').value;

    data.child(EstudentNIE).set({
    Tutornom:Tutornom,
    Tutorcognom:Tutorcognom,
    EmpresaA:EmpresaA,
    TutorEmail:TutorEmail,
    Tutornumero:Tutornumero,
    EstudentFullname:EstudentFullname,
    EstudenEmail:EstudenEmail,
    FormacionInicial:FormacionInicial,
    ValoracionGlobal:ValoracionGlobal,
    ValoracionEstudiante:ValoracionEstudiante,
    RepitirColaboracion:RepitirColaboracion,
    Comentarios:Comentarios,
    MotivoFin:MotivoFin
   });

    alert('Submission successful!');

}
