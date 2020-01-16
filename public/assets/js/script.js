// const updateActivities = function () {
//   // make an axios call to GET /api/activities
//   axios.get('/api/activities')
//     .then((response) => {
//       const $table = $('#activities-table tbody');
//       $table.empty();
//       // loop over each activity
//       response.data.forEach((activity) => {
//         // render the activity to the table as a <tr>
//         console.log(activity);
//         $table.append(`<tr><td>${activity.name}</td><td>${activity.measurement}</td><td>${activity.unit}</td><td><button data-id="${activity.id}" class="btn btn-danger delete-button">Delete</button></td></tr>`);
//       });
//     });
// };

// updateActivities();

// $(document).on('click', '.delete-button', function (event) {
//   const id = $(this).data('id');
//   axios.delete(`/api/activities/${id}`)
//     .then((response) => {
//       updateActivities();
//     });
// });

$('#create-form').on('submit', (event) => {
  event.preventDefault();
  const activity = {
    name: $('#name').val(),
    bodypart: $('#bodypart').val(),
    unit: $('#unit').val(),
    reps: $('#reps').val(),
  };

  axios.post('/api/activities', activity)
    .then((response) => {
      window.location = '/activities';
    });

  console.log(activity);
});
