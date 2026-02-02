import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  menuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  irAPerfil(): void {
    this.closeMenu(); // 🔑 importante en mobile
    this.viewportScroller.scrollToAnchor('perfil');
  }
}
