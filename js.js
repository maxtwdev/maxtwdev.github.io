var mlan0all=[
 {zh:"無法連接到網路，<br>請確認您的網路連線是否正常。",en:"Can't access to internet，<br>please check the connection of your device.",ja:"インターネットに接続できません。<br>インターネット接続が正常であることを確認してください。"},
 {zh:"您確定要以臉書登入嗎?",en:"Do you want to login with fcebook?"},
 {zh:"邀 請 朋 友",en:"Invitation"},
 {zh:"邀 請",en:"Invite"},
 {zh:"玩玩看這玩意吧!",en:"Check out this cool stuff!"},
 {zh:"已送出邀請。",en:"Invitation sent out."},
 {zh:"分享失敗!請稍後再試。",en:"Share failed, please try again later."},
 {zh:"系統不支援您所使用的瀏覽器或瀏覽器版本!",en:"Your browser or browser version is not supported."},
 {zh:"分享完成!",en:"Share finished!"},
 {zh:"請 稍 後 ...",en:"Please wait...",ja:"お待ちください..."},
 {zh:"登入到Facebook...",en:"Login to Facebook..."},//10
 {zh:"傳送邀請中...",en:"Sending invitation..."},
 {zh:"網路狀況不佳，連接逾時，請稍候再試。",en:"Connection timeout due to slow network performance,Please try again later."},
 {zh:"是",en:"Yes",ja:"はい"},
 {zh:"否",en:"No",ja:"いいえ"},
 {zh:"您要離開了嗎?",en:"Do you want to leave?",ja:"残しますか?"},
 {zh:"確認",en:"OK",ja:"確認する"},
 {zh:"您確定要登入臉書加入排行榜嗎?",en:"Do you want to login with facebook and show the rankings?"},
 {zh:"您安裝的APP版本不支援此功能。",en:"This function is not support by the App version you installed."},
 {zh:"信息與設定",en:"<span style='font-size:0.8em'>Information and Setting</span>"},
 {zh:"隱私權政策",en:"Privacy Policy",ja:"プライバシーポリシー"},//20
 {zh:["日","一","二","三","四","五","六"],en:["SUN","MON","TUE","WED","THU","FRI","SAT"]},
 {zh:"返回",en:"BACK",ja:"戻る"},
 {zh:"離開",en:"EXIT",ja:"残します"},
 {zh:"再玩一次",en:"<span style='font-size:0.8em'>PLAY AGAIN</div>",ja:"もう一度"},
 {zh:"資料更新失敗!<br>請稍後再試",en:"Fail to update data<br>Please try again later",ja:"情報更新に失敗しました<br>後でもう一度お試しください"},
 {zh:"載入中...",en:"Loading...",ja:"読み込み中..."},
 {zh:"忙碌中，請稍後再試。",en:"Busy, Please try again later",ja:"ビジーです。<br>後でもう一度お試しください。"},
 {zh:"隱私權政策",en:"privacy policy",ja:"プライバシーポリシー"},
 {zh:"有新版本上架，<br>請先下載最新版本。",en:"There is a new version.<br>Please update to the latest version first.",ja:"新しいバージョンがあります。<br>最新バージョンに更新してください。"},
 {zh:"目前無法取得資料!<br>請稍後再試",en:"Fail to obtain data currently<br>Please try again later",ja:"現在データを取得できません<br>後でもう一度お試しください"},//30
 {zh:"確認刪除?",en:"Are you sure to delete?",ja:"削除しますか?"},
 {zh:"繼續",en:"Continue",ja:"続ける"},
 {zh:"繼續遊戲?",en:"Continue?",ja:"続けますか?"},
 {zh:"影片未播放完成",en:"Video has not finished playing",ja:"ビデオの再生が終了していません"},
 {zh:"無法使用特殊字元",en:"Unable to use special characters",ja:"特殊文字を使用できません"},
 {zh:"準備中，請稍後再試",en:"In preparation...<br>please try again later",ja:"準備として、後でもう一度やり直してください"},
 {zh:"資料更新中，",en:"Database updating,",ja:"データベース更新中,"},
 {zh:"重試",en:"RETRY",ja:"再試行"},
],mlan0=[];
if (window.navigator.msPointerEnabled) {
 ondownevent="onmspointerdown";onupevent="onmspointerup";onoverevent="onmspointerover";onmoveevent="onmspointermove";onoutevent="onmspointerout";
 downevent="mspointerdown";upevent="mspointerup";overevent="mspointerover";moveevent="mspointermove";outevent="mspointerout";
} else if("onpointerdown" in window) {
 ondownevent="onpointerdown";onupevent="onpointerup";onoverevent="onpointerover";onmoveevent="onpointermove";onoutevent="onpointerout";
 downevent="pointerdown";upevent="pointerup";overevent="pointerover";moveevent="pointermove";outevent="pointerout";
} else if("ontouchstart" in window) {
 ondownevent="ontouchstart";onupevent="ontouchend";onoverevent="ontouchenter";onmoveevent="ontouchmove";onoutevent="ontouchcancel";
 downevent="touchstart";upevent="touchend";overevent="touchenter";moveevent="touchmove";outevent="touchcancel";//touchleave
} else {
 ondownevent="onmousedown";onupevent="onmouseup";onoverevent="onmouseover";onmoveevent="onmousemove";onoutevent="onmouseout";
 downevent="mousedown";upevent="mouseup";overevent="mouseover";moveevent="mousemove";outevent="mouseout";
}
var slash="/",screenw,screenh,screenwem,screenhem,dsr,ing=false;
var lan=(window.navigator.userLanguage || window.navigator.language).toLowerCase();
var fzero=function(n,l,ist){ if(!isNaN(n)&&!ist) n=Math.floor(n);return Array((l-(n+"").length)+1).join("0")+n;};//ist  設為1 避免1e0錯誤轉成 0001
var getTtxt=function(sec,msn){return (sec>3600000?Math.floor(sec/3600000)+":":"")+fzero(Math.floor(sec%3600000/60000),2)+':'+fzero(sec%60000/1000,2)+(msn?':'+(sec%1000+'').substr(0,msn):"")};
var getCtxt=function(){ var a=(Math.floor(Math.random()*4096)).toString(16);return "#"+Math.pow(10,3-a.length).toString().substr(1).replace(/0/g,"0")+a; };
var date=new Date(),datestr=date.getFullYear()+slash+fzero((date.getMonth()+1),2)+slash+fzero(date.getDate(),2);
var winotify=showerr(function(){ window.external.notify("tile->"); },1);
var UTCdate=function(p){ p=p||"";var d=new Date(),sl=p.indexOf("/")!=-1?"/":"";return d.getUTCFullYear()+sl+fzero(d.getUTCMonth()+1,2)+sl+fzero(d.getUTCDate(),2); };//d.getUTCHours()+d.getUTCMinutes()+d.getUTCSeconds()
var online=function(fun,ferr,nom){//nom->no msg
 //if(!online.fun) online.fun=function(){  };
 var xhr=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 xhr.onreadystatechange=function(){//test(xhr.readyState+" , "+xhr.status);
  if(xhr.readyState==4){
   if(xhr.status>=200&&xhr.status<404){ fun(); }
   else {
	setTimeout(function(){ if(ferr) ferr();
     if(!nom){ var tempf=function(){ msg("confirm","<div style='font-size:0.8em'>"+mlan0[0]+"</div>",0,{sty:"height:8em;margin-top:-4em;",T:-500}); }; if(document.getElementById("ani").innerHTML) msgoff(tempf,0,{T:300}); else tempf(); }
    },500);
   }
  }
 };
 xhr.open('HEAD',"https://i.imgur.com/VRSxou9.gif?"+Math.random(),true);
 xhr.send();
};
var chkdevice=(navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/Android/i)||(navigator.userAgent.match(/iPhone|iPad|iPod/i)||(navigator.userAgent.match(/Mac OS/i)&&navigator.userAgent.match(/Mobile/i))?"ios":"pc")).toString().toLowerCase();
if(chkdevice=="android"||chkdevice=="ios") document.getElementById("script").src="cordova.js";
else if(navigator.userAgent.match(/Trident/i)&&strfromto(navigator.userAgent,"Trident/",";")<4){//Trident/4.0 -> ie8
 document.body.innerHTML="<div style='text-align:center;margin-top:3em;font-size:1.5em;font-weight:bold;background:#fff'>"+mlan0[7][lan.substr(0,lan.indexOf("-"))]+"</div>";chkdevice=0;
}
window.onload=function(){
};
var attstatus='0';
document.addEventListener("deviceready",async()=>{ if(typeof Android!=="undefined") getdata(Android.getdata()); else if(chkdevice=="ios") document.location.href=appname+"://getdata";
 document.addEventListener('resume',async()=>{  },false);//setTimeout(showbad,5000);
 document.addEventListener('pause',async()=>{  },false);//ad01.hide();
}, false);
function lsp(T,f,ferr){//lsp.t must unicode UTF-8; T:neterr msg popup time
 online(function(){
   loadjs(lsp.t+"?"+Math.random(),f,function(){
    setTimeout(function(){ msgoff(function(){msg("confirm","<span style='font-size:0.8em'>"+mlan0[30]+"</span>",0,{sty:"height:7em",fun2:ferr});}); },1000);
   });
  },function(){
   if(T) setTimeout(function(){ msgoff(function(){ msg("confirm","<span style='font-size:0.8em'>"+mlan0[0]+"</span>",0,{sty:"height:7em",fun2:ferr}); }); },T);
  },1);
}
function getdata(txt){ document.oncontextmenu=function(){return false;};lanset();window.onresize=responsive;
 if(!txt||(txt&&!showerr(function(){eval(txt);},1))) eval(data0);
 else { eval(txt);if(data.ver&&data.ver.toString().length>6&&data.ver.toString().indexOf(appname)!=0) eval(data0); else if(data.ver!=vartxt) dbupdate(); }
 responsive();
}
function responsive(){
 //test(Math.floor(Math.random()*10000)+"<br>window.innerWidth : "+window.innerWidth+"/"+window.innerHeight+"<br>screen.availWidth : "+screen.availWidth+"/"+screen.availHeight+"<br>screen.width : "+screen.width+"/"+screen.height +"<br>document.documentElement.clientWidth : "+document.documentElement.clientWidth+"/"+document.documentElement.clientHeight+"<br>document.body.clientWidth : "+document.body.clientWidth+"/"+document.body.clientHeight,1);
 if(screenw===document.documentElement.clientWidth&&screenh===document.documentElement.clientHeight) return;
 screenw=window.innerWidth;//screenw=document.documentElement.clientWidth;
 screenh=(screen.availWidth-screen.availHeight)*(window.innerWidth-window.innerHeight)<1&&chkdevice!="pc"?window.innerWidth:window.innerHeight;
 //document.documentElement.style.width=responsive.w0||screenw+"px";
 //document.documentElement.style.height=responsive.input||screenh+"px";
 //var temps=Math.max(Math.min(window.innerWidth/48,30),8)*(screenh>screenw?1.6:1);
 //var temps=Math.max(Math.min(screenh/40,42),16);
 var temps=Math.max(Math.min(screenh/40,document.documentElement.clientHeight/20),document.documentElement.clientHeight/32);
 document.body.style.fontSize=temps+"px";//pt : *0.8
 
 screenhem=Math.floor(screenh/temps);
 screenwem=screenw/temps;
 var o=document.getElementById("page");
 //if(screenh>screenw) o.className="v"; else o.className="h";
 //o.className=(window.matchMedia("(orientation: portrait)").matches?"v":"h")+(data["draws"][0][5]==1?"":"5")+(data["draws"][0][8]==1?"":"8");
 //alert(window.matchMedia("(orientation: portrait)").matches?"v":"h");
 if(responsive.fun) responsive.fun();
 //setTimeout(function(){ document.body.scrollTop=document.documentElement.scrollTop=0; },1);//prevent windows phone screen scroll after text input
}
function strfromto(str,strfrom,strto) {//擷取字串不含strfrom, strto ; strfrom="" -> 從頭開始擷取 
 var tempi=str.indexOf(strfrom);
 if(tempi!=-1) {
  str=str.substring(tempi+strfrom.length);
  if(!strto||str.indexOf(strto)==-1) return str; else return str.substring(0,str.indexOf(strto));
 } else return "";
}
var ani=function(o,s,f,t,u,time,ease,fun,loop){//object, style, from(number), to(number), unit, time(<0 pinpong), easing, callback, loop(0->always looop)
 //ease>1:easein, ease<1:easeout, ease=1:no ease
 //var o=p.o,rv=p.rv,sv=p.sv;
 if(typeof o.anito!="undefined"){ clearInterval(o.anito);delete o.anito;delete o.ani; }
 if(!(s instanceof Array)){ s=[s];f=[f];t=[t];u=[u]; }
 var pall=Math.ceil(Math.abs(time)/33),pnow=1,ifatt;
 for(var i=0;i<s.length;i++){ ifatt=["cx","cy","r","points","d"].indexOf(s[i])!=-1;
  if(s[i]=="background"||s[i]=="backgroundColor"||s[i]=="color"){
   if(typeof f[i]=="string"){ f[i]=[parseInt(f[i].substr(0,2),16),parseInt(f[i].substr(2,2),16),parseInt(f[i].substr(4,2),16),1];t[i]=[parseInt(t[i].substr(0,2),16),parseInt(t[i].substr(2,2),16),parseInt(t[i].substr(4,2),16),1]; }
   f[i][3]=typeof f[i][3]=="undefined"?1:f[i][3];t[i][3]=typeof t[i][3]=="undefined"?1:t[i][3];
   o.style[s[i]]="rgba("+f[i][0]+","+f[i][1]+","+f[i][2]+","+(f[i][3]&&f[i][3]!=0?1:f[i][3])+")";
  } else if(ifatt) { if(s[i]=="points"){ f[i]=f[i].split(",");f[i].pop();t[i]=t[i].split(",");t[i].pop();for(var i2=0;i2<f[i].length;i2++){ f[i][i2]=parseFloat(f[i][i2]);t[i][i2]=parseFloat(t[i][i2]); } } o.setAttribute(s[i],f[i]+u[i]);
  } else o.style[s[i]]=f[i]+u[i];
 }
 if(!o.style.display||o.style.display=="none") o.style.display="block";
 o.ani={f:function(){//if(o.id=="cleaner") test(Math.random(),1);//test(o.id+"/"+Math.random(),1);
   if(!document.body.contains(o)||o.style.display=="none"){ o.ani.p();return; }
   for(var i=0;i<s.length;i++){ var temppnow=easing(pnow/pall,ease);
    if(s[i]=="background"||s[i]=="backgroundColor"||s[i]=="color"){
     //o.style[s[i]]="#"+fzero(parseInt((f[i][0]+(t[i][0]-f[i][0])*temppnow)).toString(16),2)+fzero(parseInt((f[i][1]+(t[i][1]-f[i][1])*temppnow)).toString(16),2)+fzero(parseInt((f[i][2]+(t[i][2]-f[i][2])*temppnow)).toString(16),2);
     o.style[s[i]]="rgba("+parseInt(f[i][0]+(t[i][0]-f[i][0])*temppnow)+","+parseInt(f[i][1]+(t[i][1]-f[i][1])*temppnow)+","+parseInt(f[i][2]+(t[i][2]-f[i][2])*temppnow)+","+(f[i][3]+(t[i][3]-f[i][3])*temppnow)+")";
    } else if(ifatt){ if(s[i]=="points"){ o.setAttribute(s[i],arradd(f[i],arradd(arradd(t[i],f[i],1),temppnow))); } else o.setAttribute(s[i],(f[i]+(t[i]-f[i])*temppnow)+u[i]);
    } else o.style[s[i]]=(f[i]+(t[i]-f[i])*temppnow)+u[i];
   }
   if(pnow==pall||pnow==0){ pnow=0;//不delete o.ani, ani fun會變成object
    if(typeof loop=="undefined"||loop==1){ clearInterval(o.anito);delete o.ani;if(fun) fun(); } else loop--;
    if(time<0){ var tempv=f;f=t;t=tempv; }
   }
   pnow++;
       }
      ,p:function(){ clearInterval(o.anito);delete o.anito; }
      ,r:function(){ if(typeof o.anito=="undefined") o.anito=setInterval(o.ani.f,33); }
      };
 o.ani.r();
};
var cani=function(o,s,f,t,time,ease,fun){
 //object, ani property, from(number), to(number), time, easing, callback
 //ease>1:easein, ease<1:easeout, ease=1:no ease ; time<0 -> elastic effect
 if(!o.pnow) {
  o.ani2= function(){ o.pnow=null;o.ani=new cani(o,s,f,t,time,ease,fun); };
  o.p=Math.ceil(Math.abs(time)/30);
  o.pnow=1;
  s=(s instanceof Array)?s:[s];f=(f instanceof Array)?f:[f];t=(t instanceof Array)?t:[t];
  if(o.timeout) clearInterval(o.timeout);
  o.timeout=setInterval(function(){ cani(o,s,f,t,time,ease,fun); },30);
 } else o.pnow++;
 if(o.pnow<=o.p+1) {
  for(var i=0;i<s.length;i++){
   if(f[i]===null){ f[i]=o[s[i]]; }
   //o[s[i]]=f[i]+(t[i]-f[i])*Math.pow(o.pnow/o.p,ease);
   o[s[i]]=f[i]+(t[i]-f[i])*easing(o.pnow/o.p,ease);
  }
  if(time<0&&o.pnow==o.p+1) {
   clearInterval(o.timeout);
   o.pnow=o.pnow-2;setTimeout(function(){ cani(o,s,f,t,-time,ease,fun); },60);
  } else if(time>0&&o.pnow==o.p) {
   clearInterval(o.timeout);o.pnow=null;
   if(fun) fun(o);
  }
 }
};
function aniseq(){
  if(aniseq.n>=aniseq.seq.length) return;
  aniseq.n++;
  aniseq.seq[aniseq.n-1]();
}
var dampani=function(o,s,f,t,n,time,ease,func,pnow,k){
 //s:style or innerHTML, f:from value, t:to value (f,t要加單位)
 //n:damp times, speed:setTimeout speed, n=0 -> loop
 //ease=0 -> no ease, ease>0 -> ease out, ease<0 -> ease in
 //o=(o instanceof Array)?o:[o];s=(s instanceof Array)?s:[s];f=(f instanceof Array)?f:[f];t=(t instanceof Array)?t:[t];u=(u instanceof Array)?u:[u];
 if(typeof pnow == "undefined") {
  var k=0;pnow=0;
  if(!(o instanceof Array)) o=[o];
  for(var i=0;i<o.length;i++) if(o[i].style.display=="none") o[i].style.display="block";
  for(var i=1;i<2*n;i++) { k+=Math.pow(i/(2*n),Math.abs(ease)); }
 } else pnow++;
 for(var i=0;i<o.length;i++) {
  if(!o[i].parentNode) return;//o[i]不存在時終止
  if (pnow%2==0) (s=="innerHTML")?o[i].innerHTML=((typeof(t)=="function")?t():t):(typeof(t)=="function"?o[i].style[s]=t():o[i].style[s]=t);
  else (s=="innerHTML")?o[i].innerHTML=((typeof(f)=="function")?f():f):(typeof(f)=="function"?o[i].style[s]=f():o[i].style[s]=f);
  if(n==0) {
   //var tempf=function(){ dampani(o,s,f,t,n,time,ease,func,pnow%2); };
   o[i].timeout=setTimeout(function(){ dampani(o,s,f,t,n,time,ease,func,pnow%2); },time/2);
  } else if(pnow<n*2) {
   var tempt=time/k;
   if(Math.abs(ease)!=ease) tempt=tempt*Math.pow(1-(pnow/(2*n)),Math.abs(ease));
   else tempt=tempt*Math.pow(pnow/(2*n),ease);
   o[i].timeout=setTimeout(function(){ dampani(o,s,f,t,n,time,ease,func,pnow,k); },tempt);
  } else if(func) func();
 }
};
var spriteani=function(p,fun,pnow,pnow2){//fireball01-spriteN.png ; l:loop(0[infinite],1,2), s:speed(1,2,0.5), r:rev(0,1), z:stopat[col,row]
 var o=p.o,l=p.l||0,s=p.s||1,r=p.r||0,rn=0,z=p.z;
 var n=o.style.backgroundImage.split("-"),n2=parseInt(n[n.length-2]);
 if(isNaN(n2)){ n=parseInt(n[n.length-1]);n2=1; } else{ n2=parseInt(n[n.length-1]);n=parseInt(n[n.length-2]); }
 pnow=typeof pnow!="undefined"&&pnow!==false?pnow:(r?n-1:0);pnow2=typeof pnow2!="undefined"&&pnow2!==false?pnow2:(r?n2-1:0);
 o.style.backgroundSize=(100*n)+"% "+(100*n2)+"%";o.style.backgroundRepeat="repeat";o.style.display="block";
 o.sanito=setInterval(function(){
  if(o.psani) { clearInterval(o.sanito);o.rsani=function(){o.psani=false;new spriteani(p,fun,pnow,pnow2);} }
  else if(!o||o.style.display=="none") { clearInterval(o.sanito);delete o.sanito;delete o.psani;delete o.rsani; }
  o.style.backgroundPosition=pnow*-100+"% "+pnow2*-100+"%";
  if(l){ if((z&&pnow==z[0]&&pnow2==z[1])||(pnow==(r?0:n-1)&&pnow2==(r?0:n2-1))) rn++;if(rn>=l){ clearInterval(o.sanito); if(fun) fun();} }
  pnow=(pnow+(r?-1:1))%n;if(pnow<0) pnow=n-1;if(pnow==(r?n-1:0)) pnow2=pnow2+(r?-1:1);
 },33/s);
};
var tfani=function(p,fun){//o(obi),rv([from,to,Time( <0:pinpong ),loop times(0:always loop),ease])
 var o=p.o,rv=p.rv,sv=p.sv;
 if(typeof o.tfto!="undefined"){ clearInterval(o.tfto);delete o.tfto; }
 if(rv){ rv[5]=Math.ceil(Math.abs(rv[2])/33);rv[6]=1; }//rv[5]:all step, rv[6]相當於pnow,
 if(sv){ sv[5]=Math.ceil(Math.abs(sv[2])/33);sv[6]=1; }
 o.tf={f:function(){//if(o.id=="glow") test(Math.random(),1);// if(o.id=="aniimg") test(o.id+"/"+Math.random(),1);
   if(!document.body.contains(o)||o.style.display=="none"){ o.tf.p();return; }
        var tempt="";//(t[i]-f[i])*easing(pnow/p,ease)
        if(rv){ tempt+="rotate("+(rv[0]+(rv[1]-rv[0])*easing(rv[6]/rv[5],rv[4]))+"deg) ";rv[6]++;
         if(rv[6]==rv[5]||rv[6]==0){ rv[6]=0;
          if(rv[3]==1) clearInterval(o.tfto); else rv[3]--;
          if(rv[2]<0){ var tempv=rv[0];rv[0]=rv[1];rv[1]=tempv; }
         }
        }
        if(sv){ tempt+="scale("+(sv[0]+(sv[1]-sv[0])*easing(sv[6]/sv[5],sv[4]))+","+(sv[0]+(sv[1]-sv[0])*easing(sv[6]/sv[5],sv[4]))+") ";sv[6]++;
         if(sv[6]==sv[5]||sv[6]==0){ sv[6]=0;
          if(sv[3]==1) clearInterval(o.tfto); else sv[3]--;
          if(sv[2]<0) { var tempv=sv[0];sv[0]=sv[1];sv[1]=tempv; } //else sv[6]=0;
         }
        }
        o.style.transform=tempt;
       }
      ,p:function(){ clearInterval(o.tfto);delete o.tfto; }
      ,r:function(){ if(typeof o.tfto=="undefined") o.tfto=setInterval(o.tf.f,33); }
      };
 o.tf.r();
}
function easing(n,ease){
 if(typeof ease=="number") { return ease>0?(Math.pow(n,ease)):(1-Math.pow(1-n,-ease)); }//ease>1->easein;ease<-1->easeout
 else if(ease=="cin") return 1-Math.sin(Math.acos(n));
 else if(ease=="cout") return Math.sin(Math.acos(1-n));
 else if(ease=="inout") return (1-Math.cos(n*Math.PI))/2;
 else if(ease.indexOf("popout")==0){ var k=parseFloat(ease.substr(6))||1.3; return Math.sin(Math.acos(1-n)*k)*( Math.sin(Math.acos(0))/Math.sin(Math.acos(0)*k)); }//popout1.5
 else if(ease=="backin") { var k=1.5;return Math.pow(n,2)*((k+1)*n-k); }
 else if(ease=="backout") { var k=1.5;return 1-(Math.pow(1-n,2)*((k+1)*(1-n)-k)); }
 else if(ease=="bounceout") { k=0.61803398875;k2=k+k*(1-k);return n==1?1:n>k2?(1-Math.abs(Math.sin(21*(n-k2))/40)):(n>k?1-Math.abs(Math.sin(13*(n-k))/8):Math.pow((1/k)*n,2)); }
 else if(ease=="eout") { k=0.61803398875;k2=k+k*(1-k);return n==1?1:n>k?1+Math.sin(10*(n-k)*Math.PI)/(10+(n-k)*100):Math.pow((1/k)*n,2); }
}
function ajax(url,fun,funerr,charset,ajaxi){//ajax後面的程式會因先執行導致出錯,故要執行的部分都放到fun中 ; !funerr則popmsg
 var xhr=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 ajax.abort=function(){xhr.abort();};
 xhr.onreadystatechange=function(){//test(xhr.readyState+" , "+xhr.status+xhr.responseText+xhr.responseTex,0)
  if(xhr.readyState==4) {//test(url+"<br>****<br>"+xhr.status+"<br>****<br>"+xhr.responseText,0,1,1);
   if(xhr.status==200) fun(xhr.responseText,ajaxi);
   //else if(xhr.status==0) { test("0,0");test("->"+xhr.reponse);return;if(funerr) funerr(); else {document.getElementById("ani").style.display="none";msg("popmsg",mlan0[0]);} }
   //else if(xhr.status==400) funerr(xhr.responseText);
   else setTimeout(function(){ if(funerr) funerr(xhr.responseText); else msgoff(function(){ msg("popmsg",mlan0[25]); }); },500);
  }
 };
 xhr.open("GET",url,true);
 if(charset) xhr.overrideMimeType("text/xml; charset="+charset);
 xhr.send();
}
function ajaxpost(url,postdata,fun,funerr,charset,t){
 var xhr=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 ajax.abort=function(){xhr.abort();};ajax.err="";
 ajax.timeout=setTimeout(function(){ ajax.err=mlan0[12];xhr.abort(); },(t||5)*1000);//xhr.abort後,xhr.status變成0
 xhr.onreadystatechange=function() {//test(xhr.readyState+" - "+xhr.status);
  if (xhr.readyState==4) {//alert(xhr.readyState+" - "+xhr.status+"\n"+xhr.responseText)
   if(xhr.status==200) { clearTimeout(ajax.timeout);if(fun) fun(xhr.responseText); }
   //else if(xhr.status==0) { msg("popmsg",mlan0[0]); }
   //else if(xhr.status==0) { clearTimeout(ajax.timeout);msg("popmsg",ajax.err||mlan0[0]); }//show timeout or offline msg
   else if(xhr.status==400||xhr.status==403) { clearTimeout(ajax.timeout);funerr(xhr.responseText); }//400 error validating access token,session expired ; 403 action not authorized
   else { clearTimeout(ajax.timeout);funerr(xhr.responseText); }
  }
 };
 xhr.open("POST",url,true);//xhr.withCredentials=true;
 xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");//+(charset?"; charset="+charset:"");//xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
 if(charset) xhr.overrideMimeType("text/xml; charset="+charset);//charset=big5"
 xhr.send(postdata);
}
function ajaxform(url,formdata,fun,funerr){
 var xhr=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 ajax.abort=function(){xhr.abort();};
 xhr.onreadystatechange=function(){//test(xhr.readyState+" , "+xhr.status+xhr.responseText)
  if (xhr.readyState==4) {
   if(xhr.status==200) fun(xhr.responseText);
   else funerr();
  }
 };
 xhr.open("POST",url,true);
 xhr.setRequestHeader("Content-type", "multipart/form-data");
 xhr.send(formdata);
}
function showp(){//for translate, show all innerHTML in (<p>
 var tempo=document.getElementsByTagName("p");
 for(var i=0;i<tempo.length;i++) alert(tempo[i].innerHTML);
};
function lanset(rt){//rt update canvas
 var templ=lan.substr(0,lan.indexOf("-"))||lan;templ=typeof mlan[0][templ]!=="undefined"?templ:(typeof mlan[0]["en"]!=="undefined"?"en":"zh");
 lanset.now=rt||lanset.now||templ;
 for(var i=0;i<mlan0all.length;i++) mlan0[i]=mlan0all[i][lanset.now]||mlan0all[i]["en"]||mlan0all[i]["zh"];
 for(var i=0;i<mlanrtall.length;i++) mlanrt[i]=mlanrtall[i][lanset.now]||mlanrtall[i]["en"]||mlanrtall[i]["zh"]||mlan0[mlanrtall[i]];
 //if(typeof mlan!="undefined"){
 // var tempo=document.getElementsByTagName("p");
 // for(var i=0;i<tempo.length&&mlan[i];i++) { tempo[i].innerHTML=mlan[i][lanset.now]||mlan[i]["en"]||mlan[i]["zh"]||mlan0[mlan[i]];}//可用mlan0
 //}
 i=0;
 while(document.getElementById("imgml"+i)){
  document.getElementById("imgml"+i).style.backgroundImage="url("+imgsml[0][i].replace(".",(imgsml[1].indexOf(lanset.now)!=-1?"_"+lanset.now:"")+".")+")";
  i++;
 }
 //audio.lan=audiolan[audiolan.indexOf(lanset.now)];
 //var templan=audiolan.match(new RegExp(lanset.now,"i"))||"".toString().toLowerCase();
 //if(templan&&audiofn.length){ audio=[];
 // for(var i=0;i<audiofn.length;i++) audio.push(audiofn[i]+templan+".mp3",1);
 //}
}
function xybody(o){//x,y relate to body
 var tempx=0,tempy=0;
 while(o.offsetParent) {
  tempx+=o.offsetLeft;tempy+=o.offsetTop;
  o=o.offsetParent;
 }
 return [tempx,tempy];
}
function pageback(fun,clear,nobtn){//add pageback -> pageback(fun); replace pageback -> pageback(fun,1); nobtn -> not show backbtn; pageback -> pageback(); pageback.chk -> check if can back; keeplast -> not del last stack
 //pageback(fun);不要在ani的fun裏,以免ani過程中pageback()抓到上一個pageback fun ; 切換頁面時則擺ani的fun裏,以免backbtn在頁面切換完成前出現
 if(fun){
  if(clear){ backstack=[fun];return; } else backstack.push(fun);
 } else if(backstack.length>0){
  if(ing||(pageback.chk&&!pageback.chk())) return;
  var tempf=backstack[backstack.length-1];
  if(!pageback.keeplast) backstack.pop();//backstack==msg() or pageback.keeplast 不刪backstack
  tempf();
 } else {
  if(winotify) window.external.notify("exitapp");//if(backstack.length==0||!pageback.test()) window.external.notify("exitapp");
 }
}
pageback.clear=function(){ document.getElementById("backbtn").style.display="none";backstack=[]; };
function backapp(){ setTimeout(function(){window.history.go(1-history.length);},500); } //delay for ios to save data
function savedata(){//JSON.parse(response);
 var tempdata="data="+JSON.stringify(data);
 if(typeof Android!=="undefined") { Android.savedata(tempdata); }
 else if(winotify) { window.external.notify(tempdata); }
 else if(typeof Windows!=="undefined") { Windows.Storage.ApplicationData.current.localSettings.values["data"]=tempdata; }
 else if(chkdevice=="ios") { document.location.href=appname+"://savedata#"+tempdata; }
 else if(typeof localStorage!=="undefined") { localStorage[appname]=tempdata; }
}
function test(txt,cls,f,textarea){if(!istest) return;
 if(!document.getElementById("test")) {
  var tempo=document.createElement("div");
  tempo.setAttribute("id","test");tempo.setAttribute("style","position:absolute;top:0.5em;left:0.5em;right:0.5em;opacity:0.8;color:#000;background:#fff;font-size:1.2em;z-index:30;");
  tempo.innerHTML="<div style='position:relative;width:100%;height:100%;overflow:auto;-webkit-user-select:text;'></div><div class='del' onclick='document.body.removeChild(document.getElementById(\"test\"))'>X</div>";
  document.body.appendChild(tempo);
 }
 if(textarea) txt="<textarea style='width:100%;height:100%'>"+txt+"</textarea>";
 if(!cls) txt=document.getElementById("test").firstChild.innerHTML+txt;
 document.getElementById("test").style.bottom=f?"0.5em":"auto";
 document.getElementById("test").firstChild.innerHTML=txt+"<br>";
}
function showerr(fun,r){//r->return value
 try{ fun();if(r) return true; }
 catch(e){ if(r) return false;test("Error code : "+e.code+"\nError message : "+e.message); }
}
//canvas fun start
var cans0=[function(c,sty){var w=c.canvas.width,h=c.canvas.height,lw=c.lineWidth/2,p=sty.candrawp; if(!p) c.arc(w/2,w/2,w/2-lw,0,2*Math.PI); else c.arc(p[0],p[1],p[2],0,2*Math.PI); }//circle
		  ,function(c,sty){var abs=sty.abs,w=(abs?screenw:1),h=(abs?screenh:1),p=sty.candrawp;//lines
			for(var i=0;i<p.length;i++){ if(sty.ss!="") c.stroke(); if(sty.ff!="") c.fill();c.beginPath();
		     for(var j=0;j<p[i].length;j++){ if(j==0) c.moveTo(p[i][j][0]*w,p[i][j][1]*h); else c.lineTo(p[i][j][0]*w,p[i][j][1]*h); }
		    }
		   }
		  ,function(c,sty){var w=c.canvas.width,h=c.canvas.height,lw=c.lineWidth/2;c.fillRect(0,0,w,w); }//rectangle
		  ];
function setcanv(sty,w,h){//w,h會太大影響效能
 var can=document.createElement("canvas");
 can.width=w||Math.max(ctxmain.canvas.width,ctxmain.canvas.height);//用"can.width="會重設canvas的style
 can.height=h||can.width;
 var c=can.getContext("2d");
 if(sty){
  c.strokeStyle=sty.ss;c.fillStyle=sty.fs;
  if(sty.f){ c.font=sty.f;c.lineWidth=Math.max(strfromto(sty.f," ","px")*0.1,2);c.textAlign=sty.ta||"center";c.textBaseline=sty.tb||"middle"; }
  c.lineWidth=sty.lw||c.lineWidth;
  c.shadowColor=sty.sc;c.shadowBlur=sty.sb;c.shadowOffsetX=sty.sx;c.shadowOffsetY=sty.sy;
  c.lineCap=sty.lc||"butt";//butt->無端點,round->圓端點,square->方端點
  c.lineJoin=sty.lj||"round";//round->圓交點,bevel->平交點,miter->尖交點
  c.miterLimit=sty.ml;//lineJoin設miter時限制顛端長度
 }
 if(typeof sty.candraw!="undefined"){
  if(typeof sty.candraw!="string"&&document.getElementById("v"+sty.candraw)) { can=document.getElementById("v"+sty.candraw);can.width=can.videoWidth;can.height=can.videoHeight;can.loop=true;can.play(); }
  else candraw(c,sty);
 }
 return can;
}
function candraw(c,sty){//sty.candraw->cans fun(cans0[0]) || string || video html element; sty.candrawp->points for cans fun; sty.abs->if absolute points
 var w=c.canvas.width,h=c.canvas.height;
 if(!sty.nocls) c.clearRect(0,0,w,h);
 if(sty){//have style
  c.strokeStyle=sty.ss||c.strokeStyle;
  c.fillStyle=sty.fs||c.fillStyle;
  if(sty.f){ c.font=sty.f;c.lineWidth=Math.max(strfromto(sty.f," ","px")*0.1,2);c.textAlign=sty.ta||c.textAlign;c.textBaseline=sty.tb||c.textBaseline; }
  c.lineWidth=sty.lw||c.lineWidth;
  c.shadowColor=sty.sc||c.shadowColor;c.shadowBlur=sty.sb||c.shadowBlur;c.shadowOffsetX=sty.sx||c.shadowOffsetX;c.shadowOffsetY=sty.sy||c.shadowOffsetY;
  c.lineCap=sty.lc||c.lineCap;c.lineJoin=sty.lj||c.lineJoin;
  c.miterLimit=sty.ml||c.miterLimit;
 }
 if(typeof sty.candraw=="string"){ if(sty.lw0){ var templw=c.lineWidth;c.lineWidth=sty.lw0;c.strokeStyle=sty.ss0;c.strokeText(sty.candraw,w*0.5,h*0.5);c.strokeStyle=sty.ss;c.lineWidth=templw; } if(sty.ss!="") c.strokeText(sty.candraw,w*0.5,h*0.5); if(sty.fs!="") c.fillText(sty.candraw,w*0.5,h*0.5); }
 else if(sty.candraw.tagName){ sty.candraw.play();c.drawImage(sty.candraw,0,0); }
 else{ c.beginPath();sty.candraw(c,sty); if(sty.ss!="") c.stroke();if(sty.fs!="") c.fill();if(sty.txt){ c.fillText(sty.txt,w*(sty.tx||0.5),h*(sty.ty||0.5)); } }
}
function imgobj(n){//turn imgs url to img object
 var img=new Image();
 img.onload=function(){
  imgs[imgs.indexOf(img.src.substring(img.src.lastIndexOf("/")+1))]=this;//"this" is img obj
  imgobj.n=imgobj.n+1||1;
 }
 img.src=imgs[n];
}
//canvas fun end
function disof(p1,p2){//p->point or line segment
 if(typeof p1[0][0]=="undefined"){//([x1,y1],[x2,y2])
  var dx=p1[0]-p2[0],dy=p1[1]-p2[1];
  return Math.sqrt(dx*dx+dy*dy);
 } else {//a1:x2-x1, a2:y2-y1, b1:x3-x4, b2:y3-y4, c1:x3-x1, c2:y3-y1
  var a1=p1[1][0]-p1[0][0],a2=p1[1][1]-p1[0][1],b1=p2[0][0]-p2[1][0],b2=p2[0][1]-p2[1][1],c1=p2[0][0]-p1[0][0],c2=p2[0][1]-p1[0][1];
  var temps=(c1*b2-c2*b1)/(a1*b2-a2*b1);
  var tempt=(a1*c2-a2*c1)/(a1*b2-a2*b1);
  if(0<=temps&&temps<=1&&0<=tempt&&tempt<=1) return [0,[p1[0][0]+temps*a1,p1[0][1]+temps*a2]];
  var l1=disof(p1[0],p1[1]),l2=disof(p2[0],p2[1]),tempp,tempd,tempdisarr=[tempd,tempp];
  temps=(c1*a1+c2*a2)/Math.pow(l1,2);
  if(temps>0&&temps<1){
   tempp=[p1[0][0]+temps*a1,p1[0][1]+temps*a2];tempd=disof(p2[0],tempp);
   if(typeof tempdisarr[0]=="undefined"||tempd<tempdisarr[0]) tempdisarr=[tempd,tempp,p2[0]];
  }
  temps=(c1*b1+c2*b2)/Math.pow(l2,2);
  if(temps>0&&temps<1){
   tempp=[p2[0][0]-temps*b1,p2[0][1]-temps*b2];tempd=disof(p1[0],tempp);
   if(typeof tempdisarr[0]=="undefined"||tempd<tempdisarr[0]) tempdisarr=[tempd,tempp,p1[0]];
  }
  c1=p2[1][0]-p1[0][0];c2=p2[1][1]-p1[0][1];
  temps=(c1*a1+c2*a2)/Math.pow(l1,2);
  if(temps>0&&temps<1){
   tempp=[p1[0][0]+temps*a1,p1[0][1]+temps*a2];tempd=disof(p2[1],tempp);
   if(typeof tempdisarr[0]=="undefined"||tempd<tempdisarr[0]) tempdisarr=[tempd,tempp,p2[1]];
  }
  c1=p2[0][0]-p1[1][0];c2=p2[0][1]-p1[1][1];
  temps=(c1*b1+c2*b2)/Math.pow(l2,2);
  if(temps>0&&temps<1){
   tempp=[p2[0][0]-temps*b1,p2[0][1]-temps*b2];tempd=disof(p1[1],tempp);
   if(typeof tempdisarr[0]=="undefined"||tempd<tempdisarr[0]) tempdisarr=[tempd,tempp,p1[1]];
  }
  var tempi=0,tempdisarr2=[[disof(p2[0],p1[0]),p1[0],p2[0]],[disof(p2[1],p1[0]),p1[0],p2[1]],[disof(p2[0],p1[1]),p1[1],p2[0]],[disof(p2[1],p1[1]),p1[1],p2[1]]];
  if(typeof tempdisarr[0]!="undefined") tempdisarr2.push(tempdisarr);
  for(var i=1;i<tempdisarr2.length;i++) if(tempdisarr2[i][0]<tempdisarr2[tempi][0]) tempi=i;
  return tempdisarr2[tempi];
 }
}
function mix(a){
 var tempn,tempA=[];
 while(tempA.length<a.length) tempA.push(a[tempA.length]);
 var outputA=[];
 while(tempA.length>0) {
  tempn=Math.floor(Math.random()*tempA.length);
  outputA.push(tempA[tempn]);tempA.splice(tempn,1);
 }
 return outputA;
}
function ransel(n0,n){
 var tempa=[];
 for(var i=0;i<n0;i++) tempa.push(i);
 return tempa.sort(function(){ return 0.5-Math.random(); }).slice(0,n||tempa.length);
}
function ranbt(n1,n2) { var min=Math.min(n1,n2),max=Math.max(n1,n2);
 return Math.floor(Math.random()*(max-min+1)+min);
}
function decodehtml(html) {//將html特殊符號碼轉成特殊符號
 var tempo=document.createElement("textarea");
 tempo.innerHTML=html;
 return tempo.value;
}
function deltag(html){
 var tempo=document.createElement("div");
 tempo.innerHTML=html;
 return tempo.textContent||tempo.innerText||"";
}
function getdatestr(d,n,tw){n=n||0;//n:加減日數
 var tempdate=new Date(d);
 tempdate.setDate(tempdate.getDate()+n);
 if(tw) return (tempdate.getFullYear()-1911)+slash+fzero((tempdate.getMonth()+1),2)+slash+fzero(tempdate.getDate(),2);
 else return tempdate.getFullYear()+"/"+fzero((tempdate.getMonth()+1),2)+"/"+fzero(tempdate.getDate(),2)
}
function getdatedif(d1,d2){//new Date(2018,4,1)=new Date("2018-05-01") //2020-11-08T21:53:42 or 2020/11/08 21:53:420+08:00(加上+08:00可使所有時區時間差相等;2020-11-08不可省略個位時間前面的0)
 if(!d2) { d1=new Date(d1);d2=date; }
 else { d1=new Date(d1);d2=new Date(d2); }
 return ((d1.getTime()-d2.getTime())/(1000*3600*24)); 
}
function fixcht(t){//fix &#xxxxx
 var arr=t.split("&#").join("").split(";");
 var t2="";
 for(var i=0;i<arr.length-1;i++) t2+=String.fromCharCode(arr[i]);//ignore last element, it's empty
 return t2;
}
function playaudio(an,loop,fun,p){ var tempa;//p.r:playbackRate,
 if(typeof Media==="undefined"){ tempa=new Audio((an.indexOf("://")==-1?(chkdevice=="android"?"/android_asset/www/a/":"a/"):"")+(typeof an=="string"?an:audio[an])+(audiolan.indexOf(lanset.now)!=-1?"_"+lanset.now:(audiolan.indexOf("en")!=-1?"_en":""))+".mp3");
  tempa.loop=loop;
  tempa.onended=function(){ if(fun) fun(tempa); };
  tempa.onpause=function(){  };
  //tempa.ontimeupdate=function(){ if(tempa.currentTime>0.3){ tempa.pause();tempa.currentTime=0;tempa.play(); } };
 } else { 
  tempa=new Media("/android_asset/www/a/"+(typeof an=="string"?an:audio[an])+(audiolan.indexOf(lanset.now)!=-1?"_"+lanset.now:(audiolan.indexOf("en")!=-1?"_en":""))+".mp3",function(){},function(err){});
 }
 if(p){ if(typeof p.r!="undefined") tempa.playbackRate=p.r;if(typeof p.v!="undefined") tempa.volume=p.v;
 }
 tempa.play();return tempa;
}
function chkimg(url,funok,funerr){
 //chkimg.img=new Image();
 //if(funok) chkimg.img.onload=funok;if(funerr) chkimg.img.onerror=funerr;
 //chkimg.img.crossOrigin="Anonymous";chkimg.img.src=url;
 var tempo=document.getElementById("hide");
 tempo.innerHTML="<img>";tempo=tempo.firstChild;
 if(funok) tempo.onload=function(){ funok(url) };if(funerr) tempo.onerror=funerr;
 tempo.src=url;
}
function fileok(url){
 var xhr=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 xhr.open("GET", url, false);xhr.send();
 return xhr.status != 404;
}
function arradd(a1,a2,sub){//typeof a2=="number" -> multiple
 var a3=[];
 if(typeof a2=="number") for(var i=0;i<a1.length;i++) a3[i]=a1[i]*a2;
 else for(var i=0;i<a1.length;i++) a3[i]=a1[i]+a2[i]*(sub?-1:1);
 return a3;
}
function eventpos(event){ var tempe=event.targetTouches?event.targetTouches[0]:event;return [tempe.pageX||tempe.clientX,tempe.pageY||tempe.clientY]; }
function tohexcol(c){
 if(c.indexOf("(")>=0){ var tempc=c.match(/\d+/g);c="#"+fzero(parseInt(tempc[0]).toString(16),2)+fzero(parseInt(tempc[1]).toString(16),2)+fzero(parseInt(tempc[2]).toString(16),2); }
 else if(c.length=="4") c="#"+c[1]+c[1]+c[2]+c[2]+c[3]+c[3];
 return c;
}
function mwh(o,w,h,l){ o.style.width=w+"em";o.style.marginLeft=-w/2+"em";o.style.lineHeight=(l||1)+"em";o.style.height=(h||w)+"em";o.style.marginTop=(-h/2||-w/2)+"em"; }
function colch(c){//rgb to # or #xxxxxx to rgb
 c=c.toLowerCase();
 if(c.indexOf("rgb")!=-1) { c=c.replace("rgb(","").replace("rgba(","").split(",");
  return "#"+fzero(parseInt(c[0]).toString(16),2)+fzero(parseInt(c[1]).toString(16),2)+fzero(parseInt(c[2]).toString(16),2);
 } else if(c.length==4) return "#"+c[1]+c[1]+c[2]+c[2]+c[3]+c[3];
 else return [parseInt(c[1]+c[2],16),parseInt(c[3]+c[4],16),parseInt(c[5]+c[6],16)];
}
function msg(id,txt,fun,p){ p=p||{};//ani以fontSize變化,故sty裡設font-size會失效
 var anio=document.getElementById("ani"); if(anio.innerHTML&&!p.cover) return;
 var tempf,s=p.s||["opacity","fontSize"],f=p.f,t=p.t,u=p.u,T=p.T||300,e=p.e||"popout1.4",sty=p.sty,fun0=p.fun0,fun2=p.fun2,nomask=p.nomask,mask=p.mask,comfirmt=p.comfirmt;
 if(id!="col"){ f=typeof f=="undefined"?[0,0.8]:f;t=typeof t=="undefined"?[1,1]:t;u=typeof u=="undefined"?["","em"]:u; }
 anio.innerHTML=(nomask?"":"<div class='disfun' "+(mask?"style='opacity:"+mask+"'":"")+" onClick='if(ani.ing) return;pageback()'></div>")+"<div id='msg'"+(sty?" style='"+sty+"'":"")+"></div>";//if(backstack[backstack.length-1]==msgoff) pageback()
 anio.style.opacity="1";anio.style.display="block";
 switch(id){
  case "popmsg":
   anio.firstChild.onclick=null;
   ani(document.getElementById("msg"),s,f,t,u,T,e,function(){ document.getElementById("msg").innerHTML="<div class='tb'><div>"+txt+"</div></div>";msg.timeout=setTimeout(function(){msgoff(fun);},1500); });
   break;
  case "pophtml"://with mask
  case "pop"://with mask, msgoff
   if(id=="pop") tempf=function(){ msg.timeout=setTimeout(function(){msgoff(fun);},1000); };
   sty?document.getElementById("msg").innerHTML=txt:anio.innerHTML=anio.innerHTML.replace("<div id=\"msg\"></div>",txt);
   anio=anio.childNodes[nomask?0:1];anio.style.position="absolute";anio.style.zIndex="9";
   ani(anio,s,f,t,u,T,e,tempf||fun);
   break;
  case "pop2"://進階confirm
   ani(document.getElementById("msg"),s,f,t,u,T,e,function(){ document.getElementById("msg").innerHTML=txt;if(fun) fun(); });
   break;
  case "confirm":
   pageback(msgoff);
   ani(document.getElementById("msg"),s,f,t,u,T,e,function(){ document.getElementById("msg").innerHTML="<div style='width:90%;height:60%;line-height:1em;margin:auto'><div class='tb'><div style='line-height:1.2em;'>"+txt+"</div></div></div><div class='btn btnno' style='position:absolute;bottom:1em;left:25%;"+(fun?"":"display:none;")+"'>"+mlan0[14]+"</div><div class='btn btnyes' style='position:absolute;bottom:1em;left:"+(fun?75:50)+"%;'>"+(comfirmt||mlan0[16])+"</div>";//onclick='"+(fun2?("("+fun+")()"):"msgoff()")+"'
    document.getElementById("msg").childNodes[1].onclick=function(){ fun2?fun():msgoff(); };document.getElementById("msg").childNodes[2].onclick=function(){ (fun2||fun||msgoff)(); };//onclick='("+(fun2||fun||msgoff)+")()'
    if(fun0) fun0();
   });
   break;
  case "loading"://{loadN,aniimg(" ":no aniimg),loadt}
   anio.innerHTML="<div class='disfun' onClick='if(ani.ing) return;pageback()'></div><div id='aniimg' style='"+(p.aniimg?"background-image:url("+p.aniimg+");":"")+(sty||"")+"'"+"></div><b class='aniimgt'>"+(txt||mlan0[9])+"</b>"+(p.loadN?"<div id='loading' style=''><b></b><div>"+(p.loadt||mlan0[26])+"</div></div>":"");
   if(p.aniimg&&p.aniimg.indexOf("-")!=-1) new spriteani({o:document.getElementById("aniimg")}); else if(p.aniimg!=" ") new tfani({o:document.getElementById("aniimg"),rv:[0,-360,p.aniT||3000,0,1]});
   msg.loadf=null;
   if(p.loadN){ var tempo=document.getElementById('loading');
    msg.loadN=p.loadN;msg.loadn=0;
    msg.loadf=function(){msg.loadn++;
     ani(tempo.firstChild,"width",((msg.loadn-1)/msg.loadN)*100,(msg.loadn/msg.loadN)*100,"%",200,1);
    };
   }
   if(fun) fun();
   break;
  case "col":
   pageback(function(){ msgoff(); },0,1);
   if(!colsel.o){colsel.col=[255,0,0],colsel.col0=[255,0,0];//col選取色,col0右上顏色
    txt="<div id='colselhead'><div class='colselc'></div><div class='colselinput'><div>R</div><input maxlength='3' type='number' value='255' onchange='inputcol(0)' /></div><div class='colselinput'><div style='background:#0a0'>G</div><input maxlength='3' style='box-shadow:0 0 0 1px #0a0 inset' type='number' value='0' onchange='inputcol(1)' /></div><div class='colselinput'><div style='background:#00f'>B</div><input maxlength='3' style='box-shadow:0 0 0 1px #00f inset' type='number' value='0' onchange='inputcol(2)' /></div><div class='colselinput' style='width:28%'><div style='background:#555'>#</div><input maxlength='7' style='box-shadow:0 0 0 1px #555 inset' value='#ff0000' onchange='inputcol()' /></div></div>"+
        "<div class='colselbody'><div class='colselp'><div><div id='colselpcur'></div></div><div id='colselp'></div></div><div class='colselbar'><div id='colselbarcur'></div><div id='colselbar'></div></div><div class='colselbtn tb'><div id='colfun'>"+mlan0[16]+"</div></div></div>";
    tempf=function(){ anio.childNodes[1].innerHTML=txt;
     document.getElementById("colfun").onclick=fun;
     setdrag(document.getElementById("colselbar"),colselbar);
     setdrag(document.getElementById("colselp"),colsel);
     colsel.o=anio.childNodes[1];
    };
    anio.innerHTML=anio.innerHTML.replace("<div id=\"msg\"></div>","<div class='colsel'></div>");
   } else {
    tempf=function(){ colsel.o.childNodes[0].style.display=colsel.o.childNodes[1].style.display="block"; }
	colsel.o.childNodes[0].style.display=colsel.o.childNodes[1].style.display="none";
	anio.innerHTML=anio.innerHTML.replace("<div id=\"msg\"></div>","");
	anio.appendChild(colsel.o);
   }
   ani(anio.childNodes[1],["opacity","width","height","marginLeft","margintop"],f||[0,280,330,-140,-165],t||[1,320,370,-160,-185],["","px","px","px","px"],-150,2,tempf);
   //tempf=function(){ document.getElementById("msg").innerHTML=txt; };
   //ani(document.getElementById("msg"),["opacity","width","height"],f||[0,300,11],t||[1,320,370],["","px","px"],-150,2,tempf);
   break;
  case "invite":
   ani(document.getElementById("msg"),["opacity","width","height"],[0,12,55],[1,14,60],["","em","%"],-150,2,fun);
   break;
  case "rank":
   txt="<table class='rank'><tr class='rankhead'><td style='width:15%'>"+mlanrt[2]+"</td><td style='width:45%'>"+mlanrt[3]+"</td><td style='width:40%'>"+mlanrt[4]+"</td></tr>"+txt;
   tempf=function(){ document.getElementById("msg").innerHTML=txt;if(fun) fun(); };
   ani(document.getElementById("msg"),["opacity","width","height"],[0,15,11],[1,20,16],["","em","em"],-300,2,tempf);//go with .rank's WH
   break;
  default:
   if(typeof gamepause!="undefined") gamepause();
   //if(typeof ifquit=="undefined") pageback(function(){ msgoff(gameresume);pageback(msg); });
   //pageback(function(){ msgoff();gamestart.pause=false;pageback(function(){ gamestart.pause=true;msg(0,0,0,p); }); });
   if(sty&&sty.length&&sty.indexOf("height:")==-1){ document.getElementById("msg").style.height="8em";document.getElementById("msg").style.marginTop="-4em"; }
   tempf=function(){ document.getElementById("msg").innerHTML="<div style='width:90%;height:50%;line-height:1em;margin:auto'><div class='tb'><div>"+mlan0[15]+"</div></div></div><div class='btn btnno' style='position:absolute;top:75%;left:25%;' onclick='pageback()'>"+mlan0[14]+"</div><div class='btn btnyes' style='position:absolute;top:75%;left:75%;' onclick='gamequit()'>"+mlan0[13]+"</div>"; };
   ani(document.getElementById("msg"),s,f,t,u,T,e,tempf);
 }
}
function colselbar(tempp){tempp=tempp[1];colsel.p=colsel.p||[255,0];
 var tempk=255/6,tempo=document.getElementById("colselbar"),tempi=document.getElementById("colselhead").getElementsByTagName("input");
 document.getElementById("colselbarcur").style.top=tempp+"px";
 if(tempp>=0&&tempp<tempk){ colsel.col0[0]=255;colsel.col0[1]=Math.floor(tempp*6);colsel.col0[2]=0; }
 else if(tempp>=tempk&&tempp<tempk*2){ colsel.col0[0]=Math.floor((tempk*2-tempp)*6);colsel.col0[1]=255;colsel.col0[2]=0; }
 else if(tempp>=tempk*2&&tempp<tempk*3){ colsel.col0[0]=0;colsel.col0[1]=255;colsel.col0[2]=Math.floor((tempp-tempk*2)*6); }
 else if(tempp>=tempk*3&&tempp<tempk*4){ colsel.col0[0]=0;colsel.col0[1]=Math.floor((tempk*4-tempp)*6);colsel.col0[2]=255; }
 else if(tempp>=tempk*4&&tempp<tempk*5){ colsel.col0[0]=Math.floor((tempp-tempk*4)*6);colsel.col0[1]=0;colsel.col0[2]=255; }
 else { colsel.col0[0]=255;colsel.col0[1]=0;colsel.col0[2]=Math.floor((tempk*6-tempp)*6); }
 document.getElementById("colselp").parentNode.style.backgroundImage="linear-gradient(to right, #fff, rgb("+colsel.col0[0]+","+colsel.col0[1]+","+colsel.col0[2]+"))";
 for(var i=0;i<3;i++){
  colsel.col[i]=colsel.col0[i]+Math.ceil((255-colsel.col0[i])*((255-colsel.p[0])/255));
  colsel.col[i]=colsel.col[i]-Math.ceil(colsel.col[i]*(colsel.p[1]/255));
  tempi[i].value=colsel.col[i];
 }
 tempi[3].value="#"+fzero(parseInt(tempi[0].value).toString(16),2)+fzero(parseInt(tempi[1].value).toString(16),2)+fzero(parseInt(tempi[2].value).toString(16),2);
 document.getElementById("colselhead").firstChild.style.background=tempi[3].value;
}
function colsel(tempp){tempp[0]=Math.min(255,tempp[0]);colsel.p=tempp;
 var tempo=document.getElementById("colselp"),tempi=document.getElementById("colselhead").getElementsByTagName("input");
 document.getElementById("colselpcur").style.left=tempp[0]+"px";
 document.getElementById("colselpcur").style.top=tempp[1]+"px";
 for(var i=0;i<3;i++){
  colsel.col[i]=colsel.col0[i]+Math.ceil((255-colsel.col0[i])*((255-tempp[0])/255));
  colsel.col[i]=colsel.col[i]-Math.ceil(colsel.col[i]*(tempp[1]/255));
  tempi[i].value=colsel.col[i];
 }
 tempi[3].value="#"+fzero(parseInt(tempi[0].value).toString(16),2)+fzero(parseInt(tempi[1].value).toString(16),2)+fzero(parseInt(tempi[2].value).toString(16),2);
 document.getElementById("colselhead").firstChild.style.background=tempi[3].value;
}
function msgoff(fun,keepani,p){ p=p||{};var tempo=document.getElementById("ani");
 clearTimeout(msg.timeout);if(typeof ajax.abort!=="undefined") ajax.abort();
 if(backstack[backstack.length-1]==msgoff) backstack.pop();
 if(document.getElementById("msg")) document.getElementById("msg").innerHTML="";
 ani(document.getElementById("msg")||tempo,p.s||"opacity",p.f||1,p.t||0,p.u||"",p.T||150,p.e||1.2,function(){
  if(typeof p.s=="string") tempo.style[p.s]=p.f+p.u; else if(p.s&&p.s.length) for(var i=0;i<p.s.length;i++) tempo.style[p.s[i]]=p.f[i]+p.u[i];
  if(!keepani) { tempo.innerHTML="";tempo.style.display="none"; }
  if(fun) fun();
 });
}
function setdrag(o,fun){
 o[ondownevent]=function(e){ if(o.draging) return; o.draging=true;
  var tempp0=xybody(o),tempp=eventpos(e);this.dragp=[Math.max(tempp[0]-tempp0[0],0),Math.max(tempp[1]-tempp0[1],0)];o.p0=this.dragp;
  //fun(this.dragp);
 };
 o[onmoveevent]=function(e){ if(!o.draging) return;
  var tempp0=xybody(o),tempp=eventpos(e);this.dragp=[Math.max(tempp[0]-tempp0[0],0),Math.max(tempp[1]-tempp0[1],0)];
  fun(this.dragp);
 };
 o[onupevent]=o[onoutevent]=function(){ if(!o.draging) return;//o[onoutevent]=
  delete this.dragp;delete this.p0;o.draging=false;
  fun();
 };
}
function inputcol(i){
 var tempi=document.getElementById("colselhead").getElementsByTagName("input"),tempk=255/6,tempp=[0,0];
 if(typeof i!=="undefined"){//rgb input
  if(/\d{1,3}/.test(tempi[i].value)&&tempi[i].value>=0&&tempi[i].value<=255) colsel.col[i]=tempi[i].value=parseInt(tempi[i].value); else { tempi[i].value=colsel.col[i];return; }
  tempi[3].value="#"+fzero(parseInt(colsel.col[0]).toString(16),2)+fzero(parseInt(colsel.col[1]).toString(16),2)+fzero(parseInt(colsel.col[2]).toString(16),2);
} else {
  if(/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(tempi[3].value)) colsel.col=colch(tempi[3].value); else { tempi[3].value=colch("rgb("+colsel.col[0]+","+colsel.col[1]+","+colsel.col[2]+")");return; }
  tempi[0].value=colsel.col[0];tempi[1].value=colsel.col[1];tempi[2].value=colsel.col[2];
 }
 document.getElementById("colselhead").firstChild.style.background=tempi[3].value;
  colsel.col0=[0,0,0];
  if(colsel.col[0]>=colsel.col[1]&&colsel.col[0]>=colsel.col[2]){ colsel.col0[0]=255;if(colsel.col[1]>colsel.col[2]) colsel.col0[1]=255-(colsel.col[0]-colsel.col[1]); else if(colsel.col[2]>colsel.col[1]) colsel.col0[2]=255-(colsel.col[0]-colsel.col[2]);tempp[0]=(1-colsel.col[colsel.col[1]<colsel.col[2]?1:2]/colsel.col[0])*255;tempp[1]=255-colsel.col[0]; }
  else if(colsel.col[1]>=colsel.col[0]&&colsel.col[1]>=colsel.col[2]){ colsel.col0[1]=255;if(colsel.col[0]>colsel.col[2]) colsel.col0[0]=255-(colsel.col[1]-colsel.col[0]); else if(colsel.col[2]>colsel.col[0]) colsel.col0[2]=255-(colsel.col[1]-colsel.col[2]);tempp[0]=(1-colsel.col[colsel.col[0]<colsel.col[2]?0:2]/colsel.col[1])*255;tempp[1]=255-colsel.col[1]; }
  else if(colsel.col[2]>=colsel.col[0]&&colsel.col[2]>=colsel.col[1]){ colsel.col0[2]=255;if(colsel.col[0]>colsel.col[1]) colsel.col0[0]=255-(colsel.col[2]-colsel.col[0]); else if(colsel.col[1]>colsel.col[0]) colsel.col0[1]=255-(colsel.col[2]-colsel.col[1]);tempp[0]=(1-colsel.col[colsel.col[0]<colsel.col[1]?0:1]/colsel.col[2])*255;tempp[1]=255-colsel.col[2]; }
  document.getElementById("colselpcur").style.left=tempp[0]+"px";document.getElementById("colselpcur").style.top=tempp[1]+"px";
  document.getElementById("colselp").parentNode.style.backgroundImage="linear-gradient(to right, #fff, rgb("+colsel.col0[0]+","+colsel.col0[1]+","+colsel.col0[2]+"))";
  if(colsel.col0[0]==255&&colsel.col0[2]==0) tempp=tempk*(colsel.col0[1]/255);
  else if(colsel.col0[1]==255&&colsel.col0[2]==0) tempp=tempk*((255*2-colsel.col0[0])/255);
  else if(colsel.col0[0]==0&&colsel.col0[1]==255) tempp=tempk*((255*2+colsel.col0[2])/255);
  else if(colsel.col0[0]==0&&colsel.col0[2]==255) tempp=tempk*((255*4-colsel.col0[1])/255);
  else if(colsel.col0[1]==0&&colsel.col0[2]==255) tempp=tempk*((255*4+colsel.col0[0])/255);
  else if(colsel.col0[0]==255&&colsel.col0[1]==0) tempp=tempk*((255*6-colsel.col0[2])/255);
  document.getElementById("colselbarcur").style.top=Math.floor(tempp)+"px";
}
function openurl(url){
 online(function(){
  if(typeof Android!=="undefined") { Android.openurl(url); }
  else if(winotify) window.external.notify("url->"+url);
  else if(chkdevice=="ios") { document.location.href=appname+"://openurl#"+escape(url); }
  else window.open(url,"_blank");
 });
}
function scroload(){ if(ing) return;
 if(scroload.o.scrollHeight-scroload.o.scrollTop-scroload.o.offsetHeight<1){ scroload.o.scrollTop=scroload.o.scrollHeight-scroload.o.offsetHeight-0.5;ing=true;msg("loading"," ",0,{aniimg:"loadingw.png",sty:"background-size:contain"});scroload.f();
 }
}
function loadjs(js,fun,funerr){
 var tempo=document.createElement("script");
 tempo.setAttribute("src",js);//tempo.crossorigin="anonymous";
 document.body.appendChild(tempo);
 tempo.onload=function(){ document.body.removeChild(tempo);if(fun) fun(); };
 tempo.onerror=function(){ document.body.removeChild(tempo);if(funerr) funerr(); };
}
function svgadd(o,t,gid){
 var tempo=document.createElement("div");
 if(gid&&document.getElementById(gid)) document.getElementById(gid).parentNode.removeChild(document.getElementById(gid));
 tempo.innerHTML="<svg><g"+(gid?" id='"+gid+"'":"")+">"+t+"</g></svg>";
 o.appendChild(tempo.firstChild.firstChild);
}
function spchar(t) { return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"); }
function ingx(){ ing=false; }
/*
’ -> \u2019 ; " -> \u0022 ; ' -> \u0027
（）
　➨【】▲▼►◄▶◀●☸⊗★。°
&lt;< &gt;>
*/