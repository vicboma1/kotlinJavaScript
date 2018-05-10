if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module '05-bootstrap'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to '05-bootstrap'.");
}
this['05-bootstrap'] = function (_, Kotlin) {
  'use strict';
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
  function panelFoorter() {
    return '\n' + '            <div class=' + '"' + 'panel-footer' + '"' + ' style=' + '"' + 'overflow:hidden;text-align:right;' + '"' + '>' + '\n' + '              ' + buttonGroup() + '\n' + '            <\/div>' + '\n' + '        ';
  }
  function buttonGroup() {
    return '\n' + '            <div class=' + '"' + 'form-group' + '"' + '>' + '\n' + '                     ' + colButton() + '\n' + '            <\/div>' + '\n' + '        ';
  }
  function colButton() {
    return '\n            <div class="col-sm-offset-2 col-sm-10">\n                    <button type="submit" class="btn btn-success btn-sm" data-toggle="modal" data-target="#Modal" >Enviar<\/button>\n                    <button type="submit" class="btn btn-default btn-sm" >Cancelar<\/button>\n            <\/div>\n        ';
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
    return '\n' + '             <div class=' + '"' + 'modal-footer' + '"' + '>' + '\n' + '                ' + button('btn btn-secondary', 'Cerrar') + '\n' + '                ' + button('btn btn-primary', 'Aceptar') + '\n' + '            <\/div>' + '\n' + '        ';
  }
  function button(_class, title) {
    return '<button type=' + '"' + 'button' + '"' + ' class=' + '"' + _class + '"' + ' data-dismiss=' + '"' + 'modal' + '"' + '>' + title + '<\/button>';
  }
  function body() {
    return '\n        <div class="modal-body">\n            Su formulario se ha rellenado correctamente"\n        <\/div>\n    ';
  }
  function header() {
    return '\n            <div class="modal-header">\n                <h5 class="modal-title" id="exampleModalLabel">Solicitud realizada con \xE9xito<\/h5>\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;<\/span>\n                <\/button>\n            <\/div>\n        ';
  }
  function main(args) {
    injectHtml('\n' + '         ' + panelHeader() + '\n' + '         ' + panelBody() + '\n' + '         ' + panelFoorter() + '\n' + '         ' + showDialog() + '\n' + '        ');
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
  Kotlin.defineModule('05-bootstrap', _);
  return _;
}(typeof this['05-bootstrap'] === 'undefined' ? {} : this['05-bootstrap'], kotlin);
