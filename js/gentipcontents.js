var tipData = new Vue({
    el: '#formdata',
    data: {
        name: '',
        urlBase: 'https://shinoharata.github.io/TipSensuWithTwitter/?name=',
    },
    computed: {
        url: function() {
            return this.urlBase + this.name;
        },
        urlTipTag: function() {
            return '<a href="' + this.urlBase + this.name + '" target="_blank">Tip Sensu</a>'
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
    },
    created: function() {}
});

$('#button').on('click', function() {
    console.log(tipData.url);
    $("#tipQR").html("");
    $("#tipQR").qrcode({ width: 240, height: 240, text: tipData.url });
});