using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

#nullable disable

namespace CiisaPsw_Exam3.Models
{
    public partial class Producto
    {
        [Display(Name = "Id")]
        public int ProductoId { get; set; }
        public int DepId { get; set; }

        [Required]
        [Remote("ProductoExistsName", "ProductoController", ErrorMessage = "Este producto ya existe")]
        public string Nombre { get; set; }

        [DataType(DataType.Currency)]
        [Display(Name = "Precio unitario")]
        public decimal PrecioUnit { get; set; }
        public int Stock { get; set; }
        public byte Activo { get; set; }
        public DateTime? FechaAlta { get; set; }
        public DateTime? FechaMod { get; set; }

        [Display(Name = "Departamento")]
        public virtual Departamento Dep { get; set; }
    }
}
