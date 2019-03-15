export default class Renta {
    constructor(placas, fechaInicio, fechaEntrega) {
        this._placas = placas;
        this._fechaInicio = fechaInicio;
        this._fechaEntrega = fechaEntrega;

     
    }
    
    get placas() {
        return this._placas;
    }

    get fechaInicio() {
        return this._fechaInicio;
    }

    get fechaEntrega() {
        return this._fechaEntrega;
    }

    getDiaAsString() {
      let date =
      this._fechaEntrega +
      "/" +
    this._fechaEntrega +
      "/" +
      this._fechaEntrega;

    return date;
    }

    getNumDias() {
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = this._fechaEntrega - this._fechaInicio;
        let dias = Math.trunc(differenceMs / oneYear);
    
        return dias;
    }

   
    

    

   

}