using Microsoft.AspNetCore.Mvc;

namespace FullstackTechTest.Server.Controllers
{
    //The WeightedStringsController receives a string and an array of queries via a POST request, calculates the weights of the substrings, and checks if these weights match the queries, returning "Yes" or "No" for each query.

    [Route("api/[controller]")]
    [ApiController]
    public class WeightedStringsController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] WeightedStringsRequest request)
        {
            //request.InputString is the input string to be processed
            //request.Queries is an array of integers representing the queries.

            var result = WeightedStrings(request.InputString, request.Queries);
            return Ok(result);
        }

        private List<string> WeightedStrings(string input, int[] queries)
        {
            //weights: A HashSet<int> to store the unique weights of the substrings
            var weights = new HashSet<int>();

            //previousChar: Keeps track of the previous character in the string.
            char previousChar = '\0';

            //currentWeight: Stores the current weight of the substring
            int currentWeight = 0;

            //count: Counts the occurrences of the current character.
            int count = 0;

            //iterates over each character in the input string
            //It calculates the weight of the character (charWeight)
            //If the character is the same as the previous one, it increments the count. Otherwise, it resets the count to 1.
            //The current weight is calculated as the character's weight multiplied by the count, and this weight is added to the weights set.
            //It then updates previousChar to the current character.
            foreach (char c in input)
            {
                int charWeight = c - 'a' + 1;
                if (c == previousChar)
                {
                    count++;
                }
                else
                {
                    count = 1;
                }
                currentWeight = charWeight * count;
                weights.Add(currentWeight);
                previousChar = c;
            }

            //Checks each query to see if it exists in the weights set and adds "Yes" or "No" to the result list accordingly.
            var result = new List<string>();
            foreach (int query in queries)
            {
                result.Add(weights.Contains(query) ? "Yes" : "No");
            }

            return result;
        }
    }

    //This class defines the structure of the request body. It contains two properties:
    public class WeightedStringsRequest
    {
        //InputString: The string to be processed.
        public string InputString { get; set; }

        //Queries: An array of integers representing the queries.
        public int[] Queries { get; set; }
    }
}
