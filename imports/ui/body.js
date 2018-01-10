import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
 
import './body.html';

Template.bodyTemplate.events({
  'submit #newInfoForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;

    const infoData = {
      name: target.name.value,
      phone: target.phone.value,
      email: target.email.value,
      dateOfBirth: target.dateOfBirth.value,
      createdAt: new Date()
    };
 
    // Insert a task into the collection
    Tasks.insert(infoData);
 
    // Clear form
     target.name.value = '';
     target.phone.value = '';
     target.email.value = '';
     target.dateOfBirth.value ='';
  },
});


 // Get data from mongo db table
Template.itemsListTemlate.helpers({
  getAllItems() {

    return Tasks.find({});
  },
});


