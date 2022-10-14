// KOR ELLENŐRZŐ
function openPopup()
{
    document.getElementById("blocker").classList.toggle("active");
}
window.onload = openPopup;

function ageVerify()
{
    const date = new Date(document.getElementById("date").value);

    var today = new Date();
    var yyyy = today.getFullYear();
    minYear = yyyy - 18;

    if(date.getFullYear() > minYear)
    {
        alert("Sorry, you are too young!");
        document.location="mainpage.html";
    } else if(date.getFullYear() < minYear)
    {
        document.getElementById("blocker").classList.toggle("active");
    }
}

// TITKOS GOMB AZ ELLENŐRZÉS ÁTUGRÁSÁHOZ
document.getElementById("clsbtn").onclick = function()
{
    document.getElementById("blocker").classList.toggle("active");
}

// KOMMENTELÉS
function newComment()
{
    var li = document.createElement('li');

    var commentsection = document.getElementById("commentsection");
    var name = document.getElementById("name");
    var color = document.getElementById("color");
    var comment = document.getElementById("comment");

    // AKTUÁLIS IDŐPONT LÉTREHOZÁSA
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0'); // KIEGÉSZÍTI 0-VAL HA NEM KÉT SZÁMJEGYŰ A DÁTUM
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // +1 MERT JANUÁR A 0.
    var yyyy = today.getFullYear();
    var hour = String(today.getHours()).padStart(2, '0');
    var min = String(today.getMinutes()).padStart(2, '0');
    var sec = String(today.getSeconds()).padStart(2, '0');

    today = yyyy + '/' + mm + '/' + dd + '-' + hour + ':' + min + ':' + sec;

    li.appendChild(document.createTextNode(today + " -- " + name.value + ":    " + comment.value));

    var checkbox=document.getElementById("checkboxid");

    if(!checkbox.checked)
    {
        alert("You have to accept the TOS!");
        return;
    }

    if(name.value === '')
    {
        alert("Enter a name!");
        name.style.borderColor = 'red'; // PIROSAN KIJELÖLI MIT KELL MÉG KITÖLTENI
        return;
    }else if(comment.value === '')
    {
        alert("Write a comment!");
        comment.style.borderColor = 'red';
        return;
    }else
    {
        commentsection.appendChild(li).style.color = color.value;
    }

    name.style.borderColor = 'black'; // VISSZAÁLLÍTJA A MEZŐK KERETÉT FEKETÉRE
    comment.style.borderColor = 'black';
    document.getElementById("comment").value = ""; // KITÖRLI A KOMMENT MEZŐBE ÍRTAKAT
}