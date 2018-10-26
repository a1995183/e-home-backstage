import axios from 'axios';
const baseURL=process.env.BASE_API
var instance=axios.create({
baseURL:'api',
timeout:30000
})
const $axios={
    get(url,data,config){
        return new Promise((resolve,reject)=>{instance.get(url,data,config).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>reject(err))
    })
    },
    post(url,data,config,method='post'){
        let token = localStorage.getItem('token')
        let configheader={...config}
        if(token){
            configheader={
                headers:{
                    'token':token
                }
            }
        }
        return new Promise((resolve,reject)=>{instance[method](url,data,configheader).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>reject(err))
    })
    }
}
export default $axios;