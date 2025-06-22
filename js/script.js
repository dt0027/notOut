
function newOffset () {
    let upgradeLine = window.document.querySelector('#upgrade_line');
    let allDiam1 = parseFloat(document.getElementById('allDiam1').value.replace(",", "."));
    let out1 = parseFloat(document.getElementById('out1').value.replace(",", "."));
    let inner1 = parseFloat(document.getElementById('inner1').value.replace(",", "."));
    let offSet1 = parseFloat(document.getElementById('offSet1').value.replace(",", "."));
    if (out1 >= 1 && inner1 >= 1 && !isNaN(offSet1) && allDiam1 >= 12) {
        let allWidth1 = out1 + inner1;
        document.getElementById('width1').innerText = 'Текущие параметры: ' + allDiam1 + 'x' + allWidth1 + 'j ET' + offSet1;
    } else {
        document.getElementById("width1").innerText = "Не пиши хуйни!";
    }

    let allDiam2 = parseFloat(document.getElementById('allDiam2').value.replace(",", "."));
    let out2 = parseFloat(document.getElementById('out2').value.replace(",", "."));
    let inner2 = parseFloat(document.getElementById('inner2').value.replace(",", "."));
    if (out2 >= 1 && inner2 >= 1 && allDiam1 >= 12) {
        let Suk = ((out1 + inner1)*25.4)/2 - out1*25.4 - offSet1;
        let allWidth2 = out2 + inner2;
        let offSet2 = Number((((out2 + inner2)*25.4)/2 - out2*25.4 - Suk).toFixed(1));
        document.getElementById('width2').innerText = 'Новые параметры: ' + allDiam2 + 'x' + allWidth2 + 'j ET' + offSet2;
        document.querySelector('#offSet2').placeholder = offSet2;
        upgradeLine.style.opacity = 1;
    } else {
        document.getElementById("width1").innerText = "Не пиши хуйни!";
    }
}



function innerHandler () {
    // Серединка:
    let startOutInner2 = window.document.querySelector('#start_out_inner2');
    // Первая полка:
    let outImg = window.document.querySelector('#out_img');
    let outPosition = -25.4;
    // Вторая полка:
    let outImg2 = window.document.querySelector('#out_img2');
    let outPosition2 = -25.4;

    // Первый иннер:
    let innerImg = window.document.querySelector('#inner_img');
    let innerPosition = -25.4;
    // Второй иннер:
    let innerImg2 = window.document.querySelector('#inner_img2');
    let innerPosition2 = -25.4;

    outPosition = outPosition + 25.4 - ((parseFloat(document.getElementById('out1').value.replace(",", "."))) * 24.4);
    outPosition2 = outPosition2 + 25.4 - ((parseFloat(document.getElementById('out2').value.replace(",", "."))) * 24.4);

    outImg.style.marginLeft = outPosition + 'px';
    outImg2.style.marginLeft = outPosition2 + 'px';

    innerPosition = innerPosition + 25.4 - ((parseFloat(document.getElementById('inner1').value.replace(",", "."))) * 24.4);
    innerPosition2 = innerPosition2 + 25.4 - ((parseFloat(document.getElementById('inner2').value.replace(",", "."))) * 24.4);

    innerImg.style.marginLeft = innerPosition + 'px';
    innerImg2.style.marginLeft = innerPosition2 + 'px';

    outImg2.style.opacity = 1;
    innerImg2.style.opacity = 1;
    startOutInner2.style.opacity = 1;
}
