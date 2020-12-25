// 配置主题antd 主题颜色
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#5cdbd3'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};