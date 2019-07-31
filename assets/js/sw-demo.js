this.addEventListener('install', (event) => {
    // 等待传入的参数完成，安装阶段才结束
    event.waitUntil(
        // 开辟缓存空间
        caches.open('my-first-cache').then((cache) => {
            // 指定缓存资源列表, 指定的资源任意一个缓存失败，sw就安装失败，所以这一步不要指定过多缓存资源
            cache.addAll([
                '/',
                '/test.js',
                '/test.css'
            ])
        })
    );
});

// 获取控制权，清理老旧缓存资源
this.addEventListener('activted', (event) => {
    event.waitUntil(
        Promise.all(() => {
            // 获取控制权
            this.clients.clain();
    
            // 清理老旧缓存
            caches.keys().then((cacheList) => {
                return Promise.all(() => {
                    cacheList.map((cacheName) => {
                        if (cacheName !== 'my-first-cache') {
                            return caches.delete(cacheName);
                        }
                    })
                })
            })
        })
       
    )
})