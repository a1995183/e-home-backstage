<template>
    <div>
        adduser
        <div>
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户头像">
                     <uploadAvatar  v-model="formData.avatar"></uploadAvatar>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="formData.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.pwd"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item label="账号名">
                    <el-input v-model="formData.idCardNumber"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                      <el-select v-model="formData.sex" placeholder="请选择">
                            <el-option
                            label="男"
                            value="1">
                            </el-option>
                            <el-option
                            label="女"
                            value="0">
                            </el-option>
                        </el-select>
                </el-form-item>
                <el-form-item label="权限">
                      <el-select v-model="formData.level" placeholder="请选择">
                            <el-option
                            label="管理"
                            value="0">
                            </el-option>
                            <el-option
                            label="用户"
                            value="1">
                            </el-option>
                        </el-select>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input v-model="formData.phrase"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import uploadAvatar from '@/components/upload-avatar'
export default {
    components:{
        uploadAvatar
    },
    data(){
        return{
            formData:{
                avatar:"http://oowantxlb.bkt.clouddn.com/upload/front/00ca764dc423e0a48764c25aec2fd940.png",
                userName:'',
                idCardNumber:'',
                sex:1,
                pwd:'',
                phone:'',
                phrase:'',
                level:'',
                token:''
                
            },
            labelPosition: 'left',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    methods:{
        getdata(){
        },
        submitForm(){
            let token=localStorage.getItem('token')
            if(token){
                this.formData.token=token
                
            }
            this.$axios.post('/add',this.formData).then(res=>{
                if(res.code==200){
                    this.$message(res.msg)
                    setTimeout(()=>{
                        this.$router.push('/userList')
                    },500)
                }else{
                    this.$message.error(res.msg)
                }
        })
        },
        resetForm(){
            this.submitForm=''
        }
    },
    created(){
    this.getdata()
    },
}
</script>
<style lang="scss" scoped>
.el-input{
    width: 90%;
}
.el-form{
    border:1px solid #ddd;
    box-sizing: border-box;
    padding: 20px;
    margin:20px 40px;
/deep/.avatar{
    border-radius: 4px;
}
}
</style>
