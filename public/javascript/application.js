$(function() {
  var contactHandlers = {
    $list: $("#contact-list"),
    form: $('#ajax-contact'),
    load: function() {
      contactHandlers.$list.children().remove;
      $.getJSON("/contacts", contactHandlers.process);
    },
    process: function(contacts) {
      $.each(contacts, contactHandlers.iterator);
    },
    iterator: function(idx, contact) {
    $('<li>').addClass( "contact list-group-item" ).append(contact.firstname + " " + contact.lastname).data('contact', contact).appendTo(contactHandlers.$list);
    },
    add: function(evt) {
      evt.preventDefault();
      $.ajax({
        type: 'POST',
        url: contactHandlers.form.attr('action'),
        data: contactHandlers.form.serialize(),
        dataType: 'json',
        success: contactHandlers.added
      });
    },
    added: function(data) {
      contactHandlers.iterator(0,data.contact);
      contactHandlers.form[0].reset();
      $('#modal-contact').modal('hide');
    }
  };

  //Loads all contacts
  $("#load_contacts").on('click', contactHandlers.load);

  //Handles the add contact form submission
  contactHandlers.form.on('submit', contactHandlers.add);

  contactHandlers.$list.on('click', ".contact", function(evt) {
    // Grab the .contact that was clicked
    var $contact = $(evt.target);
    $(".active").toggleClass("active");
    $($contact).toggleClass("active");
    var contactData = $contact.data('contact');
    console.log(contactData);
    $(".welcome").hide();
    $("#contact-full-name").text(contactData.firstname + " " + contactData.lastname);
  });
});
