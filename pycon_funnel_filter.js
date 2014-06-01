(function() {

  var sectionFiltersSelect="<br/>Filter: <select id=\"section-filter\"><option value=\"all\">All</option>";

  var sections = $("ol li");
  sections.each(function(index, element) {

    var section = $(this).text();
    var sectionTitle = section.split("—")[0].trim();
    sectionFiltersSelect += "<option value=\""+sectionTitle+"\">"+sectionTitle+"</option>";
  });

  sectionFiltersSelect += "</select>";

  var ALL_LISTINGS = $("table.listing tbody.link");

  $("h2#sessions").after(sectionFiltersSelect);

  $("#section-filter").change(function(){

    var choice = $(this).attr("value").trim();
    var filteredTbodys = [];

    if (choice.toUpperCase() == "ALL") {
      filteredTbodys = ALL_LISTINGS;
    } else {

      ALL_LISTINGS.each(function(index, element) {

        var listingSection = $(this).find("tr:eq(1)").find("td:eq(3)").text();

        if (listingSection.trim().toUpperCase() == choice.trim().toUpperCase()) {
          filteredTbodys.push($(this));
        }

      });
    }

    $("table.listing tbody.link").remove();
    $("table.listing").append(filteredTbodys);

  });
})();
