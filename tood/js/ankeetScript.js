//tekstkastist lugemine
function nimiLugemine(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
    //innerHTML -dünaamiliselt genereerib teksti htmlina
        vastus.innerHTML="Tere Hommikust, "+nimi.value;
        vastus.style.color="red";

        return nimi.value;
}
//radionupude valikud
function suguValik(){
    let vastus2=document.getElementById("vastus2");
    let naine=document.getElementById("naine");
    let mees=document.getElementById("mees");
    let muu=document.getElementById("muu");

    //radio valikud
    let sugu="";
    if(naine.checked){
        sugu=naine.value;
    }
   else if(mees.checked){
        sugu=mees.value;
    }
    else if(muu.checked){
         sugu=muu.value;
    }
    else{
         sugu="palun vali sugu";
    }
    vastus2.innerHTML="valitud sugu on " +sugu;
    vastus2.style.color="green";

    return sugu;
}
function sportimine(){
    let vastus3=document.getElementById("vastus3");
    let ujumine=document.getElementById("ujumine");
    let jalgpall=document.getElementById("jalgpall");
    let suusatamine=document.getElementById("suusatamine");
    let uisutamine=document.getElementById("uisutamine");
    let jooksmine=document.getElementById("jooksmine");

    let sport="";
    if(ujumine.checked){
        sport +=ujumine.value + ', ';
    }
    if(jooksmine.checked){
        sport +=jooksmine.value + ', ';
    }
    if(uisutamine.checked){
        sport +=uisutamine.value + ', ';
    }
    if(suusatamine.checked){
        sport +=suusatamine.value + ', ';
    }
    if(jalgpall.checked){
        sport +=jalgpall.value + ', ';
    }
    if(sport==""){
        sport="sa ei tee sporti";
    }
    vastus3.innerHTML=sport;

    return sport;
}
function tervitus(){
    let nimi= nimiLugemine();
    let sugu = suguValik();
    let spordiala = sportimine();

    vastus4.innerHTML='Sisestatud nimi: '+ nimi+'<br>'
        +'Valitud sugu: '+sugu+'<br>'
        +'Valitud spordiala: '+spordiala;
    vastus4.style.backgroundColor="cyan";
}
function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
}