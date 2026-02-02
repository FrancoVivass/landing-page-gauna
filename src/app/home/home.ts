import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToContacto(): void {
    this.viewportScroller.scrollToAnchor('contacto');
  }

  descargarCV(): void {
    // Aquí puedes agregar la lógica para descargar el CV
    // Por ejemplo: window.open('/assets/cv-horacio-gauna.pdf', '_blank');
    console.log('Descargar CV');
  }
}
