(function(window, $, undefined) {
  'use strict';

  console.log('This is the Araport science app for Arabidopsis thaliana small RNA data.');

  /* data-app-name is an attribute of a div in app.html */
  /* app.html is included by a div in index.html */
  var appContext = $('[data-app-name="table-app-1"]');

  /* Create an anonymous function and register it to fire when AgaveAPI is ready. */
  /* Our science app functionality belongs inside this function. */
  window.addEventListener('Agave::ready', function() {
      var Agave, interactive, info;
      var htmlString;

      /* This object has useful functions for interacting with Araport server components. */
      Agave = window.Agave;

      /* Use the jQuery .html() setter/getter function to CHANGE content. */
      /* Alter the HTML title to show we are running. */
      /* Add a div to hold the interactive application content. */
      /* Add a div to hold the provenance information. */
      /* Each div could have a unique id. */
      /* Each div could have one or more classes for sytling. */
      htmlString='<h2><em>Arabidopsis thaliana</em> small RNA</h2>'+
	  '<div class="interactive"></div>'+
	  '<hr><div class="provenance-info"></div><br>';
      appContext.html(htmlString);
      
      /* Search the appContenxt div for elements with attribute interactive. */
      /* Note we added this element in a previous line. */
      interactive = $('.interactive', appContext);
      interactive.append('<p>This is your interactive app!</p>');

      /* Search the appContenxt div for elements with attribute provenance-info. */
      /* Adjust the provenance info at the bottom of the screen */
      info = $('.provenance-info', appContext);
      /* The bootstrap.css (in use at Araport) recognizses class "text-center" and centers it. */
      info.addClass('text-center');
      /* For now, hard code some provenance info. */
      /* Later, get provenance from a Meyers Lab web service. */
      info.append('<p>Visit <a href="http://www.meyerslab.org/data/">Meyers Lab Data</a> for more information!</p>');
  });

})(window, jQuery);
