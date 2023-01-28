var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const output = [];

  for (let k = 0; k < nums2.length; k++) {
    if (map.hasOwnProperty(nums2[k])) {
      continue;
    } else {
      map[nums2[k]] = k;
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    let nums1EleIndexInNums2Array = map[nums1[i]];

    let currMaxVal = -1;

    for (let j = nums1EleIndexInNums2Array; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        currMaxVal = nums2[j];
        break;
      }
    }
    output.push(currMaxVal);
  }
  return output;
};
