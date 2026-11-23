function kellanupp(){
    const  now = new Date();


    const paev = now.getDate();//päev
    const kuu = now.getMonth() + 1; //kuu
    const aasta = now.getFullYear(); //aasta
    const tunnid= now.getHours(); //tunnid

    let minutid= now.getMinutes(); //minutid
    let vastus=document.getElementById("vastus");

    //kui minutid on väiksem kui 10 lisab ta selle ette 0-i, et ei tekiks kellaajaks 7:7 kui kell on 7:07
    if (minutid < 10) {
        minutid = "0" + minutid;
    }

    vastus.innerHTML=
        'Tänane kuupäev: ' + paev + "." + kuu + "." + aasta + '<br>' +
        'Kell: '+tunnid + ':' + minutid;

    console.log(vastus.innerHTML);
}
function Sunnipaev() {
    const sunnipaev = new Date(2027, 7, 8);
    const tana = new Date();

    const vahe = sunnipaev - tana;
    const paevad=vahe/(1000 * 60 * 60 * 24)

    let sunnipaevad=document.getElementById("sunnipaevad");

    sunnipaevad.innerHTML="Sünnipaevani on: " + paevad.toFixed() + " päeva."
    console.log(sunnipaevad.innerHTML);
}
