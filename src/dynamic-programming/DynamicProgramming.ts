function recursionFib(n: number): number {
    if (n == 1 || n == 2) return 1;
    return recursionFib(n - 1) + recursionFib(n - 2);
}

function memoizeRecursionFib(n: number, cache = [0, 1, 1]): number {
    if (cache[n]) return cache[n];

    cache[n] =
        memoizeRecursionFib(n - 1, cache) + memoizeRecursionFib(n - 2, cache);
    return cache[n];
}

function basicLoop(n: number, cache = [0,1,1]): number {
    if (n == 1 || n == 2) return 1;
    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i-1] + cache[i-2]
    }
    return cache[n];
}

function fastLoop(n: number): number {
    if (n == 1 || n == 2) return 1;
    let first = 1, second = 1;
    for (let i  = 3; i <= n; i ++) {
        second = first + second;
        first = second - first;
    }
    return second;
}

const n = 5;

// console.time("basic");
// console.log(recursionFib(n));
// console.timeEnd("basic");

// console.time("memoize");
// console.log(memoizeRecursionFib(n));
// console.timeEnd("memoize");

console.time("basicLoop");
console.log(basicLoop(n));
console.timeEnd("basicLoop");

console.time("fastLoop");
console.log(fastLoop(n));
console.timeEnd("fastLoop");
