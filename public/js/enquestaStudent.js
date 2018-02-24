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

function writeStudentData()
{

  var studentData = ref.child('Formulario/Estudiante');

  dni = document.getElementById("dni").value;
  nom = document.getElementById("nom").value;
  cognoms =document.getElementById("cognoms").value;
  email=document.getElementById("email").value;
  contactNumber=document.getElementById("contactNumber").value;

  var cicle;//CICLE
  var q2;//item NUMBER 2
  var q3; //ITEM NUMBER 3
  var q4; //ITEM NUMBER 4!!!!!
  var q5; //ITEM NUMBER 5!!!!!!!!
  var q6; //ITEM NUMBER 6!!!!
  var q7; //ITEM number 7!
  var q8; //item number 8!!!
  var opinion;


  if(document.getElementById('tutor').checked)
  {
    q2="Font d'informació: Proposta del tutor";
  }
  else if(document.getElementById('others').checked)
  {
    q2="Font d'informació:  A través de contactes personals";
  }
  else alert('Fill all fields.');


  if(document.getElementById('b1').checked)
  {
    q3="Informació facilitada: Gens bona";
  }
  else if(document.getElementById('b2').checked)
  {
    q3="Informació facilitada: Poca bona";
  }
  else if(document.getElementById('b3').checked)
  {
    q3="Informació facilitada: Bona";
  }
  else if(document.getElementById('b4').checked)
  {
    q3="Informació facilitada: Molt bona";
  }
  else alert('Fill all fields.');


  if(document.getElementById('b41').checked)
  {
    q4="Formalització del conveni ha estat molt complicat";
  }
  else if(document.getElementById('b42').checked)
  {
    q4="Formalització del conveni ha estat complicat";
  }
  else if(document.getElementById('b43').checked)
  {
    q4="Formalització del conveni ha estat fàcil";
  }
  else if(document.getElementById('b44').checked)
  {
    q4="Formalització del conveni ha estat molt fàcil";
  }
  else alert('Fill all fields.');


  if(document.getElementById('b51').checked)
  {
    q5="El seguiment i orientació del tutor del cicle ha estat gens bo";
  }
  else if(document.getElementById('b52').checked)
  {
    q5="El seguiment i orientació del tutor del cicle ha estat poc bo";
  }
  else if(document.getElementById('b53').checked)
  {
    q5="El seguiment i orientació del tutor del cicle ha estat bo";
  }
  else if(document.getElementById('b54').checked)
  {
    q5="El seguiment i orientació del tutor del cicle ha estat gens molt bo";
  }
  else alert ('Fill all fields.');


  if(document.getElementById('c61').checked)
  {
    q6="El seguiment i orientació del tutor de l'empresa ha estat gens bo";
  }
  else if(document.getElementById('c62').checked)
  {
    q6="El seguiment i orientació del tutor de l'empresa ha estat poc bo"
  }
  else if(document.getElementById('c63').checked)
  {
    q6="El seguiment i orientació del tutor de l'empresa ha estat bo";
  }
  else if(document.getElementById('c64').checked)
  {
    q6="El seguiment i orientació del tutor de l'empresa ha estat molt bo";
  }
  else alert('Fill all fields.');


  if(document.getElementById('c71').checked)
  {
    q7="La meva estada ha estat gens bona";
  }
  else if(document.getElementById('c72').checked)
  {
    q7="La meva estada ha estat poc bona"
  }
  else if(document.getElementById('c73').checked)
  {
    q7="La meva estada ha estat bona";
  }
  else if(document.getElementById('c74').checked)
  {
    q7="La meva estada ha estat molt bona";
  }
  else alert ('Fill all fields.');


  if(document.getElementById('c81').checked)
  {
    q8="Considero que la meva formació i experiència laboral ha millorat molt poca";
  }
  else if(document.getElementById('c82').checked)
  {
    q8="Considero que la meva formació i experiència laboral ha millorat poca";
  }
  else if(document.getElementById('c83').checked)
  {
    q8="Considero que la meva formació i experiència laboral tenen alguna millora";
  }
  else if(document.getElementById('c84').checked)
  {
    q8="Considero que la meva formació i experiència laboral ha millorat moltíssim";
  }
  else alert('Fill all fields.');



  if(document.getElementById('opinion').value=='')
  {
    alert('Fill all fields.');
  }
  else {
    opinion=document.getElementById('opinion').value;
  }

//var enquestaStudentID = studentData.push();

  studentData.child(dni).set({
   nom:nom,
   cognoms:cognoms,
   email:email,
   contactNumber:contactNumber,
   cicle:getCicle(),
   item2:q2,
   item3:q3,
   item4:q4,
   item5:q5,
   item6:q6,
   item7:q7,
   item8:q8,
   opinion:opinion
 });


alert('Submission successful!');
}

function getCicle()
{

  if(document.getElementById('gm').checked)
  {

      document.getElementById("gs").disabled=true;
      document.getElementById("especialitat").disabled=true;
      cicle="Grau Mitja";
    }else if(document.getElementById('gs').checked) {
      document.getElementById("gm").disabled=true;
      document.getElementById("especialitat").disabled=true;
      cicle="Grau Superior";
    }
    else if(document.getElementById('especialitat').value!='') {
      document.getElementById("gm").disabled=true;
      document.getElementById("gs").disabled=true;
      cicle=document.getElementById('especialitat');
    }

    return cicle;
}
