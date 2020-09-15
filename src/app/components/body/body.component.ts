import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado/empleado.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {

empleados: Empleado[] =[
  {nombre: "Jhonnier", direccion: "Vll 87", telefono: 65789},
  {nombre: "andres", direccion: "Vll 87", telefono: 65789},
  {nombre: "sergio", direccion: "Vll 87", telefono: 65789},
  {nombre: "pedrito", direccion: "Crr 56", telefono: 5789}
]

/*
listaEmpleados: Array<Empleado>=[
  {nombre: "Jhonnier", direccion: "Vll 87", telefono: 65789},
  {nombre: "Andres", direccion: "Crr 56", telefono: 5789}
];
*/

  constructor() { 
  }

  ngOnInit(): void {
  }

}
