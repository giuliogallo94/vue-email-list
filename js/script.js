const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      mailsArray: [],
    };
  },
  created() {
    for (i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          this.mailsArray.push(resp.data.response);
        });
    }
  },

  methods: {},
});

app.mount("#app");
