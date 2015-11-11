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
	template: _.template('<td><%= id %></td><td><%= name %></td><td><%= phone %></td>'),
	model: bookItem1,

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this.$el;
	}
});

var MainView = Backbone.View.extend({
	tagName: 'section',
	className: 'phonebook',
	template: _.template('<table></table>'),

	initialize: function () {
		this.itemView = new ItemView();
	},

	render: function () {
		var self = this;
		self.$el.html(this.template());
		bookItem1.on('change', function(){
			self.$('table').append(self.itemView.render());
		});
		
		return this.$el;
	}
});


var main = new MainView();

$('.wrap').append(main.render());