
console.log("javascript is linked")

function shapeBabies() {
var sb = '<img src="./assets/comics/SB/01.jpg">'
var sbSummary = '<h3> Summary </h3><p> I wrote these when I was eight years old and you can tell! The Shape Baby\'s follows the adventures of Smartypants Triangle, Socks the Square, and Jungle Shape Kid as they join forces to save their town from various perils. </p>'


document.getElementById("summary").innerHTML = sbSummary;
document.getElementById("comics").innerHTML = sb;
}


function karateCatNumOne(){ 
var kc =  '<img src="./assets/comics/KC1/kc.jpg"><br><img src="./assets/comics/KC1/kc1.jpg"> '

var kcSummary = '<h3><b>Summary:</b></h3><p> Ah yes, just what everyone came here for. Comics I wrote in middle school. You have great taste.</p>'

document.getElementById("summary").innerHTML = kcSummary;
document.getElementById("comics").innerHTML = kc;
}


function redThornNumOne(){ 
    var rt =  '<center><img src="./assets/comics/RT/00.png"></center><br> '
    
    var rtSummary = '<h3><b>Summary:</b></h3><p> </p>'
    
    document.getElementById("summary").innerHTML = rtSummary;
    document.getElementById("comics").innerHTML = rt;
    }
    
