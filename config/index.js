const fs = require('fs')

function copyFile() {
    const list = [
        {
            oldPath: '../config/style/constant.less',
            newPath: '../src/assets/style/constant.less'
        }
    ]
    list.map(el => {
        fs.writeFileSync(el.newPath, fs.readFileSync(el.oldPath))
    })
}
copyFile()
module.exports = {}