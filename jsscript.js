  // Assuming $dc is your app's main controller object
(function (global) {
  var dc = {};

  // URL to get all categories
  var allCategoriesUrl = "https://your-api-url.com/categories.json"; // <-- Update with your real URL

  // Function to send HTTP GET requests (assumes ajax-utils.js or similar)
  dc.loadRandomCategoryShortName = function () {
    $ajaxUtils.sendGetRequest(
      allCategoriesUrl,
      function (categories) {
        var randomCategory = chooseRandomCategory(categories);
        var shortName = randomCategory.short_name;

        console.log("Random category chosen: " + shortName); // For debugging
        dc.loadMenuItems(shortName);
      },
      true // JSON response
    );
  };

  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  // Your existing loadMenuItems function should already exist, e.g.
  dc.loadMenuItems = function (categoryShort) {
    var url = "https://your-api-url.com/menu_items.json?category=" + categoryShort;
    $ajaxUtils.sendGetRequest(url, function (data) {
      // Render menu items here (replace with your existing rendering logic)
      console.log("Loaded menu items for category: " + categoryShort);
    });
  };

  // Expose to global
  global.$dc = dc;

})(window);