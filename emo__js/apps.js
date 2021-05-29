
(function(w){
'use strict';
if(w.$==void 0) return;
var doc=w.document, loc=w.location;
var stl=w.navigator.cookieEnabled ? w.localStorage : {};
w.$0={popjs:{__: $(doc.createElement('div')).on('click', function(a){if($(a.target).is('.popup-close') || $(a.target).is('.popup')){a.preventDefault();
$(this).removeClass('popup_visible').empty()}}).addClass('popup'),$z: {on:'<p class="center"><a href="https://drive.google.com/folderview?id=1aLksBNqk868GqWilXN4fQWpHxerJEQBc">Emoji Onjs</a><br><br><img src="https://i.imgur.com/28NOo1g.gif" alt=""/></p>'},$s: {69:!0,on:'<form onSubmit="return Z.head.tags(this,1)" method="post"><ul class="search"><li><input name="q" type="search" maxlength="99" placeholder="B\u1ea1n c\u1ea7n g\u00ec?"/></li><li><button class="svg-28" type="submit"><svg viewBox="0 0 24 24"><path fill="#4285F4" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button></li></ul></form>',js:a=>{setTimeout(()=>{a.find('input').focus()}, 0)}}},
popup:function(a,b){if(!a&&this.popjs.__.click()) return;
if(!(typeof a=='object')) return this.popup(this.popjs[a]);
b=$(doc.createElement('div')).addClass('popup-container');
!!a[69]&&b.addClass('popup-container-full');
this.popjs.__.append(b).addClass('popup_visible')[0].style.backgroundColor='rgba(0,0,0,'+(a.rgba||.25)+')';
b.append(a.on)&&!a[69]&&b.append('<a class="popup-close"></a>');
typeof a.js=='function'&&a.js(b);
return b},
json:function(a){if(!!a&&'object'==typeof a) return JSON.stringify(a);
var b={};
try{b=JSON.parse(a)}catch(c){}return b},
mfr:function(z,a){return a>z?this.mfr(a,z):Math.floor(Math.random()*(++z-a)+a)},
fnjs:function(s){return (''+s).replace(/(.*?)(?=(\.|$))/,function(z,a){return a.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')})},
print:function(s){var a=arguments,m=a[1],i=0;
if(!!m&&'object'==typeof m){return s.replace(/%(%|\d+)|%\{(\w+)\}|%\{(\w+)\.(\w+)\}/g,function(z,a,b,c,d){if(a||b)return !a?m[b]:'%'==a?a:m[a];
a=m[c];
return (a&&'object'==typeof a)?a[d]:a})}return s.replace(/%%|%s/g,function(z){return z=='%s'?a[++i]:'%'})},
tago:function(s){var a={a:Math.ceil(Date.now()/1e3-s), b:['hours','minutes','seconds'], c:[6e6,3600,60,1]}, i=3;
if(86069<a.a){var f=__=>10>__?'0'+__:__;
var d=new Date(1e3*s);
return $0.print('%s.%s.%s ~%sh', f(d.getDate()), f(1+d.getMonth()), d.getFullYear(), f(d.getHours()))}while(i--){if(a.a<a.c[i]) return $0.print('%s %s ago', Math.floor(a.a/a.c[1+i]), a.b[i])}},
copy:function(a,b){var d=document,c=d.createElement('textarea');
c.value=a;
c.readOnly=1;
c.style.width='1px';
c.style.height='1px';
d.body.appendChild(c);
c.select();
d.execCommand('Copy');
d.body.removeChild(c);
typeof b=='function'&&b(a)}
};

w.Art={cf:null, pg: 1,limit: 20,do: {},
page: function(a){if(!(a.total>a.limit))return null;
var out='<p class="page">', link='<a href="'+a.url+'">%s</a>';
var max=Math.ceil(a.total/a.limit), cur=a.page, page=cur>max?max:cur;
var start=Math.max(2,page)-((page==max&&page>3)?2:1), stop=start+3, i=start;
if(stop>max) stop=max;
if(page>2) out+=$0.print(link, 1, i==2?1:'\u00ab')+'.';
for(;
i<=stop;
i++) out+=(cur==i)?('<span>'+i+'</span>'):$0.print(link, i, i);
if(max>4&&page<(max-2)) out+='.'+$0.print(link, max, max==i?i:'\u00bb');
return out+'</p>'},
copy:function(a){a.style.fontWeight='700',$0.copy(a.dataset.abc)},

pop: function(a){
imgx(a.dataset.x);

w.onkeyup=function(e){
var cf=Art.cf||{}, n=e.keyCode, x, y;
if(!(e.target==doc.body&&(n==39||n==37)))return;
x=cf.i+(n==37?-1:1), x=x<cf.min?cf.max:(x>cf.max?cf.min:x);
y=$0.popjs.__,y.hasClass('popup_visible')&&(y.empty(),imgx(x,!0));
};

function imgx(i,j){
var cf=Art.cf, im=null, io=null, l='<p class="center"><img src="%0" alt=""/><br><br><br><a class="cup" data-abc="%0" onclick="Art.copy(this)">Copy()</a> &nbsp; | &nbsp; <a class="cup" data-abc="[img]%0[/img]" onclick="Art.copy(this)">[img]</a></p>';
cf.i=+i, im='https://i.imgur.com/'+cf.d[i], io=$0.popup({on:$0.print(l,[im]), rgba:.15});
j&&io.find('img').css({opacity:.1}).animate({opacity:1});

}
},

dom: function(a){
  var b='<span><img data-x="%s" onclick="Art.pop(this)" src="https://i.imgur.com/%s" alt=""/></span>';
var c=$('#init__c').empty();
var d=a.data.split(',');
var g='', i=d.length;
var l=this.limit, s=(this.pg-1)*l;
var j=s+l > i ? i : s+l;
var ob={url:loc.hash.replace(/\.\d*$/,'')+'.%s',page:this.pg,total:i,limit:l};
this.cf={d:d,min:s,max:j-1,i:~0};
while(s < j){
g+=$0.print(b, s, d[s++]);
}
c.append(g).append(this.page(ob));
},

app:function(a,z){
this.pg=a[2]*1;
this.pg=this.pg>0?this.pg:1;
var b=$0.print('/emo__data/%s.json', a[1]), c=function(){$('#init__c').html('<i style="color:#2fa5c0">Error of Response.</i>')};
if(this.do[a[1]]) return this.dom(this.do[a[1]]);
Z.debug($.ajax({url:b,dataType:'json', processData:1,timeout:1e4,error:c}).done(e=>{if(!e.type)return c.call();
this.do[a[1]]=e;
this.dom(e);
}))},

init: function(a,b,c){
if('art'==b) return this.art(a,c);
return this.home(a,c);
},
art: function(a,b){b=a[b];
if(!b) return {name:'Error 404'};
var __a='<div class="content"><div class="con-head"><span class="con-head-img"><img src="%{img}" alt="%{name}"/></span><span class="con-head-dv">%s</span><span class="abc"><i></i></span><p class="clr"></p></div><div class="con-body"><div>%{des}</div><div id="init__c" class="con--img"></div></div></div>';
var __aa='<a href="%{dl.url_%s}">%{dl.name_%s}</a>';
var __ab='';
if(b.dl){__ab+=$0.print(__aa, 'a', 'a');
if(b.dl.url_b){__ab+='<br><br>';
__ab+=$0.print(__aa, 'b', 'b');
}}__a=$0.print(__a, __ab);
var __c={title:b.name, name:b.name, content:$0.print(__a, b)};
return __c},

home: function(a){var __a='<ul class="lobj">%s</ul>';
var __b='<li><a data-onjs href="#/emoji/%{uri}"><p class="lob-tit">%{name}</p><p class="lob-icon"><img src="%{img}"/></p></a></li>';
var __c='', i;
for(i in a){if(!a.hasOwnProperty(i)) continue;
a[i].uri=i;
__c+= $0.print(__b, a[i]);
}
return {title:'Emoji Onjs | Onj', name:'Emoji Onjs', content:$0.print(__a,__c)};
}
};

             
w.Z={
  onjs: {a:0, m:0,
 in: function(a,b){b=$0.json($(a.cfg).text());
this.a=(loc.host.indexOf(a.onz)>=0) && b.a;
this.m=b.b;
Z.on.prototype.main=$(a.main);
}},
cfg: {bug:[], dm:[], sc:[], o:{id:0}, do:null, od:null},
core:{a: function(){var a=this.b, b=a.a;
if(!b) return;
'art'==b && Art.app(a.b,a.c);
},
b: {},
c: {},
e: {$0: /^(\w+)/,
$1: function(a){
return 'page/1';
},
6969: {a:/^6969~/, b:0, c:0},
page: {a:/^page\/(\d*)/, b:'home', c:2, d:'home'},
emoji: {a:/^emoji\/(\w+)\.?(\d*)/, b:'%1', c:2, d:'art'},}},
head:{
  tags:function(a,b,c){
    /*
    c=$0.print('/tag./%s', a.q.value.replace(/[\.\/]/g,'').trim().replace(/\s+/g,'+'));
if(200>c.length&&c.length>6){Z.onjs.a ? (new Z.on(2, null, [c, ''])) : w.open(c, '_self');
!!b && $0.popup(0)}
*/
$0.popup(0);
a.q.blur && a.q.blur();
return !1},
  
event:function(a){a.on('click', function(b){new Z.on(2, b, [this.pathname, this.search, this.hash])})}},
debug:function(a,b){var c=this.cfg.bug, d=null;
if(!a){c.some(e=>{!!e && (e>0 ? clearTimeout(e) : e(69))});
return c.length=0, 1;
}
if('function'==typeof a){d=c.push(setTimeout(function(){c[--d]=0;a()}, b))}else{d=c.push(a.always(function(){c[--d]=0}).abort)}},
on: function(a,b,c){if(2>a) c=[loc.pathname, loc.search, loc.hash];
return this.init(a,b,c)}};

Z.on.prototype={
abc: null,
main: null,

exec: function(s,ss,z){
var a=Z.core, b, c;
var d=a.e.$0.exec(s) || {};
b=a.e[d[1]];
if(b){if('function'==typeof b.a) return this.exec(b.a(s));
c=b.a.exec(s);
if(c){a.b.a=b.d, a.b.b=c, a.b.c=[null, ss, z];
return {a:!!b.b?$0.print(b.b,c):0, b:b.d, c:b.c};
}}
return this.exec(a.e.$1(s))},

init: function(a,b,c){
a && Z.debug(null);
a>0 && w.stop && w.stop();
var d=Z.cfg, u=c.join(''), e=this.exec(c[2].replace(/^#\/?/,''), c[1], c[2]);
this.abc=a,Art.cf={i:~0};
if(e.c==0){
  if(2==a) return;
this.main.empty();
this.wait(2);
return loc.reload()}
  if(2==a){
    b && b.preventDefault();
Z.cfg.od==u||history.pushState(null, 'Onjs', u)
  }
  Z.cfg.od=u;
  a>0&&this.wait(1,a);
Z.debug(()=>{this.$dom(Art.init(Z.cfg.do,e.b,e.a),a)}, 0==a?0:500)},

get: function(a,b,c){Z.debug($.getJSON({url:c}).done(function(d){a.wait(3).csdl(b, d);
a.main.hide();
a.$dom(d, b.id, 0)}).fail(function(f,g){69==g || a.wait(0)}))},

csdl: function(a,b,c){c=Z.cfg.dm;
if(1==b){return c.length=a+1, 0;
}if(!b) return c[a.id];
c[a.id]=b},
sc__a: function(a,b,c){c=Z.cfg.sc;
if(!b) return $(w).scrollTop(c[a] || 0);
if(2==b) c.length=a;
c[a]=w.scrollY;
},
wait: function(a,b){var c=this.main;
if(a>0){if(1==a){c.empty();
$('#wt__a').stop().css({visibility:'visible',opacity:1}).animate({opacity:0}, 1e3, function(){this.style.visibility='hidden'});
}w.scrollTo(null,0);
return this}b=$('<p>').css({color:'#eee', textAlign:'center'}).html('Connection errors.');
c.empty().fadeIn(200).append(b)},

$dom: function(a,b){
var c=$('#apps__a'), d=$('#apps__b');
c.html(a.name);
d.empty().append(a.content);
doc.title=a.title;
Z.core.a();
Z.head.event(d.find('a[data-onjs]'));
}};


$(doc).ready(()=>{$(doc.body).append($0.popjs.__).append($('<span>').attr({id:'wt__a'}).css({visibility:'hidden'}));
Z.cfg.do=$0.json($('#data__js').html());
Z.onjs.in({onz:'onjs', cfg:'#onjs', main:'#apps__b'});
if(!Z.onjs.a) return;
new Z.on(0, history.state);
w.onpopstate=function(a){$0.popup(),new Z.on(1, a.state)};
Z.head.event($('a[data-onjs]'))});

$(doc).ready(function(){
var m=$('#back'), mw=m.width(), c=~0;

$(w).resize(function(){var bw=850, sw=($(doc).width()-bw)/2-mw;
sw>0?(c==sw||(c=sw, m.css({left:(sw>9?sw-8:0)+'px'}).fadeIn())):(c==0||(c=0, m.hide())) }).resize();

})

}) (window);
