/**
 * Created by arif on 30/3/16.
 */
app.controller('meetupController',['$scope','$resource', function($scope,$resource){
        var Meetup = $resource('/api/meetups');


    Meetup.query(function(result){
        $scope.meetups=result;
    });

        $scope.meetups=[]

        $scope.createMeetup = function(){

            var meetup = new Meetup();
            meetup.name=$scope.meetupName;
            meetup.$save(function(result){
                $scope.meetups.push(result);
                $scope.meetupName=''

            });

        }

}]);


