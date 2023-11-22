const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      mailsArray: [],
      isLoading: false,
    };
  },
  created() {
    // for (i = 0; i < 10; i++) {
    //   axios
    //     .get("https://flynn.boolean.careers/exercises/api/random/mail")
    //     .then((resp) => {
    //       this.mailsArray.push(resp.data.response);
    //     });
  },

  methods: {
    generateEmails: function () {
      this.mailsArray = [];
      this.isLoading = true;
      for (i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            console.log(resp.data.response);
            this.mailsArray.push(resp.data.response);
            if (this.mailsArray.length === 10) {
              this.isLoading = false;
            }
          });
      }
    },
  },
});

app.mount("#app");
