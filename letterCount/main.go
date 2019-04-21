/*
	Challenge

	Have the function LetterCount(str) take the str parameter being passed and return the
	first word with the greatest number of repeated letters.

	For example: "Today, is the greatest day ever!" should return greatest because it has
	2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words
	with repeating letters return -1.

	Words will be separated by spaces.
*/

package main

import "fmt"

func LetterCount(str string) string {

	// code goes here
	// Note: feel free to modify the return type of this function
	return str

}

func main() {

	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(LetterCount("Hello apple pie"))

}

// Input:"Hello apple pie"
// Output:Hello

// Input:"No words"
// Output:-1
