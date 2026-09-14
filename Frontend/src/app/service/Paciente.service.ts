
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Paciente } from "../interfaces/Paciente";

@Injectable({
    providedIn: 'root'
})
export class PacienteServicio{
    private apiUrl = 'https://localhost:7232/api/Paciente';

    constructor(private http: HttpClient){}

    listar(){
        return this.http.get<Paciente[]>(`${this.apiUrl}`);
    }
    buscarPorId(id: number){
        return this.http.get<Paciente>(`${this.apiUrl}/${id}`);
    }
    crear(paciente:Paciente){
        return this.http.post<Paciente>(`${this.apiUrl}`,paciente);
    }
    actualizar(id:number,paciente: Paciente){
        return this.http.put<Paciente>(`${this.apiUrl}/${id}`,paciente);
    }
    eliminar(id:number){
        return this.http.delete<Paciente>(`${this.apiUrl}/${id}`);
    }
}