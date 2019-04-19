$(document).on('click', '#clear-btn', function(event) {
    event.preventDefault();
    $.post('/trash');
    location.reload();
  });

  $(document).on('click', '.eat-btn', function(event)  {
    event.preventDefault();
    
    $.post("/burgers/" + $(this).data('id'));
    location.reload();
  })

  $(document).on('click', '.del-btn', function(event)  {
      event.preventDefault();
      $.post("/clear/" + $(this).data('id'));

      location.reload();
  })

