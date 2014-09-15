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
  };
}


var WidgetContacts = (function () {
  var defaults = {
    css: {
      classContact: 'contacts-row',
      className: 'contacts-search-name',
      classId: 'contacts-search-id',
      classPhone: 'contacts-search-phone',
      classEmail: 'contacts-search-email',
      classHometown: 'contacts-search-hometown',
      classList: 'contacts-list-alpha',
      classLetter: 'contacts-search-alpha-letter'
    },
    img: {
      iconPerson: 'img/icon-person.png'
    }
  };
  
  var mainContainer,
      sections = [ ],
      contacts = [ ],
      options;

  /* Public interface */
  var add = function (details) {
    /* Ensure expected data is correct and complete. */
    if(!("id" in details)                         /* id */
       || details.id === null
       || !("name" in details)                    /* name */
       || typeof details.name !== "string"
       || !(details.name = details.name.trim())
       || !("email" in details)                   /* email */
       || typeof details.email !== "string"
       || !(details.email = details.email.trim())
       || !("phone" in details)                   /* phone */
       || typeof details.phone !== "string"
       || !(details.phone = details.phone.trim())
       || !("hometown" in details)                /* hometown */
       || typeof details.hometown !== "string"
       || !(details.hometown = details.hometown.trim())) {
      return false;
    }

    
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

    contact.setNode(node);
    insert_(section, contact);
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
        nsec = document.createElement('div'),
        node, ntemp;

    /* Contact container */
    container.id = contact.getId();
    container.className = options.css.classContact;

    /* Icon */
    node = document.createElement('img');
    node.src = options.img.iconPerson;
    nsec.appendChild(node);
    container.appendChild(nsec);

    nsec = document.createElement('div');
    
    /* Name */
    node = document.createElement('span');
    node.className = options.css.className;
    node.innerHTML = contact.getName();
    nsec.appendChild(node);

    /* Id */
    node = document.createElement('span');
    node.className = options.css.classId;
    node.innerHTML = contact.getId();
    nsec.appendChild(node);

    /* Phone */
    node = document.createElement('span');
    node.className = options.css.classPhone;
    node.innerHTML = contact.getPhone();
    nsec.appendChild(node);

    /* Email */
    node = document.createElement('span');
    node.className = options.css.classEmail;

    ntemp = document.createElement('a');
    ntemp.href = 'mailto: ' + contact.getEmail();
    ntemp.target = '_blank';
    ntemp.innerHTML = contact.getEmail();

    node.appendChild(ntemp);
    nsec.appendChild(node);

    /* Hometown */
    node = document.createElement('span');
    node.className = options.css.classHometown;
    node.innerHTML = contact.getHometown();
    nsec.appendChild(node);

    container.appendChild(nsec);
    
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

  var insert_ = function (section, contact) {
    var position;

    for(var i = 1; i < section.children.length; ++i) {
      var c = getContactById_(section.children[i].getElementsByClassName(
        options.css.classId)[0].innerHTML),
          ln;

      if(!c) {
        console.log("DEBUG", "failed to retrive contact descriptor");
      } else if((ln = c.getLastName())) {
        if(ln > contact.getLastName()) {
          position = section.children[i];
          break;
        }
      }
    }

    if(position)
      section.insertBefore(contact.getNode(), position);
    else
      section.appendChild(contact.getNode());
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
    
    getFirstName: function ()
    { return this.nameFirst; },

    getLastName: function ()
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