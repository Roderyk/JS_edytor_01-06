const textArea = document.getElementById("textarea1");
var btnZapisz = document.getElementById("btnZapisz");

btnZapisz.onclick = function () {
    console.log(textArea.value)
    let dane = textArea.value

    var blob = new Blob([dane], {
        type: 'text/plain'
        });
        var file = URL.createObjectURL(blob);
        var element = document.createElement('a');
        element.href = file
        element.download = "pobierz.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        }

document.getElementById("upload").onchange = function (event) {
    let reader = new FileReader()
    reader.onload = function (e) {
        textArea.value = reader.result;
    }
    reader.readAsText(event.target.files[0])
}

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");

var color = "#f6b73c"
var stroke = 3
const inColor = document.getElementById("color");
const inStroke = document.getElementById("stroke")
const btnOk = document.getElementById("ok");

btnOk.onclick = function() {
    
    color = inColor.value;
    stroke = parseInt(inStroke.value);
}


var odcinek = null;
var rect = null;
var Tryb = 0;
var BtnTryb = document.getElementById("tryb");

BtnTryb.onclick = function () {
    if (Tryb == 0){
        Tryb = 1
    }
    else {
        Tryb = 0
    }
}

canvas3.onmousedown = function (ev) {
    if(Tryb == 0) {
    odcinek = {}
    odcinek.x0 = ev.pageX - this.offsetLeft;
    odcinek.y0 = ev.pageY - this.offsetTop;
    }
    else {
        Tryb = 11
    }
};
canvas3.onmousemove = function (ev) {
    if (odcinek) {
        odcinek.x1 = ev.pageX - this.offsetLeft;
        odcinek.y1 = ev.pageY - this.offsetTop;
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        ctx3.strokeStyle = color;
        ctx3.lineWidth = stroke;
        ctx3.beginPath();
        ctx3.moveTo(odcinek.x0, odcinek.y0);
        ctx3.lineTo(odcinek.x1, odcinek.y1);
        ctx3.stroke();
    }
    else if (Tryb == 11) {
        
        rect = {}
        rect.x0 = ev.pageX - this.offsetLeft;
        rect.y0 = ev.pageY - this.offsetTop;
       
        ctx3.fillStyle = color;
        ctx3.lineWidth = 1; 
        ctx3.fillRect(rect.x0, rect.y0, stroke, stroke);
        rect = null;
        
        
        
    }
};
canvas3.onmouseup = function (ev) {
    if (Tryb == 0) {
    ctx3.strokeStyle = color;
    ctx3.lineWidth = stroke;
    ctx3.beginPath();
    ctx3.moveTo(odcinek.x0, odcinek.y0);
    ctx3.lineTo(odcinek.x1, odcinek.y1);
    ctx3.stroke();
    odcinek = null
    }
    else {
        Tryb = 1
    }
}

document.getElementById("imgUp").onchange = function (event) {
    let img = new Image()

    let reader = new FileReader()
    reader.onload = function(e) {
        img.onload = () => ctx3.drawImage(img, 0, 0, 100, 100);
        img.src = e.target.result
    }
    reader.readAsDataURL(event.target.files[0])
}
document.getElementById("saveImg").onclick = function() {
    let file = canvas3.toDataURL("image/png").replace("image/png", "image/octet-steam");
    let element2 = document.createElement('a');
    element2.href = file;
    element2.download = "obraz.png";
    document.body.appendChild(element2);
    element2.click();
    document.body.removeChild(element2);
}

var wrztnia = document.getElementById("wrzutnia");

wrzutnia.ondragover = function (ev) {

}
wrzutnia.ondrop = function (ev) {
    
}