function escapeHtml(str) {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

var tipData = new Vue({
    el: '#formdata',
    data: {
        name: '',
        nameCheck: false,
        moneyName: '',
        code: '',
        imgUrl: '',
        amount: '3.90000000',
        urlBase: 'https://twitter.com/intent/tweet?text=@tipsensu%20tip%20',
    },
    created: function () {
        var arg = new Object;
        var pair = location.search.substring(1).split('&');
        for (var i = 0; pair[i]; i++) {
            var kv = pair[i].split('=');
            arg[kv[0]] = kv[1];
        }
        if (arg['name'] != undefined) {
            this.name = escapeHtml(arg['name']);
            this.nameCheck = true;
            console.log(this.name);
        }
    }
})

var moneyList = new Vue({
    el: '#moneyList',
    data: {
        lists: [
            {
                "name": "BitCoin",
                "code": "BTC",
                "active": true,
                "imgUrl": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
            },
            {
                "name": "Monacoin",
                "code": "MONA",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/attachments/426701758694162432/436555899344125962/monacoin.png"
            },
            {
                "name": "KumaCoin",
                "code": "KUMA",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/attachments/426701758694162432/436555934328946698/KumaCoin.png"
            },
            {
                "name": "NEETCOIN",
                "code": "NEET",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/icons/372405597284597760/34e12134bb7b2b04d64cad785391f6fb.webp"
            },
            {
                "name": "BitZeny",
                "code": "ZNY",
                "active": true,
                "imgUrl": "https://raw.githubusercontent.com/BitzenyCoreDevelopers/logo/master/png/bitzeny-symbol.png"
            },
            {
                "name": "eXperimence Points",
                "code": "XP",
                "active": true,
                "imgUrl": "https://xpcoin.io/wp-content/uploads/2017/12/apple-icon-180x180-1.png"
            },
            {
                "name": "Sprouts",
                "code": "SPRTS",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/attachments/433604504659820554/433704225818804254/sprouts.png"
            },
            {
                "name": "Ringo",
                "code": "RIN",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/icons/415336918247800847/105f78fb44da3daa8feab90e9faf1f10.webp"
            },
            {
                "name": "DigiByte",
                "code": "DGB",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/icons/407875372835799041/448a2181743b33ddaf0a686873232239.webp"
            },
            {
                "name": "Diverse",
                "code": "DVRS",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/icons/398098401478049792/d63c270594fb52d4b3a1aecab3e45704.webp"
            },
            {
                "name": "DSTRA",
                "code": "DST",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/icons/417469579804147715/e86450f6c230e409c7c16d99ed537f03.webp"
            },
            {
                "name": "DogeCoin",
                "code": "DOGE",
                "active": true,
                "imgUrl": "https://raw.githubusercontent.com/dogecoin/dogecoin.com/gh-pages/imgs/dogecoin-300.png"
            },
            {
                "name": "Phore",
                "code": "PHR",
                "active": true,
                "imgUrl": "https://assets.coingecko.com/coins/images/1129/large/phore.png"
            },
            {
                "name": "SHIELD",
                "code": "XSH",
                "active": true,
                "imgUrl": "https://cdn.discordapp.com/icons/369187680442908686/15caaf794562679f7858e3cfbb660888.webp"
            },
            {
                "name": "StrongHands",
                "code": "SHND",
                "active": true,
                "imgUrl": "https://3.bp.blogspot.com/-icMEbDmEfqk/WIHlPI9QT9I/AAAAAAABBN0/FvLi9V7Omnse4wxncb4YDsgQgRI9mDcRgCLcB/s800/sports_protein.png"
            },
            {
                "name": "Ethereum",
                "code": "ETH",
                "active": false,
                "imgUrl": "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
            },
            {
                "name": "Nekonium",
                "code": "NUKO",
                "active": false,
                "imgUrl": "https://cdn.discordapp.com/icons/331722081186349056/5df4c51112fbf0dd06f457c93a588580.webp"
            },
            {
                "name": "Bitcoin Cash",
                "code": "BCH",
                "active": false,
                "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Bitcoin_Cash_Logo_%28proposal%29.png"
            },
            {
                "name": "Ripple",
                "code": "XRP",
                "active": false,
                "imgUrl": "https://assets.coingecko.com/coins/images/44/large/ripple.png"
            },
            {
                "name": "Litecoin",
                "code": "LTC",
                "active": false,
                "imgUrl": "https://assets.coingecko.com/coins/images/2/large/litecoin.png"
            },
            {
                "name": "Koto",
                "code": "KOTO",
                "active": false,
                "imgUrl": "https://cdn.discordapp.com/icons/400107631810969609/5830c763cda4ab9eebf45cbf6f5da09b.webp"
            },
            {
                "name": "NANJCOIN",
                "code": "NANJ",
                "active": false,
                "imgUrl": "./notimage.png"
            },
            {
                "name": "Necony token",
                "code": "NCN",
                "active": false,
                "imgUrl": "./notimage.png"
            },
            {
                "name": "Monacoin-Testnet",
                "code": "MONAT",
                "active": true,
                "imgUrl": "https://raw.githubusercontent.com/monacoinproject/monacoin/master-0.15/src/qt/res/icons/bitcoin_testnet.ico"
            },
            {
                "name": "BitZeny-Testnet",
                "code": "ZNYT",
                "active": true,
                "imgUrl": "./notimage.png"
            }
        ]
    },
    methods: {
        setCode: function (getcode, money, url) {
            tipData.code = getcode;
            tipData.moneyName = money
            tipData.imgUrl = url
        }
    }
})
