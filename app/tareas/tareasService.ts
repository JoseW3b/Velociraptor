import { Log } from "../libreria/log";
import { ObjetoTarea } from "./objetoTarea";

export class TareasService {
    listaTareas: ObjetoTarea[];
    l: Log;

    constructor() {
        this.l = new Log();
        this.listaTareas = [];
    }

    addTarea(tarea: string, prioridad: number) {
        let ot: ObjetoTarea = {
            idA: this.listaTareas.length + 1,
            nombre: tarea,
            prioridad: prioridad
        };
        this.listaTareas.push(ot);
        this.l.log("Añadía tarea.");
    }

    getTareas(): ObjetoTarea[] {
        this.l.log("Acabo de recuperar las tareas.");
        return this.listaTareas;
    }
}