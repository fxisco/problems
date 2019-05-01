/*
	Challenge

	Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most
	frequently (the mode).

	For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than
	one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5
	because it appeared first). If there is no mode return -1. The array will not be empty.
*/

package main

import (
	"fmt"
	"sort"
)

type apperence struct {
	count int
	index int
}

func SimpleMode(arr []int) int {
	apperences := make(map[int]apperence)
	var hasMode bool

	for index, item := range arr {
		var apperence = apperences[item]

		if _, ok := apperences[item]; ok {
			apperence.count++
			hasMode = true
		} else {
			apperence.count = 1
			apperence.index = index
		}

		apperences[item] = apperence
	}

	if hasMode {
		var apperenceArray []apperence

		for item := range apperences {
			apperenceArray = append(apperenceArray, apperences[item])
		}

		sort.Slice(
			apperenceArray,
			func(i, j int) bool {
				if apperenceArray[i].count > apperenceArray[j].count {
					return true
				}

				if apperenceArray[i].count < apperenceArray[j].count {
					return false
				}

				return apperenceArray[i].index < apperenceArray[j].index
			})

		return arr[apperenceArray[0].index]
	}

	return -1
}

func main() {
	fmt.Println(SimpleMode([]int{5, 5, 2, 2, 1}))
}

// Input:[]int {5,5,2,2,1}
// Output:5

// Input:[]int {3,4,1,6,10}
// Output:-1
