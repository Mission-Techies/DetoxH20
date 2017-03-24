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
  return 'https://api.airtable.com/v0/appme2bUqi2ONfNq6/Menu/' + url_id +'?api_key=key1I6vl8hY7lZc7U';
  console.log(url_id)
}

// This runs on the detail view
function renderOneDrink(drink) {
      var drink_name = drink.fields['Drink'];
      // var drink_pics = drink.fields['Pic'];
      var drink_info = '';
      if (drink_name) {
        drink_info += drinks.fields['Drinks'];
        console.log('4');

      }
      $('.drink-detail').append(drink_info);
}

$.get(url_one_drink(), renderOneDrink);
