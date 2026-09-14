import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../interfaces/Paciente'; import { PacienteServicio } from '../../service/Paciente.service';



@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado-form.html'
})
export class PacienteFormComponent {
    @Output() PacienteCreado = new EventEmitter<void>();

    nuevoEmpleado: Paciente =
      {
        id: 0,
        tipoDocumento: '',
        numeroDocumento: 0,
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        sexo: '',
        edad: 0,
        telefono: 0,
        correo: '',
        estadoPaciente: false
      };

    constructor(private empleadoService: PacienteServicio) { }

    guardar(): void {
      this.empleadoService.crear(this.nuevoEmpleado).subscribe({
        next: () => {
          this.nuevoEmpleado = {id: 0,tipoDocumento: '',
            numeroDocumento: 0,
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',
            sexo: '',
            edad: 23,
            telefono: 123456789,
            correo: '',
            estadoPaciente: false
          } // limpiar form
            this.PacienteCreado.emit();
          // avisar al padre que recargue la lista
        },
        error: (err) => console.error('Error al crear empleado', err)
      });
    }

  }
