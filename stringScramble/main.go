/*
	Challenge

	Have the function StringScramble(str1,str2) take both parameters being passed and
	return the string true if a portion of str1 characters can be rearranged to match str2,
	otherwise return the string false.

	For example: if str1 is "rkqodlw" and str2 is "world" the output should return true.
	Punctuation and symbols will not be entered with the parameters.
*/

package main

import (
	"fmt"
	"strings"
)

func StringScramble(str1 string, str2 string) string {
	for _, char := range str2 {
		if strings.ContainsRune(str1, char) {
			index := strings.IndexRune(str1, char)
			str1 = str1[0:index] + str1[index+1:]
		} else {
			return "false"
		}
	}

	return "true"
}

func main() {
	fmt.Println(StringScramble("h3llko", "hello"))
}

// Input:"cdore" & str2= "coder"
// Output:true

// Input:"h3llko" & str2 = "hello"
// Output:false
