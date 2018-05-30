# Repeated Word
This function takes a long string as a parameter and returns the first word that was used more than one time inside this string. To achieve that I used the regex to pull each word from the string removing special characters and toLowerCase() method to make sure string is not case sensitive. This creates an array of strings. Next while looping through the array I am creating map objects with words as the keys and assign them to value 1. If they show up more than 1 times the loop breaks and we return this string value.

## Solution
![repeated-word](assets/repeated-word.JPG)