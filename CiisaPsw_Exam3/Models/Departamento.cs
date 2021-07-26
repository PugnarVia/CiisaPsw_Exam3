using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace CiisaPsw_Exam3.Models
{
    public partial class Departamento
    {
        public Departamento()
        {
            Productos = new HashSet<Producto>();
        }

        [Display(Name = "Id")]
        public int DepartamentoId { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        public string Nombre { get; set; }
        public byte Activo { get; set; }
        public DateTime? FechaAlta { get; set; }
        public DateTime? FechaMod { get; set; }

        public virtual ICollection<Producto> Productos { get; set; }
    }
}
