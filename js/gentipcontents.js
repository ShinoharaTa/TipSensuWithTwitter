var tipData = new Vue({
    el: '#formdata',
    data: {
        name: '',
        urlBase: 'https://shinoharata.github.io/TipSensuWithTwitter/?name=',
        urlBuff: '', 
        amount: '',
        lists: [],
        money: {
            name: '',
            code: '',
            imgUrl: '',
        }
    },
    computed: {
        url: function() {
            var gen_url = this.urlBase + this.name;
            if(this.money.code != ''){
                gen_url = gen_url + '&code=' + this.money.code;
            }
            if(this.amount != ''){
                gen_url = gen_url + '&amount=' + this.amount;
            }
            // this.urlBuff = gen_url;
            return gen_url;
        },
        urlTipTag: function() {
            return '<a href="' + this.url + '" target="_blank">Tip Sensu</a>'
        }
    },
    methods: {
        urlCopy: function(str) {
            var temp = document.createElement('div');

            temp.appendChild(document.createElement('pre')).textContent = str;

            var s = temp.style;
            s.position = 'fixed';
            s.left = '-100%';

            document.body.appendChild(temp);
            document.getSelection().selectAllChildren(temp);

            var result = document.execCommand('copy');

            document.body.removeChild(temp);
            // true なら実行できている falseなら失敗か対応していないか
            // return result;
        },
        setCode: function(str) {
            this.money.code = moneyCode[str].code;
            this.money.name = moneyCode[str].name;
            this.money.imgUrl = moneyCode[str].imgUrl;
            // tipData.activeCheck();
        },
        clearCode: function(){
            this.money.code = '';
            this.money.name = '';
            this.money.imgUrl = '';
        }
    },
    created: function() {
        this.lists = moneyCode;
    }
});

$('#button').on('click', function() {
    console.log(tipData.url);
    $("#tipQR").html("");
    $("#tipQR").qrcode({ width: 240, height: 240, text: tipData.url });
});