fetch('public/data/MOCK_DATA.json')
  .then(response => response.json()
  )
  .then(data => {
    data.map(customer => {
      // Building table
      $('.customers--list tbody').append($('<tr>').addClass('customer--list-row')
        .attr('data-id', customer.id)
        .append($('<td>').addClass('customer--list-item').text(`${customer.first_name} ${customer.last_name}`)
          .append($('<span>').addClass('arrow-icon')))
        .append($('<td>').addClass('customer--list-item').text(customer.phone))
        .append($('<td>').addClass('customer--list-item').text(customer.age))
      )
        .append($('<tr>').addClass('customer--details')
          .append($('<span>')
            .append($('<span>').addClass(' label').text(`Nr telefonu:`))
            .append($('<span>').addClass('customer--list-item ').text(customer.phone))
          )
          .append($('<span>')
            .append($('<span>').addClass(' label').text(`Wiek:`))
            .append($('<span>').addClass('customer--list-item ').text(customer.age))
          )
        )
    });
    // Events
    $('.arrow-icon').click(function () {
      $(this).toggleClass('arrow-icon__active');
      const targetId = $(this).parent().parent().attr('data-id') - 1;
      $('.customer--details').eq(targetId).toggleClass('collapsed');
    });
  })
  .catch(err => {
    $('.customers--list thead').text('Wystąpił problem z ładowaniem danych. Spróbuj ponownie.');
    console.log(err)
  });