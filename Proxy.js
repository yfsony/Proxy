var BLACK_HOLE = "PROXY 0.0.0.0:80";
var DIRECT = "DIRECT"

function n(h, r, m) { return isInNet(h, r, m); }
function s(u, r) { return shExpMatch(u, r); }
function d(h, r){ return dnsDomainIs(h, r); }

function FindProxyForURL(url, host)
{
    var u = url.toLowerCase();
    var h = host.toLowerCase();
//////////////////////////////////
// UPlusList        Version:2.1 //
// Last  Modified Time:2016-4-4 //
// Mail:  BurpSuite@Hotmail.com //
// Twitter:  twitter.com/OAuth4 //
// Github: github.com/burpsuite //
// URL:       http://UPlus7.win //
//////////////////////////////////
// $Digit Domain Rule Filter$
if( d(h, "168.it168.com") ){  return BLACK_HOLE; }
if( d(h, "3m.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "37cs.com") ){  return BLACK_HOLE; }
if( d(h, "5lyq.com") ){  return BLACK_HOLE; }
if( d(h, "778669.com") ){  return BLACK_HOLE; }
if( d(h, "801.tianya.cn") ){  return BLACK_HOLE; }
if( d(h, "5y9nfpes.52pk.com") ){  return BLACK_HOLE; }
// $A+ Domain Rule Filter$
if( d(h, "ad.api.3g.youku.com") ){  return BLACK_HOLE; }
if( d(h, "ad.api.3g.tudou.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "atanx.alicdn.com") ){  return BLACK_HOLE; }
if( d(h, "ads.data.pplive.com") ){  return BLACK_HOLE; }
if( d(h, "analytics.techweb.com.cn") ){  return BLACK_HOLE; }
if( d(h, "admartzone.com") ){  return BLACK_HOLE; }
if( d(h, "ana.masky.biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "adtg.widerplanet.com") ){  return BLACK_HOLE; }
if( d(h, "all.rising.com.cn") ){  return BLACK_HOLE; }
if( d(h, "asimgs.pplive.cn") ){  return BLACK_HOLE; }
if( d(h, "aw.kejet.net") ){  return BLACK_HOLE; }
if( d(h, "analytics.163.com") ){  return BLACK_HOLE; }
if( d(h, "api.ad-brix.com") ){  return BLACK_HOLE; }
if( d(h, "api.amplitude.com") ){  return BLACK_HOLE; }
if( d(h, "acs86.com") ){  return BLACK_HOLE; }
if( d(h, "adcome.cn") ){  return BLACK_HOLE; }
if( d(h, "analytics-union.xunlei.com") ){  return BLACK_HOLE; }
if( d(h, "adnetworkperformance.com") ){  return BLACK_HOLE; }
if( d(h, "adgeo.163.com") ){  return BLACK_HOLE; }
if( d(h, "adinfuse.com") ){  return BLACK_HOLE; }
if( d(h, "ads.yxdown.com") ){  return BLACK_HOLE; }
if( d(h, "afp.wasu.cn") ){  return BLACK_HOLE; }
if( d(h, "adm.funshion.com") ){  return BLACK_HOLE; }
if( d(h, "afpcreative.wasu.cn") ){  return BLACK_HOLE; }
if( d(h, "ads.techweb.cn") ){  return BLACK_HOLE; }
if( d(h, "admartzone.com") ){  return BLACK_HOLE; }
if( d(h, "ads.data.pplive.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "a.alimama.cn") ){  return BLACK_HOLE; }
if( d(h, "as.aplus.pptv.com") ){  return BLACK_HOLE; }
if( d(h, "admob.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.mobi") ){  return BLACK_HOLE; }
if( d(h, "a.chartboost.com") ){  return BLACK_HOLE; }
if( d(h, "adsage.cn") ){  return BLACK_HOLE; }
if( d(h, "ads.vamaker.com") ){  return BLACK_HOLE; }
if( d(h, "admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "ads.mopub.com") ){  return BLACK_HOLE; }
if( d(h, "api.so.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "agn.aty.sohu.com") ){  return BLACK_HOLE; }
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
if( d(h, "adpro.cn") ){  return BLACK_HOLE; }
if( d(h, "appads.com") ){  return BLACK_HOLE; }
if( d(h, "ad.xiaomi.com") ){  return BLACK_HOLE; }
// $B+ Domain Rule Filter$
if( d(h, "bx.optimix.asia") ){  return BLACK_HOLE; }
if( d(h, "bshare.optimix.asia") ){  return BLACK_HOLE; }
if( d(h, "beacon.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "baifendian.com") ){  return BLACK_HOLE; }
if( d(h, "bs.da.hunantv.com") ){  return BLACK_HOLE; }
if( d(h, "bbs2.chinaz.com") ){  return BLACK_HOLE; }
if( d(h, "bdj.tianya.cn") ){  return BLACK_HOLE; }
if( d(h, ".brand.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "bdjiaoben.wmxa.cn") ){  return BLACK_HOLE; }
if( d(h, "bfdcdn.com") ){  return BLACK_HOLE; }
if( d(h, "baichuan.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "bshare.optimix.asia") ){  return BLACK_HOLE; }
if( d(h, "bobo.163.com") ){  return BLACK_HOLE; }
if( d(h, "biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "bxb.oupeng.com") ){  return BLACK_HOLE; }
// $C+ Domain Rule Filter$
if( d(h, "cpro.baidustatic.com") ){  return BLACK_HOLE; }
if( d(h, "ccs.ucweb.com") ){  return BLACK_HOLE; }
if( d(h, "cm.pos.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cm.g.doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "cpro.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cpc.brand.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "cm.zhiziyun.com") ){  return BLACK_HOLE; }
if( d(h, "cms.laifeng.com") ){  return BLACK_HOLE; }
if( d(h, "ckm.iqiyi.com") ){  return BLACK_HOLE; }
if( d(h, "cbjslog.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cdn.tanx.com") ){  return BLACK_HOLE; }
if( d(h, "click2.hd.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "c.wrating.com") ){  return BLACK_HOLE; }
if( d(h, "chaoliangyun.com") ){  return BLACK_HOLE; }
if( d(h, "cm.jd.com") ){  return BLACK_HOLE; }
if( d(h, "cl3.webterren.com") ){  return BLACK_HOLE; }
if( d(h, "cl.webterren.com") ){  return BLACK_HOLE; }
if( d(h, "comic.hanhande.com") ){  return BLACK_HOLE; }
if( d(h, "cifenqi.com") ){  return BLACK_HOLE; }
if( d(h, "cm.l.qq.com") ){  return BLACK_HOLE; }
if( d(h, "comic.52pk.com") ){  return BLACK_HOLE; }
if( d(h, "cdn.optaim.com") ){  return BLACK_HOLE; }
if( d(h, "cpro.qqtn.com") ){  return BLACK_HOLE; }
if( d(h, "cm.suning.com") ){  return BLACK_HOLE; }
if( d(h, "ra.gtimg.com") ){  return BLACK_HOLE; }
if( d(h, "c5.72zx.com") ){  return BLACK_HOLE; }
if( d(h, "cast.ra.icast.cn") ){  return BLACK_HOLE; }
if( d(h, "cps.laifeng.com") ){  return BLACK_HOLE; }
if( d(h, "cdn.zampdsp.com") ){  return BLACK_HOLE; }
if( d(h, "click.aliyun.com") ){  return BLACK_HOLE; }
if( d(h, "cm.optaim.com") ){  return BLACK_HOLE; }
if( d(h, "cpro.baidu.com.cn") ){  return BLACK_HOLE; }
if( d(h, "ccc.x.jd.com") ){  return BLACK_HOLE; }
if( d(h, "c.ns8d.com") ){  return BLACK_HOLE; }
if( d(h, "click.hd.sohu.com.cn") ){  return BLACK_HOLE; }
if( d(h, "cre.dp.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "capp.simsimi.com") ){  return BLACK_HOLE; }
if( d(h, "h5channel.51pgzs.com") ){  return BLACK_HOLE; }
if( d(h, "cpro.cr173.com") ){  return BLACK_HOLE; }
if( d(h, "counter.yesky.com") ){  return BLACK_HOLE; }
if( d(h, "click.hm.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cdn.vamaker.com") ){  return BLACK_HOLE; }
if( d(h, "chaoad.com") ){  return BLACK_HOLE; }
if( d(h, "cm.dmp.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "ckmap.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "cbjs.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "cm.ipinyou.com") ){  return BLACK_HOLE; }
if( d(h, "c.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "c.bxb.oupeng.com") ){  return BLACK_HOLE; }
// $D+ Domain Rule Filter$
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
if( d(h, "down.xiazai2.net") ){  return BLACK_HOLE; }
if( d(h, "d31qbv1cthcecs.cloudfront.net") ){  return BLACK_HOLE; }
if( d(h, "down.xiazaijia.cc") ){  return BLACK_HOLE; }
if( d(h, "dxpmedia.com") ){  return BLACK_HOLE; }
if( d(h, "doc100.net") ){  return BLACK_HOLE; }
if( d(h, "dsp.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "dap.gentags.net") ){  return BLACK_HOLE; }
if( d(h, "d1.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "dsp-impr2.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "de.as.pptv.com") ){  return BLACK_HOLE; }
if( d(h, "dup.baidustatic.com") ){  return BLACK_HOLE; }
// $E+ Domain Rule Filter$
if( d(h, "eff.inte.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "eclick.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "en.leturich.org") ){  return BLACK_HOLE; }
if( d(h, "economy.gmw.cn") ){  return BLACK_HOLE; }
if( d(h, "eiv.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "e4.6dad.com") ){  return BLACK_HOLE; }
if( d(h, "ezssp.kejet.net") ){  return BLACK_HOLE; }
if( d(h, "e-ltvp.inmobi.com") ){  return BLACK_HOLE; }
// $F+ Domain Rule Filter$
if( d(h, "fastapi.net") ){  return BLACK_HOLE; }
if( d(h, "filecdn.72zx.com") ){  return BLACK_HOLE; }
if( d(h, "ftp-idc.pconline.com.cn") ){  return BLACK_HOLE; }
// $G+ Domain Rule Filter$
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
if( d(h, "gas.data.pplive.com") ){  return BLACK_HOLE; }
if( d(h, "g.cn.miaozhen.com") ){  return BLACK_HOLE; }
if( d(h, "gdt.qq.com") ){  return BLACK_HOLE; }
if( d(h, "g.6sfg.com") ){  return BLACK_HOLE; }
if( d(h, "games.ifeng.com") ){  return BLACK_HOLE; }
if( d(h, "good.ta80.com") ){  return BLACK_HOLE; }
if( d(h, "goto.sms.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "gw5.push.mcp.weibo.cn") ){  return BLACK_HOLE; }
if( d(h, "gs.mydown.yesky.com") ){  return BLACK_HOLE; }
if( d(h, "guomob.com") ){  return BLACK_HOLE; }
// $H+ Domain Rule Filter$
if( d(h, "h04.hxsame.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "html.atm.youku.com") ){  return BLACK_HOLE; }
if( d(h, "hit.data.pplive.com") ){  return BLACK_HOLE; }
if( d(h, "hxsame.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "haocaitou168.com") ){  return BLACK_HOLE; }
if( d(h, "hm.baidu.com.cn") ){  return BLACK_HOLE; }
if( d(h, "hm.baidu.com") ){  return BLACK_HOLE; }
// $I+ Domain Rule Filter$
if( d(h, "interface.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "immob.cn") ){  return BLACK_HOLE; }
if( d(h, "inmobi.com") ){  return BLACK_HOLE; }
if( d(h, "img.ujian.cc") ){  return BLACK_HOLE; }
if( d(h, "icon.55bbs.com") ){  return BLACK_HOLE; }
if( d(h, "img.twcczhu.com") ){  return BLACK_HOLE; }
if( d(h, "irs01.com") ){  return BLACK_HOLE; }
if( d(h, "impact.applifier.com") ){  return BLACK_HOLE; }
if( d(h, "imageplus.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "i.w.inmobi.com") ){  return BLACK_HOLE; }
if( d(h, "img.wan.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "i.go.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "irs01.net") ){  return BLACK_HOLE; }
if( d(h, "impservice2.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "imp.optaim.com") ){  return BLACK_HOLE; }
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
if( d(h, "int.dpool.sina.com.cn") ){  return BLACK_HOLE; }
// $J+ Domain Rule Filter$
if( d(h, "jzt.jd.com") ){  return BLACK_HOLE; }
if( d(h, "junjichu.net") ){  return BLACK_HOLE; }
if( d(h, "j.pcpop.com") ){  return BLACK_HOLE; }
if( d(h, "jp.as.pptv.com") ){  return BLACK_HOLE; }
if( d(h, "js.51.la") ){  return BLACK_HOLE; }
if( d(h, "j.qiqiyii.com") ){  return BLACK_HOLE; }
if( d(h, "js.revsci.net") ){  return BLACK_HOLE; }
if( d(h, "js.users.51.la") ){  return BLACK_HOLE; }
// $K+ Domain Rule Filter$
if( d(h, "k.sinaimg.cn") ){  return BLACK_HOLE; }
// $L+ Domain Rule Filter$
if( d(h, "log.mix.sina.com.cn") ){  return BLACK_HOLE; }
if( d(h, "log.mmstat.com") ){  return BLACK_HOLE; }
if( d(h, "lzplugin.bshare.cn") ){  return BLACK_HOLE; }
if( d(h, "lives.l.qq.com") ){  return BLACK_HOLE; }
if( d(h, "live.chartboost.com") ){  return BLACK_HOLE; }
if( d(h, "love.bobo.com") ){  return BLACK_HOLE; }
// $M+ Domain Rule Filter$
if( d(h, "mtab.clickmon.co.kr") ){  return BLACK_HOLE; }
if( d(h, "map.dxpmedia.com") ){  return BLACK_HOLE; }
if( d(h, "market.xiaomi.com") ){  return BLACK_HOLE; }
if( d(h, "mmg.aty.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "mega.mlt01.com") ){  return BLACK_HOLE; }
if( d(h, "m.simba.taobao.com") ){  return BLACK_HOLE; }
if( d(h, "msg.71.am") ){  return BLACK_HOLE; }
if( d(h, "mmstat.com") ){  return BLACK_HOLE; }
if( d(h, "media.tianjimedia.com") ){  return BLACK_HOLE; }
if( d(h, "media.yesky.com") ){  return BLACK_HOLE; }
if( d(h, "mapping.yoyi.com.cn") ){  return BLACK_HOLE; }
if( d(h, "m.sa.sm.cn") ){  return BLACK_HOLE; }
if( d(h, "miaoz.com.cn") ){  return BLACK_HOLE; }
if( d(h, "m.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "masky.biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "mobads.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "mobads-logs.baidu.com") ){  return BLACK_HOLE; }
// $N+ Domain Rule Filter$
if( d(h, "nvsehui.com") ){  return BLACK_HOLE; }
if( d(h, "nsclick.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "null.null.cn") ){  return BLACK_HOLE; }
if( d(h, "null.null.tw") ){  return BLACK_HOLE; }
// $Q+ Domain Rule Filter$
if( d(h, "oimageb4.ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "ope.tanx.com") ){  return BLACK_HOLE; }
if( d(h, "oimageb5.ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "oupeng.com") ){  return BLACK_HOLE; }
if( d(h, "optimix.asia") ){  return BLACK_HOLE; }
// $P+ Domain Rule Filter$
if( d(h, "pagead2.googlesyndication.com") ){  return BLACK_HOLE; }
if( d(h, "pos.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "p.tanx.com") ){  return BLACK_HOLE; }
if( d(h, "px.3.cn") ){  return BLACK_HOLE; }
if( d(h, "pic.fastapi.net") ){  return BLACK_HOLE; }
if( d(h, "pub.funshion.com") ){  return BLACK_HOLE; }
if( d(h, "pcs.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "push.zhanzhang.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "pd.brand.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "pups.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "pingtcss.qq.com") ){  return BLACK_HOLE; }
if( d(h, "pic.fastapi.net") ){  return BLACK_HOLE; }
if( d(h, "pups.bdimg.com") ){  return BLACK_HOLE; }
if( d(h, "p.inte.sogou.com") ){  return BLACK_HOLE; }
if( d(h, "pv.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "pv.hd.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "pubads.g.doubleclick.net") ){  return BLACK_HOLE; }
if( d(h, "partner.googleadservices.com") ){  return BLACK_HOLE; }
if( d(h, "pv.alert.autohome.com.cn") ){  return BLACK_HOLE; }
if( d(h, "pgdt.gtimg.cn") ){  return BLACK_HOLE; }
if( d(h, "pcookie.mlt01.com") ){  return BLACK_HOLE; }
if( d(h, "profile.ams50.cloudfront.net") ){  return BLACK_HOLE; }
// $Q+ Domain Rule Filter$
if( d(h, "quote.tool.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "qf1.hd.sohu.com.cn") ){  return BLACK_HOLE; }
// $R+ Domain Rule Filter$
if( d(h, "rtax.criteo.com") ){  return BLACK_HOLE; }
if( d(h, "ra.icast.cn") ){  return BLACK_HOLE; }
if( d(h, "rc.jusha.com") ){  return BLACK_HOLE; }
if( d(h, "rp.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "run.wmxa.cn") ){  return BLACK_HOLE; }
if( d(h, "rjs.niuxgame77.com") ){  return BLACK_HOLE; }
if( d(h, "rd.da.netease.com") ){  return BLACK_HOLE; }
if( d(h, "rwq.youle55.com") ){  return BLACK_HOLE; }
if( d(h, "redirect.simba.taobao.com") ){  return BLACK_HOLE; }
if( d(h, "reachmax.cn") ){  return BLACK_HOLE; }
if( d(h, "r.bxb.oupeng.com") ){  return BLACK_HOLE; }
// $S+ Domain Rule Filter$
if( d(h, "ssl-static.baifendian.com") ){  return BLACK_HOLE; }
if( d(h, "statis.api.3g.youku.com") ){  return BLACK_HOLE; }
if( d(h, "su.bdimg.com") ){  return BLACK_HOLE; }
if( d(h, "ssp.ad.xiaomi.com") ){  return BLACK_HOLE; }
if( d(h, "static.googleadsserving.cn") ){  return BLACK_HOLE; }
if( d(h, "static1.bfdcdn.com") ){  return BLACK_HOLE; }
if( d(h, "show.xiazai8844.net") ){  return BLACK_HOLE; }
if( d(h, "stuff.cdn.biddingx.com") ){  return BLACK_HOLE; }
if( d(h, "sr.symcd.com") ){  return BLACK_HOLE; }
if( d(h, "show.qqabcd8899.cn") ){  return BLACK_HOLE; }
if( d(h, "s.0311zs.net") ){  return BLACK_HOLE; }
if( d(h, "sdk.yunfan.com") ){  return BLACK_HOLE; }
if( d(h, "show.re.taobao.com") ){  return BLACK_HOLE; }
if( d(h, "static.applifier.com") ){  return BLACK_HOLE; }
if( d(h, "ssl.google-analytics.com") ){  return BLACK_HOLE; }
if( d(h, "sax.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "s.0318-7979111.com") ){  return BLACK_HOLE; }
if( d(h, "slog.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "static.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "s1.adm.72zx.com") ){  return BLACK_HOLE; }
if( d(h, "sohu.ad-plus.cn") ){  return BLACK_HOLE; }
if( d(h, "s.13328888882.com") ){  return BLACK_HOLE; }
if( d(h, "static-ssl.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "sandai.net") ){  return BLACK_HOLE; }
if( d(h, "mediav.com") ){  return BLACK_HOLE; }
if( d(h, "show.58dtpf.com") ){  return BLACK_HOLE; }
if( d(h, "score.my.tv.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "s.go.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "sohu.wrating.com") ){  return BLACK_HOLE; }
if( d(h, "show.pipi7788.com") ){  return BLACK_HOLE; }
if( d(h, "static.atm.youku.com") ){  return BLACK_HOLE; }
if( d(h, "show-a.mediav.com") ){  return BLACK_HOLE; }
if( d(h, "statics.motu.pagechoice.net") ){  return BLACK_HOLE; }
if( d(h, "su.bdimg.com") ){  return BLACK_HOLE; }
if( d(h, "so.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "s.cr-nielsen.com") ){  return BLACK_HOLE; }
if( d(h, "sdkapp.mobile.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "s.csbew.com") ){  return BLACK_HOLE; }
if( d(h, "show.58dtpf.com") ){  return BLACK_HOLE; }
if( d(h, "s.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "stat.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "so.lianmeng.360.cn") ){  return BLACK_HOLE; }
if( d(h, "shared.ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "smartadserver.com") ){  return BLACK_HOLE; }
if( d(h, "shared.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "static.bshare.cn") ){  return BLACK_HOLE; }
// $T+ Domain Rule Filter$
if( d(h, "tpc.googlesyndication.com") ){  return BLACK_HOLE; }
if( d(h, "track.ra.icast.cn") ){  return BLACK_HOLE; }
if( d(h, "tui1999.com") ){  return BLACK_HOLE; }
if( d(h, "tg.1155t.cn") ){  return BLACK_HOLE; }
if( d(h, "test.stat.yunfancdn.com") ){  return BLACK_HOLE; }
if( d(h, "tk.pk060.com") ){  return BLACK_HOLE; }
if( d(h, "tajs.qq.com") ){  return BLACK_HOLE; }
if( d(h, "tg.602.com") ){  return BLACK_HOLE; }
if( d(h, "tapjoyads.com") ){  return BLACK_HOLE; }
// $U+ Domain Rule Filter$
if( d(h, "umeng.co") ){  return BLACK_HOLE; }
if( d(h, "umeng.com") ){  return BLACK_HOLE; }
if( d(h, "utrack.hexun.com") ){  return BLACK_HOLE; }
if( d(h, "u291014.778669.com") ){  return BLACK_HOLE; }
if( d(h, "union.youdao.com") ){  return BLACK_HOLE; }
if( d(h, "u.cjlaoshi.com") ){  return BLACK_HOLE; }
if( d(h, "u349036.778669.com") ){  return BLACK_HOLE; }
if( d(h, "url.downxia.com") ){  return BLACK_HOLE; }
if( d(h, "url.goosai.com") ){  return BLACK_HOLE; }
if( d(h, "umtrack.com") ){  return BLACK_HOLE; }
if( d(h, "uyunad.com") ){  return BLACK_HOLE; }
if( d(h, "u1.img.mobile.sina.cn") ){  return BLACK_HOLE; }
if( d(h, "url.d9soft.com") ){  return BLACK_HOLE; }
// $V+ Domain Rule Filter$
if( d(h, "v.admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "vip.yule8.net") ){  return BLACK_HOLE; }
if( d(h, "vod.fp.qq.com") ){  return BLACK_HOLE; }
if( d(h, "vqq.admaster.com.cn") ){  return BLACK_HOLE; }
if( d(h, "v.aty.sohu.com") ){  return BLACK_HOLE; }
if( d(h, "v.chartboost.com") ){  return BLACK_HOLE; }
if( d(h, "vipp.rwjfs.com") ){  return BLACK_HOLE; }
if( d(h, "viidii.info") ){  return BLACK_HOLE; }
if( d(h, "v1.ujian.cc") ){  return BLACK_HOLE; }
if( d(h, "vgdtimg.cn") ){  return BLACK_HOLE; }
// $W+ Domain Rule Filter$
if( d(h, "webterren.com") ){  return BLACK_HOLE; }
if( d(h, "www.googletagservices.com") ){  return BLACK_HOLE; }
if( d(h, "wn.pos.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "wmdeal.qtmojo.com") ){  return BLACK_HOLE; }
if( d(h, "web.data.pplive.com") ){  return BLACK_HOLE; }
if( d(h, "www.google-analytics.com") ){  return BLACK_HOLE; }
if( d(h, "wa.wisedsp.net") ){  return BLACK_HOLE; }
// $X+ Domain Rule Filter$
if( d(h, "x.jd.com") ){  return BLACK_HOLE; }
// $Y+ Domain Rule Filter$
if( d(h, "ydstatic.com") ){  return BLACK_HOLE; }
if( d(h, "youmi.net") ){  return BLACK_HOLE; }
// $Z+ Domain Rule Filter$
if( d(h, "znsv.baidu.com") ){  return BLACK_HOLE; }
if( d(h, "zdw.w8.com.cn") ){  return BLACK_HOLE; }
if( d(h, "zhongxinghuanyu.com") ){  return BLACK_HOLE; }
// $Wildcard Domain Rule Filter$
if( d(h, ".alimama.cn") ){  return BLACK_HOLE; }
if( d(h, ".union.xunlei.com") ){  return BLACK_HOLE; }
if( d(h, ".wrating.com") ){  return BLACK_HOLE; }
if( d(h, ".mediav.com") ){  return BLACK_HOLE; }
if( d(h, ".kejet.net") ){  return BLACK_HOLE; }
if( d(h, ".50bang.org") ){  return BLACK_HOLE; }
if( d(h, ".qtmojo.com") ){  return BLACK_HOLE; }
if( d(h, ".myhard.com") ){  return BLACK_HOLE; }
if( d(h, ".foxdsp.com") ){  return BLACK_HOLE; }
if( d(h, ".allyes.com") ){  return BLACK_HOLE; }
if( d(h, ".gridsumdissector.com") ){  return BLACK_HOLE; }
if( d(h, ".xtgreat.com") ){  return BLACK_HOLE; }
if( d(h, ".56.itc.cn") ){  return BLACK_HOLE; }
if( d(h, ".synacast.com") ){  return BLACK_HOLE; }
if( d(h, ".qf.56.com") ){  return BLACK_HOLE; }
if( d(h, ".72zx.com") ){  return BLACK_HOLE; }
if( d(h, ".tanx.com") ){  return BLACK_HOLE; }
if( d(h, ".adsame.com") ){  return BLACK_HOLE; }
if( d(h, ".adpro.cn") ){  return BLACK_HOLE; }
// $All Domain File Rule Filter$
if( ( d(h, "") && s(u, "*ad.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "") && s(u, "*adpro.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "") && s(u, "*alls_foot.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "") && s(u, "*alls_top.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "") && s(u, "*wrating.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "") && s(u, "*cpro.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "") && s(u, "*crawler.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $All Domain Path Rule Filter$
if( ( d(h, "") && s(u, "*/pos/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "") && s(u, "*/videos*other/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
//
//
// $Wildcard Path Domain Rule Filter$
if( ( d(h, ".cache.netease.com") && s(u, "*/share/**") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, ".yuehui.163.com") && s(u, "*mail*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, ".l.qq.com") && s(u, "*livemsg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $Down Site Domain  Rule Filter$ //
// $Last Modified  Time:2016-2-10$ //
/////////////////////////////////////
// $http://www.jb51.net$
if( ( d(h, "img.jb51.net") && s(u, "***/js*down.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img.jb51.net") && s(u, "***/js*rjdown.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img.jb51.net") && s(u, "*inc*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img.jb51.net") && s(u, "*/js*function.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img.jb51.net") && s(u, "*imgby*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img.jb51.net") && s(u, "*zanzhu*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img.jb51.net") && s(u, "*/js*a.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.arpun.com$
if( ( d(h, "arpun.com") && s(u, "*all.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*banner.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*tops.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*softinfo.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*softinfo2.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*softinfo3.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*softinfo4.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*softinfo6.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*softinfo8.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "arpun.com") && s(u, "*/arpun*softinfo9.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.cr173.com$
if( ( d(h, "cr173.com") && s(u, "*show*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cr173.com") && s(u, "*/js*info_left.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cr173.com") && s(u, "*/js*all_970.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.pc6.com$
if( ( d(h, "pc6.com") && s(u, "*/html/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pc6.com") && s(u, "*/jf/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pc6.com") && s(u, "*rjinfo.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.greenxf.com$
if( ( d(h, "greenxf.com") && s(u, "*asp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*count2.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*/js*tl01.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*/js*soft.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "greenxf.com") && s(u, "*/js*main.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.xiazaiba.com$
if( ( d(h, "xiazaiba.com") && s(u, "*/ads/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "xiazaiba.com") && s(u, "*/andriod_ios_banner/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.skycn.com$
if( ( d(h, "skycn.com") && s(u, "*show*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "skycn.com") && s(u, "*/js*info.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "skycn.com") && s(u, "*/js*top.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.52z.com$
if( ( d(h, "52z.com") && s(u, "*/feixianggg*down1.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "52z.com") && s(u, "*/feixianggg*down2.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "52z.com") && s(u, "*/feixianggg*down7.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.onlinedown.net$
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*news_week_hot_1_1.3.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*index_2.0_004.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*index_2.0_003.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "onlinedown.net") && s(u, "*/newhuagg*index_3.0_right_001.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.down.52pk.com$
if( ( d(h, "www.52pk.com") && s(u, "***/js*m911.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "wan.52pk.com") && s(u, "*jkjs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pic2.52pk.com") && s(u, "*/160107/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pic2.52pk.com") && s(u, "*/160108/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.52pk.com") && s(u, "*/adv*ad.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "market.52pk.com") && s(u, "*/union/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.pconline.com.cn$
if( ( d(h, "www.pconline.com.cn") && s(u, "*download*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.pconline.com.cn") && s(u, "*jrzcz*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.pconline.com.cn") && s(u, "*ssi*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.pconline.com.cn") && s(u, "*_hux_*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "mydl.pconline.com.cn") && s(u, "*js*cookie.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www1.pconline.com.cn") && s(u, "*download*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "whois.pconline.com.cn") && s(u, "*ipjson.jsp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ivy.pconline.com.cn") && s(u, "*adpuba*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dl.pconline.com.cn") && s(u, "*getip.jsp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "wallpaper.pconline.com.cn") && s(u, "*top*js_topCate_1.html") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "buy.pconline.com.cn") && s(u, "*intf*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "whois.pconline.com.cn") && s(u, "*jsfunction.jsp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.gpxz.com$
if( ( d(h, "www.gpxz.com") && s(u, "*/tongji/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.gpxz.com") && s(u, "**/gpxz*count.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.gpxz.com") && s(u, "***/js*footer.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.gpxz.com") && s(u, "*js2*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.gpxz.com") && s(u, "***/js*ajaxx.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dl.saoyong.com") && s(u, "*js2*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dl.saoyong.com") && s(u, "*/default/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dl.btdyw.com") && s(u, "*js2*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dl.btdyw.com") && s(u, "*/default/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.hackhome.com$
if( ( d(h, "www.hackhome.com") && s(u, "*gg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*app-index-1.1.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*m_sa.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*download.mobile-new-1.0.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*gg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*m_sd.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*hz_s.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*app-common-1.1.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*yxmobileslider.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.hackhome.com") && s(u, "*js*app-new-1.0.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.hackhome.com") && s(u, "*images*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.haote.com$
if( ( d(h, "www.haote.com") && s(u, "*/index*5_0.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.haote.com") && s(u, "*js*tongji.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.haote.com") && s(u, "*haotesoftimages*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.qqtn.com$
if( ( d(h, "www.qqtn.com") && s(u, "*gg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.qqtn.com") && s(u, "*js*down_300.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.d9soft.com$
if( ( d(h, "www.d9soft.com") && s(u, "**/2014*scriptloader.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.duote.com$
if( ( d(h, "img1.2345.com") && s(u, "**/duoteself/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.2345.com") && s(u, "***/download*krtj.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.2345.com") && s(u, "*/duotehtml*googleadd.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.2345.com") && s(u, "*/union/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.2345.com") && s(u, "*/js*2345style_new.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.2345.com") && s(u, "**/interface*googletj.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.2345.com") && s(u, "*/js*baidu_js_push.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.sufile.com$
if( ( d(h, "sufile.com") && s(u, "*/jsa*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "sufile.com") && s(u, "*/ad*336-280.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.xpgod.com$
if( ( d(h, "www.xpgod.com") && s(u, "*/js*dxzq.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.xpgod.com") && s(u, "**/xpgod/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.bkill.com$
if( ( d(h, "www.bkill.com") && s(u, "**/js*down_2012.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.bkill.com") && s(u, "*/abc/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "2016.bkill.net") && s(u, "*js*top.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.yesky.com$
if( ( d(h, "www.yesky.com") && s(u, "*52jkjs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "mydown.yesky.com") && s(u, "***/26*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.yesky.com") && s(u, "*monitorjs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "image.tianjimedia.com") && s(u, "*gfxz.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "image.tianjimedia.com") && s(u, "*gfxzts.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "more.tianjimedia.com") && s(u, "*soft*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.sdbeta.com$
if( ( d(h, "www.sdbeta.com") && s(u, "*sdbeta.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.sd173.com") && s(u, "*rilisdbeta.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.sdbeta.com") && s(u, "*yinsusd1736.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.9553.com$
if( ( d(h, "www.9553.com") && s(u, "*otherhtml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.downxia.com$
if( ( d(h, "www.downxia.com") && s(u, "*/js*tongjig.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.downxia.com") && s(u, "*dgjs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.downza.cn$
if( ( d(h, "w1.static.downza.cn") && s(u, "*/app*comfun.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "w2.static.downza.cn") && s(u, "*/app*tongji.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "w2.static.downza.cn") && s(u, "***/soft/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.xiazaiba.com$
if( ( d(h, "www.xiazaiba.com") && s(u, "*xzb_haha.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.83133.com") && s(u, "*api*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.rar8.net$
if( ( d(h, "www.rar8.net") && s(u, "*htmljs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.rar8.net") && s(u, "*ad*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.rar8.net") && s(u, "*skin2009*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.lvseba.com$
if( ( d(h, "www.lvseba.com") && s(u, "*plus*ad_js.php*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.lvseba.com") && s(u, "*ad*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.gezila.com$
if( ( d(h, "static.gezila.com") && s(u, "*/ad/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.gezila.com") && s(u, "**/js*soft_show.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.qqtn.com$
if( ( d(h, "www.qqtn.com") && s(u, "*js*page_970.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.qqtn.com") && s(u, "*inc*download.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.jz5u.com$
if( ( d(h, "www.jz5u.com") && s(u, "*js*tl0.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.jz5u.com") && s(u, "*js*tj1.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.jz5u.com") && s(u, "*new*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.jz5u.com") && s(u, "*count.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.jz5u.com") && s(u, "*inc*std_stranjf.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.suxiazai.com$
if( ( d(h, "www.suxiazai.com") && s(u, "**/acmsd/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.7xdown.com$
if( ( d(h, "www.7xdown.com") && s(u, "*idcgg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.7xdown.com") && s(u, "*youid*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.7xdown.com") && s(u, "*js*comment.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.7xdown.com") && s(u, "*bdgg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.dlsw.baidu.com$
if( ( d(h, "dlsw.baidu.com") && s(u, "*/av_aladdin/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dlsw.baidu.com") && s(u, "*sw-search-sp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.veryhuo.com$
if( ( d(h, "www.veryhuo.com") && s(u, "*download.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.veryhuo.com") && s(u, "*veryhuoads.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.veryhuo.com") && s(u, "*tuijiansoft.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.veryhuo.com") && s(u, "*stst.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.veryhuo.com") && s(u, "*download_c_fb.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.veryhuo.com") && s(u, "*plus*js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.veryhuo.com") && s(u, "*/news*dphoto.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.huacolor.com$
if( ( d(h, "www.huacolor.com") && s(u, "*wenzi*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.huacolor.com") && s(u, "*nei*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.huacolor.com") && s(u, "*daocaoren*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.huacolor.com") && s(u, "*all*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.huacolor.com") && s(u, "*rui2015.asp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.ddooo.com$
if( ( d(h, "www.ddooo.com") && s(u, "*hotgame.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*duoduo*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*hotsoft.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*viewimg.asp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*favsoft.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*down6.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*down5.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*tongji*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ddooo.com") && s(u, "*redirect.asp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.ucbug.cc}
if( ( d(h, "www.ucbug.cc") && s(u, "*js*zjbb.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ucbug.cc") && s(u, "*sd.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ucbug.cc") && s(u, "*js*html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.ucbug.cc") && s(u, "*comfun.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.cncrk.com$
if( ( d(h, "www.cncrk.com") && s(u, "*505*code*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.cncrk.com") && s(u, "*download.asp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.cf17.com$
if( ( d(h, "www.cf17.com") && s(u, "*fun.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.cf17.com") && s(u, "*api*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.cf17.com") && s(u, "*yjvpn.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $News Site Domain  Rule Filter$ //
// $Last Modified  Time:2016-2-10$ //
/////////////////////////////////////
// $http://www.ifeng.com$
if( ( d(h, "m0.ifengimg.com") && s(u, "*1d124ac5e89463af*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m0.ifengimg.com") && s(u, "*auto_city*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y3.ifengimg.com") && s(u, "*1d124ac5e89463af*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y1.ifengimg.com") && s(u, "*8d182615793a9f4b*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y2.ifengimg.com") && s(u, "*8d182615793a9f4b*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m1.ifengimg.com") && s(u, "***/cityteam/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ifeng.com") && s(u, "*0105*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m1.ifengimg.com") && s(u, "*/sources/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m1.ifengimg.com") && s(u, "***/cityteam/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y3.ifengimg.com") && s(u, "**/0203/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y2.ifengimg.com") && s(u, "**/0917/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ifeng.com") && s(u, "*/a_if/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y1.ifengimg.com") && s(u, "**/0906/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m1.ifengimg.com") && s(u, "*/iis*iis_v1_3.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y2.ifengimg.com") && s(u, "*wrating.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y3.ifengimg.com") && s(u, "*wratingpath.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "y3.ifengimg.com") && s(u, "*mappa*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.163.com$
if( ( d(h, "img1.cache.netease.com") && s(u, "**/analysis/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img2.126.net") && s(u, "**/adbox/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img2.126.net") && s(u, "**/0915/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img2.126.net") && s(u, "**/1210/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img3.126.net") && s(u, "*kaola*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "house.163.com") && s(u, "*special*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "news.163.com") && s(u, "*special*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "1.163.com") && s(u, "*/webmail*welcome.html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "mail.163.com") && s(u, "*/150612_master/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "mail.163.com") && s(u, "*dashi*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "1.163.com") && s(u, "*happybuy.html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "bobo.com") && s(u, "*special*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cc.163.com") && s(u, "*page*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "yh4.yuehui.163.com") && s(u, "*mail*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "web.yixin.im") && s(u, "**/r*core.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "web.yixin.im") && s(u, "**/e/pp_mail_20141119.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "mimg.127.net") && s(u, "*****/product*yixin.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.kaola.com") && s(u, "*iframe*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "activity.vip.163.com") && s(u, "*activity*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "qian.163.com") && s(u, "*promote*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "jiu.163.com") && s(u, "*special*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ipservice.163.com") && s(u, "*ipquery*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "xf.house.163.com") && s(u, "**/include/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img2.126.net") && s(u, "***/0901*ad-banner1-2015.9.1.png") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.126.net") && s(u, "*channel4*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ip.ws.126.net") && s(u, "*ipquery*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img6.cache.netease.com") && s(u, "*/script/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img5.cache.netease.com") && s(u, "*/script/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "caipiao.163.com") && s(u, "*mailPromote_static.htm*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "fa.163.com") && s(u, "*ext*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "baoxian.163.com") && s(u, "*/iframe/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img3.126.net") && s(u, "*shop*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "mimg.127.net") && s(u, "*external*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pimg1.126.net") && s(u, "*caipiao*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "j.news.163.com") && s(u, "*data*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "web.yixin.im") && s(u, "*ga.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "g.163.com") && s(u, "*jr*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "g.163.com") && s(u, "*r*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "rec.g.163.com") && s(u, "*kaolaad*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.tianya.cn$
if( ( d(h, "806.tianya.cn") && s(u, "*display*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "click.tianyaui.com") && s(u, "*b.jsp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "focus.tianya.cn") && s(u, "*/caijing/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "806.tianya.cn") && s(u, "*getvipuser.jsp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "803.tianya.cn") && s(u, "*keyword*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "click.tianyaui.com") && s(u, "*clkme.jsp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.tianyaui.com") && s(u, "*ads.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.tianyaui.com") && s(u, "*core.jsonp*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.sohu.com$
if( ( d(h, "js.sohu.com") && s(u, "*pv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "imp.go.sohu.com") && s(u, "*/201111/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "******/ad/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "db.auto.sohu.com") && s(u, "*/js/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "*/jingzhun/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2013/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2012/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2014/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2015/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "js.sohu.com") && s(u, "*wrating20120726.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "***/brand/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "*/tongrong/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/js*c.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/auto/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "txt.go.sohu.com") && s(u, "*ip*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "**/s2016/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "getip.js.sohu.com") && s(u, "*ip*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "images.sohu.com") && s(u, "*/htmlfile/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.sohu.com") && s(u, "*sohuflash_1.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.muzisoft.com$
if( ( d(h, "muzisoft.com") && s(u, "****/js*s_f.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "muzisoft.com") && s(u, "****/js*e_f.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.gamersky.com$
if( ( d(h, "ja.gamersky.com") && s(u, "*banner*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ja.gamersky.com") && s(u, "*www*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ja.gamersky.com") && s(u, "*background*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ja.gamersky.com") && s(u, "*fugai*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.zol.com.cn$
if( ( d(h, "stat.zol.com.cn") && s(u, "*adrs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "p.zol-img.com.cn") && s(u, "*detail_ad*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "api.zol.com") && s(u, "*index.php*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://tieba.baidu.com$
if( ( d(h, "tieba.baidu.com") && s(u, "*/adsense/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "tieba.baidu.com") && s(u, "*/baiduunion/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "tieba.baidu.com") && s(u, "*/pushlog/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.pay.baidu.com") && s(u, "*bc.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "tb1.bdstatic.com") && s(u, "*/adsense/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.pay.baidu.com") && s(u, "*/adpadmin_feed/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "imgsrc.baidu.com") && s(u, "*/tieba/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "tieba.baidu.com") && s(u, "*tpointredirect*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $Tools Site Domain Rule Filter$ //
// $Last  Modified  Time:2016-2-5$ //
/////////////////////////////////////
// $http://www.chinaz.com$
if( ( d(h, "stats.chinaz.com") && s(u, "*/tool_img/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stats.chinaz.com") && s(u, "*/newshome*wz.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stats.chinaz.com") && s(u, "*/newshome*wz5.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stats.chinaz.com") && s(u, "*/newshome*code.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "chinaz.com") && s(u, "*/js*new.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $Viedo Site Domain Rule Filter$ //
// $Last Modified  Time:2016-2-17$ //
/////////////////////////////////////
// $http://www.youku.com$
if( ( d(h, "static.youku.com") && s(u, "***/js*youku_laifeng_v6.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.atm.youku.com") && s(u, "*idea*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.youku.com") && s(u, "*/paycenter/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "valf.atm.youku.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "hz.youku.com") && s(u, "*click.php*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "b.scorecardresearch.com") && s(u, "*b2*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "hudong.pl.youku.com") && s(u, "*timelineplugin*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.youku.com") && s(u, "*p.main.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.youku.com") && s(u, "*cps.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.youku.com") && s(u, "*iresearch.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "v2html.atm.youku.com") && s(u, "*vhtml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "b.scorecardresearch.com") && s(u, "*b*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "hudong.pl.youku.com") && s(u, "*plugins*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "p.l.ykimg.com") && s(u, "*ykp2pdata*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "r.l.youku.com") && s(u, "*rec_ad_show*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "valb.atm.youku.com") && s(u, "*vb*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.yes.youku.com") && s(u, "*vs.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://v.qq.com$
if( ( d(h, "games.qq.com") && s(u, "*playgame*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "l.qq.com") && s(u, "*lview*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dp3.qq.com") && s(u, "*qqcom*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "btrace.video.qq.com") && s(u, "*kvcollect*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "imgcache.qq.com") && s(u, "*enttencentvideo.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "c.isdspeed.qq.com") && s(u, "*code.cgi*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "livep.l.qq.com") && s(u, "*livemsg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "bla.gtimg.com") && s(u, "*qqlive*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "trace.qq.com") && s(u, "*collect*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pingfore.qq.com") && s(u, "*pingd*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "vv.video.qq.com") && s(u, "*getspeed*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "livew.l.qq.com") && s(u, "*livemsg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pinghot.qq.com") && s(u, "*pingd*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "btrace.video.qq.com") && s(u, "*collect*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "rcgi.video.qq.com") && s(u, "*web_report*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "isdspeed.qq.com") && s(u, "*r.cgi*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "imgcache.qq.com") && s(u, "*mediaplugin.swf*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pingjs.qq.com") && s(u, "*ping.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.wasu.cn$
if( ( d(h, "s.wasu.cn") && s(u, "*ad-skin-20140923.swf*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.letv.com$
if( ( d(h, "letvimg.com") && s(u, "*loading-lszc.swf*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dc.letv.com") && s(u, "*pgv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "dc.letv.com") && s(u, "*op*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "api.live.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ark.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ark.letv.com") && s(u, "*s*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "api.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "live.g3proxy.lecloud.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "live.g3proxy.lecloud.com") && s(u, "*gslb*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i0.letvimg.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "js.letvcdn.com") && s(u, "*iwt.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "js.letvcdn.com") && s(u, "*stat.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i0.letvimg.com") && s(u, "*loading-tzf-le1s.swf*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "api.www.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "fz.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "fz.letv.com") && s(u, "*s*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "fz.letv.com") && s(u, "*t*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "g3.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "g3.letv.com") && s(u, "*vod*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "selector.webp2p.letv.com") && s(u, "*op*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "rec.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "hd.my.letv.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "cdn.api.my.letv.com") && s(u, "*s*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i1.letvimg.com") && s(u, "*crossdomain.xml*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "api.my.letv.com") && s(u, "*vcs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "rec.letv.com") && s(u, "*curve*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "rs.sinajs.cn") && s(u, "*tmp.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i0.letvimg.com") && s(u, "*gold_icon8.png*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i0.letvimg.com") && s(u, "*gold_icon.png*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i0.letvimg.com") && s(u, "*lc03_iscms*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.56.com$
if( ( d(h, "js.tv.itc.cn") && s(u, "*gg.seed.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "js.revsci.net") && s(u, "*gw.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stat2.stat.v-56.com") && s(u, "*stat.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "vm.aty.sohu.com") && s(u, "*pv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ctr.hd.sohu.com") && s(u, "*s.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "vm.aty.sohu.com") && s(u, "*pvlog*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "vm.aty.sohu.com") && s(u, "*qs*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "api.my.tv.sohu.com") && s(u, "*getads.do*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://v.pptv.com$
if( ( d(h, "static.g.pptv.com") && s(u, "*/game/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s1.pplive.cn") && s(u, "*sta.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pub.aplus.pptv.com") && s(u, "*wwwpub*crazy*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://vod.kankan.com$
if( ( d(h, "misc.web.xunlei.com") && s(u, "*kankan_pv_vod_header.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "geo.js.kankan.xunlei.com") && s(u, "*ip.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "misc.web.xunlei.com") && s(u, "*iwt-min.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "busi.vip.kankan.com") && s(u, "*getxwd3info*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://www.fun.tv$
if( ( d(h, "stat.funshion.net") && s(u, "*pv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.funshion.com") && s(u, "*funvipplayer_1.0.0.3.swf*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stat.funshion.net") && s(u, "*temporary*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.funshion.com") && s(u, "*funadwebstop_20150319.swf*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "stat.funshion.net") && s(u, "*pt*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "q1.fun.tv") && s(u, "*flash.php*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $Music Site Domain Rule Filter$ //
// $Last  Modified  Time:2016-4-4$ //
/////////////////////////////////////
// $http://play.baidu.com$
if( ( d(h, "img.baidu.com") && s(u, "*hunter*musicmonkey.min.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "pups.bdimg.com") && s(u, "*advert.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $Path  Site Domain Rule Filter$ //
// $Last  Modified  Time:2016-4-4$ //
/////////////////////////////////////
if( ( d(h, "a1.itc.cn") && s(u, "*pv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s9.rr.itc.cn") && s(u, "*/wapChange/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s8.rr.itc.cn") && s(u, "*/wapChange/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "m.qpgmw.cn") && s(u, "*/101/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "n.mark.letv.com") && s(u, "*/m3u8api/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.iqshw.com") && s(u, "**/m/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ikoo8.com") && s(u, "*/js*ipdata.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "n.firefoxchina.cn") && s(u, "*iframes*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "hxjs.tool.hexun.com") && s(u, "*homeway*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img.hexun.com") && s(u, "*hx_homeway*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "yicai.zdcj.net") && s(u, "*/images*qqq.jpg") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "www.baidu.com") && s(u, "*advert2.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "n.firefoxchina.cn") && s(u, "*html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "fragment.firefoxchina.cn") && s(u, "*html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "i.firefoxchina.cn") && s(u, "*iframes*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "x.autoimg.cn") && s(u, "*pv*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "yicai.zdcj.net") && s(u, "*js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ikoo8.com") && s(u, "*/js*tooltips.js") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "ikoo8.com") && s(u, "***/aliyun/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "icon.zol-img.com.cn") && s(u, "**/new*xiazai_detail_youdao.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "soft.hao123.com") && s(u, "*/js/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "static.pay.baidu.com") && s(u, "*/adpadmin_feed/*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $Mobile  Domain   Rule  Filter$ //
// $Last Modified  Time:2016-2-23$ //
/////////////////////////////////////
// $http://m.techweb.com.cn$
if( ( d(h, "s1.techweb.com.cn") && s(u, "*kulouchuanqi.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s1.techweb.com.cn") && s(u, "*aliyun2016011111.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s1.techweb.com.cn") && s(u, "*yscs.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s1.techweb.com.cn") && s(u, "*deshouji.png*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s2.techweb.com.cn") && s(u, "*kulouchuanqi.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s2.techweb.com.cn") && s(u, "*aliyun2016011111.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s2.techweb.com.cn") && s(u, "*yscs.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s2.techweb.com.cn") && s(u, "*deshouji.png*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s3.techweb.com.cn") && s(u, "*kulouchuanqi.gif*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s3.techweb.com.cn") && s(u, "*aliyun2016011111.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s3.techweb.com.cn") && s(u, "*yscs.jpg*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "s3.techweb.com.cn") && s(u, "*deshouji.png*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://3g.163.com$
if( ( d(h, "temp.163.com") && s(u, "*wap_ad_article.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "3g.163.com") && s(u, "*article_list_ad.html*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "temp.163.com") && s(u, "*wap_ad_sy.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "temp.163.com") && s(u, "*epsp14_for_ad.js*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "img1.126.net") && s(u, "*channel*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
// $http://m.iqiyi.com$
if( ( d(h, "mixer.video.iqiyi.com") && s(u, "*recommend*videos*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
if( ( d(h, "subscription.iqiyi.com") && s(u, "*issubscribed.action*") ) || d(h, "Domain.in") ){ return BLACK_HOLE;}
/////////////////////////////////////
// $Statistics Domain Rule Filter$ //
// $Last Modified  Time:2016-2-23$ //
/////////////////////////////////////
if( d(h, ".51yes.com") ){  return BLACK_HOLE; }
if( d(h, ".cnzz.com") ){  return BLACK_HOLE; }
if( d(h, ".miaozhen.com") ){  return BLACK_HOLE; }
if( d(h, ".cnzz.net") ){  return BLACK_HOLE; }
if( d(h, ".tongji.linezing.com") ){  return BLACK_HOLE; }
// END :)
    return DIRECT;
}
