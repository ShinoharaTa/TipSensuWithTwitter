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
        amount: '3.90000000',
        urlBase: 'https://twitter.com/intent/tweet?text=@tipsensu%20tip%20',
        flg1: false,
        flg2: false,
        flg3: false,
        tipButtonActive: false,
        lists: [],
        money: {
            name: '',
            code: '',
            imgUrl: '',
        }
    },
    methods: {
        activeCheck: function() {
            if (this.code !== '') {
                this.flg1 = true;
            } else {
                this.flg1 = false;
            }
            if (this.name !== '') {
                this.flg2 = true;
            } else {
                this.flg2 = false;
            }
            if (this.flg1 === true && this.flg2 === false) {
                this.tipButtonActive = true;
            } else {
                this.tipButtonActive = false;
            }
        },
        setCode: function(str) {
            this.money.code = moneyCode[str].code;
            this.money.name = moneyCode[str].name;
            this.money.imgUrl = moneyCode[str].imgUrl;
            // tipData.activeCheck();
        }
    },
    created: function() {
        this.lists = moneyCode;
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
        if (arg['amount'] != undefined) {
            this.amount = escapeHtml(arg['amount']);
            console.log(this.amount);
        }
        if (arg['code'] != undefined) {
            // this.code = escapeHtml(arg['code']);
            this.setCode(escapeHtml(arg['code']));
            //console.log(this.name);
        }
    }
})