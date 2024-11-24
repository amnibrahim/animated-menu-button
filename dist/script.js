$('.mainCircle').click(function() {

  $('.leftSide').toggleClass('swipeToRight');

  $('.rightSide').toggleClass('swipeToLeft');

  $('.lineTop').toggleClass('down');

  $('.lineBottom').toggleClass('up');

});