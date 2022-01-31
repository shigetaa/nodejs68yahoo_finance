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
