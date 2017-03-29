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
      var drink_pics = drink.fields['Picture'];
      var drink_info = '';


      if (drink_name) {
        drink_info += '<h3><center><div class="panel-footer">' + ingredients + '</div></center></h3>';
        drink_info +=`<div class="panel panel-default>`;
            drink_info +=`<div class="panel-body">`;
               if (drink_pics) {
                   $.each(drink_pics, function(i, pic){
                     drink_info +=`<center><a href="detail.html?drinkID=${drink.id}"><img src="${pic.url}"></a></center>`;
                   });
               }
            drink_info +=`</div>`;
        drink_info +=`</div>`;

      }
      $('.drink-detail').append(drink_info);
}


$.get(url_one_drink(), renderOneDrink);

var submitURL = 'https://api.airtable.com/v0/appme2bUqi2ONfNq6/Menu/ api_key=key1I6vl8hY7lZc7U';
var form = $('#my-form');
form.on('submit', function(e){
   e.preventDefault();
  var drink =$(this).find('input[name=drink]').val();
  var name = $(this).find('input[name=count-of-people]').val();
   var address = $(this).find('input[name=address]').val();
   var city = $(this).find('input[name=city]').val();
   var company = $(this).find('input[name=company]').val();
   var time = $(this).find('input[name=time]').val();
   var phoneNumber = $(this).find('input[name=phoneNumber]').val();
   var name = $(this).find('input[name=name]').val();
   var email = $(this).find('input[name=email]').val();
   var questionsAndConcerns = $(this).find('input[name=questionsAnd Concerns]').val();
   var name = $(this).find('input[name=name]').val();
   var date = $(this).find('input[name=date]').val();

   if (!name) {
      $(this).find('input[name=name]').addClass("error");
     return;
   }
   if (!address) {
     alert('no address');
     return;
   }
  if (!phone){
    alert('phone number missing');
   return;
  }

  if (!email){
    alert('email needed');
   return;
  }


   var data = {
     'fields': {
       'Name': name,
       'Home Address': address,
       'Gender': gender,
       'memo': memo,
    }
   };
  $.post(submitURL, data, function(data){
     $('#submit-message').text('Submitted!!!!');
     console.log('success',data)
  });
});
