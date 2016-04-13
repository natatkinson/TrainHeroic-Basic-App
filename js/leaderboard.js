var leaderboardInfo = new LeaderboardInfoModel();
var leaderboardList = new LeaderboardCollection();
var leaderboardView = new LeaderboardListView({collection: leaderboardList});
leaderboardList.fetch();
leaderboardInfo.fetch();

var LeaderboardInfoView = new LeaderboardInfoView({model: leaderboardInfo});