function ui(){ var o=document.createElement("div");o.id="ui01";
 o.innerHTML="<div id='logo'></div><div id='logot'>MAXDEV<div>Innovative app development</div></div><div id='nav'><a href='index.html'>首頁</a><a href='about.html'>關於</a><a href='app.html'>應用</a><a href='install.html'>安裝</a><a href='contact.html'>聯絡</a></div><div id='ham' onclick='shownav()'></div>";
 document.body.appendChild(o);
 o=document.createElement("div");o.id="ui02";
 o.innerHTML="<span id='co'>COPYRIGHT ©</span> <img src='maxdev.png'/> <span><a style='color:#ff0' href='privacy.html'>"+mlan0[20]+"</a></span>";//<span><a style='color:#ff0' href='terms.html'>"+mlan0[20]+"</a></span> 
 document.body.appendChild(o);
}
function shownav(){ if(shownav.ing) return;shownav.ing=true;
 var o=document.getElementById("nav").firstChild,n=document.getElementById("nav").childNodes.length*2;
 var tempb=o.style.marginTop=="0em";
 ani(o,"marginTop",tempb?0:-n,tempb?-n:0,"em",300,"cout",function(){ if(tempb) o.style.marginTop=""; o.style.display="";shownav.ing=false; });//style設""以免respanse失效
}
var mlan=[
 {zh:"歷史資料",en:"Historical data"},
];
var mlanrtall=[//must
 {zh:"無",en:""},
 {zh:"的紀錄",en:""},
 {zh:"紀念品",en:""},
 {zh:"零股寄單",en:""},
 {zh:"股東會時間",en:""},
 {zh:"股東會地點",en:""},
 {zh:"最後買進日",en:""},
 {zh:"股務代理",en:""},
 {zh:"回列表",en:""},
 {zh:"最後過戶日",en:""},
 {zh:"未連線無法顯示圖片。",en:""},//10
 {zh:"<b>未設定最愛個股</b><div style='font-size:0.8em;margin-top:1em'>可在個股詳細股東會資訊中設定。</div>",en:""},
 {zh:"電子投票時間",en:""},
 {zh:"請輸入股票代碼或公司名稱",en:""},
 {zh:"無 紀 錄<span>請確認資料篩濾是否設定導致</span>",en:""},
 {zh:"股票股利",en:""},
 {zh:"現金股利",en:""},
 {zh:"除權息日",en:""},
 {zh:"發放日",en:""},
],mlanrt=[];
var vartxt=appname+"230807",data,data0='data={ver:"'+vartxt+'",appvar:{fun:"",qs:""},accesstoken:"",id:"",name:"",lastinvite:0,lastq:"",stock:"",ag:[],stocky:[2022,2021,2020,2019,2018,2017,2016],fav:[],listcol:[0,1]}';//ag:agency, listcol:顯示欄位
var appname="MAXDEV";
istest=true;
localStorage.setItem("fapp",location.pathname.split('/').pop());
if(typeof localStorage!=="undefined"&&localStorage[appname]){ getdata(localStorage[appname]); } else getdata();
ui();