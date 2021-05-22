/*
 * Onjs.IN (c)
 * Desgin by 69
 */
(function(w,list__c,list__p){
'use strict';
var Cus=null, Man=null, Stl={}, doc=w.document, dom=doc.createElement.bind(doc);
try{Stl=w.localStorage||Stl}catch(l){}
var Anii={
lid:0,
clr:[1,1,0,2],
ctx:function(can){
return can.getContext('2d')
},
reset:function(x){
var can=Cus.b_center.canvas, ctx=this.ctx(can), ctw=can.parentNode.clientWidth;
this.lid&&w.cancelAnimationFrame(this.lid), this.lid=0, ctx.clearRect.apply(ctx, x&&this.clr ? this.clr : [0,0,can.width,can.height]);
if(x)return;
ctx.font="17px Monospace", ctx.fillStyle="#888", ctx.textBaseline="middle";
ctx.fillText('69', can.width/2-ctx.measureText('6').width, can.height*.5);
},
line:function(i,j){
var can=Cus.b_center.canvas, ctx=this.ctx(can), x=can.width*[.17,.83,.83,.5,.17][i], y=i<2?0:128;
ctx.beginPath(), ctx.globalAlpha=1, ctx.lineWidth=1, ctx.strokeStyle=j?'orange':'aqua', ctx.moveTo(can.width/2,can.height*.45), ctx.lineTo(x,y), ctx.stroke()
},
loop:function(id){
var can=Cus.b_center.canvas, ctx=this.ctx(can), x=can.width*[.09,.73,.73,.39,.09][id], y=id<2?1:can.height-3, cc=.5, nn=Math.min(can.width*.2,116), n=1, op=0;
ctx.fillStyle='aqua';
ctx.save();
this.clr=[x-1,y-1,x+nn,y+2];
(function abc(){
ctx.restore();
(n>=nn||n<1)&&(cc=-cc), n+=cc, op<1&&(op+=.01);
ctx.clearRect.apply(ctx,Anii.clr), ctx.globalAlpha=op, ctx.fillRect(x,y,n,1.2);
Anii.lid=w.requestAnimationFrame(abc)
})()
}
};
var update={
auto:!1,
arr_m:null,
avatar:function(i,j){
var man, mm='https://i.imgur.com/', m=this.arr_m;
if(null==i){
m=this.arr_m=arr__rand("TGDQ7cT.png|B8dnkWB.png|aOtDIDQ.png|gtBivF2.png|9kvA0fZ.png|eRNNfy0.png|2mD3WCg.png|58FMRJG.png|1qkEU6z.png|8SxFPMr.png|YSlzBzJ.png|idTAsLL.png|BHhK6mx.png|2qKFJzM.png|nVfwrsj.png|JGdqgzY.png|ME1tJB0.png|uq1dgnk.png|u40wsAh.png|rORoxUh.png|NLVONZ2.png".split('|'));
doc.getElementById('boss').firstElementChild.src=mm+m[m.length-1];
return;
}
Cus.player.top[i][0].querySelector('img').src=j||(mm+m[i]);
},
chip:function(i){
if(i<1e4)return i;
return i<1e6?Math.floor(i/1e3)+'k':i<1e9?(i/1e6).toFixed(1)+'m':(i/1e9).toFixed(1)+'b';
},
bets:function(){Cus.b_center.bet.innerText=this.chip(Cus.test)},

coin:function(a,z){
var b=Man[a], c=Cus.player.coin[a];
z&&(c[1].innerText=this.chip(b.mon), Cus.playId==a&&this.csdl());
c[2].innerHTML='<span>'+this.chip(b.pot)+'</span>'
},
csdl:function(){Stl.poker__js=$0.json(Man[Cus.playId])},
table:function(){
$0.popjs.__.empty();
var a=$0.popup({on:'<div class="poker-ty" data-max="0"><span></span></div><div class="poker-tx"><ul><li><span class="poker-tx-bli" data-tt="0/0">Blind &nbsp;</span><br><span class="poker-tx-buy" data-tt="0">Buy-in &nbsp;</span></li><li><button>Play</button></li></ul></div>'});
var b=a.find('.poker-ty')[0], c=a.find('.poker-tx-bli')[0], d=a.find('.poker-tx-buy')[0], e=a.find('button')[0];
var x=Man[Cus.playId], x2=x.mon, x3=[], x4=25, x5=Math.min(x2/20,1e4);
while(x4<x5)x3.push(x4), x4*=2;
b.dataset.max=update.chip(x3[x3.length-1]*20), x2=b.children[0], x4={x:null,xx:33}, x5=!1;
x2.style.transform='translateX(33px)';
b.onmousedown=function(ee){ee.preventDefault(), x5=!0, x4.x=[ee.clientX,x4.xx], w.onmouseup=()=>{x5=!1,w.onmouseup=null}};
b.onmousemove=function(ee){
if(!x5)return;
x4.xx=x4.x[1]+(ee.clientX-x4.x[0]);
var d3=Math.floor(x3.length*(x4.xx/this.offsetWidth)), cc=x3[Math.max(0,Math.min(d3,x3.length-1))];
this.pok__blind=cc, c.dataset.tt=cc+'/'+cc*2, d.dataset.tt=update.chip(cc*20);
x2.style.transform='translateX('+x4.xx+'px)';
};
e.onclick=function(){(~x3.indexOf(b.pok__blind))&&(this.innerText='Wait...', setTimeout(()=>{x.blind=b.pok__blind, update.csdl(), $0.popup(), Poker.init()}, 600))};
},
man:function(a){
a=dom('div'), a.style.textAlign='left';
a.innerHTML='Bạn không đủ chip để chơi ở bảng đấu này, vui lòng trả lời khảo sát để nhận viện trợ!<br><b>Theo bạn lý do nào sau đây khiến bạn thua hết chip?</b><br><p style="max-width:300px;margin:8px auto 0"><label for="stt--1" style="pointer-events:none"><input id="stt--1" type="checkbox" checked> Tại tôi chơi ngu</label><br><br><label for="stt--2"><input id="stt--2" type="checkbox"> Tại tôi chơi rất ngu</label><br><br><label for="stt--3"><input id="stt--3" type="checkbox"> Tại tôi chơi rất rất ngu</label><br><br><button onclick="" style="margin-left:2em">Đồng Ý</button></p>';
a.querySelector('button').onclick=function(){
var blind=25, mm=blind*5000+$0.mfr(blind*800,-blind*300), tt=Man[Cus.playId];
this.innerText='Wait...', Cus.m_mon=tt.blind=blind, tt.mon<2e4?(tt.mon+=mm):(mm=0);
tt=$0.print('<b style="color:#2fa5c0">Khảo sát rất thành công!</b><br><br>Bạn đã được tặng <b style="color:#697">%s</b> chip từ Vũ trụ Poker.<br><br>', update.chip(mm));
update.csdl();
setTimeout(()=>{this.parentNode.innerHTML=tt}, 1200);
setTimeout(()=>{$0.popup(), Poker.play()}, 6000);
};
$0.popup({on:a});
},
bots:function(i,j){
if(Cus.playId==j)return this.man();
var blind=Cus.m_mon, mm=blind*2000, mn=$0.mfr(blind*1000,-blind*10);
var user=Cus.player.top[j][0].querySelector('img'), img='https://i.imgur.com/', imi=this.arr_m;
i.mon=mm+mn, user.src='//:0', setTimeout(()=>{user.src=img+imi[Math.floor(Math.random()*imi.length)]}, 1600);
},
start:function(){
var blind=25, y=Stl.poker__js?$0.json(Stl.poker__js):null;
update.avatar();
if(!y||!y.mon){
y={mon:blind*5000,pot:0,blind:blind,img:null};
}else{
blind=Math.max(blind, y.blind)||blind;
}
var i=Cus.player.length, mm=blind*2000, mn;
Man=[], y.pot=0, Cus.m_mon=blind;
while(i--){
Cus.playId==i?(Man[i]=y):(mn=$0.mfr(blind*600,-blind*100), Man[i]={mon:mm+mn,pot:0});
this.avatar(i,Man[i].img)
}
this.csdl();
},
cfg:function(a,c){
if('auto'==a)return(this.auto=c);
if('setti'==a)return $0.popup({on:'<div class="popup-obj"><br><a data-xx="cimg" onclick="Poker.cfg(this.dataset.xx)">Change Avatar</a><br><br><a data-xx="ctab" onclick="Poker.cfg(this.dataset.xx)">Change TABLE</a><br><br></div>'});
if('cimg'==a&&this.arr_m){
var id=Cus.playId, y=Man[id];
var b=$0.popjs.__.find('.popup-obj').empty(), c=this.arr_m, d=c.length, e='https://i.imgur.com/', e2=null;
e2=dom('form'), e2.innerHTML=$0.print('<input name="link" placeholder="Link" value="%s">', y.img);
e2.onsubmit=function(){y.img=this.link.value.trim(), update.csdl(), update.avatar(id,y.img), $0.popup()};
b.append(e2);
while(d--)e2=dom('img'), e2.style='cursor:pointer;width:60px;max-height:80px;margin:9px;display:inline-block', e2.src=e+c[d], b.append(e2);
b[0].onclick=function(e){
e=e.target;
if(!e||'IMG'!=e.tagName)return;
y.img=e.src, update.csdl(), update.avatar(id,e.src), $0.popup();
};
return!1;
}
return this.table()
}
};

w.Poker={
cfg:function(){return update.cfg.apply(update, arguments)},
init:function(){
if(!!Cus)return $('#poker').addClass('poker_rel'),  setTimeout(()=>{location.reload()},500);
Cus={
m_mon:25,
playId:3,
player:{coin:[],bet:null,obj:[]},
b_center:null,
pman:null,
pbot:null,
pot:[],
deal: 0,
loop: 0,
circle: 0,
test:0,
};
var a=[$('#play--1'), $('#play--2'), $('#play--3'), $('#play--4'), $('#play--5')], b=doc.querySelector('.poker-center'), c;
Cus.player.top=a, Cus.player.length=a.length;
a.some((i,j)=>{
c=a[j], Cus.player.coin[j]=c.find('.manx')[0].children, Cus.player.obj[j]=c.find('.man-obj')[0];
Cus.player.obj[j].innerHTML='<a></a><span class="cdx"></span><span class="cdx"></span>';
});
a=doc.getElementsByClassName('pok-stt'), c=a[1].children, a=a[0].children;
Cus.player.bet=[a[0],a[2],c[2],c[1],c[0]];
Cus.b_center={abc:a[1], bet:doc.getElementById('bets'), canvas:b.firstElementChild, dealer:b.querySelector('.pok-dealer'), cards:b.querySelector('.pok-cards')};
/*
w.onresize=function(){
var a=b[0].width, c=b[0].parentNode.clientWidth, j=1-(a-c)/a;
if(b[0].dataset.scale==j)return;
b[0].dataset.scale=j;
b[0].style.transform='scale('+j+',1)';
};
*/
Cus.b_foot=doc.getElementById('b_foot').children;
Cus.b_foot[2].onmouseenter=function(){(this.children[2].style.visibility='visible')};
Cus.b_foot[2].children[2].onmousedown=function(e){
var man=Man[Cus.playId], oldm=Cus.old.m, mbet, m=man.pot, mm=Cus.old.y[Cus.playId]||0, x=e.offsetX>0?e.offsetX:0, xx=228, y=0;
mbet=(oldm==0)?Cus.m_mon*2:(oldm*2-mm), m-=mbet;
m<2?(man.bet=NaN, this.dataset.oo='ALL in'):(y=mbet+(x>xx?m:Math.ceil(m*(x/xx))), man.bet=y, this.dataset.oo=update.chip(mm+y))
};
update.start();
return setTimeout(()=>{this.play()},1200)
},

numl:function(n){return n>3?0:++n},
loop:function(t){
var old=Cus.old, m__j=Cus.loop, m__i;
m__i=Cus.loop=this.numl(m__j);
if(t>0){
var a2=Cus.m_mon*t, a3=Cus.player.bet[m__i];
t==1&&(old=Cus.old={l:[],x:[],y:[],y2:(new Array(Cus.player.length)).fill(0),d:m__j});
old.y[m__i]=a2, old.l[m__i]='bet', Man[m__i].pot-=a2;
a3.dataset.mm=update.chip(a2), t==1?(a3.dataset.tt='S. blind'):(a3.dataset.tt='B. blind', old.m=a2);
update.coin(m__i);
return setTimeout(()=>{this.loop(t==1?2:void 0)},300+t*200)
}
Anii.reset(!0), m__j=old.l[m__i];
if(~old.x.indexOf(m__i)){
old.y.some((i,j)=>{old.y2[j]+=i, Cus.test+=i});

Cus.loop=old.m=old.x.length=old.y.length=0;
return setTimeout(()=>{
var b=Math.max.apply(null,old.y2), b2, c=old.y2.indexOf(b);
old.y2[c]=0, b2=Math.max.apply(null,old.y2);
b>b2&&(b-=b2, Cus.test-=b, Man[c].pot+=b, update.coin(c));
old.y2[c]=b2, update.bets();
setTimeout(()=>{this.show_c()},300)
},500)
}
old.x.push(m__i), Anii.loop(m__i);
if(m__j=='Fold'||m__j=='Allin')return this.loop();
return(!update.auto&&m__i==Cus.playId)? this.job(69) : setTimeout(()=>{this.job2()}, $0.mfr(22,12)*100)
},
job2:function(t){
var old=Cus.old, oldm=old.m, m__i=Cus.loop, user=Man[m__i], umon=old.y[m__i]||0;
if(!t){
var cir=Cus.circle, i=oldm>umon?2:1, x='Fold', y=i==2?'Call':'Check', z=(oldm==0)?'Bet':'Raise';
var mbet=null, m=user.pot, e=Cus.pman[m__i], f, g;
mbet=(oldm==0)?Cus.m_mon*2:(oldm*2-umon), m-=mbet, f=oldm-umon;
m>mbet*5&&(m=Math.floor(m/2));
if(cir==0){
g=e.st.indexOf(2), g>3?(t=xyz(null,0,75)):(t=xyz(null,(i==2&&f>Cus.m_mon*6)?24:3,96));
t==z&&(user.bet=m<3?NaN:mbet+$0.mfr(m,2));
}else{
g=(function(a){
var b=a.st.join(''), c=b.indexOf(4), d=Math.max.apply(null,a.fx), e=Cus.pbotx;
if(d>4){
d=a.fx.indexOf(d), e=a.cl[0]==d, c=a.cl[1]==d;
return(e&&c)?[0,26]:(e||c)?[8,60]:[18,80]
}
if(c>0)return e.indexOf(4)>0?[12,60]:[0,15];
c=b.match(/2|3/g)||[], d=b.lastIndexOf(3), e.lastIndexOf(3)>=d&&(d=0);
if(d>0)return c.length>1?[0,16]:[4,30];
c=b.lastIndexOf(2), d=(/([1-4]{5,})|(^00[1-4]{4}0\d+[1-3])$/).test(b);
return d?[4,44]:c>e.lastIndexOf(2)?[15,70]:[40,96]
})(e);
cir==3&&(g[0]-=2);
t=xyz(null, i==2?(old.y2[m__i]<Cus.m_mon*7&&f>Cus.m_mon*10)?g[0]*1.4:g[0]:Math.floor(g[0]*.1), g[1]);
t==z&&(user.bet=m<3?NaN:mbet+$0.mfr(m,2))
}
function xyz(a,b,c){return a=$0.mfr(100,1),a<b?x:a<c?y:z}
return this.job2(t)
}
var mon, aa=Cus.player.bet[m__i];
if('Fold'==t||'Check'==t){
aa.dataset.mm='';
}else{
if(t=='Raise'||'Bet'==t){
if(old.m>=user.pot+umon)return this.job2('Call');
old.x.length=1, old.x[0]=m__i;
if(user.pot>user.bet){
mon=old.m=umon+user.bet, user.pot-=user.bet;
}else{
t='Allin', mon=old.m=umon+user.pot, user.pot=0;
}
}
if('Call'==t){
if(old.m>=user.pot+umon){
t='Allin', mon=umon+user.pot, user.pot=0;
}else{
mon=old.m, user.pot-=(old.m-umon)
}
}
old.y[m__i]=mon;
aa.dataset.mm=update.chip(mon);
update.coin(m__i)
}
old.l[m__i]=t, aa.dataset.tt=t=='Allin'?'All in':t;
return setTimeout(()=>{this.loop()},0)
},

job:function(t){
var mon, m__i=Cus.playId, old=Cus.old, user=Man[m__i], umon=old.y[m__i]||0, aa=Cus.player.bet[m__i], ac=Cus.b_foot, ad=ac[2].children;
if(Cus.loop!=m__i)return;
if(69==t){
ac[1].name=(old.m==umon)?'Check':'Call';
ad[0].name=old.m>0?'Raise':'Bet';
ad[2].onmousedown({});
return setTimeout(()=>{ac[1].parentNode.className='b_foot_b'},0)
}
if('Fold'==t||'Check'==t){
aa.dataset.mm='';
}else{
if(t=='Raise'||'Bet'==t){
if(old.m>=user.pot+umon)return this.job('Call');
old.x.length=1, old.x[0]=m__i;
user.pot>user.bet?(mon=old.m=umon+user.bet, user.pot-=user.bet):(t='Allin', mon=old.m=umon+user.pot, user.pot=0)
}
if('Call'==t){
(old.m>=user.pot+umon)?(t='Allin', mon=umon+user.pot, user.pot=0):(mon=old.m, user.pot-=(old.m-umon))
}
old.y[m__i]=mon;
aa.dataset.mm=update.chip(mon);
update.coin(m__i)
}
old.l[m__i]=t, aa.dataset.tt=t=='Allin'?'All in':t;
ac[0].parentNode.className=ad[2].style='';
return this.loop()
},

show_d: function(){
var old=Cus.old, pman=Cus.pman, repay=[0,0,0,0,0], cc=[], brr=[], bx=Infinity;
pman.some((i,j)=>{
var x, y=old.y2[j], z;
y>0&&(bx=Math.min(bx,y), brr.push({auth:j,mon:y}));
Man[j].cc=old.l[j]=='Fold'?null:Ccc(i,j)
});
abc(brr,bx);
var win=[], wrr=[];
cc.some((i,j)=>{
var xrr=[], xm=i.mon*i.auth.length, xn=0;
j>0&&wrr.some(x=>{i.auth.indexOf(x.auth)>-1&&xrr.push(x)});
(!xrr.length)&&(xrr=wrr=xyz(i.od,i.odx), xrr.length?win.unshift(xrr):i.auth.some(x=>{repay[x]+=i.mon}));
xn=xm/xrr.length, xrr.some(x=>{repay[x.auth]+=xn});
});
Cus.repay=repay, Cus.win=win;
return setTimeout(()=>{this.show_w()}, 800);

function xyz(a,b,c){
function xxx(i){
var a=i.id, b=i.od, c=a[0];
if(a.length>=5)return;
if(b==9||5==b){
while(a.length<5)a.push(--c);
a[0]==5&&(a[4]=14);
return!1
}
b=Cus.pman[i.auth].cid, i.od>1&&(c=Math.max.apply(null,b));
while(a.length<5)(b.indexOf(c)>-1&&a.indexOf(c)<0&&a.push(c)),--c;
}
function yyy(i,j){
var arr={}, m=0;
i.some((x,y)=>{y=x.id[j], m=Math.max(m,y), m==y&&(arr[m]==null&&(arr[m]=[]), arr[m].push(x))});
arr=arr[m];
return(j>3||arr.length<2)?arr:yyy(arr,++j)
}

c=[], a.some(i=>{i.od==b&&(c.push(i),xxx(i))});
return c.length>1?yyy(c,0):c
}
function abc(a,x){
var arrs, arr=[], orr=[], brr=[], bx=[];
arrs={mon:x, auth:arr, od:orr, odx:0};
if(a.length==1)return(repay[a[0].auth]+=a[0].mon);
a.some((i,j)=>{
var y=i.mon-x, z=Man[i.auth].cc;
arr.push(i.auth), z&&(orr.push(z),arrs.odx=Math.max(arrs.odx,z.od)), y>0&&(bx.push(y), brr.push({auth:i.auth, mon:y}))
});
cc.push(arrs);
return brr.length&&abc(brr,Math.min.apply(null,bx))
}
},

show_w: function(tt){
var that=this, player=Cus.player, old=Cus.old, cards=Array.from(Cus.b_center.cards.children), repay=Cus.repay, len=!1;
if(tt)return xyz();

Cus.b_center.cards.style.overflow='visible';
(function show_c(j){
if(player.length==j)return setTimeout(()=>{abc(0)},len?500:200);
if(old.l[j]=='Fold'||j==Cus.playId)return show_c(++j);
var i=player.obj[j], x=Cus.pman[j];
len=!0, i.dataset.sc='2', that.addCu({id:x.cid[0],cl:x.cl[0]}, i.children[1]), that.addCu({id:x.cid[1],cl:x.cl[1]}, i.children[2]);
setTimeout(()=>{show_c(++j)},250)
})(0);
function xyz(z){
if(z){
cards.some(x=>{(/cdyy|cdzz/).test(x.className)&&(x.className='cdx')});
return setTimeout(()=>{xyz()},450)
}
repay.some((i,j)=>{
var stt=player.bet[j], x=Man[j], y=Cus.pot[j];
i=Math.floor(i), i>0&&(z=!0, Cus.test-=i, x.pot+=i, stt.dataset.tt='Repay', stt.dataset.mm=update.chip(i));
x.mon-=(y-x.pot), update.coin(j,!0)
});
update.bets();
return setTimeout(()=>{that.play()}, z?2500:2100)
}
function abc(j,k){
var i=Cus.win, a=i[j], b, c, d, e=0, f, g=null, g2=0, h=[];
k&&k.some(x=>{x.className='cdx'});
if(!a)return xyz(!0);
a.some((x,y)=>{
b=player.obj[x.auth].getElementsByTagName('span'), c=player.bet[x.auth];
d=(x.od==6||9==x.od)?x.cl:69;
y==0&&(g=x.id, g2=x.od, cards.some(z=>{
f=x.id.indexOf(z.pok__id), f>=0&&(d==69||d==z.pok__cl)?(e++,x.id[f]=0,aaa(z,1,f)):aaa(z)
}));
if(e<5){
e==3?(h.push(b[0],b[1]), aaa(b[0],1,g.indexOf(b[0].pok__id)), aaa(b[1],1,g.indexOf(b[1].pok__id))):(f=(~g.indexOf(b[0].pok__id)&&(d==69||d==b[0].pok__cl))?0:1, h.push(b[f]), aaa(b[f],1,g.indexOf(b[f].pok__id)), aaa(b[+!f]))
}else{
aaa(b[0]), aaa(b[1])
}
f=Math.floor(repay[x.auth]), repay[x.auth]=0;
Anii.line(x.auth,i.length==j+1), Cus.test-=f;
Man[x.auth].pot+=f, update.coin(x.auth), c.dataset.tt=[0,'High Card','One Pair','Two Pair','Three of a Kind','Straight','Flush','Full House','Four of a Kind','Straight Flush'][g2], c.dataset.mm=update.chip(f);
});
update.bets();
function aaa(i,j,x){i.className='cdx cd'+(j?(x<[0,1,2,4,3,5,5,5,4,5][g2])?'zz':'yy':'xx')}
setTimeout(()=>{abc(++j,h)},4400)
}
},
show_w2:function(a,c){
if(!a.length){
Cus.repay=c
}else{
var id=a[0], mon=c[id], mow=0, repay=[], rem=0;
c.some((i,j)=>{repay[j]=0, rem=i-mon, rem>0?(mow+=mon,repay[j]=rem):(mow+=i)});
Cus.repay=repay, Anii.line(id,!0), Cus.test-=mow, Man[id].pot+=mow;
rem=Cus.player.bet[id], rem.dataset.tt='Winner', rem.dataset.mm=update.chip(mow)
}
return this.show_w(!0)
},
show_c: function(z){
var old=Cus.old, bot=Cus.pbot, cards=Cus.b_center.cards.children, i=Cus.circle, j=i==0?3:i+1, l=z?0:Cus.player.length, l2=[], l3=450;
if(i>4)return Cus.player.bet.some((i,j)=>{'Fold'==old.l[j]||(i.dataset.tt=i.dataset.mm='')}), this.show_d();
Cus.circle=j;
if(!z){
Cus.player.bet.some((i,j)=>{'Fold'==old.l[j]||l2.push(j), (old.l[j]=='Allin'||'Fold'==old.l[j])?(l--,i.dataset.mm=''):(i.dataset.tt=i.dataset.mm='')});
if(l2.length<2)return setTimeout(()=>{this.show_w2(l2,old.y2)},800)
}
while(i<j){
Cus.pman.some((x,y)=>{old.l[y]=='Fold'||this.addCc(x, bot[i])});
((i,t)=>{setTimeout(()=>{this.addCu(bot[i],cards[i])},t)})(i,l3);
l3+=350, Cus.pbotx[bot[i].id]++, i++;
}
Cus.loop=Cus.old.d, l>1&&(l3+=700), setTimeout(()=>{l<2?this.show_c(!0):this.loop()}, l3);
},
addCc:function(a,b,c){
a.cid.push(b.id), a.cl.push(b.cl), a.st[b.id]++, a.fl[b.cl].push(b.id), a.fx[b.cl]++;
},
addCu:function(a,b,c){
b||(b=dom('span')), b.className='cdx', c&&c.appendChild(b);
a&&(b.pok__id=a.id, b.pok__cl=a.cl, b.style.transform='', b.style.backgroundPosition=list__p[a.cl][a.id])
},
play:function(){
var player=Cus.player, b_center=Cus.b_center, m_pot=Cus.m_mon*20, m_pay=Math.max(Cus.m_mon*2+1,2e4), stop=!1;
var dlp=['top:-5px;left:25%','top:-5px;right:25%','bottom:-5px;right:25%','bottom:-5px;left:40%','bottom:-5px;left:25%'];
b_center.dealer.style=dlp[Cus.deal];
player.bet.some((i,j)=>{(player.obj[j].dataset.sc=i.dataset.tt=i.dataset.mm='')});
Man.some((i,j)=>{i.mon<m_pay&&(Cus.playId==j&&(stop=!0),update.bots(i,j)), i.pot<m_pot&&(i.pot=Math.min(m_pot,i.mon)), Cus.pot[j]=i.pot, update.coin(j,!0)});
if(stop)return;
Cus.circle=Cus.test=0;
Cus.b_center.cards.style.overflow='hidden';
update.bets(), Anii.reset(), setTimeout(()=>{start.call(this)},1200);

function start(){
var that=this, player=Cus.player, man=[], bot=[], botx=(new Array(15)).fill(0);
var b_card=Cus.b_center.cards.children, card=arr__rand(list__c), c__i=0, b__i=5, m__i=player.length;
Cus.pman=man, Cus.pbot=bot, Cus.pbotx=botx;
(function hide__c(b__i){
bot.push(card[++c__i]);
b_card[b__i].className='cdx';
b_card[b__i].style.transform='translateY(-68px)';
b__i>0&&hide__c(--b__i)
})(4);
Cus.loop=Cus.deal, m__i=Cus.deal=this.numl(Cus.deal)
function abc(m__x){
var m__l={}, at=player.obj[m__x], aa, ac;
man[m__x]=m__l, m__l.cid=[], m__l.cl=[], m__l.st=(new Array(15)).fill(0), m__l.fl=[[],[],[],[]], m__l.fx=[0,0,0,0];
aa=card[++c__i], ac=card[++c__i];
that.addCc(m__l,aa), that.addCc(m__l,ac);
at.dataset.sc=1, m__x=Poker.numl(m__x);
if(m__x==m__i){
at=player.obj[Cus.playId], aa=man[Cus.playId];
that.addCu({id:aa.cid[0],cl:aa.cl[0]},at.children[1]), that.addCu({id:aa.cid[1],cl:aa.cl[1]},at.children[2]);
setTimeout(()=>{at.dataset.sc=2},500);
return setTimeout(()=>{that.loop(1)},900)
}
setTimeout(()=>{abc(m__x)},250)
}
setTimeout(()=>{abc(m__i)},500)
}
}
};

function Ccc(a,z){
var func={
x:null,
0:function(a){
return{od:1,id:[a.lastIndexOf(1)]}
},
1:function(a){
if(func.x)return func.x;
var b, c=a.join(''), d=c.match(/2/g), i=0;
if(!d)return!1;
d=d.length;
if(d==1)return b=c.indexOf(2), {od:2,id:[b,b]};
if(d==3)i=c.indexOf(2)+1, c=c.substr(i);
b=c.lastIndexOf(2)+i, d=c.indexOf(2)+i;
return{od:3,id:[b,b,d,d]};
},
2:function(a){
var b, c=a.join(''), d;
d=(/([1-4]{5,})/).exec(c);
d?(b=c.indexOf(d[0])+d[0].length-1):(b=(/^00[1-4]{4}0\d+[1-3]$/).test(c)?5:!1);
return b?{od:5,id:[b]}:b;
},
3:function flush(a){
var g=Math.max.apply(null,a.fx);
if(g<5)return;
var b, c, f=a.fx.indexOf(g), d=a.fl[f], e;
var i=d.length, j=(new Array(15)).fill(0), jj=[];
while(i--)j[d[i]]++, jj.push(d[i]);
e=func[2](j);
if(e){
b=e, b.od=9, b.cl=f;
}else{
jj.sort((a,b)=>{return b-a}).length=5, b={od:6,id:jj,cl:f};
}
return b
},
4:function(a){
var b, c=a.join(''), d=c.indexOf(3), f=c.lastIndexOf(3);
if(d>0){
if(f>d)return{od:7,id:[f,f,f,d,d]};
f=c.lastIndexOf(2);
if(f>0)return{od:7,id:[d,d,d,f,f]};
func.x={od:4,id:[d,d,d]};
}
},
5:function fkind(a){
var d=a.join('').indexOf(4);
return d>0?{od:8,id:[d,d,d,d]}:!1
}
};
var b=null, c=6;
while(c--){
b=func[c](c==3?a:a.st);
if(b)break;
}
return(b.auth=z,b);
}
function arr__rand(arr){
var x=arr.length, y, z;
while(x)y=Math.floor(Math.random()*x--), z=arr[x], arr[x]=arr[y], arr[y]=z;
return arr;
}
$(doc).ready(()=>{Poker.init()})
}(window, [{id:2,cl:0}, {id:2,cl:1}, {id:2,cl:2}, {id:2,cl:3}, {id:3,cl:0}, {id:3,cl:1}, {id:3,cl:2}, {id:3,cl:3}, {id:4,cl:0}, {id:4,cl:1}, {id:4,cl:2}, {id:4,cl:3}, {id:5,cl:0}, {id:5,cl:1}, {id:5,cl:2}, {id:5,cl:3}, {id:6,cl:0}, {id:6,cl:1}, {id:6,cl:2}, {id:6,cl:3}, {id:7,cl:0}, {id:7,cl:1}, {id:7,cl:2}, {id:7,cl:3}, {id:8,cl:0}, {id:8,cl:1}, {id:8,cl:2}, {id:8,cl:3}, {id:9,cl:0}, {id:9,cl:1}, {id:9,cl:2}, {id:9,cl:3}, {id:10,cl:0}, {id:10,cl:1}, {id:10,cl:2}, {id:10,cl:3}, {id:11,cl:0}, {id:11,cl:1}, {id:11,cl:2}, {id:11,cl:3}, {id:12,cl:0}, {id:12,cl:1}, {id:12,cl:2}, {id:12,cl:3}, {id:13,cl:0}, {id:13,cl:1}, {id:13,cl:2}, {id:13,cl:3}, {id:14,cl:0}, {id:14,cl:1}, {id:14,cl:2}, {id:14,cl:3}], [{"2":"-1px 199px","3":"144px -260px","4":"-139px -260px","5":"144px -195px","6":"52px -195px","7":"-94px -260px","8":"-0px -260px","9":"-93px 199px","10":"-186px -260px","11":"98px -260px","12":"-47px 199px","13":"52px -260px","14":"98px -195px"},{"2":"-93px -195px","3":"52px -130px","4":"144px -130px","5":"52px -65px","6":"-47px -130px","7":"-186px -130px","8":"-93px -130px","9":"-139px -130px","10":"98px -130px","11":"-1px -195px","12":"-140px -195px","13":"-47px -194px","14":"-1px -130px"},{"2":"-47px -65px","3":"52px 0","4":"-46px 0","5":"-93px 0","6":"-138px 0","7":"-185px 0","8":"145px 0","9":"98px -65px","10":"-93px -65px","11":"144px -65px","12":"-139px -65px","13":"-186px -65px","14":"-1px -65px"},{"2":"-47px 134px","3":"144px 199px","4":"52px 200px","5":"98px 200px","6":"-186px 199px","7":"-139px 199px","8":"98px 0","9":"-186px -195px","10":"145px 134px","11":"-186px 134px","12":"-93px 134px","13":"-1px 134px","14":"-140px 134px"}], ['t','b','c','r']))
