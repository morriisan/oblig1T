


//oppretter array
const kunder = [];

function kjop() {

    // henter value fra input og setter dem lik en variabel
    let films = document.getElementById("films").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telfnr = document.getElementById("telfnr").value;
    let epost = document.getElementById("epost").value;

    //fjerner alle mellomrom/white-space
    fornavn = fornavn.trim();
    etternavn = etternavn.trim();
    epost = epost.trim();

    // setter 'sant' = true
    let sant = true;

    //validere all input
    if (films=="velg-film"){
        document.getElementById("error_film").innerHTML="<span style='color: red'>Du har ikke vlagt film</span>";
        sant = false;
    }else {
        document.getElementById("error_film").innerHTML="";
    }
    if (antall==0){
        document.getElementById("error_antall").innerHTML="<span style='color: red'>Du har ikke valgt antall</span>";
        sant = false;
    }else {
        document.getElementById("error_antall").innerHTML="";
    }
    if (fornavn == null || fornavn == ""){
        document.getElementById("error_fname").innerHTML="<span style='color: red'>Mangler fornavn</span>";
        sant = false;
    }else {
        document.getElementById("error_fname").innerHTML="";
    }
    if (etternavn == null || etternavn == ""){
        document.getElementById("error_ename").innerHTML="<span style='color: red'>Mangler etternavn</span>";
        sant = false;
    }else {
        document.getElementById("error_ename").innerHTML="";
    }
    if (telfnr == null || telfnr == ""){
        document.getElementById("error_tlfnr").innerHTML="<span style='color: red'>Mangler telefonnr</span>";
        sant = false;
    }else {
        document.getElementById("error_tlfnr").innerHTML="";
    }
    if (epost == null || epost == ""){
        document.getElementById("error_epost").innerHTML="<span style='color: red'>Mangler epost</span>";
        sant = false;
    } else {
        document.getElementById("error_epost").innerHTML="";
    }

    // vis alle input er true setter values inn i arrays of object
    if (sant===true){
        const kunde = {
            film: films,
            qty: antall,
            fname: fornavn,
            ename: etternavn,
            tlf: telfnr,
            mail: epost
        };

        //setter arrays of object inn i array
        kunder.push(kunde);

        // fromater output table
        let html = "<table><tr>" +
            "<td>Film</td>" +
            "<td>Antall</td>" +
            "<td>Fornavn</td>" +
            "<td>Etternavn</td>" +
            "<td>TelfonNr</td>" +
            "<td>Epost</td></tr>";

        // formater dataen i array i tbale form for output
        for (let i = 0; i < kunder.length; i++) {
            html+="<tr>" +
                "<td>"+kunder[i].film+"</td>"+
                "<td>"+kunder[i].qty+"</td>"+
                "<td>"+kunder[i].fname+"</td>"+
                "<td>"+kunder[i].ename+"</td>"+
                "<td>"+kunder[i].tlf+"</td>"+
                "<td>"+kunder[i].mail+"</td></tr>";

        }
        html+="</table>";

        //skriver ut listen med bilett kjøp
        document.getElementById("result").innerHTML=html;
    }
}
function slett(){

    //fjerner all tekst som stoor i #resultalt felt på html siden
    document.getElementById("result").innerText="";

    //sletter all data fra index 0 til siste index i array kunder.
    kunder.splice(0,kunder.length);

}
