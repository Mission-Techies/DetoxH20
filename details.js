/*global $*/

$.urlParam = function(name){
  console.log('1');
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
    console.log('1')
	}
	return false;
  console.log('2')
}

var url_one_drink = function() {
  var url_id = $.urlParam('drinkID');
  return 'curl https://api.airtable.com/v0/appme2bUqi2ONfNq6/Menu' + url_id +'?api_key=key1I6vl8hY7lZc7U';
  console.log(url_id)
}

// This runs on the detail view
function renderOneDrink(drink) {
      var drink_name = drink.fields['Name/Description'];
      var drink_pics = drink.fields['Pic'];
      var drink_info = '';
      // if (mural_name) {
      //   mural_info +=`<div class="panel panel-default">`;
      //     mural_info +=`<div class="panel-body">`;
        //   if (drink_pics) {
        //     $.each(mural_pics, function(i, pic){
        //       mural_info +=`<a href="detail.html?muralID=${mural.id}"><img src="${pic.url}"></a>`;
        //     });
        //   }
        //   mural_info +=`</div>`;
        // mural_info += `<div class="panel-footer">Name: ${mural_name}<br>Location: ${mural_where}</div>`;
        drink_info +=`</div>`;
      }
      $('.drink-detail').append(mural_info);
}

$.get(url_one_drink(), renderOneDrink);
