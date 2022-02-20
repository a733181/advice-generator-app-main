const app = Vue.createApp({
  data() {
    return {
      slip: {
        id: '',
        advice: 'loading...',
      },
    };
  },
  methods: {
    async getMessage() {
      try {
        const res = await axios.get('https://api.adviceslip.com/advice');
        this.slip = res.data.slip;
      } catch (err) {
        console.log(err);
      }
    },
    changeMessage() {
      this.getMessage();
    },
  },
  created() {
    this.getMessage();
  },
});

app.mount('#app');
