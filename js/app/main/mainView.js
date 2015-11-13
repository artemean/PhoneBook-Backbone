var PhoneBookApp = (function (app) {
	app = app || {};

	app.views = app.views || {};
	app.models = app.models || {};

	app.views.MainView = Backbone.View.extend({
		tagName: 'section',
		className: 'phonebook',
		template: _.template('<table></table><button class="update">Update</button>'),

		events: {
			'click .update': 'updateAll'
		},

		initialize: function () {
			var model = new app.models.BookItem();

			this.itemView = new app.views.ItemView({model: model});
		},

		render: function () {

			this.$el.html(this.template());
			this.$('table').append(this.itemView.render());
			// app.models.bookItem1.on('change', function(){
			// 	self.$('table').append(self.itemView.render());
			// 	console.log(self);
			// });
			
			return this.$el;
		},

		updateAll: function () {
			console.log('clicked');
			this.model.fetch();
			this.render();
		}
	});

	console.log(app.views.MainView);

	return app;
})(PhoneBookApp);
