<template lang="html">
  <div class="item">
    <div class="img">
      <img src="../../assets/images/item1.jpg" alt="">
    </div>
    <div class="description">
      <router-link to="/search/detail/123" tag="div" class="title">
        {{title}}
      </router-link>
      <div class="price">
        ￥{{price}}
      </div>
      <div class="detail">
        {{detail}}
      </div>
    </div>
    <div class="add">

    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'商品名'
    },
    price:{
      type:[Number,String],
      default:0
    },
    detail:{
      type:String,
      default:'商品描述'
    }
  }
}
</script>

<style lang="css" scoped>
.item
{
  /* flex-grow:1; */
  padding: 5px;
  margin:10px;
  width: 42%;
  box-shadow: 1px 1px 5px #ccc;
  background: #fff;
  border-radius: 10px;
}
.item .img
{
  width: 100%;
}
.item .img img
{
  width: 100%;
}
.item .description
{
  font-size: 14px;
}
.item .description .title
{
  font-weight: 600;
  font-size: 16px;
}
.item .description .price
{
  color: #f2855e;
}
</style>
