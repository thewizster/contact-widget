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


if(!String.capitalise) {
  String.capitalise = function (str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
  }
}


var WidgetContacts = (function () {
  var defaults = {
    css: {
      classContact: 'contacts-row',
      className: 'contacts-search-name',
      classId: 'contacts-search-id',
      classPhone: 'contacts-search-phone',
      classEmail: 'contacts-search-email',
      classEmailInner: 'email',
      classEmailActual: 'value',
      classEmailUrl: 'url',
      classHometown: 'contacts-search-hometown',
      classList: 'contacts-list-alpha',
      classLetter: 'contacts-search-alpha-letter'
    },
    img: {
      iconPerson: '../src/img/icon-person.png'
    }
  };
  
  var mainContainer,
      sections = [ ],
      contacts = [ ],
      options;

  /* Public interface */
  var add = function (details) {
    var contact = getContactById_(details.id);

    if(contact) {
      var order = contact.getOrderChar();
      contact.setDetails(details);

      remove_(contact, order);
      console.log("DEBUG", "edited contact: id:", details.id);
    } else {
      contact = new Contact(details);
      contacts.push(contact);
      console.log("DEBUG", "added contact: id:", details.id);
    }

    var node = render_(contact),
        order = contact.getOrderChar(),
        section = sections[order];

    if(!section)
      section = createSection_(order);
    
    section.appendChild(node);
    contact.setNode(node);
  };

  var remove = function (id) {
    var contact = getContactById_(id);

    if(!contact) {
      console.log("DEBUG", "contact non existent: id:", id);
      return;
    }

    /* Remove from internal container and UI. */
    remove_(contact);
    contacts.splice(contacts.indexOf(contact), 1);
    
    console.log("DEBUG", "removed contact: id:", id);
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

  var render_ = function (contact) {
    var container = document.createElement('div'),
        node, n1, n2, n3;

    /* Contact container */
    container.id = contact.getId();
    container.className = options.css.classContact;

    /* Icon */
    node = document.createElement('img');
    node.src = options.img.iconPerson;
    container.appendChild(node);

    /* Name */
    node = document.createElement('span');
    node.className = options.css.className;
    node.innerHTML = contact.getName();
    container.appendChild(node);

    node = document.createElement('br');
    container.appendChild(node);

    /* Id */
    node = document.createElement('span');
    node.className = options.css.classId;
    node.innerHTML = contact.getId();
    container.appendChild(node);

    node = document.createElement('br');
    container.appendChild(node);

    /* Phone */
    node = document.createElement('span');
    node.className = options.css.classPhone;
    node.innerHTML = contact.getPhone();
    container.appendChild(node);

    node = document.createElement('br');
    container.appendChild(node);

    /* Email */
    node = document.createElement('span');
    node.className = options.css.classEmail;

    n1 = document.createElement('span');
    n1.className = options.css.classEmailInner;

    n2 = document.createElement('span');
    n2.className = options.css.classEmailActual;

    n3 = document.createElement('a');
    n3.className = options.css.classEmailUrl;
    n3.href = 'mailto: ' + contact.getEmail();
    n3.target = '_blank';
    n3.innerHTML = contact.getEmail();

    n2.appendChild(n3);
    n1.appendChild(n2);
    node.appendChild(n1);
    container.appendChild(node);

    node = document.createElement('br');
    container.appendChild(node);

    /* Hometown */
    node = document.createElement('span');
    node.className = options.css.classHometown;
    node.innerHTML = contact.getHometown();
    container.appendChild(node);

    node = document.createElement('br');
    container.appendChild(node);

    return container;
  };

  var merge_objects_ = function (obj, def) {
    for(var key in def) {
      if(typeof key == 'object') {
        if(!(key in obj) || typeof obj[key] != 'object')
          obj[key] = { };
        
        merge_objects_(obj[key], def[key]);
      } else if(!obj.hasOwnProperty(key))
        obj[key] = def[key];
    }
  };

  var createSection_ = function (order) {
    var section = document.createElement('div'),
        i = 'Z',
        ay = 'A'.charCodeAt(0),
        node,
        target;

    section.id = 'contacts-list-' + (order == ' ' ? 'space' : order);
    section.className = 'contacts-list-alpha';

    node = document.createElement('div');
    node.innerHTML = order == ' ' ? '-' : order;
    node.className = options.css.classLetter;
    section.appendChild(node);
    
    while(i >= ' ') {
      i = (i == ay) ? ' ' : String.fromCharCode(i.charCodeAt(0) - 1);

      if(i < order)
        break;
      else if(i in sections)
        target = sections[i];
    }

    if(target) {
      target.parentNode.insertBefore(section, target);
    } else
      mainContainer.appendChild(section);
    
    return (sections[order] = section);
  };

  var remove_ = function (contact, order) {
    /* Ensure a node exists; may not exist */
    if(contact.getNode())
      contact.getNode().remove();

    if(!order)
      order = contact.getOrderChar();

    if(sections[order].children.length == 1) {
      sections[order].remove();
      delete sections[order];
    }
  };

  
  /* Class: Contact */
  var Contact = function (details) {
    this.id = details.id;

    this.setDetails(details);
  };

  Contact.prototype = {
    id: null,
    nameFirst: null,
    nameLast: null,
    phone: null,
    email: null,
    hometown: null,
    node: null,

    setDetails: function (details)
    {
      this.phone = details.phone;
      this.email = details.email;
      this.hometown = details.hometown;
      this.nameLast = null;

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
      
      this.nameFirst = String.capitalise(names[0]);

      if(names.length > 1)
        this.nameLast = String.capitalise(names[1]);
    },
    
    setNode: function (node)
    { this.node = node; },
    
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
    { return this.nameLast ? this.nameLast.charAt(0).toUpperCase() : ' '; },
    
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
    instantiate: function (opts) {
      if(mainContainer)
        throw "Widget already initialised";

      /* Merge default options with given options. */
      merge_objects_(options = opts, defaults);

      mainContainer = document.getElementById(opts.container);
      if(!mainContainer)
        throw "Contacts container not found";
      
      return {
        add: add,
        remove: remove
      };
    }
  };
  
} )();