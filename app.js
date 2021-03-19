const app = Vue.createApp({
  data() {
    return { 
      inicjujZadanieWartosc: '',
      listazadan: []
     };
  },
  methods: {
    addWpis() {
      this.listazadan.push(this.inicjujZadanieWartosc);
    },
    usunWpis(idx) {
      this.listazadan.splice(idx, 1);
    }
  }
});

app.mount('#user-listazadan');