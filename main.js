const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
            console.log(this.cart);
        },
        deleteFromCart(id) {
            itemToRemove = this.cart.indexOf(id)
            if (itemToRemove > -1) {
                this.cart.splice(itemToRemove, 1)
            }
            console.log(`Item to remove: ${itemToRemove}`);
            console.log(`Updated Cart: ${this.cart}`);
        }
    }
})
