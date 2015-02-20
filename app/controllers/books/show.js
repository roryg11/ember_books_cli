import Ember from 'ember';

export default Ember.ObjectController.extend({
  avgScore: function(){
    var average = 0;
    var totalScore = 0;
    var thing = this.get('model.reviews').then(function(reviews){
      var reviewsLength = reviews.length;
      reviews.forEach(function(review){
        totalScore += review.get('score');
      });
      average=totalScore/reviewsLength;
      return average;
    });
    return thing;
  }.property('model.@each.reviews')
});
