var LeaderboardInfoView = Backbone.View.extend({ 
  el: '#workout_info',
  
  initialize: function() {
  	this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function() {
	  
  	this.$('.workout_title').html(this.model.get('workoutTitle'));
  	this.$('.workout_date').html(this.model.get('date'));
  }
});

var LeaderboardListItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'athlete',
  template: _.template($('#leaderboard-item-tmpl').html()),
  
  initialize: function() {

  },

  render: function() {
	var html = this.template(this.model.toJSON());
   	this.$el.html(html);
   	return this;
  }
  
});

var LeaderboardListView = Backbone.View.extend({
	el: '#leaderboard_app',
	
	 initialize: function() {
	    this.listenTo(this.collection, 'sync', this.render);
	    //this.render();
	  },
	  
	  render: function() {
	    var $list = this.$('ul.leaderboard_list').empty();			
		
	    this.collection.each(function(model) {
	      var item = new LeaderboardListItemView({model: model});
	      $list.append(item.render().$el);
	    }, this);
	
	    return this;
	  }
	  
})