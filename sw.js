/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/07/本科资料/机器人学笔记/ROS重映射机制_new/index.html","4d4707031fdffac6128a4744d1c08997"],["/2021/04/13/本科资料/机器人学笔记/DH建模法_new/index.html","602243b15c09d63ffa98a993285c13a3"],["/2021/04/14/本科资料/运放与反馈_new/index.html","f7e096feb2513648ead376a3923d60e1"],["/2021/04/18/本科资料/机器人学笔记/ROS_TF_new/index.html","16b3cd40fdda2fafc449ec557805152f"],["/2021/04/21/本科资料/逆解_new/index.html","8fe5015bb32a742d29ccdd50ef030974"],["/2021/04/24/本科资料/数学建模_new/index.html","684ebc99f082a5071395f202b36026ef"],["/2021/06/21/本科资料/控制工程/奈氏稳定_new/index.html","167471dbcec1445e02480a70c9d2224f"],["/2021/07/02/本科资料/IIC总线_new/index.html","6318e7ed57d8787ba9b5ff85c8fb0e2f"],["/2021/07/03/本科资料/系统时钟_new/index.html","a64177fa79ecc138b93a7fb0f49d0106"],["/2021/07/18/ML/机器学习2_new/index.html","3c47ed25e2f58045763fb3bfc3f52e81"],["/2021/07/31/ML/机器学习3（逻辑回归）_new/index.html","cbabd059cb7ac1900cbac31a2d6f19b7"],["/2021/07/31/ML/机器学习4（过拟合及编程实现）_new/index.html","4771524c064ac258ffaa25d0c652c123"],["/2021/08/02/ML/单层感知机额的数学符号表示（Bzha）_new/index.html","b73624029107bea9e961175a8d8efbd3"],["/2021/08/05/ML/机器学习5（NN）_new/index.html","e784fd47bf1d6f9a70e2e804926a7446"],["/2021/08/06/ML/机器学习6（评价与诊断）_new/index.html","5e5e2c222c5dd25d5b0cc5f09eda1001"],["/2021/09/16/本科资料/机器人学笔记/欠驱动机械臂运动学仿真/index.html","7b929b96b1221736d362d641057718dc"],["/2021/09/25/信号处理/概念总结——信号与系统/index.html","5d4d85fc02593c82fcb72dde1ff8b0c3"],["/2021/09/27/本科资料/卡尔曼滤波_new/index.html","13fd3556e6ae6a6edf784ccb397bb9b1"],["/2021/10/08/机械的未来_new/index.html","863576ddf8e953b9e486e46178442e6a"],["/2021/10/17/ML/机器学习_new/index.html","0c13955d490dbcc3d653b99d87caccad"],["/2021/12/31/本科资料/机器人学笔记/Navigation实训整理/index.html","6c188f519bde8e41e1ec5d56053fc865"],["/2022/01/22/本科资料/机器人学笔记/ROS自定义路径规划器的原理及实现/index.html","d8d19de66541c772d1712cf80db1e520"],["/2022/06/12/本科资料/PLC期末复习_new/index.html","0ff8971fc58f09c6fde1118315eb4dcf"],["/2022/06/24/信号处理/理解离散系统_new/index.html","78fe6b2d77f5a620a0e9fa6593ac94f3"],["/2022/06/26/本科资料/控制工程/离散系统的闭环脉冲传递函数_new/index.html","c3c595bade695de1b9adc925c5ab0b1a"],["/2022/07/22/本科资料/机器人学笔记/伺服电机矢量控制原理与仿真/index.html","e652ae5e11f5bf8671fd9b8ed8b1f13a"],["/2022/07/25/本科资料/马原概念关系/index.html","36fcb5bea5552c98a6d513050b23e95a"],["/2022/08/15/本科资料/控制工程/根轨迹法总结_new/index.html","e080a5f7748f9f58d93507628a0163eb"],["/2022/08/16/信号处理/数字信号处理/index.html","60eed96e89bf62fa477e557706f074b2"],["/2022/10/04/本科资料/毕业设计/图像预处理_new/index.html","888166abb723bd18bd27103b4654b475"],["/2022/10/16/本科资料/毕业设计/侦差法调研/index.html","92b4c589358508e3c40c12cca4cd0fcd"],["/2022/10/23/本科资料/毕业设计/GMM_new/index.html","89f8a58e54c50e41c9d7b08ea78b2d31"],["/2022/10/25/ML/RCNN_new/index.html","604af5e360e7a04283c91e1edb495c28"],["/2022/12/12/ML/关于神经网络_new/index.html","b0f107b5f8598f5f5d87b46d0d0ac02c"],["/2022/12/27/本科资料/毕业设计/检测问题分析/index.html","a67fe7b9c1035628818b0c23700442a2"],["/2023/02/11/ML/因果表征_new/index.html","140d1b9800c28aa46e9535b833a34a11"],["/2023/02/12/ML/因果推断1_new/index.html","9aefd7c44ab9141bf2bc70c56255ffb4"],["/2023/02/15/ML/因果推断2_new/index.html","d5476d71b03ee2447d7d87b1db6d2d4a"],["/2023/02/23/我与地坛/index.html","c99ae1b1d3be998d5b6f2d3287dee56f"],["/2023/02/27/才二十二/index.html","13d38a68a6f19658dd6277333c80788f"],["/2023/03/05/memes/memes_group_26_new/index.html","676693f704476c18b8371d98399ed758"],["/2023/03/07/memes/memes_group_55_new/index.html","2fddac47f668272467006139698af3e1"],["/2023/03/18/奥森有感/index.html","a3dd26b1bb7835c2a88d9d4499068cf1"],["/2023/03/26/memes/memes_group_40_new/index.html","1765a962d00e9c7e2aae3b27d1c149ab"],["/2023/04/02/memes/memes_group_33_new/index.html","716c1c834cdf4fbd8bc556ff3d2abd48"],["/2023/04/02/成为代沟的一部分/index.html","d3e0d4b012bdd9f273392885dc4decb5"],["/2023/04/03/本科资料/毕业设计/2023.03科研日志/index.html","f14ba136f3603708aab4e4f1caaf6a4d"],["/2023/04/12/小样本论文/A review of the application of deep learning in intelligent fault diagnosis of_new/index.html","7e6647fe7f89cf61663e180742e781a6"],["/2023/04/13/ML/Transformer_new/index.html","d57a33c381cf506e8081d9ddbe04bc50"],["/2023/04/13/小样本论文/故障诊断发展史_new/index.html","43d10f793fe64c5540e9efbdaf53f530"],["/2023/04/19/本科资料/毕业设计/光照归一化算法测试_new/index.html","4e01c20067fa04b3269ccd7e88ec5df5"],["/2023/04/19/本科资料/毕业设计/论文框架/index.html","0eec3d357751b286a9eea408079e83eb"],["/2023/04/20/小样本论文/小样本和不平衡样本_new/index.html","5467384caf638103b31302ee85326a76"],["/2023/04/25/memes/memes_group_20_new/index.html","d1a91b634747d3476ed48312add1f08b"],["/2023/04/25/工作总结/2023.04 科研日志/index.html","b6e57fad6f2e48541370979ea891b5e5"],["/2023/04/25/本科资料/毕业设计/论文写作与文献查阅_new/index.html","261a308659620d8994f91d391922d266"],["/2023/04/27/memes/memes_group_3_new/index.html","f38a096199b70529b8b06af9e1629342"],["/2023/05/01/十三号线/index.html","c8bb48b08e81fe021ddb067905ea68d1"],["/2023/05/04/小论文撰写总结/index.html","08d5b7368c4333c9e8920c3c42b619cd"],["/2023/05/05/不存在的梦想/index.html","112139c680708c0db8bd1f74396c93af"],["/2023/05/06/等待的时间/index.html","399c5224f5ad9ad058d5696d36811aa8"],["/2023/05/11/本科资料/毕业设计/运动目标检测方法比较/index.html","40097cd9beecfadfd5d9bb4d343ce480"],["/2023/05/14/memes/memes_group_11_new/index.html","ec628e207f869906fa61ab27a6d7eaf4"],["/2023/05/16/memes/memes_group_49_new/index.html","3a04d374d30aea9a1d91d5dfb7bf2a35"],["/2023/05/25/只道当时寻常/index.html","5e7254763591e5355fd095fa645ffe5b"],["/2023/06/23/memes/memes_group_70_new/index.html","cd0d992dcf6a3fb281b151486ed6df67"],["/2023/07/03/memes/memes_group_18_new/index.html","1407b420b51ed0595b6bcc842822d927"],["/2023/07/07/memes/memes_group_12_new/index.html","b280f6ce1dbd792c294009c3ffbfda76"],["/2023/07/17/工作总结/2023年上半年/index.html","9844a567cbd10dac24d9c3719b8cc468"],["/2023/07/20/memes/memes_group_16_new/index.html","280cc13fd86730e7f852d55d82ce21ad"],["/2023/07/22/memes/memes_group_25_new/index.html","9282b69d0163c56b005096a4784c4972"],["/2023/07/26/memes/memes_group_41_new/index.html","3e09cfb63a42c49c202762f4dc317115"],["/2023/08/12/memes/memes_group_66_new/index.html","c222011c7b7870d83ad60c2630e4c47f"],["/2023/08/15/小样本论文/Imbalanced Time Series Classification for Flight Data Analyzing with Nonlinear G_new/index.html","bedbe6819bcbb69d79a51c359bd5bb16"],["/2023/08/22/memes/memes_group_43_new/index.html","357a719f72999eb06a8926112b627f6c"],["/2023/08/28/论文撰写总结/index.html","4ad3a92d1c7446906c6928ed342f9f4a"],["/2023/09/07/机械专业竞赛入门/index.html","bef3d198fb241d1c998fd7dc11e43354"],["/2023/09/12/memes/memes_group_29_new/index.html","1d0a4132612ebfbcf1cd8d72b9e711f7"],["/2023/09/19/小样本论文/A zero-shot fault semantics learning model for compound fault diagnosis_new/index.html","16d7cae61b5fef41de42d2f854b6b900"],["/2023/09/22/memes/memes_group_17_new/index.html","c505c542a1ec861c3cb00198ab434b75"],["/2023/09/25/memes/memes_group_45_new/index.html","49429e92bd89fb66b4fcbd1acfe49fbd"],["/2023/09/30/memes/memes_group_46_new/index.html","a89b56a55b8e50eb3b205ca23df1e6e3"],["/2023/10/05/memes/memes_group_53_new/index.html","6e39b3f200ed3aa0f08a0dcea7bb2456"],["/2023/10/06/memes/memes_group_37_new/index.html","71c589a89211ae547a619af20e94ef93"],["/2023/10/08/memes/memes_group_19_new/index.html","ee5274dc5ecdf8e2e8b9a33ff6e2ea04"],["/2023/10/20/memes/memes_group_42_new/index.html","f8d481d49d052f460bf8de3bddfa6d32"],["/2023/10/21/我拥有的/index.html","b2306f323e9a9a3b10d1f3ec83c9e09e"],["/2023/10/24/memes/memes_group_35_new/index.html","b10cf86fb06d3cb12e53b65e61047938"],["/2023/10/27/memes/memes_group_31_new/index.html","1e9ebffe5705d1cad213c4c28c374568"],["/2023/11/05/人生二十二载之复盘/index.html","a80e60f6402c87be8107995bc617e5e5"],["/2023/11/07/memes/memes_group_21_new/index.html","0f4d7e37a365ac4a09e393e3afe4e3c6"],["/2023/11/08/memes/memes_group_7_new/index.html","291133c46295a450006981220e570363"],["/2023/11/11/memes/memes_group_23_new/index.html","758aa97975b145f4f47ddd4d0abd8849"],["/2023/11/17/memes/memes_group_51_new/index.html","65adc681daac2b051edd016d766fa0a5"],["/2023/12/16/《万历十五年》读后感/index.html","3050a6264ef10cb309f964416c8378ba"],["/2023/12/27/2023年之总结/index.html","2164a76702c7a6099d2d29075e975eff"],["/2023/12/30/memes/memes_group_14_new/index.html","716e14108b4fbdcb5cfa4587874720f2"],["/2024/01/13/memes/memes_group_9_new/index.html","5e46b2ea85bc0dd3bcda76dabb191b72"],["/2024/01/18/memes/memes_group_63_new/index.html","c6d9b0fad9e11d7c1c0c31b4d05acb49"],["/2024/01/30/风的记忆/index.html","cdca52174e3f5b646686cf2cb448474d"],["/2024/02/01/小样本论文/语义补充的故障诊断/index.html","f9d2004cbcbe1f9d9a02479c0d4aae9c"],["/2024/02/07/memes/memes_group_36_new/index.html","e9327bc8ef7150e2000e99721d219ab3"],["/2024/02/09/memes/memes_group_47_new/index.html","79c67016c9c5a33038cf940d84459ccf"],["/2024/02/15/memes/memes_group_15_new/index.html","02fe95855d7c09b29725c83c02d84fa6"],["/2024/02/29/719所项目/凝给水系统故障/index.html","9d53f3e460e97df53dbe1df999cedbfd"],["/2024/03/02/memes/memes_group_54_new/index.html","887273613a02799bf61e16fc5468d539"],["/2024/03/04/memes/memes_group_27_new/index.html","deb00f85ac455e7d71c8c5c1391c8772"],["/2024/03/04/亡国之相/index.html","bf21de51db3f9d88aa738c611efea987"],["/2024/03/10/memes/memes_group_57_new/index.html","d8f9351829355ac1b2dda4a8ac593cbf"],["/2024/03/23/719所项目/电动调节阀故障/index.html","e84ed17d142ab6457c1e5db9dfb198dc"],["/2024/04/27/memes/memes_group_22_new/index.html","7477e5777184d58df3d2d8710d4220ba"],["/2024/05/08/memes/memes_group_62_new/index.html","d65b7b43acda7455a78d310dd59517d7"],["/2024/05/09/719所项目/电动调节阀故障实验/index.html","184c10f0635836bf8599cd80dbca72e6"],["/2024/05/13/memes/memes_group_6_new/index.html","3eb1d9975d629ea0e412210c1e81365c"],["/2024/05/15/719所项目/阀门实验总结/index.html","03f3b981353920dfd5b76000ea4b1592"],["/2024/05/20/memes/memes_group_69_new/index.html","e8773b1f56e7c30100a2d7e90efe82a6"],["/2024/06/03/memes/memes_group_56_new/index.html","674373ce6c0e41768eedc3597edec7f4"],["/2024/06/13/出差有感/index.html","f9cc21bbb0152d12a975ab493c714226"],["/2024/06/22/719所项目/电动调节阀状态监测系统/index.html","655601a6afff4d6199bc8ab215413c4f"],["/2024/06/23/memes/memes_group_68_new/index.html","1ba24b47099462c9e88ea5710e9b478c"],["/2024/06/24/memes/memes_group_32_new/index.html","e25072cebdb69bdbd96c408b6bb9c9c9"],["/2024/07/05/memes/memes_group_2_new/index.html","13d918f97a04d5393eca73e971a2fc76"],["/2024/07/12/文史类/权力与货币_new/index.html","b6d3592adb3c0a9ec35202030f851434"],["/2024/07/20/小样本论文/条件限制的样本生成相关文献_new/index.html","cb9b0557e214eaf48941ba98f59eb2d4"],["/2024/07/20/爸爸去哪儿/index.html","19f1109310c997213098ec8d81d86314"],["/2024/07/25/memes/memes_group_59_new/index.html","d9ae9b89a5677f30f87a00f9d05c3eaa"],["/2024/07/29/信号处理/傅里叶变换/index.html","2d6d63aff6d5f85b592ca83bf2ec53f3"],["/2024/07/29/本科资料/概率论概念_new/index.html","cc79643befe3c67de3256b279ea2938d"],["/2024/08/14/memes/memes_group_10_new/index.html","25b98e8338aea87a6041e8d2c5ffab40"],["/2024/08/23/memes/memes_group_24_new/index.html","ac8c923bccf1d3130ed2ffa029aad0c1"],["/2024/09/06/memes/memes_group_64_new/index.html","73f63749911c86ae782a1894efec659e"],["/2024/09/17/memes/memes_group_52_new/index.html","414f5e88aeaa972b4c68e99a916c76b9"],["/2024/09/21/memes/memes_group_13_new/index.html","dff18a3e6ea100674a076bde8865eb42"],["/2024/09/25/文史类/阿德勒心理学/index.html","813f7783ce3073fe6cac7c77d76e8d7c"],["/2024/10/05/memes/memes_group_61_new/index.html","3c3145ef9a34b63bc5bdcd14b55f3e06"],["/2024/10/07/memes/memes_group_4_new/index.html","9faabd3555a28ef1e5c043c63adf6526"],["/2024/10/09/memes/memes_group_58_new/index.html","8def1c6126dca0fdcfa81767e0e845a9"],["/2024/10/13/memes/memes_group_50_new/index.html","c24dae4acf06eea6d4b3a0787de45ece"],["/2024/10/15/memes/memes_group_5_new/index.html","07f590b56974e04cca98bd3546d98630"],["/2024/10/22/memes/memes_group_67_new/index.html","7a0d3d4065abff97aa99e87b34ed005a"],["/2024/10/26/回家有感/index.html","47383a90fd0021710ffa8f5e402226c7"],["/2024/10/31/旧事集1/index.html","1285eca6713386961ecbfaa9257b7f71"],["/2024/11/02/memes/memes_group_39_new/index.html","e43959a65fda4a733447eec55fa53331"],["/2024/11/02/旧事集2/index.html","3a7a2a7530d0584f73d6107f863184a5"],["/2024/11/03/关于意义的一些想法/index.html","35733ded50cd90c75d4f5e48beb519a7"],["/2024/11/05/memes/memes_group_48_new/index.html","7737c56d261d9b8656e6c14976539280"],["/2024/11/12/无名之人/index.html","f5e37ae28224b88c537658e175ea885b"],["/2024/11/13/小样本论文/零样本相关文献阅读_new/index.html","19ece9215a6e07bfd1a685e54ab4596f"],["/2024/11/18/文史类/魏晋之际/index.html","fdc3df9233560316d285629efc8339fc"],["/2024/11/21/memes/memes_group_60_new/index.html","56421dd613ef976f4428316f73e30de6"],["/2024/11/24/memes/memes_group_30_new/index.html","7d3bd2f74c7de8574c15831d950af77b"],["/2024/11/27/杂文/公文写作/index.html","03e8e696b920269e9fce4c844d26f06e"],["/2024/12/12/memes/memes_group_8_new/index.html","5b2475d84269840680a9757493f1100c"],["/2025/01/02/工作总结/2024年总结/index.html","8733b88d6c13ff30abcafb02f5fda2f8"],["/2025/01/08/memes/memes_group_44_new/index.html","b34d49e408bfc36397a3557f375c5a0a"],["/2025/01/10/文史类/基层的理性——《小镇喧嚣》读后感/index.html","76b8c04decd083360163b0f584b627d9"],["/2025/01/16/memes/memes_group_34_new/index.html","d6c1d1f59a09403b1bcaadfed4e972d1"],["/2025/01/18/memes/memes_group_28_new/index.html","38a82c941a2dcc07456659f171caf91b"],["/2025/01/18/文史类/中西方文化基础性全局性交流/index.html","6c92a7ff13dca09b18fb540733c280f6"],["/2025/01/29/关于意义的一些想法2/index.html","e794934f460ec073719214fed2c253c4"],["/2025/02/06/memes/memes_group_65_new/index.html","a3378a10cd16f3a59d2a346071ea32fe"],["/2025/02/16/memes/memes_group_38_new/index.html","b55dfe95f8b7ba113daebeb9c9be8983"],["/2025/02/22/枕下的时间/index.html","b4813d97ca46a5dc7a9d57cc44d1b031"],["/2025/02/27/漫长的冬季-引子/index.html","dadb122430cdd711acec8972eb07f565"],["/2025/02/28/漫长的冬季-0/index.html","b81247cc0ff53fb0e90b09237888e0a8"],["/2025/03/01/漫长的冬季-1/index.html","078414bfd27a2e5a3f696dbc40e7d277"],["/2025/03/06/创世纪-----建站重大事件小计/index.html","bc8209799803d2eccb0862ec4fcd9fad"],["/archives/2021/02/index.html","ac03bc4b63a3cd62621e9f933b98b6cf"],["/archives/2021/04/index.html","6629e849a0cc21ab42bd3fdc0e54ddd4"],["/archives/2021/06/index.html","006e1e468522bc0bae36f5f8e1bc61b0"],["/archives/2021/07/index.html","a5ba28004d49b861b3108cb2e96268cd"],["/archives/2021/08/index.html","dc976a39f66c8de8d41caebdcd72fad0"],["/archives/2021/09/index.html","480ecdd92881290fbc4ec7693a127e1e"],["/archives/2021/10/index.html","894a141f1af66895e5234bbd60f08e8a"],["/archives/2021/12/index.html","a3ae616cc2b7c3eb66fc6ff69b1c3411"],["/archives/2021/index.html","951ea7f53e3432b35e6c61dab7564194"],["/archives/2021/page/2/index.html","a24133f692e8a471d9c26005385c4e9a"],["/archives/2021/page/3/index.html","2d488a6690bba1daee87237dd76c6865"],["/archives/2022/01/index.html","bf4a4f27e0c98e598b46e40dc09253bc"],["/archives/2022/06/index.html","5c99a4059208910cc62e8ce4b050c911"],["/archives/2022/07/index.html","604d843cd4631ee14420b1284bad7d45"],["/archives/2022/08/index.html","9318c40c33df02788dbd1e673b486104"],["/archives/2022/10/index.html","271f7d0984225530333190380b8a9c07"],["/archives/2022/12/index.html","f1c1513f4c3b7ea8eb9eee9c1b6a37d1"],["/archives/2022/index.html","d3df4f66f25b062e0daaeff8b3adacd5"],["/archives/2022/page/2/index.html","cbab7cb6cb462160d65164fb2951bab2"],["/archives/2023/02/index.html","7e6bd1181bbbe6bfd4a1a8045655744a"],["/archives/2023/03/index.html","a7a1fd17b9dc496e5fc4eba677ec7993"],["/archives/2023/04/index.html","65941cf15ca14a6f679e0af29e3ccd8d"],["/archives/2023/04/page/2/index.html","25fdb75d1e67e9efc91d079c72e66ccb"],["/archives/2023/05/index.html","25d960954ee2dff6198b5f70fc991c89"],["/archives/2023/06/index.html","803197df1a89ecbc0141948e21739176"],["/archives/2023/07/index.html","cf47e116271c7de489b150dc71081e2d"],["/archives/2023/08/index.html","e9729d94c2e6b9189469e5f570bcdc0e"],["/archives/2023/09/index.html","3abce5399f9a7efd5e03d9c050c4b72d"],["/archives/2023/10/index.html","18933ffcabca154bfb374befec70be24"],["/archives/2023/11/index.html","727aadda3ca8e8e30ebbe2f8aa1a97b6"],["/archives/2023/12/index.html","cb84db2227eb07a8e4f30e793fe88aeb"],["/archives/2023/index.html","fe85f169d8c625f90e16e282767a9ec9"],["/archives/2023/page/2/index.html","7cbd0bc6e0f4143284826f5154d5bc6f"],["/archives/2023/page/3/index.html","e4a61af80c14749f635b36ae9272250a"],["/archives/2023/page/4/index.html","165feeef9ca8c574dde2009e02d48092"],["/archives/2023/page/5/index.html","b4a189ac8af87c17ead5e36b97ea4eac"],["/archives/2023/page/6/index.html","3f102a635d1adcf24784b2d3016f9d7c"],["/archives/2023/page/7/index.html","39bca5475de926855d786d1b6019fba9"],["/archives/2024/01/index.html","02357dd7c526ba704f5f6abe2cb7ba27"],["/archives/2024/02/index.html","3387c7ea2c797552df9fe9cc37e93add"],["/archives/2024/03/index.html","84258c23c274259f19ab802c88eb2c40"],["/archives/2024/04/index.html","594ca83246cb2a938fb412fc358ed134"],["/archives/2024/05/index.html","cb4f637d681ddc64353b11fbfcd34eb1"],["/archives/2024/06/index.html","33ff4f540d62930ecac4f59dc643526c"],["/archives/2024/07/index.html","b6f44976e60abf1fc16582bd03b50f6b"],["/archives/2024/08/index.html","7e933ac5577d596ecb993ec32d5a844a"],["/archives/2024/09/index.html","81fd082ca7010419dddec51201fb9391"],["/archives/2024/10/index.html","be00d0295355480bc0c61bb80abb2f5d"],["/archives/2024/11/index.html","4889f2b1cf3e8e6e51cfb51728cb41f7"],["/archives/2024/12/index.html","7ebed8909b9dfd88d6ca1a4b7a33596b"],["/archives/2024/index.html","7ef52d24305f2898b99f8d0cc85dcfe9"],["/archives/2024/page/2/index.html","a6904cf63c0319f4ae35a451c708baa2"],["/archives/2024/page/3/index.html","8a787c7d884a6f458f69ee2a26590744"],["/archives/2024/page/4/index.html","7d66c523200f450e21f4535c3b1a8e2c"],["/archives/2024/page/5/index.html","ce848bbf6de26bef7f58257507b33910"],["/archives/2024/page/6/index.html","8d363567dbfcf9c0641e6b3e75e3a492"],["/archives/2025/01/index.html","2ec0dc8700780b164d21445767aaa9c0"],["/archives/2025/02/index.html","70782c344199617043560185d242396a"],["/archives/2025/03/index.html","ca0bf3a78417c785e33a84fd280ee734"],["/archives/2025/index.html","0fc150676c13153418e64bb1dc9da295"],["/archives/2025/page/2/index.html","de87dead46cb36c9d6ecf4278c90ed8e"],["/archives/index.html","e2cb9f992868862d5725ee55204b16ef"],["/archives/page/10/index.html","755f537430d12f34ac7dd0ae7fe72114"],["/archives/page/11/index.html","375d909ae14fc6e830182f0596031f5c"],["/archives/page/12/index.html","bfcc7588bc6203c12519f9de93661aaf"],["/archives/page/13/index.html","558f748b1d46937955cfb8fb86147c42"],["/archives/page/14/index.html","4024489c87906e5668601fed9764d773"],["/archives/page/15/index.html","e8b3cf513534662994b578d4694bd31e"],["/archives/page/16/index.html","ea443ecba34879987e6deccd36dcf6f0"],["/archives/page/17/index.html","2c7825a5d7b15d985c29090c2d9c1f0a"],["/archives/page/2/index.html","cdf42c5ef2c36ccc478a585a2cd17a30"],["/archives/page/3/index.html","2d97dfe1af65291cf4ee85605065a72f"],["/archives/page/4/index.html","12f0fc83b2d54a95cd77bef2b3d0ad8c"],["/archives/page/5/index.html","ccd974760e105eaf97e250c37075c4ab"],["/archives/page/6/index.html","c49619df3a57c83d901b340610c603ff"],["/archives/page/7/index.html","aedec4b2c0bbc55686c0454f2748addd"],["/archives/page/8/index.html","942cad3a1b045a9e0b876ce29fc75268"],["/archives/page/9/index.html","76603eafb7fc70eae141149dc129fb4d"],["/categories/index.html","e34668d94fb9c439b19e9fe7ef39a750"],["/categories/meme/index.html","2ac709a1fa91a6926a8ead19d26c3443"],["/categories/meme/page/2/index.html","00602ddd22dde4847d8b720939e2e9a1"],["/categories/meme/page/3/index.html","7103a1d0524e6d44ba332a2a9cf69d6d"],["/categories/meme/page/4/index.html","d9d2d435e2dcf12e4366d6e1e27706d7"],["/categories/meme/page/5/index.html","54373a995cfa520611d689faa0871c2d"],["/categories/meme/page/6/index.html","8736e9b768d238dba859cb84f7c138b1"],["/categories/meme/page/7/index.html","f208237989f035084a3e1803a2609893"],["/categories/写点东西/index.html","e02889fa3dafc5ff613a6ac9a99e5e8c"],["/categories/学习笔记/index.html","9e0ba1a2f8589ef480849bab673f204a"],["/categories/学习笔记/page/2/index.html","d60b87a9b30c674f1ad18d51db5ffcea"],["/categories/学习笔记/page/3/index.html","0d3dd7ef2bd559ed9160a2a4c6827900"],["/categories/学习笔记/page/4/index.html","eea532b748c02b7d6dce6778b7bd52a8"],["/categories/学习笔记/page/5/index.html","029975a679164ee42f8b9de79b7c2fc5"],["/categories/学习笔记/page/6/index.html","b76fdf7726a6cfdb6cfa915dcbcf65e8"],["/categories/学习笔记/page/7/index.html","b1425b200746bb9663c247b5569c467d"],["/categories/学科相关/index.html","c820c2ea7cd22a5ec44259a2aa0730bb"],["/categories/日常随想/index.html","60f95300e6685f11591015f8b7cedf17"],["/categories/日常随想/page/2/index.html","27ab166dc9771f2d106c8442b90caf13"],["/categories/日常随想/page/3/index.html","7432ea498d0d3d82e9c1cb43881108bb"],["/categories/读书有感/index.html","c025198c80fbdd30b7de7daeab481f35"],["/categories/阅读感想/index.html","6e97774f51d00160d3164459c03be885"],["/css/index.css","f1c40d4e1ccd9de1af396f381f5f4d1b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/background.jpg","6f4e9ba2b940a5dff7c12f77965fb0b8"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/ding.jpg","0251f20cf4919a2666bf4a769e675081"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0b0c57e2652146e0c1bf1a629895d444"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/memos/imgStatus.min.js","ba389639289cc1e20e8a468717b97f62"],["/js/memos/photo.js","be0ec483197a21504e0b3b8521519dc5"],["/js/memos/waterfall.min.js","4c2b801d7654e439c486c64fe2a821a9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/memes/index.html","5d4ab393555615d2da08f0d830f279d3"],["/page/10/index.html","8a4a773f63185203a9c7b57cbafab855"],["/page/11/index.html","e29d19a16617ff38250136c96f39b528"],["/page/12/index.html","375eac5bc09cafb9097f890d4d78863c"],["/page/13/index.html","3075b153ffee10a5cb5ffe9e95cf8fdf"],["/page/14/index.html","d9f60131b32d161ad5da72a2e35cad8e"],["/page/15/index.html","a437dd5d36aab24a9a76d42df33a8677"],["/page/16/index.html","4fcfac2ebd79cba8418322524fa86933"],["/page/17/index.html","623413f310dfd084d58314f86faa9162"],["/page/2/index.html","73199bdd9fe59f4c3408e28905e14cbc"],["/page/3/index.html","ff2e72ab41d75a6c49248b24bc03a882"],["/page/4/index.html","bcce76c1208d56cd9cfd0ac4c4edad4a"],["/page/5/index.html","0819770ac9a2ed8de9902d1500206eed"],["/page/6/index.html","547e7686da8b0a3e9315033ea623bc56"],["/page/7/index.html","c4bfad3fea714dd16d5edff0f8cbdeb8"],["/page/8/index.html","c66ba3ca5dd912eaf97ed3908f94ceaa"],["/page/9/index.html","85c3a43cfe222b17e80e7dacac6ccf90"],["/photos/index.html","b19b160449e89d8aafb911cf6efa7b94"],["/sw-register.js","db8448e6186803492f7fcd2e75aa5a15"],["/tags/index.html","6256732a23e2db87b2f4011eecce550a"],["/tags/meme/index.html","19c7f46ad3a62d5da56cab702158ec7c"],["/tags/meme/page/2/index.html","37752fc00930c29df9c2c5dcc8f18fb8"],["/tags/meme/page/3/index.html","cad13d62addd20105e27d7302749c464"],["/tags/meme/page/4/index.html","73116cff3fb8b3e6ca0e0745493bf372"],["/tags/meme/page/5/index.html","a1655f5f076b50d19830431c793016c7"],["/tags/meme/page/6/index.html","df062143d60449f3f061dfc16e6e867a"],["/tags/meme/page/7/index.html","a71a780598b4c87929373f5fafe04be0"],["/tags/信号与系统/index.html","d25b7ad75d8b134390d449278e7f9c33"],["/tags/单片机/index.html","6daa2b410bb2203900ed3ef690b2e9e2"],["/tags/回想/index.html","b84fecea8cfed3244e4eed7deddee4f5"],["/tags/回想/page/2/index.html","1ea453a93fb3b347b342d5bf00c0d59e"],["/tags/因果学习/index.html","e3c5674f2040948ed08ac50b09c6ccaa"],["/tags/大块煤检测/index.html","06d6b63c5c758596b515ca7f3eb15868"],["/tags/小样本/index.html","be0a0408afc799e82977163fbf352244"],["/tags/就业/index.html","42e7bbd41902bfcacb0e263f55f5260d"],["/tags/就业相关/index.html","9a7805b6f31bd6871d77d92f3f1f74b9"],["/tags/控制工程/index.html","dc57a2415627f2b71f99cc31e063b717"],["/tags/故障诊断/index.html","ef9cdc3f3f409240c7cedc1f78d4b1b0"],["/tags/数学/index.html","71f7052411e640afc206eaa07326bb3b"],["/tags/文史类/index.html","586f12c649cfc22dfd3b22e187e927df"],["/tags/机器人/index.html","513f4203c7e1156ee39813b59a7b9e45"],["/tags/机器学习/index.html","204cc3c35f98125c79304178f19309b2"],["/tags/模型/index.html","70e939f4ec27a3c619cf1692a482abd8"],["/tags/目标检测/index.html","20aa24995b710e47d8e2c3444146c270"],["/tags/自我批判/index.html","2cf65e00f452e7d08f07c0b763f12e13"],["/tags/虚构类/index.html","a0f2a922bdecefe73352c568e500d1e9"],["/tags/论文写作/index.html","c42b9a223f7dd22e8d4435b0720ab112"],["/tags/论文撰写/index.html","1bfb293e646582043fe9024d2545f36d"],["/tags/阀门/index.html","df6ea9a9f77b708cb637133e8177e2c0"]];
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
