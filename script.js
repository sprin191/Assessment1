$(document).ready(function () {
  var timesClicked = 1;
  $('.generator').on('click', function () {
    $('.container').text(timesClicked++);
    $('.generator').after('<div class="container">' + '<div class="deleteContainer">' + '<button class="delete">Delete</button>' + '</div>' + '<div class="colorContainer">' + '<button class="colorChange">Change Color</button>' + '</div>' + '</div>');
    $('.deleteContainer').on('click', '.delete', function () {
      $(this).parent().remove();
    });

    $('.colorContainer').on('click', '.colorChange', function () {
      $(this).parent().parent().parent().toggleClass('diffColor');
    });
  });

});
