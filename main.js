var app = new Vue({
  el: '#app',
  data: {
  	age: 28,
 	a: 0,
 	b: 0
  },
  methods:{

  },
  computed:{
  	addToA: function() {
  		console.log('addToA')
  		return this.age + this.a
  	},
  	addToB: function(){
  		console.log('addToB')
  		return this.age + this.b
  	}

  }
})