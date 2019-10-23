/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","3dfa15dce426784bc4692bcd42143003"],["/2014/04/27/Hello-Hexo/index.html","d712d740abc75a7d5e61d7d6a5b04b8d"],["/2014/05/07/001-RegEx/index.html","4874f3387a85fc14f1d5e5ac9bbb413d"],["/2014/05/08/002-DateFormat/index.html","ebf5da61750799c6e8e9e481cb63a6e8"],["/2014/05/27/003-c-Linq/index.html","e55c3b1b801006bc7777831f9068006b"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","1242c5c415f59acd2872a384a3cf6d9e"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","33799e6b3dd389ddbf71e36d2d58cdbc"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","c77f10a6df1e1deb1d3d8afee4202221"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","10cce6c5705dbc131e9159a1a14f45b8"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","dbc4a73f1e5002206a32ad6d266b1555"],["/2014/08/24/mongodb在windows下安装教程/index.html","6ac62e7da9471385f16abe117bab2902"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","9ae25b48f17df0ee33d5ea60bcbb7a27"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","c68ca6a6a18b21c2015acedc69f9862c"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","6a9f178a687d64216de293cb39f0a766"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","42caaa56e1f5d15c0cd223a942d0b5a8"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","d343940fdd19c9082728867e9f636e12"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","0c3ed7c08464fed1b58c7cc779e5aa37"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","3db8ed0ae5fe060c328f2f9979b4844e"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","46d175ebe0b4f3a3c031040a6708d674"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","e4228557cae3574232c5544e42579ff8"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","463a5a0e2730364ef3ce1985ad9e4e92"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","e6fdcbc382ef26056b934f9875263858"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","abce6855932be7a027559ab879423917"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","73bbeb631a1cc650df76e70c51b3f1b9"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","d1a8ad089129cb7082cac62a4f8d72ac"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","8e485580e203b69dc7bc92170e4a5593"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","5ec407a29aa7f7f0e1c92bf6b40bb009"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","85bc67b3780ed12ff30b1eb86f853545"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","67070f6242a0e7070b1296edf815f5fa"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","c664d74ef6eacef2e25d55f9bf7429d8"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","a5444c30e1983b90ea2f637ee24298f1"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","55ab82efc4c01b6e17cfab8daa6212aa"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","b1500cd02238ec47eb468c62aef90205"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","273829044cf29eddbb6af08069f11568"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","4b97bc2e4888b09deec48b4456fe9c29"],["/2018/05/13/四大组件-二-Service使用/index.html","ef0dbde5d315063194fa7a88c8adc7c4"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","7a3958501aba447ad542f64ed98dc6f2"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","bb0f7f355dababf00251f9725f6875b6"],["/2018/06/18/Android源码分析一开篇介绍/index.html","9def604e609194d046d020ce8ccf5c00"],["/2018/06/24/Android源码分析三Service启动分析/index.html","41c369ba334e5460c02e43e0091a9507"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","e12ea53451ef4249d890dc9f69c99fad"],["/2018/07/01/Java基础面试题汇总/index.html","ef1692bcb5a0d3548c06c59d34e5042a"],["/2018/07/06/23种设计模式在Android中的应用/index.html","df92822a398f90f614fe6b60f1badebe"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","0a5abe3606c3e6ce035c262c25c8ebe0"],["/2018/07/07/Android源码分析五Zygote进程/index.html","49e89d477cee3ffd57d4b5175d72a241"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","6f9b1c589d52e526ff30821cc62bb989"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","cecbbedf8b88a5999168520b4c67028e"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","4604e7c3458ea370eee78467cf7b51c8"],["/2018/07/08/Android源码分析九Init启动分析/index.html","33736e28d2268e470ee5488331e09be0"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","1293e660b8f407f67bca72e0161b5b1f"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","23c7a3d4e9b168fe1b7e50e71f4a88c2"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","6e6e817ab3e3ef10e39f4147f8273827"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","cd3feca61e13813fbec8a99160803030"],["/2018/07/21/AIDL介绍以及简单使用/index.html","11032f28f26dd9f655e176b456b8e067"],["/2018/07/21/ViewPager相关使用/index.html","50c054e2d785e3926e8d25e36c836e78"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","8a56e9879fa165a8fa320a72720f3422"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","c66d88df291878f35ed2dcf70a15b6cb"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","805944fbee87a9e16c523d131f96522a"],["/2018/07/22/Android进阶学习笔记整理/index.html","cda716779a074800bfbef6b39f03c04e"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","0cac392c20f3085589f56e560b7cf58a"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","8b57e397fcba571d499047e39270a74e"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","65bb6d5096932adcc24abf0a181cb7ff"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","e415de98c566441bfc65668289be57a5"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","f1f69e6fefce2c64e60d4dc589137900"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","a2dd20b1af9cc48e95d81e923699674f"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","3790434613bcee9381baacf7964bd3e4"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","6a51e9ee6fbaa6628d4162470ccee737"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","a0422bbe5e18f4b5182102ff43372724"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","1092d6a902707bff2c2ad7a937c6993f"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","fb7eff27981b4806fee3bca5bf2b2ea8"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","fc70b81c6ef893888f886406beca2ac3"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","a950bae67cb70b758a9045120294dcd2"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","22297421defb008ba2b3e7616450c775"],["/2018/08/05/Android开源框架系列导读/index.html","8468ae8a0985177e7e2f69b7a79d0b0a"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","9d14f4d2a4e5d7b76037a0fb50d3c8b7"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","1c5917152157e6d78366e9c343117005"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","0196562eda88539ea218bb616c4e46fb"],["/2019/08/25/Android面试题/index.html","41ea0990a9aff0c861d0f0f6727b4e5c"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","e1d7ef2e3048e359ae66c11547000296"],["/2019/09/22/汉尼拔电影观后感/index.html","9aeab7dd17ebedcd4644905e3d0f37fc"],["/2019/09/28/Kotlin与java对比/index.html","ee3ed0b06009be7a84ab47a2ab534bad"],["/2019/09/28/巴比龙电影观后感/index.html","585b20ffd8bd35b4f77bff85faac332c"],["/2019/09/30/mac搭建hexo环境/index.html","d9b6d45b00f282e69f19f55ef49b801d"],["/2019/10/01/关于职业生涯的想法/index.html","72c1a38cbdae06cfc68e1739ad5daf79"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","c7eae843ba543adaf867f1be2a77c109"],["/2019/10/03/AndroidView绘制流程/index.html","4eaf6435743bbc4257dafd0bc33045e0"],["/2019/10/03/Android屏幕适配/index.html","26b2ca5a885b571aca9f9c2b8d64be89"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","dbf04721f9cade8b7f8350e58f279167"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","8052eea73c58ea8b33456e849f7c7cc7"],["/2019/10/13/谈谈逛博客的小习惯/index.html","75a121f70ca51a42c5a85d1d2b911486"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","fa44381df52c6522b316490c9ee04082"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","a97cb4ced3928d7acaf1e7caf0e4e6b6"],["/2019/10/19/关于程序员的第二职业/index.html","1bdf53b2f9bcbb6e42f6d9d3b896d8c4"],["/2019/10/20/一次车被刮蹭的经历/index.html","d71d257ebf5d5e529d43485b16c8911c"],["/2019/10/20/第一次买房经历/index.html","1995b008efc541fea1b777c483f285f3"],["/PY.html","f243c126bf5932dc18da4494758e4a44"],["/about/index.html","abc4fba4f4c6bee06b9361dcac1a8054"],["/archives/2014/04/index.html","68e7b13b71eae2ad84a0105bdc90da9d"],["/archives/2014/05/index.html","66ed8721a008e221c3afb71f3e0820aa"],["/archives/2014/07/index.html","121f4bf960477114cd58451fcf063604"],["/archives/2014/08/index.html","39766370d980fdf95967b861e15aaea0"],["/archives/2014/09/index.html","899ed4356084334b274fa46393da5b82"],["/archives/2014/11/index.html","aa61ef50aeba690b3ac5f3431daadbeb"],["/archives/2014/12/index.html","4ccd1746f666b3863a584ed3b2c1cee5"],["/archives/2014/index.html","b1522ad8c08352d23bb01e6a374f6b1f"],["/archives/2014/page/2/index.html","a7a9668d2ee0ac56333d640f5aef5dea"],["/archives/2014/page/3/index.html","c4eef49d12883ab6ac3ad6f9f985fa1b"],["/archives/2015/04/index.html","5b886b3576cfceb5bf95cf6e6d2a2432"],["/archives/2015/06/index.html","36b524868d831a667162ecba94009a82"],["/archives/2015/11/index.html","a505c584383287b9d66a67a29e055193"],["/archives/2015/index.html","ea5655973c5de5335e0dd3744fae8e40"],["/archives/2016/08/index.html","f570a38cb3de9c45aa045c0ed5913e61"],["/archives/2016/index.html","5bb77c58f8ec248811abe6890af32f07"],["/archives/2018/04/index.html","89587f9a8e9410806154aafbc12b2a04"],["/archives/2018/05/index.html","7f738e93c074e12f27a719c6dc2fdb1a"],["/archives/2018/06/index.html","7e1959d33039848d08d1f35dfbb2325f"],["/archives/2018/07/index.html","c5585fd14fd4ce131dc2ba5ecb9838ec"],["/archives/2018/07/page/2/index.html","0363c9c5b6c872552fc2d20cb97ebd1e"],["/archives/2018/07/page/3/index.html","97bd63ab154f139822501629aad52d95"],["/archives/2018/08/index.html","04002ef3c65cf8497643808a72919e64"],["/archives/2018/08/page/2/index.html","607f76eb07ef4e261dcb5a28e50840db"],["/archives/2018/index.html","00329af7a9fb8c4a8e5635ef6bb39a97"],["/archives/2018/page/2/index.html","011c71abd68e372fefd753b6d2b21ac9"],["/archives/2018/page/3/index.html","98843e4d84cfea39316db404852b3367"],["/archives/2018/page/4/index.html","db1878df33aaa1d4cefd820e98e8df7e"],["/archives/2018/page/5/index.html","7b80cd7e11d452448af9f9d330d0ea39"],["/archives/2019/08/index.html","ca31fa50fa36cb5a531ee9a6d8cacd4c"],["/archives/2019/09/index.html","1adbe66592dcb230ac8342173c7eb031"],["/archives/2019/10/index.html","64c91f63ca7ba789361cf85109530dc5"],["/archives/2019/10/page/2/index.html","47e7271889a9417879dcdce9040596a1"],["/archives/2019/index.html","af4c7b736f670329a10f862c5be3660f"],["/archives/2019/page/2/index.html","873f7c8597440895c1e9ab7e65987110"],["/archives/index.html","d20a31792aaa127bdf51a5708e3a0a6a"],["/archives/page/10/index.html","97c02fb5d87f4f474e6c5cef657f22ae"],["/archives/page/2/index.html","4ed224f646626e4cb30bd857f9c946c2"],["/archives/page/3/index.html","36bac2c4afd21f6490b317031cca90e1"],["/archives/page/4/index.html","517a6dbbf470bb1213341fede36dfb8e"],["/archives/page/5/index.html","99928212a29f4c18ef4fd039eadd76e2"],["/archives/page/6/index.html","0d2a788e7d3cf2b9e47ace49781e4c24"],["/archives/page/7/index.html","4a2e4f5ba50af68ba5667257b0906efb"],["/archives/page/8/index.html","7ece60a00c18f6c9ba08ca0c1c841ead"],["/archives/page/9/index.html","d6a0397e335c82bf3cd6314289f0e13b"],["/categories/Android/index.html","7e1e34f2c350b53dac398db8124cf5f2"],["/categories/Android/kotlin/index.html","281362e6646336b5ba4e3ad4378366db"],["/categories/Android/page/2/index.html","0aa431857d8310e640c6d7e118b828b0"],["/categories/Android/page/3/index.html","4fa4663815542be9b51edf35b26d5507"],["/categories/Android/page/4/index.html","08d7b099ee3d07303cf3b669e134c291"],["/categories/Android/page/5/index.html","aa0dc0e143cc07a9a5b7edac8491d4e4"],["/categories/Android/page/6/index.html","7bf398f2d3dbe903b4ffcabe30df757c"],["/categories/Android/安卓源码/index.html","374d807ec0993ef9d6644419ed0ef129"],["/categories/Android/安卓源码/page/2/index.html","7422eeb30ad318e0f27100ade5ed75a9"],["/categories/Android/开源框架/index.html","bb56625478fb9cfe3abca9466d9a3d42"],["/categories/Android/开源框架/page/2/index.html","edc199f59d4ded0febb451fb466791cd"],["/categories/Android/知识点/index.html","ea11d7716ba83f24fe80011987f9bc22"],["/categories/Android/知识点/page/2/index.html","616be205cb125a124d5b5d17c34c0da5"],["/categories/GitHub/index.html","6ee6f977a42ead67c7522d348f701c8d"],["/categories/前端/index.html","81f7f1f3c2dc4c97ef68840ae208a959"],["/categories/后端/CSharp/index.html","7d604a573bf1ca088db311dcc2d700f0"],["/categories/后端/CSharp/page/2/index.html","60c10132f5dddb6317e3febac70074d1"],["/categories/后端/JAVA/index.html","f3fbabe2061594967dab4c377a5bd5a0"],["/categories/后端/PHP/index.html","6739f1985bd4ecfab81903fe96aec448"],["/categories/后端/index.html","f433b03629fe84aa7dab56c7f2c7cec7"],["/categories/后端/page/2/index.html","924a29edf1b035e9db59e0ebe84401d0"],["/categories/后端/page/3/index.html","feeac2a37a6f5298dde6e577131024ce"],["/categories/心情/index.html","9db5f40008fca84aaee4ca3fc2438667"],["/categories/心情/page/2/index.html","455f8d990184f433ed3779a0815fd9f7"],["/categories/设计模式/index.html","73e3879dbe3e99060e8594040504ac0a"],["/comment/index.html","2f39433fd3e5f8b5b902ee7ed4fcacf7"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","0c1cf42aa5b249790c11d8bf54f37423"],["/js/comment.js","56efdc70b60f6d80df41926f5b0639a9"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","26bbb16d068c42c8dc8dd66cf8352b63"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/page/10/index.html","fc0141035996b1284e2f3962bac13e6f"],["/page/2/index.html","587c8567093a375e93a9ec293fb4d14c"],["/page/3/index.html","42069224a1d80acba317b9e190afd2e3"],["/page/4/index.html","ae08f64240f4e8bee4e169e0e94616dd"],["/page/5/index.html","0dfa4253f27f2831167620faaba6e6e7"],["/page/6/index.html","e073bb7c2d770e7d1c931690ce151f29"],["/page/7/index.html","80141057a49310f60bd972bf8948d048"],["/page/8/index.html","84114848166f2b0bc0501f0bc97f9875"],["/page/9/index.html","323128f3807c1c1e6551309257b010fd"],["/photos/index.html","d65becf48014f7404005726674c726c2"],["/photos/ins.css","093b868e3e4ac785540c587147cb860c"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","742b8fc1129eadece30d11dbec1db037"],["/tags/AIDL/index.html","897f8d2394771bfc74b9f641e36d2fb5"],["/tags/Activity/index.html","8e398cecf85a42ee29c396900a0e1335"],["/tags/Android/index.html","2f71799dd8200bd439e126f6c2cbd59d"],["/tags/Android7-0/index.html","1bbac095d27cdebc9fb616d0dc1f8795"],["/tags/BroadcastReceiver/index.html","c57b5400e53efa87d4685f5aa522a528"],["/tags/C-文件上传/index.html","3857263cae3ebdcdd58ecc29ff36b12a"],["/tags/ContentProvider/index.html","21c4dd233dd7bff8d469b44fbfa3ab46"],["/tags/Excel操作/index.html","658921e38951a047f49f523984e4b5a6"],["/tags/GitHub/index.html","87a7a6e4cf8e0f5ecefb8153d2310b46"],["/tags/IIS/index.html","e95a0d2080ae4c448aa8c9582db1624a"],["/tags/LNMP/index.html","83ae0ae9abe23e87891bac6a840a8837"],["/tags/Linq/index.html","fe40f1f487919632ad1d904314246ea6"],["/tags/MAMP/index.html","958df9e35c1af2b31bc63931f9b0c629"],["/tags/Service/index.html","9b3a3258b3e5e99e8e1db64e82258b67"],["/tags/SqlServer/index.html","c2b075b1d3f00cffc711fac13e0473ec"],["/tags/ViewPager/index.html","26193f19be39e28d80bee29d2c0149d5"],["/tags/XMLHttpRequest/index.html","0b5166ca31f1036aec530c4620f534ed"],["/tags/c/index.html","90b8177d031ba4160002a7a0d7c193b1"],["/tags/coroutine协程/index.html","9c9fa9ee2f054154a93ec01ceebd5cb1"],["/tags/easyui/index.html","d0d5e7eeb6dba4bee58c73e2879bff67"],["/tags/fiddler/index.html","b2cab731af8cc914c1795024672af162"],["/tags/hexo/index.html","87940b5a395654d9e4412f614b30e9bf"],["/tags/kotlin/index.html","36404d10ad9949e61d9ac1602a9f58cf"],["/tags/mongodb/index.html","4e8b36119b82119af53c779801a601b0"],["/tags/mono-for-Android/index.html","728f7e3bce20041b5d94ba7ae06456ec"],["/tags/nodejs/index.html","1674fc6dcfb8c3e92b115e2324d08b78"],["/tags/php/index.html","e9cf15b2c04118c1f6b5d21641e56bb1"],["/tags/view绘制/index.html","ea5adf71e67f162a93f709dc0b196bf5"],["/tags/visualStudio/index.html","7c655cdb9823a26b37959aae0a8cc52c"],["/tags/习惯/index.html","9f8ec6c884ca52422cfd0235ba649c78"],["/tags/京东云擎/index.html","c59a92f4432430179de499e0a9641462"],["/tags/公众号/index.html","63ca651570410509a21174c8743bbe10"],["/tags/副业/index.html","64030458630afb2fcc1bf85a26c5d2b7"],["/tags/图片保存/index.html","ef22811054b67875395daef0a105fb64"],["/tags/地图/index.html","c245f98879d0ea3783e7886376e155a8"],["/tags/增量更新/index.html","a3f5aee3ecf5da93b62428da08518887"],["/tags/安卓源码/index.html","586630d980da966fcf78b31c58109433"],["/tags/安卓源码/page/2/index.html","2f4976cf6776481e87ef92c5a0cea048"],["/tags/屏幕适配/index.html","6d60465b6d688c0e06f9b9174f44b1e1"],["/tags/序列化/index.html","dd00f9b6ee3f9ffa485e21e649cc5ac0"],["/tags/开源框架/index.html","88d2e8492833bc9b819b735f7973c9f9"],["/tags/开源框架/page/2/index.html","2669bd6fd0fdd26db68f138f4537f609"],["/tags/心情/index.html","8ebbded4f2cb73e37b710c54be212921"],["/tags/新浪SAE/index.html","64748e8a332a2dc82d5e7a2b8c582311"],["/tags/日期格式化/index.html","0f91515ee623353a17f949f5263dd51c"],["/tags/正则表达式/index.html","97b0e1c0b5ada56537e8bd5af113eb12"],["/tags/电影/index.html","ab3cb9c4d1e3f7927667f66fd9798e5e"],["/tags/线程切换/index.html","60e327ec3d1ab88ec5ab969f662fe94f"],["/tags/职业发展/index.html","e2964638cee0921b1713991b15a482b8"],["/tags/职业生涯/index.html","25ab4643721d621c93618d54849b5994"],["/tags/设计模式/index.html","16420887be28b3f585136835440c4bf3"],["/tags/评论插件/index.html","fbc9ab7eb5cb39386039af824ac1c9dc"],["/tags/购房/index.html","181449ede229308a8bff74fbc10a26cd"],["/tags/跳槽/index.html","3da12c50c9ddf3a179fce4dcfe93b042"],["/tags/面试/index.html","b17d824d271e852578a7126e53474567"]];
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
