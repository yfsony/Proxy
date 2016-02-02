var BLACK_HOLE = "PROXY 180.97.33.108:80";
var DIRECT = "DIRECT"

function n(h, r, m) { return isInNet(h, r, m); }
function s(u, r) { return shExpMatch(u, r); }
function d(h, r){ return dnsDomainIs(h, r); }

function FindProxyForURL(url, host)
{
    var u = url.toLowerCase();
    var h = host.toLowerCase();

// {Digit Domain Rule Filtration U+ Proxy}
if( d(h, "168.it168.com") ){  return BLACK_HOLE; }
if( d(h, "3m.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "5lyq.com") ){  return BLACK_HOLE; }
if( d(h, "778669.com") ){  return BLACK_HOLE; }
if( d(h, "801.tianya.cn") ){  return BLACK_HOLE; }
// {A+ Domain Rule Filtration U+ Proxy}
if( d(h, "ad.api.3g.tudou.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "admartzone.com") ){  return BLACK_HOLE; }
if( d(h, "ana.masky.biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "adtg.widerplanet.com") ){  return BLACK_HOLE; }
if( d(h, "agn.aty.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "analytics.163.com") ){  return BLACK_HOLE; }
if( d(h, "api.ad-brix.com") ){  return BLACK_HOLE; }
if( d(h, "api.amplitude.com") ){  return BLACK_HOLE; }
if( d(h, "acs86.com") ){  return BLACK_HOLE; }
if( d(h, "adcome.cn") ){  return BLACK_HOLE; }
if( d(h, "analytics-union.xunlei.com") ){  return BLACK_HOLE; }
if( d(h, "adinfuse.com") ){  return BLACK_HOLE; }
if( d(h, "admartzone.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "a.alimama.cn") ){  return BLACK_HOLE; }
if( d(h, "admob.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.mobi") ){  return BLACK_HOLE; }
if( d(h, "adsage.cn") ){  return BLACK_HOLE; }
if( d(h, "ads.vamaker.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "ads.mopub.com") ){  return BLACK_HOLE; }
if( d(h, "api.so.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "atanx.alicdn.com") ){  return BLACK_HOLE; }
if( d(h, "adsage.com") ){  return BLACK_HOLE; }
if( d(h, "adsmogo.org") ){  return BLACK_HOLE; }
if( d(h, "ads.mobclix.com") ){  return BLACK_HOLE; }
if( d(h, "afp.csbew.com") ){  return BLACK_HOLE; }
if( d(h, "adview.cn") ){  return BLACK_HOLE; }
if( d(h, "adwhirl.com") ){  return BLACK_HOLE; }
if( d(h, "adm.dxpmedia.com") ){  return BLACK_HOLE; }
if( d(h, "api.m.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "advimg.ad-mapps.com") ){  return BLACK_HOLE; }
if( d(h, "adwo.com") ){  return BLACK_HOLE; }
if( d(h, "appads.com") ){  return BLACK_HOLE; }
if( d(h, "ad.xiaomi.com") ){  return BLACK_HOLE; }
// {B+ Domain Rule Filtration U+ Proxy}
if( d(h, "bx.optimix.asia") ){  return BLACK_HOLE; }
if( d(h, "bshare.optimix.asia") ){  return BLACK_HOLE; }
if( d(h, "beacon.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "baifendian.com") ){  return BLACK_HOLE; }
if( d(h, "bs.da.hunantv.com") ){  return BLACK_HOLE; }
if( d(h, "bbs2.chinaz.com") ){  return BLACK_HOLE; }
if( d(h, "boss.qzone.qq.com") ){  return BLACK_HOLE; }
if( d(h, ".brand.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "bdjiaoben.wmxa.cn") ){  return BLACK_HOLE; }
if( d(h, "bfdcdn.com") ){  return BLACK_HOLE; }
if( d(h, "baichuan.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "bshare.optimix.asia") ){  return BLACK_HOLE; }
if( d(h, "biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "bxb.oupeng.com") ){  return BLACK_HOLE; }
// {C+ Domain Rule Filtration U+ Proxy}
if( d(h, "cpro.baidustatic.com") ){  return BLACK_HOLE; }
if( d(h, "ccs.ucweb.com") ){  return BLACK_HOLE; }
if( d(h, "cm.pos.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cm.g.doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "cpro.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cpc.brand.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "cms.laifeng.com") ){  return BLACK_HOLE; }
if( d(h, "ckm.iqiyi.com") ){  return BLACK_HOLE; }
if( d(h, "cbjslog.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "c.wrating.com") ){  return BLACK_HOLE; }
if( d(h, "cl3.webterren.com") ){  return BLACK_HOLE; }
if( d(h, "cl.webterren.com") ){  return BLACK_HOLE; }
if( d(h, "c.l.qq.com") ){  return BLACK_HOLE; }
if( d(h, "cdn.optaim.com") ){  return BLACK_HOLE; }
if( d(h, "ra.gtimg.com") ){  return BLACK_HOLE; }
if( d(h, "cast.ra.icast.cn") ){  return BLACK_HOLE; }
if( d(h, "cps.laifeng.com") ){  return BLACK_HOLE; }
if( d(h, "cdn.zampdsp.com") ){  return BLACK_HOLE; }
if( d(h, "cpro.baidu.com.cn") ){  return BLACK_HOLE; }
if( d(h, "ccc.x.jd.com") ){  return BLACK_HOLE; }
if( d(h, "c.ns8d.com") ){  return BLACK_HOLE; }
if( d(h, "c.gdt.qq.com") ){  return BLACK_HOLE; }
if( d(h, "cre.dp.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "capp.simsimi.com") ){  return BLACK_HOLE; }
if( d(h, "cpro.cr173.com") ){  return BLACK_HOLE; }
if( d(h, "cdn.vamaker.com") ){  return BLACK_HOLE; }
if( d(h, "cm.dmp.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "ckmap.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "cbjs.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cm.ipinyou.com") ){  return BLACK_HOLE; }
if( d(h, "c.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "c.bxb.oupeng.com") ){  return BLACK_HOLE; }
// {D+ Domain Rule Filtration U+ Proxy}
if( d(h, "domob.cn") ){  return BLACK_HOLE; }
if( d(h, "domob.com.cn") ){  return BLACK_HOLE; }
if( d(h, "domob.org") ){  return BLACK_HOLE; }
if( d(h, "doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "duomeng.cn") ){  return BLACK_HOLE; }
if( d(h, "duomeng.net") ){  return BLACK_HOLE; }
if( d(h, "duomeng.org") ){  return BLACK_HOLE; }
if( d(h, "d7.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "dmp.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "d0.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "d31qbv1cthcecs.cloudfront.net") ){  return BLACK_HOLE; }
if( d(h, "dxpmedia.com") ){  return BLACK_HOLE; }
if( d(h, "dsp.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "d1.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "dsp-impr2.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "dup.baidustatic.com") ){  return BLACK_HOLE; }
// {E+ Domain Rule Filtration U+ Proxy}
if( d(h, "ecmb.bdimg.com") ){  return BLACK_HOLE; }
if( d(h, "eff.inte.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "eclick.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "en.leturich.org") ){  return BLACK_HOLE; }
if( d(h, "economy.gmw.cn") ){  return BLACK_HOLE; }
if( d(h, "eiv.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "e-ltvp.inmobi.com") ){  return BLACK_HOLE; }
// {F+ Domain Rule Filtration U+ Proxy}
if( d(h, "fastapi.net") ){  return BLACK_HOLE; }
if( d(h, "file.market.xiaomi.com") ){  return BLACK_HOLE; }
// {G+ Domain Rule Filtration U+ Proxy}
if( d(h, "googleads.g.doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "g.doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "googleadsserving.cn") ){  return BLACK_HOLE; }
if( d(h, "googlesyndication.com") ){  return BLACK_HOLE; }
if( d(h, "google-analytics.com") ){  return BLACK_HOLE; }
if( d(h, "googlesyndication.com") ){  return BLACK_HOLE; }
if( d(h, "googleadservices.com") ){  return BLACK_HOLE; }
if( d(h, "googletagservices.com") ){  return BLACK_HOLE; }
if( d(h, "googeadsserving.cn") ){  return BLACK_HOLE; }
if( d(h, "g.fastapi.net") ){  return BLACK_HOLE; }
if( d(h, "g.cn.miaozhen.com") ){  return BLACK_HOLE; }
if( d(h, "g.163.com") ){  return BLACK_HOLE; }
if( d(h, "gw5.push.mcp.weibo.cn") ){  return BLACK_HOLE; }
if( d(h, "goto.sms.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "gs.mydown.yesky.com") ){  return BLACK_HOLE; }
if( d(h, "guomob.com") ){  return BLACK_HOLE; }
// {H+ Domain Rule Filtration U+ Proxy}
if( d(h, "h04.hxsame.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "html.atm.youku.com") ){  return BLACK_HOLE; }
if( d(h, "hxsame.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "hm.baidu.com.cn") ){  return BLACK_HOLE; }
if( d(h, "hm.baidu.com") ){  return BLACK_HOLE; }
// {I+ Domain Rule Filtration U+ Proxy}
if( d(h, "interface.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "immob.cn") ){  return BLACK_HOLE; }
if( d(h, "inmobi.com") ){  return BLACK_HOLE; }
if( d(h, "img.ujian.cc") ){  return BLACK_HOLE; }
if( d(h, "icon.55bbs.com") ){  return BLACK_HOLE; }
if( d(h, "i.gdt.qq.com") ){  return BLACK_HOLE; }
if( d(h, "img.twcczhu.com") ){  return BLACK_HOLE; }
if( d(h, "irs01.com") ){  return BLACK_HOLE; }
if( d(h, "impact.applifier.com") ){  return BLACK_HOLE; }
if( d(h, "i.w.inmobi.com") ){  return BLACK_HOLE; }
if( d(h, "img.wan.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "imp.optaim.com") ){  return BLACK_HOLE; }
if( d(h, "i.go.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "inte.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "itv.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "img.il8r.com") ){  return BLACK_HOLE; }
if( d(h, "icast.cn") ){  return BLACK_HOLE; }
if( d(h, "impservice.union.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "ifashion.ifeng.com") ){  return BLACK_HOLE; }
if( d(h, "imageplus.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "img.users.51.la") ){  return BLACK_HOLE; }
if( d(h, "i.00oo00.com") ){  return BLACK_HOLE; }
if( d(h, "imp.ad-plus.cn") ){  return BLACK_HOLE; }
if( d(h, "img.fd7c.com") ){  return BLACK_HOLE; }
// {J+ Domain Rule Filtration U+ Proxy}
if( d(h, "jzt.jd.com") ){  return BLACK_HOLE; }
if( d(h, "j.pcpop.com") ){  return BLACK_HOLE; }
if( d(h, "js.51.la") ){  return BLACK_HOLE; }
if( d(h, "js.users.51.la") ){  return BLACK_HOLE; }
// {K+ Domain Rule Filtration U+ Proxy}
if( d(h, "k.sinaimg.cn") ){  return BLACK_HOLE; }
// {L+ Domain Rule Filtration U+ Proxy}
if( d(h, "log.mix.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "log.mmstat.com") ){  return BLACK_HOLE; }
if( d(h, "lzplugin.bshare.cn") ){  return BLACK_HOLE; }
if( d(h, "lives.l.qq.com") ){  return BLACK_HOLE; }
// {M+ Domain Rule Filtration U+ Proxy}
if( d(h, "mtab.clickmon.co.kr") ){  return BLACK_HOLE; }
if( d(h, "map.dxpmedia.com") ){  return BLACK_HOLE; }
if( d(h, "market.xiaomi.com") ){  return BLACK_HOLE; }
if( d(h, "mega.mlt01.com") ){  return BLACK_HOLE; }
if( d(h, "mmstat.com") ){  return BLACK_HOLE; }
if( d(h, "media.tianjimedia.com") ){  return BLACK_HOLE; }
if( d(h, "media.yesky.com") ){  return BLACK_HOLE; }
if( d(h, "m.sa.sm.cn") ){  return BLACK_HOLE; }
if( d(h, "mix.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "miaoz.com.cn") ){  return BLACK_HOLE; }
if( d(h, "m.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "masky.biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "mobads.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "mmg.aty.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "mobads-logs.baidu.com") ){  return BLACK_HOLE; }
// {N+ Domain Rule Filtration U+ Proxy}
if( d(h, "null.null.io") ){  return BLACK_HOLE; }
if( d(h, "null.null.cn") ){  return BLACK_HOLE; }
if( d(h, "null.null.tw") ){  return BLACK_HOLE; }
// {Q+ Domain Rule Filtration U+ Proxy}
if( d(h, "oimageb4.ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "ope.tanx.com") ){  return BLACK_HOLE; }
if( d(h, "oimageb5.ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "oupeng.com") ){  return BLACK_HOLE; }
if( d(h, "optimix.asia") ){  return BLACK_HOLE; }
// {P+ Domain Rule Filtration U+ Proxy}
if( d(h, "pagead2.googlesyndication.com") ){  return BLACK_HOLE; }
if( d(h, "pos.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "p.tanx.com") ){  return BLACK_HOLE; }
if( d(h, "pv.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "px.3.cn") ){  return BLACK_HOLE; }
if( d(h, "pic.fastapi.net") ){  return BLACK_HOLE; }
if( d(h, "pcs.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "pd.brand.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "pups.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "pups.bdimg.com") ){  return BLACK_HOLE; }
if( d(h, "p.inte.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "pubads.g.doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "partner.googleadservices.com") ){  return BLACK_HOLE; }
if( d(h, "pgdt.gtimg.cn") ){  return BLACK_HOLE; }
if( d(h, "pcookie.mlt01.com") ){  return BLACK_HOLE; }
if( d(h, "profile.ams50.cloudfront.net") ){  return BLACK_HOLE; }
// {Q+ Domain Rule Filtration U+ Proxy}
if( d(h, "quote.tool.hexun.com") ){  return BLACK_HOLE; }
// {R+ Domain Rule Filtration U+ Proxy}
if( d(h, "rtax.criteo.com") ){  return BLACK_HOLE; }
if( d(h, "ra.icast.cn") ){  return BLACK_HOLE; }
if( d(h, "rc.jusha.com") ){  return BLACK_HOLE; }
if( d(h, "run.wmxa.cn") ){  return BLACK_HOLE; }
if( d(h, "rjs.niuxgame77.com") ){  return BLACK_HOLE; }
if( d(h, "rd.da.netease.com") ){  return BLACK_HOLE; }
if( d(h, "rwq.youle55.com") ){  return BLACK_HOLE; }
if( d(h, "rc.qzone.qq.com") ){  return BLACK_HOLE; }
if( d(h, "rec.g.163.com") ){  return BLACK_HOLE; }
if( d(h, "redirect.simba.taobao.com") ){  return BLACK_HOLE; }
if( d(h, "r.bxb.oupeng.com") ){  return BLACK_HOLE; }
// {S+ Domain Rule Filtration U+ Proxy}
if( d(h, "ssl-static.baifendian.com") ){  return BLACK_HOLE; }
if( d(h, "statis.api.3g.youku.com") ){  return BLACK_HOLE; }
if( d(h, "su.bdimg.com") ){  return BLACK_HOLE; }
if( d(h, "ssp.ad.xiaomi.com") ){  return BLACK_HOLE; }
if( d(h, "static.googleadsserving.cn") ){  return BLACK_HOLE; }
if( d(h, "static1.bfdcdn.com") ){  return BLACK_HOLE; }
if( d(h, "stuff.cdn.biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "sr.symcd.com") ){  return BLACK_HOLE; }
if( d(h, "s.0311zs.net") ){  return BLACK_HOLE; }
if( d(h, "sp.qf.56.com") ){  return BLACK_HOLE; }
if( d(h, "static.applifier.com") ){  return BLACK_HOLE; }
if( d(h, "ssl.google-analytics.com") ){  return BLACK_HOLE; }
if( d(h, "sax.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "slog.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "static.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "s1.adm.72zx.com") ){  return BLACK_HOLE; }
if( d(h, "sohu.ad-plus.cn") ){  return BLACK_HOLE; }
if( d(h, "show.58dtpf.com") ){  return BLACK_HOLE; }
if( d(h, "sohu.wrating.com") ){  return BLACK_HOLE; }
if( d(h, "show.pipi7788.com") ){  return BLACK_HOLE; }
if( d(h, "static.atm.youku.com") ){  return BLACK_HOLE; }
if( d(h, "su.bdimg.com") ){  return BLACK_HOLE; }
if( d(h, "so.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "s.click.taobao.com") ){  return BLACK_HOLE; }
if( d(h, "s.cr-nielsen.com") ){  return BLACK_HOLE; }
if( d(h, "score.my.tv.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "sdkapp.mobile.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "s.csbew.com") ){  return BLACK_HOLE; }
if( d(h, "s.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "stat.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "so.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "shared.ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "smartadserver.com") ){  return BLACK_HOLE; }
if( d(h, "s.go.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "shared.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "static.bshare.cn") ){  return BLACK_HOLE; }
// {T+ Domain Rule Filtration U+ Proxy}
if( d(h, "tpc.googlesyndication.com") ){  return BLACK_HOLE; }
if( d(h, "track.ra.icast.cn") ){  return BLACK_HOLE; }
if( d(h, "tapjoyads.com") ){  return BLACK_HOLE; }
// {U+ Domain Rule Filtration U+ Proxy}
if( d(h, "umeng.co") ){  return BLACK_HOLE; }
if( d(h, "umeng.com") ){  return BLACK_HOLE; }
if( d(h, "utrack.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "u291014.778669.com") ){  return BLACK_HOLE; }
if( d(h, "union.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "u.cjlaoshi.com") ){  return BLACK_HOLE; }
if( d(h, "umtrack.com") ){  return BLACK_HOLE; }
if( d(h, "uyunad.com") ){  return BLACK_HOLE; }
if( d(h, "u1.img.mobile.sina.cn") ){  return BLACK_HOLE; }
// {V+ Domain Rule Filtration U+ Proxy}
if( d(h, "v.admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "vip.yule8.net") ){  return BLACK_HOLE; }
if( d(h, "vqq.admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "vipp.rwjfs.com") ){  return BLACK_HOLE; }
if( d(h, "viidii.info") ){  return BLACK_HOLE; }
if( d(h, "v1.ujian.cc") ){  return BLACK_HOLE; }
if( d(h, "vgdtimg.cn") ){  return BLACK_HOLE; }
if( d(h, "v.gdt.qq.com") ){  return BLACK_HOLE; }
// {W+ Domain Rule Filtration U+ Proxy}
if( d(h, "webterren.com") ){  return BLACK_HOLE; }
if( d(h, "www.googletagservices.com") ){  return BLACK_HOLE; }
if( d(h, "wn.pos.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "wmdeal.qtmojo.com") ){  return BLACK_HOLE; }
if( d(h, "www.google-analytics.com") ){  return BLACK_HOLE; }
// {X+ Domain Rule Filtration U+ Proxy}
if( d(h, "x.jd.com") ){  return BLACK_HOLE; }
// {Y+ Domain Rule Filtration U+ Proxy}
if( d(h, "ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "youmi.net") ){  return BLACK_HOLE; }
// {Z+ Domain Rule Filtration U+ Proxy}
if( d(h, "znsv.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "zdw.w8.com.cn") ){  return BLACK_HOLE; }
if( d(h, "zhongxinghuanyu.com") ){  return BLACK_HOLE; }
// {Wildcard Domain Rule Filtration U+ Proxy}
if( d(h, ".gdt.qq.com") ){  return BLACK_HOLE; }
if( d(h, ".alimama.cn") ){  return BLACK_HOLE; }
if( d(h, ".union.xunlei.com") ){  return BLACK_HOLE; }
if( d(h, ".56.itc.cn") ){  return BLACK_HOLE; }
if( d(h, ".wrating.com") ){  return BLACK_HOLE; }
if( d(h, ".qf.56.com") ){  return BLACK_HOLE; }
// {Wildcard Path Domain Rule Filtration U+ Proxy}
if( ( d(h, ".cache.netease.com") && s(u, "*/share/**") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, ".bdstatic.com") && s(u, "***/adsense/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// {Path Domain Rule Filtration U+ Proxy}
if( ( d(h, "s9.rr.itc.cn") && s(u, "*/wapChange/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s8.rr.itc.cn") && s(u, "*/wapChange/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "mydown.yesky.com") && s(u, "***/26*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.qpgmw.cn") && s(u, "*/101/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "qzonestyle.gtimg.cn") && s(u, "**gdt*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "qzonestyle.gtimg.cn") && s(u, "**/boss_pic/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cn.qzonestyle.gtimg.cn") && s(u, "*/space_item/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i.gtimg.cn") && s(u, "*/app_icon/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "xiazaiba.com") && s(u, "*/ads/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "xiazaiba.com") && s(u, "*/andriod_ios_banner/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.youku.com") && s(u, "***/js*youku_laifeng_v6.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.atm.youku.com") && s(u, "*idea*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "n.mark.letv.com") && s(u, "*/m3u8api/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stats.chinaz.com") && s(u, "*/tool_img/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stats.chinaz.com") && s(u, "*/newshome*wz.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stats.chinaz.com") && s(u, "*/newshome*wz5.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stats.chinaz.com") && s(u, "*/newshome*code.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "chinaz.com") && s(u, "*/js*new.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "iqshw.com") && s(u, "**/m/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "skycn.com") && s(u, "*show*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "skycn.com") && s(u, "*/js*info.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "skycn.com") && s(u, "*/js*top.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ikoo8.com") && s(u, "*/js*ipdata.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "wb.gtimg.com") && s(u, "**/shumway/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "n.firefoxchina.cn") && s(u, "*iframes*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "play.baidu.com") && s(u, "**/html/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "js.sohu.com") && s(u, "*pv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "imp.go.sohu.com") && s(u, "*/201111/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "******/ad/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "db.auto.sohu.com") && s(u, "*/js/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2013/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2012/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2014/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2015/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2016/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "getip.js.sohu.com") && s(u, "*ip*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.cache.netease.com") && s(u, "**/analysis/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img2.126.net") && s(u, "**/adbox/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img2.126.net") && s(u, "**/0915/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img2.126.net") && s(u, "**/1210/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img3.126.net") && s(u, "*kaola*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "house.163.com") && s(u, "*special*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "jiu.163.com") && s(u, "*special*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ipservice.163.com") && s(u, "*ipquery*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "163.com") && s(u, "*special*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "xf.house.163.com") && s(u, "**/include/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.126.net") && s(u, "*channel4*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "tv.sohu.com") && s(u, "*commonfrag*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "tv.sohu.com") && s(u, "*/swf/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ip.ws.126.net") && s(u, "*ipquery*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img6.cache.netease.com") && s(u, "*/script/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img5.cache.netease.com") && s(u, "*/script/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}

if( ( d(h, "caipiao.163.com") && s(u, "*mailPromote_static.htm*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "fa.163.com") && s(u, "*ext*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "baoxian.163.com") && s(u, "*/iframe/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img3.126.net") && s(u, "*shop*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}

if( ( d(h, "sohu.com") && s(u, "*sohuflash_1.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/js*c.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/auto/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "*/htmlfile/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "play.baidu.com") && s(u, "**/html/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "txt.go.sohu.com") && s(u, "*ip*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "yicai.zdcj.net") && s(u, "*/images*qqq.jpg") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "*/jingzhun/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "a1.itc.cn") && s(u, "*pv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "n.firefoxchina.cn") && s(u, "*html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "fragment.firefoxchina.cn") && s(u, "*html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cr173.com") && s(u, "*show*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cr173.com") && s(u, "*/js*info_left.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "js.sohu.com") && s(u, "*wrating20120726.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "***/brand/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "*/tongrong/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "yicai.zdcj.net") && s(u, "*js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cr173.com") && s(u, "*/js*all_970.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ikoo8.com") && s(u, "*/js*tooltips.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ikoo8.com") && s(u, "***/aliyun/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.tianyaui.com") && s(u, "*/data/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.tianyaui.com") && s(u, "*/adsame/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "icon.zol-img.com.cn") && s(u, "**/new*xiazai_detail_youdao.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "soft.hao123.com") && s(u, "*/js/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*news_week_hot_1_1.3.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.youku.com") && s(u, "*/paycenter/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*asp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*count2.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*/js*tl01.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*/js*soft.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*/js*main.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.tianyaui.com") && s(u, "**/js*wizard.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*index_2.0_004.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pc6.com") && s(u, "*/html/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pc6.com") && s(u, "*/jf/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*index_2.0_003.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*index_3.0_right_001.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.pay.baidu.com") && s(u, "*/adpadmin_feed/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// {Statistics Domain Rule Filtration U+ Proxy}
if( d(h, ".51yes.com") ){  return BLACK_HOLE; }
if( d(h, ".cnzz.com") ){  return BLACK_HOLE; }
if( d(h, ".miaozhen.com") ){  return BLACK_HOLE; }
    return DIRECT;
}
