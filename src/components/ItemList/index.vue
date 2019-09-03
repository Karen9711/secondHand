<template lang="html">
  <div id="guessList">
    <div class="content">
      <div class="itemLIst">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item'
export default {
  components:{
    Item
  }
}
</script>

<style lang="css" scoped>
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
