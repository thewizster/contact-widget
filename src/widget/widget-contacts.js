/** widget-contacts.js --- Widget for displaying and managing a list of
 * contacts.
 *
 * Copyright (C) 2014 Kar Services
 *
 * Author: Miguel Guedes <miguel@miguelguedes.org>
 *
 * Comments:
 *
 * 
 * */


var WidgetContacts = (function () {
  var container,                /* Contacts container. */
      contacts = [ ];

  /* Public interface */
  var add = function (details) {
    var contact = getContactById_(details.id);

    if(contact) {
      contact.set(details);
      return;
    }

    contacts.push(new Contact(details));
  };

  var remove = function (id) {
  };


  /* Private interface */
  var getContactById_ = function (id) {
    var result;
    
    contacts.some(function (contact) {
      if(contact.getId() == id) {
        result = contact;
        return true;
      }
    } );

    return result;
  };


  /* Class: Contact */
  var Contact = function (details) {
    this.id = details.id;
    this.phone = details.phone;
    this.email = details.email;
    this.hometown = details.hometown;

    var names = details.name.trim().split(' ');

    /* Remove empty elements just to be sure. */
    for(var i = 0; i < names.length; ) {
      if(!names[i])
        names.splice(i, 1);
      else
        ++i;
    }

    if(!names.length)
      throw "Invalid name specified";
    
    this.nameFirst = names[0];

    if(names.length > 1)
      this.nameLast = names[1];
  };

  Contact.prototype = {
    id: null,
    nameFirst: null,
    nameLast: null,
    phone: null,
    email: null,
    hometown: null,
    node: null,
    
    getId: function ()
    { return this.id; },

    getName: function ()
    {
      return this.nameLast
        ? this.nameFirst + ' ' + this.nameLast
        : this.nameFirst;
    },
    
    getNameFirst: function ()
    { return this.nameFirst; },

    getNameLast: function ()
    { return this.nameLast; },

    getOrderChar: function ()
    { return this.lastName ? this.lastName.charAt(0).toUpperCase() : ' '; },
    
    getPhone: function ()
    { return this.phone; },

    getEmail: function ()
    { return this.email; },

    getHometown: function ()
    { return this.hometown; },

    getNode: function ()
    { return this.node; }
  };


  /* Module */
  return {
    instantiate: function (options) {
      if(container)
        throw "Widget already initialised";

      container = document.getElementById(options.container);
      if(!container)
        throw "Contacts container not found";
      
      return {
        add: add,
        remove: remove
      };
    }
  };
  
} )();