<template>
  <div id="list" class="panel-box">
    <div class="left-panel">
      <cube-scroll>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(item,index) in category" :title="item.label" :key="index" @click="selectList"></van-sidebar-item>
        </van-sidebar>
      </cube-scroll>
    </div>
    <div class="right-panel">
      <cube-scroll>
        <ul>
          <li v-for="(item,index) in classify" :key="index">
            <img :src="item.image" alt="">
            <p>{{ item.label }}</p>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        // 大分类
        category: [],
        // 商品分类
        classify:[],
        botnavHeight: '',
        activeKey: 0
      }
    },
    methods: {
      // 选取大分类，加载小分类
      selectList(currentIndex) {
        // this.category.forEach((val, index) => {
        //   val.active = currentIndex == index;
        // });
        if (this.activeKey != currentIndex) {
          this.getClassify(currentIndex);
        }
      },
      // 获取大分类
      async getCategory() {
        const result = await this.$http.get('/pub/api/v1/category');
        if (result.code == 200) {
          this.category = result.data;
        }
      },
      // 获取小分类
      async getClassify(index) {
        const result = await this.$http.get('/pub/api/v1/classify', {params: {type: index}});
        if (result.code == 200) {
          this.classify = result.data;
        }
      }
    },
    created() {
      this.getCategory();
      this.getClassify(0);
    },
    mounted() {
      const botnav = document.querySelector('.cube-tab-bar.botnav');
      const windowsHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let panelHeight = windowsHeight - botnav.offsetHeight;
      const leftPanel = document.querySelector('.left-panel');
      const rightPanel = document.querySelector('.right-panel');
      leftPanel.style.height = panelHeight + 'px';
      rightPanel.style.height = panelHeight + 'px';
    }
  }
</script>

<style lang="stylus" scoped>
  .panel-box
    display flex
    .left-panel
      width 30%
      li
        height 50px
        line-height 50px
        border-bottom 1px solid #fff
        color #333
        background #f8f8f8
        font-size 14px
      .active
        background #fff
        color #e93b3d
    .right-panel
      width 70%
      ul
        display flex
        flex-wrap wrap
        li
          width 50%
          justify-content center
          align-items center
          font-size 15px
          img
            width 80px
            height  80px
</style>