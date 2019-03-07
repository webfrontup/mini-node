function countingSort(iArr, max) {
    var n = iArr.length;
    var oArr = [];
    // 创建长度max的数组，填充0
    var C = [];
    for (var i = 0; i <= max; i++) {
        C[i] = 0;
    }
    // 遍历输入数组，填充C
    // 遍历iArr
    for (var j = 0; j < n; j++) {
        C[iArr[j]]++;
    }
    // console.log(C, 'CCCC') // [ 0, 2, 1, 1, 0, 1 ] 'CCCC' 11235填充及标志
    // 遍历C，输出数组
    for (var k = 0; k <= max; k++) {
        // 按顺序将值推入输出数组，并将对应标志位减1
        // console.log(C[k]-- > 0, "C[k]-- > 0");
        while (C[k]-- > 0) { // 减减之后小于0
            oArr.push(k);
            // console.log(C[k]-- > 0, "C[k]-- > 0", oArr);
        }
    }
    return oArr;
}

console.log( countingSort([2, 1, 3, 1, 5], 5))