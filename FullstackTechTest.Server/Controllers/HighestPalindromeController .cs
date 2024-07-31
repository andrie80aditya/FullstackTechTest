using Microsoft.AspNetCore.Mvc;

namespace FullstackTechTest.Server.Controllers
{
    //HighestPalindromeController provides an endpoint to get the highest possible palindrome from a given string within a certain number of changes.
    //It uses two helper methods (CanFormPalindrome and MakeHighestPalindrome) to first check the feasibility and then perform the transformation.

    [Route("api/[controller]")]
    [ApiController]

    public class HighestPalindromeController : Controller
    {
        //The Get method is an HTTP GET endpoint that takes a string s and an integer k as parameters.
        [HttpGet("{s}/{k}")]
        public IActionResult Get(string s, int k)
        {
            //It calls the HighestPalindrome method with these parameters and returns the result.
            string result = HighestPalindrome(s, k);
            return Ok(result);
        }

        private string HighestPalindrome(string s, int k)
        {
            //This method converts the string s to a character array and initializes an array changes to track changes made.
            char[] number = s.ToCharArray();
            int n = s.Length;
            int[] changes = new int[n];

            //It checks if a palindrome can be formed with the given number of changes using CanFormPalindrome. If it cannot form a palindrome, it returns -1.
            if (!CanFormPalindrome(number, k, 0, n - 1, changes))
            {
                return "-1";
            }

            //If it can, it calls MakeHighestPalindrome to modify the string to the highest possible palindrome and returns the result.
            MakeHighestPalindrome(number, k, 0, n - 1, changes);
            return new string(number);
        }

        //This method checks if it's possible to transform the string into a palindrome within k changes.
        private bool CanFormPalindrome(char[] number, int k, int left, int right, int[] changes)
        {
            if (left >= right) return true;

            //It uses recursion to compare characters from both ends towards the center.
            if (number[left] != number[right])
            {
                //If characters differ, it marks them as changed and decrements k.
                //If k reaches zero and more changes are needed, it returns false.
                if (k <= 0) return false;
                changes[left] = changes[right] = 1;
                k--;
            }

            return CanFormPalindrome(number, k, left + 1, right - 1, changes);
        }

        //This method transforms the string into the highest possible palindrome with the given k changes.
        private void MakeHighestPalindrome(char[] number, int k, int left, int right, int[] changes)
        {
            if (left >= right) return;

            //It uses recursion to iterate from both ends towards the center.
            //If characters differ, it changes them to the maximum of the two.
            if (number[left] != number[right])
            {
                char maxChar = (char)Math.Max(number[left], number[right]);
                number[left] = number[right] = maxChar;
                k--;
            }

            //If additional changes are available (k > 0), it tries to maximize the digits to '9' wherever possible.
            //It ensures that changes are within the allowed limit k.
            if (k > 0 && changes[left] == 0 && number[left] != '9')
            {
                if (k >= 2 || (k >= 1 && left == right))
                {
                    number[left] = number[right] = '9';
                    k -= (changes[left] == 1 ? 1 : 2);
                }
            }

            MakeHighestPalindrome(number, k, left + 1, right - 1, changes);
        }
    }
}
