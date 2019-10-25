/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","7ab800482c0054f45491f5f91107fd9e"],["/2014/04/27/Hello-Hexo/index.html","f38e5e8426c64dc122a38720f0d0b553"],["/2014/05/07/001-RegEx/index.html","15899f701af7128da2ecfc6df7a4b789"],["/2014/05/08/002-DateFormat/index.html","658890eb7cf4ce503e0cbec3dfc7ecc2"],["/2014/05/27/003-c-Linq/index.html","f377fde6f69e15f690ed35691cc54f6b"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","bdcc3f9f532aadc2f4efd5e34569458d"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","d82d09dce9c8057812aaa28a2719ff91"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","2ec2272ffa202b0658b07129dff18960"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","f0cb49b0f32dc744cae0a89e034b0744"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","ce90df11a8c8e8e474c0ab006760c0bf"],["/2014/08/24/mongodb在windows下安装教程/index.html","72c87d3f3b897915da0e44b1e4f4d40f"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","3b874818e1ee4bf359b0f257a33cab6a"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","f397f96fb8d193379ca76bbe846b469a"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","2f23f4578bfa393334d80eb7ede5bb74"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","433438494434bc3607c371bfadb4e313"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","0dbb4422537f416c7e18360ca8a94b66"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","3d17312820aa6e67acb9772960fec37b"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","cc686e74b277349790f304a4f67307dc"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","52ca1fb31bd65e943539cbecafaba05f"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","3e7232e667c2ba729145b4440e45ed43"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","cb5a629765dd8ced78708abdc577ba0c"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","eb5eb1f7589ba5aa00f495d0aeb79bb4"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","30b7e769a48b170c0a641f54951926eb"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","bba69f78706550013d8b2a67d0552882"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","341a2cbc1ca8203541632df415e5803f"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","1d337808f927acee86e2f45a902f2fa8"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","e4b33d0692408f7e6ca40c40ef20b382"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","3031d63e0c8de3c38208de59aa66586c"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","5575ed619321ca5f883e2bd1deed1ef0"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","9f56fd806c8a86b0fd5da0cd39c73733"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","4eeb8a016a642cb0609a03e2151b03be"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","8221d9af6605bcddee31c27d2f28c76e"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","7089c15778cd23e3927110b2af0256b1"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","80904f5c402064f81dd4e9b4aebabe50"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","a6a3d0468debb8060684e6dc2415c93a"],["/2018/05/13/四大组件-二-Service使用/index.html","8a5109f17f6cd82f451afe8ffda263cf"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","c7894a0b4eae5a30dbf2860c31ab198a"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","f85539d811af0ba1edc6700ef70b564c"],["/2018/06/18/Android源码分析一开篇介绍/index.html","ccd5593ae34a812b47d4db428ddf40e1"],["/2018/06/24/Android源码分析三Service启动分析/index.html","bb372c3bf4b8ba665725a6dc7a29bf98"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","40c3646f06dad4a661a153c9f3ad3419"],["/2018/07/01/Java基础面试题汇总/index.html","5682b2b1e1f4bde8d3ec21472e01a5f8"],["/2018/07/06/23种设计模式在Android中的应用/index.html","69f805f23a92db8fe14319e061760287"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","e22b2c3b7fc7f53275115e2b331bd27e"],["/2018/07/07/Android源码分析五Zygote进程/index.html","2681a715d3b6f454723f7cb43ac000ba"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","52fd11eb13e85830ed252132dd22bc94"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","828902abea55c82eea4a2da929c2e3f9"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","7a42d9bcc2f8a753433f2e44060219eb"],["/2018/07/08/Android源码分析九Init启动分析/index.html","b022d0cc73375f502a83444eb815e932"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","a67921667a9ce18a20038432c2efa990"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","f6e4e4a74d2aedfc295fa1a5c636b2e8"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","2d37624152cd98adfe80b3d914190198"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","3ab65c8861ae4648a550e896bee6465f"],["/2018/07/21/AIDL介绍以及简单使用/index.html","dc27e6a634f1a4da4a6d2122004a3229"],["/2018/07/21/ViewPager相关使用/index.html","ef4a2cfb0786f63178d8f5f2010a5ff1"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","478583acdba237bafb7fd78fedaa69f3"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","374ac83675354de28cce02eff5ccda0c"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","499f7ca811b9a0e834c3a69585ad5dc8"],["/2018/07/22/Android进阶学习笔记整理/index.html","5a4e4ad5c296508b6501c34585e3a9d5"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","0d22781770630016cf26be2c46c2a858"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","76d28e01b0990801e623654e2ed6ef08"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","1bd91c18490196d1ce2f7cd6310d41a9"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","707911330b6a0fb7a551884346a5bfa6"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","2518fd0bb88a3c88f9b00e5328708afc"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","064262a68f9ecb93f10b3b647b9d8193"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","d7d3d279d61aa0f6c28f7e247155e158"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","c6c690e5c9b79fd501c4b8400667b3ab"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","a69253fbe92e3b98fe9b47298f51c308"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","141a484709fc2c0fee432e1b42789760"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","fc15ac86d58fb9434c6bf6a28679489e"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","25c37f184aba8ece379fc002392c3300"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","c1ed373f7f9a91202591448a8f412f3d"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","802d337c891c16d0e0e5a611ddd8c725"],["/2018/08/05/Android开源框架系列导读/index.html","ccb48a398d5ff50602adda4081e32dd2"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","f837bc7ae690100f05827cf7c6914822"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","5ce3d7f3f8f58445dbf6d05082cbfe89"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","d54634f00d39bcf21e831de576bc50bd"],["/2019/08/25/Android面试题/index.html","eaf613272441f1c6625a71e641555fdf"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","19db69a59042acf1ee0cef8173d66534"],["/2019/09/22/汉尼拔电影观后感/index.html","7b35e6ee21930f921462bd54b40b1acb"],["/2019/09/28/Kotlin与java对比/index.html","67d6540453385ab04801594784643086"],["/2019/09/28/巴比龙电影观后感/index.html","aab62695debde5a7c4e9ac4df7928ca2"],["/2019/09/30/mac搭建hexo环境/index.html","aee785e91146c0e86c764f959875fa9a"],["/2019/10/01/关于职业生涯的想法/index.html","5c0e44bbff45c1088e39e63a3909619e"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","b7860363c236ca845e31bbd89b1f7eac"],["/2019/10/03/AndroidView绘制流程/index.html","338b64f7e08909bf3faa6bbbe928b8e6"],["/2019/10/03/Android屏幕适配/index.html","90df0d7525fd505ef6d27b995a1a5d89"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","6642ef20a4c481a899b6139f4a897dd9"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","5e0e19790d7a5296835c3f6e85f557bd"],["/2019/10/13/谈谈逛博客的小习惯/index.html","f54b36b83e632c54f0dfa32b42dcab10"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","a43647f70b9a7f3de69a96ef7953b709"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","67498a7f25fe4682d7fb661a9171e6e7"],["/2019/10/19/关于程序员的第二职业/index.html","22c99579acad2c39edf9d14de15498d1"],["/2019/10/20/一次车被刮蹭的经历/index.html","779f90694b3181c63aef47df1af1670a"],["/2019/10/20/第一次买房经历/index.html","bedefc044cee27d896b3064f16937cfc"],["/2019/10/26/kotlin之Lambda表达式/index.html","3b18980b119370eb046f35df2edf5304"],["/PY.html","1ab5349505fe6697ce0058c0f4e274d7"],["/about/index.html","45f663a0152e49afbd5960dd4dc1aeff"],["/archives/2014/04/index.html","1860d0fb01ee306ee76a0b76c0af8191"],["/archives/2014/05/index.html","c94b5b45c55cfc93b522941b17ac197a"],["/archives/2014/07/index.html","fcaa63fe088ec2714a0095fa1d8c1a6a"],["/archives/2014/08/index.html","705556da89d7a1e1fcbffc162242d458"],["/archives/2014/09/index.html","87e11d28a13e7106ee6165bdcfc5c8c4"],["/archives/2014/11/index.html","7f21189fb38cf3c162c15112bfdf7875"],["/archives/2014/12/index.html","13b7b391b2067ab44736ed8aa4ae699f"],["/archives/2014/index.html","25ce55d07828aadfe2376fd00a158071"],["/archives/2014/page/2/index.html","19502d36afb344c833ac2b69cb526286"],["/archives/2014/page/3/index.html","b602ea91dcfb14aa24b9ddab4509b66b"],["/archives/2015/04/index.html","e7afde936a99a13a54ad53b34bf1717e"],["/archives/2015/06/index.html","dfe3c114b601a6dbaba7364218726da4"],["/archives/2015/11/index.html","741f7b4c1c55cac1717f185e751e45e6"],["/archives/2015/index.html","c761286dc4ad05b236c1f4fc45d8680d"],["/archives/2016/08/index.html","88d6d10dedfc433d230284b736301130"],["/archives/2016/index.html","f3cfff8c3d18950ebc6a31bdb76f454c"],["/archives/2018/04/index.html","a3b632f41eba27eae8dd2dfa4b0f2053"],["/archives/2018/05/index.html","2efdaf646543657df3bab7b1f42066fc"],["/archives/2018/06/index.html","5792c02c3a0b2931bad137941576629b"],["/archives/2018/07/index.html","238fea95812ab61619a8ffb91fecd474"],["/archives/2018/07/page/2/index.html","7f3c63d2e087ef75d4a18302bcce60f7"],["/archives/2018/07/page/3/index.html","10e9981f552fd2f09c6922eba9b9aad5"],["/archives/2018/08/index.html","693b9ac028cb187272d5950a04db3f2b"],["/archives/2018/08/page/2/index.html","7736f81b8c75480d387f96fcd39cb048"],["/archives/2018/index.html","29f8b9b9b54b67b0c589ae2b7abccbb6"],["/archives/2018/page/2/index.html","a391e2301c42b7b280eb6ee52eb2ad15"],["/archives/2018/page/3/index.html","5b620e564bead6dde5fd0f081624d3fd"],["/archives/2018/page/4/index.html","12a6ccc30805a8136c5543b58704f2a6"],["/archives/2018/page/5/index.html","509559fff4a214cc5e8c7aae3f28edd5"],["/archives/2019/08/index.html","bb4816a1a7802be1352cf2825af8fdd6"],["/archives/2019/09/index.html","d6ba9383198a2b19d96f256ecfe94b18"],["/archives/2019/10/index.html","33ae8812c6a67bf983f4b41e21866122"],["/archives/2019/10/page/2/index.html","34cb9a8215db989b1f3ef13ff354179c"],["/archives/2019/index.html","2d81c806245b023ed1ed266d68affa70"],["/archives/2019/page/2/index.html","a439a72d237f0101c3e8e32f0f16b5b6"],["/archives/index.html","9589ff42ad2e57db827577163327d265"],["/archives/page/10/index.html","a5cd13b7fef7a46102f3740e697a1e90"],["/archives/page/2/index.html","717d1efd1f14b2a095f8a4dab457f0e5"],["/archives/page/3/index.html","2953234d9725d9b69a395f7cfb735788"],["/archives/page/4/index.html","a6668fdde4a734c4b7f3ea11029f48fd"],["/archives/page/5/index.html","90b57d423a9f0aab9015551a1633689f"],["/archives/page/6/index.html","b100670a3a3bf4a3daa50483b10f6fc2"],["/archives/page/7/index.html","b492fc5a286c4389335d2f4187c2ab68"],["/archives/page/8/index.html","b37644765cb53b3bc54267c47711fe81"],["/archives/page/9/index.html","3df9a1e7c254ec92f836341c65c7e26f"],["/categories/Android/index.html","c3e34fb8921ee7032822f3924c6c5c7c"],["/categories/Android/kotlin/index.html","23e82f94f99683739ec10a0142c33156"],["/categories/Android/page/2/index.html","0db18f147b4cc3a646f59c6998bff375"],["/categories/Android/page/3/index.html","30528fe6378a255e2424d3b5a88df5d1"],["/categories/Android/page/4/index.html","571d00bf2b199ab37a9d02c827a19950"],["/categories/Android/page/5/index.html","c3e9ecb987302189bf73ba4cffff78d3"],["/categories/Android/page/6/index.html","a466afe7ab75e42a77675880c01a9228"],["/categories/Android/安卓源码/index.html","ddd3ad1ed185683bde973645c4bc3a32"],["/categories/Android/安卓源码/page/2/index.html","a3586c0680bec6fb98cb06fddcf763f9"],["/categories/Android/开源框架/index.html","41f26b6828b793d3e234ff29c487172d"],["/categories/Android/开源框架/page/2/index.html","b1bed30d054cf1f2c7a7336f2e5b57e8"],["/categories/Android/知识点/index.html","789dc1d58bcf9a643369195fa7e9b44d"],["/categories/Android/知识点/page/2/index.html","c9f9052c08b85bc7ef8e55c523e3308c"],["/categories/GitHub/index.html","ebd3729803eb0610e050744cc37fcb58"],["/categories/前端/index.html","92e5ff57d1db3a4135016b5d2ddde366"],["/categories/后端/CSharp/index.html","43e09b9a05446d41713e7f8c72b19eb2"],["/categories/后端/CSharp/page/2/index.html","3163fda250cefc9d6fe9e7387712c791"],["/categories/后端/JAVA/index.html","65ffc404cf065648268bd31925ae413a"],["/categories/后端/PHP/index.html","ea7fe2c115e576f24f152cea5a4d0b08"],["/categories/后端/index.html","02bc0239813e8cab8bf26657d81320ee"],["/categories/后端/page/2/index.html","112729980fadd450311f0b720a074917"],["/categories/后端/page/3/index.html","f86bcecf90ed80b6b73583a8ca930570"],["/categories/心情/index.html","8a76e22933d3584cd84cae48aee4977b"],["/categories/心情/page/2/index.html","997774dea5027e5c6a6ccc0903f14b3a"],["/categories/设计模式/index.html","1164216e6d9afd4cb10b664b9fd99574"],["/comment/index.html","70a12650ba92ce2c4d4a1029eea9c115"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","4a90b4ea0fe09a091d3d0a5395f7c809"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","d1d50dffcc61dff1b1f6e5a6fa129a0e"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/page/10/index.html","15da85e7dcfcf2844f21b8c8bdb96562"],["/page/2/index.html","4fb6194a6879a176245b1db27ce365da"],["/page/3/index.html","3d04a01475a435698a993bb0905016bc"],["/page/4/index.html","007196c788b1a96811d1db1890309a47"],["/page/5/index.html","e07dcec1688604fdb7bbd55d1a54c985"],["/page/6/index.html","feb58620d2f4f49574cbda528c072b60"],["/page/7/index.html","b3e978e946000184168e17ef0b79202a"],["/page/8/index.html","3ca9cc867ada8bb826c53f0b558085b2"],["/page/9/index.html","31902916e6b575ae4801b76fa2f5081e"],["/photos/index.html","ba00e22b85ccf40df85e15e27a8e1a84"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","100a7a5cf7b11c34be905ddc65baabbd"],["/tags/AIDL/index.html","036140967cc62159166cf962ad4a764d"],["/tags/Activity/index.html","09fd961181ec4fa8f6c5f4f907ae7344"],["/tags/Android/index.html","a48080c7dc7a4a2388e483299ba95b00"],["/tags/Android7-0/index.html","2f1c5b2ce30761f88ea86c5cfa8f9a17"],["/tags/BroadcastReceiver/index.html","f0704ecc00d4ea36ffa50210b3aa7b66"],["/tags/C-文件上传/index.html","91554be9282bf57abfc08162ea7707c7"],["/tags/ContentProvider/index.html","3e930cf1a22ba9997bf2f055454ca8c5"],["/tags/Excel操作/index.html","129e91ec4f6e9764fa43239b9f0df40e"],["/tags/GitHub/index.html","0c61f500b697b0525eb34d0277c090b1"],["/tags/IIS/index.html","bc984d53d251dd48fcb9336fe7cc0965"],["/tags/LNMP/index.html","1cd0a40628401be1d3eb1757daf57653"],["/tags/Linq/index.html","435e4092ddf303550d51e10e69e297a9"],["/tags/MAMP/index.html","21ec961c73d5508acfcdac381577c175"],["/tags/Service/index.html","67164b7cc361dfa84545efa23cd91e91"],["/tags/SqlServer/index.html","5fc9973783f6f802fca4853d848abaf2"],["/tags/ViewPager/index.html","bef127d4a26a10fe56d28be698da7b9f"],["/tags/XMLHttpRequest/index.html","f0102e2c75bfbe85f376df351b1b1600"],["/tags/c/index.html","39b8294e0e73111393618e9a6ff82fec"],["/tags/coroutine协程/index.html","13895ea77e0535dbc6ad2c6b7ef56b0f"],["/tags/easyui/index.html","09f74d22821f4f2bb3c1768fc1ae90f3"],["/tags/fiddler/index.html","d1b66fb0c72c48bb8489bf68b102df41"],["/tags/hexo/index.html","47a607cefb866c04b55dd3e6d43f0521"],["/tags/kotlin/index.html","22883f6cb801ea12fbde4885fcc5c4c4"],["/tags/mongodb/index.html","77427082cc269d96d3bf61a6f0b9e2cf"],["/tags/mono-for-Android/index.html","f8c82dcc479d15aff7ca8cb49e6cdf39"],["/tags/nodejs/index.html","8933da397603001c2d0d4015c098b0fd"],["/tags/php/index.html","73014caa8ad819e6cf142581981593a5"],["/tags/view绘制/index.html","561b30e967b37ea97b0cffc53649eaaf"],["/tags/visualStudio/index.html","5ef7d0fa3efa920af60c73febccc3909"],["/tags/习惯/index.html","bc89534f3fe30528dac385e3ca45ae83"],["/tags/京东云擎/index.html","1deebfde995de50994fd0eb3f9c782fd"],["/tags/公众号/index.html","dd2ef48a28f68e128edf6e87b9f5493e"],["/tags/副业/index.html","df0495e52089f84be97292bdd2d65e1f"],["/tags/图片保存/index.html","2349c0f507fb58944fd4e554e1416e43"],["/tags/地图/index.html","d695a13e21043d0e47fb2d3394542635"],["/tags/增量更新/index.html","dba7dbee3b3c8ef3fea27de02ad23ecb"],["/tags/安卓源码/index.html","fd938de96ec6685e4fd7538d4fe6aaab"],["/tags/安卓源码/page/2/index.html","60ae6129b7003cfcef8fdddf1948f8cd"],["/tags/屏幕适配/index.html","8f14f16171b26af28a5fa7e52a317607"],["/tags/序列化/index.html","8d6ef0e72c910a366ba871fe5b4dda80"],["/tags/开源框架/index.html","3dca32207752ef38430270d8d5ae7c3e"],["/tags/开源框架/page/2/index.html","bd3a5c296f88f800c98f8e0a9f270265"],["/tags/心情/index.html","276b5711de68ae9124ee45eb57c489a5"],["/tags/新浪SAE/index.html","5330dc7d18e4c6c51130023b47d2107b"],["/tags/日期格式化/index.html","134ddeeb16b95a2788a12d5ba9fdde5a"],["/tags/正则表达式/index.html","17655f2b30d6bcc999390b9b8cfa323f"],["/tags/电影/index.html","9ce885ec0e7f3464d09c5ee039f3757d"],["/tags/线程切换/index.html","29e5047b758ab577e2d476a6e0b998f8"],["/tags/职业发展/index.html","c9693a4f643f626c38a94694ddeb6bee"],["/tags/职业生涯/index.html","0ef089c37a0e4498dcf05760f5d112ba"],["/tags/设计模式/index.html","9311986f3a610526c517a4c3a8837f16"],["/tags/评论插件/index.html","cd3124bea7fd251344ae32b281acd1af"],["/tags/购房/index.html","f11c4bd488010e27070bad44053db192"],["/tags/跳槽/index.html","683c9d4dbd9d398fe78034af86d4a65d"],["/tags/面试/index.html","db3fb95058a3b33bb1ad8ef6c6f846b4"]];
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
