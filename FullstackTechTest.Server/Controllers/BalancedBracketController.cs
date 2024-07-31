using Microsoft.AspNetCore.Mvc;

namespace FullstackTechTest.Server.Controllers
{
    //The BalancedBracketController provides an API endpoint to check if a given string has balanced brackets. It uses a stack to track and validate the bracket pairs and returns "YES" or "NO" based on the validation result.

    [Route("api/[controller]")]
    [ApiController]
    public class BalancedBracketController : ControllerBase
    {
        [HttpPost]
        public IActionResult CheckBalancedBrackets([FromBody] BracketInput input)
        {
            //Calls the IsBalanced method to check if the input string has balanced brackets.
            bool isBalanced = IsBalanced(input.Input);

            //Returns an HTTP 200 OK response with "YES" if the brackets are balanced, otherwise "NO".
            return Ok(isBalanced ? "YES" : "NO");
        }

        private bool IsBalanced(string s)
        {
            //Creates a stack to keep track of opening brackets.
            Stack<char> stack = new Stack<char>();

            //Loop through characters
            foreach (char c in s)
            {
                //Pushes opening brackets onto the stack.
                if (c == '(' || c == '{' || c == '[')
                {
                    stack.Push(c);
                }
                else if (c == ')' || c == '}' || c == ']')
                {
                    //Returns false if there is no opening bracket to match.
                    if (stack.Count == 0) return false;

                    //Pops the top of the stack
                    char top = stack.Pop();

                    //Checks if the popped bracket matches the current closing bracket.
                    if (!Matches(top, c)) return false;
                }
            }
            return stack.Count == 0;
        }

        //A private method that checks if an opening bracket matches a closing bracket.
        private bool Matches(char open, char close)
        {
            //Logic: Returns true if the brackets match; otherwise, false.
            return (open == '(' && close == ')') ||
                   (open == '{' && close == '}') ||
                   (open == '[' && close == ']');
        }
    }

    public class BracketInput
    {
        //Contains the input string to be checked for balanced brackets.
        public string Input { get; set; }
    }
}
