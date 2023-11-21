const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      rndMail: "",
      mailsArray: [],
    };
  },
  created() {
    for (i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          console.log(resp.data.response);
          this.rndMail = resp.data.response;
          this.mailsArray.push(this.rndMail);
          console.log(this.mailsArray);
        });
    }
  },

  methods: {
    // generateMail: function () {
    //   axios
    //     .get("https://flynn.boolean.careers/exercises/api/random/mail")
    //     .then((resp) => {
    //       console.log(resp.data.response);
    //       this.rndMail = resp.data.response;
    //     });
    // },
  },
});

app.mount("#app");
