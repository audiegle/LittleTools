// ==UserScript==
// @name         IEEE_To_SCI-Hub
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       PeterLi
// @include      *://ieeexplore.ieee.org/*
// @include      *://www.sci-hub.*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    if(document.URL.split('.')[1] == 'ieee')
    {
        var title_tag = document.getElementsByClassName('document-title')[0];
    if(title_tag)
    {
        var txt = title_tag.children[0].innerText;
        var ntxt = document.createElement('a')
        ntxt.setAttribute('href','https://www.sci-hub.ren?title=' + txt);
        ntxt.text = txt;
        title_tag.replaceChild(ntxt, title_tag.children[0]);
    }
    }
    if(document.URL.split('.')[1] == 'sci-hub')
    {
        var ipt = document.getElementsByName('request')[0];
        var param = window.location.search;
        if(param != "")
        {
            var title = decodeURI(param).substr(1).split("=")[1];
            ipt.value = title;
            var okbt = document.getElementById('open');
            if(okbt != null){
                okbt.click();
            }
        }
    }
})();