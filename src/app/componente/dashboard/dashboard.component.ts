import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  titulo: string;
  tituloEvent: string;
  tPropert: string;
  desc: string;
  nombre: string;
  apellido: string;
  profesor: string;
  materia: string;
  imagen: string;
  tPropet: string;
  name: string;
  textEvent: string;
  nEsc: string;
  num1: number = 5;
  num2: number = 10;
  imagen2: string;
  sumaEvent: number;
  suma: number;


  constructor() {
    this.titulo = "INTERPOLACION";

    this.desc = "Es una forma de hacer binding de datos en el template de un componente";
    this.nombre = " Noelia";
    this.apellido = "Satorres";
    this.profesor = "Vasallo";
    this.materia = '';
    this.tPropert = 'PROPERTY BINDING'
    this.imagen = 'https://www.mobilelive.ca/wp-content/uploads/2022/08/Angular_Banner.jpg';
    this.name = 'nombre';
    this.tPropet = 'apellido';
    this.tituloEvent = 'EVENT BINDING';
    this.textEvent = 'HOLA MUNDO';
    this.nEsc = 'INCUYO';
    this.imagen2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZgN1u7lQPfgl0Y2SogFFoR9Ka96nSAdODb31hNB6qA&s'
    this.sumaEvent = 0;
    this.suma = this.num1 + this.num2;


  }

  getMateria() {
    return this.materia = 'Angular';
  }
  cambiarTexto() {
    this.textEvent = 'CHAU MUNDO';
  }
  sumar() {
    this.sumaEvent = this.suma;
  }


}
