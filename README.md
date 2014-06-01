# PyCon-Funnel-Filter

Create a bookmark with the following javascript block
 
 
```javascript
javascript:v!function(){var t,e='<br/>Filter: <select id="section-filter"><option value="all">All</option>',i=$("ol li");i.each(function(){var t=$(this).text(),i=t.split("—")[0].trim();e+='<option value="'+i+'">'+i+"</option>"}),e+="</select>",t=$("table.listing tbody.link"),alert("Filter applied!"),$("h2#sessions").after(e),$("#section-filter").change(function(){var e=$(this).attr("value").trim(),i=[];"ALL"==e.toUpperCase()?i=t:t.each(function(){var t=$(this).find("tr:eq(1)").find("td:eq(3)").text();t.trim().toUpperCase()==e.trim().toUpperCase()&&i.push($(this))}),$("table.listing tbody.link").remove(),$("table.listing").append(i)})}();void(0);
```

and run it on the [PyCon India Funnel Page](http://in.pycon.org/funnel/2014/). It will put a dropdown with the different sections just above the list of sessions

This is tested with latest versions of Google Chrome and Firefox.

**TODO**
- [X] Make a landing page for the bookmarklet

---

@nischalhp wanted to do this, so kudos to him for the idea. I just quickly hacked it up in JS.
