function dj(){
    console.log('dj')
}

setInterval(()=>{
    dj()
    console.table(JSON.stringify(global['__coverage__']))
}, 5000)

module.exports = {dj}