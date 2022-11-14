function pillars(numPill, dist, width) {
    let mySum = (numPill - 2) * width;
    let mySum2 = (100 * dist) * (numPill - 1);
    if (numPill == 1) {
        return 0;
    } else {
        return mySum + mySum2;
    }
}

console.log(pillars(1, 10, 10)); // 0
console.log(pillars(2, 20, 25)); // 20000   
console.log(pillars(11, 15, 30)); // 15270