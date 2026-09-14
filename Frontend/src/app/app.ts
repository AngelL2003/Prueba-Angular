import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PacienteListaComponent } from './components/paciente-lista/paciente-lista';
import { PacienteFormComponent } from './components/empleado-form/empleado-form';
import { EmpleadoListaComponent } from './components/empleado-lista/empleado-lista';

@Component({
  imports: [RouterOutlet, PacienteFormComponent, EmpleadoListaComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'Frontend';

  @ViewChild('listaComponent')listaComponent!: PacienteListaComponent;

  recargar():void{
    
  }
}
