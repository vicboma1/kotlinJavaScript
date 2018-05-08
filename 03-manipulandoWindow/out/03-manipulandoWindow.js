if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module '03-manipulandoWindow'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to '03-manipulandoWindow'.");
}
this['03-manipulandoWindow'] = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda$lambda(it) {
    window.close();
    return Unit;
  }
  function main(args) {
    var tmp$;
    window.alert('Mensaje de alerta');
    window.confirm('Mensaje de confirmaci\xF3n');
    if ((tmp$ = document.body) != null) {
      var $receiver = document.createElement('button');
      $receiver.textContent = 'Cerrar ventana';
      $receiver.addEventListener('click', main$lambda$lambda);
      tmp$.appendChild($receiver);
    }
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('03-manipulandoWindow', _);
  return _;
}(typeof this['03-manipulandoWindow'] === 'undefined' ? {} : this['03-manipulandoWindow'], kotlin);
