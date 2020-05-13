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

//Nome da "tabela" que vai ser messages
var messagesRef = firebase.database().ref('messages');


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
    //Colocando os dados na tabela em forma de jason
    var novaMenssagem = messagesRef.push();
    novaMenssagem.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });

}