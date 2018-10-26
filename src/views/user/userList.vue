<template>
    <div>
        <h1 class="user-list-title">用户列表</h1>
        <div class="user-list">
            <el-table
            :data="data"
            style="width: 100%">
                <el-table-column
                prop="avatar"
                label="头像"
                width="180">
                <template slot-scope="scope">
                <img class="user-list-img" :src="scope.row.avatar" alt="">
                </template>
                </el-table-column>
                <el-table-column
                prop="idCardNumber"
                label="账号名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="userName"
                label="昵称">
                </el-table-column>
                <el-table-column
                prop="sex"
                label="性别">
                <!-- <template slot-scope="scope">
                <el-select disabled v-model="scope.row.sex" placeholder="请选择性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="0"></el-option>
                </el-select>
                </template> -->
                </el-table-column>
                <el-table-column
                prop="phrase"
                label="个性签名">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机号">
                </el-table-column>
                <el-table-column
                prop="level"
                label="权限">
                <!-- <template slot-scope="scope">
                <el-select disabled v-model="scope.row.level" placeholder="请选择权限">
                <el-option label="用户" value="1"></el-option>
                <el-option label="管理" value="0"></el-option>
                </el-select>
                </template> -->
                </el-table-column>
                <el-table-column
                    prop=""
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="userEdit(scope.row.idCardNumber)">编辑</el-button>
                    <el-button type="danger" @click="userdelate(scope.row.idCardNumber)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        data(){
            return{
                data:[

                ]
            }
        },
        methods:{
          getData(){
               let token=localStorage.getItem('token')
               let Params={'token':token}
                this.$axios.get('/getUser').then(res=>{
                    if(res.code==200){
                     for(let item in res.data){
                         if(res.data[item].sex=='1'){
                             res.data[item].sex='男'
                         }else{
                             res.data[item].sex='女'
                         }
                         if(res.data[item].level=='0'){
                             res.data[item].level='管理'
                         }else{
                             res.data[item].level='用户'
                         }
                     }
                        this.data=res.data
                    }
            })
          },
          userEdit(value){
            if(this.userInfo.level=='1'){
                this.$message('用户权限不够')
            }else{
                this.$router.push({name:'userEdit',params:{value:value}})                
            }
          },
          userdelate(value){
              this.$axios.post('/delUser',{idCardNumber:value}).then(
                  res=>{
                      this.$message(res.msg)
                      this.getData()
                  }
              )
          }
        },created(){
            this.getData()
        },
        computed:{
            ...mapState(['userInfo'])
        }
    }
</script>
<style lang="scss" scoped>
.user-list{
    border:1px solid #ddd;
    margin:0 20px;
}
.user-list-img{
    width: 50px;
    height: 50px;
}
.user-list-title{
    margin:20px;
}
.user-edit{
    text-align: center;
    background: skyblue;
}
.user-delate{
    text-align: center;
    background:red;
}
</style>
