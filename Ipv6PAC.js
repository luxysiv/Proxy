var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:80";
var blacklist = {"ocsp.apple.com":1,"mesu.apple.com":1,"updates-http.cdn-apple.com":1,"appldnld.apple.com":1,"xp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1,"ocsp.int-x3.letsencrypt.org":1,"world-gen.g.aaplimg.com":1,"mess-lab.com":1,"ng-vn-notice.gameitop.com":1,"a.appbaqend.com":1,"a.applvn.com":1,"a2.chartboost.com":1,"aax-fe-sin.amazon-adsystem.com":1,"aax-fe.amazon-adsystem.com":1,"adc-ad-assets.adtilt.com":1,"adc3-assets.adcolony.com":1,"adc3-launch.adcolony.com":1,"ads.mopub.com":1,"ads30.adcolony.com":1,"adservice.google.com":1,"adtima-media-td.zadn.vn":1,"adtima-media.zadn.vn":1,"api.adtimaserver.vn":1,"app.adjust.com":1,"as.ad-brix.com":1,"auction.unityads.unity3d.com":1,"auiopt.unityads.unity3d.com":1,"bugly.qq.com":1,"c.amazon-adsystem.com":1,"c4d-cdn.adcolony.com":1,"campaign.ad-brix.com":1,"cdp.cloud.unity3d.com":1,"conf.lsosad.com":1,"config.ad-brix.com":1,"config.unityads.unity3d.com":1,"connect.tapjoy.com":1,"content.tapjoy.com":1,"crashlytics.l.google.com":1,"d.adroll.mgr.consensu.org":1,"d.applovin.com":1,"e.crashlytics.com":1,"events.appsflyer.com":1,"events3.adcolony.com":1,"g.eclick.vn":1,"gameeve.beacon.qq.com":1,"gamestr.beacon.qq.com":1,"googleads.g.doubleclick.net":1,"gum.criteo.com":1,"images.startappservice.com":1,"ios.bugly.qq.com":1,"l.a.eclick.vn":1,"live.chartboost.com":1,"log.adtimaserver.vn":1,"log.baomoi.com":1,"log.eclick.vn":1,"log.sdk.zadn.vn":1,"logs.papertrailapp.com":1,"mads.amazon-adsystem.com":1,"ms.applovin.com":1,"ms.applvn.com":1,"onelink.appsflyer.com":1,"pagead2.googlesyndication.com":1,"pagead46.l.doubleclick.net":1,"partnerad.l.doubleclick.net":1,"placements.tapjoy.com":1,"plbslog.umeng.com":1,"pubads.g.doubleclick.net":1,"publisher-config.unityads.unity3d.com":1,"req.startappservice.com":1,"rpc.tapjoy.com":1,"rt.applovin.com":1,"rt.applvn.com":1,"s.adroll.com":1,"s.eclick.vn":1,"ssl-google-analytics.l.google.com":1,"ssl.google-analytics.com":1,"staging.s.eclick.vn":1,"static.eclick.vn":1,"stats.g.doubleclick.net":1,"t.appsflyer.com":1,"tpc.googlesyndication.com":1,"tracking.ad-brix.com":1,"tvnotice.kg.garena.vn":1,"ulogs.umeng.com":1,"v2.chartboost.com":1,"video.startappservice.com":1,"wd.adcolony.com":1,"wd.adcolony.xyz":1,"webview.unityads.unity3d.com":1,"ws.tapjoyads.com":1,"www-google-analytics.l.google.com":1,"www.adtilt.com":1,"www.google-analytics.com":1,"www.googleadservices.com":1,"www.googletagmanager.com":1,"www.googletagservices.com":1};
function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for (i = 0; i < 30; i++) {
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