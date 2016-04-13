var LeaderboardInfoModel = Backbone.Model.extend({
	url: 'https://apis.trainheroic.com/public/leaderboard/468425'
});

var LeaderboardModel = Backbone.Model.extend({
	defaults: {
		userId: null,
		username: null,
		rank: null
	}

});

var LeaderboardCollection = Backbone.Collection.extend({
    model: LeaderboardModel,
    url: 'https://apis.trainheroic.com/public/leaderboard/468425',
	parse: function(data){
		return data.results;
	}
})