/**
 * Created by 果果 on 2017/4/24.
 */
module.exports = {//__dirname 是nodejs中的一个全局变量，指向当前执行脚本所在的目录
    devtool:'eval-source-map',
    entry: __dirname + '/app/main.js',//唯一的入口文件
    output:{
        path: __dirname + '/public',//打包后的文件存放的位置
        filename:'bundle.js'//打包后输出文件的文件名
    }
};
//第一种方式是：node_modules/.bin/webpack app/main.js public/bundle.js