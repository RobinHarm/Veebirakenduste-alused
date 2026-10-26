//see määrab ära mis on muutujua "raamatud" sees
let raamatud = [
    { pealkiri: 'Nullpunkt', autor: 'Margus Karu', aasta: 2010 },
    { pealkiri: 'Sipsik', autor: 'Eno Raud', aasta: 1962 },
    { pealkiri: 'Kalevipoeg', autor: 'Friedrich Reinhold Kreutzwald', aasta: 1857 }
];

let tulemus = "";
//see meetod loeb kõik raamatud konsoolis
raamatud.forEach((raamat) => {
    tulemus += `
        <p>
            <b>Pealkiri:</b> ${raamat.pealkiri}<br />
            <b>Autor:</b> ${raamat.autor}<br />
            <b>Aasta:</b> ${raamat.aasta}
        </p>
        <hr>
    `;
});

//see meetod arvutab mitu raamatut on raamatukogus
let kogus = 0

for(let kogused of raamatud) {
    if (kogused.aasta > 1){
        kogus = kogus + 1;
    }
}
//see meetod arvutab mitu raamatut on ilmunud pärast 2000 aastat
let arvutus = 0

for (let raamat of raamatud) {
    if (raamat.aasta > 2000) {
        arvutus = arvutus + 1
    }
}


console.log(arvutus)
console.log(tulemus)
console.log(kogus)

