import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('authors', function(){
    this.route('show', {path:':author_id'});
  });
  this.resource('books', function() {
    this.route('show', {path: '/:book_id'});
    this.route('reviews', {path: '/:book_id/reviews'});
  });
});

export default Router;
