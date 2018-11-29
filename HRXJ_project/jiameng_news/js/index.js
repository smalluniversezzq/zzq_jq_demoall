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


    $(".btn").click(function(event) {
        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if ($('#company').val() == '') {
            alert('提交失败');
            return;
        }
        if ($('#realName').val() == "") {
            alert('提交失败');
            return;
        }
        if (!reg.test($('#tel').val())) {
            alert('提交失败');
            return;
        }
        alert('提交成功');

    });
})