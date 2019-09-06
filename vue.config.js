module.exports = {
  configureWebpack: {
    devServer: {
      // Mock数据编写
      before(app) {
        // GET请求
        app.get('请求地址', (req, res) => {
          // 返回json数据
          res.json({
            code: '200',
            data: {}
          })
        });
        app.get('/pub/api/v1/rollinglist',(req,res)=>{
          res.json({
            code: 200,
            data:[
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类二'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类三'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类四'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类五'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类六'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类七'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类八'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类九'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-home.png',
                  label:'分类十'
                }
              ],
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类二'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类三'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类四'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类五'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类六'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类七'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类八'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类九'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://chenww-1259746772.cos.ap-shanghai.myqcloud.com/dev/xdshop/icon-java.jpg',
                  label:'分类十'
                }
              ],
            ]
          })
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
};
