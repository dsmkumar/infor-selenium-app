module.exports = {
    appUrl: 'http://trn11:sailo@11@192.168.1.33:8312/webui/servlet/login',
    browser: 'chrome', //firefox
    build: function(Builder) {
        return new Builder().forBrowser(this.browser).build();
    }
}