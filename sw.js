/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","844cfc63df6c5db552f89d8436094954"],["/2014/04/27/Hello-Hexo/index.html","a824bb03e494c09c7068949906873876"],["/2014/05/07/001-RegEx/index.html","2794158a7861d464ec6260ebe606af9c"],["/2014/05/08/002-DateFormat/index.html","4eb1f0bfd092df61a27fad6f536893bd"],["/2014/05/27/003-c-Linq/index.html","67a19b5f8c326d5991833fd37fabf8e4"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","38b23aea5ace4c9c234dcd12b7d67f94"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","0c2f3ba959553a4dba30d21f39a04404"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","7d5026293e74a44efb52ba0e1e910479"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","be0175f595f24cace9d2675a44ed1bbd"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","3d021d73cb5b3aaba0d019ca4a539e13"],["/2014/08/24/mongodb在windows下安装教程/index.html","1ef6cea9552204a801f2c54ca3000094"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","6d2a66fc87c80a05ee6ea895163637c0"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","7d3f70a4d8f91e05958fa4c6d1580e22"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","32329732015475b62a78842effcbc296"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","04807b60d0b6c2672bb9cf9f425e0c05"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","d824cc62cb41de1ae21efdfc6ff0817a"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","f9bf5308d2f6b74cb23c10f7133d2997"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","3756bb1d9932c72bf71b833bbc50d2e8"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","25fc2809369674dc83a3ded03206edfd"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","cd58e1dd4b9ec7cf069787801cce5af4"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","f176b5256b525cf89c85da9bd836d653"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","4cc0fd75daac5f60d37b5dc85f1d2a5e"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","dd83b0f1b90c775f3ed3e2c90a2eaca8"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","42a4fd20d6e339a0028f261192480b8e"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","70fd0072443c9216fb4979870befc463"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","fbc1b2369b3cba472069352d456b42a9"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","9e0caa83a713f7665c28a46f04bf1b96"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","1f8ea51bdf937a254315132d49c9d6f4"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","01d7c165327bcaf4dcb23deb75debab1"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","4f4a05932029de3dc400842a46f842cd"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","f8b5766d9e6640691cf0343f0cf8889b"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","c276142bd45e4c7a4bfe87864a3ca6db"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","9f0954bc3c8498064ad9d2a30613087c"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","1caf1cda47f5d89913bf2fca9922f131"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","90383efc8a7b4ae6c88194be7af0e46d"],["/2018/05/13/四大组件-二-Service使用/index.html","a771341d3b6fd4954b3e7569aa5f75e5"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","b4c93267b78bb17d67125a703e33b9f2"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","3f925a95157c29a084a234f9b1b0c373"],["/2018/06/18/Android源码分析一开篇介绍/index.html","476d32f62ac808418123a8c43d970ce0"],["/2018/06/24/Android源码分析三Service启动分析/index.html","431ef91af224dd70374fac55bdda48ed"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","fb794db0c8d96acf7193d266e4769fd9"],["/2018/07/01/Java基础面试题汇总/index.html","725d39ff5cdc5c1eed528fc9e848d6c3"],["/2018/07/06/23种设计模式在Android中的应用/index.html","b39f16bf866050af23d401015502aba7"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","5d9472ae18c151f14ea02c88d8e720cd"],["/2018/07/07/Android源码分析五Zygote进程/index.html","3fbbb7da6f11b60c17b2fc9472dadfe1"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","b881e469ce78df8e07dbf161ccd931ef"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","544067851b5f1fa582f80f000468b854"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","6c0811e23b636c5a36f4614c771ff994"],["/2018/07/08/Android源码分析九Init启动分析/index.html","b7617e3fe3ae5d4e4a553b724d5eb82d"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","3efa403cb84b53c638b348ce8ec7fc05"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","8a222ca0c4ef6706fe496ff4f0be488a"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","de8d339be76c428b794a37d2e2d67ade"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","3ec5f53022f8f6f301206f5ba11591b4"],["/2018/07/21/AIDL介绍以及简单使用/index.html","1832dbd1dc45ff43bf3162d3a3529818"],["/2018/07/21/ViewPager相关使用/index.html","7f0c8b5ed2ed347392f6cf29c785ce07"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","3385b318de3fce7978402bb6002a85fd"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","b829a7a06c83a84d43849ad992b70cb9"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","c3f86721d9d111e5f5c7f578320c739a"],["/2018/07/22/Android进阶学习笔记整理/index.html","63f1c92b47751229410224dc15cdfa50"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","d99711e37aac494da79553522ad557f7"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","9459e3cadb3f53f3ae32c1469b447e67"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","810e4f147a8cc661f0bc9e7b681d24e4"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","4b9b4af319dc70129fa6e42ee6224d54"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","3daffa080ad6aaa9f84aee69a48ea5d4"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","7e4b8dda96548e9f5f8394c1ade14d91"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","29b3d5249788f888abf3fbefb31d5998"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","beb8dd69537c91c2ccd415775c5c8ae6"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","608d3ce9966fe64349d79b3127cd1bbe"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","4b3284981dce1ed38acc680273da9651"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","3d64fe041d1057948fa6654879c97b7f"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","8ed0f5a3ac0b6d260cf1d940fa10005e"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","7c782de7b4665a7aacde1503c574995c"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","69df04cc3f9f000b8107bd75c21c5cc6"],["/2018/08/05/Android开源框架系列导读/index.html","2769b3d73f308bd1b8141b872e1e7237"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","c794e7927341fa995fa0b2f8e9c535eb"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","b8bf780f4749f8f8c5d96fe7fe3cee01"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","bc6f98aa96a721529d1fd31d0615fa8c"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","0ff1abb76a2b91054ff5ba5f18eec5c1"],["/2019/01/01/Jetpack之LiveData介绍/index.html","ca29c2abbba18726c503b8277b64888b"],["/2019/01/01/Jetpack之Paging介绍/index.html","72c38f5df7b4994cef37f5d1c1d3deb1"],["/2019/01/01/Jetpack之Room介绍/index.html","045c293eb5aaa091bf47fcf80f61729a"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","96a167d9efdff2e4039be5ebcf708cba"],["/2019/08/25/Android面试题/index.html","632ac7cc02a0b3e14061ed10ec8bec20"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","216141b256409c2d0a791bbd62d7f807"],["/2019/09/22/汉尼拔电影观后感/index.html","f912b0e7d76444736e361d3c001f2d6d"],["/2019/09/28/Kotlin与java对比/index.html","d79a8b68c5a66a5056e3717b19beb0d8"],["/2019/09/28/巴比龙电影观后感/index.html","9111ed7996df1cc5db188716f3dfdba6"],["/2019/09/30/mac搭建hexo环境/index.html","b538de92789aa0d1317243b3f021ef9c"],["/2019/10/01/关于职业生涯的想法/index.html","903ec5beef907f297af4bb504b5289f1"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","b622493b8408118ea532f8303b2f9b39"],["/2019/10/03/AndroidView绘制流程/index.html","f535e2b8421191fbdb58f6a651dde41b"],["/2019/10/03/Android屏幕适配/index.html","b8c9497867b5728311a01c0ea03b67e6"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","6a23340392466034396738cc158d7063"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","5259c36315ae225c843bd9644d112026"],["/2019/10/13/谈谈逛博客的小习惯/index.html","fadad82c55d10923d1b07543726256ef"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","f106754f5e398873d6ccd1049f71af95"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","c41817ee5546bb0e2ebd669c2ec32bb2"],["/2019/10/19/关于程序员的第二职业/index.html","57ebdbc58e1d3a7d9c795bda2f114071"],["/2019/10/20/一次车被刮蹭的经历/index.html","81fc9edbc0860ab8af57535224669ea0"],["/2019/10/20/第一次买房经历/index.html","951f6128467d0969ee3549441597fccd"],["/2019/10/26/kotlin之Lambda表达式/index.html","8cfac67c06f35604561c293d3d823ad7"],["/2019/10/26/收藏网络资源分享/index.html","ebf95c97e359b948a25cee483d284ceb"],["/2019/11/01/Android之Jetpack简介/index.html","841471ec8ef0fd1deff539b25d06c353"],["/2019/11/01/Jetpack之Androidx介绍/index.html","1e492643aea00285be810d511cf2cf2a"],["/2019/11/02/初识区块链/index.html","b90ff18a76f9667bf1e6dc9c64e29a02"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","2e329a17c73a7b0b01c68f0adb54ed87"],["/PY.html","fef50cc8f479a5d9a13092ce314882cb"],["/about/index.html","083aa7f5d3368db5324963e80cb9521d"],["/archives/2014/04/index.html","b8d2c3acddda362df25746a90a7cf9ab"],["/archives/2014/05/index.html","4abf0b4dc1cc166756d3c9185bf3e3f5"],["/archives/2014/07/index.html","c189c4523cae391004c6148d47de50ae"],["/archives/2014/08/index.html","58c5f98cb95758892957d821ad48efe8"],["/archives/2014/09/index.html","e4f82c62f909f894ea9b2fe7db16110b"],["/archives/2014/11/index.html","a57320a4f6a894c1a6c82bdf5b153038"],["/archives/2014/12/index.html","546cea918b07f49ce5300c24a2a4f3b5"],["/archives/2014/index.html","04992ca1911e1407bdb13fda163f3417"],["/archives/2014/page/2/index.html","4ae0ddb6ba1196f619f3d2004b84e458"],["/archives/2014/page/3/index.html","edeb14a4541bf669d6fd43a34e2410aa"],["/archives/2015/04/index.html","165f44878e4f6d969177dcd45b1b7668"],["/archives/2015/06/index.html","08f4c737c9425e4bff52605867066769"],["/archives/2015/11/index.html","90819c896da2418c439053b41d86c83b"],["/archives/2015/index.html","d8a5453e40955cfad17750aa6ff5462c"],["/archives/2016/08/index.html","09defdd674fa25ffc3a14e6cc8b2435b"],["/archives/2016/index.html","ecfe5ff0dde0f3a53f941253000922aa"],["/archives/2018/04/index.html","62eebf9693791d7ad84b5311ea36f754"],["/archives/2018/05/index.html","d58980478dbc9dd0e30f4a94a0a3d8c5"],["/archives/2018/06/index.html","1d0885f9887fa0b78bc7017ad5f62d0e"],["/archives/2018/07/index.html","b33800a0749f71a2b476a13564aca1d4"],["/archives/2018/07/page/2/index.html","8c21bb62534c1f6f172d92fc5731ec8b"],["/archives/2018/07/page/3/index.html","c32651b7e7adb25e4b3960bb11126803"],["/archives/2018/08/index.html","8ef2b249057ac04825861e011f337846"],["/archives/2018/08/page/2/index.html","ada150794f240f88a976817ea79fa5dd"],["/archives/2018/index.html","3f036fd053d39e22476c230c36fcd909"],["/archives/2018/page/2/index.html","8b5174200c795b4d293eba9064af9247"],["/archives/2018/page/3/index.html","f0a0433092a02c4054fd3a669b542bf2"],["/archives/2018/page/4/index.html","10cbdd6f58b183add2393532db0be70c"],["/archives/2018/page/5/index.html","957149f6c90ea646cc3b0c01c2c9e70d"],["/archives/2019/01/index.html","b0315c8b0d3a11fa3af31d19f3e24059"],["/archives/2019/08/index.html","87574496e83bf44985a2741ee9689abe"],["/archives/2019/09/index.html","d37da292400e9de67031c46ccfe29b76"],["/archives/2019/10/index.html","f6325bd1b6974b471e2e6e3639924ef3"],["/archives/2019/10/page/2/index.html","ee4f14b6bdd2e082b00b98d801e46d29"],["/archives/2019/11/index.html","fe2a9caf0c92b73c044a859dd39d68fa"],["/archives/2019/index.html","f8e02f168f054424c065693a3959ccb0"],["/archives/2019/page/2/index.html","0d1855da441991184d3ee2b02abaf11a"],["/archives/2019/page/3/index.html","ab84051927cf5c762c93e29c045f8e1f"],["/archives/index.html","b8f170e3e78b257ca771ac856c84ef99"],["/archives/page/10/index.html","3edfaa85d1efc114754989f6ef24cc29"],["/archives/page/11/index.html","5839f70936a1187d4ca82170be774c76"],["/archives/page/2/index.html","13b954e98a5e57099478a0aab4c6181d"],["/archives/page/3/index.html","fea53fff2610c514096ab8bb5b00aacd"],["/archives/page/4/index.html","60b4d23b6475097a4af2a265221b9895"],["/archives/page/5/index.html","abab4be3a58957b7e2a8e3024f06343c"],["/archives/page/6/index.html","eba928e04bee6d1f4a9a148dfab8c66b"],["/archives/page/7/index.html","fa3735d05247feca7259efc5cdd6b3df"],["/archives/page/8/index.html","1b68e3dcd0742c0c652818f3869c9480"],["/archives/page/9/index.html","56e6544262c30ca6832df8c910e3871e"],["/categories/Android/index.html","ecf5e50b5cd9badc1f83464f41a0dd13"],["/categories/Android/kotlin/index.html","a6d8a6095563ff65d32ffe6ef2973c71"],["/categories/Android/page/2/index.html","1655d8f32b0f50b8cafe475635bb2ec0"],["/categories/Android/page/3/index.html","bf9a806f1041749b712cb169b85fc3ec"],["/categories/Android/page/4/index.html","955e7bbf593844bf0b9d2d0ba05a8673"],["/categories/Android/page/5/index.html","5e7aa4d9354d43fe5b1a59f41beafe16"],["/categories/Android/page/6/index.html","4a6850ffadb998b479f76024e9168743"],["/categories/Android/安卓源码/index.html","1a2080b7db9fe8de5c5296f4cf90e564"],["/categories/Android/安卓源码/page/2/index.html","3a4ee79d07b0dd9c79621ba7d900c684"],["/categories/Android/开源框架/index.html","0fd847ccaef98d08499b2aed9551adfb"],["/categories/Android/开源框架/page/2/index.html","df32552f9198593de421eca9e5f573e3"],["/categories/Android/知识点/index.html","7a75d1da210a518c3eb68829d9ae8ff1"],["/categories/Android/知识点/page/2/index.html","daae61f377a6fa2b2466f2a4a24af432"],["/categories/GitHub/index.html","92dae7792e1050525d73daa0c8e3b036"],["/categories/Jetpack/Androidx/index.html","5dba176f4dbce431f9ee84d04b63a8a7"],["/categories/Jetpack/Lifecycles/index.html","993e67fd0075d469653cf6bad87c5631"],["/categories/Jetpack/LiveData/index.html","bbafdeef9c8699e5e872bc3eec9adce1"],["/categories/Jetpack/Paging/index.html","90642214e7f9812a3a10ce528b87d6d0"],["/categories/Jetpack/Room/index.html","bf10c7da4a1b921e8e150627261274f1"],["/categories/Jetpack/ViewModel/index.html","39b78869af90759d4a2e580e0d805b0d"],["/categories/Jetpack/index.html","7e570b7dae37452cd680fdf95eb53be1"],["/categories/前端/index.html","89713a2e74fb0559d12c37e2c16ba830"],["/categories/后端/CSharp/index.html","36c760d84a6967f6fa69aa39807df6b6"],["/categories/后端/CSharp/page/2/index.html","aece7e58ad41228d4e92f0816d783761"],["/categories/后端/JAVA/index.html","dea5ef4b58d09ddc25a0e7127d10c97b"],["/categories/后端/PHP/index.html","c5d078450f342b693ba2d668b43bdf45"],["/categories/后端/index.html","42aafaaf2cce4d9003ce2690dc44bb8d"],["/categories/后端/page/2/index.html","c5dfb1b696a0a2d8f1833235ae6bb8d0"],["/categories/后端/page/3/index.html","678c28311472c5924c5df2a6dd4770ac"],["/categories/心情/index.html","4f53692283fdd1301de3479186d972bb"],["/categories/心情/page/2/index.html","d258e0380e08c6f673d239e8fcf7cde1"],["/categories/知识点/index.html","0965ff64d410d379043bea8577970e6f"],["/categories/设计模式/index.html","31a31846082bf175ce1f3cd03043b598"],["/comment/index.html","3227eb9ffc1e1299044751fd74a13bb1"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","0c7d6f5c6b863e09241697d36b9e4499"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","6ea537a292c880b3da48df15ac0dba89"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","bcf4f387193be57cbb820373c5673cb6"],["/page/11/index.html","88c67600854b105a95bd33a9025b6cf3"],["/page/2/index.html","8d38690364c7c5a9ae4df6f9b2ec4913"],["/page/3/index.html","afdd6a32f928068314aa37ccb20fee8a"],["/page/4/index.html","31ed4075cb3bba40cb9e0b520c908f86"],["/page/5/index.html","d42437c6601d374dbb8f0f04fbc0f43c"],["/page/6/index.html","1281a81d557b268e9d7b000ed788a386"],["/page/7/index.html","be178085509d2a513a8333280d039320"],["/page/8/index.html","3ad2caa4e9fcb01b74108177bf6e8e44"],["/page/9/index.html","25e9570359fc6c988c931261faffbf54"],["/photos/index.html","dd9276ce21957d1acf58cc02745b2d5d"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","ae0ff91c74542aa76185c00bfa3cef97"],["/tags/AIDL/index.html","7329c7a7dc5697abfab6e73bf5438020"],["/tags/Activity/index.html","fdc0035c834b579f621fef64b55c2035"],["/tags/Android/index.html","a33f1156b7e46e53fc9cd51771fab27c"],["/tags/Android7-0/index.html","e343ad9208ef4596a041569963e75c5c"],["/tags/Androidx/index.html","eee71571519527841c1ab28d01ebd12e"],["/tags/BroadcastReceiver/index.html","590789fc65dedc948a4fd99e29244343"],["/tags/C-文件上传/index.html","4cf554827b437917dfe96ddc19ef70ca"],["/tags/ContentProvider/index.html","08605382cdd9195a2c614c7c3c1a29e9"],["/tags/Excel操作/index.html","561798eda28f8cecb53dbcd3f8171c30"],["/tags/GitHub/index.html","b7bf1e7cee30912ccc07a8b81de4120b"],["/tags/IIS/index.html","914398d08918ffaf0d452325a5e62bf8"],["/tags/JPush/index.html","d9225ba2837766b3aedf7eda3e86886e"],["/tags/Jetpack/index.html","cca9ea4d273efd23cd71e9765fc37e53"],["/tags/LNMP/index.html","e6040e71da734a80e7cd29baf7780717"],["/tags/Lifecycles/index.html","84b7a9ac41f5c9adc8a5ecc4f8d71bea"],["/tags/Linq/index.html","45a066df70f7d54304ad65a248d30c30"],["/tags/LiveData/index.html","a4fbf7569f7543813af0566e972cdb60"],["/tags/MAMP/index.html","0c5d1ac5244556d21f46f6b828ca8236"],["/tags/Paging/index.html","043989451284d895a00303db4daace96"],["/tags/Room/index.html","ea4985c187fc544c0143b2ea46a36f88"],["/tags/Service/index.html","429e37d2f2c1cfeb9d1a5d0700d9e62c"],["/tags/SqlServer/index.html","f6c1ea1495af3ebf0b985fa18a67e4c5"],["/tags/ViewModel/index.html","1ab3a9fe5f25180355fdcfc8dbc77305"],["/tags/ViewPager/index.html","c647acf215d5bbf747db8c9e83a8b710"],["/tags/XMLHttpRequest/index.html","82a743455acc00ec32c527cd2485eb3b"],["/tags/c/index.html","324aed0fc2791c0a7ba1eb979cbd4eda"],["/tags/coroutine协程/index.html","6b07ae969b21dd553e9647a137623604"],["/tags/easyui/index.html","b67f040875db20d345aaef81b6c7bb34"],["/tags/fiddler/index.html","d4da825dd1ab0630f6c75f65fc26489d"],["/tags/hexo/index.html","087e1d49451ee1b07485c9a2b6ecdcc8"],["/tags/kotlin/index.html","8cbdc5476ffcba7ba24541b8b3249a05"],["/tags/mongodb/index.html","dc5c505fc0575e6c9ff7d231f7983656"],["/tags/mono-for-Android/index.html","152b2f111f0ada01989247b21436e063"],["/tags/nodejs/index.html","a4f2e8b77994b7095e15bd11410d7759"],["/tags/php/index.html","65a5a6063c608cf49f335d6f78fdabd4"],["/tags/view绘制/index.html","9d576ad5c4a32d7ac23f27faa7f62c08"],["/tags/visualStudio/index.html","563213241d6003b0d256546329df4ecc"],["/tags/习惯/index.html","54cd04d7cc48afd331d80b9ac57733fd"],["/tags/京东云擎/index.html","2a8e1f4cdb5c10a7816745263995d3f1"],["/tags/公众号/index.html","b944aa3e5cae315856799ff8bb164b7c"],["/tags/副业/index.html","0c37513aade12c5ac239dea20a19c7fc"],["/tags/区块链/index.html","8f15afb8858cdf84b9e07cd777d13f2a"],["/tags/图片保存/index.html","a965063cc5d023e74c7350e6180b14ab"],["/tags/地图/index.html","4b4fdeec7d2fa2859e5b11682e5d7d36"],["/tags/增量更新/index.html","7d90e14a670dd2e833818815a58d5b70"],["/tags/安卓源码/index.html","713d7546f19ca85818b3a1a65c308da8"],["/tags/安卓源码/page/2/index.html","6805c9dcad4bff1e10d3b24ac3b261b1"],["/tags/屏幕适配/index.html","84cfb3721dc139c3a88c4c7ea28daa73"],["/tags/序列化/index.html","bac87018206c990b7b49239f4ed99445"],["/tags/开源框架/index.html","05c577d83c373b9c44389209d1e80f91"],["/tags/开源框架/page/2/index.html","7fed614ee0b21398cfa31cacb6df3c54"],["/tags/心情/index.html","d7fa8050a9bccc80ac6dbb4ee19d184c"],["/tags/新浪SAE/index.html","a633645174e25b3fc7300eff3fcd3851"],["/tags/日期格式化/index.html","35ecd2374fd121df46984d6517acd6c9"],["/tags/正则表达式/index.html","4fb365d6b4960061d012645299f4b179"],["/tags/电影/index.html","59c5fd8364cea7b6d262f5803da65868"],["/tags/线程切换/index.html","543ffebef687df4fbd9e1795f2a7b552"],["/tags/网盘资源/index.html","1b229d8f46b071a175e69868e9963d99"],["/tags/职业发展/index.html","608cb2de51379626e22d653d7de8f60b"],["/tags/职业生涯/index.html","0ab6a33c4e6c527941d3aa76217601f5"],["/tags/设计模式/index.html","a172dd077060efa6412e8076a9147e4c"],["/tags/评论插件/index.html","bd2fb5679c47bc7fbcdb5f0dc40da533"],["/tags/购房/index.html","820f406d531faed9ac8148f27a16629c"],["/tags/跳槽/index.html","1bdb1982aa66a70f87dd1119768e5374"],["/tags/面试/index.html","c23a20d1961a33638c9c7786d31d6a2a"]];
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
