var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:80";
var blacklist = {"ocsp.apple.com":1,"mesu.apple.com":1,"updates-http.cdn-apple.com":1,"appldnld.apple.com":1,"xp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1,"ocsp.int-x3.letsencrypt.org":1,"world-gen.g.aaplimg.com":1,"mess-lab.com":1,"ng-vn-notice.gameitop.com":1,"*ads*.zadn.vn":1,"*game*.zdn.vn":1,"*page*zalo":1,"*zpg.zdn.vn":1,"ad-brix*":1,"ad.360in.com":1,"adcolony*":1,"adjust.com":1,"admicro*":1,"admixer*":1,"adservice*":1,"adsmoloco.com":1,"adsplay*":1,"adsystem*":1,"adtilt.com":1,"adtima*":1,"apinas.nct.vn":1,"appbaqend*":1,"applifier*":1,"applovin*":1,"applvn.com":1,"appnext*":1,"appsflyer.com":1,"beacon.qq.com":1,"bidmachine.io":1,"bugly.qq.com":1,"chartboost*":1,"cloud.unity3d.com":1,"cloudfront.net":1,"criteo*"*:1,"discovery*zalo*":1,"dmcdn.net":1,"doubleclick.net":1,"eclick.vn":1,"flurry.com":1,"google-analytics.com":1,
"googletagmanager.com":1,"googletagservices.com":1,"gop1.co":1,"inmobi.com":1,"jp.zaloapp.com":1,"leadloss.com":1,"log*zalo*":1,"log*zing*":1,"log.baomoi.com":1,"log.sdk.zadn.vn":1,"log4x.nixcdn.com":1,"lsosad.com":1,"midasplayer.com":1,"moatads*":1,"mopub.com":1,"pagead*":1,"polyad*":1,"polyfill.io":1,"pubnative.net":1,"qos-talk.123c.vn":1,"rayjump.com":1,"rubiconproject.com":1,"servicelayer.king.com":1,"serving-sys.com":1,"shifen.com":1,"shop*zalo*":1,"sp.zalo.me":1,"startappservice.com":1,"store*.zdn.vn":1,"store*zalo":1,"supersonicads*":1,"tapjoy*":1,"tracker-api.my.com":1,"tvnotice.kg.garena.vn":1,"umeng*":1,"unityads*":1,"vungle*";1,"wagbridge.alibaba.tanx.com":1,"wshifen.com":1,"www.cisco247.net":1,"www.fqtag.com":1,"zplayer.trk.zapps.vn":1};
function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for (i = 0; i < 300; i++) {
    if (blacklist[host]) {
      return PROXY;
    }
    var index = host.indexOf(".");
    if (index == -1) {
      break;
    } else {
      host = host.substring(index + 1);
    }
  }
  return DIRECT;
}
