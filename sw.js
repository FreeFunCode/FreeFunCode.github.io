/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","0c52112945ea7366a1358e94a6fe402a"],["/2014/04/27/Hello-Hexo/index.html","95999fe790b215fee1b19a2065d775a9"],["/2014/05/07/001-RegEx/index.html","ea50034a853346aae4a2549d758b4aab"],["/2014/05/08/002-DateFormat/index.html","7690b5421e7f0cb4d9782a263aedf0b2"],["/2014/05/27/003-c-Linq/index.html","fe0ecbcd3016b6073474d9dc22fdbaef"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","bae9f7d201709b333cb0e0a95bfa739b"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","3472719f24c30c765191154c39ba6f8b"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","39f0cb4def0531ba9b9b5bc4ef8b1fdb"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","e15f84186fecb48cea0805f342a8b7d0"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","c6ffe7aedea797454ec408f9292a9eec"],["/2014/08/24/mongodb在windows下安装教程/index.html","dd6d7ff1068fcd698f7a8800bbab619b"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","cf7a8d8e0ddc52eca9cab9f55e20aa48"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","2cfea0eced74d940f1d4ab390e407d10"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","f282f56555ed57dc12f81d6d9597e2df"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","883631ac5cf99e6680c0d509baf80662"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","ba45c037bfea5e831dbb012c2235d965"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","f8c8b32098617036036999e453891b17"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","6309a2d9da739a639df3a76dc1829c8b"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","a60ed5c04aa5ebf615ca89f62271a829"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","9f27bd221ac0ba3eeef8eebba44ff7c5"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","5f839ea760374d6ff8066ec59e11ff8e"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","b66a49a42879bb3ec377e521184c83f0"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","08d87e24996064001bf9906b267318e4"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","355411e98e978d3c88f8aef01a6753f8"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","d736d91715b2962564d0f15ebe4c0a06"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","6c269f769c0f20e332a5edc376f289db"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","24cfdf719c5b8f6081823cf15467d7c3"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","1b49f1fef27ea1dcb8c0871e915d94df"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","6400007bda6f7e9319a0c8785871579a"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","c61f1f1979a731716ac0e7827b8a91fb"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","4e28e7b553e2996c8c700069e60d372e"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","a41574a921287652aefab26545ba000b"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","cff1eb3388208db421f0708ebb9103db"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","be1d180c91baf84382a93e20bcca5ac0"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","9b8b2cf0adf907b444b5b65d2b657abb"],["/2018/05/13/四大组件-二-Service使用/index.html","525e70d9d74a904df03e5e4dacdfa812"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","cfb82f0b476c2a3b7f93cd49dd040e7f"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","10ea148f3a77c7305e9d1cc489a241eb"],["/2018/06/18/Android源码分析一开篇介绍/index.html","09a444b3ef79c6f8389a0a8e9bdeeb0e"],["/2018/06/24/Android源码分析三Service启动分析/index.html","00f93e0c380f5edd748ea2087f139fd9"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","a9feae774a703d8f64b9ca5c91f73845"],["/2018/07/01/Java基础面试题汇总/index.html","d5e4c3d10129b6e2cc169ec29893bd06"],["/2018/07/06/23种设计模式在Android中的应用/index.html","59d00ac6f1024b475f4d9a252eeab101"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","09dda969e49de8d7261c1636ef9b4dc7"],["/2018/07/07/Android源码分析五Zygote进程/index.html","eb7f2d80932a789552fc15e6079fcd1f"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","e6ed9b7ed66b29b73fe75b2e20e6ef80"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","8edc1b496bede7d722771d161f569e55"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","8f6f4c5b61e8abc909b8ebe8b859c5e3"],["/2018/07/08/Android源码分析九Init启动分析/index.html","178c62e4fb17926f9e1fcde3b69cd92b"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","ef46d7777741db2369acb098fbf69fe3"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","d4e7363615662475aafa609e8420f603"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","9c8e9ef81acc74aa2b26ecdf1b910a95"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","3eec06e17e31cd1fa37a76284d1583af"],["/2018/07/21/AIDL介绍以及简单使用/index.html","9fcf6281a274eeb42ccfb858d3083996"],["/2018/07/21/ViewPager相关使用/index.html","431d9d4d5aafe2cb1f409bab7062bec8"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","46e63873c0d0df2cebcbcca21634f2fe"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","512ade63e8a526c8bf315cac1330bdff"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","c89f6bfbbaa19bb96c44a51a2b00d973"],["/2018/07/22/Android进阶学习笔记整理/index.html","161024cf3e09c47b5eb19d130f9101d6"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","674ccf6b662d85644053fb54c3ede7be"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","ae4c2ac3e4806f5330727ae4d4f74876"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","6f7ed681428ee553f6b06dd53130a9fe"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","2401d850d5e6f6ec6eb347803aa144ac"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","c96dffb66df4d8381d518a3b45ca63d8"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","bb7ae2d589b5c948f89c5ac479999561"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","7d9813f2d64704e9a1afd6a92d081e42"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","dafa058b222b9f35b8e149d3cfd417f9"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","a0eec0adc196074e5002f7e12de2e94a"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","b4e9c866acd5b72d3a8ecd62bdfc8677"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","ab17d7bd1088ad179d707e9d95d1ca13"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","7b2a6a045877c5c7bd21f828b3775bfd"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","8800f6ee8571cdbc6f8483d079f9d1db"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","a74c21703411324bc4d5a608ea50d523"],["/2018/08/05/Android开源框架系列导读/index.html","1c1f1bdb14fa50d0e9cc3c1e2eeee445"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","21f42b99cde0c43bc95372f7e0784ad2"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","fd6ca701fa215ff016ca144f6155d1cf"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","9323dc9e0d0f92288f471cd65507ce18"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","abc97548193edbe3873dc8cb62650331"],["/2019/01/01/Jetpack之LiveData介绍/index.html","6a037fb2706d8e93341536a07c036f5e"],["/2019/01/01/Jetpack之Paging介绍/index.html","62c1e4aee589cf30f49d34542845b48b"],["/2019/01/01/Jetpack之Room介绍/index.html","faa2766ebeff883b7e3cda72470c79f6"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","1d696095664187ddc609d92af43dadd8"],["/2019/08/25/Android面试题/index.html","7c1eaec319dd42a4cdbea9a4f9f3b724"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","ce85fb049da32aee80b64a9b490050f5"],["/2019/09/22/汉尼拔电影观后感/index.html","e1cf510816a17d4a750ffb6a7bc26928"],["/2019/09/28/Kotlin与java对比/index.html","4638fa369dd71ed4d3e0098578825540"],["/2019/09/28/巴比龙电影观后感/index.html","de7cf44708b118071d24b5627aad94e1"],["/2019/09/30/mac搭建hexo环境/index.html","7b54c1a185aba9cf305cd310ae2fa8c5"],["/2019/10/01/关于职业生涯的想法/index.html","19c90d5b6e43284df4265605cf2402ed"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","cf2afe185eb74d37e2b9ff4b37647eb0"],["/2019/10/03/AndroidView绘制流程/index.html","9ee63dac9d5f9c2d5dabfdce4bf2c0f3"],["/2019/10/03/Android屏幕适配/index.html","4b807439bc9b285b20f10f943d488cfb"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","bc2e343c8e05a74acb59becad2cb4b1e"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","a086117418700713f074e3a3f2e41b6f"],["/2019/10/13/谈谈逛博客的小习惯/index.html","302a9ebb3ccdeae134037a17d289af3f"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","a767fd22dd9136fe9f359bdca8bf7ae8"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","f28744ee99b15ed6d047b3ff94a7036d"],["/2019/10/19/关于程序员的第二职业/index.html","1ae137a99e03b72faea1390728bfd0c1"],["/2019/10/20/一次车被刮蹭的经历/index.html","d2a3515d9eb4afb1933e7a0645a66c29"],["/2019/10/20/第一次买房经历/index.html","4985b054405b462be0fa4f4e2aed77df"],["/2019/10/26/kotlin之Lambda表达式/index.html","92c15a3bc6b0ff8f09e5f9d03360a71d"],["/2019/10/26/收藏网络资源分享/index.html","b3bc0e9d662b360610284937e77c22ff"],["/2019/11/01/Android之Jetpack简介/index.html","522239ac0ce6fe4c04e6d9e72c432a71"],["/2019/11/01/Jetpack之Androidx介绍/index.html","4639cbe87a7ff01bc4635e6a8170eb03"],["/2019/11/02/初识区块链/index.html","ddfff440cd12e0a7a9df40e05c78a983"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","5beb5e80bb155aff78dd80eb56020005"],["/PY.html","e2d65be4bc93df6d184829ef6a0bbc4c"],["/about/index.html","ccb46155e420873effc588376813b457"],["/archives/2014/04/index.html","ab19d09d86fd103c542c03b3d85837d1"],["/archives/2014/05/index.html","89466e9c843b94ced9adf0bd06d7516d"],["/archives/2014/07/index.html","24bb1367c3e958469cd3d6a3463140c0"],["/archives/2014/08/index.html","de2dc7f2243b72ddc67a694e753f9e78"],["/archives/2014/09/index.html","935781816a7671f2ffc090925f6f4aae"],["/archives/2014/11/index.html","bc9a05381ca0bb9bea6c8049b874e10f"],["/archives/2014/12/index.html","31a6003d62b59cd22397a0180f8337e9"],["/archives/2014/index.html","167f179dac7c8c0510071e28b56577f4"],["/archives/2014/page/2/index.html","e35307f799fc8c0923cb7c9aa487dce0"],["/archives/2014/page/3/index.html","77acb1ac5a748abbe27cf680fe5bcedb"],["/archives/2015/04/index.html","9360d12ffc3d76d51f2cd0beb4448337"],["/archives/2015/06/index.html","151017f3d3b49e9119b9480df3953da2"],["/archives/2015/11/index.html","28e96bd6afac9f87eee823b5e11cb846"],["/archives/2015/index.html","f26d039b8dafe93eba1052f8cf5c3edf"],["/archives/2016/08/index.html","54e701e6b6a318bb768a23ce89d92d90"],["/archives/2016/index.html","f018859e5c82928ea3026ebb48828484"],["/archives/2018/04/index.html","a73d3f23c798940a43c045212d49cde5"],["/archives/2018/05/index.html","5a20e1495570357e85bb74072c2a6b69"],["/archives/2018/06/index.html","7bea5170427fa04a4be28d7d0285fdcf"],["/archives/2018/07/index.html","31e8c74fde3e0541f038f1a0127a5150"],["/archives/2018/07/page/2/index.html","c62140eaec02f1b9641dc472109758d8"],["/archives/2018/07/page/3/index.html","61cfe61435f9a7deb827e25ebce6e7e1"],["/archives/2018/08/index.html","c1d4367faf90ef2f6d1aaf05cd981075"],["/archives/2018/08/page/2/index.html","d1279dd0e844ecd965e0bb9caf80d647"],["/archives/2018/index.html","dc5e37894bf219333bcbaf34ddcfc8a1"],["/archives/2018/page/2/index.html","d9b07630cefe5becde7875307cf29631"],["/archives/2018/page/3/index.html","decbcb5ba088c690f5df5485b2b0d194"],["/archives/2018/page/4/index.html","bfd262871cefe7317f088435de6c265b"],["/archives/2018/page/5/index.html","9e9e7caf509d11005a3a679fcf402d85"],["/archives/2019/01/index.html","ad59625327ef80c1d7e375acd4170180"],["/archives/2019/08/index.html","281446a268d31624b7e9ccb9aaac8a9f"],["/archives/2019/09/index.html","6c05813c395920c20e385ed23ffa1d60"],["/archives/2019/10/index.html","62e0827246b8eeaa4f8484a6918105f9"],["/archives/2019/10/page/2/index.html","ec84d0438f9b7f04cb3470088d80a716"],["/archives/2019/11/index.html","c442178748c1a781d2c2fc70a4e8ec18"],["/archives/2019/index.html","d1956d31b11bf9bd988662a6bfcc5c6b"],["/archives/2019/page/2/index.html","0289367c2178e22f04226e2cf13f28d3"],["/archives/2019/page/3/index.html","81dfd70caa32e110a5852a72534ecf7a"],["/archives/index.html","83c0a5d0368e31e599a7c4d85f7a4a4b"],["/archives/page/10/index.html","18941a3326bd901bd1344adbc3cfa7e6"],["/archives/page/11/index.html","2b5c5b6247fe738c8952f91b0e7434ae"],["/archives/page/2/index.html","62caec69db8064ae867587a9595ce600"],["/archives/page/3/index.html","d14b5a62b7bcb0d161178494b8aa0046"],["/archives/page/4/index.html","9717de69546f065268897c5b21dc746d"],["/archives/page/5/index.html","26e2707c6c796853ba4687d2a143eee6"],["/archives/page/6/index.html","7fb09e481571a49fbaf261cec3bd998d"],["/archives/page/7/index.html","d30aa2b43869dbcac30101b6c8f11d2b"],["/archives/page/8/index.html","87959a241acc0bb948df604f8808ad09"],["/archives/page/9/index.html","b2f9c9da3362f8057493767771425e8a"],["/categories/Android/index.html","4cd322a948aa5ead3882ee9796933079"],["/categories/Android/kotlin/index.html","14bbd2c3436bfc7c299a5d0facf43f15"],["/categories/Android/page/2/index.html","e91826b1f9663228f51eede524b5c14a"],["/categories/Android/page/3/index.html","cb6942252676174fae16a3603a71661c"],["/categories/Android/page/4/index.html","ff39d078c124f04154f610e4d66957a0"],["/categories/Android/page/5/index.html","9ee8f006d4d3e549d9ee1f390d78cc1b"],["/categories/Android/page/6/index.html","4307d536568abb863c849b68b9b4a548"],["/categories/Android/安卓源码/index.html","792042cab90a1e217f93a9fd56db70d3"],["/categories/Android/安卓源码/page/2/index.html","488386c400af6c51e7d5eaaaa8a027b2"],["/categories/Android/开源框架/index.html","4717e5a49e241bda32cef51dd4a9f664"],["/categories/Android/开源框架/page/2/index.html","c99b0cb3e87265a90380a702d408d208"],["/categories/Android/知识点/index.html","aced5296a80eca3ae13813694a6074f9"],["/categories/Android/知识点/page/2/index.html","bc7e5412e34e99ac1996222047737108"],["/categories/GitHub/index.html","ebd9ec910b5206bdbd57f1e2d41387f0"],["/categories/Jetpack/Androidx/index.html","2671183dcccb731eb6d3b30e2320282a"],["/categories/Jetpack/Lifecycles/index.html","d92f96745631e98749eea9b3954ecf0f"],["/categories/Jetpack/LiveData/index.html","40af6f3463f05263a6eb95200862e4f4"],["/categories/Jetpack/Paging/index.html","98249eb2a69419a140ed139e134de264"],["/categories/Jetpack/Room/index.html","68e8ac446aba69d6c51e3d8152d04957"],["/categories/Jetpack/ViewModel/index.html","ee548993bce2a93b375f20bd4317b23f"],["/categories/Jetpack/index.html","b10599cfdd5361805a6a0e224956564a"],["/categories/前端/index.html","e52c1507d82e7395eb9468032726bfc2"],["/categories/后端/CSharp/index.html","fbb1c2c4a0d613e3e853c47f13a702e6"],["/categories/后端/CSharp/page/2/index.html","d2d2351a8e0f2c18e585906d3739ccac"],["/categories/后端/JAVA/index.html","bd5e66bd0e0d2dc2caa4bb22d9179f5f"],["/categories/后端/PHP/index.html","20dbcc54b7d056b88bad7ffcd20dca08"],["/categories/后端/index.html","bf7e13820beffbb603845ed6dfac540d"],["/categories/后端/page/2/index.html","e1298064bf1017f9a4dcb90afc24ee9e"],["/categories/后端/page/3/index.html","d2d1817e7cf30daf4fb15d2ef06955bb"],["/categories/心情/index.html","c028b96ef16a247661c4e81c60439e10"],["/categories/心情/page/2/index.html","d2554a57f5f7046a1844de9810e05375"],["/categories/知识点/index.html","d581a310ae768b02d4e616ae7a563c99"],["/categories/设计模式/index.html","155478e0dc4ce807f908ab9ed09cfffd"],["/comment/index.html","8d98cdc2851f4be0916084fe4f2fa0d7"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","7dbfe939e69c64230903d101738e3b5e"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","212f97723cd85fe74174b857a6cfb207"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","5263aa2e1fea72e3206dcdccd0d07298"],["/page/11/index.html","2c551fe912ea9741ea948d832523fc93"],["/page/2/index.html","4b80cd1fe7ade69db96eb59b90228860"],["/page/3/index.html","830189b6f28a268e5244c1c01089bd7e"],["/page/4/index.html","7cfbcacb2eabc0ab1a06edcaf01dc67d"],["/page/5/index.html","99b5066f7856dd9222c64f0d5af641dd"],["/page/6/index.html","bcd02766941e8b282ffd2e26c6f90d10"],["/page/7/index.html","7948cccfd23d66e45c0f50c1e634bb02"],["/page/8/index.html","34bc73014809db1772d1176ec23fe54d"],["/page/9/index.html","78bd438868d7561eb140300283d96f28"],["/photos/index.html","007011c76e3bc3827c8570cbc7055404"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","03132307ddd3b7b6b77d13deb80c06ca"],["/tags/AIDL/index.html","592236ed22c42e5e943ceaa03a6e34ad"],["/tags/Activity/index.html","8285af4cc3d9e4c74652c45275f93523"],["/tags/Android/index.html","0c73722a1b042c9e8728195205c05800"],["/tags/Android7-0/index.html","2975cc409cd60c97033af2f3c5fcf862"],["/tags/Androidx/index.html","bf0391347851d2ae0c8450ca8665582d"],["/tags/BroadcastReceiver/index.html","24a0b8ab36cf945339644bf999e15a97"],["/tags/C-文件上传/index.html","521b7e57e23d3ded2811c80c5d9eab55"],["/tags/ContentProvider/index.html","bd330f5d3201e0a4b5dd43a08e960d87"],["/tags/Excel操作/index.html","79b7e7d56564a4a1071b65c38fed25d8"],["/tags/GitHub/index.html","46e4139792e0d2a1801bd3543047a87b"],["/tags/IIS/index.html","f56c295dab4db94609731763fdde0219"],["/tags/JPush/index.html","7e05579c06ce6f9ee70a50dae64f1093"],["/tags/Jetpack/index.html","fea123ec8c0a1b3135436feeb5948792"],["/tags/LNMP/index.html","af9575dcbcb2147849b38f139fbb6a8d"],["/tags/Lifecycles/index.html","e7b0c3608cdf2288187eb5e72239a45c"],["/tags/Linq/index.html","cf27b27c448079d10cee71f48dd76470"],["/tags/LiveData/index.html","7c6520d089ba3e5fa849b57a485a176d"],["/tags/MAMP/index.html","889748189a55f1ffbe2bed866163086a"],["/tags/Paging/index.html","af5f556619121f5c4d30b11fe01061d4"],["/tags/Room/index.html","0d714a34f2261686e5301546a5c5ee0b"],["/tags/Service/index.html","3c1a5286ee3f2d29e3755a21a1defff9"],["/tags/SqlServer/index.html","fa496d1fc37528bd5278d09f8b595707"],["/tags/ViewModel/index.html","cd0b5e01bf1b6735f4a49d2276cc3ad4"],["/tags/ViewPager/index.html","4ee54ae669d5b07c69e6b51be02747ec"],["/tags/XMLHttpRequest/index.html","6dbc70809cc5df51a378fa9ec0e5e4f2"],["/tags/c/index.html","706dc9be2425a5bbda0e203bc5b4c433"],["/tags/coroutine协程/index.html","c7edbf8361dcb14a940afc78ca3a4ce8"],["/tags/easyui/index.html","0f012be1a63c11a65af76758ece006c1"],["/tags/fiddler/index.html","0a0b79d04137fa2e4bf02647b8be5ae2"],["/tags/hexo/index.html","aed662efda375e08acc56f05445c0588"],["/tags/kotlin/index.html","9dd20567313236bfcccfc227a7b6d5e6"],["/tags/mongodb/index.html","7481a1c0228f833447e1d84b296476f9"],["/tags/mono-for-Android/index.html","f0a951c84a567ecb76d6bd1f82762009"],["/tags/nodejs/index.html","537c2545ee5137db12440890cf14352f"],["/tags/php/index.html","6a376d423f3012c1905392c919230d39"],["/tags/view绘制/index.html","e22e0fb3d23ffb538d78e698a7b64224"],["/tags/visualStudio/index.html","d755d71731f39de5cc9c4a0792d89583"],["/tags/习惯/index.html","6e52761fdbdae5e3ea567edc21f0ecd6"],["/tags/京东云擎/index.html","b93802399e294a463ee441be1d857298"],["/tags/公众号/index.html","866a6a88a43ca66d398827b6faa1cc5a"],["/tags/副业/index.html","7643ed1c1b9164738164ffea67b5287f"],["/tags/区块链/index.html","1ae48336e4a0a4110514de53784b7acf"],["/tags/图片保存/index.html","653726247a9dd89a863059a42a52a892"],["/tags/地图/index.html","de263e53b40247666d2eb3dfe2e9c8c6"],["/tags/增量更新/index.html","d792ee746772b7d036a35c38ec0dd844"],["/tags/安卓源码/index.html","64d53267a5f4af454f7d7fc66606a6aa"],["/tags/安卓源码/page/2/index.html","451f5e8ea0552e68441f47d81ccf4c1c"],["/tags/屏幕适配/index.html","65b6acc8aa735960a00c79010f84e8eb"],["/tags/序列化/index.html","36332c66ec86fca2a078372005b32112"],["/tags/开源框架/index.html","56feab04e19e450a6b1756378e4c8396"],["/tags/开源框架/page/2/index.html","06e331098ea48430cb02cc0a31ea699e"],["/tags/心情/index.html","a856e9e8bc454e7b8e4d129faa2e734e"],["/tags/新浪SAE/index.html","48a922a4675ce9292f13ee0915428734"],["/tags/日期格式化/index.html","297fd75cf3cf7619a8df48b9dec22305"],["/tags/正则表达式/index.html","11d3c442a0d42ef7034b57c53692b997"],["/tags/电影/index.html","4aa7afe527d5dcb1f689056c62f9d24b"],["/tags/线程切换/index.html","3bb4e0207cd104062f4e761aec3b0228"],["/tags/网盘资源/index.html","b101dbd6a24d6ea6a40d835f0e1848cc"],["/tags/职业发展/index.html","b6f733c8a6500420f0154d7363eba5f8"],["/tags/职业生涯/index.html","da6f008dfd824190dea6a60f849b1f63"],["/tags/设计模式/index.html","22d40983aaac38fdcf644a53bcaab13c"],["/tags/评论插件/index.html","34323b87e43cfe613305f2f2a2144ac1"],["/tags/购房/index.html","bac15f334bf02eff54994d7299ce2083"],["/tags/跳槽/index.html","5159be5f510c65582997d0011f4ed45b"],["/tags/面试/index.html","48202d18d57d38c1e3acfa76045da410"]];
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
