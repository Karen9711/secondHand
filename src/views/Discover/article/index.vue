<template lang="html">
  <div id="article">
    <div class="content">
      <div class="title">
        <div class="tag">
          <img src="../../../assets/icons/最新.png" alt="">
        </div>
        <div class="title-info"><h1>惊天秘密ssSSssssssCCCCCCC！</h1></div>
      </div>
      <ul>
        <li>
          <div class="user">
            <div class="portrait">
              <img src="../../../assets/icons/portrait.png" alt="">
            </div>
            <div class="user-info">
              <div class="name">
                XXXXX
              </div>
              <div class="time">
                发布于 2019-09-25
              </div>
            </div>
          </div>
          <div class="article-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="others">
            <div class="num">
              1 楼
            </div>
            <div class="respoose">
              回复
            </div>
          </div>
        </li>

        <li>
          <div class="user">
            <div class="portrait">
              <img src="../../../assets/icons/portrait.png" alt="">
            </div>
            <div class="user-info">
              <div class="name">
                XXXXX
              </div>
              <div class="time">
                发布于 2019-09-25
              </div>
            </div>
          </div>
          <div class="article-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="others">
            <div class="num">
              2 楼
            </div>
            <div class="respoose">
              回复
            </div>
          </div>
        </li>

        <li>
          <div class="user">
            <div class="portrait">
              <img src="../../../assets/icons/portrait.png" alt="">
            </div>
            <div class="user-info">
              <div class="name">
                XXXXX
              </div>
              <div class="time">
                发布于 2019-09-25
              </div>
            </div>
          </div>
          <div class="article-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="others">
            <div class="num">
              3 楼
            </div>
            <div class="respoose">
              回复
            </div>
          </div>
        </li>

        <li>
          <div class="user">
            <div class="portrait">
              <img src="../../../assets/icons/portrait.png" alt="">
            </div>
            <div class="user-info">
              <div class="name">
                XXXXX
              </div>
              <div class="time">
                发布于 2019-09-25
              </div>
            </div>
          </div>
          <div class="article-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="others">
            <div class="num">
              4 楼
            </div>
            <div class="respoose">
              回复
            </div>
          </div>
        </li>

        <li>
          <div class="user">
            <div class="portrait">
              <img src="../../../assets/icons/portrait.png" alt="">
            </div>
            <div class="user-info">
              <div class="name">
                XXXXX
              </div>
              <div class="time">
                发布于 2019-09-25
              </div>
            </div>
          </div>
          <div class="article-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="others">
            <div class="num">
              5 楼
            </div>
            <div class="respoose">
              回复
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.content .title
{
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.content .title h1
{
  word-break: break-all;
}
.content .title .tag
{
  width: 30px;
}
.content .title .title-info
{
  width: 90%;
}
.content .title .tag img
{
  width: 100%;
}

.content ul
{
  list-style: none;
}
.content ul li
{
  background-color: #fff;
  margin-bottom: 10px;
}
.content li .user
{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}
.content li .user .portrait
{
  width: 10%;
}
.content li .user .portrait img
{
  width: 100%;
}
.content li .user .user-info
{
  width: 85%;
}
.content li .user .user-info .name
{
  font-size: 14px
}
.content li .article-content
{
  padding: 15px;
  word-break: break-all;
  font-size: 14px;
}
.content li .others
{
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}
.content li .others div
{
  margin-left: 10px;
}
</style>
