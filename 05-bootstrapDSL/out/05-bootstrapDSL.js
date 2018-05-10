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
  var Unit = Kotlin.kotlin.Unit;
  var style = $module$kotlinx_html_js.kotlinx.html.style_st6e4p$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  function panelBody() {
    return '\n' + '            <div class=' + '"' + 'panel-body' + '"' + '>' + '\n' + '                <form class=' + '"' + 'form-horizontal' + '"' + ' role=' + '"' + 'form' + '"' + '>' + '\n' + '                    ' + formGroupName() + '\n' + '                    ' + formGroupEmail() + '\n' + '                    ' + formGroupPass() + '\n' + '                    ' + formGroupRePass() + '\n' + '                    ' + formGroupControlGenre() + '\n' + '                    ' + formGroupControlCountry() + '\n' + '                    ' + formControlAddress() + '\n' + '                    ' + formControlLegal() + '\n' + '                <\/form>' + '\n' + '            <\/div>' + '\n' + '        ';
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
  function formGroupControlGenre() {
    return '\n             <div class="form-group">\n                <label class="col-sm-2 control-label">G\xE9nero<\/label>\n                <div class="col-sm-10">\n                    <div class="radio-inline">\n                        <label> <input id="radiobutton1" name="sampleradiobutton" value="" type="radio">Masculino<\/label>\n                    <\/div>\n                    <div class="radio-inline">\n                        <label> <input id="radiobutton2" name="sampleradiobutton" value="" type="radio">Femenino<\/label>\n                    <\/div>\n                <\/div>\n            <\/div>\n        ';
  }
  function formGroupRePass() {
    return '\n            <div class="form-group">\n                <label htmlfor="password" class="col-sm-2 control-label">Confirmar password<\/label>\n                <div class="col-sm-10">\n                    <input type="password" class="form-control" id="confirmpass">\n                <\/div>\n            <\/div>\n        ';
  }
  function formGroupPass() {
    return '\n            <div class="form-group">\n            <label htmlfor="password" class="col-sm-2 control-label">Password<\/label>\n            <div class="col-sm-10">\n                <input type="password" class="form-control" id="pass">\n            <\/div>\n            <\/div>\n        ';
  }
  function formGroupEmail() {
    return '\n            <div class="form-group">\n                <label htmlfor="gmail" class="col-sm-2 control-label">Gmail<\/label>\n                <div class="col-sm-10">\n                    <div class="input-group input-group-sm">\n                        <span class="input-group-addon">@<\/span>\n                        <input type="text" class="form-control" placeholder="">\n                    <\/div>\n                <\/div>\n            <\/div>\n        ';
  }
  function formGroupName() {
    return '\n             <div class="form-group">\n                <label htmlfor="name" class="col-sm-2 control-label">Nombre <\/label>\n                <div class="col-sm-10">\n                    <input type="email" class="form-control" id="_email">\n                <\/div>\n             <\/div>\n        ';
  }
  function panelFoorter$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('overflow:hidden;text-align:right;');
    return Unit;
  }
  function panelFoorter$lambda($receiver) {
    set_classes($receiver, setOf('panel-footer'));
    buttonGroup();
    style($receiver, void 0, panelFoorter$lambda$lambda);
    return Unit;
  }
  function panelFoorter() {
    return div(get_create(document), void 0, panelFoorter$lambda);
  }
  function buttonGroup$lambda($receiver) {
    set_classes($receiver, setOf('form-group'));
    colButton();
    return Unit;
  }
  function buttonGroup() {
    return div(get_create(document), void 0, buttonGroup$lambda);
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
    $receiver.unaryPlus_pdl1vz$('Enviar*****');
    return Unit;
  }
  function colButton$lambda$lambda_0($receiver) {
    $receiver.type = ButtonType.submit;
    set_classes($receiver, setOf('btn btn-success btn-sm'));
    $receiver.unaryPlus_pdl1vz$('Cancelar*****');
    return Unit;
  }
  function colButton$lambda($receiver) {
    set_classes($receiver, setOf('col-sm-offset-2 col-sm-10'));
    button($receiver, void 0, void 0, void 0, void 0, void 0, colButton$lambda$lambda);
    button($receiver, void 0, void 0, void 0, void 0, void 0, colButton$lambda$lambda_0);
    return Unit;
  }
  function colButton() {
    return div(get_create(document), void 0, colButton$lambda);
  }
  function panelHeader() {
    return '\n            <div class="panel-heading">\n                <h3 class="panel-title text-center">Formulario<\/h3>\n            <\/div>\n        ';
  }
  function showDialog() {
    return '\n' + '         <div class=' + '"' + 'modal fade' + '"' + ' id=' + '"' + 'Modal' + '"' + ' tabindex=' + '"' + '-1' + '"' + ' role=' + '"' + 'dialog' + '"' + ' aria-labelledby=' + '"' + 'exampleModalLabel' + '"' + ' aria-hidden=' + '"' + 'true' + '"' + '>' + '\n' + '            <div class=' + '"' + 'modal-dialog' + '"' + ' role=' + '"' + 'document' + '"' + '>' + '\n' + '                ' + content() + '\n' + '            <\/div>' + '\n' + '        <\/div>' + '\n' + '    ';
  }
  function content() {
    return '\n' + '            <div class=' + '"' + 'modal-content' + '"' + '>' + '\n' + '                ' + header() + '\n' + '                ' + body() + '\n' + '                ' + footer() + '\n' + '            <\/div>' + '\n' + '        ';
  }
  function footer() {
    return '\n' + '             <div class=' + '"' + 'modal-footer' + '"' + '>' + '\n' + '                ' + button_0('btn btn-secondary', 'Cerrar') + '\n' + '                ' + button_0('btn btn-primary', 'Aceptar') + '\n' + '            <\/div>' + '\n' + '        ';
  }
  function button_0(_class, title) {
    return '<button type=' + '"' + 'button' + '"' + ' class=' + '"' + _class + '"' + ' data-dismiss=' + '"' + 'modal' + '"' + '>' + title + '<\/button>';
  }
  function body() {
    return '\n        <div class="modal-body">\n            Su formulario se ha rellenado correctamente"\n        <\/div>\n    ';
  }
  function header() {
    return '\n            <div class="modal-header">\n                <h5 class="modal-title" id="exampleModalLabel">Solicitud realizada con \xE9xito<\/h5>\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;<\/span>\n                <\/button>\n            <\/div>\n        ';
  }
  function main(args) {
    injectHtml('\n' + '         ' + panelHeader() + '\n' + '         ' + panelBody() + '\n' + '//         ' + panelFoorter() + '\n' + '         ' + showDialog() + '\n' + '        ');
  }
  function injectHtml(innerHtml, panel) {
    if (panel === void 0)
      panel = 'panel';
    var tmp$;
    var tmp$_0;
    if ((tmp$ = document.getElementById(panel)) != null) {
      tmp$.innerHTML = innerHtml;
      tmp$_0 = tmp$;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
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
