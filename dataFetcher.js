fetch('public/data/MOCK_DATA.json')
  .then(response => response.json()
  )
  .then(data => {
    console.log(data)
    data.map(customer=>{
      $('.customers--list tbody').append($('<tr>')
        .append($('<td>').addClass('customer--list-item').text(customer.id))
        .append($('<td>').addClass('customer--list-item').text(`${customer.first_name} ${customer.last_name}`))
        .append($('<td>').addClass('customer--list-item').text(customer.phone))
        .append($('<td>').addClass('customer--list-item').text(customer.age)
        ))
    });

  })
  .catch(err => console.log(err));