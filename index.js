// Algorithm Assignment
//1.  GIven a sorted array of numbers, the task is to search for a given element in the array using binary search.
	
// 	Example 1
// 	Input:
// Arr = [1, 3 , 5, 7, 8, 9]
// 		X = 5

// 	Output:
// 		“Element Found”

// Input = [3, 2, 1, 56, 10000, 167]

// Example 2
// 	Input:
// Arr = [1, 3 , 5, 7, 8, 9]
// 		X = 6

// 	Output:
// 	1.	“Element Not Found”
function binarySearch(arr,x){
  if(arr.includes(x)){
    return "Element Found"
  }else{
    return "Element not Found"
  }
  }
  let a =[1,2,4,5,6,7]
  console.log(binarySearch(a,3))
  console.log(binarySearch(a,4))
  
  
  // 2. Find the number of the elements in array A that are divisible by 2 and greater than 15.
  // For example…
  // divisible(A)
  // divisible([2,3,1,24]) to return 3
  // divisible([100,84,37]) to return 2
  // divisible([5,8,6,12]) to return 0
  function divisible(arr){
  let outputArray=[]
  for(let num of arr){
    if(num%2==0&&num>15){
      outputArray.push(num)
    }
  }
  return outputArray.length
  }
  console.log(divisible([5,8,6,12]))
  
  
  // Find the number of elements in an array Y,
  // that are greater than or equal to the variable X 
  //and less than or equal to the variable Z
  
  // For example…
  // noOfElements(Y, X, Z)
  // noOfElements([2, 3, 0, 1, 7], 4, 8) to return 1
  // noOfElements([3 ,3 ,3, 5, 18, 6, 20], 15, 30) to return 2
  // noOfElements([4, 6, 2, 6, 7, 7], 0, 7) to return 6
  //3.
  function noOfElements(arr,x,y){
    let result =[]
    for(let num of arr){
      if(num >= x && num <= y){
        result.push(num)
      }
    }
  
  return result.length
  }
  console.log(noOfElements([4, 6, 2, 6, 7, 7], 0, 7))
  
  //4 Given two arrays, return the sum of the array with 
  //the highest value when its elements are summed respectively.
  
  // For example:
  // highestSum(X, Y)
  // highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) => 20
  // highestSum([ 15, 7], [12, 17]) => 29
  // highestSum([30], [3, 6, 2, 6]) => 30
  function highestSum(x,y){
    let a =x.reduce((a,c)=>(a+c),0)
    let b = y.reduce((a,c)=>(a+c),0)
    return Math.max(a,b)
  }
  console.log(highestSum([30], [3, 6, 2, 6]))
  console.log(highestSum([ 15, 7], [12, 17]))
  
  // GIven an array arr[] and an integer k where k is smaller 
  //than the size of array, the task is to find the kth smallest
  // element in the given array. It is given that all array elements
  // are distinct.
  function arrItemTerm(arr,k){
    let newArray =arr.sort((a,b)=>a-b);
    return newArray[k-1]
  }
  let array = [34,2,23,5,6,8,18],
  arr = [7, 10, 4, 3, 20, 15]
  
  console.log(arrItemTerm(array,4))
  console.log(arrItemTerm(arr,3))
  console.log(arrItemTerm(arr,4))
    
  // 	Example 1:
    
  // Input:
  // arr = [7, 10, 4, 3, 20, 15]
  // 	k = 3
  
  // Output:  7
  // Explanation: 3rd smallest element in the given array is 7
  
  // Example 2:
    
  // Input:
  // arr = [7, 10, 4, 3, 20, 15]
  // 	k = 4
  
  // Output:  15
  // Explanation: 4th smallest element in the given array is 15

	
