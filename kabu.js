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


