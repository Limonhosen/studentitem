
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import { Mongo } from 'meteor/mongo';

Informations = new Meteor.Collection('informations');


if (Meteor.isClient) {

  Template.infoTemplate.helpers({
      returngetAllItems:function(){
        return Informations.find({})
      }
  })

    Template.infoTemplate.events({
      'click .Submit':function(){

        var insertData = {
            name: $(".nameField").val(),
            email: $(".emailField").val(),
            phone: $(".phoneNumberField").val(),
            dateOfBirth: $(".dateOfBirthField").val(),
        }

        console.log("insertData", insertData);

        
        Informations.insert(insertData);

     
      }
  })
  
}
