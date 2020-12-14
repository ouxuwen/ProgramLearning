const { fork } = require('child_process');
console.log('main start')
const childProcess = fork('./child.js',{});
console.log('main end')

console.log(require.cache)