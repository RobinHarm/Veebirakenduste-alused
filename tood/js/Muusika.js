function Muusika(){
    let muusika1=document.getElementById("muusika1");
    let AlanWalker=document.getElementById("Alan Walker");
    let EdSheeran=document.getElementById("EdSheeran");
    let NCS=document.getElementById("NCS");
    let Eminem=document.getElementById("Eminem");
    let ViisMiinust=document.getElementById("ViisMiinust");

    let Muusik="";
    if(AlanWalker.checked){
        Muusik +=AlanWalker.value + ', ';
    }
    if(EdSheeran.checked){
        Muusik +=EdSheeran.value + ', ';
    }
    if(NCS.checked){
        Muusik +=NCS.value + ', ';
    }
    if(Eminem.checked){
        Muusik +=Eminem.value + ', ';
    }
    if(ViisMiinust.checked){
        Muusik +=ViisMiinust.value + ', ';
    }
    if(Muusik==""){
        Muusik="sa ei kuula ühtegi neist";
    }
    muusika1.innerHTML=Muusik;

    return Muusik;
}

function Muusikakuulamine(){
    let arvamus=document.getElementById("arvamus");
    let vastus=document.getElementById("vastus");
    //innerHTML -dünaamiliselt genereerib teksti htmlina
    vastus.innerHTML="Sinu arvamus: "+arvamus.value;

    return arvamus.value;
}
function MuusikaAeg(){
 let tund=document.getElementById("tund");
 let muusika2=document.getElementById("muusika2");

 muusika2.innerHTML="Sa kuulad muusikat "+tund.value+" tundi päevas";

 return tund.value;
}
function KasMuusika(){
    let muusika3=document.getElementById("muusika3");
    let Jah=document.getElementById("Jah");
    let Ei=document.getElementById("Ei");


    //radio valikud
    let sugu="";
    if(Jah.checked){
        Vastus6=Jah.value;
    }
    else if(Ei.checked){
        Vastus6=Ei.value;
    }

    else{
        Vastus6="palun vali vastus";
    }
    muusika3.innerHTML="valitud vastus on " +Vastus6;

    return Vastus6;
}