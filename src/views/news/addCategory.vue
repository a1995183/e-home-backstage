<template>
    <div>
        添加分类
        <div style="margin: 20px;border:1px solid #ddd;padding:10px">
             <el-form :label-position="labelPosition" label-width="80px" >
                <el-form-item label="上传封面">
                    <uploadAvatar v-model="data.icon"></uploadAvatar>
                </el-form-item>
                <el-form-item label="分类名">
                    <el-input style="width:400px" v-model="data.title"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button type="primary" @click="addTypes">添加</el-button>
                </el-form-item>
            </el-form>
        </div>
       
    </div>
</template>

<script>
import uploadAvatar from '@/components/upload-avatar';
    export default {
        components:{
            uploadAvatar
        },
        data(){
            return{
                labelPosition: 'right',
                data:{
                    icon:'',
                    title:''
                }
            }
        },
        methods:{
         addTypes(){
             this.$axios.post('/api/Category/addTypes',this.data).then(res=>{
                 console.log(this.data)
                 console.log(res)
             })
         }   
        }
    }
</script>
<style lang="scss" scoped>

</style>
