(function($){
var i=!1,j=!1,o=!1;
var cute=function(a,b,c){
if(i)return;
var l=$('#'+b), lw=l.width(), p=$(l.data('body'));
if("open"===a||"toggle"===a&&!o){
i=o=!0, l.css({visibility:'visible',transform:'translateX('+lw+'px)'}), setTimeout(()=>{i=!1},400), j=function(e){(p.hasClass("sidr-open")&&e.target==this)&&(e.preventDefault(),$.sidr("close","sidr-main") )}, p.addClass('sidr-open').on("click",j)
}else{
i=!0,o=!1, l.css({transform:'translateX(0px)'}), setTimeout(()=>{l.removeAttr('style'),i=!1},500), j&&(p.removeClass('sidr-open').off('click',j),j=!1)
}
};
var s={reset:function(e){i=$('#body').removeClass('sidr-open'),j&&i.off('click',j),i=e,j=o=!1},open:function(e,t){cute("open",e,t)},close:function(e,t){cute("close",e,t)},toggle:function(e,t){cute("toggle",e,t)}};
$.sidr=function(t){return s[t]&&s[t].apply(this,Array.prototype.slice.call(arguments,1))}
}) (jQuery);

(function(w){
var doc=w.document, dom=doc.createElement.bind(doc);
var sidrr=function(t){
var i=$.extend({name:"sidr",speed:350,side:"left",body:"#body",displace:!1},t),o=i.name,a=$("#"+o);
if(!a.length){
a=$(dom('div')).attr("id",o).addClass("sidr sidr_"+i.side).appendTo($('#body'));
t=$(dom('ul')).html('<li><span style="height:48px;display:inline-block"><img src="https://i.imgur.com/rc67JFX.png"/></span></li><li><a href="/cat/meo-vat-cs.1/">M\u1eb9o V\u1eb7t Cs</a></li><li><a href="/cat/thu-gian.8/">Th\u01b0 gi\u00e3n</a></li>');
Z.head.event($(dom('div')).addClass('sidr-inner').append(t).appendTo(a).find('a'))
}
return a.data({speed:i.speed,side:i.side,body:i.body,displace:i.displace})
};
$(doc).ready(function(){
$('#owo--s').on('click', function(){$0.popup('$s')});
$('#owo--m').on('touchstart click', function(t){t.stopPropagation(),$.sidr("toggle","sidr-main")});
var mm=sidrr({name:'sidr-main',speed:369}), tt=~0;
/*
$(w).resize(function(){
var mw=mm[0].offsetWidth, bw=858, sw=($(doc).width()-bw)/2-mw;
if(sw>0){
tt==sw||(tt>0||($.sidr('reset',!0),mm.addClass('sidr_bar').css({height:'auto',visibility:'visible'})), mm[0].style.transform='translateX('+(mw)+'px)',tt=sw)
}else{
tt==0||($.sidr('reset',!1),mm.removeClass('sidr_bar').removeAttr('style'),tt=0)
} }).resize()
*/
})
}) (window);