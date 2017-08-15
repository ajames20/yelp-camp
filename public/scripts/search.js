$('#campground-search').on('input', function () {
  var search = $(this).serialize();

  if (search === "search=") {
    search = "all";
  }
  $.get('/campgrounds?' + search, (data) => {
    $('#campground-grid').html('');
    data.forEach((campground) => {
      $('#campground-grid').append(`
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="thumbnail">
          <div class="thumbnail-image" style="background: url('${campground.image}') no-repeat center; background-size: cover; max-height: 250px;"></div>
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

// timeout to remove flash message from the DOM
setTimeout(() => {
  $(".message").hide();
}, 3000);


// main image loaded ?
$(window).on('load', () => {
  // hide/remove the loading image
  $('.loader').hide();
});