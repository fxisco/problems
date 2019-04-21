/*
	Challenge

	Have the function BinaryConverter(str) return the decimal form of the binary value.

	For example: if 101 is passed return 5, or if 1000 is passed return 8.
*/

package main

import (
	"fmt"
	"strconv"
)

func BinaryConverter(str string) string {
	result, _ := strconv.ParseInt(str, 2, 64)

	return strconv.FormatInt(result, 10)
}

func main() {
	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(BinaryConverter("011"))
}

// Input:"100101"
// Output:37

// Input:"011"
// Output:3
