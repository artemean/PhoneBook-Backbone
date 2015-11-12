var PhoneBookApp = (function (app) {
	app = app || {};

	app.views = app.views || {};

	app.views.ItemView = Backbone.View.extend({
		tagName: 'tr',
		template: _.template('<td><%= name %></td><td><%= phone %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td>'),
		model: app.models.bookItem1,

		render: function(){
			this.$el.html(this.template(this.model.attributes));
			return this.$el;
		}
	});

	return app;
})(PhoneBookApp);
