/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/07/本科资料/机器人学笔记/ROS重映射机制_new/index.html","eb0d5a6f87c21aa5db5a9b315d0d1d06"],["/2021/04/13/本科资料/机器人学笔记/DH建模法_new/index.html","14f45ba9a47bd831cf03cb651d883116"],["/2021/04/14/本科资料/运放与反馈_new/index.html","dd6ec2f002a5ac1f4b504730563daa29"],["/2021/04/18/本科资料/机器人学笔记/ROS_TF_new/index.html","8c67d6861997fd3e513fd47655003842"],["/2021/04/21/本科资料/逆解_new/index.html","e550eb127f4af2cff325a26862091919"],["/2021/04/24/本科资料/数学建模_new/index.html","4d778efcc093815a5f85c2956068edce"],["/2021/06/21/本科资料/控制工程/奈氏稳定_new/index.html","59f9f4dcb39e12493f03976528044431"],["/2021/07/02/本科资料/IIC总线_new/index.html","88202f6ac9218b3ccada7f5332b4c162"],["/2021/07/03/本科资料/系统时钟_new/index.html","41bb4a312db8d92efce73cfed0bc5abc"],["/2021/07/18/ML/机器学习2_new/index.html","8823e3e94dfce2b7a4c364cf5c1a877a"],["/2021/07/31/ML/机器学习3（逻辑回归）_new/index.html","98d03950c76356e80d7d75e98ffa3eaf"],["/2021/07/31/ML/机器学习4（过拟合及编程实现）_new/index.html","d3064287c3fee76ae9eac1c542b5d080"],["/2021/08/02/ML/单层感知机额的数学符号表示（Bzha）_new/index.html","9089c85def1f49bdb15e6fc773c29e78"],["/2021/08/05/ML/机器学习5（NN）_new/index.html","8f56c5f10c2f5262eaf87246e79d62b7"],["/2021/08/06/ML/机器学习6（评价与诊断）_new/index.html","55aaa26e8c8d375f1a9c2daa122d8956"],["/2021/09/16/本科资料/机器人学笔记/欠驱动机械臂运动学仿真/index.html","b9e0d7d9472667784c76f909cce9a4a3"],["/2021/09/25/信号处理/概念总结——信号与系统/index.html","98b72ab1592de370f9b169a4bcb1550d"],["/2021/09/27/本科资料/卡尔曼滤波_new/index.html","d54256399ef1cc677beb922e2e59ea01"],["/2021/10/08/机械的未来_new/index.html","e977d24b1fc2046a43b81691a7587231"],["/2021/10/17/ML/机器学习_new/index.html","9b24bc7b19d6c0ff5649964a6096a913"],["/2021/12/31/本科资料/机器人学笔记/Navigation实训整理/index.html","1179806cb1cc4dab4b5ef3f4609cd53f"],["/2022/01/22/本科资料/机器人学笔记/ROS自定义路径规划器的原理及实现/index.html","ce1141aa97dddbd0ea8b08d83afa0843"],["/2022/06/12/本科资料/PLC期末复习_new/index.html","5956536e62ebbefb27bf70252e2c5a5d"],["/2022/06/24/信号处理/理解离散系统_new/index.html","d00cde510164b2ba5828027e3542d63e"],["/2022/06/26/本科资料/控制工程/离散系统的闭环脉冲传递函数_new/index.html","65ce6873b73b5e25d4f8600e9c9243f7"],["/2022/07/22/本科资料/机器人学笔记/伺服电机矢量控制原理与仿真/index.html","1e2c060eee1034e79ac6b2bf336e5e03"],["/2022/07/25/本科资料/马原概念关系/index.html","28328b5cc359218f53ea25e1f89adf8e"],["/2022/08/15/本科资料/控制工程/根轨迹法总结_new/index.html","f664eac5e88e5fa2a0b5dc1536ec4880"],["/2022/08/16/信号处理/数字信号处理/index.html","8a10c0e10be0fd13bbeeb4b8d58e16bf"],["/2022/10/04/本科资料/毕业设计/图像预处理_new/index.html","379d85ab0f29eddc528249186bb4c522"],["/2022/10/16/本科资料/毕业设计/侦差法调研/index.html","0537a2521e0496a9b9b60fe4e2a7f03f"],["/2022/10/23/本科资料/毕业设计/GMM_new/index.html","1cfff53261dbeb2f21523228311bd9de"],["/2022/10/25/ML/RCNN_new/index.html","0a66a13a2d0875a493aaef57ea042a71"],["/2022/12/12/ML/关于神经网络_new/index.html","2086698fe4847a162a39b1c683d1b6e4"],["/2022/12/27/本科资料/毕业设计/检测问题分析/index.html","47be05c0b0b295b77b733446c730f38a"],["/2023/02/11/ML/因果表征_new/index.html","e6c0d58fd1573ea7672f0b33ae0af0c5"],["/2023/02/12/ML/因果推断1_new/index.html","83a43954dcc51a8fbd9493c9d1912874"],["/2023/02/15/ML/因果推断2_new/index.html","eda7930a2d2da294bd0a91e136e7223f"],["/2023/02/23/我与地坛/index.html","114310479fdbe74c5a2dfc24d9932c72"],["/2023/02/27/才二十二/index.html","a5a601cb575d3ef1006cacca4c542923"],["/2023/03/05/memes/memes_group_26_new/index.html","b1bf9fbc30974f347ca762f5f8db3f8d"],["/2023/03/07/memes/memes_group_55_new/index.html","447d76faafd74db19013ef16b196bae4"],["/2023/03/18/奥森有感/index.html","fad123fff43804a4c3fabcbf897be645"],["/2023/03/26/memes/memes_group_40_new/index.html","3f995efc6660d742e61658c50096ad44"],["/2023/04/02/memes/memes_group_33_new/index.html","66ec25eabcb41512a4639218f3fcfd4f"],["/2023/04/02/成为代沟的一部分/index.html","b3272e7f083e3d575389a1142cc311d8"],["/2023/04/03/本科资料/毕业设计/2023.03科研日志/index.html","865eb1c8db0d5b004358fa440d9c88c8"],["/2023/04/12/小样本论文/A review of the application of deep learning in intelligent fault diagnosis of_new/index.html","c86a6c0fe763ce3e2ea7f7597a352b8f"],["/2023/04/13/ML/Transformer_new/index.html","e21201cae2b8386318139f51c2bd0711"],["/2023/04/13/小样本论文/故障诊断发展史_new/index.html","ac1883b5b7e81d262c2fdb8c36cf6249"],["/2023/04/19/本科资料/毕业设计/光照归一化算法测试_new/index.html","91881a79963b1737b42c3cd171cd8377"],["/2023/04/19/本科资料/毕业设计/论文框架/index.html","1c0854a6f760a1410f2bd93a61fe5163"],["/2023/04/20/小样本论文/小样本和不平衡样本_new/index.html","ef6760e0c5a8c1d2e29009d812328555"],["/2023/04/25/memes/memes_group_20_new/index.html","f97a7793ae26ff106bd54ae69b0f54c0"],["/2023/04/25/工作总结/2023.04 科研日志/index.html","1c6a0ffeeb54b5ee31aebdf185e64af2"],["/2023/04/25/本科资料/毕业设计/论文写作与文献查阅_new/index.html","0703dd729c8b1b4f91ac342511eb6fd8"],["/2023/04/27/memes/memes_group_3_new/index.html","3fbca1cb7e8305436b349aa90fa55cdd"],["/2023/05/01/十三号线/index.html","bc2d984b047aec28b923935216e9b9f9"],["/2023/05/04/小论文撰写总结/index.html","600e8fcf714ee9519bea7675fed881de"],["/2023/05/05/不存在的梦想/index.html","c6698e7c423a2762368080dea819713c"],["/2023/05/06/等待的时间/index.html","ec6551f00be888088c7431971a098fbc"],["/2023/05/11/本科资料/毕业设计/运动目标检测方法比较/index.html","e0c2f25b1eb760e35a91cfe1adf63a7f"],["/2023/05/14/memes/memes_group_11_new/index.html","a0fbb64a45e6e9a829ddeba4bf6b329a"],["/2023/05/16/memes/memes_group_49_new/index.html","5f9f41c64d9e94b46bd9b860efd0f424"],["/2023/05/25/只道当时寻常/index.html","d8b7d3eece22a5a9ccf9ea6e34e66a9c"],["/2023/06/23/memes/memes_group_70_new/index.html","7dbff266c2537c0a73781a02e587466c"],["/2023/07/03/memes/memes_group_18_new/index.html","31a2ee89b59bcb5faab2f3a6b358c5c2"],["/2023/07/07/memes/memes_group_12_new/index.html","8798499f34597fa568b834055f3535f8"],["/2023/07/17/工作总结/2023年上半年/index.html","a6622c5de97c88205767d2d0da57bf37"],["/2023/07/20/memes/memes_group_16_new/index.html","7171b98d5af4acc9d5ff8156b61dd4e0"],["/2023/07/22/memes/memes_group_25_new/index.html","d003604a13c50f3cf54199d1bde2dff8"],["/2023/07/26/memes/memes_group_41_new/index.html","bbcceb560de6f42d0844a156874dbbf8"],["/2023/08/12/memes/memes_group_66_new/index.html","9436fff9716aef5710ebe5b82a4e7515"],["/2023/08/15/小样本论文/Imbalanced Time Series Classification for Flight Data Analyzing with Nonlinear G_new/index.html","6e8ed1f8f5feb7a40ab7758d401d34cd"],["/2023/08/22/memes/memes_group_43_new/index.html","16e7c905d440eaebc512355fbde9f00e"],["/2023/08/28/论文撰写总结/index.html","e84a9a94fe400f5a5315b25936a93be8"],["/2023/09/07/机械专业竞赛入门/index.html","e243991b93ad0656eb75d2fe8749974f"],["/2023/09/12/memes/memes_group_29_new/index.html","db4956e44ffbfb986bac926e5943cfc2"],["/2023/09/19/小样本论文/A zero-shot fault semantics learning model for compound fault diagnosis_new/index.html","b3f31ad463a59181a427d4cc95e839e2"],["/2023/09/22/memes/memes_group_17_new/index.html","f85627a7bd85bb29cc57194e984d7e1e"],["/2023/09/25/memes/memes_group_45_new/index.html","2cb3ef663c2dfbb5c85c7044b4116136"],["/2023/09/30/memes/memes_group_46_new/index.html","c94a11f3d0003fab3bd588c6880f085b"],["/2023/10/05/memes/memes_group_53_new/index.html","4643bcc4f3125e08fcf91f23584778e4"],["/2023/10/06/memes/memes_group_37_new/index.html","e8e2a47998a01e5c335437f497b8602a"],["/2023/10/08/memes/memes_group_19_new/index.html","775814ac68623ad8179f8f1ed017987f"],["/2023/10/20/memes/memes_group_42_new/index.html","6a7cc389de87318f6199e56fb709105a"],["/2023/10/21/我拥有的/index.html","576be7449cb09aa28b5859964d46fc59"],["/2023/10/24/memes/memes_group_35_new/index.html","f7d1beeabbd00e045f21ff903d35e298"],["/2023/10/27/memes/memes_group_31_new/index.html","f248e7416ccea34c3091b47df453b866"],["/2023/11/05/人生二十二载之复盘/index.html","b553a07feb87f2150c34ad272fdfdd34"],["/2023/11/07/memes/memes_group_21_new/index.html","84abaadea21fd3d4ca4f7ea487cef144"],["/2023/11/08/memes/memes_group_7_new/index.html","97617cc841d93c3a1aaaa94a8a149891"],["/2023/11/11/memes/memes_group_23_new/index.html","64fad932bca3102f3ad0b3bca89eea6c"],["/2023/11/17/memes/memes_group_51_new/index.html","efa490aa8db93205da0bf9731ab86d0d"],["/2023/12/16/《万历十五年》读后感/index.html","3af866db4228d49d0dbef0eec14db563"],["/2023/12/27/2023年之总结/index.html","40653a19e237a8129b6a8908eeb4dbf4"],["/2023/12/30/memes/memes_group_14_new/index.html","dd71680dbc98461b2acea9a6f3367b4d"],["/2024/01/13/memes/memes_group_9_new/index.html","23bb9246b72c0002629fb98ac431dfdf"],["/2024/01/18/memes/memes_group_63_new/index.html","0d5009cef8b0b5fa1b78510c333f9fc2"],["/2024/01/30/风的记忆/index.html","d79389abb3dd7b04e20283dbef1e02b6"],["/2024/02/01/小样本论文/语义补充的故障诊断/index.html","5b225c0b12e8e1cd27b057684c5941b9"],["/2024/02/07/memes/memes_group_36_new/index.html","09c8af48d8638e4c294afbc6244a0e5c"],["/2024/02/09/memes/memes_group_47_new/index.html","9f857dd025e58aa97209dbefc1a08247"],["/2024/02/15/memes/memes_group_15_new/index.html","17df804248ee4910bdd20504a8a56ce0"],["/2024/02/29/719所项目/凝给水系统故障/index.html","be41d377835e1c8601e0b34704cb1ea0"],["/2024/03/02/memes/memes_group_54_new/index.html","7bdcabcd3152264b26fb80a6c19f18a7"],["/2024/03/04/memes/memes_group_27_new/index.html","1e2c48dc06ce373c80459d5f3bdc8ad1"],["/2024/03/04/亡国之相/index.html","f17a5d382f1d8f9cec3d4bc446975bcf"],["/2024/03/10/memes/memes_group_57_new/index.html","bc8cc023350538d79877118db6d556d0"],["/2024/03/23/719所项目/电动调节阀故障/index.html","9b4a08f22c062b7a23025b31f51a4f07"],["/2024/04/27/memes/memes_group_22_new/index.html","1866ce12053e98abbce85551fead69e7"],["/2024/05/08/memes/memes_group_62_new/index.html","ca392f998731f7d348e0918664a5ed6e"],["/2024/05/09/719所项目/电动调节阀故障实验/index.html","1106105e3d99f20d83e5a0e0c5557a6e"],["/2024/05/13/memes/memes_group_6_new/index.html","f0fecba80a44e82e07126d75a44d7a6f"],["/2024/05/15/719所项目/阀门实验总结/index.html","320219b8f2a987eeca320519af084a7f"],["/2024/05/20/memes/memes_group_69_new/index.html","0a48e3c85b5ba5de19858b95a11c9f21"],["/2024/06/03/memes/memes_group_56_new/index.html","7d228f10331153b4dece47939698117a"],["/2024/06/13/出差有感/index.html","294b974dc3e1c4d8599e9c081cfae6be"],["/2024/06/22/719所项目/电动调节阀状态监测系统/index.html","045aafcac629e89750eeb0849b8d039b"],["/2024/06/23/memes/memes_group_68_new/index.html","d13fb15e267eff1e82223e6b9aefca5c"],["/2024/06/24/memes/memes_group_32_new/index.html","586a824168277caf924be075da752a76"],["/2024/07/05/memes/memes_group_2_new/index.html","0ff3925cc16ae42b5f9fa2d0dd3331fa"],["/2024/07/12/文史类/权力与货币_new/index.html","8957fc9ff88fc25126d376aec95fa4ab"],["/2024/07/20/小样本论文/条件限制的样本生成相关文献_new/index.html","c6403c69a98ed394ff303dd207101516"],["/2024/07/20/爸爸去哪儿/index.html","4d5377768c50865bfe93dcd93a380502"],["/2024/07/25/memes/memes_group_59_new/index.html","6aacb9c93313a1b0802aae685968c419"],["/2024/07/29/信号处理/傅里叶变换/index.html","af7bd27d29601defb72911865b9bd76c"],["/2024/07/29/本科资料/概率论概念_new/index.html","e507f1b131a3fffd2302a72877de9cec"],["/2024/08/14/memes/memes_group_10_new/index.html","e3714045f575003ea53c52eb94d3d69e"],["/2024/08/23/memes/memes_group_24_new/index.html","9fd99785bb43f40e44f7730b882f6acf"],["/2024/09/06/memes/memes_group_64_new/index.html","a41450132c347445f017ee1f86112c54"],["/2024/09/17/memes/memes_group_52_new/index.html","f5c359892b8b2c5fa8e71784ba6ae725"],["/2024/09/21/memes/memes_group_13_new/index.html","d3f0c782ffed2032dbcc0fac1c9d24b7"],["/2024/09/25/文史类/阿德勒心理学/index.html","89a086504b87c49fed714f654e19afb7"],["/2024/10/05/memes/memes_group_61_new/index.html","d9eff32884876664844a9bb9f15e88b6"],["/2024/10/07/memes/memes_group_4_new/index.html","6579145e9851eabc5284e6f3750f2cb6"],["/2024/10/09/memes/memes_group_58_new/index.html","07b42ff8dc6ef1b7a47391d4d74baac8"],["/2024/10/13/memes/memes_group_50_new/index.html","293ee38fa40cd719e92621752038e98b"],["/2024/10/15/memes/memes_group_5_new/index.html","a7ccaa7559711f25e5a2940d5724ac38"],["/2024/10/22/memes/memes_group_67_new/index.html","78896faabc1330597a5b6b0d0b10a702"],["/2024/10/26/回家有感/index.html","d87e86153727eba2a681228330314f0d"],["/2024/10/31/旧事集1/index.html","bfc610f214e1ff0da0b7e120a05b230f"],["/2024/11/02/memes/memes_group_39_new/index.html","65c8b02bfe0d5cf7607660021a987c5b"],["/2024/11/02/旧事集2/index.html","5aec3af0b39eecaa8f0c3319b5f77164"],["/2024/11/03/关于意义的一些想法/index.html","34d14c83947c996a8f69a0d266364bb6"],["/2024/11/05/memes/memes_group_48_new/index.html","47fb4615a27ec8d0389a53cc16836421"],["/2024/11/12/无名之人/index.html","ef3d732869448bda4f49c35bfc354853"],["/2024/11/13/小样本论文/零样本相关文献阅读_new/index.html","4dd00526d7c4b63f9cda92725b393300"],["/2024/11/18/文史类/魏晋之际/index.html","4dc4a535cc8ab289a542468f3c4a627d"],["/2024/11/21/memes/memes_group_60_new/index.html","c8c0e028b6b27ed5ce03ebb6e3146f87"],["/2024/11/24/memes/memes_group_30_new/index.html","815ab61e5b11b69f523592a7bde628b7"],["/2024/11/27/杂文/公文写作/index.html","72fafc7d751d10cfa78552b8c6d98693"],["/2024/12/12/memes/memes_group_8_new/index.html","c440839c734b18e2d3112bbd3af0d360"],["/2025/01/02/工作总结/2024年总结/index.html","f57003ffa0541d7eb9a5512a162400d0"],["/2025/01/08/memes/memes_group_44_new/index.html","785f99b8f308ee75cbfbf737ed82dd2b"],["/2025/01/10/文史类/基层的理性——《小镇喧嚣》读后感/index.html","bf47931c2b3c000dec0b30826b03a06e"],["/2025/01/16/memes/memes_group_34_new/index.html","bc00d966612c84fe356679385fc15add"],["/2025/01/18/memes/memes_group_28_new/index.html","0a857c73057ec12fefd969f1b2cda2a7"],["/2025/01/18/文史类/中西方文化基础性全局性交流/index.html","28b5eca9e67d84e0eefc6a9e3ebe1322"],["/2025/01/29/关于意义的一些想法2/index.html","bc3acdb2b5fcf903ad05aa29729953b9"],["/2025/02/06/memes/memes_group_65_new/index.html","c961a227ba67178800b86f35a57a0450"],["/2025/02/16/memes/memes_group_38_new/index.html","c828152e4d9e271a767b37987613da23"],["/2025/02/22/枕下的时间/index.html","86ee9c3809191e8a0bebb41ee0847a29"],["/2025/02/27/漫长的冬季-引子/index.html","e52716f53652da2a8960651097522bd5"],["/2025/02/28/漫长的冬季-0/index.html","0cdd9dda2b9d0ed77e6b9f8afb06ae94"],["/2025/03/01/漫长的冬季-1/index.html","c5e5dd408199cd0a4dacb9d47c2c6921"],["/archives/2021/02/index.html","05ad615546f8c683069fe6a2e1c289e2"],["/archives/2021/04/index.html","19b80bf49cf83a3dc69983c0e2b26208"],["/archives/2021/06/index.html","592fade3c6c742a89654a05be77cabbf"],["/archives/2021/07/index.html","5e6699b82558ace78a0e7be19a8e971d"],["/archives/2021/08/index.html","9076b30cd1b67148537aee41e02828ce"],["/archives/2021/09/index.html","96ad3b922ea62a98d4a21549a7b5cd77"],["/archives/2021/10/index.html","37d39d006e7124d450709cafd83880b8"],["/archives/2021/12/index.html","391a4358bdd408b33f5b955fc9396513"],["/archives/2021/index.html","ab5440bb8056a2122ceebf87acfc934c"],["/archives/2021/page/2/index.html","26837e3408107b58c94cffdc4cf4b17e"],["/archives/2021/page/3/index.html","52e9815fa405e18daadfae5b3d3cd322"],["/archives/2022/01/index.html","bf5e63801b43995cfe1a25fd041ef795"],["/archives/2022/06/index.html","226718f07b97441bf416fef0b2e442c7"],["/archives/2022/07/index.html","d5d87737a02adc1b77a6316968e58795"],["/archives/2022/08/index.html","2fc1e2269c996f1498200c125a5cb800"],["/archives/2022/10/index.html","0f864bccae6f657c8b1609f157211020"],["/archives/2022/12/index.html","5aa8c15fc8cacf72bdf7d6d017114efa"],["/archives/2022/index.html","d0555a6ec1f32904e6cb65679bebe628"],["/archives/2022/page/2/index.html","42811d3a9b912a91c152cb4d560afaf7"],["/archives/2023/02/index.html","a9b68ed2e0e66b9c35fc03260d63675f"],["/archives/2023/03/index.html","cde8ba20a5e6a95b72fef974f4c0d105"],["/archives/2023/04/index.html","7095547005632bf7258218318dfc6d74"],["/archives/2023/04/page/2/index.html","b21bd9a156a837c30ec0759b866d5c7c"],["/archives/2023/05/index.html","1efad29b5b37498273d08c6053b3edff"],["/archives/2023/06/index.html","01952bdf1d2f7458821b0bbda45b332b"],["/archives/2023/07/index.html","ce1634711b69f2034b1a4a394337f7ae"],["/archives/2023/08/index.html","be646bb3f57ad6c71d1fde371b4aa4e2"],["/archives/2023/09/index.html","f20d9c485b28ac8eb9b715d1a06ae9f5"],["/archives/2023/10/index.html","249550c88d6289e62f2599eb0e64d04e"],["/archives/2023/11/index.html","1f91f7deaaf218d7d12a735d3a0704a4"],["/archives/2023/12/index.html","0325f2336b7d023375e90696d176a519"],["/archives/2023/index.html","22abc4eb29d4fb398b758f0397edcf71"],["/archives/2023/page/2/index.html","bc34966eb5ae84e6fc00fe5915800d06"],["/archives/2023/page/3/index.html","3237a8defa5342b464d705d0b9e3fc88"],["/archives/2023/page/4/index.html","578c1f81a71fd6cbf779d5c105c3b811"],["/archives/2023/page/5/index.html","709f7541c0eca1ab17d659dae7ac7048"],["/archives/2023/page/6/index.html","bb70aa78f20732bf65e4c3a56e604be2"],["/archives/2023/page/7/index.html","cf547c00c26f0c6d37cdeda0049d0860"],["/archives/2024/01/index.html","a1f2c5f27527f56ee908bbbd3f9a1c45"],["/archives/2024/02/index.html","017bde721a8c7e5e99a33036e9fecae7"],["/archives/2024/03/index.html","7fb1c2e4abba740e02de447bd8ecb4de"],["/archives/2024/04/index.html","b8ca88ba3fc386e2bc41df9ade752d3a"],["/archives/2024/05/index.html","c5a40407e069315dd1bf5ba1ee04ead4"],["/archives/2024/06/index.html","5c4ab1a1adabf19c0723e8b0e77dd6ef"],["/archives/2024/07/index.html","10c4665d4de6288c7e01d10ac855e2d6"],["/archives/2024/08/index.html","4d995401ae0999143acdc881f30cd95e"],["/archives/2024/09/index.html","c3821dc4a215fb3e606693bdbd048ba7"],["/archives/2024/10/index.html","31dbf6f8798d80b014bceaf1532b653a"],["/archives/2024/11/index.html","84050f3be3b8ba5e32ff3b8e6f2aca8e"],["/archives/2024/12/index.html","309199b181484f2d85c108f9a3fa77d3"],["/archives/2024/index.html","c5a348ba7f85877505d951bceb52b2e2"],["/archives/2024/page/2/index.html","32e6a11ba6ed7028e14c5f9ad2aa3567"],["/archives/2024/page/3/index.html","3d5d2c5ef1fe4349c18dc6125ffee008"],["/archives/2024/page/4/index.html","5e90ece857c4b95c6f55fa3b021b051a"],["/archives/2024/page/5/index.html","fca285665b14a8101ee394c53ff283b8"],["/archives/2024/page/6/index.html","d0d3f5a0c94e0a955e26ebea563ff8c2"],["/archives/2025/01/index.html","9eb5875dd701e8044f69da3fb572e9c6"],["/archives/2025/02/index.html","eb0b10e92ac5492ea5b2e2b2250a9423"],["/archives/2025/03/index.html","8464df6f86d0c37e4ba5a78dbc25a137"],["/archives/2025/index.html","543d8ce2d803fdee41c692a1e991be45"],["/archives/2025/page/2/index.html","7e00ac23ec08fc663bf327d7d66e0099"],["/archives/index.html","b4d97b09690991eae3ece15365658497"],["/archives/page/10/index.html","73930749fb701d69f66ff03eb9734934"],["/archives/page/11/index.html","de0199e67b74e0c9eb6bf2096189ade3"],["/archives/page/12/index.html","5a2b4a57d06a05e3a7dbd25c20d5fdbb"],["/archives/page/13/index.html","57cf1b8162c86d145c6a5ffd4a2cd3cc"],["/archives/page/14/index.html","2f450b8c6077603628da7169fd8b1e00"],["/archives/page/15/index.html","5e2bad8945a12d509c99da2e00264919"],["/archives/page/16/index.html","6acfae263998e5be7a52d6625141c4b1"],["/archives/page/17/index.html","5def21f46efa82d07c365b7028f49d16"],["/archives/page/2/index.html","bcc2c2d49aabc6a4c1f90b32238f7caa"],["/archives/page/3/index.html","ae06eb31f3983c89532864949c52d327"],["/archives/page/4/index.html","c88864abc6fce41fe6294a6d6887e3cd"],["/archives/page/5/index.html","d30a406a4f1c7bf642ee2f4e0317cc57"],["/archives/page/6/index.html","169f4804857858b9f17230ef74bc8ce9"],["/archives/page/7/index.html","dcac2aed7f21e9736a25acb308b7317d"],["/archives/page/8/index.html","75a33bf9cf9c678250cae46e2bbd92ab"],["/archives/page/9/index.html","1612b2ad2e9ce3042404c4653f2fc77c"],["/categories/index.html","43aa33ee9ab2f974e5d290cad285c0ca"],["/categories/meme/index.html","9e07da17acfa489227777acc2955c36e"],["/categories/meme/page/2/index.html","1d91bd08026ddfd9d968658dbbfff711"],["/categories/meme/page/3/index.html","47cdc4ffb26cc0ecbf97eb375cd14c80"],["/categories/meme/page/4/index.html","b7fef4ef92268a3c90ebc1669bd37108"],["/categories/meme/page/5/index.html","e1215db44c4480a1ec1f0a6f7e580dee"],["/categories/meme/page/6/index.html","7293f72412d83aae96b1fc30e819ba0e"],["/categories/meme/page/7/index.html","08d56661c97161bca56daa4dfdda59c2"],["/categories/写点东西/index.html","25f4b796c074cc322c12d7bcf45e8794"],["/categories/学习笔记/index.html","a9927fe4d830ae11f054fad4e20aedfd"],["/categories/学习笔记/page/2/index.html","07676cd27b0d1af49c5346b696d9d53a"],["/categories/学习笔记/page/3/index.html","b59c8888de9847cf679d1a2fe5691450"],["/categories/学习笔记/page/4/index.html","d61f6884f1fd890ebd05eb964201f799"],["/categories/学习笔记/page/5/index.html","a094d16e681b5c14b24acaad21baf9bd"],["/categories/学习笔记/page/6/index.html","500be1fa3f92dbff7feb4dcf77f58411"],["/categories/学习笔记/page/7/index.html","cf47a3e9737b38691548445b8b0fcb35"],["/categories/学科相关/index.html","7439bff540a79fe69d5d52d2f0d33d7b"],["/categories/日常随想/index.html","5a626e123b466b2e8c3eb00f2b3d0f38"],["/categories/日常随想/page/2/index.html","8330c433cd637c6b0b026af637d22a32"],["/categories/日常随想/page/3/index.html","72d299be6c5548a766298daf0df7794d"],["/categories/读书有感/index.html","b63f3b68c058299cba0030efa4881246"],["/categories/阅读感想/index.html","7d7ad355d74a67b4cc9733f8eef741dd"],["/css/index.css","f1c40d4e1ccd9de1af396f381f5f4d1b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/background.jpg","6f4e9ba2b940a5dff7c12f77965fb0b8"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/ding.jpg","0251f20cf4919a2666bf4a769e675081"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","eb8bf391b15f9071988c688b023bef68"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/memos/imgStatus.min.js","ba389639289cc1e20e8a468717b97f62"],["/js/memos/photo.js","be0ec483197a21504e0b3b8521519dc5"],["/js/memos/waterfall.min.js","4c2b801d7654e439c486c64fe2a821a9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/memes/index.html","bb94277a27ecfc378eb3f53a1d48d00e"],["/page/10/index.html","e2e45ccb14ee71dc30517472f907e9a3"],["/page/11/index.html","86e43952b396bf0b9e6b6ad29d2d9a6d"],["/page/12/index.html","9a03926851c396788c240709f0667fe6"],["/page/13/index.html","348fb4e2167f5177901d6a1ad362b697"],["/page/14/index.html","1e1eb7828575449c14f6524ddd3e4d0c"],["/page/15/index.html","b304d425721b1b120f5d298fdacc77d5"],["/page/16/index.html","0988f2b742abf36d4b12fa808353ced1"],["/page/17/index.html","3f71dbbcf48bf97538198b5e1710628e"],["/page/2/index.html","1f068d2eecbbc3f86ad475cd63839a51"],["/page/3/index.html","1c2d352464279ee5734381721b30547e"],["/page/4/index.html","099c016aeb7a1d1fe3bdc59d12505638"],["/page/5/index.html","8eba26d0f56478b142052d195aeb7346"],["/page/6/index.html","5c2dc650df4280e7d117a112ff4de2ee"],["/page/7/index.html","ec6d2521c129b3cfcf33630c54a22716"],["/page/8/index.html","cb5ce84732a1c368123d6948a78cc1e2"],["/page/9/index.html","06c01e635c5fa0944c2a385a2e438164"],["/photos/index.html","dfe9c753834d4e5fea3e436d8816ce93"],["/sw-register.js","0f839f9bb2d482f65d653ed67af56f81"],["/tags/index.html","fcca71f39fc89a0d18b1de3bf9c8113b"],["/tags/meme/index.html","8771ba5b18420371b6de598400edaa97"],["/tags/meme/page/2/index.html","237c3fd2eacc611c28be690048147e6c"],["/tags/meme/page/3/index.html","51c38b52c391ef3f04cca0aa68c53b72"],["/tags/meme/page/4/index.html","0602277308f3e84514223cf46dbb6323"],["/tags/meme/page/5/index.html","db033394fdb71a2afb87a9868beca184"],["/tags/meme/page/6/index.html","c5f8ea97a5dd0a4f1255180a327edc99"],["/tags/meme/page/7/index.html","7b0cc83d54c71899f7fc9a60ebd46a9a"],["/tags/信号与系统/index.html","93e4f4f6ccdbf50d1c6ceabb066227c2"],["/tags/单片机/index.html","f0707b0cefc246c1de615a6f5a710cf1"],["/tags/回想/index.html","e3a959a0daad2b14886e27536617585e"],["/tags/回想/page/2/index.html","2887c919a2bbb9b16c0d7d49185d7b12"],["/tags/因果学习/index.html","e882ca6d1af090d4db7bbefe8e81c36c"],["/tags/大块煤检测/index.html","142be9695809f6433914bd0254e7fc95"],["/tags/小样本/index.html","4ccb542c964286ba085f4cb53848e09a"],["/tags/就业/index.html","f524b817c0532b9d02b1f49961932a84"],["/tags/就业相关/index.html","16d70791ef9db0062027af7f395aeee6"],["/tags/控制工程/index.html","1d706925d8bd697c494b31d716910900"],["/tags/故障诊断/index.html","1a8f618f745a83dc90303ea2ad12195c"],["/tags/数学/index.html","ee80b0ab454b794345359fff1bc136d0"],["/tags/文史类/index.html","2cbab35c981dede945245d5a1004ac1b"],["/tags/机器人/index.html","68e3f6284d5c67c40fae5a1bbee6af3d"],["/tags/机器学习/index.html","0796c65bcfed18afc648b82b4a542e90"],["/tags/模型/index.html","c6b9f6faee57207e43151424d3f0356c"],["/tags/目标检测/index.html","bc304603fb3b37eb0ec559d1a107d5a1"],["/tags/自我批判/index.html","0e99e9c90e48cdebcbb0c2d1aceac00c"],["/tags/虚构类/index.html","ca69c8ac2b1b50f0f35106d441dd4ab7"],["/tags/论文写作/index.html","0437a212475fdec3b8e743b660300ac4"],["/tags/论文撰写/index.html","1be9501c493fbd80120b3fab7dd110f2"],["/tags/阀门/index.html","cc74ecde661ffce6f7fb8dd73c48d18f"]];
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
