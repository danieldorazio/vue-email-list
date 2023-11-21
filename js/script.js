const { createApp} = Vue;

const app = createApp ({
    data () {
        return {
            email: ["danie@Gamepad.com"]
        }
    },

    created () {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            console.log(resp.data.response);
        })
    },

    methods: {

    },
})

app.mount("#app");