'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
memo.set(2,1);  // トリボナッチ数列

// O(n)線形オーダー実装
function fib(n) {
    // 既に記録されている数字はそのまま返す
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n -1) + fib(n - 2) + fib(n - 3);// トリボナッチ数列で3つ目を追加
    memo.set(n, value);
    return value;

// 以下は指数オーダーの実装。保存されないため、毎回同じ再帰処理を繰り返す。
// nが3のときのfib(3)は、fib(2) + fib(1)　＝ 1+0+1 で2回計算
// ……
// nが8のときのfib(8)は、fib(7) + fib(6)　＝ 20+12+1 で33回計算
    // if(n === 0 ){
    //     return 0;
    // } else if (n === 1) {
    //     return 1;
    // }
    // return fib(n - 1) + fib(n -2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}