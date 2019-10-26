/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","1aa12363c5141682e525d4b2f4a460df"],["/2014/04/27/Hello-Hexo/index.html","4f581fd93584881b7d9b192a5e535ca4"],["/2014/05/07/001-RegEx/index.html","6cc47691844cb2f846a7db6f86e445df"],["/2014/05/08/002-DateFormat/index.html","3105ee7054ce2980873a88a729fc6339"],["/2014/05/27/003-c-Linq/index.html","a9010b04f98302ed94cec8b901b9df05"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","8f373e93d73f1b19990f668f4701d66e"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","5cfd53f02164bd8cffc4749107a713a8"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","8d858fa7fece31686045e941f2b33561"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","b9f1688700ca4ae34b545ad0d721fdda"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","d6080a25c95ef540b028f70822debe3a"],["/2014/08/24/mongodb在windows下安装教程/index.html","4d8782048696744798238e7d9e51b69d"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","ecc646be4807ef9c197b53215ebbe06e"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","03dad48a9c0036d008070ee3f08f5ee7"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","50253cceee2a63aab692e3b6d3d6ffa0"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","7c332d1fbff5abe22be999d9a7eca1f2"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","b75c02cc2c8aa07b778486bf0fe5955d"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","cf3ed4cb2262dca87b8cc82add0bcca1"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","66d480d7dbcc9dfc5b4fdac4cabd5765"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","d2d7a7d5c6355a771d72a31a6093dc61"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","19ac0b0d10985e69bf507b27982c89c3"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","48c8ca5150eb8f882fdd079e91ea6604"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","042058951871088baff170583f223f39"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","709a4c8f64027479979556286c765f45"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","bd442651d5019d7eb6cede9819a02ac6"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","b1e7582d8c4aaf55c7df277b5d2b69c7"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","38c2db9ab4e758e2e825f7d0ff5f384d"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","3454ca18afa50fc039918410c3a1b8ea"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","e3599e864b0535988aa5a101a0b077b6"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","02ed08afa71a77dec06fbbff17510c59"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","d651cc817b1eea855a503a4ba5f31255"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","831cdebd077e0bd2af4c6c9b9f601f70"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","cb926620148a4e3b1ade845ebc31c914"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","01fa4fb0d83ea7f2b3382c250b8a0a11"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","546f91a612a8f9e24c454a5749fdafc6"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","502b2c61c20f1cefd810b78c90901da5"],["/2018/05/13/四大组件-二-Service使用/index.html","5e82e4d5f80a8701f757240c9a78218c"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","4aac1ca01189b74e8dda9b801dcbc32b"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","e90927663e7e9c7c3be4b459c4e65d0f"],["/2018/06/18/Android源码分析一开篇介绍/index.html","a3d53f99f7e0c5ab16aa0ad27735a135"],["/2018/06/24/Android源码分析三Service启动分析/index.html","416081b7701097f50264c706fc4633e6"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","a7be54b2f9748a85504ea1a211da0424"],["/2018/07/01/Java基础面试题汇总/index.html","0c228297466cdc620926d1e31985c5ac"],["/2018/07/06/23种设计模式在Android中的应用/index.html","edb8244aa7247bf294bd4995f1f98e41"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","da6a74675e0ba1369e2af40340d72463"],["/2018/07/07/Android源码分析五Zygote进程/index.html","67e36bf5c117b3f739f4a1ad8d16b806"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","3998d99c7084665e130e1f30ca3fb086"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","9c893b212d67fe2828ec5e5c85310940"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","a7df64b7abfac5b93fabb619492919b0"],["/2018/07/08/Android源码分析九Init启动分析/index.html","22ea69b7c29abf4fdd0cd7bc298258a5"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","a75491329890fee65ab97ed9299a02d3"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","19c15b0748dfb528d1b43fec090cd25e"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","68957660171a1ddcccc80c3319a24d27"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","0d8efd8940a43d6946b6b507054f8085"],["/2018/07/21/AIDL介绍以及简单使用/index.html","2820beb51337f42f93ed3c1ebcfb66bd"],["/2018/07/21/ViewPager相关使用/index.html","2f44e980b38207897872d299ad2fe499"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","e49bdf4db4e3c978fd7036649a42b4f0"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","5ad803b618b4b541dd4d34a01eeab057"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","7975627421bfa2b9bbde5adb70239729"],["/2018/07/22/Android进阶学习笔记整理/index.html","e173b6e835e1259081efdcf572f0382a"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","5eadafe9747759e69cb26ffa107d875c"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","a3452cb658343a26696ee8c7cc1582b6"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","87770d29f601cb1b48dafc1592efe307"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","6a8b46ab75c0032e8df98d47026f7db6"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","dc031cd123ed8de8658d438c7fa2bb83"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","c58984005c032295abf31ee70b096007"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","c7fcf0e9a1b0aa5e037c3adfb2f7b681"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","6e75cde0a7a9bc41a141aa04e451aadb"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","bcf84dd5bf4053772cb3f2767ec04b01"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","bbfa045bfed72ff00c14b932936f51ea"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","222b9997e164a1efc70ddd72a2cea536"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","8bd8e64acf4b80c447e8dc5bbda88d69"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","63248fb8e6fce8b6340e5d8e3cf16f94"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","c5431fb2cb4822621f496392bc404b6d"],["/2018/08/05/Android开源框架系列导读/index.html","25b030f5602f91e672ede97a0e0fb2a4"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","2d0ed968eed3ee6615c4ad405aca3ebb"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","abd9252ae995b036017e740a04646dfc"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","412118c22a7fe32bbbf945bdc849639a"],["/2019/08/25/Android面试题/index.html","b53d798ed5c33f80fe38b99a0d31c5b6"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","5775a9d542f72c1a8329e0ddbde66d42"],["/2019/09/22/汉尼拔电影观后感/index.html","5395575644470e875709d90cd3af9dc5"],["/2019/09/28/Kotlin与java对比/index.html","9f16bbb88d326443038895c630e51610"],["/2019/09/28/巴比龙电影观后感/index.html","62356d80aefba2cf71739bef79f4abdd"],["/2019/09/30/mac搭建hexo环境/index.html","12529b3c12823a9ff6549d482feed318"],["/2019/10/01/关于职业生涯的想法/index.html","50a5e0f27c5befafd5d9022be5907bcf"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","bbcef4b46ff9cabe0464ec509cb681fd"],["/2019/10/03/AndroidView绘制流程/index.html","274b51eaa104dae7de815334545afc2e"],["/2019/10/03/Android屏幕适配/index.html","7fd3240793438f4b5d6805e2a9abb977"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","d3c23ada993eeeef90f279a963fc9377"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","146dfe05d9d3fe67b5878cb09026fe84"],["/2019/10/13/谈谈逛博客的小习惯/index.html","67335f5b31241382d029d4a751416de5"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","aa8f7e146cd6cdc2ceacffcd085a41cb"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","d74f2917f0287cb0ba2006c4331629df"],["/2019/10/19/关于程序员的第二职业/index.html","a20a184763ce99256b3a2357ae243741"],["/2019/10/20/一次车被刮蹭的经历/index.html","9b9d4acbbcc85786ac36e5c15065082e"],["/2019/10/20/第一次买房经历/index.html","bfc045772916e0ab4d28ed9a51ac3d28"],["/2019/10/26/kotlin之Lambda表达式/index.html","54042e4a22cae8bbc4db6094f00a22a1"],["/2019/10/26/收藏网络资源分享/index.html","5ea9257963ab179a8d6bc006db80c81f"],["/PY.html","249ff1f79fc9cee278d5faeac9d8fae5"],["/about/index.html","fcb4a9155674ed370d2a0d0ccb4714a8"],["/archives/2014/04/index.html","cc3526d696a2f1798424ff3e5c014788"],["/archives/2014/05/index.html","a3bbb69ef636eb7001e180104e5a4ea8"],["/archives/2014/07/index.html","32a7c4da833e48de240ed2069eed86a8"],["/archives/2014/08/index.html","de0cc9ef5bc05703741aaabdc566434d"],["/archives/2014/09/index.html","5289501a66ad6c8efbf3aba8a2141736"],["/archives/2014/11/index.html","5c14cd7c64265d28950abef0ecc66315"],["/archives/2014/12/index.html","70156612569d77bc15e9ff808d6b6a7b"],["/archives/2014/index.html","8426cbc077162ea5006e868edc75a256"],["/archives/2014/page/2/index.html","8ce155d3e6e0120c167371962e5a49ba"],["/archives/2014/page/3/index.html","01133862d99251b6d170fa3b290d175e"],["/archives/2015/04/index.html","6c5e0f5db0eaf0615c811becee51c205"],["/archives/2015/06/index.html","123357fa334154b997979a6c0d157c3b"],["/archives/2015/11/index.html","3423eb05a7cf6e9a9b44f5368057cb8b"],["/archives/2015/index.html","882ab52ffd046ca162e75878b8e8a7a9"],["/archives/2016/08/index.html","2cb631f143c1734b21043e55470e6433"],["/archives/2016/index.html","2c8c8fed9b0faa33f06a9f53b36a885d"],["/archives/2018/04/index.html","e79999ad18e082e3fdbce625ecf2f32a"],["/archives/2018/05/index.html","a0f527013c3ff5b24b8692b969cb6a35"],["/archives/2018/06/index.html","dae9c4b3a3e9195214be13e7015f72ce"],["/archives/2018/07/index.html","061622f9f67f32a4a33a8689a9bf74c8"],["/archives/2018/07/page/2/index.html","faf2e745f19c9c5cf9d1c025574114cd"],["/archives/2018/07/page/3/index.html","ea3de23b6a72446aa8cd5969eeaa4a43"],["/archives/2018/08/index.html","8fcab8f19e7f2e9b4be3a389d2ef427b"],["/archives/2018/08/page/2/index.html","daefe311159b6d0a12e64fa7f2c66881"],["/archives/2018/index.html","3fee7d55517770c059969158c252c6e7"],["/archives/2018/page/2/index.html","85499ad6536fedc216aa198d024ad36f"],["/archives/2018/page/3/index.html","a20cd4ea0b95572924477704157c8966"],["/archives/2018/page/4/index.html","9b18efaf8bfaf1b43218a85ceef08127"],["/archives/2018/page/5/index.html","d97d0dc000968240ea9335d127a467d2"],["/archives/2019/08/index.html","44361bb83587a861fc9f667332b67e52"],["/archives/2019/09/index.html","ca52d5a8aaaffee21bdf19dd01206329"],["/archives/2019/10/index.html","b2278f4cb1efe9fd686b83c4fe7753e4"],["/archives/2019/10/page/2/index.html","541e260889a4f9d56866065a5a517129"],["/archives/2019/index.html","a197fdd3b8823df7b8a18103a3428e23"],["/archives/2019/page/2/index.html","b7136c49b08df2277e153129454153a3"],["/archives/index.html","3dd1d9a32a7936f32b08d95c2d98235f"],["/archives/page/10/index.html","e4e7480d9ec4548928889951b977a8ec"],["/archives/page/2/index.html","f837a5f102128257dabf60920684386a"],["/archives/page/3/index.html","128517f9e9bfd0a6dbc41fbda8eae17c"],["/archives/page/4/index.html","16785ae960cd2b996123daf3e447d7da"],["/archives/page/5/index.html","110ec1c86662aa74392d1ea343912f4d"],["/archives/page/6/index.html","e1dd5f0353bf05d3a04d029d80ed87a4"],["/archives/page/7/index.html","896a2ce4acbdd3c720b513f29ca5a640"],["/archives/page/8/index.html","fc52272574c4058ae6d98d66b048074d"],["/archives/page/9/index.html","5e95e37e540f8144db6a55d788f2cca2"],["/categories/Android/index.html","e8de6f328983efeeea3f2a3d12499b30"],["/categories/Android/kotlin/index.html","abdad740c266b5f38804707015114808"],["/categories/Android/page/2/index.html","cdf7e5e8d715e769d77f977339a06478"],["/categories/Android/page/3/index.html","b973ecd8fcff43b74ddce1b308451574"],["/categories/Android/page/4/index.html","0a405f49012a3300f684bbcc3f0f36f4"],["/categories/Android/page/5/index.html","db18ce6450044095a49909907a3c089f"],["/categories/Android/page/6/index.html","f1aa74672bc70f11d7f31cd7fdd59352"],["/categories/Android/安卓源码/index.html","97278f5385dd175fee80233d8a6706f7"],["/categories/Android/安卓源码/page/2/index.html","d0fc2be4e70cc76cde68c92d1489f98a"],["/categories/Android/开源框架/index.html","2e526e576510232a6299158a5dba40f8"],["/categories/Android/开源框架/page/2/index.html","db6754b2b3c7a6dc98c5e087c447b263"],["/categories/Android/知识点/index.html","71d0e445940acb468733d87329049423"],["/categories/Android/知识点/page/2/index.html","00162c72ccb7e44a30c92826cf00bbd7"],["/categories/GitHub/index.html","a9eaf96a8b3d4dfd20ec89a68a60c6cb"],["/categories/前端/index.html","d3b72ddb8cb7ac8c266967f8f43abb72"],["/categories/后端/CSharp/index.html","50d0331092c991e1d946567015127a4e"],["/categories/后端/CSharp/page/2/index.html","c53cb596d96c1d399f9f22d83fd8530b"],["/categories/后端/JAVA/index.html","e6982ff41c37d369333ffee471e75edb"],["/categories/后端/PHP/index.html","b1de626f196c4811f520cd98afee0590"],["/categories/后端/index.html","734deab2dbcedac10cb9185614200b38"],["/categories/后端/page/2/index.html","ee39741734db1a14e5197e33df9fdf50"],["/categories/后端/page/3/index.html","28d6405cb333cac8b180c484689d5e1f"],["/categories/心情/index.html","ba7e5a5521dea7079920cade202b4d37"],["/categories/心情/page/2/index.html","67f5749b3902fcbfecd2e919ea343f34"],["/categories/知识点/index.html","56b6928c055a203f44829ca179f22c91"],["/categories/设计模式/index.html","80ce4404a172826ec768dc3bc5b0f43f"],["/comment/index.html","81a483daf08d20bd212e58be8dc6bdc8"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","7ff83fd2407364e25d76df0709ad9f24"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","bc0ad72b9924f04e68adbd1728c38cb1"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/page/10/index.html","8040bf3801195a1194d2c5e98474c9c5"],["/page/2/index.html","c1536a87d2d72efc1791094b841f4434"],["/page/3/index.html","8fa6ab78734fa77c6f959da3da165b3e"],["/page/4/index.html","ab2c2bc59f901989b92c496c5c18ecc9"],["/page/5/index.html","bcfb02e8364b29d93e0d2645aa809cb1"],["/page/6/index.html","cb1e2789f767d98f1775be2dbf2b612c"],["/page/7/index.html","f6c14e8bbf9c3745ecd262b9c383e566"],["/page/8/index.html","121fc4275373bfd953b9e8235a60a4a0"],["/page/9/index.html","fdaff41cad74203e7867dcf2e0626acc"],["/photos/index.html","353cd478a1e32342847e315d2d184d0c"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","4dc7af6ac77d7101a8ff9f91cfa83867"],["/tags/AIDL/index.html","7641c49ef8f893655b4f7d41f6d1d38d"],["/tags/Activity/index.html","2abe6545272ad0737f2ad33dd68af01b"],["/tags/Android/index.html","8dbec5bc3ce924e8152f16c6b340d8d0"],["/tags/Android7-0/index.html","cc7c13acd2e07204e31feaee8c30de0e"],["/tags/BroadcastReceiver/index.html","45fe52b625c4d2fc8c3349e0b87e091b"],["/tags/C-文件上传/index.html","ad3e8fda6cf9b8d7d1b6ceaffbb9eeef"],["/tags/ContentProvider/index.html","c3f8108f2b1cad0cb51706c73fe447f5"],["/tags/Excel操作/index.html","e7348f5246791b0486b9a7f69d204717"],["/tags/GitHub/index.html","e0605e1aa388e7f7f34b7a5ac0e7874b"],["/tags/IIS/index.html","da94a51ddefef5d3e9d9384f942043e1"],["/tags/LNMP/index.html","98c71d7f74b0cbb39891474450cf723a"],["/tags/Linq/index.html","73d967b8f52131c46c2afce03981df31"],["/tags/MAMP/index.html","0735ed6a79394abfb5f09ec3bda331d6"],["/tags/Service/index.html","e222803bf6706ca84333e3b0d66968b2"],["/tags/SqlServer/index.html","2f8dd3fe0c61777ef758abb6881c874c"],["/tags/ViewPager/index.html","c4903bc05c474e34045607c02d806744"],["/tags/XMLHttpRequest/index.html","7bb9e7baa8d42196e661de95eb97de54"],["/tags/c/index.html","105487ac09497fa7a695c2fa0b6c6fa5"],["/tags/coroutine协程/index.html","53fa00e0cd38df3712da84e761df838e"],["/tags/easyui/index.html","d79ef993a00d40b350a6dba49aed406f"],["/tags/fiddler/index.html","713fc1336020982ebd4e18e20d90af37"],["/tags/hexo/index.html","c26833d6cbc951a466b56558c0ba01ec"],["/tags/kotlin/index.html","2af9eb4a92f845be821679aebee4f644"],["/tags/mongodb/index.html","3c968226e1829888e07f790878a9b3eb"],["/tags/mono-for-Android/index.html","67ea11935160ea7a4ffe20df3990b8ad"],["/tags/nodejs/index.html","213c0fa627c3e3cc9568393552eebb07"],["/tags/php/index.html","ec1c474082318f8d865c62413fa3c0fe"],["/tags/view绘制/index.html","2e0a8cab8a45e58945729c1f580473cd"],["/tags/visualStudio/index.html","a617371d6a5815d22c366ed4f58da715"],["/tags/习惯/index.html","dd945d2e7144718bfcfc5e5292b6b583"],["/tags/京东云擎/index.html","c877148db351514111089905f4fdaf8a"],["/tags/公众号/index.html","d9801f2685625e324b29e997a49a9cd2"],["/tags/副业/index.html","150ebee17aab3729fb69e8d9dd78118d"],["/tags/图片保存/index.html","f9e48ef5d75da42fe8a6fdae1b12e3f0"],["/tags/地图/index.html","933b0e46529fcab6ab57a2fb4d972bfb"],["/tags/增量更新/index.html","5473a8474cd1cedd000688f6746aa6ce"],["/tags/安卓源码/index.html","051ec3561a080a54b46b4ee80c3ec540"],["/tags/安卓源码/page/2/index.html","b8e8e8f90e6f0fa6e9bc213828da7f7e"],["/tags/屏幕适配/index.html","84043c823fe295671a0ebf949775cac5"],["/tags/序列化/index.html","d45e3e95429d7aff0cbdb13624750277"],["/tags/开源框架/index.html","3090d828e9d9adda8ee10aace74da462"],["/tags/开源框架/page/2/index.html","0a9ceb38b015644c2faf796e743f14a3"],["/tags/心情/index.html","4dcd70c15a50139c030a4f66cbfdbf6e"],["/tags/新浪SAE/index.html","3b64e15bea41ac42dc235283825bb778"],["/tags/日期格式化/index.html","2871108def09ce37970fd28c4aaa0efd"],["/tags/正则表达式/index.html","f99c5ae3abad96feffb2a8026e6d1be8"],["/tags/电影/index.html","1682351f5166126b1d938484ff2684c9"],["/tags/线程切换/index.html","07533b0a5093aa47723a0a0239262394"],["/tags/网盘资源/index.html","f599214b77d2e68bee42a37fc57cc916"],["/tags/职业发展/index.html","3f3ca52415523095a5ba2d21a3e6187a"],["/tags/职业生涯/index.html","f542813116debd04da5ecb8e7c9df2db"],["/tags/设计模式/index.html","4fabfeaef48711d3a012fb3dc181c1b7"],["/tags/评论插件/index.html","b5e7101b7f7b6995191b3a9e4726da3d"],["/tags/购房/index.html","a85b5832bf2dde14ba08f7c3b549bb25"],["/tags/跳槽/index.html","39394c0e83ec787b4416d443b0453d25"],["/tags/面试/index.html","06e7a9cd3f2b2f9f34298a5fa1b14f28"]];
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
