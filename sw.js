/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","97f606027c5df573c9b07ae037fa679b"],["/2014/04/27/Hello-Hexo/index.html","f54db7f2196308b1566c4549733af46a"],["/2014/05/07/001-RegEx/index.html","87b961ea0ccba5f2d2cabfa3ff300d9c"],["/2014/05/08/002-DateFormat/index.html","1b564684815bd642e7605b2319982e06"],["/2014/05/27/003-c-Linq/index.html","339add0082fbd6692cb7d9729e7759a7"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","296dc6d2d8a8ffe0e6ac5e89bc32048e"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","e090efc882b5c7629e23b82197b3e9b7"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","28e0e036bcecd5956e1077856546bf15"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","444c5158c2596921b30245dd383d7348"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","3ab3945f38073932eadf91ab664835a7"],["/2014/08/24/mongodb在windows下安装教程/index.html","c27a208a36193c602ddcb662f149774c"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","61ad01c3bc4f57edae62d155a4545905"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","b6b792139d9ae9abb7892754465a4be5"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","61b199e25144053a188e9d8736e009a0"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","c005b925b774b13e6af1d04ca183be18"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","473a95fa8530e70059561453e91f2af8"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","e332f4560a3b4f80b66f43e32b058daa"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","b1a0b17c9c2ad36d2d3079d5ce6ec19f"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","6fec4b594a1bf87a77ce96589b537c9a"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","eac99c55e4defaec1ad0f746f7e325dd"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","0aef90379a6231c0a4c69b629a4ad103"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","033cc114cbea50b3c4ed550d9444c66b"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","b4901bc6712d69568d25f569d8392e1b"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","3c576d3582ee3d4c9d546519934ffe54"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","69ed06bb53ac69676e604b053de99a63"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","1d2e18e6e093f72cc95a151f705c0348"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","2dd010f4d9baa8a4a4abbe3499d84938"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","3456c82ea5e4a1cad1f7adb4fbd802b7"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","bec98c1a9356c5cea63c46fccbb92031"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","a929198abefeb96e3df3eda01b24417e"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","b14a0aafcffd8aa9dbbc848f9ae1c4e7"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","e4da9c51b69125c3a819aa5a25d78c5b"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","de1c53e6924e0f73df0c1e80da92f2e4"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","5274415a433965a6e6a9747647406b04"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","f1059fda9e9c5529833bcc4cb9c2c54d"],["/2018/05/13/四大组件-二-Service使用/index.html","d300cf81615822ca1e0d6edb1b75830f"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","e8e487d058a85407eca007bbe827ff33"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","b42066cde2d463b40878bc80dfab8790"],["/2018/06/18/Android源码分析一开篇介绍/index.html","6591b3cce7902c91a2c406eb0f656ae3"],["/2018/06/24/Android源码分析三Service启动分析/index.html","4deeed907274f7547105d0f62a5e4725"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","5ae2fc6b1afc8fba7aa68f01ccf1dc02"],["/2018/07/01/Java基础面试题汇总/index.html","ae5753aa4af19d93edafae845e37781c"],["/2018/07/06/23种设计模式在Android中的应用/index.html","b641d50a46da817a9ea31496f13d1cc4"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","ebaea389a6fe7c847230e855f9b9390e"],["/2018/07/07/Android源码分析五Zygote进程/index.html","0ad315656a74618d0dd1ea56ebd41ba9"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","0e3280b100cd0c6fbedf032a96c4830a"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","d6425c4826ba53c06e41fe7441367e0a"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","e16c973803eea4a12ef4c62064651bcf"],["/2018/07/08/Android源码分析九Init启动分析/index.html","d527edf2aefa3f5807b79e7c29283305"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","b7a5bc8365ada61cb7603acd6ecf6ed7"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","c9d1bf6888a032878ec9b6efe248df6b"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","295b653e9886618b04066f18da578224"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","e59e6f721bfd8d8fd34e5aa5130f7713"],["/2018/07/21/AIDL介绍以及简单使用/index.html","5997025b5db9d0b763fdf18002840755"],["/2018/07/21/ViewPager相关使用/index.html","b27179f79163b78b6483c2baa0bbb70a"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","9b343386a4fad09c4399a483e0db0d7e"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","9c4cab49bcd2bda01191a242c5563540"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","44d4ec5cfa60dfb70ce4bd64d10bbf4d"],["/2018/07/22/Android进阶学习笔记整理/index.html","0c1be48cd07530c91d6bf482d8d09aad"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","77b241f5eff84d8b7fcea2b9ae85d8da"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","0c797b067ec7a8a796f7ff6f9d24f4f6"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","b379a877ef6618fe575dab241e4c606d"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","894c0e4ab618595ccdcc173273eb9ba3"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","7b7eb62e7a677b537e0367475753d1e8"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","d858b91e7ae2c56a241fe7bf4cd0ecb8"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","fec6e0b396837bfec7b2913fb893ffcb"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","162189b052c1c7856f8693af5e3740e3"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","5364b6d2a36fb4c64aff1101d4b6ba22"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","39cd8f7a3e7a038e8d4f35b9fb4f646e"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","cef0286883c335088be15e826c640396"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","a6669bdcad5d0238b60f006a85961cf3"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","0d606871c7253d59b0569e6c5cad3118"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","0f44eeb7bbc4a30333182b02b4bcef72"],["/2018/08/05/Android开源框架系列导读/index.html","abcf5282d67dc689fa9c0dddeb7c27db"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","47ef4b7c615e0ffc5055096c1d81257c"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","d42f0510f78d5709805018e93f63d18d"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","18942052bbc1ed9d0e2482cf95b799e8"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","59169760efa49813619eef881a85d47c"],["/2019/01/01/Jetpack之LiveData介绍/index.html","68e392e32e9a71a34cab5cf9b55bedcb"],["/2019/01/01/Jetpack之Paging介绍/index.html","db9e45bdc3593802abff10e4cf00677f"],["/2019/01/01/Jetpack之Room介绍/index.html","f906bd5bba4c412dae445159429276e6"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","3774609a138173ad69cdec13d12755e4"],["/2019/08/25/Android面试题/index.html","04af5017835ded17b18f267a1169ad1e"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","43a4f2cdaefce3c7f4b917b772d25079"],["/2019/09/22/汉尼拔电影观后感/index.html","98219fbbdb2e163362f9b4017268fc46"],["/2019/09/28/Kotlin与java对比/index.html","838c91607d1de928d2d0aba028a37e43"],["/2019/09/28/巴比龙电影观后感/index.html","fb4741f391b1439af74b8145a9c578cb"],["/2019/09/30/mac搭建hexo环境/index.html","890c37e886237d905f198be58e15a9c0"],["/2019/10/01/关于职业生涯的想法/index.html","2a03fa108c1ff7725f317f308726de2e"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","c7acedf3fd618bc9a008b93fd6cad6d5"],["/2019/10/03/AndroidView绘制流程/index.html","c0fb80e738d68f5d968c67f935dec399"],["/2019/10/03/Android屏幕适配/index.html","9cdcbf68fd4081dd69c778015406bdf0"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","dbb594a9e5c253b5190febaafe76fc9f"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","bc1591cc0f961a13a38a6daa2e655d8d"],["/2019/10/13/谈谈逛博客的小习惯/index.html","7035d88f9e2d2c604316384e3ba0d269"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","e6b91f3bcf7db0598cd763daa20c574f"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","06140a00f5b6af55cf9bbfc1a15d3683"],["/2019/10/19/关于程序员的第二职业/index.html","705b867d8c6c1940eefa2dda172b7f6d"],["/2019/10/20/一次车被刮蹭的经历/index.html","a28da366229eb92c2fd5d81881b7e840"],["/2019/10/20/第一次买房经历/index.html","a21a4f321c2447cde49c788821407ee6"],["/2019/10/26/kotlin之Lambda表达式/index.html","9b2e61dcd811ea639c514dc947c2ed0e"],["/2019/10/26/收藏网络资源分享/index.html","e8a128f3a128899b74619bccae9c85e4"],["/2019/11/01/Android之Jetpack简介/index.html","8ee133de436fdfd9ec7a96d1f3618d7e"],["/2019/11/01/Jetpack之Androidx介绍/index.html","ec7a213a3fd80e9a708a95c3ba73d82e"],["/2019/11/02/初识区块链/index.html","9140d1276cfade61035231d23cc87507"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","145de9299a9736ffc94def2d308a2fb2"],["/2020/02/10/2020开年的一些感想/index.html","b0805f5be5c93e3fe3a8ac5d463c087b"],["/2020/02/21/Android-8-servicee保活实现/index.html","4dbd2f4029f4dab116794fc089e218b0"],["/PY.html","06468d3cb4839c3b07a7192721d16c77"],["/about/index.html","f874c93fdadd59fb7aabd8023097d37b"],["/archives/2014/04/index.html","f349daad3d134f322bbe1bad5372c70d"],["/archives/2014/05/index.html","e74b95ba0be56b39b8f22400b32f4bab"],["/archives/2014/07/index.html","fcd3227d843837a03e5a6113354d75e4"],["/archives/2014/08/index.html","a2061291335e2a85678ba37c34529f34"],["/archives/2014/09/index.html","d949cb4543cb413122c7c891147ba847"],["/archives/2014/11/index.html","5f7d24181f1447301415dea3e1bdd428"],["/archives/2014/12/index.html","638438aa27a6613f9a8f27888a02d30e"],["/archives/2014/index.html","060e2c206daaad9320fcdb8698d8a22a"],["/archives/2014/page/2/index.html","f0d93cdf7446715d8d3f2c8face8441a"],["/archives/2014/page/3/index.html","99ac3cba1e5442c4e18cda5e5e53ce82"],["/archives/2015/04/index.html","c2234358c5d018f5ec00074b4f8fb773"],["/archives/2015/06/index.html","230a6fa20db5206f5150c7fb1b9053d6"],["/archives/2015/11/index.html","e07a2648c011079b6241775090d2f759"],["/archives/2015/index.html","2214c0654e4b89ebfbc6e112af057463"],["/archives/2016/08/index.html","9ba15935006acfa657f8dfa8ec803856"],["/archives/2016/index.html","96abadfdfac1703a7ce61f397f52bfba"],["/archives/2018/04/index.html","9bbd24cc3b28cbf5f7eef90b5056a5f6"],["/archives/2018/05/index.html","8ffbe4ff515a4ca84aef57f3ef9fbf01"],["/archives/2018/06/index.html","71a3431cc3723acbccf7336304ec02f4"],["/archives/2018/07/index.html","49efb889c433bb699b845e48cbd67e3c"],["/archives/2018/07/page/2/index.html","743ca74739038a46de66e48e0633f911"],["/archives/2018/07/page/3/index.html","280282648497a6b14b3e70bdfa0fcdff"],["/archives/2018/08/index.html","a3d8c9deb864aac0d144dcc78e4eae7f"],["/archives/2018/08/page/2/index.html","4290ab4d507d6d847a2e71822a891a54"],["/archives/2018/index.html","e6d5059f19672d914b0f77d0d1869957"],["/archives/2018/page/2/index.html","10a027d3de02b58cefc55849e1f32811"],["/archives/2018/page/3/index.html","037b0851e0c23b99e5a6db1e99e8998d"],["/archives/2018/page/4/index.html","b1f48dd94752d57358915422324bc000"],["/archives/2018/page/5/index.html","60dc728bcae5f83314892e8b72678422"],["/archives/2019/01/index.html","42acbc37ffb72bd123d25ef74d39f533"],["/archives/2019/08/index.html","59ca98b2103d8d6383b5c73dce190d88"],["/archives/2019/09/index.html","0b3876272144f0212f3baaff842bc54c"],["/archives/2019/10/index.html","7f54c79024faf14522a125bf549edf27"],["/archives/2019/10/page/2/index.html","355d24bc2dd1c833c66642656eb3af3e"],["/archives/2019/11/index.html","316392427ff7e806c817b98bddbf7cc3"],["/archives/2019/index.html","2b899c026ad78f88c3ec238c3e007972"],["/archives/2019/page/2/index.html","677a8325c821ccb9f6af6e6f6be7d55f"],["/archives/2019/page/3/index.html","140d5749974485dafcf31dd8d1ce8f25"],["/archives/2020/02/index.html","5d405bc31cafa915d9f7ad970de306d7"],["/archives/2020/index.html","8ee67c2302211864190224974f25935a"],["/archives/index.html","53f7d582cd545ebfe5e5bece82ac2463"],["/archives/page/10/index.html","8383c71e07f2e0736bce6d227ea5d753"],["/archives/page/11/index.html","a1513bfa78dc0a5db94b71bde4554818"],["/archives/page/2/index.html","611a3782ab42848ca424b3cf44b06ef4"],["/archives/page/3/index.html","4511f7f46b8f1287bf73d4f749f8a58e"],["/archives/page/4/index.html","82411903c76332f78100df80811e1845"],["/archives/page/5/index.html","db35265b82970c239fd0b2f3838818c3"],["/archives/page/6/index.html","f3ec31a18a64517fb5c15a150a7c66f7"],["/archives/page/7/index.html","57bd7459caccbff6ab88f3dfdb170a2f"],["/archives/page/8/index.html","e4c7189e5ecdea280a7c8b8d8b764ef6"],["/archives/page/9/index.html","2b4a12d6be680b696caf0c25a3137d46"],["/categories/Android/index.html","5ea98686b3d7305db3ad162455542aa6"],["/categories/Android/kotlin/index.html","a960ddc7b82912ea2d1f1513be1840cc"],["/categories/Android/page/2/index.html","4b9fd9b95b8a3a36f70bef2f55b5d68e"],["/categories/Android/page/3/index.html","e2e9276ebb950a7b6cb8850132b601e4"],["/categories/Android/page/4/index.html","1f7c8b4108d526830b4045848402161d"],["/categories/Android/page/5/index.html","674268fac7e66c068ed48fc039c4fd41"],["/categories/Android/page/6/index.html","bd4c5c959e36ac462e4c747f958b638e"],["/categories/Android/安卓源码/index.html","1a9095edc6c080258fea6266f42ac72d"],["/categories/Android/安卓源码/page/2/index.html","37f48364deb56e6e39d129af2bfbb817"],["/categories/Android/开源框架/index.html","c478d472e64454095fbf012d20fc757f"],["/categories/Android/开源框架/page/2/index.html","41520be2ceb4125b6e1259bfa07fe9e2"],["/categories/Android/知识点/index.html","b61c5f8adffd81a06a0865991cc5d305"],["/categories/Android/知识点/page/2/index.html","e6284dc627e4bd14bcff04662873429e"],["/categories/GitHub/index.html","76f7167a2698fa5a741d65a72c93da11"],["/categories/Jetpack/Androidx/index.html","b85c9b791d99cc0b4e8d9f571db83327"],["/categories/Jetpack/Lifecycles/index.html","c79329d508ea12cc22c8b6bfcf225bdf"],["/categories/Jetpack/LiveData/index.html","4fa08a6764acd00b10025e9ca723613d"],["/categories/Jetpack/Paging/index.html","3b2f6a11f19e0aa70eb71c871a4400d6"],["/categories/Jetpack/Room/index.html","f17d8eeb5250d047548a693fbd8d98ea"],["/categories/Jetpack/ViewModel/index.html","1b577c60db752cc181113e3e3f9f385e"],["/categories/Jetpack/index.html","4daaeb9bb57c315ee96738f45d2b6507"],["/categories/前端/index.html","491c0ffc7c3b53452ce16e8b1639b120"],["/categories/后端/CSharp/index.html","3fafe0eef5dea604c63fc0a56e66975f"],["/categories/后端/CSharp/page/2/index.html","6a91fdbc1dbdb8717288b1442bf8d298"],["/categories/后端/JAVA/index.html","c3331e8d336cc47f6ddf8a1763e205ea"],["/categories/后端/PHP/index.html","f150bb8db2a57a75b7e51b62cb51fe23"],["/categories/后端/index.html","de1dfd96b400aa76ae43b80be9917b1b"],["/categories/后端/page/2/index.html","762db87ea00ee886a80c60fad4d570f9"],["/categories/后端/page/3/index.html","2fee02901e1eee44f69901679c8ecd94"],["/categories/心情/index.html","fb4fd6e8144e10d5cb85ceed10ef9958"],["/categories/心情/page/2/index.html","e78019c13b46d1c7eec909f3a29e3c06"],["/categories/知识点/index.html","a4a2014173a205026565b7be90221ed2"],["/categories/设计模式/index.html","5e33eb6cab83d4c2f7fab1c29cd0f6ad"],["/comment/index.html","fa59a74505c32e1f1d0980cbf05f3e97"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/2020kainian_1.jpg","d5a1f523c46fe05f38925a43528ae2d0"],["/images/2020kainian_2.png","21dfdf99770d6e946a7db90ab6ef31f0"],["/images/2020kainian_3.png","849a98ea3181c0a13284f149be3b37f7"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","2127c9112a3c15443e651c66d7d40e49"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","7333d171ff9bda006b416bc98d9591ff"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","9656e7a4f34f6e2eef9037ab8d973899"],["/page/11/index.html","2fbc8b0a5eb685a8073e5b7be6296ed5"],["/page/2/index.html","5348a9b4e2c3f66c220dd91ab5c39f60"],["/page/3/index.html","a972b5fcc6cad6ae99683cfcb5364232"],["/page/4/index.html","1e60c08112447e7f0bae42d37021cb2c"],["/page/5/index.html","5d74d66e19532a2ed1b3c1648814aab1"],["/page/6/index.html","907bc9f97800d3e132273c6f467a97b0"],["/page/7/index.html","64da64a36c231e5edec6e11946946960"],["/page/8/index.html","3eb30482ed3e2877d7f5e0a5d3682afd"],["/page/9/index.html","7adf1832dd416a94a39afa4d962defdb"],["/photos/index.html","84a925d9aabe52d096b839f4035d2cf7"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","20a381f4c51d624bbe511123bbd58eaf"],["/tags/AIDL/index.html","79443ab05bb5e5fde7c1791ec496624d"],["/tags/Activity/index.html","66e70441493be7882e8fa83418ef361b"],["/tags/Android/index.html","0c467c318f0532554f515f9709a186fa"],["/tags/Android7-0/index.html","480ea7f04780ae6d71d620984f8020ab"],["/tags/Androidx/index.html","591b4d7d369067fb76809766e3d0d5b0"],["/tags/BroadcastReceiver/index.html","47355c6a61653e88c6bf0e903da2cc48"],["/tags/C-文件上传/index.html","eea9b3a7b1cf902c090921027351889b"],["/tags/ContentProvider/index.html","7d3961f7868543fac4cd00515e8e25ed"],["/tags/Excel操作/index.html","639dd4b3aeca95690d27e72fee7cbb6c"],["/tags/GitHub/index.html","a8abad83cdb7d0b27049f48bba002624"],["/tags/IIS/index.html","672401691911a52f4c487728c5a0f8fa"],["/tags/JPush/index.html","b5b71ab3a7d28d4716c75b1dcaba28bd"],["/tags/Jetpack/index.html","bb3d0c5780546e1a1350fa3ac6709ed3"],["/tags/LNMP/index.html","286d4d38dd9437a88451ebd75e9ad822"],["/tags/Lifecycles/index.html","21b29b05077cc252da5998b53972e77c"],["/tags/Linq/index.html","0289926adfc771f3acf6cd965b1c2030"],["/tags/LiveData/index.html","23c0e13b4ba9495045fb96d8ccee255c"],["/tags/MAMP/index.html","a668ef90c34a41d91599dcc2b0cb9bc8"],["/tags/Paging/index.html","27f962e610b7d136cba481378fe8243a"],["/tags/Room/index.html","58af79cd0874339860bf2a2a55744f8e"],["/tags/Service/index.html","234527cd5078d494937a20e7bede6dbc"],["/tags/SqlServer/index.html","27bd7504cdff73fac3033c88520770b7"],["/tags/ViewModel/index.html","80b15cdbc911ced7f39922b7608f8167"],["/tags/ViewPager/index.html","76c25229f871c464ef82c165727ca763"],["/tags/XMLHttpRequest/index.html","77c04b70490db0745a0c0ec49463d133"],["/tags/c/index.html","d434dab429cbfd2f547b015798666d64"],["/tags/coroutine协程/index.html","fe41dd7887d51561f625d53ffa123846"],["/tags/easyui/index.html","607e19de974f6557f9c4dc4b5cfbc30f"],["/tags/fiddler/index.html","0bccf899a8e1bb432a279fca7d7d7d48"],["/tags/hexo/index.html","16c34b13593fb5b7e17bb2686da8aea7"],["/tags/kotlin/index.html","5bea5a829c656e046f1779ac2a78df9a"],["/tags/mongodb/index.html","ac8148230c54b0aadf339343fb7fb303"],["/tags/mono-for-Android/index.html","cd40b681ee2c5c9dcc3467fb0636241d"],["/tags/nodejs/index.html","a784d78f59786043093dcea3173837be"],["/tags/php/index.html","ed25b2126d6015a534554108250175e9"],["/tags/service保活/index.html","121d0d342b2a2600d5a27624e9f04093"],["/tags/view绘制/index.html","56b427145f957ea5f21a2c712e9ef874"],["/tags/visualStudio/index.html","7373c0d204f0ed28fb0231eb2490336c"],["/tags/习惯/index.html","065123e8772535d62b2860648b22b573"],["/tags/京东云擎/index.html","b1801fecd7fadd2d778467d670a50d9b"],["/tags/公众号/index.html","667411634e8a04e44892e676c9610180"],["/tags/副业/index.html","9c20aed35a6fddfbd36701895355874b"],["/tags/区块链/index.html","5999c1495d2b96c8a4b2fe0273e90e6f"],["/tags/图片保存/index.html","79d454f2c4ee598870b1e11bd6f09349"],["/tags/地图/index.html","bbec07ecb59fa09ca824b0e71e386148"],["/tags/增量更新/index.html","7bb50a74b852f083face16c768dd1013"],["/tags/安卓源码/index.html","66faf034978134443890fc47fbfc972e"],["/tags/安卓源码/page/2/index.html","28b842411e962a73c461a321778d95bd"],["/tags/屏幕适配/index.html","89f5082368b382b9cee87eb91f35d65b"],["/tags/序列化/index.html","639008214319ddd79a0235c8095319a1"],["/tags/开源框架/index.html","35ba43b59069391a8018512e5b1dfb78"],["/tags/开源框架/page/2/index.html","d82d4d166d12dfd3e249aafbbe3a7948"],["/tags/心情/index.html","28c805a1cac7d2659f259b15e3999e2e"],["/tags/新浪SAE/index.html","3bb283b4b49f70da3f459e2c0e5b5285"],["/tags/日期格式化/index.html","e061ceceeed0681ed259cb0207581ea4"],["/tags/正则表达式/index.html","c9da41901056f4b81fb968aa1d7978d9"],["/tags/电影/index.html","f44341ea2321cbd93fc0fb7cee678fd8"],["/tags/线程切换/index.html","f3a64dbb226f6382f95953a946ec73dd"],["/tags/网盘资源/index.html","788fc97487ec8646baca8f18fddecd97"],["/tags/职业发展/index.html","9f8ccdbf61d4d383970fe0f31e3ac215"],["/tags/职业生涯/index.html","abb342205385bc9d3d9147d28c780436"],["/tags/设计模式/index.html","527050c612081288cc2cdc0cf2f5b6a9"],["/tags/评论插件/index.html","81f25516eddb95b469c2431f6bc525bb"],["/tags/购房/index.html","644243b0d53fff36ea5119fda9ad2b6c"],["/tags/跳槽/index.html","93fe4beb2ac5645805c35da4e858a8c8"],["/tags/面试/index.html","f675dc6e6cfb43bf962c0b0d0b043bda"]];
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
