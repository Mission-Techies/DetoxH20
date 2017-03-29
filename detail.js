/*global $*/



$.urlParam = function(name){
  console.log('1.');
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
    console.log('2')
	  return results[1] || 0;
	}
  console.log('3')
	return false;
}

var url_one_drink = function() {
  var url_id = $.urlParam('drinkID');

  return 'https://api.airtable.com/v0/appme2bUqi2ONfNq6/Menu/' + url_id +'?api_key=' + "key1I6vl8hY7lZc7U";

}

// This runs on the detail view
function renderOneDrink(drink) {
      var drink_name = drink.fields['Drinks'];
      var ingredients = drink.fields['Ingredients'];
      // var drink_pics = drink.fields['Pic'];
      var drink_info = '';


      if (drink_name) {
        drink_info += '<div>';
          drink_info += ingredients;
        drink_info += '</div>';
        // $.each(drink_name, function(i, pic){
        //   drink_info += ingredients;
        // });

      }
      $('.drink-detail').append(drink_info);
}


$.get(url_one_drink(), renderOneDrink);
