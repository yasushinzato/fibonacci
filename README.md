
## フィボナッチ数列の計算

```js:fibonacci.js
function fib(n) {
    if(n === 0 ){
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n -2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
```

フィボナッチは、上記のコードだと、売買に近い形で計算回数が増え、40回のFor文で2秒とかかかる。
- nが2のときのfib(2)は、fib(1) + fib(0)　＝　0+0+1 で1回計算
- nが3のときのfib(3)は、fib(2) + fib(1)　＝ 1+0+1 で2回計算
- nが4のときのfib(4)は、fib(3) + fib(2)　＝ 2+1+1 で4回計算
- …
- nが8のときのfib(8)は、fib(7) + fib(6)　＝ 20+12+1 で33回計算



回を重ねる毎に増える処理の増え方を指数オーダーといい、
`O(a^n)`
と表す。


## 線形オーダーでの実装

指数オーダーで何度も同じ処理を繰り返さなくても良いように、線形オーダーのアルゴリズム実装をする。

```js:fibonacci.js
const memo = new Map();
memo.set(0,0);
memo.set(0,0);

function fib(n) {
	if (memo.has(n)) {
		return memo.get(n);
	}
	const value = fib(n - 1) + fib(n - 2);
	memo.set(n, value);
	return value;
}
```




### 処理時間を調査するプロファイル
「nodegrind」というプロファイルツールを使用.以下のコマンドでインストール
```
npm update -g npm@5.7.1
sudo apt-get install build-essential python
npm install -g nodegrind
```
npmの更新
ツールのインストール  10分程度かかる。
nodegrindのインストール

ツールを使うときは以下のコマンドでjsファイルを実行する
`nodegrind -o hoge_nodegrind.cpuprofile hogehoge.js`
そうすると、「hoge_nodegrind.cpuprofile」が作成されるので、Chromeのデベロッパーツールを起動して、
[More Tools]を選択し、[JavaScript Profiler]おクリック「Record Java Script CPU Profile」画面が表示されたら、[Load]をクリックしてファイルを読み込む

補足：cpuprofile拡張子のファイルはgitgnoreファイルでGitHubに管理しないようになっている。



