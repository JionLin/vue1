var fs = require('fs')
// var os = require('os')
var path = require( 'path');
//遍历读取文件
function readFile(path,filesList)
{
    var files = fs.readdirSync(path);//需要用到同步读取
    files.forEach(walk);
    function walk(file) {
        var states = fs.statSync(path+'/'+file);
        if(states.isDirectory()) {
            readFile(path+'/'+file,filesList);
        } else {
            //创建一个对象保存信息
            var obj = new Object();
            obj.size = states.size;//文件大小，以字节为单位
            obj.name = file.split('.')[0];//文件名
            obj.path = path+'/'+file; //文件绝对路径
            filesList.push(obj);
            api.push(obj.name)
        }
    }
}
var  dataPath =path.join(__dirname,'./data'),filesList=[];
var api = []
readFile(dataPath,filesList)
module.exports = {api:api}