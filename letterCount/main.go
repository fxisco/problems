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

import (
	"fmt"
	"strings"
)

func wordLetterCount(str string) map[string]int {
	count := make(map[string]int)

	for i := 0; i < len(str); i++ {
		letter := string(str[i])

		if _, ok := count[letter]; ok {
			count[letter]++
		} else {
			count[letter] = 1
		}
	}

	return count
}

func repetedLettersCount(word map[string]int) int {
	count := 0

	for _, item := range word {
		if item > 1 {
			count += item
		}
	}

	return count
}

func LetterCount(str string) string {
	counter := make(map[string]map[string]int)
	words := strings.Split(str, " ")
	max := -1
	maxWord := "-1"

	for _, item := range words {
		counter[item] = wordLetterCount(item)

		if repeatedCount := repetedLettersCount(counter[item]); repeatedCount > 0 && repeatedCount > max {
			maxWord = item
			max = repeatedCount
		}
	}

	return maxWord
}

func main() {

	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(LetterCount("No words"))

}

// Input:"Hello apple pie"
// Output:Hello

// Input:"No words"
// Output:-1
