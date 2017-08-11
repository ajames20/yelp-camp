$('#campground-search').on('input', function () {
  var search = $(this).serialize();

  if (search === "search=") {
    search = "all";
  }
  $.get('/campgrounds?' + search, (data) => {
    $('#campground-grid').html('');
    data.forEach((campground) => {
      $('#campground-grid').append(`
        <div class="col-md-3 col-sm-6">
          <div class="thumbnail">
            <img class="max-image" src="${campground.image}">
            <div class="caption">
              <h4>${campground.name}</h4>
            </div>
            <p>
              <a href="/campgrounds/${campground._id}" class="btn btn-primary">More Info</a>
            </p>
          </div>
        </div>
      `);
    });
  });
});

setTimeout(() => {
  $(".message").hide();
}, 2550);