function protsentKalk(){
    let vastus4=document.getElementById("vastus4");
    let Protsent=document.getElementById("Protsent");
    let Number=document.getElementById("Number");

    const jagatis=100;

    if(Protsent.value==""){
        vastus4.innerHTML="Palun sisestage protsent"
    }

    if(Number.value==""){
        vastus4.innerHTML="Palun sisestage number";
    }

    vastus4.innerHTML=(Protsent.value+"% "+ Number.value+"-st "+"võrdub ")+
        (Protsent.value/jagatis)*(Number.value);
}