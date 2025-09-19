// pwa.js - inject manifest and theme color
var e = document.createElement('link');
e.rel = 'manifest';
e.href = 'https://finetouchadvertising.github.io/finetouch-pwa/manifest.json';
document.head.appendChild(e);

var t = document.querySelector('meta[name="theme-color"]');
if(!t){
    t = document.createElement('meta');
    t.name = 'theme-color';
    document.head.appendChild(t);
}
t.content = '#00695c';
