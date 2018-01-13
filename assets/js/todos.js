//check todos by click
$('li').click(function() {
  var li = $(this);
  li.toggleClass('completed');
});