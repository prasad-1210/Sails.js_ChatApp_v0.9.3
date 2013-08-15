define(['backbone',
        'views/MessageView'], function(Backbone, MessageView) {
  var MessagesView = Backbone.View.extend({
    el: '#messagesContainer',

    initialize: function (){
      // this.collection.on('add', this.addOne, this);
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'reset', this.addAll);
      this.render();
    },

    addOne: function(model) {
      var message = new MessageView({model: model});
      this.$el.append(message.render().el);
    },

    addAll: function() {
      this.collection.each(function(model){
        this.addOne(model);
      }, this);
    }
  });

  return MessagesView;
});
