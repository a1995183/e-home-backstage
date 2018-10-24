<template>
    <div>
        userList
    </div>
</template>

<script>
    export default {
        data(){
            return{


            }
        },methods:{
          getData(){
                this.$axios.get('/getUser').then(res=>{
                console.log(res)
            })
          }
        },created(){
            this.getData()
        }
    }
</script>
<style lang="scss" scoped>

</style>
