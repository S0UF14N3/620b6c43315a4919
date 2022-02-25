import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  nom: string;
  lien: string;

  constructor() {
    this.nom = 'S0UF14N3';
    this.lien = 'https://images.app.goo.gl/E7QM4CNjcUNcfoEb9';
  }

  ngOnInit(): void {
  }

}
