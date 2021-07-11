const app = Vue.createApp({
    data(){
        return {
            product: 'Test',
            image:'./assets/images/socks_blue.jpg',
            inventory:10,
            details:['first element','second element','just for test'],
            variants:[
                {id:'0001',color:'green'},
                {id:'0002',color:'blue'}
            ]
        }
    }
    
})
const p = Vue.createApp({
    data(){
        return {
            description: 'This is a description',
        }
    }
    
})
