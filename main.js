var app = new Vue({
  el: '#app',
  data: {
  	x: 0,
  	y: 0,
    name: 'Timi',
    age: 28,
    blog: 'https://tesla9527.github.io/',
    blogTag: '<a href="https://tesla9527.github.io/">Tesla Blog</a>'
  },
  methods:{
  	greet: function(time) {
 		return 'Good ' + time + ' ' + this.name
  	},
  	getTime: function(){
  		return 'Current time is ' + new Date().toLocaleString()
  	},
  	add: function(inc){
  		return this.age += inc
  	},
  	subtract: function(dec){
  		return this.age -= dec
  	},
  	updateXY: function(event){
  		this.x = event.offsetX;
  		this.y = event.offsetY;
  	},
  	click: function(){
  		alert('You clicked me!')
  	}
  }
})