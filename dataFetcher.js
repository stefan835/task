fetch('public/data/MOCK_DATA.json')
  .then(response => response.json()
  )
  .then(data => {
    data.map(customer=>{
      $('.customers--list tbody').append($('<tr>').addClass('customer--list-row')
        .append($('<td>').addClass('customer--list-item').text(customer.id))
        .append($('<td>').addClass('customer--list-item').text(`${customer.first_name} ${customer.last_name}`))
        .append($('<td>').addClass('customer--list-item').text(customer.phone))
        .append($('<td>').addClass('customer--list-item').text(customer.age)
        ))
    });
  })
  .catch(err => {
    $('.customers--list tbody').text('Wystąpił problem z ładowaniem danych. Spróbuj ponownie.');
    console.log(err)
  });