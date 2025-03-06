/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/07/本科资料/机器人学笔记/ROS重映射机制_new/index.html","0ad7b714a00b45abef1f9133d1c5574f"],["/2021/04/13/本科资料/机器人学笔记/DH建模法_new/index.html","64e2dbb7c4dac393b62dbfd200ff5c27"],["/2021/04/14/本科资料/运放与反馈_new/index.html","cd0f58bb1cd69e9ee8e436a6b2ed04f7"],["/2021/04/18/本科资料/机器人学笔记/ROS_TF_new/index.html","4ccfdef1e5cbda7f9ad07eec5994ee80"],["/2021/04/21/本科资料/逆解_new/index.html","8839e334b04929fe16b6c1708d956cae"],["/2021/04/24/本科资料/数学建模_new/index.html","8ac226d77182be8e368e337c2db76084"],["/2021/06/21/本科资料/控制工程/奈氏稳定_new/index.html","afbdf15fa9d27d68fec2e147634ff37b"],["/2021/07/02/本科资料/IIC总线_new/index.html","eb18db24a6223982b8709fb094b3cbe3"],["/2021/07/03/本科资料/系统时钟_new/index.html","31f478f7736d9dafd303257c6349da75"],["/2021/07/18/ML/机器学习2_new/index.html","1080fa77bd8406f519c0dabc08123a2b"],["/2021/07/31/ML/机器学习3（逻辑回归）_new/index.html","195a67c64705af166effd3f62d25f9a9"],["/2021/07/31/ML/机器学习4（过拟合及编程实现）_new/index.html","d7d24418c1bb861ac96ca8a53bc8f169"],["/2021/08/02/ML/单层感知机额的数学符号表示（Bzha）_new/index.html","aac0603ded3e212873fe27a515e7a8d4"],["/2021/08/05/ML/机器学习5（NN）_new/index.html","de013c3528e40913ab410c52d1c444f0"],["/2021/08/06/ML/机器学习6（评价与诊断）_new/index.html","13e6200edfd04d45607b756cff65fb5f"],["/2021/09/16/本科资料/机器人学笔记/欠驱动机械臂运动学仿真/index.html","e46493a1e19fd34ce8f03c20ff25afb1"],["/2021/09/25/信号处理/概念总结——信号与系统/index.html","162cc9eeb3adad8b4b2415c441867a62"],["/2021/09/27/本科资料/卡尔曼滤波_new/index.html","e3c81b7fb4428a210d44b8705fa65e52"],["/2021/10/08/机械的未来_new/index.html","06625952f07df8880777879c55dd9869"],["/2021/10/17/ML/机器学习_new/index.html","767d01848c89b8d8ac470a97f7672077"],["/2021/12/31/本科资料/机器人学笔记/Navigation实训整理/index.html","7dc6d2cb76cf4bc2c6a918c08d8c4cb3"],["/2022/01/22/本科资料/机器人学笔记/ROS自定义路径规划器的原理及实现/index.html","19b9294c6c14176ce4e98edb466eac09"],["/2022/06/12/本科资料/PLC期末复习_new/index.html","10c202c971cba66d4bfbd8d65537aa09"],["/2022/06/24/信号处理/理解离散系统_new/index.html","87c465e31e6c7f0b4706ba6b9aa6e306"],["/2022/06/26/本科资料/控制工程/离散系统的闭环脉冲传递函数_new/index.html","2646a009f12b49143c89909be23aa19a"],["/2022/07/22/本科资料/机器人学笔记/伺服电机矢量控制原理与仿真/index.html","9651d3aa4072bc2de853d43e1edaa495"],["/2022/07/25/本科资料/马原概念关系/index.html","b71c5e2f46d07e88a336438d3428ee9c"],["/2022/08/15/本科资料/控制工程/根轨迹法总结_new/index.html","cfd6fcfc99a7d13aa3698da884c70b45"],["/2022/08/16/信号处理/数字信号处理/index.html","e66b5627bee81960d126a9e463de6b3b"],["/2022/10/04/本科资料/毕业设计/图像预处理_new/index.html","6e23447fc2838153aa7f447c20408610"],["/2022/10/16/本科资料/毕业设计/侦差法调研/index.html","fb2b1cc641c665921475a83a544e01ba"],["/2022/10/23/本科资料/毕业设计/GMM_new/index.html","91a07bafc6bab81f182b4aa55fcd634f"],["/2022/10/25/ML/RCNN_new/index.html","f46cf14a950bb1cd034a7e844e44d111"],["/2022/12/12/ML/关于神经网络_new/index.html","578f1623b0e2101db3ecc9d3288a6c5e"],["/2022/12/27/本科资料/毕业设计/检测问题分析/index.html","d007902538853f176f4619079c12373a"],["/2023/02/11/ML/因果表征_new/index.html","a082393f78e5f297cee89d9aca3ed612"],["/2023/02/12/ML/因果推断1_new/index.html","31e5a250698fa7a6d8e55f671f172737"],["/2023/02/15/ML/因果推断2_new/index.html","66c78bc654d01c8b3701eade13fbc326"],["/2023/02/23/我与地坛/index.html","1ad434cc6ef4180d5e2dc91fbdc6ae10"],["/2023/02/27/才二十二/index.html","4f6781324f7c7d2859c802d304e2f85e"],["/2023/03/05/memes/memes_group_26_new/index.html","fc8c966791f7aab8567bd26f3dfee0e4"],["/2023/03/07/memes/memes_group_55_new/index.html","db632d1a5097240e6530ca9b773f9c90"],["/2023/03/18/奥森有感/index.html","076d74f24df41b00b081fa65117d001f"],["/2023/03/26/memes/memes_group_40_new/index.html","f9528177b93c17f973699584e3a90797"],["/2023/04/02/memes/memes_group_33_new/index.html","5f86cb85e5f85da594db8e083ee988e8"],["/2023/04/02/成为代沟的一部分/index.html","819c2bb091ca4364febf90cd019b2d88"],["/2023/04/03/本科资料/毕业设计/2023.03科研日志/index.html","0fe15009b9ad960188e6dd1137e62de3"],["/2023/04/12/小样本论文/A review of the application of deep learning in intelligent fault diagnosis of_new/index.html","4ce5f78077c1b79feef362a94c92973f"],["/2023/04/13/ML/Transformer_new/index.html","4187762fe32cc0a16733cf4a07b27997"],["/2023/04/13/小样本论文/故障诊断发展史_new/index.html","c2e18a5d01e12d81425790025ee138d2"],["/2023/04/19/本科资料/毕业设计/光照归一化算法测试_new/index.html","031ad655e35a61266d9ecc9d2362b444"],["/2023/04/19/本科资料/毕业设计/论文框架/index.html","6f7eb6c4f71a8e403886e383436ec360"],["/2023/04/20/小样本论文/小样本和不平衡样本_new/index.html","7c52d06a518b2830766cf1b9c300d3b0"],["/2023/04/25/memes/memes_group_20_new/index.html","9abda88d98dd9147f496dd29c3ae7176"],["/2023/04/25/工作总结/2023.04 科研日志/index.html","808cf4e6808efb6d025188d78020f55c"],["/2023/04/25/本科资料/毕业设计/论文写作与文献查阅_new/index.html","a7ee49fff79b030ea1bd3fafca811490"],["/2023/04/27/memes/memes_group_3_new/index.html","cf2d2e7bd3dad5ae62d3f9288ebb4a6d"],["/2023/05/01/十三号线/index.html","6a799a0bd8b1d5a8209a6b7b181137bc"],["/2023/05/04/小论文撰写总结/index.html","5e3eabe0b781713a3107b9df724e73d1"],["/2023/05/05/不存在的梦想/index.html","305fc03a2d05fc60240a4aab877a2ecc"],["/2023/05/06/等待的时间/index.html","f99057544db332d3d38f2a9c10105571"],["/2023/05/11/本科资料/毕业设计/运动目标检测方法比较/index.html","41f800c454272b1944247dee2019d7d5"],["/2023/05/14/memes/memes_group_11_new/index.html","1af21b2670a52999f15987109006e9ec"],["/2023/05/16/memes/memes_group_49_new/index.html","20e2bae1c585c27d9501044e8348df02"],["/2023/05/25/只道当时寻常/index.html","d758458e1ca62c3df7f30feca87f40cf"],["/2023/06/23/memes/memes_group_70_new/index.html","70da06dacbf949498850d0ced980237a"],["/2023/07/03/memes/memes_group_18_new/index.html","f30c3a48792ccc76e0babdb337bc71a5"],["/2023/07/07/memes/memes_group_12_new/index.html","df2ad81ce01079f5a973af5e3831b1a0"],["/2023/07/17/工作总结/2023年上半年/index.html","50cd7d9e9e8b6d4eab73a3bd9e16d95e"],["/2023/07/20/memes/memes_group_16_new/index.html","c9ab065e42cfe11c7568ca4b2266d8a2"],["/2023/07/22/memes/memes_group_25_new/index.html","70f7b4ac18633b671fb9158129d9536b"],["/2023/07/26/memes/memes_group_41_new/index.html","1605da38858ca3be305abee50800e921"],["/2023/08/12/memes/memes_group_66_new/index.html","41395ca41a6bda3f76336081ecec115c"],["/2023/08/15/小样本论文/Imbalanced Time Series Classification for Flight Data Analyzing with Nonlinear G_new/index.html","b1421c088b3e17be5a59510fc0a09e13"],["/2023/08/22/memes/memes_group_43_new/index.html","2ed311f611546bd4445be41078fa45a9"],["/2023/08/28/论文撰写总结/index.html","fd00aa53ff6af739ba209f2c3360d858"],["/2023/09/07/机械专业竞赛入门/index.html","16353a8c508eb3c3a039fd43801b6bd3"],["/2023/09/12/memes/memes_group_29_new/index.html","0f88c04442991e25cbff90cdea17eac2"],["/2023/09/19/小样本论文/A zero-shot fault semantics learning model for compound fault diagnosis_new/index.html","ebb912b8383f9e8b488d6aebe41fcc0d"],["/2023/09/22/memes/memes_group_17_new/index.html","4737274d2b1ffbf104aaa68f86776a0e"],["/2023/09/25/memes/memes_group_45_new/index.html","77da8ee1a6980bdd682441f246255dd2"],["/2023/09/30/memes/memes_group_46_new/index.html","c85b07dad86a6b224da1bfae6e3afbe2"],["/2023/10/05/memes/memes_group_53_new/index.html","592cef528f1233277d83537e83241d5e"],["/2023/10/06/memes/memes_group_37_new/index.html","987d32ce2b60febec18c9608edc73db2"],["/2023/10/08/memes/memes_group_19_new/index.html","49a6081c202d33d1be247372c07c3689"],["/2023/10/20/memes/memes_group_42_new/index.html","026cb8c19b47403e9da7074a4f9aac3e"],["/2023/10/21/我拥有的/index.html","a86a5a0b534dbaac588e832ea2ed6143"],["/2023/10/24/memes/memes_group_35_new/index.html","a5dbc2d9a796b0b40aa0264272f87163"],["/2023/10/27/memes/memes_group_31_new/index.html","44026b385cfc6ccff12696eaf3d5613d"],["/2023/11/05/人生二十二载之复盘/index.html","319c735e0fb934a6a9abb169dfeb374e"],["/2023/11/07/memes/memes_group_21_new/index.html","6110b974ad2347b6024bde681aba7e22"],["/2023/11/08/memes/memes_group_7_new/index.html","6c0d80e93c84573173d7ef39a590fded"],["/2023/11/11/memes/memes_group_23_new/index.html","52e662ffd98e072fbcae2cd7cffb04d1"],["/2023/11/17/memes/memes_group_51_new/index.html","1b267dcc8d7eff65e91d92d27f450795"],["/2023/12/16/《万历十五年》读后感/index.html","e1898102bd50c25b9d740d9e073892bb"],["/2023/12/27/2023年之总结/index.html","6988bcfc7c4beb573219d91f7a5506ee"],["/2023/12/30/memes/memes_group_14_new/index.html","224172a526f684c3c5469e3e2e322673"],["/2024/01/13/memes/memes_group_9_new/index.html","158714211a349632caba71d54ffd9a94"],["/2024/01/18/memes/memes_group_63_new/index.html","cfae461b576f1588791d0742cafc8fce"],["/2024/01/30/风的记忆/index.html","ae91f6e38aab50d89237f8a879876185"],["/2024/02/01/小样本论文/语义补充的故障诊断/index.html","ba0558266e17a23b78ade02e436be405"],["/2024/02/07/memes/memes_group_36_new/index.html","25529879f66fcab1ff7eb1ad7b35eeea"],["/2024/02/09/memes/memes_group_47_new/index.html","683e9bcbc4d13897ce39decf7c04627e"],["/2024/02/15/memes/memes_group_15_new/index.html","37dc3e33e968e6b435c34b4579579ebb"],["/2024/02/29/719所项目/凝给水系统故障/index.html","a2ab1854a7a0a0e5cd5b2b5840a69d16"],["/2024/03/02/memes/memes_group_54_new/index.html","287841a7e4d75744127f919f93137ca5"],["/2024/03/04/memes/memes_group_27_new/index.html","2283e031bd8291c8d5c5f88537bd0172"],["/2024/03/04/亡国之相/index.html","9f25d09314e514be84a49f524d61dbe5"],["/2024/03/10/memes/memes_group_57_new/index.html","f2cb3be0b4ac3dc71c5d4b2d3f96c6a0"],["/2024/03/23/719所项目/电动调节阀故障/index.html","e1dc07acfc703fd295920db23d1ab7d1"],["/2024/04/27/memes/memes_group_22_new/index.html","ea27b0f8f535b0589a0548869a00cd78"],["/2024/05/08/memes/memes_group_62_new/index.html","ef1e9551ec0ef7ecae3ef84117c79a44"],["/2024/05/09/719所项目/电动调节阀故障实验/index.html","b187c1fe8de031b51ce107980072b3ff"],["/2024/05/13/memes/memes_group_6_new/index.html","b66feb0e205fc367dbdbcb8f8602273a"],["/2024/05/15/719所项目/阀门实验总结/index.html","8250d8f7a276e01fc7964d265e77fd66"],["/2024/05/20/memes/memes_group_69_new/index.html","bad69c6318be21b8d68a9f333c52431d"],["/2024/06/03/memes/memes_group_56_new/index.html","470073ae146a25f1e908c0682e535073"],["/2024/06/13/出差有感/index.html","3ea4e177fbf9d0b00f9b5f01b45ea23e"],["/2024/06/22/719所项目/电动调节阀状态监测系统/index.html","57f1a039943b5dfb95f5e26d27b4b8ef"],["/2024/06/23/memes/memes_group_68_new/index.html","796e45134c9a0b99359be6ccda9e59d8"],["/2024/06/24/memes/memes_group_32_new/index.html","082c8ea71cd43af5889acb955f8512e8"],["/2024/07/05/memes/memes_group_2_new/index.html","8cb3863210b3b16b16916567495d2e25"],["/2024/07/12/文史类/权力与货币_new/index.html","ce0fce562925df7892ddb2530c21f289"],["/2024/07/20/小样本论文/条件限制的样本生成相关文献_new/index.html","bd3b23142a2fff994142ed0977c87a6e"],["/2024/07/20/爸爸去哪儿/index.html","75bb3fe7691ab568e2e91eef409987a1"],["/2024/07/25/memes/memes_group_59_new/index.html","744346ce914f5a437e3efe9a49b50276"],["/2024/07/29/信号处理/傅里叶变换/index.html","00d6740010efbfb1c4653a48a88de98c"],["/2024/07/29/本科资料/概率论概念_new/index.html","1c5dfc884f2e9963b14103e33a54b7db"],["/2024/08/14/memes/memes_group_10_new/index.html","4fcd72d84f38b1dfed2f459dca779047"],["/2024/08/23/memes/memes_group_24_new/index.html","a08ef9080d4e112112cd7db55fc08c3b"],["/2024/09/06/memes/memes_group_64_new/index.html","69f3dd7487cb406bc71852064f38b9dd"],["/2024/09/17/memes/memes_group_52_new/index.html","e21a61a5c49ec49c1b7843d8cff60c0d"],["/2024/09/21/memes/memes_group_13_new/index.html","50f31adb89af0c5ee850197790143ed6"],["/2024/09/25/文史类/阿德勒心理学/index.html","5722f80e7b368b507e818a084ebd0b3a"],["/2024/10/05/memes/memes_group_61_new/index.html","8bc8856cbce93faa392f1208f24edde6"],["/2024/10/07/memes/memes_group_4_new/index.html","afb38fcef009eb945f41f052867812f7"],["/2024/10/09/memes/memes_group_58_new/index.html","880b444a0990191932c44c034765f80e"],["/2024/10/13/memes/memes_group_50_new/index.html","bfcb12757e0487672f446ebad2321c0f"],["/2024/10/15/memes/memes_group_5_new/index.html","5cfee1d90c8afbd05ab9492875c3f485"],["/2024/10/22/memes/memes_group_67_new/index.html","7280cf1c5f40b20b01716c31bb77fe90"],["/2024/10/26/回家有感/index.html","a5490086b7f54d2a2d9a9a757049b851"],["/2024/10/31/旧事集1/index.html","170a5d9960e4ce9c0bc71c0598fe3a7f"],["/2024/11/02/memes/memes_group_39_new/index.html","5d749184555cf540932bed92f513a748"],["/2024/11/02/旧事集2/index.html","33472907b849b6f4144b56d012d3d12f"],["/2024/11/03/关于意义的一些想法/index.html","1ae9732ab5182b845361310c93b11d76"],["/2024/11/05/memes/memes_group_48_new/index.html","86454122e5065f9f2394982f64b7f72a"],["/2024/11/12/无名之人/index.html","92fae5ec54d48d6ba23c5f5ce7708633"],["/2024/11/13/小样本论文/零样本相关文献阅读_new/index.html","b84c3ed042f3a769e4f9bb58f1ee4c0b"],["/2024/11/18/文史类/魏晋之际/index.html","f8a148f5dcfa7547cf8f35dba25fe3a2"],["/2024/11/21/memes/memes_group_60_new/index.html","1493df40443db68a721b7c50b9a9a13e"],["/2024/11/24/memes/memes_group_30_new/index.html","6b1f163df6b06737db6ee68fdf12e56b"],["/2024/11/27/杂文/公文写作/index.html","ac00dcaccf605404220d65cc1b6f01d7"],["/2024/12/12/memes/memes_group_8_new/index.html","236e4696a3be78cdc9373d6e0a55292d"],["/2025/01/02/工作总结/2024年总结/index.html","c17002e312189e4242fa0a8a23459ef6"],["/2025/01/08/memes/memes_group_44_new/index.html","20e38060a6b38288ee969d0da0dab87c"],["/2025/01/10/文史类/基层的理性——《小镇喧嚣》读后感/index.html","5d780eca5b3f8e6781df1dc9a58143c4"],["/2025/01/16/memes/memes_group_34_new/index.html","59eff69659bd7482631cd42c8db6474f"],["/2025/01/18/memes/memes_group_28_new/index.html","f2739877b9efc7efbdb36ca1ce61fa33"],["/2025/01/18/文史类/中西方文化基础性全局性交流/index.html","de02d90c949640a11d729be41127ae33"],["/2025/01/29/关于意义的一些想法2/index.html","673e0e57fe9ddfb3bc3959f93f2b6b31"],["/2025/02/06/memes/memes_group_65_new/index.html","aa537f527946cda4421d8d58520fa226"],["/2025/02/16/memes/memes_group_38_new/index.html","bf7e285642a99b42e004ed89dfb0543c"],["/2025/02/22/枕下的时间/index.html","0bfc2728feb80acc247976926ba12196"],["/2025/02/27/漫长的冬季-引子/index.html","ca8a11b1a15534c3448d50a239640aaa"],["/2025/02/28/漫长的冬季-0/index.html","b3df6617590c6e8f0495080e85b3a96c"],["/2025/03/01/漫长的冬季-1/index.html","363fa40e85ebb2a0ce46c1c1a7b628b0"],["/2025/03/06/创世纪-----建站重大事件小计/index.html","58a44257fd77327f2e54e8454d309f4d"],["/archives/2021/02/index.html","8468dd5643f0d9d02cd34b54659d46ed"],["/archives/2021/04/index.html","8759a20589796253c57e26dbc93b3bf1"],["/archives/2021/06/index.html","7ab55d13892a8437198b7aba00e6ec4c"],["/archives/2021/07/index.html","2497eb23fae7d3b673e6cf2137ca9aff"],["/archives/2021/08/index.html","2721e9b11364e98649eb04dd47b92427"],["/archives/2021/09/index.html","feef89ae55b288826d5b8bea7aceffd2"],["/archives/2021/10/index.html","c9284151743be61387006cf445b9140a"],["/archives/2021/12/index.html","bcc3e3ddc00eb1025a2ff39cff0a0ff3"],["/archives/2021/index.html","4d1df75f3df775f74cf88836ce4fcff5"],["/archives/2021/page/2/index.html","ebb0eb9450adca00a14ae6c4dd02fc93"],["/archives/2021/page/3/index.html","3eb4261e4409ccd3cdf968c358cae388"],["/archives/2022/01/index.html","3160227ac6aa99264b7404e8add237e9"],["/archives/2022/06/index.html","41901e087e65ab7e09b52926fa268ace"],["/archives/2022/07/index.html","8d39d8622e65bb1beeceaa76f1f525cc"],["/archives/2022/08/index.html","2e23fcd2f147b5e12b86c90f6ad33e3d"],["/archives/2022/10/index.html","d792ace59633f80a487747cb8a8c7b62"],["/archives/2022/12/index.html","5563bf20d76b6fff54d2bb2b82901eda"],["/archives/2022/index.html","42ba615bf4f0599159b3fbb3b03c9e78"],["/archives/2022/page/2/index.html","77e5ca518ddb2a3d7c3da134d1a9492c"],["/archives/2023/02/index.html","585e361f58285d37cc1b5a017bc9e142"],["/archives/2023/03/index.html","33181d17d784fb36395cc1533ca62ae4"],["/archives/2023/04/index.html","add5f8aebcd93406ee2bd17ece710bb1"],["/archives/2023/04/page/2/index.html","10123877579c66fcf6bbd08c6095b3b6"],["/archives/2023/05/index.html","a26e4c1f97217d489090febb91bb09a2"],["/archives/2023/06/index.html","d3027b887c66a173ba455a20ca76ff18"],["/archives/2023/07/index.html","fefb311f9c8152404da5cbb5ac5348fe"],["/archives/2023/08/index.html","b512ec91cbf4f7eca30d5f570c146148"],["/archives/2023/09/index.html","2678fec561fd179444035cc9f8a5bf72"],["/archives/2023/10/index.html","5acb35e9d969e078292d81e16a4a6c70"],["/archives/2023/11/index.html","0b6b51c80f88c82b858e41495e88fc27"],["/archives/2023/12/index.html","f2e63bcb1b0a4026eb8efb27d2752c66"],["/archives/2023/index.html","02aee58a728aa350830fa3d3477870cb"],["/archives/2023/page/2/index.html","f2bf006ec7384381327b86b6ad0cdd2f"],["/archives/2023/page/3/index.html","830419845c5cf05ff1aad216639814fe"],["/archives/2023/page/4/index.html","2146a0effa9ee5946a38388c8b0fecc7"],["/archives/2023/page/5/index.html","b56852dfcc9c85e2c155933bf93fb36f"],["/archives/2023/page/6/index.html","0ef03575264fac3e95657bdd41494ade"],["/archives/2023/page/7/index.html","6efb65827672085bdaa899acc9864227"],["/archives/2024/01/index.html","fb23c7f7762974e7b88c292144c6994c"],["/archives/2024/02/index.html","31cf5679a14a272a9b846389c19f3213"],["/archives/2024/03/index.html","921ff842e3914464cd74e4bb78e3b4e1"],["/archives/2024/04/index.html","05b0a92abaff86a4a93995cbc3aa945b"],["/archives/2024/05/index.html","00dbda79e920f5d3f181d206f1e4cf6d"],["/archives/2024/06/index.html","2e508d1a83a2f266dd75ed76cb23e2e3"],["/archives/2024/07/index.html","e80994e7835a2d5386e18ad5d3cd3d7a"],["/archives/2024/08/index.html","1ece6a5ca3e386e09eca0af9432fe302"],["/archives/2024/09/index.html","1d07d3c18a180e933028e4bf6f971444"],["/archives/2024/10/index.html","6891789a03823ab568cf295f3c0d179b"],["/archives/2024/11/index.html","623963ea8f16f21c0544da11933a67cf"],["/archives/2024/12/index.html","14adff198f2999e13b6a12a83e0bd811"],["/archives/2024/index.html","2d003e8966c32ab9144c86b80844413e"],["/archives/2024/page/2/index.html","2e8537dbcadb1b69bb06749517a0ef59"],["/archives/2024/page/3/index.html","5c3084044f17d71da21d4864f9d10cab"],["/archives/2024/page/4/index.html","7d27cdcac24186f20b6c50c8d6cf042c"],["/archives/2024/page/5/index.html","80b0abff7ca07328a33950329df64222"],["/archives/2024/page/6/index.html","46603c975b0f070cb74ccefc1ccf3a4f"],["/archives/2025/01/index.html","8c8dbe7f2a82e13c4fec9d0fd12234d4"],["/archives/2025/02/index.html","22ac71078eb102064735a1d9a6a07bb7"],["/archives/2025/03/index.html","8b331debb59dacfb4df88e50296180f8"],["/archives/2025/index.html","f852eca4ba2df8061393499f63ae4618"],["/archives/2025/page/2/index.html","a814f95c0a6441ac06c60259837c5b6f"],["/archives/index.html","4e038d7031e3ce107b73601832f62911"],["/archives/page/10/index.html","cf752e68b031986e4fa209827c4fca00"],["/archives/page/11/index.html","43fd5967f57b29bf806bb0021fb6b884"],["/archives/page/12/index.html","e61b5181857e6fb5e0d9651f05bca9ab"],["/archives/page/13/index.html","221fa72919c3f093fcf479445cee1177"],["/archives/page/14/index.html","e79388f0f24ac9b6d3d21c45b51c798a"],["/archives/page/15/index.html","46b49ad0f39f54922206c8f3f5889295"],["/archives/page/16/index.html","f576ea3235f7752586df05bae80aa113"],["/archives/page/17/index.html","b29e21ed035afa7c14f866c02b7e06b8"],["/archives/page/2/index.html","a8b365ba5f7a9257f541484242cb4cfc"],["/archives/page/3/index.html","327461e93d342ed4280bc736246ddd11"],["/archives/page/4/index.html","da856b83503cfbda75fbeb697bf97abd"],["/archives/page/5/index.html","724ad1a14c1d3f30af0f3efc8cf8d87c"],["/archives/page/6/index.html","8e50c73063c1c3cede731ebac0a49a1e"],["/archives/page/7/index.html","4042565718439a186d2b3a0e0795e0a5"],["/archives/page/8/index.html","2ea68eb32d6eb86a27af1ccf5e8ec12b"],["/archives/page/9/index.html","28874281e8e8f629867b647a90dd5c12"],["/categories/index.html","f5b145c5139aba416fc717f790753d86"],["/categories/meme/index.html","18ff446ec2a51671acbffdd01c374929"],["/categories/meme/page/2/index.html","88bdc454f0c9418e58bfe0df97580066"],["/categories/meme/page/3/index.html","9089fd01a72d83e93cc9a4d2976f6575"],["/categories/meme/page/4/index.html","50618ab71ceb0f9535c8fbede28851e2"],["/categories/meme/page/5/index.html","1e2ea673de0ff052d1ab70cddcc2f418"],["/categories/meme/page/6/index.html","9658439377bfac91bf989d6c1e52b97a"],["/categories/meme/page/7/index.html","566d599a410030583b2f48a3b7ac8cd5"],["/categories/写点东西/index.html","9ec1e5ad87a65c22817b3fafd9915d1f"],["/categories/学习笔记/index.html","c2904a6b6e39d3aa50741d8df45796ff"],["/categories/学习笔记/page/2/index.html","4a10abfacfae11ac6c35b38d2d847a09"],["/categories/学习笔记/page/3/index.html","dea647b81c6be0904dcacbe93fdc9b65"],["/categories/学习笔记/page/4/index.html","82906058eb3e0abdc8bd2215c26aa05c"],["/categories/学习笔记/page/5/index.html","c1304b2c968a06fcb2a171921cca9c7e"],["/categories/学习笔记/page/6/index.html","7bbe34c97fa3c72399d3a697319320a2"],["/categories/学习笔记/page/7/index.html","652a7e9e31a17323b2f63d4dfb0d72de"],["/categories/学科相关/index.html","5c59207d61795319c31005f72ae8a3df"],["/categories/日常随想/index.html","74cadb003670b3bb9ed76c1538f944bc"],["/categories/日常随想/page/2/index.html","941c2efcba06806bf06c58453802209e"],["/categories/日常随想/page/3/index.html","9ef8d595e92ecc84da9da0eda0622918"],["/categories/读书有感/index.html","d30bd7486b343bec736eba1557ca7536"],["/categories/阅读感想/index.html","f6c1324304a8eec8a540146f26795668"],["/css/index.css","f1c40d4e1ccd9de1af396f381f5f4d1b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/background.jpg","6f4e9ba2b940a5dff7c12f77965fb0b8"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/ding.jpg","0251f20cf4919a2666bf4a769e675081"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a67d032b5d23cf74da3de5d884979a63"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/memos/imgStatus.min.js","ba389639289cc1e20e8a468717b97f62"],["/js/memos/photo.js","be0ec483197a21504e0b3b8521519dc5"],["/js/memos/waterfall.min.js","4c2b801d7654e439c486c64fe2a821a9"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/memes/index.html","e50b1382c3b0b07203f24a766e2c2a2c"],["/page/10/index.html","d7d81d2a86e3783f9fb2b7463cadda20"],["/page/11/index.html","0124a8ca4bb6850c41c3fb7a068d7a12"],["/page/12/index.html","2c85613e48d8fb83244c6f1e0c92552f"],["/page/13/index.html","5c530ac68400cfdea3bb86de5ce052af"],["/page/14/index.html","3dc7147c6addc266ca954c88352102b4"],["/page/15/index.html","faf427b800bee72e492289378aeb93a0"],["/page/16/index.html","638642c8b85afc32e5eb9b0b670cb9b8"],["/page/17/index.html","71156facb21b86a15695ab55cdc89000"],["/page/2/index.html","36a43772f57e7f3d9f02d3394c7f33ed"],["/page/3/index.html","1580ef5a76113b8dce3e26370bcaabcf"],["/page/4/index.html","d91e7950320e8a91092f7b9c5e448257"],["/page/5/index.html","72ea9c6d890019784d5a66023edfb3c6"],["/page/6/index.html","27a3cfb187d01d8381c67de12cfd01b6"],["/page/7/index.html","75bac957d96e2f21dbe3a1597a4717fb"],["/page/8/index.html","27f45a2df945a5618b9aef73cc92cd8e"],["/page/9/index.html","015ae8dd9122b6d25c1ec180a47dac7e"],["/photos/index.html","3f54e3ff7bd3bad7402f6b865839b373"],["/sw-register.js","09621bd4446fb02f039008447a267684"],["/tags/index.html","29fd7bf2bbc184c10dd968cac605e641"],["/tags/meme/index.html","298b9d1f65ff990d7f8fd742d0f2f0f1"],["/tags/meme/page/2/index.html","5b0886dbd178fd5ded75368fc5aed8e9"],["/tags/meme/page/3/index.html","96031c256550ef68ce5dc8eed111eaf1"],["/tags/meme/page/4/index.html","f0399814b4e1b8abd1d859281f44564d"],["/tags/meme/page/5/index.html","7771654fb97901e4745ef2a601496fb3"],["/tags/meme/page/6/index.html","a85dde64de73bffc6f4712e3505e0573"],["/tags/meme/page/7/index.html","0d336e487c92595fa2ef91a494e3cb78"],["/tags/信号与系统/index.html","4f3f98b82d5218097a0b1d5892086585"],["/tags/单片机/index.html","322a7c04e700ae9e3d952737af76ee94"],["/tags/回想/index.html","f5cb0589fd670308c71b83c11fbff55c"],["/tags/回想/page/2/index.html","fde91ceb76e7ae0049661bd247f7588c"],["/tags/因果学习/index.html","3f742f9c5920720183de1688f00d4187"],["/tags/大块煤检测/index.html","4ca9eb703891f278ba0e83cbcfd5d278"],["/tags/小样本/index.html","16bf23a2fdac5cd7de2e9083f8f46555"],["/tags/就业/index.html","70fc6ec74f5a3b6d62d605bf0793068d"],["/tags/就业相关/index.html","3652660bc68c9dc247220fafbe14449a"],["/tags/控制工程/index.html","7577edab77a7e37e5cda5ad57ae20273"],["/tags/故障诊断/index.html","a12cf070a75807c955770ce1b3ab047f"],["/tags/数学/index.html","208f261c9f21f5e9235e248e98f8af0c"],["/tags/文史类/index.html","b063498d2e59f7946e681d386da6ce74"],["/tags/机器人/index.html","0b1867a9632d88ed21ae44c9455991bf"],["/tags/机器学习/index.html","774d1b2cf4294245a67db26d7f7df30b"],["/tags/模型/index.html","7d4cd92f681e94b425807e9be4ed6f4c"],["/tags/目标检测/index.html","2c4576a19de1e9bcbbf24164a01e3977"],["/tags/自我批判/index.html","f26bf0294e01fc07185c596f65e3134d"],["/tags/虚构类/index.html","0841b132d04e9fad42f2ea97f3c6b69e"],["/tags/论文写作/index.html","294664ee1477f00cda6e09f7c8422c35"],["/tags/论文撰写/index.html","def88c98b2cd4b9d2ab5b1c0eb31791c"],["/tags/阀门/index.html","dd2d42c4eec4556dee09460740bab0ff"]];
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
