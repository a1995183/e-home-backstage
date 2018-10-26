<template>
    <div>
        <el-row :gutter="0" type="flex">
            <el-col :span="3"><div class="grid-content bg-purple">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#333"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item-group>
                  <router-link to="/home">
                    <el-menu-item index="1-1" >首页</el-menu-item>
                  </router-link>
                </el-menu-item-group>
                <el-submenu index="1">
                <template slot="title">
                <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/userList">
                    <el-menu-item index="1-1" >管理员列表</el-menu-item>
                  </router-link>
                  <router-link to="/addUser">
                <el-menu-item index="1-2">添加管理员</el-menu-item>
                  </router-link>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-submenu >
                <el-submenu index='2'>
                  <template>
                    <span slot="title">新闻管理</span>
                  </template>
                  <el-menu-item-group>
                    <router-link to="/">
                      <el-menu-item index="2-1" >新闻列表</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                  <el-submenu index="2-1">
                    <template slot="title">分类管理</template>
                      <router-link to="/addCategory">
                        <el-menu-item index="2-1-1" >添加分类</el-menu-item>
                      </router-link>
                      <router-link to="/addCategory">
                        <el-menu-item index="2-1-1" >分类列表</el-menu-item>
                      </router-link>
                  </el-submenu>
                  </el-submenu>
                </el-menu>
            </div></el-col>
            <el-col :span="21"><div class="grid-content bg-purple2">
              <div class="header">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb> 
              <h1 class="home-title">党建E建后台管理系统</h1>
              </div>
            <router-view></router-view>
            </div></el-col>
        </el-row>
        <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
          <img class="user-avatar" :src="userInfo.avatar"><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <p>欢迎登录:<span>{{userInfo.name}}</span></p>
            <p class="personal-id">{{userInfo.level==1?'用户':'管理员'}}</p>
            <el-button @click="clearLogin" type="danger">退出登录</el-button>
          </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
  title:'',
    data() {
      return {
      }
    },
  methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      getData(){
        if(!this.userInfo){
        this.$message('请先登录')
        setTimeout(() => {
        this.$router.push('/login')
        }, 500);
        }
      },
      clearLogin(){
        this.$store.commit('CHANGE_userInfo','')
        this.getData()
      }
  },
  created(){
    this.getData()
  },
  computed:{
    ...mapState(['userInfo'])
  } 
}
</script>
<style lang="scss" scoped>
  .header{
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #666;
      text-align: center;
      .el-breadcrumb{
          line-height: 44px;
          width: 400px;
          float: left;
      }
      .home-title{
          color:#333;
          line-height: 44px;
          float: left;
          margin-left: 20%;
          transform: translateX(-50%);
      }
  }
.el-col-3{
  min-width: 210px;
}
  .bg-purple {
    background: #333;
  }
  .bg-purple {
    background: #333;
  }
  .bg-purple2 {
      width: 100%;
    background: #fff;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 100vh;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #111;
  }
  .el-menu-vertical-demo{
    background:#111;
    padding-top:80px;
    border-right: 0;    
  }
  /deep/ .is-active{
    color:#fff;
  }
  .user-info{
    width: 53px;
    height: 33px;
    position: fixed;
    line-height: 30px;
    right: 20px;
    top:5px;
    .user-avatar{
      width: 33px;
      height: 33px;
      border-radius: 50%;
    }
    .personal-id{
      color:red;
      margin-right: 20px;
      text-align: center;
    }
  }

</style>
