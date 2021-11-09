/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
	if (nums.length === i) return 1;
	
	return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, long=0, i=0) {
	if (i === words.length) return long;

	if (words[i].length > long) long = words[i].length;

	return longest(words, long, i+1)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out="", i=0) {
	if (i >= str.length) return out;

	out += str[i];

	return everyOther(str, out, i + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, end=str.length-1, begin=0) {
	if (begin > str.length/2) return true;

	if (str[begin] !== str[end]) return false;

	return isPalindrome(str, end-1, begin+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
	if (i === arr.length) return -1;

	if (arr[i] === val) return i;

	return findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out="", i=0) {
	if (str.length === i) return out;

	out = str[i] + out;

	return revString(str, out, i+1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[]) {
	for (let key in obj) {
		if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
			gatherStrings(obj[key], out);
		} else if (typeof obj[key] === "string") {
			out.push(obj[key]);
		}
	}
	return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length-1, index=-1) {
	if (low > high) return index;

	let mid = Math.floor((high+low)/2);

	if (arr[mid] > val) return binarySearch(arr, val, low, high=mid-1);
	else if (arr[mid] < val) return binarySearch(arr, val, low=mid+1, high);
	else return binarySearch(arr, val, low, high=low-1, index=mid);
	
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
