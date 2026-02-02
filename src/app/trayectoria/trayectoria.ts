import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-trayectoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trayectoria.html',
  styleUrl: './trayectoria.css',
})
export class Trayectoria {

  careerTimeline = [
    {
      side: 'right',
      title: 'Secretario de Seguridad',
      period: 'Presente',
      text: 'Liderazgo integral de las políticas de seguridad ciudadana.',
      active: true
    },
    {
      side: 'left',
      title: 'Director General de Coordinación',
      period: '2018 – 2022',
      text: 'Gestión de recursos y despliegue estratégico regional.',
      active: false
    },
    {
      side: 'right',
      title: 'Jefe de Operaciones',
      period: '2010 – 2018',
      text: 'Estrategia táctica y comando de fuerzas especiales.',
      active: false
    }
  ];

  trayectoriaProfesional = [
    {
      year: '2005',
      title: 'Director de Prevención',
      text: 'Inicio de carrera en gestión de seguridad municipal.'
    },
    {
      year: '2012',
      title: 'Asesor Estratégico',
      text: 'Consultor en políticas públicas y derechos humanos.'
    },
    {
      year: '2018',
      title: 'Subsecretario Nacional',
      text: 'Modernización de protocolos de intervención.'
    },
    {
      year: 'Presente',
      title: 'Secretario de Seguridad',
      text: 'Conducción del Plan Nacional de Seguridad Tecnológica.'
    }
  ];

  galeria = [
    {
      title: 'Dirección de Inteligencia Operativa',
      img: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc'
    },
    {
      title: 'Coordinación de Seguridad Urbana',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
    }
  ];
}