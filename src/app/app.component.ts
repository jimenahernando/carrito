import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaProductos: Producto[];

  constructor(){
    this.listaProductos = [
      {
        producto: 'lejia',
        precio: 2.30,
        cantidad: 32,
      }
    ];
    // console.log('appcomponent',this.listaProductos);
  }

  ngOnInit(): void {
    // console.log(this.listaProductos);
  }

  onProductoCreado($event: any){
    // para corroborar que me llega el objeto
    // console.log($event);
    this.listaProductos.push($event);
    
    console.log(this.listaProductos);
  }
}
