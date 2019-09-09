module.exports = {
  configureWebpack: {
    devServer: {
      port: 8080,
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
        app.get('/pub/api/v1/banner', (req, res)=>{
          res.json({
            code: 200,
            data: [
              {
                title: '课程1',
                url: 'https://m.xdclass.net',
                image : 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png'
              },
              {
                title: '课程2',
                url: 'https://m.xdclass.net',
                image : 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png'
              },
              {
                title: '课程3',
                url: 'https://m.xdclass.net',
                image : 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png'
              },
            ]
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
        });
        // 商品大分类
        app.get('/pub/api/v1/category', (req,res) => {
          res.json({
            code: 200,
            data: [
              {
                label:'热门推荐',
                active:true
              },
              {
                label:'手机数码',
                active:false
              },
              {
                label:'家用电器',
                active:false
              },
              {
                label:'家用空调',
                active:false
              },
              {
                label:'电脑产品',
                active:false
              },
              {
                label:'美妆护肤',
                active:false
              },
              {
                label:'口红',
                active:false
              },
              {
                label:'手袋',
                active:false
              },
              {
                label:'金银财宝',
                active:false
              },
              {
                label:'手机数码',
                active:false
              },
              {
                label:'手机数码',
                active:false
              }
            ]
          })
        });
        //获取分类页的分类接口
        app.get('/pub/api/v1/classify',(req,res)=>{
          switch(req.query.type){
            case '0':
              res.json({
                code: 200,
                data:[
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },

                ]
              });
              break;
            case '1':
              res.json({
                code: 200,
                data: [
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                ]
              });
              break;
            case '2':
              res.json({
                code: 200,
                data: [
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  },
                  {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                  }
                ]
              });
              break;
            case '3':
              res.json({
                code: 200,
                data: [
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                  {
                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label:'荣耀'
                  },
                ]
              });
              break;
            case '4':
              res.json({
                code: 200,
                data: [
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                ]
              });
              break;
            case '5':
              res.json({
                code: 200,
                data: [
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                  {
                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label:'雪梨手机'
                  },
                ]
              });
              break;
            case '6':
              res.json({
                code: 200,
                data: [
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                  {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                  },
                ]
              });
              break;
          }
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
