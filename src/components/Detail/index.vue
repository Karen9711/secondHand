<template lang="html">
  <div id="detail">
    <div class="topBar">
      <router-link tag="div" to="/search/searchIndex" class="">
        <Icon type="ios-arrow-round-back" size="35"/>
      </router-link>
    </div>
    <div class="content">
      <div class="seller-info">
        <div class="portrait">
          <img src="../../assets/icons/portrait.png" alt="">
        </div>
        <div class="info">
          <h3>XXXXXX</h3>
          <p>简单的个人信息</p>
        </div>
      </div>

      <div class="item-info">
        <div class="info">
          <h2>散粉</h2>
          <div class="item-details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div class="item-imgs">
          <img src="../../assets/images/1.jpg" alt="">
          <img src="../../assets/images/4.jpg" alt="">
        </div>
      </div>

      <div class="comment">
        <ul>
          <li>
            <div class="comment-content">
              <span>User:</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="can-do">
              <span><a href="#">举报</a></span>
              <span>评论（444）</span>
              <span>有用（123123）</span>
            </div>
          </li>

          <li>
            <div class="comment-content">
              <span>User:</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="can-do">
              <span><a href="#">举报</a></span>
              <span>评论（444）</span>
              <span>有用（123123）</span>
            </div>
          </li>

          <li>
            <div class="comment-content">
              <span>User:</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="can-do">
              <span><a href="#">举报</a></span>
              <span>评论（444）</span>
              <span>有用（123123）</span>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <Footer />

  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.topBar
{
  width: 100%;
  height: 8%;
  background-color: #d7eef2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  text-align: left;
  color:#194769;
  font-size: 20px;
  line-height: 2em;
}
.content
{
  width: 100%;
  padding: 10px;
}

.seller-info
{
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;
}
.seller-info .portrait
{
  width: 10%;
}
.seller-info .info
{
  width: 85%;
}
.seller-info .portrait img
{
  width: 100%;
}
.item-info
{
  width: 100%;
  margin-bottom: 20px;
}
.item-imgs
{
  width:100%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
.item-imgs img
{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height:100%;
}
.comment
{
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.comment ul
{
  list-style: none;
}
.comment li .comment-content span
{
  font-weight: 700;
}
.comment li .comment-content
{
  font-size: 14px;
}
.comment .can-do
{
  width: 100%;
  text-align: right;
}
</style>
