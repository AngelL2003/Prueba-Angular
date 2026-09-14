using BackPacientes.Models;
using BackPacientes.Service;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;

namespace BackPacientes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacienteController : ControllerBase
    {
        private readonly ServicePaciente _servicePaciente;

        public PacienteController(ServicePaciente paciente)
        {
            _servicePaciente = paciente;
        }

        [HttpGet]
        public IActionResult listar()
        {
            List<Paciente> pacientes = _servicePaciente.Listar();
            return Ok(pacientes);
        }
        [HttpGet("{id}")]
        public IActionResult listarPorId(int id)
        {
            var buscar = _servicePaciente.buscarPorId(id);
            
            return Ok(buscar);
        } 


        [HttpPost]
        public IActionResult crear(Paciente paciente)
        {
            _servicePaciente.crear(paciente);
            return Created("",paciente);
        }
        [HttpPut("{id}")]
        public IActionResult actualizar(int id, Paciente pac)
        {
            bool actualizar = _servicePaciente.Actualizar(id, pac);
            if (!actualizar) return NotFound(); 
            return Ok(pac);
        }
        [HttpDelete("{id}")]
        public IActionResult Eliminar(int id)
        {
            bool eliminar = _servicePaciente.Eliminar(id);
            if(!eliminar) return NotFound();
            return Ok();
        }
    }
}
