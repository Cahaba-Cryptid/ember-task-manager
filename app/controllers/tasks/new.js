import Ember from 'ember';

export default Ember.Controller.extend ({
  actions: {
    addTask: function() {
      let title = this.get('title');
      let description = this.get('description');
      let date = this.get('date');

      //Create new task
      // let newTask = this.store.createRecord();
      
    }
  }
});
