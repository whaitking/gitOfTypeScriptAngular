import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']

})
export class TareaComponent implements OnInit {
  @Input() tareas: Tarea = {
    lista: "",
    img: "",
    titulo: "",
    usuarios: [{ "img": "", "alt": "" }],
    fechaFin: new Date()
  };

  constructor() {
  }

  isWarning(): boolean {
    let fechaFin: Date = new Date(this.tareas.fechaFin);
    const currentDate = new Date();
    const warningDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    return this.tareas.fechaFin <= warningDate;
  }

  isDanger(): boolean {
    let fechaFin: Date = new Date(this.tareas.fechaFin);
    return fechaFin < new Date() && this.tareas.lista !== 'Finalizadas';
  }
  
  isSuccess(): boolean{
    let fechaFin: Date = new Date(this.tareas.fechaFin);
    return this.tareas.fechaFin < new Date() && this.tareas.lista === 'Finalizadas';
  }
  
  ngOnInit(): void {
  }

}
