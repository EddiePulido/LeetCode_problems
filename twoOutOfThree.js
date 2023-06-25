const twoOutOfThree = (nums1, nums2, nums3) => {
  const dupes = arr => [...new Set(arr)]
  
  const counter = (a, c, result) => {
      for(num of a){
          c[num] = ++c[num] || 1
          if(c[num] === 2) result.push(num)
      }
  }

  nums1 = dupes(nums1)
  nums2 = dupes(nums2)
  nums3 = dupes(nums3)

  const arr = []
  const count = {}

  counter(nums1, count, arr)
  counter(nums2, count, arr)
  counter(nums3, count, arr)

  return arr
}

//bucketSort
Select tags
0/5
const twoOutOfThree = (n1,n2,n3) => {
    const count = (arr, result, buck) => {
        for(num of arr){
            buck[num]++
            if(buck[num] === 2) result.push(num)
        }
    }

    const removeDupe = arr => [...new Set(arr)]

    const bucket = new Array(101).fill(0)
    const result = []

    n1 = removeDupe(n1)
    n2 = removeDupe(n2)
    n3 = removeDupe(n3)

    count(n1, result, bucket)
    count(n2, result, bucket)
    count(n3, result, bucket)

    return result
}