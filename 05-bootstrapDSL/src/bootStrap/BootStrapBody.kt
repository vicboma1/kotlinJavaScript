package bootStrap

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlin.browser.document

fun panelBody() =
        document.create.div {
            classes=setOf("panel-body")
            form {
                classes=setOf("form-horizontal")
                role="form"
                formGroupName()
                formGroupEmail()
                formGroupPass()
                formGroupRePass()
                formGroupControlGenre()
                formGroupControlCountry()
                formControlAddress()
                formControlLegal()
            }
        }


private fun FORM.formControlLegal() =
        div {
            classes= setOf("form-group form-check")
            div {
                classes= setOf("form-check")
                input {
                    classes= setOf("form-check-input")
                    type=InputType.checkBox
                }
                label {
                    classes= setOf("form-check-label")
                    htmlFor="gridCheck"
                    +" Acepto los términos y condiciones"
                }
            }
        }

private fun FORM.formControlAddress() =
        div{
            classes=setOf("form-group")
            label {
                classes=setOf("col-sm-2 control-label")
                htmlFor="Address"
                +"Dirección"
            }
            div {
                classes = setOf("col-sm-10")
                textArea {
                    classes = setOf("form-control")
                    name=""
                    cols=""
                    rows=""
                }
            }
        }

private fun FORM.formGroupControlCountry() =
        div{
            classes=setOf("form-group")
            label {
                classes=setOf("col-sm-2 control-label")
                htmlFor="State"
                +"País"
            }
            div {
                classes = setOf("col-sm-10")
                select {
                    classes = setOf("form-control")
                    option { +"España" }
                    option { +"Francia" }
                    option { +"Italia" }
                    option { +"Otros" }
                }
            }
        }

private fun FORM.formGroupControlGenre() =
        div {
            classes = setOf("form-group")
            label {
                classes = setOf("col-sm-2 control-label")
                htmlFor = "genero"
                +"Género"
            }
            div {
                classes = setOf("col-sm-10")
                div {
                    classes = setOf("radio-inline")
                    div {
                        classes=setOf("form-check form-check-inline")
                        input {
                            classes=setOf("form-check-input")
                            id = "radiobutton1"
                            name = "sampleradiobutton"
                            value = ""
                            type = InputType.radio
                        }
                        label {
                            classes=setOf("form-check-label")
                            +"Masculino  "
                        }
                    }

                    div {
                        classes=setOf("form-check form-check-inline")
                        input {
                            classes=setOf("form-check-input")
                            id = "radiobutton2"
                            name = "sampleradiobutton"
                            value = ""
                            type = InputType.radio
                        }
                        label {
                            classes=setOf("form-check-label")
                            +"Femenino  "
                        }
                    }
                }
            }
        }


private fun FORM.formGroupRePass() =
        div{
            classes=setOf("form-group")
            label {
                classes=setOf("col-sm-2 control-label")
                htmlFor="password"
                +"Confirmar Password"
            }
            div {
                classes=setOf("col-sm-10")
                input {
                    type = InputType.password
                    classes=setOf("form-control")
                    id="confirmpass"
                }
            }
        }

private fun FORM.formGroupPass() =
        div{
            classes=setOf("form-group")
            label {
                classes=setOf("col-sm-2 control-label")
                htmlFor="password"
                +"Password"
            }
            div {
                classes=setOf("col-sm-10")
                input {
                    type = InputType.password
                    classes=setOf("form-control")
                    id="pass"
                }
            }
        }

private fun FORM.formGroupEmail() {
    div {
        classes = setOf("form-group")
        label {
            classes = setOf("col-sm-2 control-label")
            htmlFor = "gmail"
            +"Gmail "
        }
        div {
            classes = setOf("col-sm-10")
            div {
                classes = setOf("mb-2")
                div {
                    classes = setOf("input-group-prepend")
                    div {
                        classes = setOf("input-group-text")
                        +"@"
                    }
                    input {
                        classes = setOf("form-control")
                        type = InputType.text
                        id = "inlineFormInputGroup"
                    }
                }
            }

        }

    }
}

private fun FORM.formGroupName() {
    div {
        classes = setOf("panel-body")
        label {
            classes = setOf("col-sm-2 control-label")
            htmlFor = "name"
            +"Nombre "
        }
        div {
            classes = setOf("col-sm-10")
            input {
                classes = setOf("form-control")
                type = InputType.email
                id = "_email"
            }
        }

    }
}















