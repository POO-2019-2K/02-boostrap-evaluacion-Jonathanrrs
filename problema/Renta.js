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

    getDiaInicioAsString() {
        let date =
        this._fechaInicio +
        "/" +
      this._fechaInicio +
        "/" +
        this._fechaInicio;
  
      return date;
      }
      getDiaEntregaAsString() {
          let date =
          this._fechaEntrega +
          "/" +
        this._fechaEntrega +
          "/" +
          this._fechaEntrega;
    
        return date;
        }
  
      getNumDias(){
          let f1 = new Date(this._fechaInicio.getFullYear(),this._fechaInicio.getMonth(),this._fechaInicio.getDate()).getTime();
          let f2 = new Date(this._fechaEntrega.getFullYear(),this._fechaEntrega.getMonth(),this._fechaEntrega.getDate()).getTime();
          let oneDay = 24 * 60 * 60 * 1000;
          let differenceMs = f1 - f2;
          return Math.round(differenceMs / oneDay);
      }
   
    

    

   

}