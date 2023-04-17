AFRAME.registerComponent("botones", {
    init: function(){
        var butom1=document.createElement("button")
        butom1.innerHTML="Calificar"
        butom1.setAttribute("id", "calificacion")
        butom1.setAttribute("class", "botons")

        var butom2=document.createElement("button")
        butom2.innerHTML="Ordenar"
        butom2.setAttribute("id", "orden")
        butom2.setAttribute("class", "botons")

        var divs = document.getElementById("buttom-div")
        divs.appendChild(butom1)
        divs.appendChild(butom2)
    }
})