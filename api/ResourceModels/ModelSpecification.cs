
using System.ComponentModel.DataAnnotations;

namespace api.ResourceModels
{
    public class ModelSpecification
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }

        public ModelSpecificationStyle[] Styles { get; set; }
    }
}