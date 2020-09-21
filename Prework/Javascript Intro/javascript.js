document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";
});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "20%";
});

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "100%";
    document.getElementById("box").style.borderStyle = "none";
});

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.borderWidth = "10px";
    document.getElementById("box").style.borderColor = "red";
    document.getElementById("box").style.borderStyle = "solid";
});

