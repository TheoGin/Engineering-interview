console.log(arguments); // [Arguments] {   '0': {},   '1': [Function: require]{...}, '2': { ..., exports: {}, ...},'3': 'd:\\Users\\Desktop\\DuYi\\7、Engineering\\code\\Engineering-interview\\1. CMJ和ESM\\1.1 CommonJS\\requireTheory.js',   '4': 'd:\\Users\\Desktop\\DuYi\\7、Engineering\\code\\Engineering-interview\\1. CMJ和ESM\\1.1 CommonJS' }
console.log(arguments.length); // 5
console.log(this); // {}    第一个参数：module.exports
console.log(module.exports); // {}    第二个参数：module.exports
console.log(require); // Function: require    第三个参数：require函数
console.log(__filename); // 'd:\\Users\\Desktop\\DuYi\\7、Engineering\\code\\Engineering-interview\\1. CMJ和ESM\\1.1 CommonJS\\requireTheory.js    第四个参数：文件名绝对路径
console.log(__dirname); // 'd:\\Users\\Desktop\\DuYi\\7、Engineering\\code\\Engineering-interview\\1. CMJ和ESM\\1.1 CommonJS    第五个参数：文件绝对路径

// this、exports、module.exports 是同一个东西
console.log(this === exports); // true
console.log(this === module.exports); // true
