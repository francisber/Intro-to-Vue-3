const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Test',
            //image:'./assets/images/socks_blue.jpg',
            //inventory:0,
            //inStock:false,
            selectedVariant:0,
            details:['first element','second element','just for test'],
            variants:[
                {id:'0001',color:'green',image:'./assets/images/socks_green.jpg', quantity:10},
                {id:'0002',color:'blue',image:'./assets/images/socks_blue.jpg', quantity:0}
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart+=1
        },
        changeVariant(index){
            this.selectedVariant=index
            console.log(index)
        }
    },
    computed:{
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
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
