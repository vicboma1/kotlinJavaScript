if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module '05-bootstrapDSL'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to '05-bootstrapDSL'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module '05-bootstrapDSL'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to '05-bootstrapDSL'.");
}
this['05-bootstrapDSL'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var Unit = Kotlin.kotlin.Unit;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var div_1 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var h5 = $module$kotlinx_html_js.kotlinx.html.h5_aplb7s$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  function panelBody$lambda$lambda($receiver) {
    set_classes($receiver, setOf('form-horizontal'));
    set_role($receiver, 'form');
    formGroupName($receiver);
    formGroupEmail($receiver);
    formGroupPass($receiver);
    formGroupRePass($receiver);
    formGroupControlGenre($receiver);
    return Unit;
  }
  function panelBody$lambda($receiver) {
    set_classes($receiver, setOf('panel-body'));
    form($receiver, void 0, void 0, void 0, void 0, panelBody$lambda$lambda);
    return Unit;
  }
  function panelBody() {
    return div(get_create(document), void 0, panelBody$lambda);
  }
  function formGroupControlGenre$lambda$lambda($receiver) {
    set_classes($receiver, setOf('col-sm-2 control-label'));
    $receiver.htmlFor = 'genero';
    $receiver.unaryPlus_pdl1vz$('G\xE9nero');
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('form-check-input'));
    set_id($receiver, 'radiobutton1');
    $receiver.name = 'sampleradiobutton';
    $receiver.value = '';
    $receiver.type = InputType.radio;
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('form-check-label'));
    $receiver.unaryPlus_pdl1vz$('Masculino  ');
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('form-check form-check-inline'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, formGroupControlGenre$lambda$lambda$lambda$lambda$lambda);
    label($receiver, void 0, formGroupControlGenre$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf('form-check-input'));
    set_id($receiver, 'radiobutton2');
    $receiver.name = 'sampleradiobutton';
    $receiver.value = '';
    $receiver.type = InputType.radio;
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    set_classes($receiver, setOf('form-check-label'));
    $receiver.unaryPlus_pdl1vz$('Femenino  ');
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('form-check form-check-inline'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, formGroupControlGenre$lambda$lambda$lambda$lambda$lambda_1);
    label($receiver, void 0, formGroupControlGenre$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('radio-inline'));
    div_0($receiver, void 0, formGroupControlGenre$lambda$lambda$lambda$lambda);
    div_0($receiver, void 0, formGroupControlGenre$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function formGroupControlGenre$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('col-sm-10'));
    div_0($receiver, void 0, formGroupControlGenre$lambda$lambda$lambda);
    return Unit;
  }
  function formGroupControlGenre$lambda($receiver) {
    set_classes($receiver, setOf('form-group'));
    label($receiver, void 0, formGroupControlGenre$lambda$lambda);
    div_0($receiver, void 0, formGroupControlGenre$lambda$lambda_0);
    return Unit;
  }
  function formGroupControlGenre($receiver) {
    div_0($receiver, void 0, formGroupControlGenre$lambda);
  }
  function formGroupRePass$lambda$lambda($receiver) {
    set_classes($receiver, setOf('col-sm-2 control-label'));
    $receiver.htmlFor = 'password';
    $receiver.unaryPlus_pdl1vz$('Confirmar Password');
    return Unit;
  }
  function formGroupRePass$lambda$lambda$lambda($receiver) {
    $receiver.type = InputType.password;
    set_classes($receiver, setOf('form-control'));
    set_id($receiver, 'confirmpass');
    return Unit;
  }
  function formGroupRePass$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('col-sm-10'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, formGroupRePass$lambda$lambda$lambda);
    return Unit;
  }
  function formGroupRePass$lambda($receiver) {
    set_classes($receiver, setOf('form-group'));
    label($receiver, void 0, formGroupRePass$lambda$lambda);
    div_0($receiver, void 0, formGroupRePass$lambda$lambda_0);
    return Unit;
  }
  function formGroupRePass($receiver) {
    div_0($receiver, void 0, formGroupRePass$lambda);
  }
  function formGroupPass$lambda$lambda($receiver) {
    set_classes($receiver, setOf('col-sm-2 control-label'));
    $receiver.htmlFor = 'password';
    $receiver.unaryPlus_pdl1vz$('Password');
    return Unit;
  }
  function formGroupPass$lambda$lambda$lambda($receiver) {
    $receiver.type = InputType.password;
    set_classes($receiver, setOf('form-control'));
    set_id($receiver, 'pass');
    return Unit;
  }
  function formGroupPass$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('col-sm-10'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, formGroupPass$lambda$lambda$lambda);
    return Unit;
  }
  function formGroupPass$lambda($receiver) {
    set_classes($receiver, setOf('form-group'));
    label($receiver, void 0, formGroupPass$lambda$lambda);
    div_0($receiver, void 0, formGroupPass$lambda$lambda_0);
    return Unit;
  }
  function formGroupPass($receiver) {
    div_0($receiver, void 0, formGroupPass$lambda);
  }
  function formGroupEmail$lambda$lambda($receiver) {
    set_classes($receiver, setOf('col-sm-2 control-label'));
    $receiver.htmlFor = 'gmail';
    $receiver.unaryPlus_pdl1vz$('Gmail ');
    return Unit;
  }
  function formGroupEmail$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('input-group-text'));
    $receiver.unaryPlus_pdl1vz$('@');
    return Unit;
  }
  function formGroupEmail$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('form-control'));
    $receiver.type = InputType.text;
    set_id($receiver, 'inlineFormInputGroup');
    return Unit;
  }
  function formGroupEmail$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('input-group-prepend'));
    div_0($receiver, void 0, formGroupEmail$lambda$lambda$lambda$lambda$lambda);
    input($receiver, void 0, void 0, void 0, void 0, void 0, formGroupEmail$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function formGroupEmail$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('mb-2'));
    div_0($receiver, void 0, formGroupEmail$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function formGroupEmail$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('col-sm-10'));
    div_0($receiver, void 0, formGroupEmail$lambda$lambda$lambda);
    return Unit;
  }
  function formGroupEmail$lambda($receiver) {
    set_classes($receiver, setOf('form-group'));
    label($receiver, void 0, formGroupEmail$lambda$lambda);
    div_0($receiver, void 0, formGroupEmail$lambda$lambda_0);
    return Unit;
  }
  function formGroupEmail($receiver) {
    div_0($receiver, void 0, formGroupEmail$lambda);
  }
  function formGroupName$lambda$lambda($receiver) {
    set_classes($receiver, setOf('col-sm-2 control-label'));
    $receiver.htmlFor = 'name';
    $receiver.unaryPlus_pdl1vz$('Nombre ');
    return Unit;
  }
  function formGroupName$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('form-control'));
    $receiver.type = InputType.email;
    set_id($receiver, '_email');
    return Unit;
  }
  function formGroupName$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('col-sm-10'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, formGroupName$lambda$lambda$lambda);
    return Unit;
  }
  function formGroupName$lambda($receiver) {
    set_classes($receiver, setOf('panel-body'));
    label($receiver, void 0, formGroupName$lambda$lambda);
    div_0($receiver, void 0, formGroupName$lambda$lambda_0);
    return Unit;
  }
  function formGroupName($receiver) {
    div_0($receiver, void 0, formGroupName$lambda);
  }
  function formControlLegal() {
    return '';
  }
  function formControlAddress() {
    return '\n            <div class="form-group">\n                <label htmlfor="Address" class="col-sm-2 control-label">Direcci\xF3n<\/label>\n                <div class="col-sm-10">\n                    <textarea name="" cols="" rows="" class="form-control"><\/textarea>\n                <\/div>\n            <\/div>\n        ';
  }
  function formGroupControlCountry() {
    return '\n            <div class="form-group">\n                <label htmlfor="State" class="col-sm-2 control-label">Pa\xEDs<\/label>\n                <div class="col-sm-10">\n                    <select class="form-control">\n                        <option>Espa\xF1a<\/option>\n                        <option>Francia<\/option>\n                        <option>Italia<\/option>\n                        <option>Otros<\/option>\n                    <\/select>\n                <\/div>\n            <\/div>\n        ';
  }
  function panelFoorter$lambda($receiver) {
    set_classes($receiver, setOf('panel-footer'));
    set_style($receiver, 'overflow:hidden;text-align:right;');
    buttonGroup($receiver);
    return Unit;
  }
  function panelFoorter() {
    return div_1(get_create(document), void 0, panelFoorter$lambda);
  }
  function buttonGroup$lambda($receiver) {
    set_classes($receiver, setOf('form-group'));
    colButton($receiver);
    return Unit;
  }
  function buttonGroup($receiver) {
    div_0($receiver, void 0, buttonGroup$lambda);
  }
  function colButton$lambda$lambda($receiver) {
    $receiver.type = ButtonType.submit;
    set_classes($receiver, setOf('btn btn-success btn-sm'));
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    $receiver_0.put_xwzc9p$(key, 'modal');
    var $receiver_1 = $receiver.attributes;
    var key_0 = 'data-target';
    $receiver_1.put_xwzc9p$(key_0, '#Modal');
    $receiver.unaryPlus_pdl1vz$('Enviar');
    return Unit;
  }
  function colButton$lambda$lambda_0($receiver) {
    $receiver.type = ButtonType.submit;
    set_classes($receiver, setOf('btn btn-default btn-sm'));
    $receiver.unaryPlus_pdl1vz$('Cancelar');
    return Unit;
  }
  function colButton$lambda($receiver) {
    set_classes($receiver, setOf('col-sm-offset-2 col-sm-10'));
    button($receiver, void 0, void 0, void 0, void 0, void 0, colButton$lambda$lambda);
    button($receiver, void 0, void 0, void 0, void 0, void 0, colButton$lambda$lambda_0);
    return Unit;
  }
  function colButton($receiver) {
    div_0($receiver, void 0, colButton$lambda);
  }
  function panelHeader$lambda$lambda($receiver) {
    set_classes($receiver, setOf('panel-title text-center'));
    $receiver.unaryPlus_pdl1vz$('Formulario w/ Kotlin JS');
    return Unit;
  }
  function panelHeader$lambda($receiver) {
    set_classes($receiver, setOf('panel-heading'));
    h3($receiver, void 0, panelHeader$lambda$lambda);
    return Unit;
  }
  function panelHeader() {
    return div(get_create(document), void 0, panelHeader$lambda);
  }
  function showDialog$lambda($receiver) {
    set_classes($receiver, setOf('modal fade'));
    set_id($receiver, 'Modal');
    var $receiver_0 = $receiver.attributes;
    var key = 'tabindex';
    $receiver_0.put_xwzc9p$(key, '-1');
    set_role($receiver, 'dialog');
    var $receiver_1 = $receiver.attributes;
    var key_0 = 'aria-labelledby';
    var value = 'exampleModalLabel';
    $receiver_1.put_xwzc9p$(key_0, value);
    var $receiver_2 = $receiver.attributes;
    var key_1 = 'aria-hidden';
    $receiver_2.put_xwzc9p$(key_1, 'true');
    dialogModal($receiver);
    return Unit;
  }
  function showDialog() {
    return div(get_create(document), void 0, showDialog$lambda);
  }
  function dialogModal$lambda($receiver) {
    set_classes($receiver, setOf('modal-dialog'));
    set_role($receiver, 'document');
    containerModal($receiver);
    return Unit;
  }
  function dialogModal($receiver) {
    div_0($receiver, void 0, dialogModal$lambda);
  }
  function containerModal$lambda($receiver) {
    set_classes($receiver, setOf('modal-content'));
    headerModal($receiver);
    bodyModal($receiver);
    footerModal($receiver);
    return Unit;
  }
  function containerModal($receiver) {
    div_0($receiver, void 0, containerModal$lambda);
  }
  function headerModal$lambda$lambda($receiver) {
    set_classes($receiver, setOf('modal-title'));
    set_id($receiver, 'exampleModalLabel');
    $receiver.unaryPlus_pdl1vz$('Solicitud realizada con \xE9xito');
    return Unit;
  }
  function headerModal$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'aria-hidden';
    $receiver_0.put_xwzc9p$(key, 'true');
    $receiver.unaryPlus_pdl1vz$('x');
    return Unit;
  }
  function headerModal$lambda$lambda_0($receiver) {
    $receiver.type = ButtonType.button;
    set_classes($receiver, setOf('close'));
    var $receiver_0 = $receiver.attributes;
    var key = 'data-dismiss';
    $receiver_0.put_xwzc9p$(key, 'modal');
    var $receiver_1 = $receiver.attributes;
    var key_0 = 'aria-label';
    $receiver_1.put_xwzc9p$(key_0, 'Close');
    span($receiver, void 0, headerModal$lambda$lambda$lambda);
    return Unit;
  }
  function headerModal$lambda($receiver) {
    set_classes($receiver, setOf('modal-header'));
    h5($receiver, void 0, headerModal$lambda$lambda);
    button($receiver, void 0, void 0, void 0, void 0, void 0, headerModal$lambda$lambda_0);
    return Unit;
  }
  function headerModal($receiver) {
    div_0($receiver, void 0, headerModal$lambda);
  }
  function bodyModal$lambda($receiver) {
    set_classes($receiver, setOf('modal-body'));
    $receiver.unaryPlus_pdl1vz$('Su formulario se ha rellenado correctamente ');
    return Unit;
  }
  function bodyModal($receiver) {
    div_0($receiver, void 0, bodyModal$lambda);
  }
  function footerModal$lambda$lambda($receiver) {
    $receiver.type = ButtonType.button;
    set_classes($receiver, setOf('btn btn-secondary'));
    var $receiver_0 = $receiver.attributes;
    var key = 'data-dismiss';
    $receiver_0.put_xwzc9p$(key, 'modal');
    $receiver.unaryPlus_pdl1vz$('Aceptar');
    return Unit;
  }
  function footerModal$lambda$lambda_0($receiver) {
    return Unit;
  }
  function footerModal$lambda$lambda_1($receiver) {
    $receiver.type = ButtonType.button;
    set_classes($receiver, setOf('btn btn-primary'));
    var $receiver_0 = $receiver.attributes;
    var key = 'data-dismiss';
    $receiver_0.put_xwzc9p$(key, 'modal');
    $receiver.unaryPlus_pdl1vz$('Cancelar');
    return Unit;
  }
  function footerModal$lambda($receiver) {
    set_classes($receiver, setOf('modal-footer'));
    button($receiver, void 0, void 0, void 0, void 0, void 0, footerModal$lambda$lambda);
    span($receiver, void 0, footerModal$lambda$lambda_0);
    button($receiver, void 0, void 0, void 0, void 0, void 0, footerModal$lambda$lambda_1);
    return Unit;
  }
  function footerModal($receiver) {
    div_0($receiver, void 0, footerModal$lambda);
  }
  function main(args) {
    var $receiver = document;
    var tmp$, tmp$_0;
    (tmp$ = $receiver.getElementById('header')) != null ? tmp$.appendChild(panelHeader()) : null;
    if ((tmp$_0 = $receiver.getElementById('body')) != null) {
      tmp$_0.appendChild(panelBody());
      tmp$_0.appendChild(panelFoorter());
      tmp$_0.appendChild(showDialog());
    }
  }
  var package$bootStrap = _.bootStrap || (_.bootStrap = {});
  package$bootStrap.panelBody = panelBody;
  package$bootStrap.panelFoorter = panelFoorter;
  package$bootStrap.panelHeader = panelHeader;
  package$bootStrap.showDialog = showDialog;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('05-bootstrapDSL', _);
  return _;
}(typeof this['05-bootstrapDSL'] === 'undefined' ? {} : this['05-bootstrapDSL'], kotlin, this['kotlinx-html-js']);
