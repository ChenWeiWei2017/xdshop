<template>
  <div id="index">
    <!-- 轮播-->
    <!--<cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="banner" :src="item.image" :alt="item.title">
        </a>
      </cube-slide-item>
    </cube-slide>-->
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