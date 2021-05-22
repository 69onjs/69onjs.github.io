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

var a__t={
temp: [{
tag:'div',
attr:'onj',
html: '<ul><li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a data-onjs href="%1" itemprop="url" title="%10"><span itemprop="title">%10</span></a></li> | <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a data-onjs href="%2" itemprop="url" title="%20"><span itemprop="title">%20</span></a></li> | <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a data-onjs href="%3" itemprop="url" title="%30"><span itemprop="title">%30</span></a></li></ul>',
js:'cat'
},

{tag:'div',
attr:'content',
son:[
{tag:'div',
attr:'con__head',
son:{tag:'h1',js:'title'}
},
{tag:'div',attr:'con__stt',js:'ti__vs'},
{tag:'div',
attr:'con__body',
js:function(a){
this.append(a.body), a=this.find('.con--bim>img').css({visibility:'hidden'}), Z.debug(()=>{a.css({visibility:'visible'})}, 500)
}},
{tag:'div',
js:function(a){
this.html($0.print('<ul class="social"><li><a class="soc--fb" href="https://www.facebook.com/sharer.php?u=%0" title="Share on Facebook" target="_blank"></a></li><li><a class="soc--it" href="http://www.reddit.com/submit?url=%0" title="Share on Reddit" target="_blank"></a></li><li><a class="soc--tw" href="https://twitter.com/share?url=%0" title="Share on Twitter" target="_blank"></a></li></ul>', [a.link]))
}
}
]
},

{tag:'div',js:'art__l'},

{tag:'div',
attr:{id:'onj__cm', class:'block'},
son:{
tag:'div',
attr:{id:'star__c'},
html: '<b class="inb">%0</b> <span class="io__5s"></span>&nbsp; <span class="f16">%1 l\u01b0\u1ee3t \u0111\u00e1nh gi\u00e1.</span>',
js:'star'
}
}
],
temp__c:[
{tag:'div',
attr:'menu',
son:[
{tag:'div',
js:function(){
var a=[],b=0,c=a__t.t_comm.stt,e;
this.css({padding:'6px 0'}).html('<span class="mid" style="display:inline-block;width:69px;height:80px"><img src="http://onjs.in/forum/smileys/ym2.png" alt=""/></span>');
while(++b<=5)e=$(dom('span')).addClass('io__5s').attr('data-x',b), a.push(e[0]), this.append(e);
e.addClass('io__5x'),e=$(dom('span')).addClass('green f14 inb').text(c[4])[0],this.append(doc.createTextNode(' ')).append(e);
b=(n)=>{Art.cf.sn=n, e.textContent=c[n], a.some((i,j)=>{i.classList[j<n?'remove':'add']('io__5x')})};
this.on('mouseover click',function(e){e=e.target.dataset,e.x&&b(e.x)})
}
},
{tag:'form',
attr:{class:'f_fc',method:'post'},
js:function(){this.submit(function(e){e.preventDefault(),Art.post(this)})},
son:[
{tag:'input',
attr:{type:"text", name:"name", maxlength:"25", placeholder:"T\u00ean c\u1ee7a b\u1ea1n\u2026"},
js:function(){this.val(Art.auth().name)}
},
{tag:'br'},
{tag:'textarea', attr:{name:"cmt", rows:"3", maxlength:"369", placeholder:"Vi\u1ebft g\u00ec \u0111\u00f3\u2026"}
},
{tag:'br'},
{tag:'input', attr:{type:"submit", name:"cc", value:"Post"}
}
]
}
]
},
{tag:'div', attr:{id:'init__c'},
son:{tag:'p', attr:'more__c',
js:function(){this.one('click', function(){Art.wait(0,this)}),Z.debug(()=>{this.click()},400)}
}
}
],

t_app: {
tag:'ul',
attr:'cmts',
son:[{
tag:'li',
attr:'cmt__user',
html:'<span class="cmt--uon"></span><a class="cmt--uli"><b>%{name}</b>&nbsp; <span class="cmt--utm">%{time}</span></a>',
js:function(a,b){return $0.print(b,a)}
},
{tag:'li',attr:'cmt__con',js:'cmt'},
{tag:'li',
attr:'cmt__act',
son:[{tag:'a',attr:'cmt--like',js:function(a){this.one('click',function(b){b=$(this).addClass('cmt--liked').find('.cmt---num'), b.text(b.text()*1+1), $.ajax({url:'/apps/json/like.php?id='+a.id})}).html('<span class="cmt---num">'+a.vote+'</span>')}}, {tag:'span',html:' &nbsp; '}, {tag:'a',js:function(a){Art.cf.mng&&this.html('===').attr({href:'/apps/for.cm.php?id='+a.id, target:'_blank'})}}]
}]
},
t_comm: {
stt: '|R\u1ea5t t\u1ec7|Kh\u00f4ng th\u00edch|T\u1ea1m \u0111\u01b0\u1ee3c|T\u1ed1t|Tuy\u1ec7t v\u1eddi'.split('|'),
load: {start:dom('a'), wait:dom('span')},
post: {
start:'Post', wait:'Wait\u2026', done:'Ok',
err: {
name:'T\u00ean qu\u00e1 d\u00e0i ho\u1eb7c qu\u00e1 ng\u1eafn.', art:'B\u00e0i vi\u1ebft kh\u00f4ng c\u00f3.'
}}
}
};

var Art={
id:0,
cf:0,
init: function(a,b,c){
this.id=a[1];
this.cf={mng:b,sn:4,st:0};
return this.wait(1), 0;
},
auth: function(a){
if(!a)return!!stl.on__y?$0.json(stl.on__y):{name:''};
stl.on__y=$0.json({name:a.name.value.trim()});
},
wait: function(a,b){
var c=a__t.t_comm.load;
switch(a){
case 3:
a=this.cf.mc, b?a.empty():a.html(c.start).one('click',function(){Art.wait(0,this)});
break;
case 2:
var y=$(w).height(), l=$(b).parent().css({minHeight:y+'px'})[0];
l&&(cc.scY($(b).offset().top, y*(y>666?.15:.1), 250), cc.abc(l,{},a__t.temp__c));
break;
case 1:
$('#star__c').one('click',function(){Art.wait(2,this)}).one('mouseenter',function(){$(this).click()});
break;
default:
this.cf.mc=$(b).html(c.wait), Z.debug(()=>{this.get()}, 400)
}
},
app: function(a,b){
var c=a__t.t_app, d=$(dom('div')).hide(), i=this.cf.mc, j;
a.some(e=>{(e&&'object'==typeof e)&&(e.id>0&&(this.cf.st++),e.time=$0.tago(e.time),cc.abc(d[0],e,c))});
b&&(j=i.parent().find('>div').eq(0)),(j&&j.length)?(d=d.children().hide(),j.prepend(d)):(b=0,d.insertBefore(i)),b?d.slideDown(250):d.fadeIn()
},
get: function(){
Z.debug($.ajax({
url:'/apps/json/cmt.php',
data:{id:this.id,st:this.cf.st},
cache:!1,
dataType:'json',
processData:!0,
timeout:1e4
}).done(d=>{
this.id==d.id&&(this.wait(3,d.end),this.app(d.cmt))
}).fail(()=>{this.wait(3)}))
},
post: function(o){
var f=(a,c)=>{
var b=o.cc, d=a__t.t_comm.post;
a==2?(c&&alert(d.err[c]),b.value=d.start,b.disabled=!1):(a==0?(b.value=d.wait,b.disabled=!0):(b.value=d.done))
};
var url='/apps/json/cmp.php?id='+this.id;
var data={name:o.name.value.trim(), cmt:o.cmt.value, star:this.cf.sn};
this.auth(o), f(0);
Z.debug(()=>{
Z.debug($.ajax({
url: url,
type: 'POST',
data: data,
dataType: 'json',
processData: !0,
cache: !1,
timeout: 1e4,
success: d=>{
d.error?f(2,d.error):(f(2),this.app(d,1))
}}).fail(()=>{f(2)}))
},300)
}
};

var cc={
ani:0,
scY:function(a,b,c){$(w).scrollTop(Math.max(0,a-b))},
Ani:function(a){
var b=w.requestAnimationFrame||w.webkitRequestAnimationFrame;
var c=w.cancelAnimationFrame||w.webkitCancelAnimationFrame;
!!b?(this.ani&&c(this.ani),this.ani=b(a)):a()
},
abc:function(a,b,c){
var f=(l)=>{
var e=$(dom(l.tag)), d=l.attr;
d&&e[typeof d=='string'?'addClass':'attr'](d), a.appendChild(e[0]), d=l.html, l.js&&(d=typeof l.js=='function'?l.js.call(e,b,d):d?$0.print(d,b[l.js]):b[l.js]), d&&e.append(d), l.son&&this.abc(e[0],b,l.son)
};
Array.isArray(c)?c.some(f):f(c)
}
};

var cus={
cf: {bug:[], dm:{}, sc:{}, u:0, o:0},
core:{
exec: function(s,ss,z){
var a=this.b,ae=this.e,b,c,d;
d=ae.$0.exec(s)||[],b=d[1]?ae[d[1]]:0;
if(b){
if('function'==typeof b)return this.exec(b(s,ss,z));
var m_l, m_e, m_s;
typeof b.a=='function'?(c=b.a(s,ss,z)||{}, m_l=c.a, m_s=c.save):(c=b.a.exec(s), c&&(m_l=$0.print(''+b.b,c), m_s=c));
if(!!m_l){
a.a=b.d, a.b=m_s, a.c=[ss,z];
m_e=b.e?$0.print(b.e,m_s):s+ss;
return{a:'/'+m_l, c:b.c||9, e:m_e};
}}
return this.exec(ae.$1(s))
},
a: function(o){
var a=this.b, b=a.a, c=Z.cf;
if(!b)return;
b=='art' && Art.init(a.b, c.mmm, o);
},
b: {},
e: {
$0: /^(\w+)/,
$1: function(a){
return(!a||(/^index\./).test(a)) ? 'page/1' : '6969~'
},
6969: {a:/^6969~/, b:0, c:1},
page: {a:/^page\W(\d*)/, b:'api/index?page=%1', e:'home_%1'},
cat: {a:/^cat\/[\w-]*\.(\d+)\/?(\d*)/, b:'api/cat?id=%1&page=%2', e:'cat_%1_%2'},
tag: {
a:function(a,b){
var c=/^tag\.(\d+)$/.exec(a);
return!!c?(a=$0.print('api/tag?page=%s&', c[1]),{a:a+b.substr(1)}):0
}
},
art: {a:/^art\/[\w-]*\.(\d+)/, b:'api/art?id=%1', c:3, d:'art', e:'art_%1'}
}}
};
w.Z={
head:{
tags:function(a,b){
a.q.blur&&a.q.blur();
a=a.q.value.trim().replace(/\s+/g,'+');
(200>a.length&&a)&&(b=dom('a'), b.href='/tag.1?q='+a, this.event(b), b.click());
return !1
},
event:function(a,c){c&&(c.jquery?c:$(c)).click(function(){$0.pop_img(this.src)}),Z.cf.ooo&&(a.jquery?a:$(a)).removeAttr('data-onjs').click(function(b){return this.origin==loc.origin?new Z.on(2,b,this):!0})}
},
cf: {},
onjs: function(a,b){
b=$0.json($(a.cf).text()), Z.cf.ooo=a.onz.test(loc.host)&&!!b.a, Z.cf.mmm=!!b.b;
},
debug:function(a,b){
var c=cus.cf.bug, d=null;
if(!a){
(/^[0,]*$/).test(c.toString())||c.some(e=>{!!e && (e>0 ? clearTimeout(e) : e(69))});
return c.length=0
}
d=c.push(typeof a=='function' 
? setTimeout(function(){c[--d]=0,a()},b) : a.always(function(){c[--d]=0}).abort)
},
on: function(a,b,c){Z.cf.on=a, 2>a&&(c=loc), this.init(a,b,c)}
};
Z.on.prototype={
main: null,
init: function(a,b,c){
var e, d=cus.cf, p=c.pathname.replace(/^\/+/,''), s=c.search, u='/'+p+s, h=c.hash;
if(1==a&&d.u==u)return;
a&&(Z.debug(),w.stop&&w.stop()), (h.length==0&&/#/.test(c.href)||h==o_o)&&(h='#'), d.u=u, this.main=$('#body-js'), e=cus.core.exec(p,s,h);
if(0==a){
d.o=e.e, loc.hash==o_o&&history.replaceState(null, 'Onjs', u+h);
if(Z.cf.ooo){
e.c>5&&this.csdl(1, e.e, {type:1, title:doc.title, content:$('#main').html()});
cus.core.a(1)
}
return!1
}
if(e.c==1)return 1==a && (this.main.empty(), this.wait(0), loc.reload());
this.s__c(1,d.o), d.o=e.e;
if(1==a){
p=this.csdl(0,e.e);
if(p)return $0.popup(),this.app(p,e.e,250)
}
2==a&&(b&&b.preventDefault(), p=loc.hash==o_o?'replaceState':'pushState', (p=='pushState'&&loc.origin+u+h==loc.href)||history[p](null, 'Onjs', u+h));
$('#body').click(),$0.popup(),this.wait(1,a),Z.debug(()=>{this.get(this,0,e)},500)
},
get: function(a,b,c){
Z.debug($.getJSON({url:c.a}).done(function(d){c.c>2&&a.csdl(1,c.e,d),a.app(d,c.e)}).fail(function(f,g){69==g || a.wait(0,!0)}))
},
csdl: function(a,b,c){
var d=cus.cf.dm;
return a?(d[b]=c,0):d[b]
},
s__c: function(a,b){
var d=cus.cf.sc;
if(a)return d[b]=w.scrollY,0;
b=d[b]||0,Z.cf.on==1&&$(w).scrollTop(b)
},
wait: function(a,b){
var c=this.main;
if(a>0){
1==a&&(a=dom('p'),a.id='main__l',a.appendChild(dom('span')),c.empty().append(a));
return 2==b&&$(w).scrollTop(0),!1
}
c.empty(),b&&(a=dom('p'),a.id='main__l',a.innerHTML='Connection errors.',c.append(a))
},
app: function(a,b,c){
var m=dom('main');
m.id='main', c||w.innerWidth>800&&(m.style.opacity=.5,$(m).animate({opacity:1},250)), this.main.empty()[0].appendChild(m);
if('art'==a.type){
cc.abc(m, a, a__t.temp)
}else{
m.innerHTML=(a.content)
}
cus.core.a(a.type), c=$(m), Z.head.event(c.find('a[data-onjs]'), c.find('img.oo__img')), doc.title=a.title, this.s__c(0,b)
}
};
$(doc).ready(()=>{
$('#header').append('<ul><li><a id="owo--m" class="ow__io"><span></span></a><a id="owo--p" class="box-28" href="javascript:history.back()"><svg viewBox="0 0 24 24"><polyline points="16,5 8,12 16,19" style="fill:none;stroke:currentColor;stroke-width:2"></polyline></svg></a></li><li class="owo__o"><a data-onjs href="/" title="Onjs"><b style="color:#4285F4">Z</b>.<b style="color:#FBBC04">onjs</b>.<b style="color:#4285F4">In</b></a></li><li><span id="owo--s" class="box-28"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></span></li></ul>');
  
  
doc.body.appendChild($0.popjs.__[0]);
  /*
w.onhashchange=function(){loc.jav==o_o&&loc.hash!==o_o&&$0.popup(),loc.jav=loc.hash};
w.onpopstate=function(e){new Z.on(1)};
Z.onjs({onz:/onjs/, cf:'#onjs'});
new Z.on(0), Z.head.event($('a[data-onjs]'), $('img.oo__img'))
*/
});
w.alert=function(a,c){c=dom('pre'),c.style.margin='0px',c.textContent=a,$0.popup({69:{rgba:.3},on:c})};
}) (window, jQuery);
