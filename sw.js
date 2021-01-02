/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","1088f7aa9979595b2a9c46ed539cf055"],["/2014/04/27/Hello-Hexo/index.html","dca2dd98d0bdd46e846a765e53f389ba"],["/2014/05/07/001-RegEx/index.html","bfb006965e1c0bf16ff598038fba4588"],["/2014/05/08/002-DateFormat/index.html","a8eddb558ef80a41d3aeae8d13a8014b"],["/2014/05/27/003-c-Linq/index.html","c154726e8a36c684a06c5bcb2fbfb849"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","a951aa0cc9fe56f9d55b30501df7cfb7"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","8368c7b6a77dbe8bae22a54d62e4820c"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","64f1e6e7478905acd04b8b50cf91fc46"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","a2c7f23182cd3537313af5e6ebf8283e"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","e3a3d5640ab34952e1022dd7eedb09fa"],["/2014/08/24/mongodb在windows下安装教程/index.html","84f6ed65ed98230904b0d112f44f1253"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","f244a7b523d8a8d2f7a1cf4190ea3bf1"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","e1d8b2b4a9d9f77063303f7ebda98065"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","e404d64382a6e4dd5e90278779decfec"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","ece16d8db5705f54b3906f87b2f17be2"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","1b7b8c97b59d8e81136319759aac0224"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","dbfb6f1c1388323fb2d0aaab1619906e"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","bd74dd80d73dfd73af67f37a0490305f"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","cabee367282cc2d4e7952de81038988f"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","695027b6603a6a2b548ae9db6da2f6ef"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","9fc4f85bb2a0bf089b5b616694b9bcad"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","ab6552d7d3684592a91f0fcf9554c65b"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","d3d96a16107ba389b202dc625f18d889"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","710660478264b625ea2b73f2cfb09e46"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","dfb556defbb7fe83bfeba50bfc10fa42"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","69780fe1b3b378b09c58a1aa2494c64a"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","2982653edec09e6df6e222adea72b4c3"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","b78995f09a6ead5f332747575cf7bc0f"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","e791d219b8ccc5897db1b6ca8be3c03d"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","1078ec0df995e37104410f9ff4f153ef"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","c3572a8707faca38ac4ed0360694d89e"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","dd32dd3841958ae8afdf38674475f29f"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","41f807e26e2ce4cf45d7e6b2f6bd9db4"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","bc23cb87d6b78b7acd3f740989054c6a"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","f876212b0c3d9f1c3b70b2f55e9f36ef"],["/2018/05/13/四大组件-二-Service使用/index.html","a639497fd57f29566d315f159cea3e16"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","7f732f3aa587efdec5f17d6881ace479"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","bc3c7d206c9b6ff71d9fd29c5d8c05c1"],["/2018/06/18/Android源码分析一开篇介绍/index.html","9c833d5897944aaefa8f9c42f59deb99"],["/2018/06/24/Android源码分析三Service启动分析/index.html","681dea65014e9941f4effba33cfebb50"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","93ad116fa4c15c729e6b810e803686ee"],["/2018/07/01/Java基础面试题汇总/index.html","5423640b9b3fb9e88bca50392545b053"],["/2018/07/06/23种设计模式在Android中的应用/index.html","52cdb20269475cb4a1bf61b633ff9f3c"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","2c33383f302c153928e281992f96c91b"],["/2018/07/07/Android源码分析五Zygote进程/index.html","2191bf99a26e8c19c72e119d10c6c0f2"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","1001c7cf96a263789c5768d4a7d8c86d"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","4205be55d3480fc24c3380b457626aee"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","f634f44a1c0a3b50fbc09c1406e62117"],["/2018/07/08/Android源码分析九Init启动分析/index.html","7e01cce57c07e0227be320a7fed81507"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","ac790a43a975923889a0911235874e11"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","4ce346709abb6ac924cd4e4e310094be"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","6386a5679a438a5abf385e3e786b49f4"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","97123362d4f4805ca11c9e51fdb1c0a9"],["/2018/07/21/AIDL介绍以及简单使用/index.html","1125d0a854641363e77cad96cb1010c8"],["/2018/07/21/ViewPager相关使用/index.html","d058132730895fca240bda6e071254b7"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","0f6fbf3bf7d3ea93eacb5f50da07fe27"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","3aead973b9c8cb035a0af27ff92de54b"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","155229525c845a30574781c07b980cb4"],["/2018/07/22/Android进阶学习笔记整理/index.html","a9e1068da3710e411abb775137abcd18"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","44fdec2d7f95a6a7b9742ec020e4893b"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","668b59ed9c7f141552c304f36fb568d1"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","8082d8bfbcd1e7f02f6b4de3ebccf516"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","5407bf6f0f8320fb670926f2999307a9"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","7285e15023b7c23be7b519366fa56608"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","16cbecd7039cb106232fb35d914bdd52"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","1416a9a56fb19c5c00b28ca4655fcf92"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","3fbaceaa94d39371f79415bc0d2d7c27"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","b26ccfab72a6ba324d33d0adb59274e3"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","3403d1d1bdddfa3859607e936ca6dd44"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","e0ef02c67435b8a4c788559f4325d873"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","6393955b82263e5224f048c3a2855535"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","e8db491bd7cb1d630688b116638add9c"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","79604b00a139fce8d0229e76f6cbc78e"],["/2018/08/05/Android开源框架系列导读/index.html","a796e86f1f8a3cc007c51c63b5eb1d96"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","23ed47567a3bfa8813a89125457d7677"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","aa87d2eb48151087d8fb804ca9aee78c"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","92912e13ebf192c7aadb5c20f8673e39"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","0cd6dc87a2efefc7f19874539453815b"],["/2019/01/01/Jetpack之LiveData介绍/index.html","ad9248696ec135496ecbea247e6bb49a"],["/2019/01/01/Jetpack之Paging介绍/index.html","28af0cb395b81bbadc20ca93956695e9"],["/2019/01/01/Jetpack之Room介绍/index.html","f4001e15c779ac85509f5e8ed9dc0324"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","a7636e631ca29d3d30f0d251ceb4511e"],["/2019/08/25/Android面试题/index.html","ecec3bb9c33c2a9b0614ddec13347dc4"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","1b965a9761b80208e18f2a7c6e6f075b"],["/2019/09/22/汉尼拔电影观后感/index.html","7291901a8038f850924159329a04d6b0"],["/2019/09/28/Kotlin与java对比/index.html","8c307711d025fd947d6c69ff05be87d1"],["/2019/09/28/巴比龙电影观后感/index.html","765553dc5e6de61a4d45bb1e82a8c1b3"],["/2019/09/30/mac搭建hexo环境/index.html","e4280cb888fddb8d00186f89397b4b00"],["/2019/10/01/关于职业生涯的想法/index.html","d1ac031cba8df1798ce2c21ea403e3d8"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","2a7432c76b3a80b70ca57ec4f124bfde"],["/2019/10/03/AndroidView绘制流程/index.html","d06c16c02be3d04bb7a91d6e8b2d6adf"],["/2019/10/03/Android屏幕适配/index.html","363039aab6eaee0d075263b3f523bd0a"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","f2aa1d6c22505db56558df44a360876b"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","4f8153ad3a5851bbe50f058ed962680c"],["/2019/10/13/谈谈逛博客的小习惯/index.html","a87f87aaf0a362500d9ebc6fa245903b"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","73848b38f943e1596822f0ee1995eb0b"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","e57ca6d46059cb2a083d04a35ad48c9c"],["/2019/10/19/关于程序员的第二职业/index.html","4cb50da7e3e2ca90b138122c2a023b17"],["/2019/10/20/一次车被刮蹭的经历/index.html","0204786fdd28e197325e34409856f51b"],["/2019/10/20/第一次买房经历/index.html","e8cb7739b92b63096255b8ead2930d8c"],["/2019/10/26/kotlin之Lambda表达式/index.html","36a3eb002e51f22f704fb3e304705a54"],["/2019/10/26/收藏网络资源分享/index.html","8922a91acc5b12589a84ceda69d93534"],["/2019/11/01/Android之Jetpack简介/index.html","dbd25afb969be88aa29cd31d3e84f280"],["/2019/11/01/Jetpack之Androidx介绍/index.html","bc094e61053361944831861e94042c8f"],["/2019/11/02/初识区块链/index.html","aa3d4536bea763c81f8407fe2b84bfdb"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","423ccf0dc6bbadb695b743b0e70dbb27"],["/2020/02/10/2020开年的一些感想/index.html","799c7ebc60b1e91984b0b393ff637749"],["/2020/02/21/Android-8-servicee保活实现/index.html","bae6bd9d73dac5d24a54ba308098dc37"],["/2020/03/29/美股熔断与美联储救市/index.html","c5f6416185544733072ebd55ab265050"],["/PY.html","39b7360448069073e57c79baf35c1004"],["/about/index.html","8f96fc12224ee295d7f4c14ae8090094"],["/archives/2014/04/index.html","45adae8e0598e9a5ed0243a5ed411569"],["/archives/2014/05/index.html","747feb13917e3baa5bb6ef9a0b71f7e0"],["/archives/2014/07/index.html","c6f365dc28c470921efcc25cee326c37"],["/archives/2014/08/index.html","3b82261700693f9fa77a5954cf766898"],["/archives/2014/09/index.html","85845e1e35a949d65170f9c4fe9f8690"],["/archives/2014/11/index.html","e56c643d51d9692e00fac377ec6e014b"],["/archives/2014/12/index.html","33d0186aa5bec9dfa1fcda1efaa9537e"],["/archives/2014/index.html","7b721058f127085dac0bc0600fddae44"],["/archives/2014/page/2/index.html","bf7a3a8b5021c3b750deb6c5fdd6727f"],["/archives/2014/page/3/index.html","23f82dc2d7aa2ec637e06937be23739f"],["/archives/2015/04/index.html","821f776a90e28dec7a7ad0339936e321"],["/archives/2015/06/index.html","f6ad32ca91881f566d98aa9c7dde53c0"],["/archives/2015/11/index.html","203a9e8950af732136df0ac8073f0104"],["/archives/2015/index.html","e8e833d71590a4b4eb227a1cd2b95d0c"],["/archives/2016/08/index.html","fc9fc2d1a0998a307ecd717f3cc61201"],["/archives/2016/index.html","3f2b3d3ba1569e12933854c79fa0c48d"],["/archives/2018/04/index.html","d0b2cce300821e443f8b116c3cabb391"],["/archives/2018/05/index.html","5f04f0e041ad098fe40465d6f50e2528"],["/archives/2018/06/index.html","be33814c7465c117d3028d003c6ed907"],["/archives/2018/07/index.html","7d2b9d20d2c006eac651338765073400"],["/archives/2018/07/page/2/index.html","a5167da8baf0172e55f4c2fa2aa6d517"],["/archives/2018/07/page/3/index.html","31bc395358f888aa68193d39a0152ee5"],["/archives/2018/08/index.html","09e42556893c0235b0aba12d8abf215d"],["/archives/2018/08/page/2/index.html","6d7169a0c536e23c2d9f5e6cedca6e44"],["/archives/2018/index.html","51b4e54fc43499cb98e9f05a9ce7c81e"],["/archives/2018/page/2/index.html","4589c87f41f46651990284352d0022dd"],["/archives/2018/page/3/index.html","8e5703cc4c13889c03aba3196a2ba001"],["/archives/2018/page/4/index.html","52f370cca428bd69234d24f37582bb68"],["/archives/2018/page/5/index.html","f27bc3e33b360c1e12bfce81adba71dd"],["/archives/2019/01/index.html","5c609ce0b25825ba65ad5f02fcee57e1"],["/archives/2019/08/index.html","7d3bec4880089ff84b23e4e5e0499bf1"],["/archives/2019/09/index.html","59abada20fd91dcb89ee1c7a54ce73bd"],["/archives/2019/10/index.html","f8ceef25e86ace21f16a6e22e3cc1a31"],["/archives/2019/10/page/2/index.html","56150649ebd321f3eac13266fbf46ed6"],["/archives/2019/11/index.html","71a22f6dd067479f2378a2442d4138d5"],["/archives/2019/index.html","4f14f9d10ef35aca995925e050137cad"],["/archives/2019/page/2/index.html","75e29bc9d4964aa99d6e56574e284e8b"],["/archives/2019/page/3/index.html","3ac3c58af8fc04645da582c5c96a2347"],["/archives/2020/02/index.html","8ecfee0af1302ee71b1c39d727b0f057"],["/archives/2020/03/index.html","186816dbe52b0f6922944d310b31a98c"],["/archives/2020/index.html","56df9a20354bef77b7447479119d9195"],["/archives/index.html","32fd4e49f881426f564cb27889bc09e6"],["/archives/page/10/index.html","8d1b8e116d0eadb7f7ab6e8d1f02dbbf"],["/archives/page/11/index.html","2e0aa0d312becc6ef50e344b4eb53488"],["/archives/page/2/index.html","0c73d152f677f5ab86868f3e73545bbb"],["/archives/page/3/index.html","2a9e0ae4021dd0a5efe2a09f9c0cdcc9"],["/archives/page/4/index.html","fbe3f8a7f0902c356eb015be92614b39"],["/archives/page/5/index.html","22076f144df9603697c7aa18c32b9afd"],["/archives/page/6/index.html","1bfb6f9cdbbeb2b1a634a9046930fcc8"],["/archives/page/7/index.html","c02746d978ef763b0a6c78485b05bcf9"],["/archives/page/8/index.html","e58a32074441947ef159d3ec7396e4ea"],["/archives/page/9/index.html","473c64bf28b5aed3ccf8777ba659cc22"],["/categories/Android/index.html","97af446f101904b3bd2130cc9fcc0163"],["/categories/Android/kotlin/index.html","fd366f552cbfec272d9966317ea0618f"],["/categories/Android/page/2/index.html","404cfc3180f338362407c7e443a7f311"],["/categories/Android/page/3/index.html","aa29017e07bf82af34b6be9ec7a47efa"],["/categories/Android/page/4/index.html","005542802a59ee25f0762242211ec214"],["/categories/Android/page/5/index.html","a42efca05b76f1e67a969ca6b97829cb"],["/categories/Android/page/6/index.html","697781983d24f6b00b83f33710d16ff1"],["/categories/Android/安卓源码/index.html","8c9a35c28cbe026addc530598e9aaed8"],["/categories/Android/安卓源码/page/2/index.html","288c8e53376194cf500c9a341dec23c6"],["/categories/Android/开源框架/index.html","bdb0c897592d598f55df8dc98d890982"],["/categories/Android/开源框架/page/2/index.html","64b3f6fe78a5fea6fb8da9803f8e204b"],["/categories/Android/知识点/index.html","2eb8be26302f9d8ba2d3909887d6f53f"],["/categories/Android/知识点/page/2/index.html","df74f121b050ec6ae84a2010f6254517"],["/categories/GitHub/index.html","3140f26c2914722e0e2441ccdb2a8d46"],["/categories/Jetpack/Androidx/index.html","7e2d54dbfa5846e173a31b6f552b9121"],["/categories/Jetpack/Lifecycles/index.html","5daa306027ce4fb2ea52f752f506ad9c"],["/categories/Jetpack/LiveData/index.html","99680a796f231ff9c1eb8f1e3623b102"],["/categories/Jetpack/Paging/index.html","693e737bf3f167e994b3bd841ea65201"],["/categories/Jetpack/Room/index.html","0282961b741f91c22043dc840baa3038"],["/categories/Jetpack/ViewModel/index.html","5917bcc5591f86a179a0fdcb2cde8716"],["/categories/Jetpack/index.html","7ed9c289a44075b5d446c79122d2ccd4"],["/categories/前端/index.html","3d8b57d69ee163f81d1cf7155bf860cc"],["/categories/后端/CSharp/index.html","9371718f747dc5fac72d12979758e18a"],["/categories/后端/CSharp/page/2/index.html","6f7aff047b4e7576758b8e966582fc46"],["/categories/后端/JAVA/index.html","8c747fdb6c3278a3565832204e557878"],["/categories/后端/PHP/index.html","3053c3ff87a779286b048d7467ef2c2e"],["/categories/后端/index.html","c57338de0f324bb69ba49ea3e34152d2"],["/categories/后端/page/2/index.html","cd13d94dd3a88fbbc06555fe20fe330c"],["/categories/后端/page/3/index.html","20579b6a9339ee1f88cfdaca77baac30"],["/categories/心情/index.html","1e33e4da193ada1fa60ec3f0e92a629e"],["/categories/心情/page/2/index.html","473ba382c15fc588b9cdb52da5de99d2"],["/categories/知识点/index.html","7e8203425758c5e2d5f7d87f750dfb37"],["/categories/设计模式/index.html","768b0998fb6bd89b6bdc2a4f7a71f3f7"],["/comment/index.html","babf98f5267b65c5bf61cfbe02c0817c"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/2020kainian_1.jpg","d5a1f523c46fe05f38925a43528ae2d0"],["/images/2020kainian_2.png","21dfdf99770d6e946a7db90ab6ef31f0"],["/images/2020kainian_3.png","849a98ea3181c0a13284f149be3b37f7"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/gupiao_baoweier.png","320f8a9d9a0fb5c83306fdcf993a766d"],["/images/gupiao_jianzhenglishi.png","e2d54b4036a56ea99dd358d6e231008c"],["/images/gupiao_rongduan.png","b83d1044c5352216034ddc06993da0d9"],["/images/gupiao_shangzheng.png","06db8ba1c4edb6e22d3003d0ab55f437"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","dd3f5c0f5cd6e3cd31549b35fd75c1e0"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","e1e728b8cf3347cade9d419cf58cb67f"],["/page/11/index.html","3bc2aa3a0a90933536288d2e689c6559"],["/page/2/index.html","cf494b22166395014b496b9b9d8ca39e"],["/page/3/index.html","f03119ba0365c9ceaebdc938aaf55aca"],["/page/4/index.html","04e9b1096c2908fd9899a3dc83d4b3bb"],["/page/5/index.html","72aa1ca399228195f3b423f2ef3bf803"],["/page/6/index.html","4acd91dc831f89c3d4380d3699f54849"],["/page/7/index.html","6799b429cc318bcdf606ddcec119de91"],["/page/8/index.html","e4f9b7a56970162469697eb306392592"],["/page/9/index.html","7c230da5179625d04436f84be2d2603b"],["/photos/index.html","e4a0192e9fb26cbac96c9023a89a8fb0"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","c07e3ec0433b8dda105a1e0219a56a60"],["/tags/AIDL/index.html","e1fbc11cdc1442e3d8db2f84ac3b0aba"],["/tags/Activity/index.html","12eac5b7cd610e4f632e53bba48c9d71"],["/tags/Android/index.html","e7bc6d93407aec048495eb55df4817d3"],["/tags/Android7-0/index.html","1fe19bd8bb62ee3d19cfd830eaf8e24d"],["/tags/Androidx/index.html","41121f1ae8387bc0179c2cd6f233d720"],["/tags/BroadcastReceiver/index.html","bd6fff6a8213aacf7b1372fdd11f2a37"],["/tags/C-文件上传/index.html","2c97eca88a03af89ecef097639222417"],["/tags/ContentProvider/index.html","396a663255ef88e6dfa34fc5d2d22830"],["/tags/Excel操作/index.html","deea5ca75783836ca7b47733d8649bf9"],["/tags/GitHub/index.html","dbe4bc91f355bd8d9cb7cda284ff96e6"],["/tags/IIS/index.html","84143865676a666316d8983914656ef9"],["/tags/JPush/index.html","df70017279ecd310ac134ba38d97ad9c"],["/tags/Jetpack/index.html","ee1c0c1620595a4cfbfaefdd7b065305"],["/tags/LNMP/index.html","be63c7d942212bdcdf564018c7ce8fbc"],["/tags/Lifecycles/index.html","5314313f3dfd89552271950ab16645f0"],["/tags/Linq/index.html","7412797d971746e3e3b25d8e4db0d46e"],["/tags/LiveData/index.html","20301efb86e5eda142996ba7460520cb"],["/tags/MAMP/index.html","0346649fee44a09ebcb34706055c95e9"],["/tags/Paging/index.html","8238ceee8f1296581cdd5620d940084a"],["/tags/Room/index.html","0323f58e654245898afb9d20b9d54dc0"],["/tags/Service/index.html","7c45ab073f67d1bd84d95490ba75d92e"],["/tags/SqlServer/index.html","4d9e1f7277cb1f2afa9b684129805020"],["/tags/ViewModel/index.html","deeb0b3d5087d6842b22c5027f7b9e31"],["/tags/ViewPager/index.html","4c60b6a5f4abe4bbbac3631b7ccb51d8"],["/tags/XMLHttpRequest/index.html","2c6f29b0567560e6630a92dbf37f608b"],["/tags/c/index.html","f1ce423a3fd50ab70fb75c015a266cbb"],["/tags/coroutine协程/index.html","d66d6afcefcac5c2fa16ef9a2e30407a"],["/tags/easyui/index.html","3e6f2d0fafa757bec9ffebbb7dc6e3da"],["/tags/fiddler/index.html","b1a62656cdc4e5888595855388f249f8"],["/tags/hexo/index.html","eb408bd7442242ed04925c540a39dad9"],["/tags/kotlin/index.html","fcd5e5239f334de1cfeab4f19b2b5c4e"],["/tags/mongodb/index.html","81cd111165626bc040f6eb301f641e3c"],["/tags/mono-for-Android/index.html","429b3d84db48b61468a7e44f6720498f"],["/tags/nodejs/index.html","3034a120376ef2564e7963dfe0bb17be"],["/tags/php/index.html","dfbd0dba8be8f6c66e7ce0322955e9ca"],["/tags/service保活/index.html","65a0565cf2ad5d0968f3a0e887a7220b"],["/tags/view绘制/index.html","0506a7e3b75a6d09d6041c573d764860"],["/tags/visualStudio/index.html","d85967149808f7a0dfac1dae8fb535f5"],["/tags/习惯/index.html","e768b6a101fb4a2fa1def96fef8dae00"],["/tags/京东云擎/index.html","902fa1b960526495f4663a542cdd2c78"],["/tags/公众号/index.html","95b09a0af09b8707e87dfaca5998f23d"],["/tags/副业/index.html","3cd9778a32e3a593cfeb2b1d63cfffcf"],["/tags/区块链/index.html","b6a251785d6843e22e7e3c2da71c81d1"],["/tags/图片保存/index.html","fb46d3a9131987939219e9d2f7e75a51"],["/tags/地图/index.html","77a82ed5037b4146eea19a34e1bab04d"],["/tags/增量更新/index.html","52c7a76c98ff1a7ab941840d13b097f9"],["/tags/安卓源码/index.html","ec7d3b9325902f02ae68b84eb629cf21"],["/tags/安卓源码/page/2/index.html","c4af93e8099b540aa358e76f4dd80796"],["/tags/屏幕适配/index.html","f1c0e20b1150586fa6e191161d42d0cf"],["/tags/序列化/index.html","bba733a771facf0eb12a23ed8a982c5d"],["/tags/开源框架/index.html","dc7916355725e927f9edfee5a3efe94f"],["/tags/开源框架/page/2/index.html","ce3ae9147093dc8167fa7000baee7b8e"],["/tags/心情/index.html","fd4225105f2b871ab83f2c40ba7cc68b"],["/tags/新浪SAE/index.html","5f4fe06482f3bb1ea2b4be8f1d995749"],["/tags/日期格式化/index.html","42ae70681c30d0c67c7951c4741b01c1"],["/tags/正则表达式/index.html","f36d210f7f0bca1a3d9354a9a0e043d5"],["/tags/电影/index.html","ede3547b836723ce524f16481f7e4ff4"],["/tags/线程切换/index.html","4a92a9f82c2df6dbad3cccb69f7ab36f"],["/tags/网盘资源/index.html","19a695814e995a1251f93c7855b0113c"],["/tags/职业发展/index.html","ba17edc98ca85d645bed4b747854a9fe"],["/tags/职业生涯/index.html","a5f3d78bcdab99f04d5f301b8152391f"],["/tags/股票/index.html","d331e886e6a56197ea96d644ebe2c25f"],["/tags/设计模式/index.html","393d414aa17ddaf089bc4ca58564a412"],["/tags/评论插件/index.html","2b4ca5c3cb55ecfd4cba6cafe752f076"],["/tags/购房/index.html","c3c649b2106f5c81d6330c1ebe9ed957"],["/tags/跳槽/index.html","3a2215de299d45a8d1800f9b6fe662a1"],["/tags/面试/index.html","bbc558f08ef83598169c775de9f9f6c5"]];
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
