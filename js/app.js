var app = new Vue({
  el: '#app',
  data: {
    apikey: '',
    results: [],
  },
  methods: {
    call_bounces_api: function() {
      axios.get('https://api.sendgrid.com/v3/suppression/bounces' , {
        headers: {
          'Authorization' : 'Bearer ' + this.apikey,
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.results = response.data
      })
    }
  }
})