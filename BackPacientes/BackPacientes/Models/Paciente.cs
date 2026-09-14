namespace BackPacientes.Models
{
    public class Paciente
    {
        public int id { get; set; }
        public string tipoDocumento { get; set; }
        public int numeroDocumento { get; set; }
        public string primerNombre { get; set; }
        public string segundoNombre { get; set; }
        public string primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public string sexo { get; set; }
        public int edad {  get; set; }
        public int telefono { get; set; }
        public string correo {  get; set; }
        public bool estadoPaciente { get; set; }

    }
}
