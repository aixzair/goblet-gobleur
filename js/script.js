/* Constantes ----------------------------------------------------- */
const PLATEAU = document.getElementById("plateau_id");

/* Variables ------------------------------------------------------ */

/* Démarage ------------------------------------------------------- */
creerPlateauHTML();

/* Evènements ----------------------------------------------------- */

/* Fonctions ------------------------------------------------------ */
function creerPlateauHTML() {
    let cellule;
    let ligne;
    let lig;
    let col;

    for (lig = 0; lig < 3; lig++) {
        ligne = document.createElement("div");
        ligne.classList.add("ligne_c");

        for (col = 0; col < 3; col++) {
            cellule = document.createElement("div");
            cellule.classList.add("cellule_c");

            ligne.appendChild(cellule);
        }

        PLATEAU.appendChild(ligne);
    }
}

