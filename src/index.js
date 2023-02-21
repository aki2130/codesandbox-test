/*
const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言" //エラー吐く

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// val3 = "const変数を上書き"; //"val3" is read-only

// //const変数は再宣言不可能
// const val3 = "const変数を再宣言"

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jake";
// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird"
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」
// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) { //関数を入れていく変数
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// const func3 = (str) => str;
// console.log(func2("func2です"));
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1+num2;
// }
// console.log(func4(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1); //[1, 2]
// console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //...は展開して順番に処理する

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [20, 40];

// const arr6 = [...arr4]; //要素を一つずつ分解して処理するイメージ
// arr6[0] = 100;
// console.log(arr6); //[100, 20]
// console.log(arr4); //[10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; //同じところを参照してしまうので避ける。
// arr8[0] = 100;
// console.log(arr8); //[100, 20]
// console.log(arr4); //[100, 20]

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけぇ"];
// //従来のfor文を使ったやり方
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

//returnされた結果に基づいて新しい配列を作る
// const nameArr2 = nameArr.map((name) => { //map関数は引数に配列の中身が順番に入っていく
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index}は${name}です`));
//2つ目の引数を取ることもできて、何番目かが入る

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1)

// const num = '1300';
// //toLocalString : 3桁区切りのカンマ表示をしてくれる
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString : '数値を入力してください'
// console.log(formattedNum);

// 関数のreturnに三項演算子
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// };
// console.log(checkSum(10, 200));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = false;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
