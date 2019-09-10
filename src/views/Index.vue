<template>
  <div id="index">
    <cube-scroll>
      <!-- 轮播-->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in items" :key="index">
          <a :href="item.url">
            <img class="banner" :src="item.image" :alt="item.title"/>
          </a>
        </van-swipe-item>
      </van-swipe>
      <!-- 分类 -->
      <cube-slide ref="slidelists" :data="lists" :auto-play="false">
        <cube-slide-item v-for="(list, index) in lists" :key="index">
          <ul class="type-ul">
            <li class="type-li" v-for="(item, index1) in list" :key="index1">
              <a :href="item.url">
                <img :src="item.image" :alt="item.label">
                <p>{{ item.label }}</p>
              </a>
            </li>
          </ul>
        </cube-slide-item>
      </cube-slide>
      <div>
        <h2 class="block-title">最近上架</h2>
        <van-grid :column-num="4">
          <van-grid-item
              v-for="value in 16"
              :key="value"
              icon="photo-o"
              text="文字">
          </van-grid-item>
        </van-grid>
      </div>
      <div>
        <h2 class="block-title">海外进口</h2>
        <van-grid :column-num="3">
          <van-grid-item
              v-for="value in 9"
              :key="value"
              icon="photo-o"
              text="文字">
          </van-grid-item>
        </van-grid>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        items: [],
        lists: []
      }
    },
    methods: {
      changePage(current) {
        // 轮播图改变时调用
        // console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        // 点击时调用
        // console.log(item, index)
      }
    },
    async created() {
      try {
        const result = await this.$http.get('/pub/api/v1/banner');
        if (result.code == 200) {
          this.items = result.data;
        }
        const result2 = await this.$http.get('/pub/api/v1/rollinglist');
        if (result2.code == 200) {
          this.lists = result2.data;
        }
      } catch (err) {
        console.log(err)
      }
    },
    mounted() {
      const botnav = document.querySelector('.cube-tab-bar.botnav');
      const windowsHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const indexDiv = document.querySelector('#index');
      let indexHeight = windowsHeight - botnav.offsetHeight;
      indexDiv.style.height = indexHeight + 'px';
    }
  }
</script>

<style lang="stylus" scoped>
  #index
    img.banner
      width 100%
      height 175px
    .type-ul
      display flex
      flex-wrap wrap
      text-align center
    .type-li
      width 20%
      justify-content center
      img
        width 35px
        height 35px
        /*border-radius 50%*/
        padding 5px 0
      p
        font-size 14px
        padding-bottom 10px
</style>