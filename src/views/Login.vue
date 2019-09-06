<template>
  <div>
    <img src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png"
         alt="banner" class="header-img">
    <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler">

    </cube-form>
  </div>
</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        // 表单数据对象
        model: {
          username: '',
          password: ''
        },
        // 表单控件
        schema: {
          fields: [
            {
              type: 'input',
              modelKey: 'username',
              label: '用户名',
              props: {
                placeholder: '请输入用户名'
              },
              // 校验规则
              rules: {
                required: true,
                type: 'string',
                min: 3,
                max: 12
              },
              // 失去焦点时校验
              trigger: 'blur',
              // 校验规则错误提示信息
              messages: {
                required: '用户名不能为空',
                min: '用户名不能少于3个字符',
                max: '用户名不能多于12个字符'
              }
            },
            {
              type: 'input',
              modelKey: 'password',
              label: '密码',
              props: {
                placeholder: '请输入密码',
                type: 'password',
                eye: {
                  open: false
                }
              },
              rules: {
                required: true
              },
              trigger: 'blur',
              messages: {
                required: '密码不能为空'
              }
            },
            {
              type: 'submit',
              label: '登录'
            }
          ]
        }
      }
    },
    methods: {
      /*submitHandler(e) {
        // 阻止自动的表单提交
        e.preventDefault();
        this.$http.post('http://localhost:8081/pub/api/v1/login', this.model).then(res => {
          let result = res.data;
          let type = 'error';
          let message = result.message;
          if (result.code == 200) {
            type = 'correct';
            this.$setCookie('token', result.data, 7);
            message = '登录成功';
          }
          this.$showToastType(type, message);
        }).catch(err => {
          console.log(err);
          this.$showToastType('error', '接口访问出错');
        });
      }*/
      async submitHandler(e) {
        e.preventDefault();
        try {
          const result = await this.$http.post('http://localhost:8081/pub/api/v1/login', this.model);
          if (result.code == 200) {
            // vuex存储token
            this.$store.commit('setToken', result.data);
            this.$setCookie('token', result.data, 7);
            // this.$showToastType('correct', '登录成功');
            await this.$router.replace({path: '/index'});
          } else {
            this.$showToastType('error', result.message);
          }
        } catch (err) {
          console.log(err);
          this.$showToastType('error', '接口访问出错');
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header-img
    width 100%
    height auto
</style>