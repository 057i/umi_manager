export default {
    plugins: [
        ["umi-plugin-react", {
            dva: true //要配置dva插件开启才可以使用redux数据
        }]
    ],
    proxy: {
        "/api": {
            target: "http://open.duyiedu.com",
            changeOrigin: true
        }
    }

}