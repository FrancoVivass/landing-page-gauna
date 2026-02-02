import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  loading = false;
  success = false;
  error = false;

  form = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      'TU_SERVICE_ID',
      'TU_TEMPLATE_ID',
      {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message,
      },
      'TU_PUBLIC_KEY'
    )
    .then(() => {
      this.loading = false;
      this.success = true;
      this.form = { name: '', email: '', message: '' };
    })
    .catch(() => {
      this.loading = false;
      this.error = true;
    });
  }
}
