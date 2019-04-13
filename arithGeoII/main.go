/*
	Challenge

	Have the function ArithGeoII(arr) take the array of numbers stored in arr and return
	the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if
	it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.

	An arithmetic sequence is one where the difference between each of the numbers is consistent,
	where as in a geometric sequence, each term after the first is multiplied by some constant or
	common ratio.

	Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
	Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
*/

package main

import "fmt"

func checkArith(arr []int) bool {
	differences := make(map[int]int)

	for i := 0; i < len(arr)-1; i++ {
		difference := arr[i+1] - arr[i]
		differences[difference] = difference
	}

	return len(differences) == 1
}

func checkGeometric(arr []int) bool {
	ratios := make(map[int]int)

	for i := 0; i < len(arr)-1; i++ {
		ratio := arr[i+1] / arr[i]
		ratios[ratio] = ratio
	}

	return len(ratios) == 1
}

func ArithGeoII(arr []int) string {
	if checkArith(arr) {
		return "Arithmetic"
	}

	if checkGeometric(arr) {
		return "Geometric"
	}

	return "-1"
}

func main() {

	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(ArithGeoII([]int{10, 110, 210, 310, 410, 511}))

}

// Input:[]int {5,10,15}
// Output:"Arithmetic"

// Input:[]int {2,4,16,24}
// Output:-1
