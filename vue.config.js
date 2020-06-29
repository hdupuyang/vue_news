module.exports = {
    devServer: {
        port: 3333, // 启动端口
        open: true,  // 启动后是否自动打开网页
        proxy: {
            '/api': {
                target: 'http://api.jisuapi.com',// 你要请求的后端接口ip+port
                changeOrigin: true,// 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                //ws: true,
                pathRewrite: {
                    '^/api': '/',// 替换成target中的地址
                }
            }
        }

    }
}