import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-total-compra',
  templateUrl: './total-compra.component.html',
  styleUrls: ['./total-compra.component.css']
})
export class TotalCompraComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() {
    this.productos = [];
  }

  ngOnInit(): void {
  }

  mostrarTotal(){
    let result = "";
    let total = 0
    this.productos.forEach(producto => {
      total += producto.cantidad * producto.precio;
    })

    //Solucion Profe: hay que controlar que tenga algo el array
    // let mapaPrecios = this.productos.map(producto => producto.precio * producto.cantidad );
    // if(mapaPrecios.length != 0){
    //   let total = mapaPrecios.reduce((precioAnt, precioSig) => precioAnt + precioSig);
    // }
    
    return `<h3>Total de la Compra: ${total}€</h3>`;
  }
}
