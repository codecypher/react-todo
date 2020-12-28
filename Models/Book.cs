/*
 * Create a web API with ASP.NET Core and MongoDB
 * https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-3.1&tabs=visual-studio-mac#create-the-aspnet-core-web-api-project
 */

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace react_tutorial.Models
{
    public class Book
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string BookName { get; set; }

        public decimal Price { get; set; }

        public string Category { get; set; }

        public string Author { get; set; }
    }
}
