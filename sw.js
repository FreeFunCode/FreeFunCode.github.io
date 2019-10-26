/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","c6f56200c1f8896d08375d3a0aa4f1cf"],["/2014/04/27/Hello-Hexo/index.html","21325558ed326678281838caa57cf2a3"],["/2014/05/07/001-RegEx/index.html","10fae3bd8d6314ccf2ea78b48b08edcf"],["/2014/05/08/002-DateFormat/index.html","2d8cc67817536a19712f4927915a49a6"],["/2014/05/27/003-c-Linq/index.html","40f21a1c3dee90410776d1a02565e478"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","ac767196279ba3400c4a0faba4416b61"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","8e4ad12cb3f2a7c7013a0bd046fdfcde"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","1915e2faefe01ee1f49c094f350ef70d"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","f25a73aea2fdb819236c4b310d1358a5"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","19677cd2bf955f5131d71b88c8a2d3ba"],["/2014/08/24/mongodb在windows下安装教程/index.html","8681aff09e1f08f80c2cbbe6267524f8"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","c91d66b966a15f5a5a9ca284d6e97751"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","0bd52d78c9a18f90f2b28a7e6441894f"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","122db111816ec3c1ba3e8b13235e1647"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","2e9342f6e273634befe33eeafc204896"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","41fbec86f0288a9567ae2c26321a648e"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","e7692514fadd5bcc7a92742d443f1469"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","d0088e67fb3daf8ee9e5f7b160ab6b23"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","1d35da03011d040f21f519e41b8f4bcf"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","3e6cf2897638a32b5b06f943420cfd76"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","9b978e8e2ccd710eb71fa8b48803b3c5"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","d79bb272e0a903eb01b5b45cd57807f1"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","1cd2e4070767ad778d561bd9cd383f2e"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","71c2c0fb404606cb11a509d694b31c27"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","0c110ec5e5dadedd22b5911f2d6a0565"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","3567c0ed33cd874dda0f39c04ce9550d"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","8e7772f166eb58ea4aac9595f76f42f4"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","9d2e88130ab874d5d69e72a2d719144f"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","a6e730f7ee8c606121f48f23d29eaf9d"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","fb1aa9ba01af44765078354714109141"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","f7054a6252f31397172118a4c892fc2c"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","bf790c9aaf13fc80403639d395fc2270"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","0a07830c795280f6a001c6b197e794f3"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","9e1936c85757e783f4eb16a02e97969e"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","d788bb573d8393cc15022b267d8965b6"],["/2018/05/13/四大组件-二-Service使用/index.html","3f4bae475ef1e51bc5a8faeb3bc0c9f5"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","361e28ad786d101919c5d26273e81af3"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","251e2f86fdd876ee7d3ecef61bade584"],["/2018/06/18/Android源码分析一开篇介绍/index.html","3cb5176e3d97ed3b1996587a1b4b5d1f"],["/2018/06/24/Android源码分析三Service启动分析/index.html","cd7da60eec8ecb470558866b705baade"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","76bc029b27526bc1281ecdd08d1133f8"],["/2018/07/01/Java基础面试题汇总/index.html","f55ab2bb2f83dacda56c77637a06765a"],["/2018/07/06/23种设计模式在Android中的应用/index.html","6428cd23c3335289cdd1613aff7a2d3a"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","e56ad50b375dd0ce88afaf26d8d0953f"],["/2018/07/07/Android源码分析五Zygote进程/index.html","697923dac82f5c9de9ba4601064ae38b"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","d6da915a7e9b55da5f7e3d8ff4ddb472"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","0762963fd390976cebd2d8852dc177e6"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","0ef25f1854dad6d804b5c075302dfecc"],["/2018/07/08/Android源码分析九Init启动分析/index.html","239e3b3fd4ccefff8a5977b4b71c28ef"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","31e71726c0713f749fa21f9d8b4f0561"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","b597018536affdd3cac267e9e2c92f5c"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","59436284ee9187b2791774277964b2ad"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","7256c741ac6ff3ea077dc3c96e34312d"],["/2018/07/21/AIDL介绍以及简单使用/index.html","2670fb756f5c9badc5843455d335df73"],["/2018/07/21/ViewPager相关使用/index.html","e9d33093b7cbf560176d0638330408ed"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","78c8a02e3c57a98bbdc0d406f4b838ea"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","da75bbe2805361dbce5ec0472afd46b8"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","5aff4b6c6824646c7ad33c15caf6e268"],["/2018/07/22/Android进阶学习笔记整理/index.html","6fec15ca843c257c7f0fc2c3e0777cb2"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","5c93377b770c7e87cbfd0b83d9470aa7"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","8ccde9f340dec125936dfbf137a1d2fb"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","5376e029a48065d65436dc12a8e17222"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","122b91e342a7db4010c5c485d52dfe0a"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","0ffac45abe34ed722a61736963427097"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","a0e7433c68c0fd5a3216343fc5812dba"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","b413c237b83f2cf52b336d5ca78acc17"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","3de75d10a45065bf7415696764be19a5"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","669bf6222e24f48cf218bdb8d664d893"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","400fc508ec23a838dc3d4a2640876100"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","403c0c737afc1402e7fd9059bd40dc0b"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","7488bd00e23f10529b4c5ebbcce800d8"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","aa7a70513678d5e20d03944dc6c4bc49"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","e4f5154ee5626ab278f1453de3c462a0"],["/2018/08/05/Android开源框架系列导读/index.html","b447fafce490cad979d3d6a9ad122343"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","319458c9383019bf5cb6b75cec3f65af"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","a2b11e4c617bac7ed5260a92206b9891"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","7a8a05dc91ae3195b6b5fe64b58d6a72"],["/2019/08/25/Android面试题/index.html","551408a7972f018878b39733e3169ab5"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","351ccab1b094b2b4131fec7459544d30"],["/2019/09/22/汉尼拔电影观后感/index.html","1730623d98f778faa4e797733c828897"],["/2019/09/28/Kotlin与java对比/index.html","0eb074ea80af273e592798768d01df67"],["/2019/09/28/巴比龙电影观后感/index.html","5dce123572f858b6db1fd0c255ce6e44"],["/2019/09/30/mac搭建hexo环境/index.html","0618a83cf795b670281df7da76b43aae"],["/2019/10/01/关于职业生涯的想法/index.html","5e09b8eddd93c4f63f8fb10abce6f38a"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","619020b382f1c22c9c33bc777e5eaf3d"],["/2019/10/03/AndroidView绘制流程/index.html","e25d8182511b6c780e4272116998f558"],["/2019/10/03/Android屏幕适配/index.html","e210cb8782fe19de1ce727fbb7e66f41"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","661b52fe1dae5768428566137d163252"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","b1bc3b26b1c542362fb345e7022c0f0b"],["/2019/10/13/谈谈逛博客的小习惯/index.html","2a381cb376b031dfbb1c12e188350b3e"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","31300de48a8c66cd2c0dd92388bc1dd0"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","e93b9ef3ed265358c2e9ce6369ff689c"],["/2019/10/19/关于程序员的第二职业/index.html","75691d103ace4cbaf1c444d476fcda5f"],["/2019/10/20/一次车被刮蹭的经历/index.html","dd920cf0a17e78e06261accf4a358ff3"],["/2019/10/20/第一次买房经历/index.html","30e79ef9e422b7f918e4df6643952947"],["/2019/10/26/kotlin之Lambda表达式/index.html","4a7ec72bc5f19b3000a10cd52281e4f3"],["/2019/10/26/收藏网络资源分享/index.html","5a5de5d584cf5a70b65e9a69113a620a"],["/PY.html","329842f88f08ba56fff212da8b8db546"],["/about/index.html","571f2e9550ba0aa27362e49a615bffcf"],["/archives/2014/04/index.html","43c00283170884a99e32c464a2ffe18b"],["/archives/2014/05/index.html","9052eb2ac61d803b42798c21744f0f71"],["/archives/2014/07/index.html","7c3fe442a228b5f6c7fd327746c790ec"],["/archives/2014/08/index.html","3daea7b7ed2a578c7847bd718e0e4796"],["/archives/2014/09/index.html","210821a860753ed1d6159f305e035381"],["/archives/2014/11/index.html","31579dbc90c877c19fb6893f31267d18"],["/archives/2014/12/index.html","6f0cdc1b752c58382d1aad110a0a9da8"],["/archives/2014/index.html","311b213d94ffed30a98837e7033e7f82"],["/archives/2014/page/2/index.html","942257e1a1b456bf8ed6bc8b49fe4429"],["/archives/2014/page/3/index.html","2c3e0dd8af57425337d39f68c202c89a"],["/archives/2015/04/index.html","d627b2112c7cff10b0477bcc4c0020a2"],["/archives/2015/06/index.html","6b9d5343513e7441c4d8880f370e1bd5"],["/archives/2015/11/index.html","aa39d33e92684aa7ad6a2d11d59f3318"],["/archives/2015/index.html","093f91931432181a6715d324c5c2e880"],["/archives/2016/08/index.html","70037edcffc68ac146387aef667c28fd"],["/archives/2016/index.html","679e7f9525d93e46b68a8cc5a73df383"],["/archives/2018/04/index.html","2478fe4de57a86a40bbde5c3f732fff7"],["/archives/2018/05/index.html","5436aa786ee7dc0129b246811987dbd6"],["/archives/2018/06/index.html","9d627bda733be084fa90b1130c32bed1"],["/archives/2018/07/index.html","3fe67e9a089e96ff6663aef302082f6d"],["/archives/2018/07/page/2/index.html","27013afdb6f69f15f5bee3b7a04d9ca7"],["/archives/2018/07/page/3/index.html","6815f3833712c680426ad8c4ae177a31"],["/archives/2018/08/index.html","81e0c9a2fcfdccc188fa7e9013f3d06b"],["/archives/2018/08/page/2/index.html","f3e0b3ab2092a5b59cbae3fbd4e9ffe6"],["/archives/2018/index.html","fb5bc1bafb1d6ee361dc7743a5aaf54a"],["/archives/2018/page/2/index.html","f5e012f0350827e385549ed9b1bf86b9"],["/archives/2018/page/3/index.html","6c4c632f232707fe92de5a3513d62f2c"],["/archives/2018/page/4/index.html","9fac8645e7d53b11ea0e894a31963002"],["/archives/2018/page/5/index.html","aba3ea58d2d96f7060386834c58f5b27"],["/archives/2019/08/index.html","1548253d53e298efff624ac132122177"],["/archives/2019/09/index.html","e6ecf88a67052cd54a34a66e9e8af7ff"],["/archives/2019/10/index.html","d9d549e6c60c13ff190f5bac1732c898"],["/archives/2019/10/page/2/index.html","873ca31e895506c5390b2163e48d2f5b"],["/archives/2019/index.html","740d4d3bccbc51f6c4c225ecc5cf885a"],["/archives/2019/page/2/index.html","aca9b79fe2db324eca119d7d60b71307"],["/archives/index.html","ddf335c56a01e1ba46273725350c7d31"],["/archives/page/10/index.html","25f4e8c84154c7b626274b7fb7025c2d"],["/archives/page/2/index.html","d185542659b640b9208e2868a1c21424"],["/archives/page/3/index.html","bc0750ada66960bad3cd32c7cd4441bc"],["/archives/page/4/index.html","2a1518648a921df6f33600b21d73d457"],["/archives/page/5/index.html","3dfd4a3a3fac4035fd44faecaa05a7ea"],["/archives/page/6/index.html","b4f458263e1320bdd38f4cdbfe1e0396"],["/archives/page/7/index.html","43c117ab4e27eb3d9168ea3e690f1927"],["/archives/page/8/index.html","07a59ac0113db1a5dc0883f659747201"],["/archives/page/9/index.html","6b9abd0d437805075bf254171acfec9b"],["/categories/Android/index.html","da547ce022c8a7ce25ebca6e1296aeb9"],["/categories/Android/kotlin/index.html","c1c1dd3ead99841c799d6ab37e4f51d0"],["/categories/Android/page/2/index.html","a9021e9a59e7a76b9e76c0d0a64b230a"],["/categories/Android/page/3/index.html","40c891637bbb4352bf326ac56dedd546"],["/categories/Android/page/4/index.html","43ba83f0d6901ed7e965abe599ff3141"],["/categories/Android/page/5/index.html","8a5c06bff1f4a053676bb50ae6a6a01e"],["/categories/Android/page/6/index.html","4729e50f7169c2cf18bc1524e80c59e2"],["/categories/Android/安卓源码/index.html","d6ea0947c24394a3b2d40c094ea3ea77"],["/categories/Android/安卓源码/page/2/index.html","88e2d4414d27b1b5d1ba609625bf86a1"],["/categories/Android/开源框架/index.html","c383c42803ddaa432eb61b906841c299"],["/categories/Android/开源框架/page/2/index.html","4803f4de31735d1fbffc37f91c8fdac3"],["/categories/Android/知识点/index.html","f43b8c5d36ec83eb092bc32b98293088"],["/categories/Android/知识点/page/2/index.html","e25b3531df960fe319d54a6bca8e7263"],["/categories/GitHub/index.html","9424f4972f3b95ca09dd24fa36e515a4"],["/categories/前端/index.html","9b2316295ae0e5500430dac42aadafdc"],["/categories/后端/CSharp/index.html","98118ca960268282bcbb27bbd28cf702"],["/categories/后端/CSharp/page/2/index.html","3155e782289db1218fabc3ee1bcc8a46"],["/categories/后端/JAVA/index.html","25cd93d600a11638e8c9c38ea3ed40a6"],["/categories/后端/PHP/index.html","a6169f73b01b9e1762400bcd7b38967d"],["/categories/后端/index.html","b88501932df4d9ece7bc3aecc18b9d39"],["/categories/后端/page/2/index.html","815048d7abc4cf49589812325f74a730"],["/categories/后端/page/3/index.html","f74a37187e31e1b6a1d5db622b95638f"],["/categories/心情/index.html","a1a6891b1226c94665e4407815e04e13"],["/categories/心情/page/2/index.html","c14fa386a90be5173d3eb31e9affaa84"],["/categories/知识点/index.html","842cb5d3831fe5ccb7bf95c79f891fee"],["/categories/设计模式/index.html","10774c4024e626ccba7871288f058ad1"],["/comment/index.html","db5419c23388442d6674e4dbe9ace4cc"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","38240edc7269d2a1b171b786f2b7680a"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","48e722d4b51bc96050ec94c40ec3010f"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/page/10/index.html","8067b88bdcaa2aea7fc7aa50a928263e"],["/page/2/index.html","baecacdf3f1d7b07d573d4127c36fb60"],["/page/3/index.html","98f79fa607c3d2e88293c286a6d196cf"],["/page/4/index.html","23af3630ab6fdb50929c372fabc0d9db"],["/page/5/index.html","540b83896e4f834912cdf05702079478"],["/page/6/index.html","c2a7128d5559a91a74ecd790eed5c757"],["/page/7/index.html","ab9df981e3b81985d859c6dee89c5a0c"],["/page/8/index.html","d934f0e62f57024c4f8a5a1d36ba6b47"],["/page/9/index.html","38e636bc2e84c30f1aab8d5c7f520781"],["/photos/index.html","e9ded0fffaec5476825663ad38c1216e"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","2edbcfd83eeccfe9732416e9d964eace"],["/tags/AIDL/index.html","2f74fd217e2b5209732c1947431360cc"],["/tags/Activity/index.html","2824b09a6ee6d8b64838d4a4114bc189"],["/tags/Android/index.html","4df383c225fb89bb2b831b841e4f35d6"],["/tags/Android7-0/index.html","c2c88005a052d80e4aa19badda0469d9"],["/tags/BroadcastReceiver/index.html","d087f45d1563b52492ee7f2cee270e6d"],["/tags/C-文件上传/index.html","1771415c31aead203d314a9f6c916876"],["/tags/ContentProvider/index.html","32a3f855a03e14cffb3fd8315f5c71a5"],["/tags/Excel操作/index.html","04bfe22f5aa6acf5421512c9f51228c1"],["/tags/GitHub/index.html","803393227c819a2c5b68b2cd4ac4e26b"],["/tags/IIS/index.html","ca2b022e37acebe9948ecf50ef3c1251"],["/tags/LNMP/index.html","c1a264d8e6d0f8d136c6a099706a36e4"],["/tags/Linq/index.html","dec2590e64ccaaa0a2ca14aced7424c8"],["/tags/MAMP/index.html","73e7eebaa0ad8c728019403f0fec5d1a"],["/tags/Service/index.html","9a2988ec059a298b3b6ca5249057c678"],["/tags/SqlServer/index.html","6aed354ac07697d19a5e2432a02917be"],["/tags/ViewPager/index.html","d42397511d96071874b4bcfd16325c42"],["/tags/XMLHttpRequest/index.html","cc50074b20d99ba6095a22110db06263"],["/tags/c/index.html","a9816d8e7cbc85efa719284f66e120d4"],["/tags/coroutine协程/index.html","575938a7178964e59a80673038d2e0bb"],["/tags/easyui/index.html","6564d8513883a4620a95ca026d228303"],["/tags/fiddler/index.html","8c6eb2d0b8bfff1e59ff0f1f18a1b97a"],["/tags/hexo/index.html","d2a7e0ea2884179480d6c7579ab256f4"],["/tags/kotlin/index.html","025ac7396f724b8a2b4f1b38125e0231"],["/tags/mongodb/index.html","acfc04ab4c1d9433d585aa9b7d03562b"],["/tags/mono-for-Android/index.html","22b1d650aa33466414f1213d641f0bb9"],["/tags/nodejs/index.html","262b6e3e807e5e797b03d7858fb33920"],["/tags/php/index.html","459f71b66933529f8cb9a204bf1149c0"],["/tags/view绘制/index.html","7ec83c44ee6db86a229468735a0986d8"],["/tags/visualStudio/index.html","94f52cd5b0f10b669faa4f1dc2c16d61"],["/tags/习惯/index.html","15c277e6423c762850fa967958a86669"],["/tags/京东云擎/index.html","535112adc2e6933e2095e80ef5cfd583"],["/tags/公众号/index.html","0fd9da7b8f398b982a26b744a6063bf7"],["/tags/副业/index.html","ab6c24f346223e5b50fc5594ab7dfd34"],["/tags/图片保存/index.html","67905fe771cff8459d2325b57384c902"],["/tags/地图/index.html","b54f45c097bb580c9eaf2f1d6343d1ea"],["/tags/增量更新/index.html","c5321bc05f8ce791c4f8f8bce6dd6bcd"],["/tags/安卓源码/index.html","36595b8398a9d5a237e657b3948cf690"],["/tags/安卓源码/page/2/index.html","65f9692377de9ee885986e5e4e18da2c"],["/tags/屏幕适配/index.html","f0b78b2a2b63ee7e4fa3b80e15f65734"],["/tags/序列化/index.html","cefead4059f43f836d89b4649d455961"],["/tags/开源框架/index.html","9f9b4d2c4cc27a3aac1b59dece18d7f3"],["/tags/开源框架/page/2/index.html","f34deb1d5e042e2e91b7b77d0cd995fe"],["/tags/心情/index.html","34e16d1bbe2113dfb2e1ff612515d50b"],["/tags/新浪SAE/index.html","11686d588f7727fc4becb937e6c69ae4"],["/tags/日期格式化/index.html","6a99efc3dc77fcd5e58395b0a23fdfe6"],["/tags/正则表达式/index.html","a884b7ce9854e95a13838f8bf8ce9b12"],["/tags/电影/index.html","0f167f6331a765c4c4c4b86a93452885"],["/tags/线程切换/index.html","66f0650833662ec14d6e102060c5360c"],["/tags/网盘资源/index.html","d6c342f0c39b9d22177bd3bda792d40a"],["/tags/职业发展/index.html","55eb61974ae9640bbe17e98d535cedac"],["/tags/职业生涯/index.html","249e260923405c35bc2488543f242a83"],["/tags/设计模式/index.html","26bc8f0fbd821be8f980d28d46e04f82"],["/tags/评论插件/index.html","30aa7964a325f426d1135367baffe5af"],["/tags/购房/index.html","8a80ca642c9c5de4027f438ee45947d5"],["/tags/跳槽/index.html","5a5dff45a3282498f5aab00144883089"],["/tags/面试/index.html","ca3aa5e165adfe65d579f3955d3a6742"]];
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
