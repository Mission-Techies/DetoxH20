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
        // detoxH20HTML += `<img src="${Pictures.url}">`;
        detoxH20HTML += `<a href="detail.html?drinkID=${customer.id}"><img src="${Pictures.url}"></a>`;
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


// ---------------------------------------------------
// var all_murals= 'https://api.airtable.com/v0/appC2gzawbLgSvOeE/Art?api_key=' + api_key;
//
// // All details
// function renderRecords(data) {
//     $(data.records).each(function(index, mural) {
//       var mural_name = mural.fields['Name/Description'];
//       var mural_where = mural.fields['Where'];
//       var mural_pics = mural.fields['Pic'];
//       var mural_info = '';
//       if (mural_name) {
//         mural_info +=`<div class="media">`;
//           mural_info +=`<div class="media-left">`;
//           if (mural_pics) {
//             $.each(mural_pics, function(i, pic){
//               mural_info +=`<a href="detail.html?muralID=${mural.id}"><img src="${pic.url}"></a>`;
//             });
//           }
//           mural_info +=`</div>`;
//         mural_info += `<div class="media-body">${mural_name}</div>`;
//         mural_info +=`</div>`;
//       }
//       $('.murals').append(mural_info);
//     });
// }
//
// $.get(all_murals, renderRecords);
