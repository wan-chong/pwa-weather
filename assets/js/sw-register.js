if ('serviceWorker' in navigator) {
    // 在页面加载完成之后注册，避免影响页面加载速度
    window.addEventListener('load', () => {
        // 参数1： sw文件；参数2：sw工作的作用域（注意：该作用域只能指定为参数1指定的文件的所在的域和子级域，服务端指定service-worker-allowed除外）
        navigator.serviceWorker.register('/assets/js/sw-demo.js', {scope: '/assets/js/'}).then(() => {
            console.log('sw注册成功');
        }).catch(err => {
            console.log('sw注册失败' + err);
        })
    })
}