/*
	Challenge

	Have the function ArrayAddition(arr) take the array of numbers stored in arr and
	return the string true if any combination of numbers in the array (excluding thelargest number)
	can be added up to equal the largest number in the array, otherwise return the string false.

	For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.
	The array will not be empty, will not contain all the same elements, and may contain negative numbers.
*/

package main

import (
	"fmt"
	"math"
	"sort"
	"strconv"
	"strings"
)

func getMax(arr []int) int {
	sort.Ints(arr)

	return arr[len(arr)-1]
}

func PadLeft(str string, pad string, lenght int) string {
	if len(str) > lenght {
		return str
	}

	return strings.Repeat(pad, lenght-len(str)) + str
}

func GetCombinations(arr []int) []string {
	arrCopy := make([]int, len(arr)-1)
	var combinations []string

	copy(arrCopy, arr[:len(arr)-1])

	for i := 1; i < int(math.Pow(2, float64(len(arrCopy)))); i++ {
		binary := strconv.FormatInt(int64(i), 2)
		paddedString := PadLeft(binary, "0", len(arrCopy))
		combinations = append(combinations, paddedString)
	}

	return combinations
}

func ArrayAddition(arr []int) string {
	max := getMax(arr)
	combinations := GetCombinations(arr)

	for i := 0; i < len(combinations); i++ {
		combinationsElements := strings.Split(combinations[i], "")
		sum := 0

		for j := 0; j < len(combinationsElements); j++ {
			if combinationsElements[j] == "1" {
				sum += int(arr[j])
			}
		}

		if max == sum {
			return "true"
		}
	}

	return "false"
}

func main() {

	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(ArrayAddition([]int{5, 7, 16, 1, 2}))
}

// Input:[]int {5,7,16,1,2}
// Output:"false"

// Input:[]int {3,5,-1,8,12}
// Output:"true"
