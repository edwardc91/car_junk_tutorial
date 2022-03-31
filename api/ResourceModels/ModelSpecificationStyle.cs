using System.ComponentModel.DataAnnotations;
using api.Validations;

namespace api.ResourceModels
{
    public class ModelSpecificationStyle
    {   
        [Required]
        [VehicleBodyTypeAttribute]
        public string BodyType { get; set; }

        [Required]
        [VehicleSizeAttribute]
        public string Size { get; set; }

        [Required]
        [MinLength(1)]
        [ContainsYears]
        public string[] Years { get; set; }
    }
}