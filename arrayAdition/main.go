/*
	Challenge
	Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
*/

package main

import "fmt"

func ArrayAddition(arr []int) int {

	// code goes here
	// Note: feel free to modify the return type of this function
	return arr[0]

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
