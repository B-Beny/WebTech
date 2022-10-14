// DISCLAIMER
function openPopup()
{
    document.getElementById("disclaimer").classList.toggle("active");
}
window.onload = openPopup;

document.getElementById("disclaimerclsbtn").onclick = function()
{
    document.getElementById("disclaimer").classList.toggle("active");
}

// KÁRTYÁK
/* ------------------------------------------------------------------ YAKUZA 0 */
document.getElementById("y0card").onclick = function()
{
    document.getElementById("y0pop").classList.toggle("active");
    // KATTINTÁSRA FELMEGY AZ OLDAL TETEJÉRE
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Edge, Opera
    document.getElementById("y0vid").play(); // <-- PLAY
}
            
document.getElementById("y0clsbtn").onclick = function()
{
    document.getElementById("y0pop").classList.toggle("active");
    document.getElementById("y0vid").pause(); // <-- PAUSE
    document.getElementById("y0vid").currentTime = 0; // VISSZATEKERI AZ ELEJÉRE A VIDEÓT
}

document.getElementById("y0overlay").onclick = function()
{
    document.getElementById("y0pop").classList.toggle("active");
    document.getElementById("y0vid").pause();
    document.getElementById("y0vid").currentTime = 0; 
}

/* ------------------------------------------------------------------ YAKUZA KIWAMI */

document.getElementById("yk1card").onclick = function()
{
    document.getElementById("yk1pop").classList.toggle("active");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("yk1vid").play();
}
            
document.getElementById("yk1clsbtn").onclick = function()
{
    document.getElementById("yk1pop").classList.toggle("active");
    document.getElementById("yk1vid").pause();
    document.getElementById("yk1vid").currentTime = 0;
}

document.getElementById("yk1overlay").onclick = function()
{
    document.getElementById("yk1pop").classList.toggle("active");
    document.getElementById("yk1vid").pause();
    document.getElementById("yk1vid").currentTime = 0;
}

/* ------------------------------------------------------------------ YAKUZA KIWAMI 2 */

document.getElementById("yk2card").onclick = function()
{
    document.getElementById("yk2pop").classList.toggle("active");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("yk2vid").volume = 0.2; // HANGERŐ ÁLLÍTÁS
    document.getElementById("yk2vid").play();
}
            
document.getElementById("yk2clsbtn").onclick = function()
{
    document.getElementById("yk2pop").classList.toggle("active");
    document.getElementById("yk2vid").pause();
    document.getElementById("yk2vid").currentTime = 0;
}

document.getElementById("yk2overlay").onclick = function()
{
    document.getElementById("yk2pop").classList.toggle("active");
    document.getElementById("yk2vid").pause();
    document.getElementById("yk2vid").currentTime = 0;
}

/* ------------------------------------------------------------------ YAKUZA 3 REMASTERED */

document.getElementById("y3card").onclick = function()
{
    document.getElementById("y3pop").classList.toggle("active");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("y3vid").volume = 0.3;
    document.getElementById("y3vid").play();
}
            
document.getElementById("y3clsbtn").onclick = function()
{
    document.getElementById("y3pop").classList.toggle("active");
    document.getElementById("y3vid").pause();
    document.getElementById("y3vid").currentTime = 0;
}

document.getElementById("y3overlay").onclick = function()
{
    document.getElementById("y3pop").classList.toggle("active");
    document.getElementById("y3vid").pause();
    document.getElementById("y3vid").currentTime = 0;
}

/* ------------------------------------------------------------------ YAKUZA 4 REMASTERED */

document.getElementById("y4card").onclick = function()
{
    document.getElementById("y4pop").classList.toggle("active");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("y4vid").volume = 0.3;
    document.getElementById("y4vid").play();
}
            
document.getElementById("y4clsbtn").onclick = function()
{
    document.getElementById("y4pop").classList.toggle("active");
    document.getElementById("y4vid").pause();
    document.getElementById("y4vid").currentTime = 0;
}

document.getElementById("y4overlay").onclick = function()
{
    document.getElementById("y4pop").classList.toggle("active");
    document.getElementById("y4vid").pause();
    document.getElementById("y4vid").currentTime = 0;
}

/* ------------------------------------------------------------------ YAKUZA 5 REMASTERED */

document.getElementById("y5card").onclick = function()
{
    document.getElementById("y5pop").classList.toggle("active");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("y5vid").volume = 0.2;
    document.getElementById("y5vid").play();
}
            
document.getElementById("y5clsbtn").onclick = function()
{
    document.getElementById("y5pop").classList.toggle("active");
    document.getElementById("y5vid").pause();
    document.getElementById("y5vid").currentTime = 0;
}

document.getElementById("y5overlay").onclick = function()
{
    document.getElementById("y5pop").classList.toggle("active");
    document.getElementById("y5vid").pause();
    document.getElementById("y5vid").currentTime = 0;
}

/* ------------------------------------------------------------------ YAKUZA 6 THE SONG OF LIFE */

document.getElementById("y6card").onclick = function()
{
    document.getElementById("y6pop").classList.toggle("active");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("y6vid").volume = 0.2;
    document.getElementById("y6vid").play();
}
            
document.getElementById("y6clsbtn").onclick = function()
{
    document.getElementById("y6pop").classList.toggle("active");
    document.getElementById("y6vid").pause();
    document.getElementById("y6vid").currentTime = 0;
}

document.getElementById("y6overlay").onclick = function()
{
    document.getElementById("y6pop").classList.toggle("active");
    document.getElementById("y6vid").pause();
    document.getElementById("y6vid").currentTime = 0;
}
