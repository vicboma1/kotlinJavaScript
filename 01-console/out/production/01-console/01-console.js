if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module '01-console'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to '01-console'.");
}
this['01-console'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('hello world');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('01-console', _);
  return _;
}(typeof this['01-console'] === 'undefined' ? {} : this['01-console'], kotlin);
