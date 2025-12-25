import bigPic from './assets/big-pic.png'; // 期望得到路径
import smallPic from './assets/small-pic.jpg'; // 期望得到base64
import yueyunpeng from './assets/yueyunpeng.gif'; // 期望根据文件大小决定是路径还是base64
import raw from './assets/raw.txt'; // 期望得到原始文件内容

console.log('big-pic.png', bigPic); // big-pic.png http://localhost:8080/assets/841ed.png
console.log('small-pic.jpg', smallPic); // small-pic.jpg data:image/jpeg;base64,/9j/4……
console.log('yueyunpeng.gif', yueyunpeng); // yueyunpeng.gif http://localhost:8080/gif/b9eff.gif
console.log('raw.txt', raw); // raw.txt 本质上，webpack 是一个用于现代 JavaScript 应用程序的_静态模块打包工具_。当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个 bundle。

