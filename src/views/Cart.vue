<template>
  <div id="cart">
    <van-nav-bar
        class="nav-bar"
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight">
      <div slot="right" class="van-nav-bar__text">
        <van-icon name="wap-nav"></van-icon>
      </div>
    </van-nav-bar>
    <div class="cart-panel">
      <cube-scroll>
        <div class="card-panel" v-for="(item,index) in goodsList" :key="index">
          <div class="checkbox-panel" @click="clickOne(index)">
            <van-checkbox v-model="item.checked"></van-checkbox>
          </div>
          <van-card>
            <div slot="title" class="van-card__title" @click="clickOne(index)">{{item.title}}</div>
            <div slot="price" class="van-card__price" @click="clickOne(index)">{{item.price}}</div>
            <div slot="origin-price" class="van-card__origin-price" @click="clickOne(index)">{{item.originPrice}}</div>
            <div slot="desc" class="van-card__desc van-ellipsis" @click="clickOne(index)">{{item.desc}}</div>
            <div slot="tag" class="van-tag van-tag--mark van-tag--danger" @click="clickOne(index)">{{item.tag}}</div>
            <div slot="thumb" @click="clickOne(index)">
              <van-image
                  width="90"
                  height="90"
                  :src="item.thumb"></van-image>
            </div>
            <div slot="num">
              <van-stepper
                  v-model="item.num"
                  input-width="26px"
                  button-size="22px">
              </van-stepper>
            </div>
            <div slot="tags" @click="clickOne(index)">
              <van-tag plain type="danger" v-for="(tag,tag_index) in item.tags" :key="tag_index">{{tag}}</van-tag>
            </div>
            <div slot="footer">
              <van-button type="danger" size="small" @click="deleteGoods(index)">
                <van-icon class-prefix="fa" name="trash"></van-icon>删除
              </van-button>
            </div>
          </van-card>
        </div>
      </cube-scroll>
    </div>
    <van-submit-bar
        class="submit-bar"
        :loading = "loadingState"
        :price="totalPrice"
        :button-text="buttonText(0)"
        @submit="onSubmit">
      <van-checkbox v-model="checked" @click="chooseAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        checked: false,
        totalPrice: 1000, // 总价，单位为分,
        loadingState: false,
        goodsList: [
          {
            title: 'T恤',
            desc: 'Nike T恤，双11特惠，限时抢购',
            num: 2,
            price: '118.00',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            checked: false,
            tag: '超市',
            tags: ['促销','双11']
          },
          {
            title: '机械师（MACHENIKE） 空间站笔记本电脑双肩包 15.6/14英寸背包时尚商务学生男女',
            desc: '星际-快充版',
            num: 1,
            price: '299.99',
            thumb: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/27526/22/9542/104974/5c7f6715E49f688dd/d7b231bfd420b3c9.jpg!q70.dpg.webp',
            checked: true
          },
          {
            title: '一加7',
            desc: '高通骁龙855 双立体扬声器',
            num: 1,
            price: '2999.00',
            thumb: 'https://img12.360buyimg.com/n2/s240x240_jfs/t1/35032/13/9593/102096/5cf0c2ccE77dc890e/abde5c9a60044485.jpg!q70.jpg',
            checked: false,
            tags: ['自营']
          },
          {
            title: 'Apple iPhone XR',
            desc: '无线充电|面容ID|双卡双待',
            num: 1,
            price: '5099.00',
            thumb: 'https://img10.360buyimg.com/mobilecms/s316x316_jfs/t1/1695/39/3482/70556/5b997bf7Ed2d65519/749d8efdff062fb0.jpg!q70.dpg.webp',
            checked: false,
            tags: ['自营','双11'],
            originPrice: '5999.00'
          },
          {
            title: '优冠 牛奶香脆盒装饼干 盒装饼干1000g(新旧包装随机发货)',
            desc: '牛奶香脆盒装饼干 1KG',
            num: 2,
            price: '24.50',
            thumb: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t13153/211/2487680858/211935/964b943e/5a548f7fN1e877b3d.jpg!q70.dpg.webp',
            checked: true,
            tag: '超市'
          },
          {
            title: '城南旧事',
            desc: '林海音 著',
            num: 1,
            price: '31.10',
            thumb: 'https://img14.360buyimg.com/n7/jfs/t1/29213/11/14211/274689/5ca56202Ec28b53c8/7fe5eb4a5571177d.jpg!q70.dpg.webp',
            checked: false,
            originPrice: '49.80',
            tag: '图书',
            tags: ['双11']
          }
        ]
      }
    },
    computed: {

    },
    methods: {
      onSubmit() {

      },
      buttonText(count) {
        return '去结算('+ count + ')';
      },
      clickOne(index) {
        this.goodsList[index].checked = !this.goodsList[index].checked;
        const checkedNum = this.goodsList.filter(value => value.checked).length;
        if (checkedNum == this.goodsList.length) {
          this.checked = true;
        } else if (checkedNum == this.goodsList.length - 1) {
          this.checked = false;
        }
      },
      chooseAll() {
        this.goodsList.forEach(goods => {
          goods.checked = !this.checked;
        })
      },
      deleteGoods(index) {
        this.$dialog.confirm({
          title: '删除商品',
          message: '您确认将此商品移出购物车吗？'
        }).then(() => {
          // on confirm
          this.goodsList.splice(index, 1);
        }).catch(() => {
          // on cancel
        });
      },
      onClickLeft() {

      },
      onClickRight() {

      }
    },
    mounted() {
      const botnav = document.querySelector('.cube-tab-bar.botnav');
      const topNav = document.querySelector('.van-nav-bar.nav-bar');
      const windowsHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const submitBar = document.querySelector('.submit-bar.van-submit-bar');
      const cartPanel = document.querySelector('.cart-panel');
      let bottom = botnav.offsetHeight;
      submitBar.style.bottom = bottom + 'px';
      cartPanel.style.height = (windowsHeight - bottom - submitBar.offsetHeight - topNav.offsetHeight) + 'px';
    }
  }
</script>

<style lang="stylus" scoped>
  .cart-panel
    .card-panel
      display flex
      border 1px solid #e6eaf2
      border-radius 10px
      margin .15rem .1rem
      .checkbox-panel
        justify-content center
        width 10%
        .van-checkbox
          height 100%
          margin-left 12px
      .van-card
        width 90%
        .van-tag
          margin-right 5px
  .submit-bar
    /*border-top 1px solid #e6eaf2*/
    box-shadow 0 0 10px 0 hsla(0,6%,58%,.6)
    -webkit-box-shadow 0 0 10px 0 hsla(0,6%,58%,.6)
    .van-checkbox
      margin-left 12px
  .nav-bar
    border-bottom 1px solid #e6eaf2
</style>