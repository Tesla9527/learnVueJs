var app = new Vue({
  el: '#app',
  data: {
    name: 'Timi'
  },
  methods:{
  	greet: function(time) {
 		return 'Good ' + time + ' ' + this.name
  	},
  	getTime: function(){
  		return 'Current time is ' + new Date().toLocaleString()
  	}
  }
})