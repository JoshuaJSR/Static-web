import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  current = 0;
  private timer: any;

  slides = [
    {
      title: 'Trasloco in sicurezza',
      text: 'Il tuo trasloco inizia da qui',
      buttonText: 'Contattaci',
      buttonLink: '/contact',
      images: [
        'images/transporte.webp',
        'images/exterior.webp',
        'images/room.webp'
      ]
    },
    {
      title: 'Hai bisogno di un preventivo?',
      text: 'Trasparente, veloce e senza impegno',
      buttonText: 'Richiedi un preventivo',
      buttonLink: '/quote',
      images: [
        'images/cocina.webp',
        'images/armario.webp',
        'images/mueble-tv.webp'
      ]
    }
  ];

 ngOnInit() {
  this.timer = setInterval(() => {
    this.current = (this.current + 1) % this.slides.length;
  }, 3000);
}

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.current = (this.current + 1) % this.slides.length;
  }
}
