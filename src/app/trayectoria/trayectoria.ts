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
      title: 'Secretario de Protección Ciudadana e Inclusión Social',
      period: 'Dic 2023 – Presente',
      text: 'Liderazgo de la política local de seguridad en la Municipalidad de Dolores. Coordinación con policía provincial y municipal.',
      active: true
    },
    {
      side: 'left',
      title: 'Experiencia en seguridad y administración pública',
      period: 'Antes de 2023',
      text: 'Trayectoria previa en el ámbito de la seguridad y el servicio público en Dolores.',
      active: false
    }
  ];

  trayectoriaProfesional = [
    {
      year: '2023',
      title: 'Designación como Secretario',
      text: 'Designado el 27 de diciembre de 2023 mediante Decreto Municipal Nº 2164/2023.'
    },
    {
      year: '2024',
      title: 'Plan Integral de Seguridad Ciudadana',
      text: 'Entrega de más de 3.000 botones antipánico, móviles recuperados y mesa de trabajo por la seguridad.'
    },
    {
      year: 'Presente',
      title: 'Secretario de Protección Ciudadana',
      text: 'Coordinación policial, prevención, seguridad rural y capacitaciones comunitarias.'
    }
  ];

  galeria = [
    { title: 'Dolores, lugar seguro', img: '/assets/images/doloreslugarseguro.jpg' },
    { title: 'Coordinación con fuerzas de seguridad', img: '/assets/images/reunion5.jpg' },
    { title: 'Entrega de botones antipánico', img: '/assets/images/botonantipanico.jpg' },
    { title: 'Capacitaciones y conferencias', img: '/assets/images/conferencia.jpg' },
    { title: 'Trabajo en territorio', img: '/assets/images/policia1.jpg' },
    { title: 'Presencia policial', img: '/assets/images/policia2.jpg' },
    { title: 'Prevención y patrullaje', img: '/assets/images/Policia3.jpg' },
    { title: 'Mesa de trabajo por la seguridad', img: '/assets/images/reunion1.jpg' },
    { title: 'Reunión con autoridades', img: '/assets/images/reunion2.jpg' },
    { title: 'Planificación operativa', img: '/assets/images/reunion3.jpg' },
    { title: 'Coordinación interinstitucional', img: '/assets/images/reunion4.jpg' }
  ];
}