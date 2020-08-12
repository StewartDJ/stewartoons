
console.log("javascript is linked")

function shapeBabies() {
var sb = '<img src="./assets/comics/SB/01.jpg">'
var sbSummary = '<h3> Summary </h3><p> I wrote these when I was eight years old and you can tell! The Shape Baby\'s follows the adventures of Smartypants Triangle, Socks the Square, and Jungle Shape Kid as they join forces to save their town from various perils. </p>'


document.getElementById("summary").innerHTML = sbSummary;
document.getElementById("comics").innerHTML = sb;
}


function karateCatNumOne(){ 
var kc =  '<img src="./assets/comics/KC1/kc.jpg"><br>' +
'<img src="./assets/comics/KC1/kc1.jpg"> <br>' +
'<img src="./assets/comics/KC1/kc2.jpg" ><br>' +
'<img src="./assets/comics/KC1/kc3.jpg"><br>' +
'<img src="./assets/comics/KC1/kc4.jpg"><br>' +
'<img src="./assets/comics/KC1/kc5.jpg"><br>' +
'<img src="./assets/comics/KC1/kc6.jpg"><br>' +
'<img src="./assets/comics/KC1/kc7.jpg"><br>' +
'<img src="./assets/comics/KC1/kc8.jpg"><br>' +
'<img src="./assets/comics/KC1/kc9.jpg"><br>' +
'<img src="./assets/comics/KC1/kc10.jpg"><br>' +
'<img src="./assets/comics/KC1/kc11.jpg"><br>' +
'<img src="./assets/comics/KC1/kc12.jpg"><br>' +
'<img src="./assets/comics/KC1/kc13.jpg"><br>' +
'<img src="./assets/comics/KC1/kc14.jpg"><br>' +
'<img src="./assets/comics/KC1/kc15.jpg"><br>' +
'<img src="./assets/comics/KC1/kc16.jpg"><br>' +
'<img src="./assets/comics/KC1/kc17.jpg"><br>' +
'<img src="./assets/comics/KC1/kc18.jpg"><br>' +
'<img src="./assets/comics/KC1/kc19.jpg"><br>' +
'<img src="./assets/comics/KC1/kc20.jpg"><br>' +
'<img src="./assets/comics/KC1/kc21.jpg"><br>' +
'<img src="./assets/comics/KC1/kc22.jpg"><br>' +
'<img src="./assets/comics/KC1/kc23.jpg" ><br>' +
'<img src="./assets/comics/KC1/kc24.jpg" ><br>' +
'<img src="./assets/comics/KC1/kc25.jpg"><br>' +
'<img src="./assets/comics/KC1/kc26.jpg">'  

var kcSummary = '<h3><b>Summary:</b>' +
'</h3><p>Personal Rating: ★★★☆☆ </p><p> Ah yes, just what everyone came here for. Comics I wrote in middle school. You have great taste.</p>'

document.getElementById("summary").innerHTML = kcSummary;
document.getElementById("comics").innerHTML = kc;
}


function redThornNumOne(){ 
    var rt =  '<center><img src="./assets/comics/RT/00.png" width="100%"></center><br> '
    
    var rtSummary = '<h3><b> The Red Thorn</b></h3>' +
    '<p><b> Rating: </b> ★★★☆☆ </p>' +
    '<p><b> Year: </b> 2011 </p>' + 
    '<p><b>Summary: </b> </p>' 
    
    document.getElementById("summary").innerHTML = rtSummary;
    document.getElementById("comics").innerHTML = rt;
    }
    
