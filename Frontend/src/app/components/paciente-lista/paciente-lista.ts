import { Component, OnInit, signal } from "@angular/core";
import { Paciente } from "../../interfaces/Paciente";
import { PacienteServicio } from "../../service/Paciente.service";
import { CommonModule, NgFor } from "@angular/common";

@Component({
    selector: 'app-paciente-lista',
    templateUrl: './paciente-lista.html',
    imports: [NgFor,CommonModule]
})
export class PacienteListaComponent implements OnInit{
pacientes = signal<Paciente[]>([]);

constructor(private lPaciente: PacienteServicio){}

ngOnInit(){
    this.listar();
}
listar(){
    this.lPaciente.listar().subscribe({
        next: (data)=> this.pacientes.set(data),
        error: (err)=> console.log("No se encuentran usuarios",err)
    })
}

}