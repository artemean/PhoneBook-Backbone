var PhoneBookApp = (function (app) {
	app = app || {};

	app.models = app.models || {};

	app.models.BookItem = Backbone.Model.extend({
		defaults: {
			name: '',
			phone: '',
			address: {
				city: '',
				street: '',
				building: ''
			},
			job: '',
			organisation: ''
		},

		url: 'data/oleg.json'
	});

	// app.models.bookItem1 = new app.models.BookItem();

	// app.models.bookItem1.fetch({
	// 	success: function() {
	//           console.log("JSON file load was successful", app.models.bookItem1.toJSON());
	//     },
	//     error: function(){
	//        console.log('There was some error in loading and processing the JSON file');
	//     }
	// });



	return app;
})(PhoneBookApp);
