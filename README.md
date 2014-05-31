# PyCon-Funnel-Filter

Drag this to your bookmarks bar [PyCon Funnel Filter](javascript:!function%28%29%7Bvar%20t,e=%27%3Cbr/%3EFilter:%20%3Cselect%20id=%22section-filter%22%3E%3Coption%20value=%22all%22%3EAll%3C/option%3E%27,i=$%28%22ol%20li%22%29;i.each%28function%28%29%7Bvar%20t=$%28this%29.text%28%29,i=t.split%28%22%E2%80%94%22%29%5B0%5D.trim%28%29;e+=%27%3Coption%20value=%22%27+i+%27%22%3E%27+i+%22%3C/option%3E%22%7D%29,e+=%22%3C/select%3E%22,t=$%28%22table.listing%20tbody.link%22%29,alert%28%22Filter%20applied!%22%29,$%28%22h2#sessions%22%29.after%28e%29,$%28%22#section-filter%22%29.change%28function%28%29%7Bvar%20e=$%28this%29.attr%28%22value%22%29.trim%28%29,i=%5B%5D;%22ALL%22==e.toUpperCase%28%29?i=t:t.each%28function%28%29%7Bvar%20t=$%28this%29.find%28%22tr:eq%281%29%22%29.find%28%22td:eq%283%29%22%29.text%28%29;t.trim%28%29.toUpperCase%28%29==e.trim%28%29.toUpperCase%28%29&&i.push%28$%28this%29%29%7D%29,$%28%22table.listing%20tbody.link%22%29.remove%28%29,$%28%22table.listing%22%29.append%28i%29%7D%29%7D%28%29;)

and run it on the [PyCon India Funnel Page](http://in.pycon.org/funnel/2014/). It will put a dropdown with the different sections just above the list of sessions

This is tested with latest versions of Google Chrome and Firefox.

**TODO**
- [X] Make a landing page for the bookmarklet

---

@nischalhp wanted to do this, so kudos to him for the idea. I just quickly hacked it up in JS.
