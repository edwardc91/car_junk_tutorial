using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Index(nameof(Year), nameof(ModelStyleID), IsUnique = true)]
    public class ModelStyleYear
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Year { get; set; }
        public int ModelStyleID { get; set; }

        public ModelStyle ModelStyle { get; set; }
    }
}