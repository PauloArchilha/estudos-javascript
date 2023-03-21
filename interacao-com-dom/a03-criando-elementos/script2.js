var fslista = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fslista.length; i++) {
    initMultipleFieldSet(fslista[i]);
}

function initMultipleFieldSet(fs) {
    var addButton = document.createElement("button");
    addButton.textContent = "Adicionar";
    addButton.type = "button";

    fs.appendChild(addButton);

    var firstInput = fs.querySelector("input");

    addButton.addEventListener("click", () => {
        var div = document.createElement("div");
        var newInput = document.createElement("input");
        newInput.name = firstInput.name;
        newInput.type = firstInput.type;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.type = "button";

        div.appendChild(newInput);
        div.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            div.remove();
        });

        fs.insertBefore(div, addButton);
    });
}
