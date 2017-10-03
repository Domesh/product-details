import { Template } from 'meteor/templating';
import { Notes1 } from  '../lib/collections.js';
import './product.html';



Template.body.helpers({
/*  notes:[
    {items: 'my city 1'},
    {items: 'my city 2'},
    {items: 'my city 3'}
  ]*/

notes1(){
  return Notes1.find({});
}

});

Template.add1.events({
  'submit .add-form': function(){
    event.preventDefault();

  // get input value

  const target = event.target;
  const items = target.items.value;

  //insert note into collections
  Notes1.insert({
    items,
    createdAt: new Date()
  });

  // clear form

  target.items.value = "";


  //close modal

  $('#addModal1').modal('close');
    return false;
  }
});


Template.note1.events({
  'click .delete-note':function(){
    Notes1.remove(this._id);
    return false;
  }
});
