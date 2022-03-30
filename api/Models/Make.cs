using Microsoft.EntityFrameworkCore;

namespace api.Models
{   
    [Index(nameof(Name), IsUnique = true)]
    public class Make
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}