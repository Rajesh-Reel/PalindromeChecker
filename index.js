function palindrome(myStr) {
    // below removes special characters, spaces and makes myStr lowercase
    let removeCharacters = myStr.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    // reverses above variable for comparison
    let isPalindrome = removeCharacters.split("").reverse().join("");

    if (removeCharacters === isPalindrome) { //add condition
        document.write("<div>"+ myStr + " is a Palindrome <div>");
    } else {
        document.write("<div>" + myStr + " is not a Palindrome </div>");
    }
};

palindrome("hello"); //not a palindrome
palindrome("12321"); //yes
palindrome("mom"); //yes
palindrome("Harry Potter"); //not a palindrome