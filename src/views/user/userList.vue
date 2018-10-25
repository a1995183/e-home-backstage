<template>
    <div>
        userList
        <el-table
        :data="data"
        style="width: 100%">
            <el-table-column
            prop="头像"
            label="avatar"
            width="180">
            </el-table-column>
            <el-table-column
            prop="idCardNumber"
            label="账号名"
            width="180">
            </el-table-column>
               <el-table-column
            prop="昵称"
            label="userName">
            </el-table-column>
            <el-table-column
            prop="sex"
            label="性别">
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
            </el-table-column>
         
        </el-table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[]
            }
        },methods:{
          getData(){
               let token=localStorage.getItem('token')
               let Params={'token':token}
                this.$axios.get('/getUser').then(res=>{
                    console.log(res)
                    if(res.code==200){
                        this.data=res.data
                    }
            })
          }
        },created(){
            this.getData()
        }
    }
</script>
<style lang="scss" scoped>

</style>
