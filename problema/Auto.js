export default class Auto {
    constructor(tableAuto, tableInfo) {
        this._tableAuto = tableAuto;
        this._tableInfo = tableInfo;

        this._numeroRentas = 0;
        this._totalDias = 0;

        
    }

    addRenta(renta) {
        let row = this._tableAuto.insertRow(-1);
        let cellPlacas = row.insertCell(0);
        let cellFechaInicio = row.insertCell(1);
        let cellFechaEntrega = row.insertCell(2);
        let cellNumDias = row.insertCell(3);
        let cellCostoTotalRentas = row.insertCell(4);

        cellPlacas.innerHTML = renta.placas;
        cellFechaInicio.innerHTML = renta.fechaInicio;
        cellFechaEntrega.innerHTML = renta.fechaEntrega;
        cellNumDias.innerHTML = renta.getNumDias();
        cellCostoTotalRentas = renta.getCosto();

        this._numeroRentas++;
        this._totalDias = this._totalDias + renta.getNumDias;

        this.tableInfo.rows[0].cells[1].innerHTML = this._numeroRentas;
        this.tableInfo.rows[0].cells[2].innerHTML = this._totalDias;


    }
}