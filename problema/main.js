import Auto from "./Auto.js";
import Renta from "./Renta.js";


class Main {
    constructor() {
        this._auto = new Auto(document.querySelector("#auto"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let placas = document.querySelector("#placas").value;
            let fechaInicio = document.querySelector("#fechaInicio").value;
            let fechaEntrega = document.querySelector("#fechaEntrega").value;

            let renta = new Renta(placas, fechaInicio, fechaEntrega);
            
            this._auto.addRenta(renta);
        });
    }
}
let m = new Main();