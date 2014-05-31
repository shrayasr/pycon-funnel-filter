# Pycon-Funnel-Filter

Drag this <a href='javascript:var filter = $(function() { sectionFiltersSelect="<br/>Filter: <select id=\"section-filter\"><option value=\"all\">All</option>"; sections = $("ol li"); sections.each(function(index, element) { section = $(this).text(); sectionTitle = section.split("—")[0].trim(); sectionFiltersSelect += "<option value=\""+sectionTitle+"\">"+sectionTitle+"</option>"; }); sectionFiltersSelect += "</select>"; ALL_LISTINGS = $("table.listing tbody.link"); alert("Filter applied!"); $("h2#sessions").after(sectionFiltersSelect); $("#section-filter").change(function(){ choice = $(this).attr("value").trim(); filteredTbodys = []; if (choice.toUpperCase() == "ALL") { filteredTbodys = ALL_LISTINGS; } else { ALL_LISTINGS.each(function(index, element) { listingSection = $(this).find("tr:eq(1)").find("td:eq(3)").text(); if (listingSection.trim().toUpperCase() == choice.trim().toUpperCase()) { filteredTbodys.push($(this)); } }); } $("table.listing tbody.link").remove(); $("table.listing").append(filteredTbodys); }); });
'>Bookmarklet</a> to your bookmarks bar and run it on the Pycon Funnel Page.

It will put a dropdown with the different sections just above the list of sections

@nischalhp wanted to do this, so kudos to him for the idea. I just quickly hacked it up in JS.