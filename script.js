function afficherHeureCourante(){
    var maReferenceTemps = new Date();

    var hhmmss = maReferenceTemps.toLocaleTimeString();

    document.getElementById("heureEnCours").innerHTML = hhmmss;
}