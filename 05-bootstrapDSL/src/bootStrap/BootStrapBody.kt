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
/*
${formGroupControlGenre()}
${formGroupControlCountry()}
${formControlAddress()}
${formControlLegal()}
*/
private fun formControlLegal() =
       ""/*
        formGroup
                 """
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                <label> <input type="checkbox"> Acepto los terminos y condiciones</label>
                            </div>
                        </div>
                 """
        }

*/
        private fun formControlAddress() =
                """
            <div class="form-group">
                <label htmlfor="Address" class="col-sm-2 control-label">Dirección</label>
                <div class="col-sm-10">
                    <textarea name="" cols="" rows="" class="form-control"></textarea>
                </div>
            </div>
        """

            private fun formGroupControlCountry() =
                    """
            <div class="form-group">
                <label htmlfor="State" class="col-sm-2 control-label">País</label>
                <div class="col-sm-10">
                    <select class="form-control">
                        <option>España</option>
                        <option>Francia</option>
                        <option>Italia</option>
                        <option>Otros</option>
                    </select>
                </div>
            </div>
        """











