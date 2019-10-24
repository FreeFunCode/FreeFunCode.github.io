/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","b88c372f9bb4b72c93e7c4d5755867c1"],["/2014/04/27/Hello-Hexo/index.html","b8ddcf27e25991f9e08ef84384e7bb28"],["/2014/05/07/001-RegEx/index.html","78eb2a651620000e53d9dbd8825b1871"],["/2014/05/08/002-DateFormat/index.html","593f534fac9c6dd52373e75a423b5d78"],["/2014/05/27/003-c-Linq/index.html","d0bc6802b86d4e7f0815da1dfba88060"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","66357ead74a4f2cae00c0eb2651ebee3"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","a1472a5f00301711eee0c27aceaa8bfc"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","a4d734fc55fd855daf6aa2526cfdc6b4"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","70b4af8b5127144b9298c62723d887a1"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","46f312262d06a5e7e257987967b41d53"],["/2014/08/24/mongodb在windows下安装教程/index.html","9f124a93c936e2a84f8c1d8e4077856c"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","eae994d2debc313796d1a04ea3041940"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","31b5e932e8899bd7ede7608aaea30e10"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","bd665bb8249e6103ba3d2f33dfbde512"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","adb07f3e9b0376af26d759debb6353b4"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","5d86b8d83d2a1c858875cba2c722a424"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","4aec2b71ca92171d2c58c6eec0770058"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","1ebc27bacb61910f1392a32429e59541"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","fa744e972ec026f837d94eddc4579875"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","a3d449f8782e3a83e21a3715709d1d07"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","875cb40bfa85a5cca0c493a6e7299409"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","ec1f2364e43b4e55b4fe0a9957e99335"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","fced1a99432ad527e02619ad823a82f0"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","c1f1ed8c1919a7154e8226807ba59410"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","1cd57fe8c8fab91efa993c725bdd3bd3"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","3e89f649d7fb06180d5e9febe8ff2b04"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","6feddba66b414d4560b9016282fef6e3"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","ff9df12d8d5b105fbd25771fd90611ba"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","6651472df3879c517965da8161cb1447"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","5036410f5865f59c41c6a92c2def7868"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","79bbf90dc075e52acd63716cab20dcee"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","188e188ef72914cea7ac43ff75d31613"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","31431e6357756c86963920a9b5e46fcd"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","9d317101f1fe1e57d39642d50dcf6eaf"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","f45480800cb8f8473143028641d7fbd1"],["/2018/05/13/四大组件-二-Service使用/index.html","646e6208b35b95e6c12eea7b8917a997"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","068fcb2b5ec545ca2af2ccb9ea8f4a73"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","be73034dd67e2866597198e731534a3f"],["/2018/06/18/Android源码分析一开篇介绍/index.html","22d2465a54e78301a6f5acf31da4f7b5"],["/2018/06/24/Android源码分析三Service启动分析/index.html","278d19006213fb9ad7d5887b30b2dfa8"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","a7063f58379a9a28dd1a78ecb375bed1"],["/2018/07/01/Java基础面试题汇总/index.html","fc7499361682e269afa1341c1cc3f682"],["/2018/07/06/23种设计模式在Android中的应用/index.html","125209806138235775f2cb0ac9153991"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","4dd63ed328a3529946121351f5ac29c9"],["/2018/07/07/Android源码分析五Zygote进程/index.html","3222f6d4c2b2538f47c07015f5bc8cb3"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","3db1991d04a0995717480143555d2146"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","47db5f821ab697fcb446459388683a86"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","e623b88618ad97eeebdb997c173af045"],["/2018/07/08/Android源码分析九Init启动分析/index.html","4a0f78a96752667af48328cff55b46f9"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","6350d1391b35d8915780db4c6af21f53"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","02a46aa9d47090a575b8ed2526c5df1f"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","9bac8634b575898a9ec34c472e4d9d80"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","eb3b4802a9e49bc1d18adebe15a96634"],["/2018/07/21/AIDL介绍以及简单使用/index.html","aee4e12f4ad3dc04673514b399bfab07"],["/2018/07/21/ViewPager相关使用/index.html","ce7e54b9caa15ec52d1700746a481265"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","601a7655c45cabcabdc4adb1d3951ed4"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","52cf72c3c798556a25f07de18a6353ec"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","d07b61e4703f2f3ee75105ea632047de"],["/2018/07/22/Android进阶学习笔记整理/index.html","ae51e5b52879ee1d87fecc20967f7caf"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","1d929859320f3f6146dca23bee3c4377"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","407596436fb177bad4bf398e340cb3cc"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","b5272dd245f5ca47791f3f40c6fd644d"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","6bc05b0f391d74c846ea5f78d79b229d"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","59fb1cdc3ac5dffee6e6dc7314c86792"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","ee8bb5a09c41b51c4ceab18e8904a4e7"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","068bc15d94c693312dcfb7aeaaabd053"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","e6bb66905fb328aad27143be49b1240a"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","412fbb3e8e8da293dd5b567c113f5ba0"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","233ae2c4726f53d08f8884a165b24975"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","b5bb8351ddc5af0d8f0eab11113de9aa"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","1a559fdcb25fc8b33e403319fa78096b"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","9f6c3ce955778a251d14d9a87e05d46d"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","82d3a4c48d3c6a624b7c5e12786efe6a"],["/2018/08/05/Android开源框架系列导读/index.html","4b6d36eb8b7e34bc4a029c13e9283f76"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","b27866cbfe80a715311b3d1701caf343"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","159fcae0bc824cdacf078b6881934f57"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","7a644fe58027544b9f01b8cb0b57e425"],["/2019/08/25/Android面试题/index.html","abd05a24b4a2ba146cfec7c846aa2f84"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","c46a718acc433ab041cdb082796a77cb"],["/2019/09/22/汉尼拔电影观后感/index.html","01bb3f34098bb6fec18ede8c7f6c8c67"],["/2019/09/28/Kotlin与java对比/index.html","5ef69e48091fe3671b0224c6bec16e96"],["/2019/09/28/巴比龙电影观后感/index.html","ee676dd6a5300c1ff3dad650e5c3cda4"],["/2019/09/30/mac搭建hexo环境/index.html","a58013e035907917e71b042fa7140ddc"],["/2019/10/01/关于职业生涯的想法/index.html","d3eec3087ea87387914d357476a0d9be"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","d0e5dfe2439ea5dd8cffb1ff58dbc300"],["/2019/10/03/AndroidView绘制流程/index.html","8c0087e70ef1db439f237763ff24bc87"],["/2019/10/03/Android屏幕适配/index.html","80bb4a8d17abe8bea239d464c8503cd3"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","0ec332eb0e21da313920a6ecb0f50770"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","3350ff6b9d669f7aa81b5eba0c49c370"],["/2019/10/13/谈谈逛博客的小习惯/index.html","79c8b2a66ba10a82a2f5354c1cf30ccf"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","78c5d64550093122bf63c738f769c74e"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","ff0436810c3d00f98a3b8ea840ac4f17"],["/2019/10/19/关于程序员的第二职业/index.html","83b1fdf79a3f73857522950b3201e691"],["/2019/10/20/一次车被刮蹭的经历/index.html","bbd40df09dc0993288c84ef083f87efd"],["/2019/10/20/第一次买房经历/index.html","9fac99e15b219508e6ef783498f69554"],["/PY.html","87734b3193ca6c44220f58a98cd987e1"],["/about/index.html","d4135cfbe3db4914973000297d232bf6"],["/archives/2014/04/index.html","fc1935c765519e9e3b073897c20b64c9"],["/archives/2014/05/index.html","612e52a3173a660e96bdcb4e0f3faf62"],["/archives/2014/07/index.html","ecd45880244abcf30975e443bdffaa21"],["/archives/2014/08/index.html","6129a3eac9e28b3c1050dadec4b0260c"],["/archives/2014/09/index.html","eb98a262eda23179459daa447d7d9e3c"],["/archives/2014/11/index.html","a640cc87460c347c8b27e3ac36dcc5b6"],["/archives/2014/12/index.html","082a027e11ffafce699e709c5844f7e8"],["/archives/2014/index.html","47e75ae87ab4d85cd977dfe5b0a4d486"],["/archives/2014/page/2/index.html","408c6e9b67f23b8bea1493b0258c1e28"],["/archives/2014/page/3/index.html","d6de3300f29b03cda8091b5c9e7131f4"],["/archives/2015/04/index.html","9dc97401c0d9daa5504e22d1517c4776"],["/archives/2015/06/index.html","d19d78139078f011a95c34fb7d578534"],["/archives/2015/11/index.html","ffb24f0c852bf2f713626b834fd57f81"],["/archives/2015/index.html","f3510aa5512a810c60975a439244eef5"],["/archives/2016/08/index.html","a16f28ad1c39fc8c1ba10e44e15f5a76"],["/archives/2016/index.html","1c563ab26f8bd24611542ee3dae8d7c2"],["/archives/2018/04/index.html","f11b78b2426a8d502a955ed05e58edb0"],["/archives/2018/05/index.html","eeea625a4f7da04ff5d6c99378d7bd3a"],["/archives/2018/06/index.html","bba7eacf6683c2a36621fc6185662870"],["/archives/2018/07/index.html","fc70766a769d4f626b77bd52cdde15a9"],["/archives/2018/07/page/2/index.html","ff51b844d04e62ca1e64b70650b0c75f"],["/archives/2018/07/page/3/index.html","9065dbba750fea71c5b3f6c19932358a"],["/archives/2018/08/index.html","d90b7943819aa2aacf16b1d306c34281"],["/archives/2018/08/page/2/index.html","8f4a5e1527c6272a52926ceeaf6870fe"],["/archives/2018/index.html","53c0011289fb37b06bb12d5dd994f36a"],["/archives/2018/page/2/index.html","106e073c653a5b53af1a418ccab8a2b6"],["/archives/2018/page/3/index.html","6b6c935958543743b738d3c2581545dc"],["/archives/2018/page/4/index.html","721c41ee2fe2060141ead5fabc09dd43"],["/archives/2018/page/5/index.html","1bbdd51764a7c6be2acc632beb9cd582"],["/archives/2019/08/index.html","4abd138de2b37fd28e114b14d660886e"],["/archives/2019/09/index.html","5b25d707c628bd8cd3ef0e6c7c0daf45"],["/archives/2019/10/index.html","30b9f3d5befcdaa3b467e38ef5156c2e"],["/archives/2019/10/page/2/index.html","3ac3f93581267bc3a08912725a694c38"],["/archives/2019/index.html","c14a5ec164d1fe95ad409b8d4b3a20e9"],["/archives/2019/page/2/index.html","9607310985be973cc5f5ef6cfc34f90f"],["/archives/index.html","5191a6dc0ee691725d71507670ce3c36"],["/archives/page/10/index.html","378cc66840710c7446a3d5aedbfcafaa"],["/archives/page/2/index.html","e25556a0bd9ff11ef2c8a74752e89504"],["/archives/page/3/index.html","837a0fb9b8614b90e1203f93a9e8eb7d"],["/archives/page/4/index.html","5f37f078537ddd4035ba6f7f5b661846"],["/archives/page/5/index.html","3b2efe8624682a85eaf5215a9c98031f"],["/archives/page/6/index.html","56fd9dd269b6e73b463a79cd24657aaf"],["/archives/page/7/index.html","3a4870d34bd6b97d02ede91bafc342a1"],["/archives/page/8/index.html","f1745cfbcb85d2b137508c055ab27680"],["/archives/page/9/index.html","c95f2519cc9078ae48aaa8a2a295c485"],["/categories/Android/index.html","ce3acb0dc884c5c7a3c42bb698c65919"],["/categories/Android/kotlin/index.html","294891f16eaca7ef09846de5ce669dc7"],["/categories/Android/page/2/index.html","5db893ff76f50dccbe6f7fe8ddb4dd89"],["/categories/Android/page/3/index.html","eea79a520326aebe6417aa794f766750"],["/categories/Android/page/4/index.html","2bb9e47d4c2a5ad9b4079318b25c0afd"],["/categories/Android/page/5/index.html","72f0322a0a15990af0a25669e662cbad"],["/categories/Android/page/6/index.html","f82836c134235e32c669eda953b0c028"],["/categories/Android/安卓源码/index.html","14e3e1c9d08a88438ffd86ae6f7c538d"],["/categories/Android/安卓源码/page/2/index.html","8799854c163aa1c6a43db5b41829d396"],["/categories/Android/开源框架/index.html","13916d01171c0b0a41d8a3a7865e60bf"],["/categories/Android/开源框架/page/2/index.html","5ac8a98d68a686878f93394bc5d2cb6b"],["/categories/Android/知识点/index.html","1057d1979e6dad777a7caa6276845d48"],["/categories/Android/知识点/page/2/index.html","19cddd9607620311c150a5aeed28e4ac"],["/categories/GitHub/index.html","7bc90194e906b4500ba1fb077148e285"],["/categories/前端/index.html","312dad095e08c438543e3a6f4b48656c"],["/categories/后端/CSharp/index.html","6cd096e44da3c3f9efd04392559e0134"],["/categories/后端/CSharp/page/2/index.html","2ee2461f712a81f0163ee3c4117070c5"],["/categories/后端/JAVA/index.html","1b4981b9bcda2e081097685da66fab7f"],["/categories/后端/PHP/index.html","9d59ae4b67e841bbf4d68f341bd6551e"],["/categories/后端/index.html","d77b79119dbace7db98ef9ac3297d83f"],["/categories/后端/page/2/index.html","9f5d9f79d8744a1df663039e9eee5c02"],["/categories/后端/page/3/index.html","c5d6a57569b6ec6e5089602d43492394"],["/categories/心情/index.html","81e2c4f5f6933ef4b7cc8561ad4917ae"],["/categories/心情/page/2/index.html","c016de19235a5c2ee84ebf56b3ac6ede"],["/categories/设计模式/index.html","1b04731584e71f8a77757ef1a561cca9"],["/comment/index.html","93434c2f0c12e72ccc0d68a31f69de29"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","969a9be11569386fd73e41a87b055e78"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","e6525ceb2d0674c8a1271f2426b33b71"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/page/10/index.html","6d84e0acef11bdd710a4c8f320853140"],["/page/2/index.html","38a78c336aada5a17526083e6229cab9"],["/page/3/index.html","756523c65361dde64ce1e05b8a75e693"],["/page/4/index.html","ea45dfbc999b9ddc846fab669208f579"],["/page/5/index.html","0b5a5905ba5399f8a98f85062aaceb8f"],["/page/6/index.html","12f2fde7c23e768207f48d3caa0500f6"],["/page/7/index.html","46bd0826436121052a34f0fcf45677a3"],["/page/8/index.html","10a1ea2c1320da8a8c011bea700c68c7"],["/page/9/index.html","7a42399eed8fa097a3fd8dcdd9ac7811"],["/photos/index.html","fa7ceb79226ac2ecb957044c7cb3a22f"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","4913470f673c237c13ede9649b1fdc4f"],["/tags/AIDL/index.html","381ae0e3caf35c98af70be4f9446b2a2"],["/tags/Activity/index.html","0e08d2415faea4a5afa2f2a63f1301d9"],["/tags/Android/index.html","5d0881aaafcf4f0f4976c231da7c0d26"],["/tags/Android7-0/index.html","a39bfd8e81a26237c0fdaf305bd497e6"],["/tags/BroadcastReceiver/index.html","3832e9948888569e7dffee9ff394adb4"],["/tags/C-文件上传/index.html","cdc3df6f06e78029013f665c9fa41624"],["/tags/ContentProvider/index.html","f98ccb503aaeca8f907ceb9000bb293b"],["/tags/Excel操作/index.html","775f38a6af85f00ce1517f1e75e34ac6"],["/tags/GitHub/index.html","30ee09980dd139034930811d9df75962"],["/tags/IIS/index.html","873adb095985ace6ec4c7b9c5c4866cd"],["/tags/LNMP/index.html","968d7426c8710e0fbf488fb2e223dc35"],["/tags/Linq/index.html","457e541b7d28d38fc069498b84a92477"],["/tags/MAMP/index.html","0d043945384ae041eab6b0b0d2d93297"],["/tags/Service/index.html","32b04cce65ca5f0297aa07164c5efcad"],["/tags/SqlServer/index.html","74ead8a90f4106d40454fddb38911caf"],["/tags/ViewPager/index.html","70aa5cae1b892bbba115affb124f84a4"],["/tags/XMLHttpRequest/index.html","bb38ba9509f0877f2f0dc32783164e5e"],["/tags/c/index.html","e310535ad1092a638171b3d16a1956d5"],["/tags/coroutine协程/index.html","520d4b5036c25fc6301b5a298a4f6cda"],["/tags/easyui/index.html","3447b8ebc09fa711d51fc4d5a3fc3f6f"],["/tags/fiddler/index.html","6505bc8c0f062b45f7a70b3c1d282243"],["/tags/hexo/index.html","98acebbf0b7d8a5aa8e3248287fb52b0"],["/tags/kotlin/index.html","470265cbe6e9843bd46410704beab98b"],["/tags/mongodb/index.html","13c102079d2028a71a76dbb8714059b8"],["/tags/mono-for-Android/index.html","9875bfb1ce7548e4baf7c8382a476a9a"],["/tags/nodejs/index.html","64181793cee6cb37bab01efad6853c44"],["/tags/php/index.html","48c0fc3d291e809082fc2a11d8d6f56a"],["/tags/view绘制/index.html","122c23a0e3c5d5b80eca4f1c99777474"],["/tags/visualStudio/index.html","77f8601d4550ce56217493d3eece0b28"],["/tags/习惯/index.html","20579199383df63e93ff11044e7c96f8"],["/tags/京东云擎/index.html","b1706d437cdffd046de561a0565a0065"],["/tags/公众号/index.html","a982e26113188e4bb3f953db06aa8169"],["/tags/副业/index.html","3bbd228801c9b387d5c2f4af09a6d1ba"],["/tags/图片保存/index.html","7d7b4ab1a648cd25312a34a9834fea9b"],["/tags/地图/index.html","d6048141684c625f3ac8860e97fd99ed"],["/tags/增量更新/index.html","3457a8b23bcea7391fa8b8b1bcfd0286"],["/tags/安卓源码/index.html","4241f89d978d94e8516801b636b8d96d"],["/tags/安卓源码/page/2/index.html","4681fd85ac1e35963512dc2ae829bc7c"],["/tags/屏幕适配/index.html","5f9a7e0741f7a0cc99d62e4fe9cca97a"],["/tags/序列化/index.html","6f06a71312b013d21895e6a894ce80bf"],["/tags/开源框架/index.html","9a721924d459ae25565e04ca819b9a52"],["/tags/开源框架/page/2/index.html","aa0fd4aa31714f914006d6ad037a7e81"],["/tags/心情/index.html","0a823980625234b22bc55948ed9b5be6"],["/tags/新浪SAE/index.html","42b6107f1fd923ba96e590baefff3fdb"],["/tags/日期格式化/index.html","0c5c9e9585360cb1f70f340b9bfec584"],["/tags/正则表达式/index.html","1f09d4c392a5c98d7444aa2b92ed0f43"],["/tags/电影/index.html","02885177822bfcecd1d819c270a5a24e"],["/tags/线程切换/index.html","df99149c272b2c481c7b2c106bbeb9b4"],["/tags/职业发展/index.html","53251cf913f713d71152a24a53c3e80c"],["/tags/职业生涯/index.html","cecbd8bb503fe5333d079e0187c152ac"],["/tags/设计模式/index.html","63934292f244f91cd5ea64e22ca5ef2a"],["/tags/评论插件/index.html","b8da51e72573ed37a30244827e37647e"],["/tags/购房/index.html","795778508e60a393aa4595a0876f9f4e"],["/tags/跳槽/index.html","e212fa792890749532a327def429c004"],["/tags/面试/index.html","7396fede125ad73e9b49595bbf0bc32a"]];
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
