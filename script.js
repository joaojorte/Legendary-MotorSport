document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelectorAll(".botao");
    button.forEach(function(button) {
        button.addEventListener("click", function() {
            let vehicleName = this.parentElement.querySelector("h2").textContent;
            alert(`Você clicou em: ${vehicleName} - Preço: ${this.textContent}`);
        });
    });
});