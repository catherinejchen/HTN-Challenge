window.addEventListener('load', function () {
    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    test = JSON.parse(httpGet("https://hackthenorth.netlify.com/api/fe-challenge-attendee"));

    if(test == null){
        document.getElementById("profile").style.display = "none";
        document.getElementById("null-profile").style.display = "block";
    }
    else{
        document.getElementById("profile").style.display = "block";
        document.getElementById("null-profile").style.display = "none";
    }

    if(test.type == "hacker"){
        document.getElementById("hacker").style.display = "block";
        document.getElementById("workshop").style.display = "block";
        document.getElementById("sponsor").style.display = "none";
        document.getElementById("volunteer").style.display = "none";
        document.getElementById("organizer").style.display = "none";
        document.getElementById("call").style.display = "none";
    }
    else if(test.type == "sponsor"){
        document.getElementById("hacker").style.display = "none";
        document.getElementById("workshop").style.display = "none";
        document.getElementById("sponsor").style.display = "block";
        document.getElementById("volunteer").style.display = "none";
        document.getElementById("organizer").style.display = "none";
        document.getElementById("call").style.display = "none";
    }
    else if(test.type == "volunteer"){
        document.getElementById("hacker").style.display = "none";
        document.getElementById("workshop").style.display = "none";
        document.getElementById("sponsor").style.display = "none";
        document.getElementById("volunteer").style.display = "block";
        document.getElementById("organizer").style.display = "none";
        document.getElementById("call").style.display = "none";
    }
    else if(test.type == "organizer"){
        document.getElementById("hacker").style.display = "none";
        document.getElementById("workshop").style.display = "none";
        document.getElementById("sponsor").style.display = "none";
        document.getElementById("volunteer").style.display = "none";
        document.getElementById("organizer").style.display = "block";
        document.getElementById("call").style.display = "block";
    }

    document.getElementById("pfp").src = test.profile_pic;
    document.getElementById("name").innerHTML = test.name;
    if (test.checked_in == true){
        document.getElementById("caption").innerHTML = "ID: " + test.id + " | Checked In: Yes | " + test.type[0].toUpperCase() + test.type.slice(1);
    }
    else if(test.checked_in == false){
        document.getElementById("caption").innerHTML = "ID: " + test.id + " | Checked In: No | " + test.type[0].toUpperCase() + test.type.slice(1);
    }
    else{
        document.getElementById("caption").innerHTML = "ID: " + test.id + " | " + test.type[0].toUpperCase() + test.type.slice(1);
    }
    // document.getElementById("caption").innerHTML = "ID: " + test.id + " | Checked In: " + test.checked_in + " | " + test.type;
    document.getElementById("bio").innerHTML = test.bio;

    document.getElementById("num-workshops").innerHTML = test.num_workshops_attended;

    document.getElementById("company").innerHTML = test.sponsor_company;
    document.getElementById("company-link").innerHTML = test.sponsor_company_link;

    var date = new Date(test.next_shift)
    document.getElementById("next-shift").innerHTML = date;

    document.getElementById("phone-num").innerHTML = test.phone_number;
})