var BookItem = Backbone.Model.extend({
	url: 'data/oleg.json'
});

var bookItem1 = new BookItem({

});

bookItem1.fetch({
	success: function() {
          console.log("JSON file load was successful", bookItem1.toJSON());
    },
    error: function(){
       console.log('There was some error in loading and processing the JSON file');
    }
});

          
var ItemView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template('<td><%= name %></td>'),

	render: function(){
		console.log(bookItem1.toJSON());
		this.$el.html(this.template());
		return this.$el;
	}
});

var MainView = Backbone.View.extend({
	tagName: 'section',
	className: 'phonebook',
	template: _.template('<table></table>'),

	initialize: function () {
		this.itemView = new ItemView({model: bookItem1});
	},

	render: function () {
		var self = this;
		this.$el.html(this.template());
		// this.$('table').append(this.itemView.render());
		$.when(bookItem1.fetch()).then(function() {
		   self.$('table').append(self.itemView.render());
		});
		// console.log(this.$el);
		return this.$el;
	},
});



var main = new MainView();
// var item = new ItemView();


$('.wrap').append(main.render());