# Yahoo!Financeから為替や株の情報を取得する
定期的に取得したいデータには、為替や株の情報があります。
ここでは、Yahoo!Financeのデータを利用して、為替や株の情報を取得するプログラムを作成していきます。

## Yahoo!Fainance
Yahoo!ファイナンスのWebサイトを見ると、株式、FX、為替の速報に加えて、株価予想やニュースなど、様々な金融情報が掲載されています。

[Yahoo!Finance<br>https://finance.yahoo.co.jp/](https://finance.yahoo.co.jp/)

## FX・為替情報を取得する
為替情報は、Yahoo!ファイナンスの以下のページで取得できます。
末尾に `code` がついており、ここに3文字の通貨コードの組み合わせを指定することで、任意の通貨ペアを見ることが出来ます。

[Yahoo!Finance > FC.為替 > 米ドル/円<br>https://info.finance.yahoo.co.jp/fx/detail/?code=USDJPY](https://info.finance.yahoo.co.jp/fx/detail/?code=USDJPY)

以下が、為替コートの例ですが、例えば、人民元と日本円のくみあわせであれば、`code=CNHJPY`というページにアクセスすれば情報を美津子とができます。

| 通貨コード | 説明                 |
| :--------- | :------------------- |
| JPY        | 日本円               |
| USD        | 米ドル               |
| EUR        | ユーロ               |
| AUD        | 豪ドル               |
| GBP        | イギリスポンド       |
| NZD        | ニュージーランドドル |
| CAD        | カナダドル           |
| CHF        | スイスフラン         |
| ZAR        | ランド               |
| CNH        | 人民元               |

### cheerio-httpcli モジュールをインストール
HTMLのダウンロードを行うため、「cheerio-httpcli」モジュールをインストールします。

```bash
npm i cheerio-httpcli
```

### FX・為替情報を取得するプログラム
Yahoo!Financeから為替情報を取得するプログラムを`fx-usdjpy.js`と言うファイル名で作成していきます。

```javascript
var client = require('cheerio-httpcli');

// HTMLをダウンロード
var code = 'USDJPY'; // 通貨の指定
var url = "https://info.finance.yahoo.co.jp/fx/detail/";
// ページの取得
client.fetch(url, { "code": code }, function (err, $, res) {
	if (err) { console.log(err); return; }
	// 値を取得
	var bid = $("#USDJPY_detail_bid").text();
	var ask = $("#USDJPY_detail_ask").text();
	// 結果を表示
	console.log("Bid=" + bid);
	console.log("Ask=" + ask);
});
```
実行するには、以下のコマンドを実行します。
```bash
node fx-usdjpy.js
```
```bash
Bid=115.544
Ask=115.54
```

## 株価を取得する
今度は、株情報を取得してみます。
為替の時と同じく、特定のURLに証券コードを指定する事で、その情報が閲覧出来ます。
証券コードは、上場している会社毎に割り振られているコードです。
例えば、以下のトヨタ自動車には**7203.T**と言うコードが割り振られています。

[Yahoo!Finance > 株式 > トヨタ自動車<br>https://stocks.finance.yahoo.co.jp/stocks/detail/?code=7203.T](https://stocks.finance.yahoo.co.jp/stocks/detail/?code=7203.T)

証券コードは、以下のページより一覧を取得出来ます。

[日本取引所東証上場銘柄一覧<br>https://www.jpx.co.jp/markets/statistics-equities/misc/01.html](https://www.jpx.co.jp/markets/statistics-equities/misc/01.html)

### 株価情報を取得するプログラム
Yahoo!Financeから株価情報を取得するプログラムを`kabu.js`と言うファイル名で作成していきます。

```javascript
var client = require('cheerio-httpcli');

// HTMLをダウンロード
var code = '7203.T'; // 証券コードの指定
var url = "https://stocks.finance.yahoo.co.jp/stocks/detail/";
// ページの取得
client.fetch(url, { "code": code }, function (err, $, res) {
	if (err) { console.log(err); return; }
	// 値を取得
	var price = $("#root > main > div > div > div.XuqDlHPN > div:nth-child(2) > section > div > header > div.nOmR5zWz > span > span > span").text().replace(/\s/g, "");
	var name = $("#root > main > div > div > div.XuqDlHPN > div:nth-child(2) > section > div > header._3fMM43u_ > div > h1").text();
	// 結果を表示
	console.log("+ code=" + code);
	console.log("| name=" + name);
	console.log("| price=" + price);
});
```
実行するには、以下のコマンドを実行します。
```bash
node kabu.js
```
```bash
+ code=7203.T
| name=トヨタ自動車(株)
| price=2,252.5
```