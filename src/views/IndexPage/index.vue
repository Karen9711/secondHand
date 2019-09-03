<template lang="html">
  <div id="indexPage">
    <Header />
    <div class="content">
      <div class="ads">
        <img src="@/assets/images/1.jpg" alt="">
      </div>
      <div class="cat">
        <template v-for="i in [1,2,3,4,5,6,7,8]">
          <router-link tag="div" to="/search" class="cat-item">
            {{i}}
          </router-link>
       </template>
      </div>

      <div class="itemLIst">
        <Item title="散粉" price="12" detail="Lorem ipsum inim vitation ullamco laboris nisi ut aliqu" />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Item from '@/components/Item'
export default {
  components:{
    Item,
  }
}
</script>

<style lang="css" scoped>
#indexPage
{
  width: 100%;
  height: 100%;
}
.ads
{
  width: 100%;
  /* background-color: rgb(215, 60, 129); */
}
.ads img
{
  width: 100%;
  /* height:100%; */
}
.content
{
  width: 100%;
  height:81%;
  overflow: scroll;
  position: absolute;
  top:8%;
  left:0;
}
.cat
{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin:0 auto;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 5px;
}
.cat-item
{
  padding-top:52px;
  width: 20%;
  margin: 5px;
  text-align: center;
  background-image: url('../../assets/icons/1.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: 50px;
  color: #194769;
  font-size: 14px;
}
.itemLIst
{
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: space-between;
  align-content: space-between;
}
</style>
