/*
	Challenge

	Have the function CaesarCipher(str,num) take the str parameter and perform a
	Caesar Cipher shift on it using the num parameter as the shifting number.
	A Caesar Cipher works by shifting each letter in the string N places down in
	the alphabet (in this case N will be num). Punctuation, spaces, and capitalization
	should remain intact.

	For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
*/

package main

import "fmt"

const lowerCaseHighestValue = 122
const lowerCaseLowestValue = 97
const upperCaseHighestValue = 90
const upperCaseLowestValue = 65

func isLowerCaseAlphabetic(letter rune) bool {
	return letter >= lowerCaseLowestValue && letter <= lowerCaseHighestValue
}

func isUpperAlphabetic(letter rune) bool {
	return letter >= upperCaseLowestValue && letter <= upperCaseHighestValue
}

func getMoveCharacterFn(letter rune, num int) func(int, int) rune {
	return func(highestValue int, lowestValue int) (character rune) {
		if int(letter)+num > highestValue {
			difference := lowestValue + ((int(letter) + num) - highestValue) - 1
			character = rune(difference)
		} else {
			character = rune(int(letter) + num)
		}

		return
	}
}

func CaesarCipher(str string, num int) string {
	result := ""

	for _, letter := range str {
		character := letter
		moveCharaterFn := getMoveCharacterFn(character, num)

		if isLowerCaseAlphabetic(character) {
			character = moveCharaterFn(lowerCaseHighestValue, lowerCaseLowestValue)
		}

		if isUpperAlphabetic(character) {
			character = moveCharaterFn(upperCaseHighestValue, upperCaseLowestValue)
		}

		result += string(character)
	}

	return result
}

func main() {
	fmt.Println(CaesarCipher("dogs", 8))
}

// Input:"Hello" & num = 4
// Output:Lipps

// Input:"abc" & num = 0
// Output:abc
