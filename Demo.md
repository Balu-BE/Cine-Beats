# Two Sum Problem


## Problem Description

Given an array of integers `nums` and an integer `target`, return **the indices** of the two numbers such that they add up to `target`.

- You may assume that each input would have **exactly one solution**, and you may not use the same element twice.
- You can return the answer in any order.


## Example

- Input: nums = [2, 7, 11, 15], target = 9
- Output: [0, 1]
- Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


## Approach

- We solve this problem using a hash map (dictionary) for efficient lookups. The key idea is to traverse the array and for each element, compute its complement with respect to the target value. If this complement is already in the hash map, we can return the indices of the complement and the current element.


## Time Complexity

- O(n) where n is the number of elements in the array. We only traverse the array once.


## Space Complexity

- O(n) for the hash map that stores up to n elements.


## Code

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}

        for i, num in enumerate(nums):
            complement = target - num

            if complement in num_map:
                return [num_map[complement], i]

            num_map[num] = i
```


## Example Usage

```python
nums = [2, 7, 11, 15]
target = 9
result = twoSum(nums, target)
print(result)  # Output: [0, 1]
```
