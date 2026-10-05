//random pilt mis tuleb piltide massivist
function randomPilt() {
    const pildid=[
        '../pildid/ÜKS.png',
        '../pildid/KAKS.png',
        '../pildid/KOLM.png',
        '../pildid/TYHI.png'
    ];
    //random pilt
    //math.floor - ümardab täisarvuni
    const pilt=Math.floor(Math.random() * pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src=rpilt;
}