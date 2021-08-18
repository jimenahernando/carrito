import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Solucion conun objeto
  producto: Producto;

  @Output() productoCreado: EventEmitter<Producto>;

  constructor() {
    this.producto = {
      producto: "",
      precio: 0,
      cantidad: 0,
    } 

    this.productoCreado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  cargarProducto(){
    this.productoCreado.emit(this.producto);
    // lo vacio a la espera que se le asigne un nuevo valor
    this.producto = { producto:"", precio:0, cantidad:0 };
    //console.log(this.producto);
  }
}
