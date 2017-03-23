var detoxH20_data_url = 'https://api.airtable.com/v0/appme2bUqi2ONfNq6/Menu?api_key=key1I6vl8hY7lZc7U';
var detoxH20HTML = '';
var detoxH20Div = $('.detoxH20');
var renderdetoxH20DivData = function (data) {
  data.records.forEach(function(customer) {
    if(customer.fields['Customer name']) {
      detoxH20HTML  += '<h2>' + customer.fields['Customer name'] + '</h2>';
      detoxH20HTML  += '<p>' + customer.fields['Orders'] + '</p>';
      if(customer.fields['Notes']){
        detoxH20HTML  += '<p>' + customer.fields['Notes'] + '</p>';
      }
      detoxH20HTML  += '<p>' + customer.fields['Paid?'] + '</p>';
      detoxH20HTML += '<hr />';
    }
  });
  detoxH20Div.html(detoxH20HTML);
};

//
$.getJSON(detoxH20_data_url, renderdetoxH20DivData);
