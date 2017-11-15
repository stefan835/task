fetch('public/data/MOCK_DATA.json')
  .then(response => response.json()
  )
  .then(data => {
      // Building table
      const drawTable = (data) => {
        $('.customers--list tbody').empty();
        data.map(customer => {
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
      };
      drawTable(data);

      //Sorting
      const sortByNumber = (button, category) => {
        if (button.attr('data-sorted') !== 'sorted-ascending') {
          drawTable(data.sort(function (a, b) {
            return a[category] - b[category];
          }));
          button.attr('data-sorted', 'sorted-ascending')
        }
        else {
          drawTable(data.sort(function (a, b) {
            return b[category] - a[category];
          }));
          button.attr('data-sorted', 'sorted-descending')
        }
      };
      const sortByString = (button, category) => {
        if (button.attr('data-sorted') !== 'sorted-ascending') {
          button.attr('data-sorted', 'sorted-ascending');
          drawTable(data.sort(function (a, b) {
              const nameA = a[category].toUpperCase();
              const nameB = b[category].toUpperCase();
              return nameA < nameB ? -1 : 1;
            })
          )
        }
        else {
          button.attr('data-sorted', 'sorted-descending');
          drawTable(data.sort(function (a, b) {
              const nameA = a[category].toUpperCase();
              const nameB = b[category].toUpperCase();
              return nameA > nameB ? -1 : 1;
            })
          )
        }
      };

      // Events
      $('.arrow-icon').click(function () {
        $(this).toggleClass('arrow-icon__active');
        const targetId = $(this).parent().parent().attr('data-id') - 1;
        console.log(targetId);
        $('.customer--details').eq(targetId).toggleClass('collapsed');
      });

      $('.sort-age').click(function () {
        sortByNumber($(this), 'age')
      });

      $('.sort-name').click(function () {
        sortByString($(this), 'first_name')
      })
    }
  )
  .catch(err => {
    $('.customers--list thead').text('Wystąpił problem z ładowaniem danych. Spróbuj ponownie.');
    console.log(err)
  });