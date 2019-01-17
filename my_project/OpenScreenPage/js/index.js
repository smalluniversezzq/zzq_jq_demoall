// 全局变量
var __global = {};
if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1) {
    __global.os = 'android';
} else if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    __global.os = 'ios';
} else {
    __global.os = 'android';
}
require.config({
    paths: {
        jquery: 'jquery.min',
        Const: 'const',
        bridge: 'bridge.' + __global.os,
    }
})
require(['jquery', 'bridge'], function($, bridge) {


    // $(".btn").click(function(event) {
    //     bridge.callApp('applyLimitBus');

    // });
})