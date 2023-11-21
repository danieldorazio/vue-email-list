const { createApp} = Vue;

const app = createApp ({
    data () {
        return {
            email: []
        }
    },

    created () {
for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                this.email.push(resp.data.response);
                console.log(this.email);
            }) 
        }
    },
})

app.mount("#app");