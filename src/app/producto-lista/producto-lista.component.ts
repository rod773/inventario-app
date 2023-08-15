import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.scss'],
})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(private productoServicio: ProductoService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  private obtenerProductos() {}
}
