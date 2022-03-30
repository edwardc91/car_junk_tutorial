using Microsoft.EntityFrameworkCore;

namespace api.Models
{   
    [Index(nameof(Name), IsUnique = true)]
    public class BodyType
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}