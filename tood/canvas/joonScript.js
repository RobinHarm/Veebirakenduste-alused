//sirge joon
function  sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}
//kolmnurk
function kolmnurk(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //kolmnurk
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="white";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(50,200);
        t.lineTo(150,200);
        t.lineTo(50,50)//lõpppunkt
        t.stroke();
        t.fill();
    }
}

function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");
        if(tahvel.getContext){
            let t = tahvel.getContext("2d");
            t.fillStyle="olive";
            t.fillRect(100,50,laius.value,korgus.value); //alguspunkt - x, y, laius, kõrgus
        }

}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle= varv.value;
        t.arc(100,50,r.value,0, 2*Math.PI, true); //alguspunkt - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function ring1(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="beige";
        t.arc(150,200,100,0, 2*Math.PI, true);
        t.fill();
    }
}

function ristkylik1() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "beige";
        t.fillRect(25,125,50,150);
    }
}

function ristkylik2() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "beige";
        t.fillRect(225,125,50,150);
    }
}
function ristkylik3() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "gray";
        t.fillRect(130,190,40,55);
    }
}
function  Joon1(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(95,275); //alguspunkt
        t.lineTo(200,275); //lõpppunkt
        t.stroke();
    }
}
function ring2(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let r=tahvel.getContext("2d");
        r.fillStyle="red";
        r.beginPath();
        r.arc(200,150,25,0, 2*Math.PI, true);
        r.fill();
    }
}
function ring3(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let r=tahvel.getContext("2d");
        r.fillStyle="red";
        r.beginPath();
        r.arc(100,150,25,0, 2*Math.PI, true);
        r.fill();
    }
}

function Nägu(){
ring1();
ring3();
ring2();
Joon1();
ristkylik1();
ristkylik2();
ristkylik3();
}