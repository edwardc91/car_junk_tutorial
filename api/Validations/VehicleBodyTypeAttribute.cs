using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace api.Validations 
{
    public class VehicleBodyTypeAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value == null) return ValidationResult.Success;

            var dbContext = validationContext.GetService(typeof(VehicleQuotesContext)) as VehicleQuotesContext;

            var bodyTypes = dbContext.BodyTypes.Select(bt => bt.Name).ToList();

            if (!bodyTypes.Contains(value))
            {
                var allowed = String.Join(", ", bodyTypes);
                if (allowed.Length > 0)
                {
                    return new ValidationResult(
                        $"Invalid vehicle body type {value}. Allowed values are {allowed}."
                    );
                }
                else 
                {
                    return new ValidationResult(
                        $"Invalid vehicle body type {value}. Not allowed values exists at the moment."
                    );
                }
                
            }

            return ValidationResult.Success;
        }   
    }
}