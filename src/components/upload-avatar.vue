<template>
    <div>
        <el-upload
            class="avatar-uploader"
            action="https://upload-z1.qiniup.com"
            :show-file-list="false"
            :data="formData"
            :on-success="handleSuccess"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>

<script>
export default {
    props:{
        value:String
    },
    data() {
      return {
        imageUrl:this.value,
        formData:{
            token:''
        }
      };
    },
    methods: {
      handleSuccess(res,file) {
         this.imageUrl =res.url;
        this.$emit('input',this.imageUrl)
      },
      getToken(){
          this.$axios.get('http://upload.yaojunrong.com/getToken')
          .then(res=>{
                  this.formData.token=res.data
        })  
      }
    },
    watch:{
        value(val){
            this.imageUrl=val
        }
    },
    created(){
        this.getToken()
    }
}
</script>
<style lang="scss" scoped>
.avatar-uploader .el-upload {
border: 1px dashed #d9d9d9;
border-radius: 6px;
cursor: pointer;
position: relative;
overflow: hidden;
}
.avatar-uploader .el-upload:hover {
border-color: #409EFF;
}
.avatar-uploader-icon {
font-size: 28px;
color: #8c939d;
width: 178px;
height: 178px;
line-height: 178px;
text-align: center;
}
.avatar {
width: 178px;
height: 178px;
display: block;
}
/deep/.avatar-uploader-icon{
    border:1px solid #ddd;
}
</style>
