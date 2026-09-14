using BackPacientes.Models;
using Microsoft.Extensions.FileSystemGlobbing.Internal.PatternContexts;

namespace BackPacientes.Service
{
    public class ServicePaciente
    {
        private readonly List<Paciente> pacientes = new List<Paciente>();
        private int id;
        public List<Paciente> Listar()
        {
            return pacientes;
        }
        public Paciente buscarPorId(int id)
        {
            return pacientes.Find(e=> e.id == id);
        }
        public void crear(Paciente paciente)
        {
            paciente.id = id++;
            pacientes.Add(paciente);
        }
        public bool Actualizar(int id, Paciente nuevoPaciente)
        {
            //Busca el usuario para manipularlo y asi actualizarlo
            var pacien = buscarPorId(id);
            pacien.tipoDocumento = nuevoPaciente.tipoDocumento;
            pacien.numeroDocumento = nuevoPaciente.numeroDocumento;
            pacien.primerNombre = nuevoPaciente.primerNombre;
            pacien.segundoNombre = nuevoPaciente.segundoNombre;
            pacien.primerApellido = nuevoPaciente.primerApellido;
            pacien.segundoApellido = nuevoPaciente.segundoApellido;
            pacien.sexo = nuevoPaciente.sexo;
            pacien.edad = nuevoPaciente.edad;
            pacien.telefono = nuevoPaciente.telefono;
            pacien.correo = nuevoPaciente.correo;
            pacien.estadoPaciente = nuevoPaciente.estadoPaciente;
            return true;
        }
        public bool Eliminar(int id)
        {
            var pacient = buscarPorId(id);
            pacientes.Remove(pacient);
            return true;
        }
    }
}
