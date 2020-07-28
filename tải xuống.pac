function FindProxyForURL(url, host){
var P="PROXY ";
var PROXY_DIRECT="PROXY localhost:35010";
var u=url.toLowerCase();
var h=host.toLowerCase();
var BLACK="PROXY localhost:35008";
var WHITE=PROXY_DIRECT;
var r;

function id(ar){for(var i=0;i<ar.length;i++){if(dnsDomainIs(h,ar[i]))return i}return null}
function ids(ar){for(var i=0;i<ar.length;i++){if(shExpMatch(u,"*://"+ar[i]+"/*"))return i}return null}
function is(ar){for(var i=0;i<ar.length;i++){if(shExpMatch(u,ar[i]))return i}return null}
function ii(ar,ar2){for(var i=0;i<ar.length;i++){if(isInNet(h,ar[i][0],ar2[ar[i][1]]))return i}return null}
function n(arg){return arg!=null}

var WHITE_DOMAINS=[];
var WHITE_SUBDOMAINS=[];
var WHITE_URLS=[];
var WHITE_NETWORKS=[];
var WHITE_MASKS=[];

if(n(r=id(WHITE_DOMAINS))){return WHITE}
if(n(r=ids(WHITE_SUBDOMAINS))){return WHITE}
if(n(r=is(WHITE_URLS))){return WHITE}
if(n(r=ii(WHITE_NETWORKS,WHITE_MASKS))){return WHITE}

var BLACK_DOMAINS=["app.adjust.com","appsflyer.com","log.baomoi.com","ssl.google-analytics.com","ssl.google-analytics.com","doubleclick.net","www.googletagservices.com","settings.crashlytics.com","onesignal.com","adtima-media.zadn.vn","log.api.zaloapp.com","ads.platform.zalo.me","unityads.unity3d.com","ad-brix.com","gum.criteo.com","eclick.vn","polyad.net","admicro.vn","cheap-ads.net","adcolony.com","adtilt.com","cdp.cloud.unity3d.com","vungle.com","supersonicads.com","atom-data.io","connect.facebook.net","www.google-analytics.com","googlesyndication.com","adservice.google.com","adservice.google.com.vn","unity3d.com","googleadservices.com","www.googletagmanager.com","store-photo-s500.zdn.vn","chartboost.com","startappservice.com","cf.iadsdk.apple.com","adtimaserver.vn","ng-vn-notice.gameitop.com","superads.cn","adthor.com","fuse-ad.com","zcoup.com","ocsp.apple.com","leadloss.com","aerserv.com","mopub.com","appnext.com","rayjump.com","umeng.com","apinas.nct.vn","log4x.nixcdn.com","stc-nas.nixcdn.com","scorecardresearch.com","midasplayer.com","servicelayer.king.com","tapjoyads.com","tapjoy.com"];
var BLACK_SUBDOMAINS=[];
var BLACK_URLS=["http://*.cheap-ads.net/*","http://*.admicro.vn/*"];
var BLACK_NETWORKS=[];
var BLACK_MASKS=[];

if(n(r=id(BLACK_DOMAINS))){return BLACK}
if(n(r=ids(BLACK_SUBDOMAINS))){return BLACK}
if(n(r=is(BLACK_URLS))){return BLACK}
if(n(r=ii(BLACK_NETWORKS,BLACK_MASKS))){return BLACK}

var IN_DOMAINS=[];
var OUT_DOMAINS=[];
var IN_SUBDOMAINS=[];
var OUT_SUBDOMAINS=[];
var IN_URLS=[];
var OUT_URLS=[];
var IN_NET=[];
var IN_MASK=[];
var OUT_NET=[];

if(n(r=id(IN_DOMAINS))){return P+OUT_DOMAINS[r]}
if(n(r=ids(IN_SUBDOMAINS))){return P+OUT_SUBDOMAINS[r]}
if(n(r=is(IN_URLS))){return P+OUT_URLS[r]}
if(n(r=ii(IN_NET,IN_MASK))){return P+OUT_NET[r]}

return PROXY_DIRECT;
}
