var app = new Vue({
  el: '#app',
  data: {
    name: 'Timi',
    blog: 'https://tesla9527.github.io/',
    blogTag: '<a href="https://tesla9527.github.io/">Tesla Blog</a>'
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