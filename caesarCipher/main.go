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

func CaesarCipher(str string, num int) string {

	// code goes here
	// Note: feel free to modify the return type of this function
	return str

}

func main() {

	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(CaesarCipher("Hello", 4))

}

// Input:"Hello" & num = 4
// Output:Lipps

// Input:"abc" & num = 0
// Output:abc
