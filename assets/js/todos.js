//check todos by click
$('li').click(function() {
  var li = $(this);
  li.toggleClass('completed');
});

//click X to delete todo
$('ul span').click(function(event){
  var li = $(this).parent();
  li.fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});