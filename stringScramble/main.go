/*
	Challenge
	Have the function StringScramble(str1,str2) take both parameters being passed and
	return the string true if a portion of str1 characters can be rearranged to match str2,
	otherwise return the string false.

	For example: if str1 is "rkqodlw" and str2 is "world" the output should return true.
	Punctuation and symbols will not be entered with the parameters.
*/

package main

import "fmt"

func StringScramble(str1 string, str2 string) string {

	// code goes here
	// Note: feel free to modify the return type of this function
	return str1

}

func main() {

	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(StringScramble("cdore", "coder"))

}

// Input:"cdore" & str2= "coder"
// Output:true

// Input:"h3llko" & str2 = "hello"
// Output:false
