/* global $ */
'use strict';

function handleCats() {
  $('.thumbnail').on( 'click', event => {

    const targetCat = $(event.currentTarget).find('img').attr('src');

    const otherCats = $(event.currentTarget).find('img').attr('alt');

    $('.hero img').attr('src', targetCat).attr('alt', otherCats);
    

  });
}

$(handleCats);
 