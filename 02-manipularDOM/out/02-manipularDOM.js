if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module '02-manipularDOM'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to '02-manipularDOM'.");
}
this['02-manipularDOM'] = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  function main$lambda$lambda(it) {
    var tmp$;
    (tmp$ = document.body) != null ? (tmp$.remove(), Unit) : null;
    return Unit;
  }
  function main(args) {
    var tmp$, tmp$_0;
    var $receiver = document.createElement('h1');
    $receiver.textContent = 'Manipulando el DOM';
    var $receiver_0 = document.createElement('h2');
    $receiver_0.textContent = 'desde c\xF3digo';
    var $receiver_1 = document.createElement('h3');
    $receiver_1.textContent = 'con elementos';
    var $receiver_2 = document.createElement('h4');
    $receiver_2.textContent = 'diferentes';
    var $receiver_3 = document.createElement('button');
    $receiver_3.textContent = '    Borrar body html      ';
    $receiver_3.addEventListener('click', main$lambda$lambda);
    var elements = arrayListOf([$receiver, $receiver_0, $receiver_1, $receiver_2, $receiver_3]);
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      (tmp$_0 = document.body) != null ? tmp$_0.appendChild(it) : null;
    }
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('02-manipularDOM', _);
  return _;
}(typeof this['02-manipularDOM'] === 'undefined' ? {} : this['02-manipularDOM'], kotlin);
