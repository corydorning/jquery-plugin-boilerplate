/* jquery-plugin-boilerplate-0.1.js
 *
 * Authored by: Cory Dorning
 * Website: http://corydorning.com/projects/jquery-plugin-boilerplate
 * Source: https://github.com/corydorning/jquery-plugin-boilerplate
 *
 * Dependencies: jQuery v1.8+
 *
 * Last modified by: Cory Dorning
 * Last modified on: 11/03/2014
 *
 * The jQuery plugin boilerplate provides a generic outline for creating
 * a jQuery plugin. This is not operational code and should be modified to
 * meet your specific needs.
 *
 */

// include semicolon to make sure any JS before this plugin is terminated
;(function($) {
  "use strict";

  // NOTE: remember to change every instance of "pluginName" to the name of your plugin!

  // create the plugin
  $.pluginName = function(element, options) {

    // plugin's default options - private property and only accessible from inside the plugin
    var defaults = {
          property: 'value',

          // if your plugin is event-driven, you may provide callbacks for its events.
          // execute these functions before or after events of your plugin, so that users
          // may customize those particular events without changing the plugin's code.
          onMethod: function() {}
        }
      ,
        // reference to the actual DOM element
        el = element
      ,
        // reference to the jQuery version of DOM element
        $el = $(el)
      ,
        // avoid confusions, use "plugin" to reference the current instance of the object
        plugin = this
      ,
        // private methods here - can only be called from inside the plugin like:
        // methodName(arg1, arg2, argN)

        // demo private method - remove it!
        private_method = function() {
          // code goes here
        }

    ;

    // merged default placeholder
    // private: plugin.settings.propertyName
    // public: el.data('pluginName').settings.propertyName
    plugin.settings = {};

    // the "constructor" method that gets called when the plugin object is created
    plugin.init = function() {

      // merge defaults and user-provided options (if any)
      plugin.settings = $.extend({}, defaults, options);

      // code goes here

    };

    // public methods - these methods can be called like:
    //  plugin.methodName(arg1, arg2, argN)
    //  element.data('pluginName').publicMethod(arg1, arg2, argN)

    // demo public method - remove it!
    plugin.public_method = function() {
      // code goes here
    };

    // start the plugin -  call the "constructor" method
    plugin.init();

  };

  // add the plugin to the jQuery.fn object
  $.fn.pluginName = function(options) {

    // iterate through the DOM elements that match the selector
    return this.each(function() {
          // reference to the actual DOM element
      var curr = this
        ,
          // reference to the jQuery version of DOM element
          $curr = $(this),

          // merge user defaults and current element specific data-options (if any)
          settings = $.extend(options, $curr.data('options'))
      ;

      // plugin exist on this element?
      if (!$curr.data('pluginName')) {

        // create a new instance of the plugin
        // pass the DOM element and the merged settings as arguments
        var plugin = new $.pluginName(this, settings);

        // store a reference to the plugin object which you can later access
        //  element.data('pluginName').publicMethod(arg1, arg2, argN)
        //  element.data('pluginName').settings.propertyName
        $curr.data('pluginName', plugin);

      }

    });

  };

})(jQuery);