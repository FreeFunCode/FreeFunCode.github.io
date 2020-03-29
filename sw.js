/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","471e0ce813b3bae3d4e639981a8e24d4"],["/2014/04/27/Hello-Hexo/index.html","5f5c7d7b988977e3c58d4f1c7bc35980"],["/2014/05/07/001-RegEx/index.html","622c814b3adfd7dcd2880babad81f7c8"],["/2014/05/08/002-DateFormat/index.html","d45c8a7ff5dff80dbec23a4c9e8eeeda"],["/2014/05/27/003-c-Linq/index.html","fb06cd123614dc8ce6d5bca7480810b8"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","fbfe8025192d19348eff50a969925ea8"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","a4db6cccb5a0339658a99b51c3e766b0"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","771b596bf34f90120bc029563283a278"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","8141a6628c3d8a7617cb08dff045e0b2"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","93041fa2647eabf8220dccc766c674a5"],["/2014/08/24/mongodb在windows下安装教程/index.html","632358ed4baab005c65961cf521d201a"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","29dca7e2277b1cb104bee4f1e99165e8"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","a21df23c3f556e98f790e7f01af64984"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","2331c49516dfe075304adde5072b976c"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","d8e8436341bba22a316c44724b0d043e"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","efedf16baa03d418db7e6215276e2c6d"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","21f5ea2a16d0b57c1eaf0d0636a65113"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","a6194889485ce8c41db09ad2c725512a"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","9c37d306258277e16d32db510f490aef"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","5629e56909f9428ffab406fdf9e57af5"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","a9c7211cff33fe0a47daa8ecab12a87c"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","527c2b4738bcf9182c9e44f60970cd2d"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","6782e62eb46cef6cb89fb3f152e983b6"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","63122fa69260ad712c0837c4e93601b9"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","844ce0c1c6523743205626f197c4ec17"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","bba491a5c1f5da3518cc79bebc8a143f"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","646bcb906265ce786ba68ef55851afe1"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","485cb9a5cc41cc425b81d39979f20d58"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","1fc8b23892b124cdfec69f3d91bc6a20"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","732fdb9d4ad344cc9dcfb3c6b0e727f1"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","656b247d70db835ecffa84a8065f08e9"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","2cb8fbd148b78e5965074253f2899142"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","2757d256435ebb69cd0e2cfce8dc4c9d"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","31fb6ad57ab98e9d267bddbf990cbb6c"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","8219020b9fee84e0204afb2291bdcae9"],["/2018/05/13/四大组件-二-Service使用/index.html","a37f0b1dc836f39fb089534182a59d7a"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","507844b4328ae1965468325d7d96b084"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","2ee2e34a900148fb6462d3f86b8944ec"],["/2018/06/18/Android源码分析一开篇介绍/index.html","21b9c78fae4522168816a60764e0a6b4"],["/2018/06/24/Android源码分析三Service启动分析/index.html","4908561d258b8238fcddb530c8ef5f2e"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","ff5073c4d5e6ce1a03933648925deac5"],["/2018/07/01/Java基础面试题汇总/index.html","2f2acf0fa7c707afbae64e35869b9e0a"],["/2018/07/06/23种设计模式在Android中的应用/index.html","8cb88e7b7e0d05c0552cbc811d002c57"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","25ea3b2a912cc7b01105fa7120871703"],["/2018/07/07/Android源码分析五Zygote进程/index.html","5b56af01b6ef9fcbcdf156295641cdaa"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","d87ea6fd4951de7c734cc28ebf86eaeb"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","7c140f90a4903f068f91aaa692a96193"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","fc7d3229d675df03e6fc89fd5c326239"],["/2018/07/08/Android源码分析九Init启动分析/index.html","e9477f397b3954ad8d0406436f983634"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","8b15c4c042c5c315619530a32b41a4ca"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","c27e11ebed9361daf3d5d96476049552"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","6cb0c3468411347920219a1eb6625cb4"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","0a0da270483712f6ea54c3cb68b0e0d2"],["/2018/07/21/AIDL介绍以及简单使用/index.html","c46bb17477f5a29ce193ad8eb7d250c0"],["/2018/07/21/ViewPager相关使用/index.html","cbbe900d4983bbe30641557ed1dc20ec"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","cb3dc76b821935d78792c12e9658eb09"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","d8430458482fafe05f277787221b780c"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","cd31e9c2276929650a9b50799959a38e"],["/2018/07/22/Android进阶学习笔记整理/index.html","7bcdde7a14c7fb7748bb10202d0d784f"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","4419633829f306fd4b2b88a770700329"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","4b8dbed7e046567f7d6b06583e3e116e"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","066c4d7d53aa931b05bb1cf7dfdcf49c"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","63c297b220512a811db53d67b4a9f9bf"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","fb380f02aecb1a57ab208fd408ea7ea7"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","01dcd8c3cdcd1020b8ac52eb7aa4e611"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","0e5888c4808d3432bd3243f829aae18d"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","c0dde9a8a8f3d64e8b59dfc20344e68a"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","087b062140134af3c394121e7b8b67b0"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","c7a6cc0f5c734abd5028a4899fb3ccaa"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","6ba313994e1a7aaa86ad12598a88e523"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","4588da199f9f839b9981aeb81f75b24e"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","037028bb0dd2fc62ee9f4f6f634bbf44"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","96680bab5f0209c0adccb9380da775d3"],["/2018/08/05/Android开源框架系列导读/index.html","b8539c7e045be9b27d017db5a9cab19b"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","cf3ea1fb2b3b6ca1a6280332d5bc4f9b"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","ca6e3346911f85d41864e378d26e410f"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","d182daaa24c7a346d1661d6a20d2f80f"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","e8effc3caa6fd2b762b9b9e820d3dd29"],["/2019/01/01/Jetpack之LiveData介绍/index.html","8516c8f2d05ef207397401562adc8b94"],["/2019/01/01/Jetpack之Paging介绍/index.html","a54c9ab2a7d67915f3958be80606221d"],["/2019/01/01/Jetpack之Room介绍/index.html","c78797496d5b495a07a84c442a6f6443"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","5344008e4b2783b5ce221986f5f80c20"],["/2019/08/25/Android面试题/index.html","774cbe3096cef070eb9d4b75d3e43883"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","ca75e5ddd1be29d24fc1d046cee49f0b"],["/2019/09/22/汉尼拔电影观后感/index.html","3d685bca3a131bdb0e80ee797e1cbc34"],["/2019/09/28/Kotlin与java对比/index.html","a9b01b22277d9b80929df9a55e0260fa"],["/2019/09/28/巴比龙电影观后感/index.html","2fa96a717a91b63edf119bb064fa17da"],["/2019/09/30/mac搭建hexo环境/index.html","f8030ac626d26afa946085d7f91dc147"],["/2019/10/01/关于职业生涯的想法/index.html","e1efb05a82989a02c265c56772eb235b"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","a4907355a6eaba4d54c7b6ad85679472"],["/2019/10/03/AndroidView绘制流程/index.html","71693870313a1d7b1a86960c02bb407c"],["/2019/10/03/Android屏幕适配/index.html","c89e739f07bc7cefcfa86c37dcfe5ac1"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","836e9cfba9fac2aab82c888e8ec9851d"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","148ac607e921b4607d661b301f3345c4"],["/2019/10/13/谈谈逛博客的小习惯/index.html","68bfb60eb67c8dac29a17eccd037ff47"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","d91d1f2e7a960d715bd6b06474b5a53e"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","7a05d613ad11821e3a199668402a5fe5"],["/2019/10/19/关于程序员的第二职业/index.html","8ad3cb306d5a9ca44bfb385306d3c688"],["/2019/10/20/一次车被刮蹭的经历/index.html","5576b25cc1deadfd80d44930680ca9b7"],["/2019/10/20/第一次买房经历/index.html","edc7bdc7861e140c6e13397d5cc5f93a"],["/2019/10/26/kotlin之Lambda表达式/index.html","595d08e24e9d6e1405a74832b364c11f"],["/2019/10/26/收藏网络资源分享/index.html","b0179d5135b33d4977b8ed3ca06912c5"],["/2019/11/01/Android之Jetpack简介/index.html","a677aab2c256c146988fcf761f02d4ae"],["/2019/11/01/Jetpack之Androidx介绍/index.html","a90d30dd7c65b79fb87bd3d2b574b0ac"],["/2019/11/02/初识区块链/index.html","384ebb6537c62a7954af46152a41a336"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","6928ca0f26f922c1d6cc31306d99851d"],["/2020/02/10/2020开年的一些感想/index.html","2d3c5427e09e77fdcf44571c9a8fecb7"],["/2020/02/21/Android-8-servicee保活实现/index.html","162aafaffb2a82506af938751e5768be"],["/2020/03/29/美股熔断与美联储救市/index.html","0bba0f5166da8a36b7112bdae64543fc"],["/PY.html","737e1baddaf89a1409d82c13271a1695"],["/about/index.html","57fe09e5e7caa8421cd1224a93d4cb83"],["/archives/2014/04/index.html","6fe98541eca321bdf0ba6c18e51ee4ed"],["/archives/2014/05/index.html","164690035242b128e22e34f2097cc69e"],["/archives/2014/07/index.html","d233efa049e7a72bf8957fcfaa921bac"],["/archives/2014/08/index.html","804395bec9835a78884fbd7761f3df94"],["/archives/2014/09/index.html","fcf6cabe19f012e2df1b35cd93ddfe03"],["/archives/2014/11/index.html","b1f78954ce97ddbdf90a86528708c912"],["/archives/2014/12/index.html","a42ef71e4356a05a8d34cc407937abdc"],["/archives/2014/index.html","9567977f26dd458b49762b1157868692"],["/archives/2014/page/2/index.html","7b3f44577fc1a2cfaacb0be64b4aad5c"],["/archives/2014/page/3/index.html","8ab42ff5c97b7067430fba0c87ef5e52"],["/archives/2015/04/index.html","7b7990beac62a44be1ad542ae017c441"],["/archives/2015/06/index.html","9632d93d28c7a50fa8307ad4818efd5b"],["/archives/2015/11/index.html","49095ad4ce602f81b6128f26d6bd98c3"],["/archives/2015/index.html","fc520518a9e7eb60bf81aeda031686fd"],["/archives/2016/08/index.html","14423ae4038107fd4f74d735ed06ffbb"],["/archives/2016/index.html","e406b9ae4a7d84894dfb5517dfabc161"],["/archives/2018/04/index.html","c4afd77e957b9460d12a6f4e8a0fa4dc"],["/archives/2018/05/index.html","2654a7a5dfa82985f3ca9bfc326058cb"],["/archives/2018/06/index.html","1e4411c353c5ccc0c65519287ac45903"],["/archives/2018/07/index.html","d3db6abe771dafa416344d2476976f8b"],["/archives/2018/07/page/2/index.html","1505e92a1b55dafe516d3a15a2f340bf"],["/archives/2018/07/page/3/index.html","6f14311d0045f6763d18504ea79e2867"],["/archives/2018/08/index.html","ff0a5f930dd452f374f965d8965d5ef7"],["/archives/2018/08/page/2/index.html","87d30bb14350ba9759bab6e4f10bff22"],["/archives/2018/index.html","219f9403d070b4d388e4952aea45a09b"],["/archives/2018/page/2/index.html","c2bc06b275fc66a087f18c3cb1ded9bb"],["/archives/2018/page/3/index.html","a29865d7e654fe8b83f551dc07f20d5a"],["/archives/2018/page/4/index.html","5b8afbe9a20f2c10064d17ba03450b8f"],["/archives/2018/page/5/index.html","5e60cbff73305afe877ebc4818143ae4"],["/archives/2019/01/index.html","8f23582bfe8a6a77e780f4f364dd0a28"],["/archives/2019/08/index.html","0fde49a15c8e5544935ec6171f366d12"],["/archives/2019/09/index.html","8f6bc7c678385af2ac90ccb3da760ef9"],["/archives/2019/10/index.html","49ac361f0a0eac6cf0d98dc3dbf2a5e2"],["/archives/2019/10/page/2/index.html","69a2ed53b6d6df3acc1509fa698878ba"],["/archives/2019/11/index.html","b6c75d06f5bbdc33b33ab7b1e6a53d81"],["/archives/2019/index.html","b18f077c85db38f2f2bb2bee3f29182f"],["/archives/2019/page/2/index.html","cfd5d2ef1088f393c68596c8e25e55f5"],["/archives/2019/page/3/index.html","afd7ff8fd6f623a95f95f2b3700cb26d"],["/archives/2020/02/index.html","3a829c1a13663e6f3608ef6065172c19"],["/archives/2020/03/index.html","4fda7e76f96458063692a4cc9dc4d03c"],["/archives/2020/index.html","90fcd85733318385f09f6c428ea4e668"],["/archives/index.html","d5c2278c2d81f4429d2f645b83cc3701"],["/archives/page/10/index.html","c72dcce6a43f49c0614910aa88e7b1f1"],["/archives/page/11/index.html","b04b2e04bb1a8884bd0b4747cca08066"],["/archives/page/2/index.html","f81fb4d4042547005ce37cd830b73661"],["/archives/page/3/index.html","f0be00ded5a302edb32a8645399c6dce"],["/archives/page/4/index.html","5ceff49ae3d1b1e814f179837c110dff"],["/archives/page/5/index.html","53ea322b0f3c2e89b39daf61c398b33e"],["/archives/page/6/index.html","a87c2d68a35ae1700a4b044587058aaf"],["/archives/page/7/index.html","ff0647f0167beaeb736bb37cd8518604"],["/archives/page/8/index.html","c5666d7023ccfc4099662a092e539f0b"],["/archives/page/9/index.html","89739e607cc9efd86f09b024d2323341"],["/categories/Android/index.html","22b43ca82b06f97b826ea78ae90e5790"],["/categories/Android/kotlin/index.html","76dbb291c3cd411db37c121429ab1be9"],["/categories/Android/page/2/index.html","8b5459b55adbc59fd461c71361ae4f87"],["/categories/Android/page/3/index.html","81701a6a681d3257e4442f0528f43b5e"],["/categories/Android/page/4/index.html","c1c821f83783717ff05b5cd922a60287"],["/categories/Android/page/5/index.html","ee923e312615d0061bafed86e58e097c"],["/categories/Android/page/6/index.html","533a726b2b77f9a79389cc857915e9f1"],["/categories/Android/安卓源码/index.html","dfa0d7d858d669bdf2d92c3ee285d2b1"],["/categories/Android/安卓源码/page/2/index.html","1c3d8b3f8b08b1e03d22c268a5a93814"],["/categories/Android/开源框架/index.html","b0ab25bf419a15e015f42f98295aabb6"],["/categories/Android/开源框架/page/2/index.html","7e241ec0eb98f686380165e3de1300d8"],["/categories/Android/知识点/index.html","edf992a0919275d668f8708e5fbbe7c9"],["/categories/Android/知识点/page/2/index.html","ac25a0ff9122ed5583182032312868df"],["/categories/GitHub/index.html","22e73c20db88a412ec7625862cfb2b5e"],["/categories/Jetpack/Androidx/index.html","b27e223f46e3d53b9061936798bb9c1f"],["/categories/Jetpack/Lifecycles/index.html","8fbd895308215bcc61e994609c948855"],["/categories/Jetpack/LiveData/index.html","e0dc6cb4b5fd7784e37b2717e006d187"],["/categories/Jetpack/Paging/index.html","cf96793b7beda6ca395b207e7f9cb856"],["/categories/Jetpack/Room/index.html","ad9d70a5974878d26f2ef74f6a7df86b"],["/categories/Jetpack/ViewModel/index.html","849603b92fe3658f9ad2165a9247ed4e"],["/categories/Jetpack/index.html","2ad2991d54d269f178c57b2ee50dc84f"],["/categories/前端/index.html","c2401cdf0eca372f67c4ea838743c294"],["/categories/后端/CSharp/index.html","28f803b822f516c0139f03253d8e0ab0"],["/categories/后端/CSharp/page/2/index.html","d6b19568b8b82b79daa50cfc91881749"],["/categories/后端/JAVA/index.html","9ac81a69a8b5a9ee34c37bbbdc623807"],["/categories/后端/PHP/index.html","6c1c3e0c07c2ac98eb57ab4dc59b8721"],["/categories/后端/index.html","20d6c8e4c4f11d93e7c4647382d7ac00"],["/categories/后端/page/2/index.html","3c807f277cfc64122dc2adc405fe7093"],["/categories/后端/page/3/index.html","1773805694a5e18f46a5b681be467d1e"],["/categories/心情/index.html","844ffb2fe4c043bcf98aec4f86aa836c"],["/categories/心情/page/2/index.html","dd1e7aad3c71ad0fbd1d3362eb9e3c19"],["/categories/知识点/index.html","30b9cfb5800c082118497e4a04288527"],["/categories/设计模式/index.html","87b81cf23ba7ea5079fe0f779ff00060"],["/comment/index.html","8186b9d224254a950fab2f19a11fde99"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/2020kainian_1.jpg","d5a1f523c46fe05f38925a43528ae2d0"],["/images/2020kainian_2.png","21dfdf99770d6e946a7db90ab6ef31f0"],["/images/2020kainian_3.png","849a98ea3181c0a13284f149be3b37f7"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/guiao_baoweier.jpg","320f8a9d9a0fb5c83306fdcf993a766d"],["/images/gupiao_jianzhenglishi.png","e2d54b4036a56ea99dd358d6e231008c"],["/images/gupiao_rongduan.png","b83d1044c5352216034ddc06993da0d9"],["/images/gupiao_shangzheng.png","06db8ba1c4edb6e22d3003d0ab55f437"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","0c38d8864317408c69ca17416c3d8521"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","38e0b6d4f8900f64489374bb17eb542d"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","5f5028d87d81701838623df88c740fc7"],["/page/11/index.html","fb917ab914bbdd6b4f8be982baccb4c5"],["/page/2/index.html","4bdd6701d54ccf50377a895e2b871a43"],["/page/3/index.html","9b0a73f05d7514e1ceb951d050507c94"],["/page/4/index.html","01e689fa6fce8439a572769e05972a2f"],["/page/5/index.html","a92955003f2ea0b7ff6dcfb3671bcf36"],["/page/6/index.html","8c4aef08186bee27e0c9b2c81a94dd3a"],["/page/7/index.html","d65cda6939295be943fc2ce0e99d505b"],["/page/8/index.html","8af7392db1a31642171b0cec0050e53e"],["/page/9/index.html","b04ceac90f018a356f342cdb6d366f34"],["/photos/index.html","53474350fcde3175d82534febaf88261"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","cf9e3298ca9f0546bc18fe7a430cafc2"],["/tags/AIDL/index.html","db18b720b6ebd6f9e2aa7fbc68a82570"],["/tags/Activity/index.html","b7f9a16d1b224c780720273f312f8e7b"],["/tags/Android/index.html","52fd40e452edda7903da3597ff5c72c1"],["/tags/Android7-0/index.html","474f8589381570cce83ff1710f669e4d"],["/tags/Androidx/index.html","1f98614178f987970d676ef7cedb5a50"],["/tags/BroadcastReceiver/index.html","a74c25da7698efdd4b24611eeeeff609"],["/tags/C-文件上传/index.html","5d8889da08279e0eb8af60fb1c982cd9"],["/tags/ContentProvider/index.html","03d03c94e150d2a4ece546a90888daba"],["/tags/Excel操作/index.html","d5b68e30628949219949d2db051470df"],["/tags/GitHub/index.html","19af978ff6dc3f256a49289eeac34abd"],["/tags/IIS/index.html","d178770870329c504337a222bd89f3d6"],["/tags/JPush/index.html","82d3360d4ef71f7a38023537f27d6256"],["/tags/Jetpack/index.html","bbda87e3f6126fc5a08b463ed5a4ce9f"],["/tags/LNMP/index.html","c4b7f7edc94b02542b5ebc418eda39d0"],["/tags/Lifecycles/index.html","9cb763208c81d9143b475d06ec3212d3"],["/tags/Linq/index.html","83834532c81caf475c608c65c9745e11"],["/tags/LiveData/index.html","4e53ab22b9c8c5415994fa88db761ff0"],["/tags/MAMP/index.html","272409fddf4c4c471600be0562817c4e"],["/tags/Paging/index.html","284c0d711c54da8cf4aee352be468fee"],["/tags/Room/index.html","fc46c01fde2b31ccd418261e373a4ab1"],["/tags/Service/index.html","3ca4bfe555674f32fd386780cd219d12"],["/tags/SqlServer/index.html","87b3186ad95cb6920411abc3ce06a697"],["/tags/ViewModel/index.html","be57e35528d706963fbd1a3daa74f022"],["/tags/ViewPager/index.html","645699ea3dfe59fc0cd561c7d467f17c"],["/tags/XMLHttpRequest/index.html","62a2c8257f094091774a1c9c6f0d5fe8"],["/tags/c/index.html","cda50584f718c1e535eabe6fe3bdbec2"],["/tags/coroutine协程/index.html","b49e97f2636fec86fd55345d6aeefabc"],["/tags/easyui/index.html","d03918768e779d0a326e6c714b15d414"],["/tags/fiddler/index.html","17c04eb3b54265eab70af48cb9a3fa6f"],["/tags/hexo/index.html","54127321cfe8887e3156e5f681fce203"],["/tags/kotlin/index.html","1f92df15c390fb44bc97517f3c7b7913"],["/tags/mongodb/index.html","182b7163e22c09f2f19735c82a3a5450"],["/tags/mono-for-Android/index.html","7c34b241eee183b7dd1e8f2c7a7ac2b7"],["/tags/nodejs/index.html","9f15def71d0266d9f509f5a3a86c8b04"],["/tags/php/index.html","6bf2cf047085ab6146c6cfe3a3a0159b"],["/tags/service保活/index.html","d784a4029355a7985303b73ce7cd5be1"],["/tags/view绘制/index.html","051365da694d7d6640759ead4d1e8c07"],["/tags/visualStudio/index.html","c6b9fb76ee494a1e118e3fef8e9719c0"],["/tags/习惯/index.html","4918c3e5f0a46accf00d88ef70d1068d"],["/tags/京东云擎/index.html","180c346e7587ba23ea67a2685973434c"],["/tags/公众号/index.html","8cc6b9897b705c2940edb91aec82e857"],["/tags/副业/index.html","afe84f0669e7a2508bc1343d53a46b96"],["/tags/区块链/index.html","423aa80f0949661df7476e28fa8a10da"],["/tags/图片保存/index.html","4d9f2ed61939c49aad2c599e1482cd2f"],["/tags/地图/index.html","754984c02fc0d393e80c0fd9a9aa07f2"],["/tags/增量更新/index.html","84e0d82caf138568148f4701285997d5"],["/tags/安卓源码/index.html","5bf7cab9533e3afc078249e976d9375b"],["/tags/安卓源码/page/2/index.html","708132732ad3a6534f886817069e992e"],["/tags/屏幕适配/index.html","a614deccf1300b499d7041516d58aa6e"],["/tags/序列化/index.html","9d45523f5740eae3b52bbf640f4b9495"],["/tags/开源框架/index.html","d122f9607a1a8012fbf6da341d6d4866"],["/tags/开源框架/page/2/index.html","44e199cd9a0dacfaa1ba834edaf919a7"],["/tags/心情/index.html","1aeaa7e33fcb349d4bb89db5269e25dc"],["/tags/新浪SAE/index.html","96f21a3511f0944daae01cdecb5bc127"],["/tags/日期格式化/index.html","d0042df64296a1200f614a89c787a921"],["/tags/正则表达式/index.html","2f1c11c94b22955bd4bd6b9ef1bf1c15"],["/tags/电影/index.html","fb31dbf941a886974373b6b489afd9c6"],["/tags/线程切换/index.html","db26a9fb2d59a51e63e5cb42588be76a"],["/tags/网盘资源/index.html","21e9886d0c6bf15cee4de079881e1a1c"],["/tags/职业发展/index.html","af46489ce1513714d5d55fbda4785f0b"],["/tags/职业生涯/index.html","ec97b481d6f2631d6de9013e7d8bc7af"],["/tags/股票/index.html","a8014c2f2970318dbc2bbde079ff4d64"],["/tags/设计模式/index.html","915d263d6348d3f6cb18035139f08e4b"],["/tags/评论插件/index.html","8bfd3263a9ba68a3573aeb737b35dc51"],["/tags/购房/index.html","ec54e41300d4f19bb18666bb6f4d7fde"],["/tags/跳槽/index.html","362102563af030b2613aac0bb7920b80"],["/tags/面试/index.html","e1e15cfd0fa46c2a0bf94065ddece1ca"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
