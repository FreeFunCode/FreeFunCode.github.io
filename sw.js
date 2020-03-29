/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2014/04/26/hello-world/index.html","580bf6375fc7547f9acaf1d5b8dd42b5"],["/2014/04/27/Hello-Hexo/index.html","7f03a1c02ef5caa74849e5e0fd3b349d"],["/2014/05/07/001-RegEx/index.html","1fdbc4856fd90f6742ecdab3838cd721"],["/2014/05/08/002-DateFormat/index.html","c924a496dc58b0f84d80681b798e0cf8"],["/2014/05/27/003-c-Linq/index.html","65ed88f92f5b5569193fa52a6226d9f8"],["/2014/07/14/004-easyui的-getSelections-与-getSelected-对比区别/index.html","611bdedb809a0a2517295a721de64acd"],["/2014/07/25/005-“VS无法连接远程数据库”解决方案/index.html","2d47249198b46b782a5ac53926a4ae8b"],["/2014/08/20/006-IIS7发布-EF-MVC项目提示404-0页面错误解决方案/index.html","4abe02c7f5fb39781e82dd78c27f7be8"],["/2014/08/21/00Windows下搭建PHP开发环境，整合Apache-PHP-MySQL（举例软件为32位）/index.html","065fc452892e6290d8e9c7e906c7a3ef"],["/2014/08/24/GitHub在windows上代码管理教程/index.html","3f7ef4f0d61ac00cbaf050ffd9f9da89"],["/2014/08/24/mongodb在windows下安装教程/index.html","4a422fd88486ba9a193f6426bc493994"],["/2014/08/24/nodejs在windows平台下搭建部署环境教程/index.html","b0d6ac958f5bdec37cf8bd87e0e7090e"],["/2014/08/24/在新浪SAE上搭建自己的网站！/index.html","5fb4abf5093a7a1adfd050e5cb53093d"],["/2014/08/26/在京东云擎上搭建自己的网站/index.html","da9f111f7ab6803f62023159552f5c7a"],["/2014/09/03/使用uploadify上传大文件报IOerror-2038错误的解决方案/index.html","0001f070a0fd62bf04f23985807dd677"],["/2014/09/06/在vmware虚拟机中安装centos系统并使用LNMP安装部署环境/index.html","bcae6ad387ab1878613bef702c312904"],["/2014/09/12/mono-for-Android环境配置-环境搭建-破解方法-运行一个小程序/index.html","80444e3d2fe22837e662d0c07beae894"],["/2014/09/15/IIS网站应用偶尔出现服务不可用解决办法/index.html","a7c79b7b789f44275596855eb60cc850"],["/2014/09/28/XMLHttpRequest异步方式和同步方式/index.html","c06587585b9c34d6305891d855ed2986"],["/2014/11/08/Arcgis-地图-服务器安装配置/index.html","ed43cad78c8175b3bf170ccbd8ed795e"],["/2014/11/09/使用“天地图”实现“百度地图”的GPS单点沿线运动，来模拟物体运动轨迹。/index.html","da3197e92e2db55def6db8807abe9b20"],["/2014/11/20/推荐三款使用社会化评论插件/index.html","06060c9b90771504e8821b234aee98c1"],["/2014/11/23/在GitHub上搭建hexo博客/index.html","930d3eb4038102eab05f4f6a28576691"],["/2014/11/28/超简单微信公众帐号自动回复和天气播报功能应用/index.html","0bb1e3996582dbd30deda5c91107d9be"],["/2014/12/02/SqlServer数据库添加角色，角色授权/index.html","9f73f1eca3af146630911be935e81471"],["/2014/12/02/使用SqlBulkCopy实现Excel批量导入数据库/index.html","c0b56cb770977a62b7dbb27e7988afe0"],["/2015/04/27/跳槽穷半年-转行穷三年-死守会穷一辈子/index.html","ce1403ea3a966f4bbfe69acde84888d6"],["/2015/06/01/VS发布报错未能将文件……复制到……/index.html","353168755ca0f166a0326d0bfcc0aa8e"],["/2015/06/02/easyui换主题，并记录在cookie-以及cookie作用域介绍/index.html","40eaf2820edcf5712b2d178db66d39b1"],["/2015/06/07/错误：类型System-Object未定义或者不能引入项目/index.html","5e6f6ae18418f541ec1c4a0452f2cff5"],["/2015/11/14/最近的一些感想（关于移动客户端开发android-ios）/index.html","cf6cc997577efdc262f1b52d155221ec"],["/2016/08/27/第二次裸辞-潜伏期-一些感想/index.html","bc5a634165905b012bf3e56c527c4f15"],["/2018/04/11/四大组件-一-Activity生命周期/index.html","55bf65d5ab9b418344f18a5297c3a430"],["/2018/04/13/解决问题：保存图片到本地文件夹后，在图库里看不到保存的图片问题。/index.html","d77fdf15c6d625afedbc22fbbe62f3d9"],["/2018/05/06/使用fiddler抓手机端http数据包/index.html","084aab1c15ceaab3dac9b1fc9269b20a"],["/2018/05/13/四大组件-二-Service使用/index.html","b6510039a4cac43196b9a3bacb069a77"],["/2018/05/16/四大组件-三-BroadcastReceiver介绍/index.html","0ae6a96e7473eb6b9c7e68a20e53d49f"],["/2018/06/18/Android四大组件-四-ContentProvider介绍/index.html","58b318714ef835e02f132be0b174f0a9"],["/2018/06/18/Android源码分析一开篇介绍/index.html","1b4267438d1c769684a3835229516164"],["/2018/06/24/Android源码分析三Service启动分析/index.html","492b245dcec75c9c6542cb828eecce9d"],["/2018/06/24/Android源码分析二Activity启动分析/index.html","bf0c6679e37fc7a3189f6e637e5b68b1"],["/2018/07/01/Java基础面试题汇总/index.html","adc91d61b238c729fe9a5289a153f58f"],["/2018/07/06/23种设计模式在Android中的应用/index.html","1c2df27492865f084b76f98704b2933a"],["/2018/07/07/Android源码分析七Launcher桌面程序启动分析/index.html","c165d8baa673e25731e0ea3a44123301"],["/2018/07/07/Android源码分析五Zygote进程/index.html","59ea7c35792888ffeda49836c7d03f2e"],["/2018/07/07/Android源码分析八Launcher桌面启动App过程/index.html","3092eb4a97de0ace755dccba148c3f3f"],["/2018/07/07/Android源码分析六SystemServer进程/index.html","a9a6678c3926cc687790384b2bacfde2"],["/2018/07/07/Android源码分析四Handler异步消息机制/index.html","49237d1b3f6af7bfc87de3d45a7a31e1"],["/2018/07/08/Android源码分析九Init启动分析/index.html","c345e20c364a251e2f014227f6b05d84"],["/2018/07/09/Android源码分析十Dalvik虚拟机创建过程/index.html","cdf87ea61d5292a24fda4d9bc21a4be3"],["/2018/07/14/Android8-0新特性介绍以及注意事项/index.html","e3c28fd69973b888d0789eb2f2f0512d"],["/2018/07/15/Android源码分析十一事件传递机制/index.html","0700390794b60384c651ce0ad634d852"],["/2018/07/19/Android四大组件-五-第五大组件Fragment使用/index.html","1a5a5cfe7ae080eae9e0477a28f7d034"],["/2018/07/21/AIDL介绍以及简单使用/index.html","87e7f4c229c08d9c9f2e2f4e298f3635"],["/2018/07/21/ViewPager相关使用/index.html","861a1ace5ec63ab81f272847cf7ca6c3"],["/2018/07/22/Android源码分析十三ActivityManagerService服务分析/index.html","8cb6792bce84894dd984080a44d85711"],["/2018/07/22/Android源码分析十二ServiceManager服务分析/index.html","3a13b0cf1af37f3b0570be13b7ed8d65"],["/2018/07/22/Android源码分析十四PackageManagerService服务分析/index.html","39436eadf655044c89710c747f76b408"],["/2018/07/22/Android进阶学习笔记整理/index.html","7bf980b99b8a607dca78b613b4592d3b"],["/2018/07/22/Serializable和Parcelable之序列化/index.html","d7550177b346682b22415fd38a3a41f1"],["/2018/07/28/Android7-0下载APK后自动安装/index.html","c3bfda5aa2286b9d143876d400f78265"],["/2018/07/28/Android开源框架一OkHttp网络框架的基本使用/index.html","eac5fa7849cfd3e75f887c4598c319c7"],["/2018/07/29/Android开源框架三基于OkHttp进一步封装的OkHttpUtils介绍/index.html","0ddd78a3df345b4bcf4ed5954c8dff13"],["/2018/07/29/Android开源框架二基于OkHttp进一步封装的okhttp-utils介绍/index.html","ef72c3c0118c4d168339aafef5157e22"],["/2018/07/30/Android开源框架五xUtils-Android里的ORM-IOC聚合型框架/index.html","2cebb00d8a90aea4bcc88b136bc97f5a"],["/2018/07/30/Android开源框架四Afinal-Android里的ORM-IOC聚合型框架/index.html","7e84e789d9490c8956ff783559af97b9"],["/2018/08/01/Android开源框架六Volley-Google的轻量级网络通信框架/index.html","cb53743684f6879463881011c56d5af7"],["/2018/08/02/Android开源框架七事件总线-EventBus/index.html","d795c478106a1ab51307fb4e17a7a321"],["/2018/08/05/Android开源框架九图片加载框架-ImageLoader/index.html","7c92c21683997b69787738e5236349d1"],["/2018/08/05/Android开源框架十一图片加载框架-Glide/index.html","51a37fdcabb0166c3c1eb327dbd3abc8"],["/2018/08/05/Android开源框架十三RecyclerView/index.html","c8c68ea8b4509c2d9959a3a790d4b0a5"],["/2018/08/05/Android开源框架十二图片加载框架-Fresco/index.html","ca957bb22e3756167fc184bd46c7f5e7"],["/2018/08/05/Android开源框架十图片加载框架-Picasso/index.html","089de76557efe2967f883143129a6727"],["/2018/08/05/Android开源框架系列导读/index.html","efd2db6757eded96e0b1dc1353f45f71"],["/2018/08/07/开源框架十五下拉刷新框架-SwipeRefreshLayout/index.html","09babd3c25971f3710971ee9eeea0617"],["/2018/08/07/开源框架十四列表下拉刷新框架-SmartRefreshLayout/index.html","ccd08bf49dfddfe88c43270327ace0a6"],["/2018/08/12/Android开源框架十六视频播放器-JiaoZiVideoPlayer-JieCaoVideoPlayer/index.html","769b3e85f10bb4c8a489095f981aac25"],["/2019/01/01/Jetpack之Lifecycles介绍/index.html","160d5d3391f26439b882d2d51abaa03d"],["/2019/01/01/Jetpack之LiveData介绍/index.html","af79bcc12c15519185f4d5ccd5d9e11c"],["/2019/01/01/Jetpack之Paging介绍/index.html","0f6b188054994600b4140b67b71e2090"],["/2019/01/01/Jetpack之Room介绍/index.html","436768296e2cbc757231b9ca2a76b88b"],["/2019/01/01/Jetpack之ViewModel介绍/index.html","6c0495b52167f76e006b1cddda245678"],["/2019/08/25/Android面试题/index.html","1eead1aafc7d10d78449ff7a224e6272"],["/2019/09/04/Android开源框架八注解框架-ButterKnife/index.html","1b672ed40dfb645a2a181f44bb41aa89"],["/2019/09/22/汉尼拔电影观后感/index.html","423cb08879f1a820d908655ae1795e19"],["/2019/09/28/Kotlin与java对比/index.html","40fd25a9c78683c36e8723b09981e53c"],["/2019/09/28/巴比龙电影观后感/index.html","6570bbf5856c3dbe6744b3b60849f88a"],["/2019/09/30/mac搭建hexo环境/index.html","d4f790d343db645b1946510ce1d05627"],["/2019/10/01/关于职业生涯的想法/index.html","d1641c964fccc5bbede9b8b1f737a5eb"],["/2019/10/02/蝴蝶效应-电影观后感/index.html","c70015e84d6fd7517a28a8d2dd9bb093"],["/2019/10/03/AndroidView绘制流程/index.html","22423a584aad5b0e2c59316058f05e7a"],["/2019/10/03/Android屏幕适配/index.html","5c3f9672e7030e26f6dddd4442436946"],["/2019/10/04/post《蛮荒故事》电影观后感/index.html","65330a4f0bab457874a9fbbb1ae74006"],["/2019/10/07/bsdiff和bspatch增量更新概念介绍/index.html","500722ecc99fd994016c83014b0c7ddb"],["/2019/10/13/谈谈逛博客的小习惯/index.html","3cbf456163a3b9c2c24e0ab773b94631"],["/2019/10/19/Android-kotlin-coroutine协程的概念/index.html","05b40a10385c62a05327cac5e12a7f8e"],["/2019/10/19/Android子线程切换到UI线程方法总结/index.html","49b3912e1def9b24d672efc507f0cfc8"],["/2019/10/19/关于程序员的第二职业/index.html","4c96b722f58ca2fcc75c39b7f594313e"],["/2019/10/20/一次车被刮蹭的经历/index.html","8128e65de0cb57e20347bf4341ff682c"],["/2019/10/20/第一次买房经历/index.html","f1e5b28bab393cb79d2e5793dfb9b8b0"],["/2019/10/26/kotlin之Lambda表达式/index.html","7d211d13e9b8518b353017e9396a167b"],["/2019/10/26/收藏网络资源分享/index.html","b95b27da3a300f297ef07b3c2c79e097"],["/2019/11/01/Android之Jetpack简介/index.html","d632615d0182987a0b88daae01282206"],["/2019/11/01/Jetpack之Androidx介绍/index.html","0f5bd288b5fcce49f2ef3556415ab5cc"],["/2019/11/02/初识区块链/index.html","4a3e5600f411022dc87d3349e991b28a"],["/2019/11/14/踩坑-极光推送JPush自定义提示音/index.html","a738ecc326b6fa0e3be5506a1d24369a"],["/2020/02/10/2020开年的一些感想/index.html","664d8edebaa3a5a2460492f37c5e862f"],["/2020/02/21/Android-8-servicee保活实现/index.html","6d6738ac2d71db3df90bd399795c137c"],["/2020/03/29/美股熔断与美联储救市/index.html","1b6085937eeabab9103ae6c9f4df8b60"],["/PY.html","02b4cfd267f62dd697370ab741b40c4c"],["/about/index.html","173a22dd2d2af5cf74364315d46e3a22"],["/archives/2014/04/index.html","f743b7a4a8569b9744774b23243db22d"],["/archives/2014/05/index.html","8d91d957b4e1080a3a62c1236563ff24"],["/archives/2014/07/index.html","3a8aac8f842b1500b47fdd25de086940"],["/archives/2014/08/index.html","9899ca96fe668be8f2ca18ac44109cbb"],["/archives/2014/09/index.html","43efe95982ee378eb96a88f351fe08c1"],["/archives/2014/11/index.html","319d6760a7b272f4192030a3d80aa3e5"],["/archives/2014/12/index.html","6bd515664cb2e9197ff1d827ba4e845c"],["/archives/2014/index.html","33567e70ace5b7933f90e1377bfce32f"],["/archives/2014/page/2/index.html","c87ab810648983ded4752fccfe57cee8"],["/archives/2014/page/3/index.html","9bfb86b47aaeb9d824e832ec00db2929"],["/archives/2015/04/index.html","c994c6487b2f3aecb1d8d6cd71018413"],["/archives/2015/06/index.html","5fc7e65039579fff6247c85b56de1345"],["/archives/2015/11/index.html","55ac84254ad3d6e68f4c87f82cdcc0a5"],["/archives/2015/index.html","fec999702d6c7254cd66e56b47075391"],["/archives/2016/08/index.html","12913efcb4acff1facdfbbd8a60bb011"],["/archives/2016/index.html","c20cbdaafe901772983d7b113ab79d65"],["/archives/2018/04/index.html","acdde8fe52025da33067be41b0bbae53"],["/archives/2018/05/index.html","a626ad6df09c2edecf72cc6544814072"],["/archives/2018/06/index.html","8725debed138580666fc18406efd3ae4"],["/archives/2018/07/index.html","60d2cb89fb4ae68054251518a02a3ec9"],["/archives/2018/07/page/2/index.html","8aee6e39b458ae16c0a28684e62d354d"],["/archives/2018/07/page/3/index.html","87aec2f1c9fd6459eb8111fe566b6493"],["/archives/2018/08/index.html","4dcd5c3f76e2aa65981adb94bfc2bcfe"],["/archives/2018/08/page/2/index.html","a58b1a9646ef870b69f6654657cc56f1"],["/archives/2018/index.html","045fd2f823b1d749c2fc7b5ca102d0c4"],["/archives/2018/page/2/index.html","94940426e1208294041761f4e7b0ab99"],["/archives/2018/page/3/index.html","bea751f2942bb46a839ebb207ea8be6c"],["/archives/2018/page/4/index.html","218f836c5bc7e11c33d2ee32bdd8c899"],["/archives/2018/page/5/index.html","cce2516329e27a4891b8b0e84d0b1abc"],["/archives/2019/01/index.html","209e92195cb3912c03d4b6344a064f13"],["/archives/2019/08/index.html","18e4f744c2b6272886fbc1cbd1d2fa90"],["/archives/2019/09/index.html","a532f71d58d12da917a3991528db0c57"],["/archives/2019/10/index.html","3f0ab36d839647d21593eae77162b0ee"],["/archives/2019/10/page/2/index.html","8bf6cccc38a3e08c8e539e25dd9ef375"],["/archives/2019/11/index.html","46dbd96bdd93b7e470c1e61467cdf15e"],["/archives/2019/index.html","6aad198b98a709cec42cd591f6debd3c"],["/archives/2019/page/2/index.html","1fa2b4d3bea99269ce4f48ce0925393f"],["/archives/2019/page/3/index.html","d9f5fd5774dd9c7f994fbd8729efc34c"],["/archives/2020/02/index.html","f1be9c0a2ff87736f7a367392899a75a"],["/archives/2020/03/index.html","2591bea878c26b7b2e4a9c90fc517add"],["/archives/2020/index.html","68667e66c1d0d0302c20fae7404e5448"],["/archives/index.html","5c60b5cbcf66610119f26f0d1c630d46"],["/archives/page/10/index.html","9158fb89d5008cb95f528a7d146d4f03"],["/archives/page/11/index.html","332b4264e940c62bbbf3f4f714570859"],["/archives/page/2/index.html","589d383ef813328f0516865b2959b843"],["/archives/page/3/index.html","a96611d32a79269dd8126f3695a342c7"],["/archives/page/4/index.html","5e26670846c2c5c18663d6e0e7e5a257"],["/archives/page/5/index.html","97ebc3b57794d733c0f2770720a2d507"],["/archives/page/6/index.html","0813a0ad302ceec55c9c5fb4cb05827f"],["/archives/page/7/index.html","af97dc2bed2f241ae61ede7aecf49ea7"],["/archives/page/8/index.html","129ead323872034ec206acbaf6f44540"],["/archives/page/9/index.html","52696037d3ff14975d91ae4634b4ab27"],["/categories/Android/index.html","d9796595e5f10bd64d61b53550c7f4fd"],["/categories/Android/kotlin/index.html","83bb352b4f7b7644c0a306907b678b0f"],["/categories/Android/page/2/index.html","d502f37ec06d2e305933cd9be6ea0b13"],["/categories/Android/page/3/index.html","c2e085cc5aa15996d9101927e6390415"],["/categories/Android/page/4/index.html","3883c7a151c6cc032238cf6069f0858d"],["/categories/Android/page/5/index.html","2c59a5b88fc0b4d8c5d5dac3e24765d8"],["/categories/Android/page/6/index.html","8b3bef8ea6e8a8919b6b52038cde3630"],["/categories/Android/安卓源码/index.html","b44bd52f9a50311618078c90587ac07d"],["/categories/Android/安卓源码/page/2/index.html","7098591cddd7fbf861f20c0858507657"],["/categories/Android/开源框架/index.html","c58d8830fe417df185c83ea3506d5a7b"],["/categories/Android/开源框架/page/2/index.html","a11422bed149a304c4ca2048796c93d5"],["/categories/Android/知识点/index.html","5c1c48e7ec343724e69fd1b4f8373cd8"],["/categories/Android/知识点/page/2/index.html","89f0c6d5aa44645b12ad4107b9a26f4d"],["/categories/GitHub/index.html","06a4aff570c7f577399ef467e53d5630"],["/categories/Jetpack/Androidx/index.html","79c95b6f25bf3b96210434cffa378292"],["/categories/Jetpack/Lifecycles/index.html","c06b2094c9473126fa7890f09f890b58"],["/categories/Jetpack/LiveData/index.html","0f4c0317440c0d5fb6cd42cedd474401"],["/categories/Jetpack/Paging/index.html","05b4c342739eae60a79a9172b117b782"],["/categories/Jetpack/Room/index.html","44712cebc260cd5072121881a119f305"],["/categories/Jetpack/ViewModel/index.html","f4e6360f3530b2522713c30ca50a5b1f"],["/categories/Jetpack/index.html","dba2e18b45553133882aa65792bb84a8"],["/categories/前端/index.html","0c9b8cd205d228e961d95b926d668e93"],["/categories/后端/CSharp/index.html","9d24cb9ca45d912d11a55b4a9fcf9a85"],["/categories/后端/CSharp/page/2/index.html","21a062976bde139aa38997e39334abcb"],["/categories/后端/JAVA/index.html","29350f1cb6cf404805ed9a009282757c"],["/categories/后端/PHP/index.html","e041b1d3aee4330b0a54f3106b0a12f9"],["/categories/后端/index.html","41e4eaa9d0d3967cd810bfd00434a8c6"],["/categories/后端/page/2/index.html","e636f85e91785511f889ac45cb962641"],["/categories/后端/page/3/index.html","38840b2a77dd85f79599f7577d840236"],["/categories/心情/index.html","a9a87457e9d8bee5bc8418b4016fdac4"],["/categories/心情/page/2/index.html","8990cabba48acdd937b6a8eea8be9469"],["/categories/知识点/index.html","f98e062bac2f8dec603dd5104af1ed2e"],["/categories/设计模式/index.html","c4b63082788563f7baa48d5250ea86ca"],["/comment/index.html","787b06a2b8e47331833418895d505040"],["/css/fonts/homizio-nova/italic.ttf","bc98c645dbbfa2396c7b67b452353289"],["/css/fonts/homizio-nova/light.ttf","e157b2bff6f8e1315b3864fc16dc3132"],["/css/fonts/homizio-nova/light_italic.ttf","3c061b28becf5d0d82e8cfd0281c9f43"],["/css/fonts/homizio-nova/regular.ttf","59e80f47357c64be1e8915e77969d7a4"],["/css/fonts/icomoon/icomoon.eot","06c440370ff65a4d137acf6b065d7fd0"],["/css/fonts/icomoon/icomoon.svg","a2c1be241ee6cb548016a95064a4c98f"],["/css/fonts/icomoon/icomoon.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/icomoon/icomoon.woff","c7b4cfe4976e69e0e9cf73122a6ec0c5"],["/css/style.css","6f402edc9248d8becc99d88077a3fcbf"],["/images/2020kainian_1.jpg","d5a1f523c46fe05f38925a43528ae2d0"],["/images/2020kainian_2.png","21dfdf99770d6e946a7db90ab6ef31f0"],["/images/2020kainian_3.png","849a98ea3181c0a13284f149be3b37f7"],["/images/AndroidFrameWork底层开发视频全套.png","506202f324dc843199479adbb4ddbce1"],["/images/Android基础资料包pdf.png","13ae1124b4cfdcec8a9e7ead646f05b1"],["/images/Android源码.png","616c3f5db328884e500ced2d13948543"],["/images/CShap入门到精通视频教程.png","0fc0ec0a28f657f8a9655c85187febce"],["/images/TheButterflyEffect.jpg","9a4500ac466b979bd55c2d2b6fe1e6ce"],["/images/androidsupport.jpg","31ed6356d4feddd0988ae8ec2a45c375"],["/images/avatar.jpg","0fca13d997951023109830a699ae4327"],["/images/bsdiff&bspatch.jpg","b8366880ac6ea5ef88f4736fbc9b2c02"],["/images/dimens_01.jpg","0e208b149c2dcd1f9f83cc9769885680"],["/images/dimens_02.jpg","0ee6a94fb4889a5ad8c2acc45770f479"],["/images/guangboke.jpg","ea238228d5f281e94f23543dccdc73fe"],["/images/gupiao_baoweier.png","320f8a9d9a0fb5c83306fdcf993a766d"],["/images/gupiao_jianzhenglishi.png","e2d54b4036a56ea99dd358d6e231008c"],["/images/gupiao_rongduan.png","b83d1044c5352216034ddc06993da0d9"],["/images/gupiao_shangzheng.png","06db8ba1c4edb6e22d3003d0ab55f437"],["/images/jetpact1.png","41b69830d7064c738565d4d60d85ee70"],["/images/jetpact2.png","c46e1de743cb3e39e5c85d56e82f8e46"],["/images/kotlin_vs_java.png","e32c1060c2014f680cf5ccb39e4d9f19"],["/images/kotlin系统入门与进阶.png","d099501b0cfb93b2d3b2c6cf983deb59"],["/images/python自学视频.png","b236a70eedc29bd2be5adabd6f284b18"],["/images/xinqing_babilong_01.jpg","e89f68aacd40a95838d1d3c8431df522"],["/images/xinqing_babilong_02.jpg","6350776d5037ac178c461003a8cf305c"],["/images/xinqing_hanniba.jpg","59877e12360a4438e2f17830a9306c44"],["/images/副业1.jpg","90ffe107e0109041ab6194a2f3bb7156"],["/images/副业2.jpg","7ece77a0c5492d3efb44d033ded93871"],["/images/副业3.jpg","ddb0ab9f477fa3b9065e7f1354ee470d"],["/images/区块链1.jpg","13f2f5ab4b72f91a02b1f097f8fad176"],["/images/区块链2.jpg","231186c26ef547291705d7008eefc8ea"],["/images/区块链3.jpg","a3d3a0b041a4b653bd49f008aa705631"],["/images/尚学堂java马士兵视频全套.png","e85903d0cee271973d23b89cc3e8f201"],["/images/尚硅谷Android企业级技术视频.png","1e7015840319ba100c6afa976e527af1"],["/images/房产本.jpg","011bdf5a8312f5eafb88d82aa4b8db10"],["/images/消息通知.jpg","e484bf7c7f2bf6328357fd748f3882e8"],["/images/消息通知渠道.jpg","a49ddead9ba968833b6635fb03b49647"],["/images/深入理解Android卷.png","1e87833b3a600f1aecfec5c7fb089573"],["/images/线程与协程.jpg","9f43aa42615cbe415d2bd0e91aa59c5a"],["/images/老罗Android开发视频教程.png","e2e0f2f5549545fc2bf0c4272b7381f4"],["/images/蛮荒故事.jpg","9f7796ae417a46eda54f2fc60c224d28"],["/images/车刮蹭1.jpg","e80b757b5c381926ecaff8c058436edf"],["/images/车刮蹭2.jpg","d16d1f898544b4e970a9921fcf6af160"],["/images/车刮蹭3.jpg","3a1738302e1b38fcf5a761038d11d438"],["/images/车刮蹭4.jpg","25051772fce902808b6f822094bd73f0"],["/images/进程与线程.jpg","fb8ca49275b3d204bf8523376a7112bc"],["/img/alipay.jpg","75803c3d7a6e315f01b3cd5d1e6dd75c"],["/img/default.png","f65e6bd51089234459498562ad04cf3b"],["/img/empty.jpg","662e0384eb3b92bd161b12e06c06d1c2"],["/img/lab/banner.jpg","0a24628dd89dbe22e1a5fc445d0b4d16"],["/img/lab/banner1.jpg","28fc9ab6ef4c68594c1fa7d8b9796662"],["/img/loading.gif","c7cc66860b87cc106fa5ef149808de27"],["/img/no_found.png","ee48b1818324be8b5cb1f16acaa91de7"],["/img/scrolltoparrow.png","b95d9261429e41d1dae1a48b8fb0dc98"],["/img/share.png","5f9b21c9b54f72b8dc48d3cbdffe73f9"],["/img/thumbnail/0.jpg","c6a1a69847bd4bb23697bb8e5d10149b"],["/img/thumbnail/1.jpg","a295c69592f069c3bea54f03ce047ecf"],["/img/thumbnail/10.jpg","978020d89981abe1b103782d1d9ebb0c"],["/img/thumbnail/2.jpg","d81ffd5c370b4385d36230f7caf1c0e9"],["/img/thumbnail/3.jpg","5b0b2e8eaf251820d38fd2dec0e27d24"],["/img/thumbnail/4.jpg","c8a07670d4772ee3940f9242ea31f4c1"],["/img/thumbnail/5.jpg","07a5f73e5bbe75a6088ad03d283c89cd"],["/img/thumbnail/6.jpg","99ec07e410f459fbc9d941ddc463727d"],["/img/thumbnail/7.jpg","215e9405c664534f609cdd3ec7d1eaf6"],["/img/thumbnail/8.jpg","9ffc9dac6e6d7f31bfda55895c4430dc"],["/img/thumbnail/9.jpg","b6feab9925a88cc1abd8fd62e3b9a4b1"],["/img/unsigned_avatar.jpg","21dbb8e51040ab48d7d1904176bf04cd"],["/img/user.png","eec761714a149e551524bdce1fb4556f"],["/img/wechat_mp.jpg","b569853afe961c329f96066807917883"],["/img/wechat_pay.png","d0031ff6b10487f4deacdd0b4ddc454a"],["/index.html","993a357e123a7a7d0ae07610983e8cce"],["/js/comment.js","b6ca9115370a33f9d8fab0b7c6c77fef"],["/js/html5.js","eb6edea4daa9d68c1468a92ca4291779"],["/js/main.js","2d0ae93d71bb5fc6b6cf1338ed4a4cb6"],["/lab/index.html","50b7d4411abc36d6cd237e08a1f30e9d"],["/max_photos/2014-05-01_玄武湖1.jpg","16c0f92f3e2b17f4bd521fbe037cd458"],["/max_photos/2014-05-01_玄武湖2.jpg","c4c4ddef0170d9a149a8f4def5b728d7"],["/max_photos/2014-05-01_玄武湖3.jpg","ac38b134f659158ca97d07b19615ee7f"],["/max_photos/2014-05-01_玄武湖4.jpg","00e33f8042370bfbc17317006215be1c"],["/max_photos/2014-08-29_庐山1.jpg","722ed764d6f0b5922b1747907749cd88"],["/max_photos/2014-08-29_庐山2.jpg","31f529a19d4cfa0c4f90ac27bde74463"],["/max_photos/2014-08-29_庐山3.jpg","e9cffe9fe9d4b6338f1d51215fb44b93"],["/max_photos/2014-08-29_庐山4.jpg","dbf158723799f51522a67f5f0076a631"],["/max_photos/2014-08-29_庐山5.jpg","3db837b38116a52bd7b95d64acafbb8b"],["/max_photos/2014-08-29_庐山6.jpg","023afa8bb9b71e5a8e686e8d22672381"],["/max_photos/2014-08-29_庐山7.jpg","dc68b65e0865982cd39a99db40c9921a"],["/max_photos/2014-08-29_庐山8.jpg","b56e3386e02c27d6d5b1da159362d232"],["/max_photos/2016-07-24_黄山1.jpg","486ece532c84957a6c4b649c193a1cb8"],["/max_photos/2016-07-24_黄山2.jpg","a4de241f907916341d030e9291eaf487"],["/max_photos/2016-08-25_青岛1.jpg","6fbf8c605ac62fd29e45cd0f803af2ad"],["/max_photos/2016-08-25_青岛2.jpg","9ee85ade024fcf9c82b7991099190b5f"],["/max_photos/2017-05-03_舟山1.jpg","44090d70d0939e41dc0959d79c57de41"],["/max_photos/2017-05-03_舟山2.jpg","15930ee168bfba10a339ec1c48d9ae53"],["/max_photos/2018-06-30_网红桥1.jpg","223a54092235b7bc956c431394074475"],["/max_photos/2018-06-30_网红桥2.jpg","9e44f1d0c747c2a43566ebdb0272835d"],["/max_photos/2018-12-23_方山2.jpg","0b790364cb1134b1fbb0c0e5388726dd"],["/max_photos/2019-10-24_1024程序员1.jpg","97e237f930f55399fb8d37c6437bd53e"],["/max_photos/2019-10-24_1024程序员2.jpg","ff6a2b5be7683287fbfce317e423e5df"],["/max_photos/2019-10-27_罗小黑1.jpg","36d71beee7c1e6a0404b3ca633dd0659"],["/max_photos/2019-10-27_罗小黑2.png","bdaf833de127ad913c11044f4bbc0c75"],["/max_photos/2019-11-01_地铁小狗广告.jpg","b7def364693bb04d0a4b7f616833bc34"],["/max_photos/2019-11-09_小纸条.jpg","9521af4236410680f0259dd50ee3338b"],["/max_photos/2019-11-11_知识星球.png","051fbca270402f271e6c134a0740b97c"],["/min_photos/2014-05-01_玄武湖1.jpg","729b6853a341c40d3ef83cfe1c4c1d15"],["/min_photos/2014-05-01_玄武湖2.jpg","d6e8d8eb513d66acce377652778b8257"],["/min_photos/2014-05-01_玄武湖3.jpg","2a484838a388a7800105342cf1195692"],["/min_photos/2014-05-01_玄武湖4.jpg","f2b764ed89bdd76bfd719af897061f41"],["/min_photos/2014-08-29_庐山1.jpg","7286fee62667f2975b53ef19a953b76d"],["/min_photos/2014-08-29_庐山2.jpg","8ca2c1ffc95da7b2d45b034b50ea82d0"],["/min_photos/2014-08-29_庐山3.jpg","413f124302506a849e09e9ba8013bb3d"],["/min_photos/2014-08-29_庐山4.jpg","db45e517b2953e639b39ba7a69dad169"],["/min_photos/2014-08-29_庐山5.jpg","f8bde6eb7811146033a250d2d0e787ba"],["/min_photos/2014-08-29_庐山6.jpg","5d7828f8be62a0211314e265a6142888"],["/min_photos/2014-08-29_庐山7.jpg","d6f62ebecc695fd953ff45a370a38f3c"],["/min_photos/2014-08-29_庐山8.jpg","9ff5dd47e7349378e67c89fe1f599029"],["/min_photos/2016-07-24_黄山1.jpg","155083e00739d3c1529b32c3e4c6afed"],["/min_photos/2016-07-24_黄山2.jpg","f14fc4b880ebdce3f723c0b9be5743b7"],["/min_photos/2016-08-25_青岛1.jpg","5ec6096b7ba7ecf34365cea64f18da29"],["/min_photos/2016-08-25_青岛2.jpg","61cf23251aa12f47100e3a7f48053b4c"],["/min_photos/2017-05-03_舟山1.jpg","dc76cec518e664ed9ffe46fd2961fb7b"],["/min_photos/2017-05-03_舟山2.jpg","17665f978b1c1472c3667128e2784266"],["/min_photos/2018-06-30_网红桥1.jpg","2fcca9e29f0b6b22ab8b9693e66ad38c"],["/min_photos/2018-06-30_网红桥2.jpg","4c8ea214619f8130457bb11993db1d98"],["/min_photos/2018-12-23_方山1.jpg","ce8adec43f13a5b631b9220858a580f8"],["/min_photos/2018-12-23_方山2.jpg","235750c036badac9a5dd49caeade4b4f"],["/min_photos/2018-12-23_方山3.jpg","da61d99e52bd88d8325f62822b003292"],["/min_photos/2018-12-23_方山4.jpg","19524493be3cb6ad5c02647025875c45"],["/min_photos/2018-12-31_厦门.jpg","93ab1337a5bb78c567b96156b9e6b1d7"],["/min_photos/2018-12-31_厦门1.jpg","2ef84be359ac7390f159f0e7099c3918"],["/min_photos/2018-12-31_厦门2.jpg","0c73a49c9b5fcde5d2fb56eef85ae99e"],["/min_photos/2018-12-31_厦门3.jpg","cc10caf01c204f0befeaa6ea5ca6501c"],["/min_photos/2018-12-31_厦门4.jpg","c9412a7ddce9e98b72bd8ff9f5f3f19a"],["/min_photos/2018-12-31_厦门6.jpg","9497052bf064eaa16e3822111cd9622b"],["/min_photos/2018-12-31_厦门7.jpg","9353a09ec241e9d4045b6a832aafb424"],["/min_photos/2018-12-31_厦门8.jpg","03fddb958694f57e6298b105d25ce6e4"],["/min_photos/2019-01-05_鱼1.jpg","74412ed52231cee524afbda00b040ee9"],["/min_photos/2019-01-05_鱼2.jpg","a72969bc54ddaae9d78f682d2810b066"],["/min_photos/2019-02-05_home1.jpg","962db11c5ad0a85271a2dec33268ed70"],["/min_photos/2019-02-05_home2.jpg","d32cf90e553a89df7a0df22bd1b39877"],["/min_photos/2019-10-24_1024程序员1.jpg","e762862c4f868af69050a0c068781fb3"],["/min_photos/2019-10-24_1024程序员2.jpg","c73a9a9f0c0c63f7b656208c170e2d4e"],["/min_photos/2019-10-27_罗小黑1.jpg","b3c77ac8d9f40c8bc565ea917ebd8a49"],["/min_photos/2019-10-27_罗小黑2.png","af4f868b2b92800e7167d20d3b0a6941"],["/min_photos/2019-11-01_地铁小狗广告.jpg","6d224e225ed4bc80054b6bc1e2b26e94"],["/min_photos/2019-11-09_小纸条.jpg","8760c31b83bf9d0b45de778ad4790dd5"],["/min_photos/2019-11-11_知识星球.png","78d2774929aec1ec6f1a14820ba55965"],["/page/10/index.html","c7026a721d9ad2894eb844332eade694"],["/page/11/index.html","890120e2d3da05779eee27356a7153bf"],["/page/2/index.html","83a25664ed864c691ab1878873308bd9"],["/page/3/index.html","e5f60fc17d4033b163ec775bff0516c5"],["/page/4/index.html","a8f212f65d30328ee7f2bfe080c0201c"],["/page/5/index.html","a8a68061eea3f18122e026adfe0586d6"],["/page/6/index.html","b65227706240d6f63514c24466cf39e2"],["/page/7/index.html","00fd7b062abdaee0e8ae65d5bba8569f"],["/page/8/index.html","71d49fd1ef9e394011cf9350e7386697"],["/page/9/index.html","dbe44e1c4944a558b5eea1bd22c83ab6"],["/photos/index.html","4aadc87b55ab06276521557516cf5d7a"],["/photos/ins.css","05462ee807b82e269263a3e770d004e0"],["/photos/ins.js","551027c9c0138e49e04ef38283087c9d"],["/photos/lazyload.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","b3117aaebbe9f5816456a921754d3984"],["/tags/AIDL/index.html","fdaa4a1f6405add5283e9037639926a0"],["/tags/Activity/index.html","2abee47edbfb04072d91611178d8d800"],["/tags/Android/index.html","b7da697ecd020d75f49e81e5050bb091"],["/tags/Android7-0/index.html","b670ed2f62b4dcf2212de5cdfb2234ad"],["/tags/Androidx/index.html","d93f35c50e5d6c87dac844c6b673089f"],["/tags/BroadcastReceiver/index.html","8309c4ab5b92e549edfb403b947a2d87"],["/tags/C-文件上传/index.html","f12f07bfde2087be5348f574bad65905"],["/tags/ContentProvider/index.html","3eddd67157bbcde773a2d60b7a8c9c3e"],["/tags/Excel操作/index.html","bfb2e2c9ef6ebbdd19eb191e005d4cf8"],["/tags/GitHub/index.html","018604be1da3231d3499fc087f27e9a7"],["/tags/IIS/index.html","2ef747faef1e9fa1bd481a39f4c00bf8"],["/tags/JPush/index.html","3577705676fa91a114cac696ea2ae580"],["/tags/Jetpack/index.html","a2d270d61adb860296cde7795ded12e4"],["/tags/LNMP/index.html","d5cabad8c68bed5004d1f3ed6d22fe25"],["/tags/Lifecycles/index.html","ec43dc24e62fc9901fdb14f63169063c"],["/tags/Linq/index.html","61d1f559c998f88ae15e8745089dfba8"],["/tags/LiveData/index.html","1606fb05b05274b391e1c373ba3fbc6a"],["/tags/MAMP/index.html","0ca8fffa4c467f07f852dbf023031009"],["/tags/Paging/index.html","2f87e694010ea5063328850ca3e90b44"],["/tags/Room/index.html","35adc4a3b15c3193afaa28e06aaf5bb7"],["/tags/Service/index.html","c6cb16c2b423d241c5b13c6c1075fadd"],["/tags/SqlServer/index.html","e344a4823899c20dba1f800732aa8acb"],["/tags/ViewModel/index.html","4c7701d6f3d145035560560024befac6"],["/tags/ViewPager/index.html","6444d10af053155938aa9ba574a8b017"],["/tags/XMLHttpRequest/index.html","8e9b9700f37ab00b6db3ed84d6af94e4"],["/tags/c/index.html","7967e5b7a9b6e6628ec33002a32641e0"],["/tags/coroutine协程/index.html","1229272aaa2894f2a2edff04653805de"],["/tags/easyui/index.html","3e44a4b7c6492c4019ffe18b90f1fb0d"],["/tags/fiddler/index.html","d3c7b67f950bb18efeb37880e5f3a8b4"],["/tags/hexo/index.html","0cdc3df20cebe3f47f97a183b9f4a474"],["/tags/kotlin/index.html","6b7c72124b95cff3e19c39295c4157f2"],["/tags/mongodb/index.html","9aa28d723949088558d68ba76a906961"],["/tags/mono-for-Android/index.html","60ca42ae079e6e2cf33354b634ceb96e"],["/tags/nodejs/index.html","2fb56d54e2ff84b5a73163e2f0d3fb98"],["/tags/php/index.html","3eaa1e6bdb35f3e21d35493616c4b8db"],["/tags/service保活/index.html","b0efa8ecf7cdaae48d23b479b7be7122"],["/tags/view绘制/index.html","48e71bbc0521c9752263696ad9189017"],["/tags/visualStudio/index.html","277f735446919ff71bdebd9849ffa7c7"],["/tags/习惯/index.html","bb8092b66a15a147964eb6b317d41128"],["/tags/京东云擎/index.html","dcf765b576bd8b3c34a6e8d944f3922e"],["/tags/公众号/index.html","e76cc9a400b00525a8dd26d8022b04ec"],["/tags/副业/index.html","b4bca5a60cb4b32aaa509211d5c2e99a"],["/tags/区块链/index.html","9e4d7bc62949d7da28b80918396bbce1"],["/tags/图片保存/index.html","d85e18547017690d296b337f31acc945"],["/tags/地图/index.html","86ae04c7f641abdd20d8db8bbdc123b1"],["/tags/增量更新/index.html","3e0c9373ce2d9b5ae51d11f74375567e"],["/tags/安卓源码/index.html","31b0a2cf2c0cc3aaf31edd144d6adeb8"],["/tags/安卓源码/page/2/index.html","671eaa9d0803ccaca5e18214663b3d55"],["/tags/屏幕适配/index.html","9e0ca49bfa1b284ffae3e7e0bee88527"],["/tags/序列化/index.html","2e8efba3ed1f63cd4f89ac90597126e3"],["/tags/开源框架/index.html","7ba64f84cf54b85e2f663b8679181939"],["/tags/开源框架/page/2/index.html","aaae2fbf32e59ce501c2ee5ebabe8f31"],["/tags/心情/index.html","254c971b6877dcf8773f3e2cf12f3515"],["/tags/新浪SAE/index.html","a1f77a02dd2431c70c3343961f576153"],["/tags/日期格式化/index.html","15163b544cd23c639598a3651beb4e1c"],["/tags/正则表达式/index.html","d6ecf2cdd31f25f7337017205d6fa261"],["/tags/电影/index.html","70bb526f3ed87a7463f8884a33e25423"],["/tags/线程切换/index.html","7e2b5c2b7250ddea0f8f8cf301538172"],["/tags/网盘资源/index.html","a235b113bbdf48eb821da01207b26c3f"],["/tags/职业发展/index.html","d094c57ef6162109a6442098ef097538"],["/tags/职业生涯/index.html","bfcc59efbec6b15406f9f115af925606"],["/tags/股票/index.html","150fec126c2f39fbbd89d70ce858ce56"],["/tags/设计模式/index.html","4f91e035e12a649038af45cf6a8b7d6e"],["/tags/评论插件/index.html","0681a13371798b8af585a01eb3821c20"],["/tags/购房/index.html","9336493439ec2b7e6623450d6316e7c6"],["/tags/跳槽/index.html","2c19515b92b3c5c1f5da283e69501a86"],["/tags/面试/index.html","46d077090e7c1be2fea6f2a5309b730d"]];
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
