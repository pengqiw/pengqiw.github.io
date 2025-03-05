/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/10/08/机械的未来_new/index.html","ff1b067d93da11d91bf44be09c645458"],["/2023/02/23/我与地坛/index.html","3772e788776d8b55a318de50d98c0ab0"],["/2023/02/27/才二十二/index.html","6812823d16e23090f374207d3f749c17"],["/2023/03/18/奥森有感/index.html","7324ad74f1dd8a39326a698898e8ca31"],["/2023/04/02/成为代沟的一部分/index.html","fc6659dc8410923d8d51d07aaa9cf1ed"],["/2023/05/01/十三号线/index.html","bb71cabc18325a276bd4af9074f9af78"],["/2023/05/04/小论文撰写总结/index.html","f9a1c4f8571623d5d0fd5dfd5dcfbddb"],["/2023/05/05/不存在的梦想/index.html","f4e08ead69e46a5fe1e8ff3a6b0cbb83"],["/2023/05/06/等待的时间/index.html","e265d9102ef9c72d97daa67821451b18"],["/2023/05/25/只道当时寻常/index.html","696b6d0aa1704f682681703287f23d00"],["/2023/08/28/论文撰写总结/index.html","ddcd8f9158fd4e64015bb6a40302cafd"],["/2023/09/07/机械专业竞赛入门/index.html","bb5458953812daeab2dbe4f8d19e841e"],["/2023/10/21/我拥有的/index.html","7ad157229edda1489fd32a980922fd72"],["/2023/11/05/人生二十二载之复盘/index.html","78573aab589c88c6004a2271a8a8a291"],["/2023/12/16/《万历十五年》读后感/index.html","26e3069fb8b96eada9edae7da390f96c"],["/2023/12/27/2023年之总结/index.html","09ee09dc531d0f734655afb8b90b171d"],["/2024/01/30/风的记忆/index.html","12deafa6fc64e453cb93f76f4113b380"],["/2024/03/04/亡国之相/index.html","6658861afaddd96eb799cecce4426ae1"],["/2024/06/13/出差有感/index.html","cc65d67db4ae00318957fb97c87bb701"],["/2024/07/20/爸爸去哪儿/index.html","937e5cbd9f6f6606ac2ebb457181d3e5"],["/2024/10/26/回家有感/index.html","15087588552f5b93348544ba14016ded"],["/2024/10/31/旧事集1/index.html","92bfb202d1fd58b85191721cd7311d64"],["/2024/11/02/旧事集2/index.html","276b7731a1962a41132516acc095f813"],["/2024/11/03/关于意义的一些想法/index.html","749c87b2e34350bb9c9a086652c6dbe1"],["/2024/11/12/无名之人/index.html","b935ba2b16c098627c51ae3243ebb940"],["/2025/01/29/关于意义的一些想法2/index.html","5f1f7a5f6255b5a2bf0d1a09a0dc2f35"],["/2025/02/22/枕下的时间/index.html","788b47af880dd1199d3fbf2541652410"],["/archives/2021/10/index.html","4cc4422fd61e2755cae20b0dd0bd5e26"],["/archives/2021/index.html","c2bbfe0eb0aafda17bf918cc693306ee"],["/archives/2023/02/index.html","816680e7259b075244bfddecc0760b35"],["/archives/2023/03/index.html","afe4be615012f7e413a07b1813c361b1"],["/archives/2023/04/index.html","cb3abeb4905b21a191472c36d1646325"],["/archives/2023/05/index.html","be7f29591c117a738a016decb9c94dc3"],["/archives/2023/08/index.html","264a51d33bba6c5769ef2d862346ab17"],["/archives/2023/09/index.html","67b6f471993f042218e0fc5958454d88"],["/archives/2023/10/index.html","9afb0caa1e34b8115dcf7f0d67ef2d20"],["/archives/2023/11/index.html","af7ff03db3da2105cdd99ff3e611eb2a"],["/archives/2023/12/index.html","dd6ce7411c2eea297794ec7f33daf29a"],["/archives/2023/index.html","86db1288faded8d6a4eea807e47649e3"],["/archives/2023/page/2/index.html","ada2c4b78db227a176cedefa4cb65d33"],["/archives/2024/01/index.html","9ed8eb409c9838cebbf9e1a38f0262d4"],["/archives/2024/03/index.html","05b861ae41abf265a62d369c11706c56"],["/archives/2024/06/index.html","4acb7bc8ff7d6b12c62131a3b1701b05"],["/archives/2024/07/index.html","8db11eb4bb3fbd5a63d48fae772f1107"],["/archives/2024/10/index.html","da500352f54a0330536ff51c40b321e7"],["/archives/2024/11/index.html","6a0a0144c391ebaab62a1ac3a8dc919d"],["/archives/2024/index.html","66bf523137a9e2e4fce911c8c8e2f180"],["/archives/2025/01/index.html","136f1e61f04f8d753a5b0673739cb14a"],["/archives/2025/02/index.html","3aad163ba0b861fb2876a05ff026d590"],["/archives/2025/index.html","27dd09fa6c472e8a4bdf3cd44ffe912e"],["/archives/index.html","af0cf63b058ccf217140da3e251f62a9"],["/archives/page/2/index.html","4b2154c9268017091e7507e57ca9fa43"],["/archives/page/3/index.html","0b8900753ae9a8913baedf75e0ccd041"],["/categories/index.html","671bbe72c0f10b8795e857fe9ad4faf8"],["/categories/学习笔记/index.html","b09fd08c721c2898adfb042497ac5cd7"],["/categories/学科相关/index.html","39de11efa977d555399338ad2cdb4dab"],["/categories/日常随想/index.html","90a4c98c882900712b4e5d96082c8cba"],["/categories/日常随想/page/2/index.html","606e4627843dbdda285ed8187de5c9fc"],["/categories/日常随想/page/3/index.html","720d13dc1cc29103cc4ce8faf2b7f71e"],["/categories/读书有感/index.html","562778157b85e4802877d480d6510c8c"],["/categories/阅读感想/index.html","95d125f57904e3c9793a50fb57f9f51a"],["/css/index.css","83148b5e127b1968ec95391d3144825b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/background.jpg","6f4e9ba2b940a5dff7c12f77965fb0b8"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/ding.jpg","0251f20cf4919a2666bf4a769e675081"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0ef2840d2102c01926626a54b83de124"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/page/2/index.html","058e4934f17e17bfdf14d5cb8270ae24"],["/page/3/index.html","15507aed48378e7319acf3791ebb232c"],["/sw-register.js","a4041e07a110c5f26047f502a96b6583"],["/tags/index.html","12fc4ca089373466787feb91f67488a3"],["/tags/回想/index.html","7c9f76bd484359a680fa9def802598f9"],["/tags/回想/page/2/index.html","07db62b432761a7dee9622490ef8aea4"],["/tags/就业/index.html","49fc7fc843ac8bc43016d133e91f11f8"],["/tags/就业相关/index.html","b13161d2f41f64b4de9ba0f0642877b3"],["/tags/文史类/index.html","c0d15ee07ee78e5057b2a878d05aea32"],["/tags/自我批判/index.html","07f329a95cd7104990e9f2ed290a60de"],["/tags/论文撰写/index.html","e1f50cdf609c61484e5e65fac1b937ff"]];
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
