$(document).ready(function () {
  var timesClicked = 0;
  $('.generator').on('click', function () {
    $('.container').text(timesClicked++);
    $('.generator').append('<div class="container">' + '<div class="deleteContainer">' + '<button class="delete">Delete</button>' + '</div>' + '<div class="colorContainer">' + '<button class="colorChange">Change Color</button>' + '</div>' + '</div>');
  });

  $('.deleteContainer').on('click', '.delete', function () {
    $(this).closest('.deleteContainer').remove();
  });

  $('.colorContainer').on('click', '.colorChange', function () {
    $('body').css('background-color', 'red');
  });
});
