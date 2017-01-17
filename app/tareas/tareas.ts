import * as $ from "jquery";
import { TareasService } from "./tareasService";
// import * as TarSrv from "./tareasService";

let t = new TareasService();

let btnAdd = <HTMLButtonElement>document.getElementById("btnAdd");
btnAdd.onclick = function () {
    addTarea();
    txtTarea.focus();
};

let frmModal = document.getElementById("myModal");
$("#a").modal();

let txtTarea = document.getElementById("txtTarea") as HTMLInputElement;
txtTarea.onkeypress = function (e: KeyboardEvent) {
    if (e.keyCode === 13) {
        e.preventDefault();
        addTarea();
    }
};

let cmbPrioridad = document.getElementById("cmbPrioridad") as HTMLOptionElement;
cmbPrioridad.addEventListener("change", function () {
    console.log("He cambiado la prioridad.");
});

// $("#btnAdd").on("click", function () {
//     addTarea();
// });

// $("#txtTarea").on("keypress", function (e) {
//     if (e.keyCode == 13) {
//         addTarea();
//     }
// });

function addTarea() {
    $("#lista").html("");
    t.addTarea($("#txtTarea").val(), parseInt($("#cmbPrioridad").val()));
    let lista = t.getTareas();
    lista.forEach((elem) => {
        let p: string = "";
        switch (elem.prioridad) {
            case 1:
                p = "list-group-item-danger";
                break;
            case 2:
                p = "list-group-item-info";
                break;
            case 3:
                p = "list-group-item-success";
                break;
            default:
                p = "list-group-item-success";
                break;
        }
        $("#lista").append(`<li class="list-group-item ${p}"><span class="badge">${elem.prioridad}</span>${elem.nombre}</li>`);
    });

    $("#txtTarea").val("");
}