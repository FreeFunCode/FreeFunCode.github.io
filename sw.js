/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","7972809517048e2b066082f006a32ff7"],["/2014/04/27/Hello-Hexo/index.html","8a5251cdc48b88c9a1c74b0cc9aaaedb"],["/2014/05/07/001-RegEx/index.html","861d99ac9af811ce394034c176aac387"],["/2014/05/08/002-DateFormat/index.html","748badfbe59b3f6266bfc8d1a9bbdb95"],["/2014/05/27/003-c-Linq/index.html","ff2a748224977caf0ecdacdffbd2aab9"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","8a4fdc601b7980fe8cde3d14020ee06c"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","79f8524fd3d3c0f763e50759f41ce606"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","0fe543848a10ae58d2bf8febbe196640"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","a490778c1380d2fc4865a22851cdac10"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","1d73bbc7d36cbb24dcbd48d4662e4008"],["/2014/08/24/mongodb在windows下安装教程/index.html","88bb6dc41205a041008a1b46fcb8b169"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","aca9fd8aeb173d35a6a9c0e6b56b7b53"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","d4995c715c6401cce567ebb2a2f50cf8"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","f4a1834d259e20f0854e4615f4c9a9d2"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","9f0315f480c8a9fc651c8c9bbe3ce9ce"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","b9d0195391ca5767b5f224ba8ce5de1c"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","744b9fbc9219593a806269ff4bc6246c"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","776420e0811b22d556fa963954a37a5f"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","b96e41d54244cf9496a24fa04563a71c"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","374c2e04b9a4b8bb9cf726c25422da9d"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","0262132e35642a0e808dfcd5b38c80e6"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","d964947c9003007deba19c9d7a5c5ec4"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","8901d7e2d29b6a7873f0f3e98fcca17a"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","41a95d03c289754a826e46b8d3e9d5b2"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","82d4990366f957004e9634124180da35"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","0b3b048d126030112e165a87e2461806"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","fabc4db86ca4aaa43632a7b847283a34"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","b6874c9e336e14cf11ec7fc224152e87"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","a0fa39909858cc9732cc777f453a1557"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","d7d34d926db304fe491ca824676489cc"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","abdd8c8fdace3257ba9eea47b3d134ea"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","298fd9af433c56a07f61152da364e359"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","950c337051b1c20933d8bf896280e163"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","880687b2908f377e5512723de25e9505"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","06fee459a07f6291af6dffe0ab9cafe2"],["/2018/05/13/四大组件-二-Service使用/index.html","1a2e531bf52cbbf88e8b02422578bde8"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","417241b3c93bff0a476c9ce17e83b52b"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","1ed6712874ee6929198b854d3dbc26fe"],["/2018/06/18/Android源码分析一开篇介绍/index.html","397204bc21f4056ac2855688dd627d1c"],["/2018/06/24/Android源码分析三Service启动分析/index.html","a4a110f48271b78295bc1b95e231e89d"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","7dfc24d5e323ee01a796ec520409f14d"],["/2018/07/01/Java基础面试题汇总/index.html","8f2609e68424ef435b420fce80875952"],["/2018/07/06/23种设计模式在Android中的应用/index.html","fec85c53846c121891544fa7480cc509"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","7a3db0409411dee0c64d7c421ae7efcc"],["/2018/07/07/Android源码分析五Zygote进程/index.html","08e6acf688e6da1db1994ecef396d4c0"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","9315ea20acc08949bfe546b627c9adae"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","1d241f6b8bf33eec32007fc1e15505db"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","e5c80802dc0fc151af97a434653fa3b3"],["/2018/07/08/Android源码分析九Init启动分析/index.html","317c00a67162d2ca73d1f4378b07607f"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","cd9d9c85f901c51b64eb21d3c620eb75"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","462c88d71ba930e7c67ba272d3724bb3"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","1de01e1d0f81590eeafb61895081e509"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","4c60e44315cd5c01305c28c64cee5e67"],["/2018/07/21/AIDL介绍以及简单使用/index.html","c1cd59dff48af5bb8ed6beb19284dd83"],["/2018/07/21/ViewPager相关使用/index.html","d4e4ab57e1c1b8d03b8376dd9f7939e8"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","eb0976b8d55ebd38b1a8c0f06469376d"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","e6f280326cf03682993890d8a9986bd3"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","c08bd0873ca652580826c80542f2fd74"],["/2018/07/22/Android进阶学习笔记整理/index.html","dcb6147a4d7efb30fb8743ed117b5748"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","ca055bb3e1ca19f6060c1d8ab8cd5397"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","dd228535da59fb9e7518378105d0dd23"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","800dacd256b6236a4e2c581533ecf0ce"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","e4958fcbdff003a51c7466de1dab3ecb"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","73ee6c8c1731aabe1c22c1ff98bcb7ff"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","04efe2cd2045738aa3a3ca01dab21e5b"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","5686a08532c5aed90165e2a8c2e543a0"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","53acca8a7b0d57414196d39b1f562cc9"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","0c268a4ffe2c64110a35f1f384cb7b8b"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","395c6888ab78b6fc171fb5e2c62d73a2"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","a07398d19191a5f9637447333f4f966e"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","9e2b9b730a252a18757fc07e7d6a0349"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","f46654ee7408e34589a6c64f13ff1150"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","674d23652167e2e5915a0a851fa711ff"],["/2018/08/05/Android开源框架系列导读/index.html","518c80bd6e747317b85de4a282ff8a4f"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","6d65a85b52407a63861329fd031c1239"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","de2466662dc8dfe4fdd9baa4bf6dba72"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","9213eee900d3764996de4a84e635ac33"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","a1c756bab13f2453c49e6b828ead9e73"],["/2019/01/01/Jetpack之LiveData介绍/index.html","9199f0f4d7f2b4a71fb9fafc062f4287"],["/2019/01/01/Jetpack之Paging介绍/index.html","ca08e61a85a1de3cc524d19b855af29c"],["/2019/01/01/Jetpack之Room介绍/index.html","f829899affe720a6b6157f8c1ff6a5d0"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","1d25a755be00b52a699bce298bb6f198"],["/2019/08/25/Android面试题/index.html","a447f2cd7bddbdf3fc61badc8f36af56"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","cc2de89c8df5474363abd077e8546357"],["/2019/09/22/汉尼拔电影观后感/index.html","eefe7a382dbedaf90e9f648cd73dbb95"],["/2019/09/28/Kotlin与java对比/index.html","28f9c2f04c8c3a125576c206090077b2"],["/2019/09/28/巴比龙电影观后感/index.html","18d0a64155d1d453b3f6926f2a57fbda"],["/2019/09/30/mac搭建hexo环境/index.html","2933d163d3e0feeefea8932322075478"],["/2019/10/01/关于职业生涯的想法/index.html","999e7c8c17ad3ef4dc36cc55dba8049f"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","9bb5773076d24038e7322493237204a7"],["/2019/10/03/AndroidView绘制流程/index.html","43ebd610276c0230b04dff7351f59af8"],["/2019/10/03/Android屏幕适配/index.html","e7ab8d245240d51213aa389400da6d72"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","b33704abebe4feb04555db0409a0f0fa"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","510bdb649d6140d02304361f45109bb0"],["/2019/10/13/谈谈逛博客的小习惯/index.html","988d8f7218253afc72269b73b7962f01"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","8314846f57cb73de9d52316a2bd8e4cd"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","7168579f1d8b252b2bfac58b37266d5c"],["/2019/10/19/关于程序员的第二职业/index.html","fb7e8e1617a2791487fa5bddc8e02bf7"],["/2019/10/20/一次车被刮蹭的经历/index.html","58baafe50c8b5977f9a9e0b3c45c167e"],["/2019/10/20/第一次买房经历/index.html","bd01f475be79f723ef85f8d838069aec"],["/2019/10/26/kotlin之Lambda表达式/index.html","5ebd1ad035f10b9c518a9a391f212d01"],["/2019/10/26/收藏网络资源分享/index.html","4d29f197cca075ef6288ca523db612ee"],["/2019/11/01/Android之Jetpack简介/index.html","1d1c86a6d5139a4ed991b597ec9def71"],["/2019/11/01/Jetpack之Androidx介绍/index.html","2b93662c14689c64757fec8a913342d7"],["/2019/11/02/初识区块链/index.html","dfc6e5e1c9d36c7df68be2a8e2bc5a1a"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","b985d6620b79c76e83f8f912df5c73b7"],["/2020/02/10/2020开年的一些感想/index.html","41a6055646942a08d508ec9c6690337c"],["/2020/02/21/Android-8-servicee保活实现/index.html","212113a4692b4c9631ed4ce48b1c587d"],["/PY.html","94c5503623a7a6016d11d8a0c3b5293b"],["/about/index.html","859d7fd6557439ce98388acb53c2e519"],["/archives/2014/04/index.html","4a6062fe9e6c485c79c9595c0db2c7ef"],["/archives/2014/05/index.html","542833ffe184a3dff2a46b2e791ba214"],["/archives/2014/07/index.html","adaa1724fe5fae9c79ab94e56d0b6ab2"],["/archives/2014/08/index.html","8d07d57bea86ff76b3024631f9d72087"],["/archives/2014/09/index.html","922e10e4873f984e558272de003bf17b"],["/archives/2014/11/index.html","760a422952f85da29202e00026c4f061"],["/archives/2014/12/index.html","afb4e9a3c541096686bb5ca5bb079626"],["/archives/2014/index.html","e167cc8e7e5a47c1847aac1af793b7e2"],["/archives/2014/page/2/index.html","4a9154230e024bf9deea866499550533"],["/archives/2014/page/3/index.html","2ba87e99af1e212ce336f0ff555bd6c8"],["/archives/2015/04/index.html","acefc2fd36ee7bc28a2519a1e313c1de"],["/archives/2015/06/index.html","716ba85b98f2570053835e03853bd444"],["/archives/2015/11/index.html","569eee7abaf58a61ace0b57e790842e3"],["/archives/2015/index.html","266e77eb3aa8e1e05e0692ca3d678a20"],["/archives/2016/08/index.html","b91a094d918f845c28eac6ad190025a4"],["/archives/2016/index.html","7fb1ef7e3efb60c1384fcf87e95ccf19"],["/archives/2018/04/index.html","23ca6c1e2201d01c85e610698e7f5632"],["/archives/2018/05/index.html","4633b1683db11f916aac79641135db17"],["/archives/2018/06/index.html","137564bf676af5670d4d08a378de2507"],["/archives/2018/07/index.html","b3a4beab4a1c5b85eff19438795252db"],["/archives/2018/07/page/2/index.html","2f05b1d79d8a109240d0e557c5d387d9"],["/archives/2018/07/page/3/index.html","cd82e2855c45dbe27cce4bf457857782"],["/archives/2018/08/index.html","83e3c9e1c4c37bfe7a2c1b4bea6e2cc5"],["/archives/2018/08/page/2/index.html","27b1761b60aa440c31e7aedf1f47f69d"],["/archives/2018/index.html","759e875520164226c65010191929cbd3"],["/archives/2018/page/2/index.html","eb31fe8928bd9c5dc3f0efa3fd6f6117"],["/archives/2018/page/3/index.html","02d945afc7502cc44b0cd483a7e1fea9"],["/archives/2018/page/4/index.html","24aa955647598de82990d9c57840455d"],["/archives/2018/page/5/index.html","89bd1672f30c3500595155b6c8f06c33"],["/archives/2019/01/index.html","34fd1d9c329b05c3a053d5a6de2710cc"],["/archives/2019/08/index.html","431c76d502dbb968e0582445d77409c6"],["/archives/2019/09/index.html","d20774ded61bf106ae5726cab887cb8c"],["/archives/2019/10/index.html","2a3eec395989b07181694784b078c54e"],["/archives/2019/10/page/2/index.html","609c22d97afa747c6491228e972a35f7"],["/archives/2019/11/index.html","0a5bbbf4c087308322edd25691114e6e"],["/archives/2019/index.html","54789222d7ad95cc556ea864af1996f7"],["/archives/2019/page/2/index.html","41bab9df3987e8ea9e3f938c99c711b6"],["/archives/2019/page/3/index.html","a9b74ecf190c7bde92ac39e675db2447"],["/archives/2020/02/index.html","0672af15de8d7111b4d822001e5299f0"],["/archives/2020/index.html","aaa7f64b8e0cc4fc0380f566565db623"],["/archives/index.html","93dd83c93f247b4d6a97ab856418cfae"],["/archives/page/10/index.html","398e800ae65d56506975f9cd4abd0d15"],["/archives/page/11/index.html","e127a5b86e802e38d590966cebe536e4"],["/archives/page/2/index.html","1119f515d187c6db1c5dd384bee67b7d"],["/archives/page/3/index.html","ed9a361b9d740a8208c0836e02372040"],["/archives/page/4/index.html","9dcd940a9aba4b66214558b0f330461b"],["/archives/page/5/index.html","fbeb9bc526411e627b2adf67cbe9c51d"],["/archives/page/6/index.html","81364e8bc635db900efee283cf906872"],["/archives/page/7/index.html","f8d63fc964c00def62dcffbc3f40f74c"],["/archives/page/8/index.html","333a4faf18b736e679e33de7d4ba4f02"],["/archives/page/9/index.html","40f96e361aee7551d104ef1cf47c6e56"],["/categories/Android/index.html","52b65759fa9de48cd8f892958eaeb849"],["/categories/Android/kotlin/index.html","507a368e7117383bf9b59d447c8683c3"],["/categories/Android/page/2/index.html","379102d2817fc3f5298297358337738b"],["/categories/Android/page/3/index.html","e9ba104b5ddf149db16a0479829093f8"],["/categories/Android/page/4/index.html","cfcc7ea37f2560aa91984774133a5058"],["/categories/Android/page/5/index.html","204c4e861846603788075f8a9d903bb7"],["/categories/Android/page/6/index.html","d305bd39970e60547dc0b4ef917920dc"],["/categories/Android/安卓源码/index.html","8ab50589b5a48751495e572626e1ea4f"],["/categories/Android/安卓源码/page/2/index.html","f7a1e3eeb4ce84da32d748084d55d571"],["/categories/Android/开源框架/index.html","dc46299f9862a55bc708dcadd9b0ec0e"],["/categories/Android/开源框架/page/2/index.html","6ff574ab6f1873b4662bb7ff71ba1f59"],["/categories/Android/知识点/index.html","0fbe8617736c04d4c33561ab2d8f602f"],["/categories/Android/知识点/page/2/index.html","dd09e188ec20f20b2f980a94794b3bb4"],["/categories/GitHub/index.html","26633da8b929f0e51aee334f73c23fe0"],["/categories/Jetpack/Androidx/index.html","9a197eb2234e62838c25199127e9703f"],["/categories/Jetpack/Lifecycles/index.html","c072f21c6f2ed0d03915358b6cf91775"],["/categories/Jetpack/LiveData/index.html","61061f8d5db9dcac7f305fced46627b5"],["/categories/Jetpack/Paging/index.html","70c7b8fa7c1a97e8572543dc59144251"],["/categories/Jetpack/Room/index.html","e57106807a6561d6646abb47d7761c72"],["/categories/Jetpack/ViewModel/index.html","f7a616b1ee7c3a8059fef6a536c701e4"],["/categories/Jetpack/index.html","7371d70ae45294f8bdbdfbcc8d0438b2"],["/categories/前端/index.html","2b973ba63f68e51cd769a2fe3a17660a"],["/categories/后端/CSharp/index.html","1dc311b967afd3afe4fc1229a1e7e1de"],["/categories/后端/CSharp/page/2/index.html","ad4545848d82ffe0eed5015b6ed18ba6"],["/categories/后端/JAVA/index.html","aff9cbb6c42ea0bd1f19dace244b9717"],["/categories/后端/PHP/index.html","efff29f947fa3255f831be962fcd295e"],["/categories/后端/index.html","8c14284ac7965361419a007e0906100e"],["/categories/后端/page/2/index.html","0fe5f2f5ca5a913257f425a545372182"],["/categories/后端/page/3/index.html","fa0762336e8afff6ae999acd3fdd4051"],["/categories/心情/index.html","28342f760de7601459fea312df433d51"],["/categories/心情/page/2/index.html","276b2956b757d070af5be32e9366ca25"],["/categories/知识点/index.html","26dfb4070e634439a4952c2acc943e03"],["/categories/设计模式/index.html","9392cc4ec4566c3eca0dbb14a7dfdf9e"],["/comment/index.html","fc13579f42077cb8e9942c69267b9201"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/2020kainian_1.jpg","d5a1f523c46fe05f38925a43528ae2d0"],["/images/2020kainian_2.png","21dfdf99770d6e946a7db90ab6ef31f0"],["/images/2020kainian_3.png","849a98ea3181c0a13284f149be3b37f7"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","dbdd6984b373a8a8b17ede5f38f21c9f"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","e87710ba5b8b6a8d32801ad25b06dfa4"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","46f2e1a713ceedfde7a885d9c893a129"],["/page/11/index.html","185159aae927430f3ddc0e71c216859c"],["/page/2/index.html","f163c680793866925becb980749e3fb6"],["/page/3/index.html","254586283babb5f32ff2576408bdddbf"],["/page/4/index.html","9bb51ae15088ff24e62c2b7220597261"],["/page/5/index.html","566201db42cd3cfcc55b8478cc24e33d"],["/page/6/index.html","04efa7f34e91283b9730f99fe55e46c7"],["/page/7/index.html","617d477a453bc7a9f8137840ee18d89f"],["/page/8/index.html","d65f6b4738c9e299575902c0ca47754e"],["/page/9/index.html","7c3f232e66d317f144e2dbf1a4d7c3f6"],["/photos/index.html","92344deae150d2f8cbd94ada83aa7194"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","32dc2248aaf0934df3603c5ff534c616"],["/tags/AIDL/index.html","c53d0b005543a79b96dbf853d47606fc"],["/tags/Activity/index.html","ed1b1b96376e29e69ac6d11cd55833cc"],["/tags/Android/index.html","fd2b97e4a8f54e8dc95748d57b09b901"],["/tags/Android7-0/index.html","2f6a89a0441027ab3f0bb19f3699bc45"],["/tags/Androidx/index.html","97164b5a7c7851e223b173ff32085467"],["/tags/BroadcastReceiver/index.html","443ce151a64aa92f0ca085cd52a6359c"],["/tags/C-文件上传/index.html","d6b2c3a3b003a74e1a5dd03ae982bb00"],["/tags/ContentProvider/index.html","efc1010b0be774355b47aa1ff244ab4b"],["/tags/Excel操作/index.html","52f9ddebebf6952e734ecc17f9791328"],["/tags/GitHub/index.html","33562594bd41a59e61332d113892cf56"],["/tags/IIS/index.html","6cb79fed20d37c29234a94ef5b17122d"],["/tags/JPush/index.html","276c0358e1f78d336ed28cafdbe93910"],["/tags/Jetpack/index.html","366e655057fc192d0cae75424eda3e3a"],["/tags/LNMP/index.html","17295f42bf8b00ee4fd184b2aa497fe0"],["/tags/Lifecycles/index.html","59309737e122bf7267065b9a157557a6"],["/tags/Linq/index.html","78237563e29c31d4c307cfbc3023e268"],["/tags/LiveData/index.html","102d22d819ee924bcbefdf6588ad2aad"],["/tags/MAMP/index.html","71ae6fc5a4a969d91604c997b3a80983"],["/tags/Paging/index.html","eb33220a0770846d54fffe35c79b01af"],["/tags/Room/index.html","7859f96f15d53cf685a1692b95bae592"],["/tags/Service/index.html","e52211864dd35f19e88c2a2bc0b29adb"],["/tags/SqlServer/index.html","f2ee0c681442d7bc29aec8d5a90b4914"],["/tags/ViewModel/index.html","c60605e4331360dffc203c9e8dbe70eb"],["/tags/ViewPager/index.html","7522a25d9c97aed5e6ed98b2f28979de"],["/tags/XMLHttpRequest/index.html","a7f24d4e68c8e766fcd03155a7723948"],["/tags/c/index.html","e98f56fa82425046888e2dee8c8ffa73"],["/tags/coroutine协程/index.html","fd9e699ca7a2437d6f06146e341d9711"],["/tags/easyui/index.html","4313f12811fb239d7749693c61865ba3"],["/tags/fiddler/index.html","8ce73a23e9619604a38a6c601701f670"],["/tags/hexo/index.html","fdb21956cb7be31abd13dca9cf3262a4"],["/tags/kotlin/index.html","000cadaf547ed31f0331a54961330348"],["/tags/mongodb/index.html","399ba4598f77e3935519bbc21c87364c"],["/tags/mono-for-Android/index.html","b975a32c4069570738add43a2ab85a66"],["/tags/nodejs/index.html","c577b8216f17d25a4adf329404ac563a"],["/tags/php/index.html","d9e69b5af9c93ea680343d79456e96c8"],["/tags/service保活/index.html","9c5814918e7b6615b8e81054756bc9bf"],["/tags/view绘制/index.html","5859066790548d96594bc7b73084e7ad"],["/tags/visualStudio/index.html","565b7ab3d576f4f4806fb3fdec4b6f40"],["/tags/习惯/index.html","fef503af889dbf85233b7375069a8e82"],["/tags/京东云擎/index.html","ab761a379cd991e46b4b73f4be246b96"],["/tags/公众号/index.html","70fc0a6fbee3354020f47a05c7fc0720"],["/tags/副业/index.html","80e380c37058d37eb9578f1304107497"],["/tags/区块链/index.html","6403a536f1a0212059322ba5a89a3484"],["/tags/图片保存/index.html","c4e3cd84e262fd3252ec37367cacdfd3"],["/tags/地图/index.html","b2f352cd97ad04992f240fe07726d9e1"],["/tags/增量更新/index.html","025ac9ff4e2a6b1d1fa7449d915211cc"],["/tags/安卓源码/index.html","392b7e7c9dc6821f33db66df963c4599"],["/tags/安卓源码/page/2/index.html","646b8e4ee6d98b0991fc32c40ccd0524"],["/tags/屏幕适配/index.html","c2a811a72f12566c0f5bedcb7cc96114"],["/tags/序列化/index.html","a81ca278953a0eb1a7aafad4b494d6f4"],["/tags/开源框架/index.html","08d887956c3bbb1348efc782e5a0c40b"],["/tags/开源框架/page/2/index.html","23e0341f28abc8b440159ec4b7ba21bb"],["/tags/心情/index.html","8ac7e08ea8b4c5477ec0b37921544377"],["/tags/新浪SAE/index.html","1afc5386ba8ffa0cfa63948ed4e0a614"],["/tags/日期格式化/index.html","32dd31d03bd348381ae5db19ec70703a"],["/tags/正则表达式/index.html","08a4582a2f29959ffe06d3ef8a3b82f1"],["/tags/电影/index.html","3750912ab0439924d5ff3c6dd7b597e9"],["/tags/线程切换/index.html","74bc141adf6f1b4b18257d27426a28ac"],["/tags/网盘资源/index.html","02791b3742921697f3401893132a44f4"],["/tags/职业发展/index.html","3f59fccb777d209afec7a75a4bc7bc67"],["/tags/职业生涯/index.html","5f07865ad540a16a3dba6540dbf3e64f"],["/tags/设计模式/index.html","c4c4b52dfac7aabecf6a3f076ecc4524"],["/tags/评论插件/index.html","7b04fa5453d56beb7ea10bb3dd96ccf8"],["/tags/购房/index.html","f7a83e8d80171446bb55d55ea5c02d8c"],["/tags/跳槽/index.html","702892a70c91597072148dd9a7b11f78"],["/tags/面试/index.html","e1c910730122507f6560a6ade682ac6f"]];
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
