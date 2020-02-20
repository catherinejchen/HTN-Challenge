document.getElementById("wrong-inputs").style.display = "none";

function NextPage(e){
    e.preventDefault();
    if(document.getElementById("username").value == "cathchen" &&
    document.getElementById("password").style.display == "coolestperson"){
        window.location.href = './main.html';
    }
    else{
        document.getElementById("wrong-inputs").style.display = "block";
    }     
}