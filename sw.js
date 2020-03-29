/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","c7a47c31b2391916b3443465ccf1d58a"],["/2014/04/27/Hello-Hexo/index.html","c7831cc8ceddf773cd84c82529462209"],["/2014/05/07/001-RegEx/index.html","faa66c3036a9ce492b802d7eb1276b60"],["/2014/05/08/002-DateFormat/index.html","e2c23969dd6d22658f81576464c75266"],["/2014/05/27/003-c-Linq/index.html","233f985a88a15e265bafa945469b162e"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","2b6cf01cc4991134bd90dd3d0b09ad3c"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","103ae3fb21570f5051669efa03324cad"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","adbec265070c4fb0449de4629414759c"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","adf4503bdced98179dbafe1093745e2b"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","61d415f82071ee2bf4711164cb02c458"],["/2014/08/24/mongodb在windows下安装教程/index.html","40b9348ad73de22688240c648937475e"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","39de7daa5d66eb66b89e12562239d066"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","3ef76a0de57d74067bcdd9075a91f4e8"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","59f5d07d2e6fa94ad08de824935e5c7b"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","c1ed03e9b0d214167b600df33abcb4d4"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","31ab0c911c6df7a174b2a8bf6ce54518"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","0ca74bea1c4bb13bbe16d3c3b855ac39"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","5459dce6271115e8143db7005bc30c20"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","62331cb7ea79f7b335f2f6cf636a3e12"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","cc60eda81275248dc4cd147b4fd7765e"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","e88d59c6c2935fcd53be5953a5e5191e"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","6e9c4c5077335b906485ce38fa4b4e7f"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","de660d3d17dfa16b682087e3f8f1d60c"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","fe8875e016eb460cc820ad4092e0af72"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","a08bc8a4b4d0d96dd3ec9cd19f90cc52"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","6f6770cc82a37cf606201f8c9f8c518d"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","bde0e2986ec003cdfc1a7634e5b4eaa1"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","11844bb69a0ebb6f4061a5a06fd87a52"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","ec9198556ad6bf19d3ce8c8c66eb4a7f"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","283027ee33145be161a84644807d6bf3"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","457dfea56cde8363ba50f888944316ef"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","15544ec2acb88de44f6f89d01dbe1016"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","8efa20e0fd05a75f91e0a22ffbaffa2e"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","9bdc5e429a545defc1a1c0bc24969c13"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","bd344b733b46baffdd4ec37cec35914a"],["/2018/05/13/四大组件-二-Service使用/index.html","ac990f2711f7dd46d5f0a47b6e384737"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","929a0d9f7d080d3d0a4514d70459b207"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","70e505715a204e1d24d0c66b8f42d24e"],["/2018/06/18/Android源码分析一开篇介绍/index.html","2705e34269fb3b71c400391d537b4e02"],["/2018/06/24/Android源码分析三Service启动分析/index.html","ea37245a0934c6270173a815d5600d50"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","e49704ff933fae87b108ed1f3ba4dc0c"],["/2018/07/01/Java基础面试题汇总/index.html","da681b850a28d39c7f4d1a8306f24063"],["/2018/07/06/23种设计模式在Android中的应用/index.html","639564f0460dfd9bbf076282b417cecd"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","5058101334ddf65d02c6c46e947fdf4c"],["/2018/07/07/Android源码分析五Zygote进程/index.html","ba9127164e228140a459273379ef718d"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","9265cfacca51f36c14a3ff8ce76ebf48"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","47351123e08225c79023188761e38ca8"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","8c58beb9cd5bb8b4d3c1f59995af1024"],["/2018/07/08/Android源码分析九Init启动分析/index.html","38435735845f646c4c24ae8a5abbb49e"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","e34bd75388bb99424b022a987b1366a9"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","1edc6e5dd7f3fec39200747c99b1150e"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","0da1bec0ec7f1e3f8a81e8e9abd5502f"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","905aece4de9ef19edf24dc3e1261c969"],["/2018/07/21/AIDL介绍以及简单使用/index.html","57cabc7c481b1d815357e2eea12618b5"],["/2018/07/21/ViewPager相关使用/index.html","257c562a77421f014a94fcf014a9d232"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","d844dba3a8454ed08525538855cb723c"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","35a3f661869676c16958a8a410a3547f"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","4420cc97340b37ae4d6ae95ecffc8eca"],["/2018/07/22/Android进阶学习笔记整理/index.html","1431bdd8a1f40932e60dbf9f8d8c8f3d"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","5c20bcf0cec18d65a5ffe2963a91c8a5"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","b9b868e2a4b57e33c653afa6e067dc22"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","486b8da786c9fecc4a7a13a1c7dc694f"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","e7779a4dde9c38feb6c7b37fca80fb8e"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","a0993cb6b28243148ef77ec3f3a9a2d5"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","45ca3d5df941219cc48b725f41d80cdc"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","c04f9a9601cae6c36a04f02266869fb8"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","34733275358719e4f516f5c432c5be94"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","b4a562228267ad4179b17a39d9b89324"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","42c914da86422441959c076b001d4bb7"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","9eba0c1e96d2f9d3b67816083aa788f7"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","95fcdd0285b441e68322259a5ae415c1"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","f0e85e23f4191c86cea3a895fc2b84b9"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","716779139ad3b064d22b05f5cd0f8edc"],["/2018/08/05/Android开源框架系列导读/index.html","4b27032754d5a83c9f37472f40ae3749"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","3612dbc8f34eb140466f17cac44538d9"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","0457ca534e80a317ff042d54a580c1ad"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","29f291fd74fdbe8821c458aed5eb23a9"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","e4ecd85924d6589b7d6220e50f29ab23"],["/2019/01/01/Jetpack之LiveData介绍/index.html","685b4d4da80971ca8101ab8d9a2ec5ad"],["/2019/01/01/Jetpack之Paging介绍/index.html","3d71088f3adf229887e7ef6f34084fa1"],["/2019/01/01/Jetpack之Room介绍/index.html","afcd1c83bc0d0b7709236aaa7f4bd7c7"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","0c27d3ad9672113d79e6eee18c975cf1"],["/2019/08/25/Android面试题/index.html","40e36082fe4ed8e2d108378de8b8b113"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","9915f273e8dd79de9f1a29d4cd4f1018"],["/2019/09/22/汉尼拔电影观后感/index.html","a7d8da893815419ec3db84c7b179d824"],["/2019/09/28/Kotlin与java对比/index.html","9c7d720316b56a15df5522212eb462bf"],["/2019/09/28/巴比龙电影观后感/index.html","05abf3fddb7eb1859b0b76cb573cc8c8"],["/2019/09/30/mac搭建hexo环境/index.html","50ed96c236ee2820000b0024deb81104"],["/2019/10/01/关于职业生涯的想法/index.html","a56b42376757a7d1634365ea8a4f0b44"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","1c6bef95dfc07775da0e146f5cfd0d2e"],["/2019/10/03/AndroidView绘制流程/index.html","552066cf6d4192eb4afb7aee88fe891f"],["/2019/10/03/Android屏幕适配/index.html","da87495b5b223a1b97b7e7e8f16efed3"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","8037f954ba673e5764c610a0511cc355"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","b0c17e8688e7bb6a7af5e95879f98909"],["/2019/10/13/谈谈逛博客的小习惯/index.html","ff2cc527fcde3d452131781e032b1383"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","96fb31c39dca65d3c46c2c81f5224e44"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","1e313e2f2468097a5a01910c11e73dff"],["/2019/10/19/关于程序员的第二职业/index.html","e1c38c51f9124409300baf5f8a5b1916"],["/2019/10/20/一次车被刮蹭的经历/index.html","9940d31747a9a9500e4ee203baa04326"],["/2019/10/20/第一次买房经历/index.html","ec32d113f400ba0fcef82c93daa6e172"],["/2019/10/26/kotlin之Lambda表达式/index.html","2bbb163a1d0364b0316bd1e2293af5e6"],["/2019/10/26/收藏网络资源分享/index.html","6b2330cc7c7bc57607e1049059c94ee8"],["/2019/11/01/Android之Jetpack简介/index.html","efff50b210230f15e68a77519c58d995"],["/2019/11/01/Jetpack之Androidx介绍/index.html","341dfc70b54e2be6fc03476bf0560dd8"],["/2019/11/02/初识区块链/index.html","6c45db75483ff85091b273f4887bf705"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","a0a62fdb4a343b4953794e734d04975d"],["/2020/02/10/2020开年的一些感想/index.html","6ebc795bccbab5198fc25812aa1bda0a"],["/2020/02/21/Android-8-servicee保活实现/index.html","2ea4e750b2eaeb4637446fd51257998f"],["/2020/03/29/美股熔断与美联储救市/index.html","208c8ae135368cbae01a32c9b2c264b4"],["/PY.html","97b74c07c3e348047bf0db9428ed2e48"],["/about/index.html","a3e5a15e667d142d2e6b989654dff344"],["/archives/2014/04/index.html","e8e9daabbbee292a039b60054c7180d5"],["/archives/2014/05/index.html","5aa85c34537f1fbf013ab7be408fa68a"],["/archives/2014/07/index.html","7fe44b3893cdfd73194c802c376ce22e"],["/archives/2014/08/index.html","e5a9d45427acc5d29ccae21f8b8f7c4c"],["/archives/2014/09/index.html","217c044b7d2e3cc80a9c16320cd63067"],["/archives/2014/11/index.html","4b0f374543bb5f50aff7e86d9bed57b5"],["/archives/2014/12/index.html","e8cf114242305206b9368a23fd59eab0"],["/archives/2014/index.html","8a501a9cbc406849f78ae37f5493fd8b"],["/archives/2014/page/2/index.html","ae364c0b8bd4098648f9e4f34cb47bef"],["/archives/2014/page/3/index.html","03289f270d4aa221163af20c900bb2ff"],["/archives/2015/04/index.html","ebdf2a52a97dde0e7685fb3f512d23d1"],["/archives/2015/06/index.html","870cb30973ade08117173a6a2d6af8fa"],["/archives/2015/11/index.html","76b420366d57cf21d5afc9e406ea7846"],["/archives/2015/index.html","a485d449df5f5e9e39c7dae5d1d9a1b7"],["/archives/2016/08/index.html","75384f05f6064428dde36a6932262848"],["/archives/2016/index.html","cc3befee54e1523d127160fb22826a3f"],["/archives/2018/04/index.html","7784dfa05c30c990029db1c448872d2b"],["/archives/2018/05/index.html","dc56fe645dcb78fbcfcfdf08228c14c8"],["/archives/2018/06/index.html","e8628a616cec3543b6ce697da2518d74"],["/archives/2018/07/index.html","aed545d1acab588d8a19276c53b71df6"],["/archives/2018/07/page/2/index.html","35882343bfade9598d86712be9eb1c79"],["/archives/2018/07/page/3/index.html","00ff4a48b475e99f29438451c6e7421f"],["/archives/2018/08/index.html","d900d92713fa456850c01ee465042196"],["/archives/2018/08/page/2/index.html","6d2442a45b59da07649c3e9cbfc16144"],["/archives/2018/index.html","3e734fb86c24ecdf30686b586bbff226"],["/archives/2018/page/2/index.html","5e55d1ba0fbc7363d2990537877da65e"],["/archives/2018/page/3/index.html","9b778f189d20013ceee36d0b475b68d1"],["/archives/2018/page/4/index.html","04ba6c686b165f813546ef3aa1448ad4"],["/archives/2018/page/5/index.html","be4d229deb352d7d0aeccb433a91e76c"],["/archives/2019/01/index.html","88c0583b709418e6ea9c40041eabb0bf"],["/archives/2019/08/index.html","83a061201297d90f72177968657f2851"],["/archives/2019/09/index.html","1add699de4c4c4e65397568664915ace"],["/archives/2019/10/index.html","34707d073969bf460a2bddd769489ba8"],["/archives/2019/10/page/2/index.html","4c8d97216448a2840c0c640d3ca6f2a5"],["/archives/2019/11/index.html","ddfdead1ba52cb2f680401900651e25a"],["/archives/2019/index.html","e3e3dc54294d1556555e306021863759"],["/archives/2019/page/2/index.html","ab70db0fed6a8a6f78172c748b9eae76"],["/archives/2019/page/3/index.html","d0acffc7812a9d37934018661ba0d066"],["/archives/2020/02/index.html","517858d5a749e905db6f32861743162d"],["/archives/2020/03/index.html","e415ad31d99861da2659b0222b55a21c"],["/archives/2020/index.html","349e72eb3eaefc8cc9830c1fec7a316d"],["/archives/index.html","675f0abf46827a88e2a938cb1f646604"],["/archives/page/10/index.html","89456d233146f09034fdf3ba69e16ae4"],["/archives/page/11/index.html","095d3b03820fd256f2bfedc8fb59c506"],["/archives/page/2/index.html","94fbae2ecd2a2b884bf517afdeed491a"],["/archives/page/3/index.html","d65ace952c95528756b0ab667b9d87d5"],["/archives/page/4/index.html","4826aa450104e27ebb5e36bdaadd37a0"],["/archives/page/5/index.html","b72db5857fd8be7a4537eb2ab0272abc"],["/archives/page/6/index.html","18a75b5cbea3b69bd87802e03f2d3aa7"],["/archives/page/7/index.html","e97315ed2301d897cb707595c9ce57a2"],["/archives/page/8/index.html","374602b6c865ad9673d926a36f22f33f"],["/archives/page/9/index.html","899f7f48c113b12bd70f1091b4d5c0fd"],["/categories/Android/index.html","f87f3f91fe2b3ac7e928f839f98e57e6"],["/categories/Android/kotlin/index.html","8d318004a5e16239f823567e0d962447"],["/categories/Android/page/2/index.html","e84321a6a85a610357efb02133bc4170"],["/categories/Android/page/3/index.html","6566c325456fea7a8fe6d5f674b4bc50"],["/categories/Android/page/4/index.html","e128769b6ec9ab344c77825fb2fa66d5"],["/categories/Android/page/5/index.html","a1f1bcd324fd53955bdf541d22c8b236"],["/categories/Android/page/6/index.html","86a076660d4f241d9b93c337c1a2dfde"],["/categories/Android/安卓源码/index.html","db78b14374875b87c9e937b614b17447"],["/categories/Android/安卓源码/page/2/index.html","833019f15179aa3f38e070487cefe177"],["/categories/Android/开源框架/index.html","1fe6d65c6ddc51291d581ede1d7e3f8c"],["/categories/Android/开源框架/page/2/index.html","9c908437b46407b5497423862dde1d1f"],["/categories/Android/知识点/index.html","095a14473d1b02012fb01404499a662a"],["/categories/Android/知识点/page/2/index.html","cc324e4ea6977048c1ecc9cbe3b18dd2"],["/categories/GitHub/index.html","31cfa98fb6602a63584225fc27cfb8eb"],["/categories/Jetpack/Androidx/index.html","eb595816638c589202fcdd0b8944b61b"],["/categories/Jetpack/Lifecycles/index.html","0f67c374ce8331c878a6aa98463957ff"],["/categories/Jetpack/LiveData/index.html","cdd76030d06d7d735540ade787e57701"],["/categories/Jetpack/Paging/index.html","3dd520bc4f1b1d1d937a19f5bbfc25f8"],["/categories/Jetpack/Room/index.html","724c0ddc2e94b3c2b2869f89aec416ed"],["/categories/Jetpack/ViewModel/index.html","af8b1d93a92dd2561b99ae178642913e"],["/categories/Jetpack/index.html","1e9f051f2184b84524f49c82ada3eb99"],["/categories/前端/index.html","2276ca64d3a96102eef4ed19368bbf7f"],["/categories/后端/CSharp/index.html","ea117edb400cf13c7b4cab60c52b4012"],["/categories/后端/CSharp/page/2/index.html","2369ff168824a372726f727e75a0b3a4"],["/categories/后端/JAVA/index.html","c0bf0250c4d61274052e20fdb3091633"],["/categories/后端/PHP/index.html","c47e5e67407398d858fd1c0f13b1102e"],["/categories/后端/index.html","13431ed4ca0a05df84f2459ebe18d389"],["/categories/后端/page/2/index.html","623eacea83ada94501f4906ad54dd2e6"],["/categories/后端/page/3/index.html","ada8988f779822e52c8a1de3b8363bb9"],["/categories/心情/index.html","2605dd42eec35a351f132b921f4dbafb"],["/categories/心情/page/2/index.html","00bc50ba9d26a5415d1a389d88454197"],["/categories/知识点/index.html","b43fb3d48a4851e115e4cf50f35d9ddc"],["/categories/设计模式/index.html","13b60f3be9238c9dc401ac394508c38f"],["/comment/index.html","317dd23bf03d9621bc62ca3eefc2b33f"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/2020kainian_1.jpg","d5a1f523c46fe05f38925a43528ae2d0"],["/images/2020kainian_2.png","21dfdf99770d6e946a7db90ab6ef31f0"],["/images/2020kainian_3.png","849a98ea3181c0a13284f149be3b37f7"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/guiao_baoweier.jpg","320f8a9d9a0fb5c83306fdcf993a766d"],["/images/gupiao_jianzhenglishi.png","e2d54b4036a56ea99dd358d6e231008c"],["/images/gupiao_rongduan.png","b83d1044c5352216034ddc06993da0d9"],["/images/gupiao_shangzheng.png","06db8ba1c4edb6e22d3003d0ab55f437"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","780e5b74f0499ceaa33aa4beec8139a0"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","79eee8d23bea15bc1acc9a045a3b3b8a"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","a390993fe6b561157b619c0758bd7a67"],["/page/11/index.html","30ee89c8121f38b8feda3ef736e8c7b9"],["/page/2/index.html","c3de21497bf1a0261760f6be8cef2ea2"],["/page/3/index.html","0835ea4caf7921e0ad518459f74f20b6"],["/page/4/index.html","68a3649a506f11a6ac41e5920857bc83"],["/page/5/index.html","4f89f78563f10f183e9b18cd79a82382"],["/page/6/index.html","620beeee31f87b9574ad68483fc6408e"],["/page/7/index.html","d7d73031b06ae90af33e8d0f64262c05"],["/page/8/index.html","303baf319ccda12120d6ca48a5242a91"],["/page/9/index.html","ad578dfd56c0c018585df44c40751e13"],["/photos/index.html","f31a731848238c44e4f37e8aa9ee2e5b"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","5a65ecfa58aa1b37f8da3d8403e15e09"],["/tags/AIDL/index.html","f4549663325338007308e57e4aecaf68"],["/tags/Activity/index.html","f7da57e5c247da6d6f1db890b1d72e0f"],["/tags/Android/index.html","83bdefdaa4dd86b943dd8b6469b1cf46"],["/tags/Android7-0/index.html","7eb1a2d26fcd4de542abe37faf900e46"],["/tags/Androidx/index.html","aeec89fc1d3d46bef973f004c65faf36"],["/tags/BroadcastReceiver/index.html","bd38da43b88a208e70d120fec6acb760"],["/tags/C-文件上传/index.html","0139391ab4845422815026303450b725"],["/tags/ContentProvider/index.html","572c48f2a21e99046a364108ee5bf763"],["/tags/Excel操作/index.html","8329d9f689b14b20835c65050a2a47a3"],["/tags/GitHub/index.html","c2e709a203a192808509dcfd49d7258c"],["/tags/IIS/index.html","20cd9d537d2a45a21c6cb6f9720abda1"],["/tags/JPush/index.html","5fe62882576002d017cd8f21981b66b5"],["/tags/Jetpack/index.html","4b4e6463772d1cb13ce6eac24d049d87"],["/tags/LNMP/index.html","6d7096548c5a91995d38bf74b80973be"],["/tags/Lifecycles/index.html","4eee826fa6a5ff3f796cb934e472e008"],["/tags/Linq/index.html","403770e6610cda13ef10514f9e302d8b"],["/tags/LiveData/index.html","3cff23f12107de0bf280cde9d9d2fde8"],["/tags/MAMP/index.html","1057d075611dcdde34c22612dc5ff357"],["/tags/Paging/index.html","14e64ef428f5f38fb228c5518369e66e"],["/tags/Room/index.html","e88c2474f2ca89269097d96128b8e085"],["/tags/Service/index.html","29d03e99381a137aadbb6e6cb05317a0"],["/tags/SqlServer/index.html","83d4becfb4481b6840027560dfa34794"],["/tags/ViewModel/index.html","feef57a0a8467fdfa6c266e621f6829c"],["/tags/ViewPager/index.html","1d5d3ed44139d13806d4de5632a9a2bc"],["/tags/XMLHttpRequest/index.html","d702e61c29ae17f513dab42a46761fad"],["/tags/c/index.html","e75d1811ee14cebc3d58d67ed4c633a9"],["/tags/coroutine协程/index.html","aa01a6dabf936d8e4607f629b21c8829"],["/tags/easyui/index.html","fdef285ffc1bb46c9a650212c08afbf5"],["/tags/fiddler/index.html","bcd2053f3dec245fd69681880f8e5db4"],["/tags/hexo/index.html","7c94732978981af479d62159dc6602a4"],["/tags/kotlin/index.html","5bee6e801c8afff131271e92cab8626d"],["/tags/mongodb/index.html","45f4f87d49a15a363155405164591dd7"],["/tags/mono-for-Android/index.html","8decae1192f35ca16d0bdc45b17d19d1"],["/tags/nodejs/index.html","f12a444988c5518baf1dcb478773b30b"],["/tags/php/index.html","6e9e4ba540077db38ce11286955d67db"],["/tags/service保活/index.html","fa6b65bb3948290c368b5328fad03251"],["/tags/view绘制/index.html","a434f485ff00c640769ff3f465475c62"],["/tags/visualStudio/index.html","f5e6f82730b6b8440a775a1c20b936e7"],["/tags/习惯/index.html","e9c0fdd56b556ba8f4ac2c712b8fc5e1"],["/tags/京东云擎/index.html","aa171cc2d456752fb19ea327e06e3e55"],["/tags/公众号/index.html","800a89247597d0115f3a6cae77f2cf6c"],["/tags/副业/index.html","406c2f0f0258b5099b16f42ab6b413b0"],["/tags/区块链/index.html","c0e33a2d0fe89f218148a20e94d4e52c"],["/tags/图片保存/index.html","ece701fb99db8de2d6aa30c23ebe19bc"],["/tags/地图/index.html","b584bf3633d376f7a3c3e33829943f53"],["/tags/增量更新/index.html","f8fbcee405d2dfe68df3cfeefc92535e"],["/tags/安卓源码/index.html","80a095aa46c8210e179de88866938ea8"],["/tags/安卓源码/page/2/index.html","c1a153f4b185ae1e04cbae9b71837e9c"],["/tags/屏幕适配/index.html","3d187d4936f0c954853740394c6655a2"],["/tags/序列化/index.html","c65e7984df3e7201ef22d0c9b2523521"],["/tags/开源框架/index.html","0108f7cdd86225562b5b5ac62bf3b354"],["/tags/开源框架/page/2/index.html","d24df7b32a9b3e9c52c93eda905dfb71"],["/tags/心情/index.html","bf7f9af10be250be190e6696cdf86175"],["/tags/新浪SAE/index.html","da42836f9893cce564af596aee1258c0"],["/tags/日期格式化/index.html","2cf3fa9cac85014d39bc2d4a225377b7"],["/tags/正则表达式/index.html","54d17e3f9e3cf990f49e493e2390e8e6"],["/tags/电影/index.html","0901abf25a48d9f5e00a741e6e237262"],["/tags/线程切换/index.html","9d07ea6b9c9374cf016f44d7ed5992b7"],["/tags/网盘资源/index.html","e5afd3fa1ff57bc78216743c480fd2e4"],["/tags/职业发展/index.html","3f8b236b02507262fbf1282a1b19c290"],["/tags/职业生涯/index.html","00f67c4b179d38389daa90a17b1b28b5"],["/tags/股票/index.html","1277fc9ac37847e06db5ceda6350b9ba"],["/tags/设计模式/index.html","1a40f1a7fa14ec2495adbc0061d89d74"],["/tags/评论插件/index.html","09c016d8a301613e04b72c47134fab1a"],["/tags/购房/index.html","cbeb738916143260e4d9bcab75fb232b"],["/tags/跳槽/index.html","692e921f43fb988cfe62df71b5fd367f"],["/tags/面试/index.html","25942a9a007d9e6d6a7aa7333820c9da"]];
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
