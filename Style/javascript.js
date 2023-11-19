function trocarDescanso(desc) {
    let div;

    switch (desc) {
        case 1:
            div = "divSelva";
            break;

        case 2:
            div = "divMar";
            break;

        case 3:
            div = "divEspaco";
            break;

        case 4:
            div = "divNuvens";
            break;
        case 5:
            window.location.href = "../Loucura/estranho.html";
            //window.location.replace("../Loucura/");
            break;
    }

    let esconde = document.getElementById(div).hidden;

    if (esconde == false) {
        esconde = true;
    }
    else {
        esconde = false;
    }

    document.getElementById(div).hidden = esconde;
}

//pode ter algo escrito em umas das fotos do filmes