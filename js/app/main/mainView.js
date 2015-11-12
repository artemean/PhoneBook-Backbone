var PhoneBookApp = (function (app) {
	app = app || {};

	app.views = app.views || {};
	app.models = app.models || {};

	app.views.MainView = Backbone.View.extend({
		tagName: 'section',
		className: 'phonebook',
		template: _.template('<table></table>'),

		initialize: function () {
			this.itemView = new app.views.ItemView();
		},

		render: function () {
			var self = this;
			
			self.$el.html(self.template());
			app.models.bookItem1.on('change', function(){
				self.$('table').append(self.itemView.render());
			});
			
			return self.$el;
		}
	});

	return app;
})(PhoneBookApp);
