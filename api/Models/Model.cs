using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace api.Models
{   
    [Index(nameof(Name), nameof(MakeID), IsUnique = true)]
    public class Model
    {   
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public int MakeID { get; set; }

        public Make Make { get; set; }

        public ICollection<ModelStyle> ModelStyles { get; set; }   
    }
}