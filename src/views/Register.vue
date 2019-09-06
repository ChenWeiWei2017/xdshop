<template>
  <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler">

  </cube-form>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        model: {
          name: '',
          password: '',
          confirmPass: ''
        },
        schema: {
          fields: [
            {
              type: 'input',
              modelKey: 'name',
              label: '用户名',
              props: {
                placeholder: '请输入用户名'
              },
              rules: {
                required: true,
                type: 'string',
                min: 3,
                max: 12
              },
              trigger: 'blur',
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
              type: 'input',
              modelKey: 'confirmPass',
              label: '确认密码',
              props: {
                placeholder: '请输入确认密码',
                type: 'password',
                eye: {
                  open: false
                }
              },
              rules: {
                required: true,
                custom: (val) => {
                  return val === this.model.password;
                }
              },
              trigger: 'blur',
              messages: {
                required: '确认密码不能为空',
                custom: '确认密码与密码不一致'
              }
            },
            {
              type: 'submit',
              label: '注册'
            }
          ]
        }
      }
    },
    methods: {
      submitHandler(e) {
        e.preventDefault();
        this.$http.post('http://localhost:8081/pub/api/v1/register', this.model).then(res => {
          let success = res.code == 200;
          let type = success ? 'correct' : 'error';
          let message = success ? '注册成功' : res.message;
          this.$showToastType(type, message);
        }).catch(err => {
          console.log(err);
          this.$showToastType('error', '接口访问出错');
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>