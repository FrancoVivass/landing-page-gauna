import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion {

  logros = [
    { fecha: '2024', titulo: 'Plan Integral de Seguridad Ciudadana', texto: 'Más de 3.000 botones antipánico entregados con capacitación, teléfonos móviles a policías rurales y urbanos, provisión de combustible para patrullajes y geolocalización de establecimientos rurales.', img: '/assets/images/botonantipanico.jpg' },
    { fecha: '2024', titulo: 'Mesa de Trabajo por la Seguridad', texto: 'Organizada junto al intendente y autoridades policiales. Mejoras logísticas, solicitud de móviles y expansión de cuadrículas de patrullaje.', img: '/assets/images/reunion1.jpg' },
    { fecha: '2024', titulo: 'Vehículos Recuperados para Prevención', texto: 'Cinco móviles municipales recuperados y puestos en servicio para fortalecer la presencia en barrios y zonas urbanas.', img: '/assets/images/policia1.jpg' }
  ];


  galeriaGestion = [
    { titulo: 'Botones antipánico', img: '/assets/images/botonantipanico.jpg' },
    { titulo: 'Capacitación ciudadana', img: '/assets/images/conferencia.jpg' },
    { titulo: 'Dolores lugar seguro', img: '/assets/images/doloreslugarseguro.jpg' },
    { titulo: 'Coordinación policial', img: '/assets/images/policia1.jpg' },
    { titulo: 'Patrullaje preventivo', img: '/assets/images/policia2.jpg' },
    { titulo: 'Presencia en territorio', img: '/assets/images/Policia3.jpg' },
    { titulo: 'Reunión de trabajo', img: '/assets/images/reunion1.jpg' },
    { titulo: 'Planificación', img: '/assets/images/reunion2.jpg' },
    { titulo: 'Mesa de seguridad', img: '/assets/images/reunion3.jpg' },
    { titulo: 'Coordinación institucional', img: '/assets/images/reunion4.jpg' },
    { titulo: 'Trabajo en equipo', img: '/assets/images/reunion5.jpg' }
  ];
}
