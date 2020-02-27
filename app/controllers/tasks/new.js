import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      addTask() {
        let title = this.get('title');
        let description = this.get('description');
        let date = this.get('date');
  
        //Create new task
        let newTask = this.store.createRecord('task', {
          title,
          description,
          date: new Date(date)
        });
  
        //Save to Firebase
        newTask.save();
  
        //Clear the form contents after save
        this.setProperties({
          title: '',
          description: '',
          date: ''
        });

        console.log('Yeah!');
      }
    }
  });

