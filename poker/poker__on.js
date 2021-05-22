/*
 * Onjs.IN (c)
 * Desgin by 69
 */
(function(w,$){
'use strict';
var doc=w.document, dom=doc.createElement.bind(doc), loc=w.location, history=w.history, stl={}, o_o='#o__o';
try{stl=w.localStorage||stl}catch(l){}
w.$0={
popjs:{
$: !1,
__: $(dom('div')).addClass('popup').click(function(a){(a.target==this||$(a.target).is('.popup--close'))&&$0.popjs.__.trigger('off_p')}).on('off_p',function(e){e=$0.popjs,loc.hash==o_o?(e.$!==2&&(loc.jav=o_o,history.back(),e.$=2)):(w.getSelection().removeAllRanges(),e.__.removeClass('popup_visible').empty(),e.$=!1)}),
$s: {
69:{close:1,rgba:.18,addcl:'popup-con-top'},
on: '<form class="search" onSubmit="return Z.head.tags(this,1)"><ul><li><input name="q" type="text" maxlength="99" placeholder="*"/></li><li><button type="submit" class="box-28"><svg viewBox="0 0 24 24"><polyline points="9,5 16,12 9,19" style="fill:none;stroke:currentColor;stroke-width:2"></polyline></svg></button></li></ul></form>',
js:a=>{setTimeout(()=>{a.find('input').focus()}, 0)}
}},
popup:function(a){
var pp=this.popjs; 
if(!a)return pp.$&&pp.__.trigger('off_p');
if(!(typeof a=='object'))return this.popup(pp[a]);
var o=a[69], b=$(dom('div'));
pp.$=!0, (o&&'object'==typeof o)||(o={}), b.addClass(o.class||'popup-con'), o.addcl&&b.addClass(o.addcl), o.close||b.append($(dom('a')).addClass('popup--close')), pp.__.append(b).addClass('popup_visible')[0].style.backgroundColor='rgba(0,0,0,'+(o.rgba||.25)+')', b.append(a.on), typeof a.js=='function'&&a.js(b), o.hash&&(loc.jav=loc.hash,loc.hash=o_o);
return b
},
pop_img:function(s){
function Zoom(max_zom,a,b,c){
var bz={w:b.width(),h:b.height()}, bp={x:0,y:0}, cp={x:0,y:0}, zom=1, ii=0, jj=0, oo=0,  fset=null, down=!1;
b=b.css({transformOrigin:'0px 0px',transform:'translate(0px,0px) scale(1,1)'}).on("mousewheel DOMMouseScroll",wheel)[0];
this.reset=function(){bp.x=bp.y=cp.x=cp.y=oo=0,zom=1,update(2),b.style.transform='none'};
b.onmousedown=function(e){if(e.which!=1)return;e.preventDefault(),(e.target==this||e.target==c)?$0.popup():(oo?(oo=0,update(2)):(down=zom>1?1:3,w.onmouseup=function(){down==3&&$0.popup(),down=!1,this.onmouseup=null},c.style.transition='',fset=[e.clientX, e.clientY, cp.x, cp.y]))};
a[0].onmousemove=function(e){if(!down)return;e.preventDefault(),down=1, cp.x=(fset[2]+(e.clientX-fset[0])/zom), cp.y=(fset[3]+(e.clientY-fset[1])/zom), c.style.transform='translate('+cp.x+'px,'+cp.y+'px)'};
function update(j,i){c.style.transform=i||'none'}
function wheel(e){
e.preventDefault();
var delta=e.delta||e.originalEvent.wheelDelta, now=+Date.now();
if(now<ii)return;
ii=now+30, jj+=.1;
if(delta===undefined)delta=e.originalEvent.detail;
delta=Math.max(-1,Math.min(1,delta));
if(delta<1&&zom==1)return oo<2&&(oo==0&&(c.style.transition='transform .2s ease',cp.x=cp.y=0), ++oo,update(0,oo>1?'scale(.5,.5)':'scale(.7,.7)'));
if(max_zom<=zom&&delta==1||oo)return oo&&(oo=0,ii=now+200,update(0));
var az=a.offset(), px=e.pageX-az.left, py=e.pageY-az.top, tx=(px-bp.x)/zom, ty=(py-bp.y)/zom;
zom=Math.max(1,Math.min(max_zom,(zom+delta*(jj+zom/5)).toFixed(1))), jj=0;
bp.x=-tx*zom+px, bp.y=-ty*zom+py;
bp.x=bp.x>0?0:(bp.x+bz.w*zom<bz.w)?(-bz.w*(zom-1)):bp.x;
bp.y=bp.y>0?0:(bp.y+bz.h*zom<bz.h)?(-bz.h*(zom-1)):bp.y;
b.style.transition=(delta<1||zom>2)?'':'transform .1s ease';
b.style.transform='translate('+bp.x+'px,'+bp.y+'px) scale('+(zom)+','+(zom)+')'
}
}
return(function(){
var a=$0.popup({69:{hash:1,close:1,rgba:.93,class:'popup-img'}}), b, c, d, e;
b=dom('img'),b.src=s,c=dom('span'),c.style.fontSize='12px',b.onload=function(){c.innerText=(this.naturalWidth+'x'+this.naturalHeight)},e=dom('span'),d=$(dom('div')).addClass('popup-immg').appendTo(a).append(e),e.appendChild(b),a.append($(dom('div')).addClass('popup-abc').append(c).append($(dom('a')).html('{&nbsp; }').attr({href:b.src,target:'_blank'})).append($(dom('a')).text('Copy').click(function(){$0.copy(b.src)}))),s=new Zoom(30,a,d,e),c.title='Size vs Reset',c.onmousedown=function(){s.reset()};
return a
})()
},
print:function(s){
var a=arguments,m=a[1],i=0;
return(!!m&&'object'==typeof m) ? s.replace(/%(%|\d+)|%\{(\w+)\.?(\w*)\}/g,function(z,a,b,c){return!!a?'%'==a?a:m[a]:(a=m[b],(c&&a&&'object'==typeof a)?a[c]:a)}) : s.replace(/%%|%s/g,function(z){return'%s'==z?a[++i]:'%'})
},
tago:function(n){
if(!Math.max(1,n))return n;
var a=[Infinity,31536e3,2592e3,86400,3600,60,1];
var b='|years|months|days|hours|minutes|seconds'.split('|');
var c=Math.ceil(Date.now()/1e3-n), d='ago', i=7;
0>c&&(c=-c,d='later');
while(i--){
if(c<a[i-1])return $0.print('%s %s %s', (c/a[i]).toFixed(i<4?1:0), b[i], d)
}},
json:function(a){if(!!a&&'object'==typeof a)return JSON.stringify(a);var b={};try{b=JSON.parse(a)}catch(c){b.$err=function(){return c}}return b},
mfr:function(I,l){return I>l?this.mfr(l,I):Math.floor(Math.random()*(++l-I)+I)},
fnjs:function(s){return(''+s).replace(/(.*?)(?=(\.|$))/,function(z,a){return a.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')})},
copy:function(a,b){var e=(a&&'object'==typeof a&&a.select),d=doc,c=a;e||(c=d.createElement('textarea'),c.value=a,c.readOnly=1,c.style.width='1px',c.style.height='1px',d.body.appendChild(c)),c.select(),d.execCommand('Copy'),c.blur&&c.blur(),w.getSelection().removeAllRanges(),e||d.body.removeChild(c),typeof b=='function'&&b(a)}
};
$(doc).ready(()=>{
doc.body.appendChild($0.popjs.__[0]);
});
}) (window, jQuery);