<template>
  <div>
    <!--<transition :name="transName">
      <router-view class="trans-router"></router-view>
    </transition>-->
    <router-view></router-view>
    <cube-tab-bar v-model="selectedLabelDefault"
                  @click="clickHandler"
                  @change="changeHandler" class="botnav">
      <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
        <!-- name为icon的插槽 -->
        <i slot="icon" :class="item.icon"></i>
        <!-- 默认插槽 -->
        <div>{{item.label}}</div>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
  export default {
    name: "Botnav",
    data () {
      return {
        transName: 'slide-right',
        selectedLabelDefault: '首页',
        tabs: [{
          label: '首页',
          icon: 'cubeic-home'
        }, {
          label: '分类',
          icon: 'cubeic-tag'
        }, {
          label: '搜索',
          icon: 'cubeic-search'
        }, {
          label: '购物车',
          icon: 'cubeic-mall'
        }, {
          label: '我的',
          icon: 'cubeic-person'
        }]
      }
    },
    created() {
      // 根据当前路由调整selectedLabelDefault
      switch (this.$route.path) {
        case '/botnav/index':
          this.selectedLabelDefault = '首页';
          break;
        case '/botnav/list':
          this.selectedLabelDefault = '分类';
          break;
        case '/botnav/search':
          this.selectedLabelDefault = '搜索';
          break;
        case '/botnav/cart':
          this.selectedLabelDefault = '购物车';
          break;
        case '/botnav/mine':
          this.selectedLabelDefault = '我的';
          break;
      }
    },
    methods: {
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        // console.log(label)
      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
        // 点击且改变tab时调用
        switch (label) {
          case '首页':
            this.$router.push('/botnav/index');
            break;
          case '分类':
            this.$router.push({path:'/botnav/list'});
            break;
          case '搜索':
            this.$router.push({path:'/botnav/search'});
            break;
          case '购物车':
            this.$router.push({path:'/botnav/cart'});
            break;
          case '我的':
            this.$router.push({path:'/botnav/mine'});
            break;
        }
      }
    }
  }
</script>

<style lang="stylus">
  .cube-tab-bar.botnav
    position fixed
    bottom 0
    left 0
    z-index 1000
    width 100%
    background #fff
    border-top: 1px solid #e6eaf2;
    .cube-tab div
        font-size 14px
        padding-top 3px
    i
      font-size 24px
  .trans-router
    position absolute
    width 100%
    transition all 0.8s ease
  .slide-left-enter,.slide-right-leave-active
    opacity 0
    -webkit-transform  translate(100%,0)
    transform  translate(100%,0)
  .slide-left-leave-active,.slide-right-enter
    opacity 0
    -webkit-transform  translate(-100%,0)
    transform  translate(-100%,0)
</style>