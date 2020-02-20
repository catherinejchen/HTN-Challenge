// document.getElementById("wrong-inputs").style.display = "none";

function NextPage(){
    event.preventDefault();
    if(document.getElementById("username").value == "cathchen" &&
    document.getElementById("password").value == "coolestperson"){
        window.location.href = './main.html';
    }
    else{
        document.getElementById("login").style.display = "block";
    }     
}