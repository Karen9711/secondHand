<template lang="html">
  <div id="article-list">
    <div class="content">
      <ul>
        <li>
          <articleItem />
        </li>
        <li>
          <articleItem />
        </li>
        <li>
          <articleItem />
        </li>
        <li>
          <articleItem />
        </li>
        <li>
          <articleItem />
        </li>
        <li>
          <articleItem />
        </li>
        <li>
          <articleItem />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import articleItem from "@/components/articleItem"
export default {
  components:{
    articleItem
  }
}
</script>

<style lang="css" scoped>
#article-list
{
  width: 100%;
  height: 100%;
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
.content ul
{
  list-style: none;
}

</style>
