import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

  imagenesTrabajo = [
    { alt: 'Reunión de trabajo', img: '/assets/images/reunion1.jpg' },
    { alt: 'Coordinación institucional', img: '/assets/images/reunion2.jpg' },
    { alt: 'Planificación', img: '/assets/images/reunion3.jpg' },
    { alt: 'Mesa de seguridad', img: '/assets/images/reunion4.jpg' }
  ];
}
