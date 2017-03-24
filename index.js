var detoxH20_data_url = 'https://api.airtable.com/v0/appme2bUqi2ONfNq6/Menu?api_key=key1I6vl8hY7lZc7U';
var detoxH20HTML = '';
var detoxH20Div = $('.detoxH20');
var renderdetoxH20DivData = function (data) {
  data.records.forEach(function(customer) {
    var detoxH20Pictures = customer.fields['Picture'];
    if(customer.fields['Drinks']) {
      detoxH20HTML += '<div class="drink">'
      detoxH20HTML  += '<h2>' + customer.fields['Drinks'] + '</h2>';

      $.each(detoxH20Pictures, function(i, Pictures){
      detoxH20HTML += "</br>";
        detoxH20HTML += `<img src="${Pictures.url}">`;
      });

      detoxH20HTML  += '<p>' + customer.fields['Description'] + '</p>';
      // if(customer.fields['Ingredients']){
      //   detoxH20HTML  += '<p>Ingredients: ' + customer.fields['Ingredients'] + '</p>';
      // }
      // detoxH20HTML  += '<p> How many in stock: ' + customer.fields['Stock'] + '</p>';
      detoxH20HTML += '<hr /></div>';
    }
  });
  detoxH20Div.html(detoxH20HTML);
};

//
$.getJSON(detoxH20_data_url, renderdetoxH20DivData);
