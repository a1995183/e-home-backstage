<template>
    <div>
      
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        methods:{
            getData(){
                if(!this.userInfo){
                    this.$message('请先登录')
                    this.router.push('/login')
                }
            }
        },
        created(){
            this.getData()
        },
          computed:{
        ...mapState(['userInfo'])
        },
    }
</script>
<style lang="scss" scoped>

</style>
