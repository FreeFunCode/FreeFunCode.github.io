/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","65ee54d6d6dd8950ca71c068e3c032cc"],["/2014/04/27/Hello-Hexo/index.html","b1c1938cd9c999c1dd636c53c8540589"],["/2014/05/07/001-RegEx/index.html","e90128bcc628672ac8de6d95e6a6841a"],["/2014/05/08/002-DateFormat/index.html","196b6fcf7c64475541914d13679dad6d"],["/2014/05/27/003-c-Linq/index.html","da08d25cf92c71b96b6a27653ef0ec6e"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","6ad7baffc32f9d271da551881e681929"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","540fe5f1812f2c32a5493900b5e33670"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","72b96e5a109fc5806010c8637c47ddec"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","dda2dfa22bf4b4fc6182ec99df6cf084"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","4314a18ad27909d1fac1e2e9506f8f77"],["/2014/08/24/mongodb在windows下安装教程/index.html","1a27f10fc7361efff5b3cef926844a75"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","c271b2206e66e65891a7b388b74fb432"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","bfc49c23f049804840a4fd1240f44e4c"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","b681da638c4b1a86e908c1d4d9931c13"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","d7768f42df0f2ade9041e10b472b8b80"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","9dc4b84987857568963a2a803b3d5135"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","6e7bdea271aca8e3993b297aa7a497c7"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","873e97e8efaeb229b952ed3140664e82"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","4daa745b68f7e3b311595c6f826cdabc"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","acec23a24cd71d74bb498b32d81abf71"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","293382977ab1b8ba2cdf70693e0a818c"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","cbc39f46c3b3b7ecf6cb043800cd6f6c"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","96cc96fcc80c22dd807266876e460820"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","da76d35441749c291abbe0c23ab4d2aa"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","79c33392d16b9f62a2d651eaf1597f97"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","57b9e5b34f5789057112e901d92245bf"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","7ab755bc598cee2d4df9ce3e66258b32"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","313679eb4a089ff838edefd7d7dcbbd4"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","6565e21da766162640892190df72430e"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","3779a2a10105982891887c61fffb91e8"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","6980852a79a40f680170ec2c2041db94"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","ebe60db0659c40ff2d26b7fe9d1451b5"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","b14f69284673f2e8be23bcddcee41380"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","e0c969ed801f013b79d6a830c2df0b5e"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","14ffba8c54355324ef92b5bdd1df6dd0"],["/2018/05/13/四大组件-二-Service使用/index.html","e442ad7ba55aa1696669b8c43a55e169"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","01973f79d14c17d6cc40744f15e19184"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","734ba1d882ff5a4e99db7a24e18737d2"],["/2018/06/18/Android源码分析一开篇介绍/index.html","52cefe4169cb7c525ee01edf7f206943"],["/2018/06/24/Android源码分析三Service启动分析/index.html","3954059c6f9a53a9c1e16993d33494c0"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","cf0a20c9cdbcb052854f24f28488cfc5"],["/2018/07/01/Java基础面试题汇总/index.html","e7391f785bb73781dfaa6a3eeb2d960a"],["/2018/07/06/23种设计模式在Android中的应用/index.html","982e0deec4c520bdc8691de1071b9695"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","f64ccddf4d7038376bc7721a3cf0ffb0"],["/2018/07/07/Android源码分析五Zygote进程/index.html","6514161a9224b15604c31f6ff1d73ab6"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","43cdfd4d97a78e3695b6010e7113ccc0"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","d4a7f0041c0b36e659fce79b14d1481d"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","0622300819555e14bb51e7f65f6dff9a"],["/2018/07/08/Android源码分析九Init启动分析/index.html","45c38bf2196c6cd78a876941e18cc4f5"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","182ab389b8cdbacca6492bd11b7c5307"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","60f1fadd5e0eac694a4c825e3547fe8f"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","f0189e2ee0e844357157d248a9364522"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","fbd6225ece60751cb478349606cb26d5"],["/2018/07/21/AIDL介绍以及简单使用/index.html","7cbf037f2a644e24530f01d9445cd452"],["/2018/07/21/ViewPager相关使用/index.html","b7a2ac1296149c3fb59e78847f6bf34b"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","da4d1c49140681c2b08f2146e8289f0c"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","be5c0fedbaebd16e054dbcf3fd535e50"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","8be65c7a901f6eeddc4757d49ffe1b0f"],["/2018/07/22/Android进阶学习笔记整理/index.html","c2bc0fa495e4a3b1cff8099087cc4dc2"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","5e2ef154e7f104b159c2bd74a4577d53"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","f91bb3d1ea8e90f3608bfa50bdb7db93"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","429ec4683df8abc05fbd6a6a8418c27b"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","3a40ef89b60075f42a92f778f7277053"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","c52f79bd73d5790fc6064e90a2b7ea56"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","0259be3b1baf08c51ed94ea4732635bf"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","70616624a0bffea4103005557133c3a5"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","3af30e0e410315f68c546380fbc4fe9c"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","b14eca33783168a8256c1c633ed3c6e6"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","e8416245aa96638d525fc3bf690437c6"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","56d03657777d84e1df25579df3bf83fd"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","3be52ea7b46e874630cbc348a72de96e"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","a4059c8885314b3c375ae016c25c1deb"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","2a8b4c182ea1d5a6d1169bbf3b1d7995"],["/2018/08/05/Android开源框架系列导读/index.html","912db5f559a7cce4f670668e59e91d1c"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","f96be6f4404d1677583642997f513095"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","0ca64712c31dbd379e2f3a404fa7afce"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","dfc3a648e7ded1831f918761c0d55efb"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","c91d3a4379ac86f7927da6034f57cd74"],["/2019/01/01/Jetpack之LiveData介绍/index.html","eecefeaf254a52afc70b6d24ae6100e3"],["/2019/01/01/Jetpack之Paging介绍/index.html","14524cf01f6a52258c38c1e9ddf25b9c"],["/2019/01/01/Jetpack之Room介绍/index.html","4518a42c31cd49616f766121ad8140c4"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","a03e15303e579c17be46baa0c42c8ee5"],["/2019/08/25/Android面试题/index.html","ad78bf555315792090b220fc49801953"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","06713f83b81a7bae16340f15e64e7553"],["/2019/09/22/汉尼拔电影观后感/index.html","455bf901b1c617278203a8a6baac65ef"],["/2019/09/28/Kotlin与java对比/index.html","51d6eda496d3008d6959cf2a6ff97a87"],["/2019/09/28/巴比龙电影观后感/index.html","a3fb7ab2ee8c318b22cc6e4776ba85c6"],["/2019/09/30/mac搭建hexo环境/index.html","5c4858fb45bc3f809426a7235b3782ad"],["/2019/10/01/关于职业生涯的想法/index.html","61599d21a63e76ac164a6469e715a1a6"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","7c5dfcc70cab7af572309e3e9f6aad2d"],["/2019/10/03/AndroidView绘制流程/index.html","4cc25454d5fa903d9bda0690f24ae821"],["/2019/10/03/Android屏幕适配/index.html","24c366b11e4832ca1cb65ed5561457b3"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","f155622177babbc76ba82186f53c21c0"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","7136a3bf380e9fc1d614c66517865b06"],["/2019/10/13/谈谈逛博客的小习惯/index.html","cb8e93a62283baaefe5e38aaae8314c3"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","96932fad4bf8802e19006658b245a1e6"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","da75e5b09f1a334717022405bee648ff"],["/2019/10/19/关于程序员的第二职业/index.html","96b6ebb5ab0fcafd2f9f90e646f32234"],["/2019/10/20/一次车被刮蹭的经历/index.html","ecb17932746531b1c7bec03ff826e036"],["/2019/10/20/第一次买房经历/index.html","b9ccdd9b4f901fffa12fa62f2178f135"],["/2019/10/26/kotlin之Lambda表达式/index.html","e721f3cccd020ea651d70ac0ae539ae9"],["/2019/10/26/收藏网络资源分享/index.html","0648910735a9078a0cb3c984ba63725f"],["/2019/11/01/Android之Jetpack简介/index.html","1f24675bfa4ca260d0123ced80358fe1"],["/2019/11/01/Jetpack之Androidx介绍/index.html","a4c03c0b9ba5e11719a6234ee710751b"],["/2019/11/02/初识区块链/index.html","2443e1c17563213d23bb544b82a6f8fb"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","993b6f6ed108d754b39d3b8f22a4f109"],["/2020/02/10/2020开年的一些感想/index.html","a617ddac0ec7b7a270e550e5a8074440"],["/PY.html","335f04321aae114b7eed52a7cf80c4fe"],["/about/index.html","2f744b0dbebeb62f4b8d6bcd01eced1f"],["/archives/2014/04/index.html","cf1e6823e9099d0a75ad19ae63503632"],["/archives/2014/05/index.html","ce0a2116c076f03bcdb979c5e59056b7"],["/archives/2014/07/index.html","0089b2bb77285ffc9e3ea378a0bf6383"],["/archives/2014/08/index.html","c3bca01356527b5ef88679694210d91d"],["/archives/2014/09/index.html","cdc72610e8f2821c97dc99dd803ec09e"],["/archives/2014/11/index.html","5c9bf7b2ad373e228f377db083da0880"],["/archives/2014/12/index.html","a3001395f09b0432de449b13ad38d5e4"],["/archives/2014/index.html","201167aa033a3de599da13f876fc8cee"],["/archives/2014/page/2/index.html","88bc29f8f741999babb5ec97c20e4114"],["/archives/2014/page/3/index.html","2ac33b4eae022cdbd8b78ba50081c1ba"],["/archives/2015/04/index.html","152c9aaae47a337a76150d46c4c21745"],["/archives/2015/06/index.html","7f9d3eda3c55f86f7e83fda88dbdb1eb"],["/archives/2015/11/index.html","014c6940e67d203fe5ca8bf67cf1d80e"],["/archives/2015/index.html","74066afb4a2ef1c8bf4c7b7c38c4e892"],["/archives/2016/08/index.html","bf4dd161eca0822d6ed6d872ceb7b718"],["/archives/2016/index.html","104b6bb7015cad6983de848d9b72ad1b"],["/archives/2018/04/index.html","8272d6be7a0edb8bf3dbc49ad1889c8c"],["/archives/2018/05/index.html","28f89f398d6ea8a2a7aafc075a7c9d60"],["/archives/2018/06/index.html","37e079dfebf8dbb8883aca33e5d8fc66"],["/archives/2018/07/index.html","6e754b92e2d357e32da4b04fd70259df"],["/archives/2018/07/page/2/index.html","d4ec5334279350a39d93eda69e2a55e6"],["/archives/2018/07/page/3/index.html","c394d111bb02a23dd8a239c83b5b618f"],["/archives/2018/08/index.html","9f46a51be9e6997f1e562d0238fda694"],["/archives/2018/08/page/2/index.html","2b3829dda58bbf1f1a60d334b4d12edd"],["/archives/2018/index.html","041de5e0228c54215cb16880bee1b57c"],["/archives/2018/page/2/index.html","655a16c63b58c147e2bbd13162c4946b"],["/archives/2018/page/3/index.html","953bd5d372dfb282813dfc0d111c282f"],["/archives/2018/page/4/index.html","131bb93d18e2558696be0c0994c7dfff"],["/archives/2018/page/5/index.html","f9389135ea85bae651f3f56b4c25f93c"],["/archives/2019/01/index.html","8c82f9abbc10ae164c53f4973b607817"],["/archives/2019/08/index.html","9599d68e21bab55e7cb2863bce646004"],["/archives/2019/09/index.html","6265107f54f92e15b786c907a85453b5"],["/archives/2019/10/index.html","51b027df0645bd26b2d7b082d99923c8"],["/archives/2019/10/page/2/index.html","b4bf6bdd2dfd90d4117d2c9dedcfaf57"],["/archives/2019/11/index.html","bb67399d280529a59091c3b5095d6aec"],["/archives/2019/index.html","24d475b0290a5217f0f922f8975c67bc"],["/archives/2019/page/2/index.html","b3b757fc02ed549d6fc698c8f9138f24"],["/archives/2019/page/3/index.html","9dc96f42e18c9b41144c28d417d97a00"],["/archives/2020/02/index.html","232797a138efbcfaed1b61ed55a1a9af"],["/archives/2020/index.html","b4c2771c5d5d92aa60b1b7c6657fef13"],["/archives/index.html","38346129bd05d5a38d9e6267696c54b4"],["/archives/page/10/index.html","58c3b3242251c194ccaf11599e59d25f"],["/archives/page/11/index.html","579da83c977bf3f8197a4c1d4eea1f2e"],["/archives/page/2/index.html","e16258c8c61672521976a725e60f609e"],["/archives/page/3/index.html","3a5e3960e66c9aaa35ccafb6f8fd6123"],["/archives/page/4/index.html","2f87c48bdf1765710c54f97f8e4598f4"],["/archives/page/5/index.html","8b191940d1c82439ae78d0b8ca685037"],["/archives/page/6/index.html","b7a56c67ad1b44f2d0a517a7219dc829"],["/archives/page/7/index.html","67553b4ba697029903915df2edea219c"],["/archives/page/8/index.html","a84d37fb047586f380da1580af650ba8"],["/archives/page/9/index.html","e250664f22cac52be809139c846157d0"],["/categories/Android/index.html","0893ba4f18259030ca23e34ba1cef0fc"],["/categories/Android/kotlin/index.html","f1d737acb8ff8d062d48e8d82cf72068"],["/categories/Android/page/2/index.html","e0ebf22fe394a7620a106bd5d7e9ca30"],["/categories/Android/page/3/index.html","e48eca2e7eca6d36e949290bbe0bcc2c"],["/categories/Android/page/4/index.html","d2f5f103c6816490575105e3c6156ecb"],["/categories/Android/page/5/index.html","888535209ff14cd00f615c24cd1ae1c0"],["/categories/Android/page/6/index.html","5724d00bdaf453ce7938462ff9fe0955"],["/categories/Android/安卓源码/index.html","298f41e2643ec4dcab29cffe00f70558"],["/categories/Android/安卓源码/page/2/index.html","82a6981fbf64786d9e1ecc5d7541e3ab"],["/categories/Android/开源框架/index.html","2c19b7677bd4221c75f49defc4dc3088"],["/categories/Android/开源框架/page/2/index.html","a7e855c986d2424f3119dbfc24e37634"],["/categories/Android/知识点/index.html","5cd5662d79b1d06e26920ecd1fe2efe7"],["/categories/Android/知识点/page/2/index.html","ada6f8956165692e95233f01f74cb2a3"],["/categories/GitHub/index.html","c95c654e4ea0cb7621f7a419f7b59426"],["/categories/Jetpack/Androidx/index.html","e48d4e4b83fc2ed07b17d74f8f35fc7b"],["/categories/Jetpack/Lifecycles/index.html","1778b5f5b26fd46ecf4625df85c89aac"],["/categories/Jetpack/LiveData/index.html","aeaa1a7fb808e576c6296ad3a811d915"],["/categories/Jetpack/Paging/index.html","20a529a0b585c9866ae1f85808705e50"],["/categories/Jetpack/Room/index.html","4a2eb4dc2710592af8a63d73b9b3a6c9"],["/categories/Jetpack/ViewModel/index.html","a8599da0d8a1c8c9ca9e36daa1fdea4d"],["/categories/Jetpack/index.html","fa49b5d9b44dfff3dd5dce2a12449ce2"],["/categories/前端/index.html","3c9b2e30119f9a1df4ee74603c0bace7"],["/categories/后端/CSharp/index.html","f9e14450dce5f5b9af01234fdb12f3be"],["/categories/后端/CSharp/page/2/index.html","332d5eaa3cd43d72a4aaef4ce9c2f260"],["/categories/后端/JAVA/index.html","f198a4bcb0b99528feda88664c0371a2"],["/categories/后端/PHP/index.html","ed6b3d689ab67a1df29d8ad1d6c43cea"],["/categories/后端/index.html","509f82d154b6c5735e4094561d24a8b7"],["/categories/后端/page/2/index.html","057ebe70c615959adc98d6aacf2b2780"],["/categories/后端/page/3/index.html","c55e43cdd6bf3ed828c162e4f2dd124b"],["/categories/心情/index.html","0ef19db8039f8670a6c75f0d0da24479"],["/categories/心情/page/2/index.html","3611c502c71c9591e3b2627ce1545ad5"],["/categories/知识点/index.html","ae8848067c8513aa950d6f5835bbdf28"],["/categories/设计模式/index.html","fdd0bb5477528a7388f5365ecf42c411"],["/comment/index.html","08c06c5c2442ae08055934b90fccd911"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/2020kainian_1.jpg","d5a1f523c46fe05f38925a43528ae2d0"],["/images/2020kainian_2.png","21dfdf99770d6e946a7db90ab6ef31f0"],["/images/2020kainian_3.png","849a98ea3181c0a13284f149be3b37f7"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","7f09f4d04f624f64ea98572f0449a52c"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","369e21312022514c049d3e63a4599791"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","269b9bef5a0cce911aa3c3eed7ef1e3c"],["/page/11/index.html","c769d5795ac19c23c6c11951d8b658f2"],["/page/2/index.html","7f57b7611288f7a72e2d7e183137a8cb"],["/page/3/index.html","b0325bba44382eafeaaa397fb6a526e0"],["/page/4/index.html","e0a3f6c2ffb6c022585d0fc68296eaaa"],["/page/5/index.html","39ee9676f348a4221b16ab467b2433de"],["/page/6/index.html","821441ef0dfdd78c45f58729d26766c6"],["/page/7/index.html","b0ebb6ad1bb515b6bc7556aaee1eafda"],["/page/8/index.html","ccbe89faa184af9a8f9370342dccb554"],["/page/9/index.html","d7bfd8654eaa2dcebc77a7c4fec036c9"],["/photos/index.html","2580e355282947653cb1e3ed9a495587"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","278e986064e2038fe6157c14aa705424"],["/tags/AIDL/index.html","647253423e65a93c19b13db31b2b2732"],["/tags/Activity/index.html","922d1b701d324af1af166984cfb51051"],["/tags/Android/index.html","cf15ff08906bc3b918ac236a2eaef152"],["/tags/Android7-0/index.html","267c72e9e645da193933660fcd792bcc"],["/tags/Androidx/index.html","271e5e8d0623f8ae360ef58bb19374bc"],["/tags/BroadcastReceiver/index.html","ea0bc7fd09e1238c338847ecb7b6b75f"],["/tags/C-文件上传/index.html","cd7bca2da92f68f15725ed4cd6fc14ca"],["/tags/ContentProvider/index.html","c906a17377cc4387453d871b55a97028"],["/tags/Excel操作/index.html","a27c693fbfbd1df93b0ac5e8de78ce1c"],["/tags/GitHub/index.html","54224cf9beced4128cd5c62e27e79662"],["/tags/IIS/index.html","fb6e40037fa8aa3ed04aca3a200b47b9"],["/tags/JPush/index.html","d2a15a9d91a78c66500bd9151ee221a2"],["/tags/Jetpack/index.html","d52cd0d070feaf5cc34d1f97abdfe778"],["/tags/LNMP/index.html","a68bf59d8a248ac2ccf76599f2c9d554"],["/tags/Lifecycles/index.html","ddefc87143353928eea54cd5a7c58406"],["/tags/Linq/index.html","4b45a941a00c647de0bb1910794a9802"],["/tags/LiveData/index.html","c0911dfa6bfb097f78860734ad356045"],["/tags/MAMP/index.html","776c0c33061f8197a41d54906392234a"],["/tags/Paging/index.html","10e9b0e57a088e00f3839020d4a9726d"],["/tags/Room/index.html","e587c9fb2374f8e78f40f91bb838b23b"],["/tags/Service/index.html","d437de019fdf2778276d006cbe31aced"],["/tags/SqlServer/index.html","22ba5fff6bfb43fcaacb75f15da4d3a7"],["/tags/ViewModel/index.html","8542f946640a0ca3a9403f7012cef9e3"],["/tags/ViewPager/index.html","8f32dd3c10fb75847057f67fface78ae"],["/tags/XMLHttpRequest/index.html","b0a420efed6445e159d72b8796ebe941"],["/tags/c/index.html","ff5c93d8355c3ef3bae8c7845a715d3e"],["/tags/coroutine协程/index.html","03085b5f180782b67c914a4f45d16627"],["/tags/easyui/index.html","429babd79306dc896accec4c04d10a13"],["/tags/fiddler/index.html","20e3135f64273f8f3c4cf0affcd86dc6"],["/tags/hexo/index.html","18322badffae2dc0effb0662e9ea8ef8"],["/tags/kotlin/index.html","a28210a74082f238d7aa7f5638f13dd1"],["/tags/mongodb/index.html","99837f9c7f7f4363b1dcc7a4b55745c2"],["/tags/mono-for-Android/index.html","243e05dc0c4cfd3961c9da9bf452982d"],["/tags/nodejs/index.html","e99e5e79b0298de84b1c6675529019c9"],["/tags/php/index.html","dd161853155085e2eb8be7cc41257e47"],["/tags/view绘制/index.html","38d37da1d63a37bd89e559f9627c0ef5"],["/tags/visualStudio/index.html","3c8a5285ef9c52d6975e5c8e2bb05214"],["/tags/习惯/index.html","df33bddf13a376be77560cbdc6b14e40"],["/tags/京东云擎/index.html","d6148d10068f31e3f865198db126e8c6"],["/tags/公众号/index.html","f59ee8f145ce9d77dbda63f89a29eacf"],["/tags/副业/index.html","44dfa8f08149af75f832da551fd69be4"],["/tags/区块链/index.html","35846a5bad97653524ea1034d475db1b"],["/tags/图片保存/index.html","da164df6703e2d9620f9e1b1554550ba"],["/tags/地图/index.html","06b150cdbf3534a03882a273b4418abf"],["/tags/增量更新/index.html","3034cbae484aeed232512babe0c27330"],["/tags/安卓源码/index.html","c47650beed6385f79b8c665e949ac8fe"],["/tags/安卓源码/page/2/index.html","991edd57e135a6eb96a74728ceb3ebb8"],["/tags/屏幕适配/index.html","29b690bfcf89aafb5c7062dffa60fc17"],["/tags/序列化/index.html","416bc9bdcfeb77c10fd2f0a589a1197d"],["/tags/开源框架/index.html","c9dfab92e5497b6f551122d7174cb714"],["/tags/开源框架/page/2/index.html","8db9d87302127f9600c52084e7501fae"],["/tags/心情/index.html","a5b9ad94bfa7168d096a14ba395b8faf"],["/tags/新浪SAE/index.html","2c844313db52069dbe4f757342803bcd"],["/tags/日期格式化/index.html","707803aa366ad575a5fe6d65682b55cd"],["/tags/正则表达式/index.html","3eb8547e4a3a8076b8fe2b6a242a5133"],["/tags/电影/index.html","72edaafc256a66a555a1ab1fdcc5b093"],["/tags/线程切换/index.html","0b0943d39650d4b462329f0d908c3866"],["/tags/网盘资源/index.html","307a5c78894130c6006c0cf1ebb14e00"],["/tags/职业发展/index.html","860d143f469ca08367fd49238190420e"],["/tags/职业生涯/index.html","3176352093e3b1c1bb76ca78c42c3b41"],["/tags/设计模式/index.html","071cf02ce77df9999d1bf59b3e001f72"],["/tags/评论插件/index.html","7d420fbaf796b9f19a5012f15b60e159"],["/tags/购房/index.html","8057aa454c09a284e28659080336748f"],["/tags/跳槽/index.html","d78b76e469ad8b91657582db95b77bca"],["/tags/面试/index.html","e9bd0b067d856268af99acb8a206082f"]];
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
