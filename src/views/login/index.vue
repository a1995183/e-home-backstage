<template>
    <div class="body">
        <div class="login">
            <h2 class="login-title">党建E家后台管理系统</h2>
            <div class="login-tips">用户名</div>
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
            <div class="login-tips">密码</div>
            <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
              <el-button @click="login" type="primary">登录</el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
        data() {
            return {
            username: '1001',
            password:'123456'
            }
        },
        methods:{
            login(){
                let form={idCardNumber:this.username,pwd:this.password}
                this.$axios.post('/login',form).then(res=>{
                    console.log(res)
                    if(res.code==200){
                        this.$message.success('登录成功')
                        this.$store.commit('CHANGE_userInfo',res.userInfo)
                        setTimeout(()=>this.$router.push('/home'),500)
                    }else{
                        this.$message.error(res.data.msg)
                    }
})
            }
        },
    }
</script>
<style lang="scss" scoped>
.body{
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    box-sizing: border-box;
    padding:200px;
    text-align: center;
    .login{
        width: 400px;
        height: 370px;
        border: 1px solid #ddd;
        padding:0 20px;
        border-radius: 5px;
        margin:0 auto;
    }
    .login-title{
        color:#fff;
        width: 100%;
        text-align: center;
        font-size: 22px;
        font-weight: 400;
        margin-top: 50px;
    
    }
    .login-tips{
        color:#fff;
        margin: 25px 0 10px;
        text-align: left;
        font-size: 14px;
        font-weight: 400;
    }
    .el-button{
        width: 100%;
        margin-top: 20px;
    }
    .el-input__inner{
        background: #fff;
    }
}
</style>
