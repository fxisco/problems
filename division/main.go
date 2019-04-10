package main

import "fmt"

/*
	Challenge

	Have the function Division(num1,num2) take both parameters being passed and return
	the Greatest Common Factor. That is, return the greatest number that evenly goes into
	both numbers with no remainder.

	For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.
	The range for both parameters will be from 1 to 10^3.
*/

func getFactors(num int) map[int]int {
	dic := make(map[int]int)

	for i := 1; i <= num; i++ {
		if num%i == 0 {
			dic[i] = i
		}
	}

	return dic
}

func Division(num1 int, num2 int) int {
	num1Factors := getFactors(num1)
	num2Factors := getFactors(num2)
	gcf := -1

	for _, v := range num1Factors {
		_, ok := num2Factors[v]

		if ok && v > gcf {
			gcf = v
		}
	}

	return gcf
}

func main() {

	// do not modify below here, readline is our function
	// that properly reads in the input for you
	fmt.Println(Division(15, 60))
}

// Input:7 & num2 = 3
// Output:1

// Input:36 & num2 = 54
// Output:18
