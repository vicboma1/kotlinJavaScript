if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module '04-builderDSL'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to '04-builderDSL'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module '04-builderDSL'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to '04-builderDSL'.");
}
this['04-builderDSL'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var FormMethod = $module$kotlinx_html_js.kotlinx.html.FormMethod;
  var FormEncType = $module$kotlinx_html_js.kotlinx.html.FormEncType;
  var Unit = Kotlin.kotlin.Unit;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3ereno$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var get_br = $module$kotlinx_html_js.kotlinx.html.get_br_6s7ubj$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  function main$lambda($receiver) {
    $receiver.action = '#';
    $receiver.method = FormMethod.post;
    $receiver.encType = FormEncType.multipartFormData;
    inputRow($receiver, 'Nombre ', 'name');
    inputRow($receiver, 'Email ', 'email');
    inputMessage($receiver);
    submitButton($receiver);
    return Unit;
  }
  function main(args) {
    var tmp$;
    (tmp$ = document.getElementById('parent')) != null ? tmp$.appendChild(form(get_create(document), void 0, void 0, void 0, void 0, main$lambda)) : null;
  }
  function submitButton$lambda$lambda(it) {
    window.alert('Mensaje env\xEDado');
    return Unit;
  }
  function submitButton$lambda($receiver) {
    $receiver.text_61zpoe$('Enviar');
    set_id($receiver, 'submit_button');
    set_onClickFunction($receiver, submitButton$lambda$lambda);
    return Unit;
  }
  function submitButton($receiver) {
    button($receiver, void 0, void 0, void 0, void 0, void 0, submitButton$lambda);
  }
  function inputRow$lambda$lambda(closure$labelName) {
    return function ($receiver) {
      $receiver.htmlFor = closure$labelName;
      $receiver.text_61zpoe$(closure$labelName + ': ');
      return Unit;
    };
  }
  function inputRow$lambda$lambda_0(closure$inputName) {
    return function ($receiver) {
      set_id($receiver, closure$inputName);
      $receiver.name = closure$inputName;
      $receiver.type = InputType.text;
      $receiver.value = '';
      $receiver.size = '30';
      return Unit;
    };
  }
  function inputRow$lambda$lambda_1(closure$inputName) {
    return function ($receiver) {
      set_id($receiver, '{' + closure$inputName + '}_validation');
      return Unit;
    };
  }
  function inputRow$lambda(closure$labelName, closure$inputName) {
    return function ($receiver) {
      set_id($receiver, 'row');
      label($receiver, void 0, inputRow$lambda$lambda(closure$labelName));
      get_br($receiver);
      input($receiver, void 0, void 0, void 0, void 0, void 0, inputRow$lambda$lambda_0(closure$inputName));
      get_br($receiver);
      span($receiver, void 0, inputRow$lambda$lambda_1(closure$inputName));
      return Unit;
    };
  }
  function inputRow($receiver, labelName, inputName) {
    div($receiver, void 0, inputRow$lambda(labelName, inputName));
  }
  function inputMessage$lambda$lambda($receiver) {
    $receiver.htmlFor = 'mensaje';
    $receiver.text_61zpoe$('Mensaje: ');
    return Unit;
  }
  function inputMessage$lambda$lambda_0($receiver) {
    set_id($receiver, 'mensaje');
    $receiver.name = 'mensaje';
    $receiver.rows = '7';
    $receiver.cols = '30';
    return Unit;
  }
  function inputMessage$lambda$lambda_1($receiver) {
    set_id($receiver, 'mensaje_validation');
    return Unit;
  }
  function inputMessage$lambda($receiver) {
    set_id($receiver, 'row');
    label($receiver, void 0, inputMessage$lambda$lambda);
    get_br($receiver);
    textArea($receiver, void 0, void 0, void 0, void 0, inputMessage$lambda$lambda_0);
    get_br($receiver);
    span($receiver, void 0, inputMessage$lambda$lambda_1);
    return Unit;
  }
  function inputMessage($receiver) {
    div($receiver, void 0, inputMessage$lambda);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('04-builderDSL', _);
  return _;
}(typeof this['04-builderDSL'] === 'undefined' ? {} : this['04-builderDSL'], kotlin, this['kotlinx-html-js']);
