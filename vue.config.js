const path = require('path');
const fs = require('fs')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const mockObj = require('./mock/index')
function copyFile() {
  const list = [
    {
      oldPath: './config/style/constant.less',
      newPath: './src/assets/style/constant.less'
    }
  ]
  list.map(el => {
    fs.writeFileSync(el.newPath, fs.readFileSync(el.oldPath))
  })
}
// copyFile()
const target = ''
const proxyMap = new Set([
  { context: '^/get-api', target}
])

const createProxy = (proxyMap) => [...proxyMap].reduce((pre, cur) => {
  pre[cur.context] = { changeOrigin: true, target: cur.target }
  return pre
}, {})

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          // 'menu-dark-bg': '#21316b',
          'menu-dark-color': '#fff',
          // 'menu-dark-inline-submenu-bg': '#1b295d',
          // 'menu-dark-item-hover-bg': 'rgba(64, 158, 255, .5)'
        },
        javascriptEnabled: true,
      },
    },
  },
  productionSourceMap: process.env.NODE_ENV === 'development',
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
  devServer: {
    disableHostCheck: true,
    open: true,
    // proxy: createProxy(proxyMap),
    before: function(app) {
      mockObj.api.map(v=>{
          app.get('*/'+ v.replace(/-/, "/").replace('_','/'), function(req, res) {
              res.json(require('./mock/data/'+v));
          });
          app.post('*/'+ v.replace(/-/, "/").replace('_','/'), function(req, res) {
              res.json(require('./mock/data/'+v));
          });
      })
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/assets/style/constant.less')
      ]
    }
  }
}
