import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Perfil } from './perfil/perfil'
import { Trayectoria } from './trayectoria/trayectoria'
import { Gestion } from './gestion/gestion'
import { Footer } from './footer/footer'
import { Contacto } from './contacto/contacto'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Perfil, Trayectoria, Gestion, Footer, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectoFinal-LandingPage');
}
