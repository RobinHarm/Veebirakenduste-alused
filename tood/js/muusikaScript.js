function Muusikud(){
    let vastus1=document.getElementById("vastus1");
    let AlanWalker=document.getElementById("AlanWalker");
    let EdSheeran=document.getElementById("EdSheeran");
    let NCS=document.getElementById("NCS");
    let Eminem=document.getElementById("Eminem");
    let ViisMiinust=document.getElementById("ViisMiinust");

    let Muusik="";
    if(AlanWalker.checked){
        Muusik +=AlanWalker.value + ', ';
    }
    else if(EdSheeran.checked){
        Muusik +=EdSheeran.value + ', ';
    }
    else if(NCS.checked){
        Muusik +=NCS.value + ', ';
    }
    else if(Eminem.checked){
        Muusik +=Eminem.value + ', ';
    }
    else if(ViisMiinust.checked){
        Muusik +=ViisMiinust.value + '. ';
    }
    else{
        Muusik="sa ei kuula ühtegi neist";
    }
    vastus1.innerHTML=Muusik;
    return Muusik;
}

function Muusikakuulamine(){
    let Arvamus=document.getElementById("Arvamus");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Sinu arvamus: "+Arvamus.value;

    return Arvamus.value;
}
function MuusikaAeg(){
 let tund=document.getElementById("tund");
 let vastus3=document.getElementById("vastus3");

 vastus3.innerHTML="Sa kuulad muusikat "+tund.value+" tundi päevas";

 return tund.value;
}

function raadioJaam(){
    let vastus5=document.getElementById("vastus5");
    let radiojaamad=document.getElementById("radiojaamad");

    vastus5.innerHTML="Nimetatud raadiojaamad: " + radiojaamad.value;

    return radiojaamad.value;
}
function KasMuusika(){
    let muusika3=document.getElementById("muusika3");
    let Jah=document.getElementById("Jah");
    let Ei=document.getElementById("Ei");
    let muu=document.getElementById("muu");

    //radio valikud
    let muusika="";
    if(Jah.checked){
        muusika=Jah.value;
    }
    else if(Ei.checked){
        muusika=Ei.value;
    }
    else if(muu.checked){
        muusika=muu.value;
    }
    else{
        muusika="palun vali vastus";
    }
    muusika3.innerHTML="valitud vastus on " +muusika;
    muusika3.style.color="green";

    return muusika;
}
function muusikastiil(){

    let vastus6=document.getElementById("vastus6");
    let Jazz=document.getElementById("Jazz");
    let HipHop=document.getElementById("HipHop");
    let rap=document.getElementById("rap");
    let Rock=document.getElementById("Rock");
    let EDM=document.getElementById("EDM");
    let muu=document.getElementById("muu");

    let stiil="";

    if(Jazz.checked){
        stiil= Jazz.value;
    }
    else if(HipHop.checked){
        stiil= HipHop.value;
    }
    else if(rap.checked){
        stiil= rap.value;
    }
    else if(Rock.checked){
        stiil= Rock.value;
    }
    else if(EDM.checked){
        stiil= EDM.value
    }
    else if(muu.checked){
        stiil= muu.value;
    }
    else{
        stiil="palun vali stiil";
    }
    vastus6.innerHTML="valitud stiil on: " +stiil;
    return stiil;

}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus5.innerHTML="";
    muusika3.innerHTML="";
    vastus6.innerHTML="";
    vastus4.innerHTML="";
}
function Tervitus(){
    let Muusik= Muusikud();
    let Arvamus = Muusikakuulamine();
    let tund = MuusikaAeg();
    let radiojaam = raadioJaam();
    let muusika = KasMuusika();
    let stiil = muusikastiil();

    vastus4.innerHTML='kuulad neid muusikuid: '+ Muusik+'<br>'
        +'sinu arvamus muusika kuulamise kohta: '+Arvamus+'<br>'
        +'mitu tundi sa muusikat kuulad: '+tund+'<br>'
        +'sa oskad nimetada raadiojaamu: '+radiojaam+'<br>'
        +'Kas sa kuulad muusikat [Jah/Ei]: '+muusika+'<br>'
        +'mis muusika stiili sa kõige rohkem kuulad: '+stiil;
    vastus4.style.backgroundColor="cyan";
}


