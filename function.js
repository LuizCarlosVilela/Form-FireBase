var firebaseConfig = {
    apiKey: "AIzaSyC4hYqh7ucL-Ts-JK1JQm-K5GGi-Igs99o",
    authDomain: "primeiro-24ff9.firebaseapp.com",
    databaseURL: "https://primeiro-24ff9.firebaseio.com",
    projectId: "primeiro-24ff9",
    storageBucket: "primeiro-24ff9.appspot.com",
    messagingSenderId: "177700479824",
    appId: "1:177700479824:web:b44d09b6c442b07fd24255",
    measurementId: "G-57BG6SV3YR"
};

firebase.initializeApp(firebaseConfig);



document.getElementById("form").addEventListener("submit", e =>{
    e.preventDefault();

    var name = getValueInput("name");
    var company = getValueInput("company");
    var email = getValueInput("email");
    var phone = getValueInput("phone");
    var message = getValueInput("message");
    
    //Mandando dados para function
    saveMessage(name, company, email, phone, message);

    document.getElementsByClassName('alert')[0].style.display="block";
    setTimeout(() => {
        clearInput("name");
        clearInput("company");
        clearInput("email");
        clearInput("phone");
        clearInput("message");
        document.getElementsByClassName('alert')[0].style.display="none";
    }, 2000);
    

});

function clearInput(e){
    document.getElementsByName(e)[0].value = "";
}
function getValueInput(e){
    return document.getElementsByName(e)[0].value;
}

function saveMessage(name, company, email, phone, message){
    //Nome da "tabela" que vai ser messages
    //Colocando os dados na tabela em forma de jason
    firebase.database().ref('messages').push().set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}

function getMessage(){
    //Pegando os dados do firebase
    firebase.database().ref('messages').on('value', e =>{
        //Transformando os dados em array, os dados que vem em json pelo e.val()
        var json  = e.val();
        var array = Object.values(json); 

        var cad = document.getElementById("cadastros");

        //Percorrendo o array e criando uma li a cada cadastro no firebase
        array.forEach(e => {
            var li = document.createElement("li");
            li.innerHTML = "Nome: "+e.name+"<br> Email: "+e.email+"<br><br>";

            cad.appendChild(li);
        });
    });
}
getMessage();