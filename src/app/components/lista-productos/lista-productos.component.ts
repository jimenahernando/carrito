import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() {
    this.productos = [];
    // this.productos = new Array();
  }

  ngOnInit(): void {
    // console.log(this.productos);
  }

  mostrarLista(){
    let result = "";
    this.productos.forEach(producto => {
      result += `<li>${producto.producto} - precio: ${producto.precio} / cantidad: ${producto.cantidad}  =   ${producto.cantidad * producto.precio}€ </li>`;
    })
    return result;
  }
}
