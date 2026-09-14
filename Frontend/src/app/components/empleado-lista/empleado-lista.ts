import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../interfaces/Paciente';
import { PacienteServicio } from '../../service/Paciente.service';

@Component({
  selector: 'app-empleado-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado-lista.html',
  styleUrl: './empleado-lista.css'
})
export class EmpleadoListaComponent implements OnInit {
  empleados = signal<Paciente[]>([]);

  constructor(private empleadoService: PacienteServicio) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadoService.listar().subscribe({
      next: (data) => this.empleados.set(data),
      error: (err) => console.error('Error al listar empleados', err)
    });
  }

  eliminar(id: number): void {
    this.empleadoService.eliminar(id).subscribe({
      next: () => this.cargarEmpleados(),
      error: (err) => console.error('Error al eliminar', err)
    });
  }
}