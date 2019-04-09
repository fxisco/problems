package main

import (
	"fmt"
	"log"
	"regexp"
	"strconv"
	"strings"
)

/*
	Challenge
	Have the function PalindromeTwo(str) take the str parameter being passed and return the
	string true if the parameter is a palindrome, (the string is the same forward as it is backward)
	otherwise return the string false. The parameter entered may have punctuation and symbols but they
	should not affect whether the string is in fact a palindrome.

	For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.
*/

func reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func PalindromeTwo(str string) string {
	reg, err := regexp.Compile("[^a-zA-Z0-9]+")

	if err != nil {
		log.Fatal(err)
	}

	processedWord := reg.ReplaceAllString(str, "")
	formattedWord := strings.ToLower(processedWord)

	return strconv.FormatBool(formattedWord == reverse(formattedWord))
}

func main() {
	fmt.Printf(PalindromeTwo("not a palindrome"))
}

// Input:"Noel - sees Leon"
// Output:true

// Input:"A war at Tarawa!"
// Output:true
