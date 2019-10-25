/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","d3a5666ab5d5395ebda63d348eb22300"],["/2014/04/27/Hello-Hexo/index.html","b303f4be9851c79f9aca9e0a0649a054"],["/2014/05/07/001-RegEx/index.html","e6f98e10357f0cd0c523beb62ed9e21e"],["/2014/05/08/002-DateFormat/index.html","10cea18f8c915c644f3ec6cfd10545ee"],["/2014/05/27/003-c-Linq/index.html","cdd2e7bbed67b2938f357ba1ce0d75b6"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","eb5558f61379cae837534e9c34b22ecb"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","be6692467f2fd5fb2dae0cac6e252755"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","342c4f33ffd94fe4784a1e443ad4c5ae"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","c7334c4795d2278f7ac5c43007940fae"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","fc7c55243be49493159a1a5e6d4b1737"],["/2014/08/24/mongodb在windows下安装教程/index.html","b1d02c4f2b8bfafb869cf0946f74f741"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","aebb618d7bc28f75d7ad5bbde430c488"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","af5b3edd95f02d855aaa7a3418e14332"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","1e9e3499e4b9e3b03d4053f5159d7993"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","5839ed6ae3390b75a8eefe53b1f6454c"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","f6ec28395573e3390e16dd019e896c17"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","cddaaeb07f8cb2e1cc387aaa92783ddf"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","d8fa5ff8c6ce418ac7cc14ceafcbbb8e"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","72b9a09965cdd13921df3e5e3cf0507a"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","08bc257c4396db6cc1cee785a31b1ee3"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","128feb977188c9fd47d22b7c7451c2b1"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","3b18c7abe5ed5ccb12002902603b6001"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","102fbf05f0f3220715e0a25383acdba7"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","1f126688e050fcfeb2fab86f793cdde8"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","1e40337d25ab7ffac2d56650fb5e0b31"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","bd42f7dd0ad2544c9dd5446bf9a74b08"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","f05995b79b462d0379f95fc1bdce25ab"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","1e0e1297d42082f81018c14efc62fc24"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","c90cbf59744b8894d853cfc2b9afabeb"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","7f8180944975e2514843b4899f49ad9b"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","d46ab1fa21aa11c855dbe88afe999487"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","fd403e187c1596d28c3b80cc2ebaba72"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","ad251ab4fa6f4463741ed4bca11cd389"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","54f163659c851ce6406a3aad2d04b3f1"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","f137096aeaf3d62d8db501a6666be74d"],["/2018/05/13/四大组件-二-Service使用/index.html","f7f50fbde693171c7ec71343e663e75c"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","2b4314a5e685d42de39100ab48e051d2"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","6432df8013533d270e02a56ecfbca919"],["/2018/06/18/Android源码分析一开篇介绍/index.html","1f3911accc60c75930771ca5612fedd1"],["/2018/06/24/Android源码分析三Service启动分析/index.html","2835d279fd8fff9a581a0859fbac912f"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","69548d023b9f7fd6ba26df82f09a79cd"],["/2018/07/01/Java基础面试题汇总/index.html","0998eec957b40e0899399c76ea554ced"],["/2018/07/06/23种设计模式在Android中的应用/index.html","e6d0ce1f10e448a4cbd24c2a0a5954bf"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","7981d31fd17b7c89da81321216d33b78"],["/2018/07/07/Android源码分析五Zygote进程/index.html","705f041cc7a41b3dae85c4e847901951"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","a2b5b463effa0fd7a46499eb608d668c"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","3e6f6aaf0a6dbe5adb6e1dcfc69c41b4"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","c280d017d8e21ce608a41098951133c7"],["/2018/07/08/Android源码分析九Init启动分析/index.html","918986394b10e4ccf03bd9011cc848aa"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","5665360a442ca925669e249b7ffe145c"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","4b4d484f49c310df6c0eda2d9008d80e"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","41fc2b43be83019dd54f8578dc3dc998"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","95b325de607b215239e9703a68d6d22c"],["/2018/07/21/AIDL介绍以及简单使用/index.html","15c39454ff676487d417044b588b6f86"],["/2018/07/21/ViewPager相关使用/index.html","9c43c00ba57a37944ed4ef2bf599b2a6"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","7c340f230b3b656e2e17e4e4231f8fa5"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","c6a893ddc61b4f886c42f959789f170c"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","41c5d3a0150e3a52fcc2115e65d95862"],["/2018/07/22/Android进阶学习笔记整理/index.html","f3f0c2596ac614b172262afb6c438813"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","052fdd5aa66839995f50dc0367fbbbee"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","e113d0665e06f5294c0cafa92727d50a"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","ce7c3c788bfdd09810691afa4b5704da"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","8d693cbacb448ce6ab948e913866d1f6"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","d323b6cd91e74693e113af8d0e7e54de"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","0774c80db4c525b0e5a5d788ada65f07"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","1e61a5903152e82523ae5f749489da5c"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","2a12bda14366c6bdf15658de3ad68932"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","e8c98ef49266eab175018f4bcc7bd41d"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","7816ef728d3e152d584cb4f0dad2076b"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","1e9be4243f17db7f1e6eb41c65457712"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","ef05873887076b4fcf507133235e3769"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","93e442b3e6e334943c8e0821e9d1a325"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","9b9c59e374338a0092433decb73cfe0f"],["/2018/08/05/Android开源框架系列导读/index.html","e90da580e8df27ba8a2a7b99427b7112"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","0ed9756eb3d4d7b53bf63b383e0ee0c2"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","b7992f3199c87de154560721fbcd1893"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","ef4178df64cade75f256f90a7169af81"],["/2019/08/25/Android面试题/index.html","393e45808ea8eb372416318fb892d6d1"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","9f6113fb4634bc142c1b57c119986461"],["/2019/09/22/汉尼拔电影观后感/index.html","d10f38a9919b82c076c0034cd81fa854"],["/2019/09/28/Kotlin与java对比/index.html","3e48e99cf3f2bd393bfa3184c99a5504"],["/2019/09/28/巴比龙电影观后感/index.html","79e01f577a6a867757119a0ccc861051"],["/2019/09/30/mac搭建hexo环境/index.html","5dfa40691772bd0089caa1c531feb90b"],["/2019/10/01/关于职业生涯的想法/index.html","bdb6bfef72423af5ea5b65e2318b44c4"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","a4022effdbf2b0743e7ecbb6a49e822a"],["/2019/10/03/AndroidView绘制流程/index.html","c4b001c3cfcd0af63cb67873a3b2847d"],["/2019/10/03/Android屏幕适配/index.html","35477b9ad81b7d7dc8ae21eb109f91c4"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","b868919c3dcb31ea325166d098660015"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","b5a520a9b974b2dc3cd162237767e37d"],["/2019/10/13/谈谈逛博客的小习惯/index.html","d2f22dbae1be57959d5e0c6e79fae662"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","771a084b51960623e7e9bab509e587e0"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","432e6fa9ed2819ad26b42d082e9b1202"],["/2019/10/19/关于程序员的第二职业/index.html","75cd2618208cc3cf2da2f38cb7c0e892"],["/2019/10/20/一次车被刮蹭的经历/index.html","10660aca9e13cd5b26a7600754543b4f"],["/2019/10/20/第一次买房经历/index.html","f9679815bd6e8e42fc1c05301a22a61f"],["/2019/10/26/kotlin之Lambda表达式/index.html","d8c0e6998c9679bc6c0ebc4788597e06"],["/PY.html","eaf8adeeda7969b3fffe89d668a7a2fa"],["/about/index.html","8448ad92facc079eb76de784b16fe0cd"],["/archives/2014/04/index.html","c48b181d51586657357d6cc469099ebf"],["/archives/2014/05/index.html","81a59c2560cf128a2ced41a444125931"],["/archives/2014/07/index.html","a3e070754cb3af53e18d996348ccf608"],["/archives/2014/08/index.html","2ffce2f2cdf6827d4d444614600fdd2a"],["/archives/2014/09/index.html","13bebad8060f28968ff3a7ef52d70577"],["/archives/2014/11/index.html","3d116098fd054302196f4f970e468024"],["/archives/2014/12/index.html","02dd5344e6abfa68c76f0281b1b59508"],["/archives/2014/index.html","a17f8a31467c58a05f36734c5efa6198"],["/archives/2014/page/2/index.html","5e0b03ec07f3aa61fee0b73773a63e5e"],["/archives/2014/page/3/index.html","34385b1fa6eec65cbe1b7ca244b74a60"],["/archives/2015/04/index.html","47356181facf5877ff83bc69529c90c3"],["/archives/2015/06/index.html","e657467ea58f3036c0f455d55d967133"],["/archives/2015/11/index.html","99f4d97b1f3295767da7d55701fd6dbc"],["/archives/2015/index.html","9982429dfc61eb6101819234a2a8599c"],["/archives/2016/08/index.html","1f958c46e9b2c7c5edd8a57efffc31bc"],["/archives/2016/index.html","97f35b9128b774104212175bcb69cb5a"],["/archives/2018/04/index.html","355333294767513abfb8ad5d2859e8ba"],["/archives/2018/05/index.html","59868acd2d501f5ecf7b45f299e77744"],["/archives/2018/06/index.html","29320476f7e78ec804299c9892d65f90"],["/archives/2018/07/index.html","7429cb29d8f3be4fb75ef3a7f7940b62"],["/archives/2018/07/page/2/index.html","6e4a76a0389cd8eb08a5d2b9cc4049fc"],["/archives/2018/07/page/3/index.html","8f5db9453fbed52869ab1f096d6d204f"],["/archives/2018/08/index.html","b19dd7c6542f3bae43500b927aa516c3"],["/archives/2018/08/page/2/index.html","5d6eafba9838ff635f0df7cded1121e6"],["/archives/2018/index.html","d2bd45dab1eca4214e863a16bb75bb22"],["/archives/2018/page/2/index.html","bd915764c2035544a5e45093d01a5b4b"],["/archives/2018/page/3/index.html","06eeb8958625fd7a5302eaba4065537b"],["/archives/2018/page/4/index.html","7c4e09fe73e2b257255cb1ec07e1e937"],["/archives/2018/page/5/index.html","0ee8d21f1d5e5e25ea2a71b4d3e1d717"],["/archives/2019/08/index.html","eae81251e1cfabcb71619cd53669bf13"],["/archives/2019/09/index.html","abdecd070209b5ea9698b2e87e3314af"],["/archives/2019/10/index.html","8648b9419b2d3f288d045bfdcf84d732"],["/archives/2019/10/page/2/index.html","ff2da4542c51f35227a509b7199dee7a"],["/archives/2019/index.html","6e2066551f0e8a93b9810e3c6d3d046b"],["/archives/2019/page/2/index.html","622d250224193238df72a11ec42bb39c"],["/archives/index.html","072f014f625027f94f13e87d3c51d58d"],["/archives/page/10/index.html","0276f7779ca0c0d533c139b35533557e"],["/archives/page/2/index.html","6d892f368d3cad07b36df877bc3da580"],["/archives/page/3/index.html","48ddd194de271dc419b9258599ae17c9"],["/archives/page/4/index.html","f706359f33e5e5027c984cccb5a5f6e3"],["/archives/page/5/index.html","2f59c13a2164528b454e2af832192fd2"],["/archives/page/6/index.html","f6b26879559c68abc744aec63ec171a4"],["/archives/page/7/index.html","ea859bfddbb99beb848e1a3958b8b562"],["/archives/page/8/index.html","5e4a6b7aa5331298f2542fd3731d90e0"],["/archives/page/9/index.html","4ce544ca147ea2c33cdf6fc316ba390d"],["/categories/Android/index.html","54469d5f29a3dc653eff979e1773dc47"],["/categories/Android/kotlin/index.html","b30f6e226f966902c3ca7bb8ddf0315c"],["/categories/Android/page/2/index.html","9de660326aa148ebe62a7c98ffc5749c"],["/categories/Android/page/3/index.html","80f5bd05668cc47b53fad327ec519f88"],["/categories/Android/page/4/index.html","8d0b0d5e92a78cd2c1d08b280d5f9822"],["/categories/Android/page/5/index.html","ab8ca7277affe2ad1b5a34eac48729ce"],["/categories/Android/page/6/index.html","96885b697075fb42fea28872cc3085bb"],["/categories/Android/安卓源码/index.html","626b41b1c67bdec8c5beda0a950dac07"],["/categories/Android/安卓源码/page/2/index.html","1d22e0086ed4c303d9a41d3731e8f07e"],["/categories/Android/开源框架/index.html","06ca7c24c4738ef1270aeb24114d350b"],["/categories/Android/开源框架/page/2/index.html","ec1fc7f33048cba3760afe88ae96f1b0"],["/categories/Android/知识点/index.html","ccd1265395cea724c8a28302377be272"],["/categories/Android/知识点/page/2/index.html","b0b5eaf64ff3e639c11c046d9ebf7061"],["/categories/GitHub/index.html","ecb7d098d438b16a7368a2509b4e8383"],["/categories/前端/index.html","c00c30bd76de54b3beff50ab31eecf60"],["/categories/后端/CSharp/index.html","b64c21b61c5282b2f48e1464ca5f598e"],["/categories/后端/CSharp/page/2/index.html","96442ec2bd698004cb0fdcd9584afa11"],["/categories/后端/JAVA/index.html","4b62cdb7fd78ba9b6b0fe8f86f4c1766"],["/categories/后端/PHP/index.html","304accacd70b44f6b34d19c2c7ff77f4"],["/categories/后端/index.html","b298b0c43f8682fd9af16ad6193f48dd"],["/categories/后端/page/2/index.html","83aea0e1e9bf43bac098c39cb94a49f5"],["/categories/后端/page/3/index.html","5be04ccc21cc799d4ccfeab55caa1f8a"],["/categories/心情/index.html","91c34152540b4693870b428a8654b5d4"],["/categories/心情/page/2/index.html","d7c780244ab3fd234d89f28cdc819e3f"],["/categories/设计模式/index.html","63fbf91d033aa3c1ccbba52fe90bcc09"],["/comment/index.html","231fb6da1addedf9baf042ddb153796a"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","98d197b4f90ab6f8df8906709b922a3c"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","049da706849238dfc49f4ce4dc30de8d"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/page/10/index.html","ca4254b33f56f14287180a177e272cc4"],["/page/2/index.html","447c81e8db4e3370fade733165810fa1"],["/page/3/index.html","ed03112a0b6b52a89871b21af6f903f8"],["/page/4/index.html","4496a117d0cca53f4503884697e9a884"],["/page/5/index.html","ca39038d59bf833bdaeedb665f3f902e"],["/page/6/index.html","59d9010bdd5e34d562d78e8a71a3ee5e"],["/page/7/index.html","2369bd86bd3eee3034940348627eb3aa"],["/page/8/index.html","13436e252717d0d863006f1c81d03c71"],["/page/9/index.html","e437a5805f1cab746d036348da880a76"],["/photos/index.html","a31947e4371c07581c90ce23d28c8614"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","7ce20fab9c5227a00c7812d2c01ecb3e"],["/tags/AIDL/index.html","b78d73a10528d05e133296fc5fea7f26"],["/tags/Activity/index.html","1a32d8c1186a4e5d665adcfaa104b02b"],["/tags/Android/index.html","4d28281cf03a5a44ae611d00b60b1dc8"],["/tags/Android7-0/index.html","6f63da66bd8ef675d75311cee7a8dfe3"],["/tags/BroadcastReceiver/index.html","8e719037adca830da168919b46968469"],["/tags/C-文件上传/index.html","3cd74bb1bd0d49adae5b502affe3bb28"],["/tags/ContentProvider/index.html","327076a2fa40dd23ddf74b5247eadc37"],["/tags/Excel操作/index.html","887cfbe6fdcb5e3d4d7100810dfec3aa"],["/tags/GitHub/index.html","88af99407ce85df90e514e90a3e07a8f"],["/tags/IIS/index.html","78dc294399baaab83dd44977dd9b9a0f"],["/tags/LNMP/index.html","386dd1c111ce890edfc17977bc331f58"],["/tags/Linq/index.html","2e870d69ab215db53ef5812af34073db"],["/tags/MAMP/index.html","c725a080cacec2090dde089337aa8f6e"],["/tags/Service/index.html","9feed557cb3bdbc4fc52a0470bbaeffd"],["/tags/SqlServer/index.html","f2dc25f0553cecd6f64aeb72165546d1"],["/tags/ViewPager/index.html","4992f0e7de4f401db174c13bc7afc16a"],["/tags/XMLHttpRequest/index.html","597c86bb53a29e660b1d60431ca2dc78"],["/tags/c/index.html","b3262b4b68bdb550232c97af7d9bb4bd"],["/tags/coroutine协程/index.html","bad051a6bf42ce168626578f7406e222"],["/tags/easyui/index.html","2f403cb7875176d5edd94f95604e2a5d"],["/tags/fiddler/index.html","11f8a0c56c1453c03fa68cd7a844142a"],["/tags/hexo/index.html","bc827ee759cfd90cdd63facacc8644f6"],["/tags/kotlin/index.html","66cd92f9c97248fb16185db13b4e21a9"],["/tags/mongodb/index.html","f571f612aae9485fac3c25daaf823570"],["/tags/mono-for-Android/index.html","f920788f439fca1729cae65346819c6b"],["/tags/nodejs/index.html","676e591ff7890d5fff0ecb886592f548"],["/tags/php/index.html","97cc8f4cb5f6266ae97d0110175e4cc9"],["/tags/view绘制/index.html","a3860dcc7b4fb12560193c7fa253f74f"],["/tags/visualStudio/index.html","a7ef004649ba6da9423d96b3381762d8"],["/tags/习惯/index.html","d693a4c252e3178924f51b00f0e3eaa5"],["/tags/京东云擎/index.html","57fdce2d4b5af12c542ba229407edf87"],["/tags/公众号/index.html","69db1e51f3b7cd6ea13ecdc715933314"],["/tags/副业/index.html","5124d67418a3549100a28f1f7e7b04cc"],["/tags/图片保存/index.html","b1f5d7f2327a64ac50fb987fce937058"],["/tags/地图/index.html","9ee9a4d8cd19ba2b6a8b86fc90662f68"],["/tags/增量更新/index.html","851f7fe25ee320910c5e0f217daab46e"],["/tags/安卓源码/index.html","c689a33c048da81a96663eb5f855d1dd"],["/tags/安卓源码/page/2/index.html","4696efd8dc924862e8cc03a21165ddd5"],["/tags/屏幕适配/index.html","e565898cba480230fee3ebad9490db33"],["/tags/序列化/index.html","3b1587525ec5008d4c6bdc2245173dd4"],["/tags/开源框架/index.html","76dca11a2205272d1b88de53d11843fa"],["/tags/开源框架/page/2/index.html","9a2bdc18ee0e5cbd9d71566fb2380e5b"],["/tags/心情/index.html","695709e7970d11c3685545d242f2bcd0"],["/tags/新浪SAE/index.html","df82849f0524db06e6576e51398dce19"],["/tags/日期格式化/index.html","4e49fe4fae6f49df7a20df7cb18a8773"],["/tags/正则表达式/index.html","76b9b2ef3dbcdb7922787c7562608178"],["/tags/电影/index.html","f1af94dd1a9233a8bb250ba1078f3b66"],["/tags/线程切换/index.html","369aa9d5f108d0fc99837e6ad5dbe234"],["/tags/职业发展/index.html","e91023b5962022b8b63fe199e0aadc85"],["/tags/职业生涯/index.html","9c0a3343490982c9840dd75b8be1d049"],["/tags/设计模式/index.html","091c4a2d17ff4e0d6e6f7d80b234c1af"],["/tags/评论插件/index.html","2f6709b36711a180ad3c5aac9de9cfb9"],["/tags/购房/index.html","9958eedb309ec2ae53688b3c708a84f6"],["/tags/跳槽/index.html","ba0a11d96c991a71ebc6712d6b370b5a"],["/tags/面试/index.html","8ef846ac0a52c8a12e1013ebaa284249"]];
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
