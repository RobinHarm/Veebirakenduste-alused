function saiaKalk() {
    let vastus = document.getElementById("vastus");
    let saiatyyp=document.getElementById("saiatyyp");
    let kogus=document.getElementById("kogus");
    let pilt=document.getElementById("pilt");
    const juustu=2.00;
    const mooni=1.50;
    const pontsik=3.00;
    const kaneeli=1.30

    if(saiatyyp.selectedIndex===0)
    {
        vastus.innerHTML="palun vali saia tüüp!";
        vastus.style.color="red";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDK8yW2UuQHSfHnobaDj6xBWgDrqZCAEx75nLzZY1m7g&s=10";
    }
    else if(saiatyyp.selectedIndex===1)
    {
        //toFixed(2) - ümardab 2 kohta peale koma
        vastus.innerHTML=
            "Sa valisid"+saiatyyp.value + '<br>' +
            "Valitud kogus on "+ kogus.value + "tk"+'<br>'+
            "Kokku hind on "+(mooni*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-oA4lUJ8oBU5oNoL-lhJZiODU62v4T0zG3dupeKbzw&s=10";
    }
    else if(saiatyyp.selectedIndex===2)
    {
        vastus.innerHTML=(juustu*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ID-NYQ4b1Ik9ECxSRnYlSn_hnEnzpNXavhwsp_hp9Q&s=10";
    }
    else if(saiatyyp.selectedIndex===3)
    {
        vastus.innerHTML=(pontsik*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp6ic6_w0IRwrz77B79wphT1w8uY2FlRIj18G6uNu_g&s=10";
    }
    else if(saiatyyp.selectedIndex===4)
    {
        vastus.innerHTML=(kaneeli*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6alZWtRaEkMghEzZIWCNu7EefCkIrikub8ewUrjX0mA&s=10";
    }
}