var filterMenuVisible = false;

function toggleSlideFilterMenu() {
  if (!filterMenuVisible) {
    $('#filter_menu').animate({marginLeft: '0px'}, 500);
    $('#filter_background').css('display', 'block');
    $('#filter_background').css('background-color', 'rgba(0,0,0,.42)');
    // TODO: not working :(
    // $('#filter_background').animate({backgroundColor: 
    // 'rgba(0,0,0,.42)'}, 500);
    filterMenuVisible = true;
  } else {
    $('#filter_menu').animate({marginLeft: '-200px'}, 500);
    $('#filter_background').css('display', 'none');
    filterMenuVisible = false;
  }
}
