//check todos by click
$('ul').on('click', 'li', function() {
  var li = $(this);
  li.toggleClass('completed');
});

//click X to delete todo
$('ul').on('click', 'span', function(event){
  var li = $(this).parent();
  li.fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});


//select input
$('input[type="text"]').keypress(function (){
  var enterKey = 13;
  if(event.which === enterKey) {
    //new todo Text
    var todoText = $(this).val();
    //add to ul
    $('ul').append(`
      <li> <span>X</span> ${todoText} </li>
    `);
    
    //clear text
    $(this).val('');
  }
});