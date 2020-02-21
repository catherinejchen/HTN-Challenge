// document.getElementById("wrong-inputs").style.display = "none";

function NextPage(){
    event.preventDefault();
    if(document.getElementById("username").value == "htn" &&
    document.getElementById("password").value == "hackthenorth"){
        window.location.href = './main.html';
    }
    else{
        document.getElementById("login").style.display = "block";
    }     
}