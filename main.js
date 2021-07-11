const app = Vue.createApp({
    data(){
        return {
            product: 'Test',
            image:'./assets/images/socks_blue.jpg',
            inventory:10,
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
