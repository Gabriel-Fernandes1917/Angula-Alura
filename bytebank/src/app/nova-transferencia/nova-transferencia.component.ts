import { Component, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html', // local fire
    styleUrls: ['./nova-transferencia.component.scss']
})


export class NovaTransferenciaComponent{

  // meta data
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
  }

}
