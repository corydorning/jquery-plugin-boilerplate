/* jquery-plugin-boilerplate-0.1.js
 *
 * Authored by: Cory Dorning
 * Website: http://corydorning.com/projects/jquery-plugin-boilerplate
 * Source: https://github.com/corydorning/jquery-plugin-boilerplate
 *
 * Dependencies: jQuery v1.8+
 *
 * Last modified by: Cory Dorning
 * Last modified on: 12/06/2012
 *
 * The jQuery plugin boilerplate provides a generic outline for creating
 * a jQuery plugin. This is not operational code and can be modified to
 * meet your specific needs.
 *
 */

// include semicolon to make sure any JS before this plugin is terminated
;(function($) {
  // ECMAScript 5 strict mode
  "use strict";

  // begin plugin - change 'boilerplate' to name of your plugin
  $.fn.boilerplate = function(options) {

        // set any defaults
        // leave in place for future versions, even if you don't have defaults now
    var defaults = {
          // simply remove the properties if you do not currently have defaults
          property1: 'value',
          property2: 'value'
        },

        // overwrite 'defaults' with those passed via 'options'
        settings = $.extend(defaults, options),

        // original jQuery object
        $sel = this;

    /* standard context
     * =================
     * - return added to maintain jQuery chainability
     * - append jQuery methods to perform any needed actions
     *
     */
    return $sel
            .addClass('test'); // example jQuery method, change as needed


    /* loop context
     * =============
     * - return added to maintain jQuery chainability
     * - add needed for functionality within the loop
     *   for each individual instance of your jQuery object
     *
     */
    return $sel.each(function() {
          // current, single instance of $sel
      var $this = $(this);


    });

  };
})(jQuery);