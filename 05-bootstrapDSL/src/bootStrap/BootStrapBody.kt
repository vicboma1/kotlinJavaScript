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
            div {
                classes = setOf("col-sm-10")
                div {
                    classes = setOf("input-group input-group-sm")
                    span{
                        classes = setOf("input-group-addon")
                        +"@"
                    }
                    input {
                        classes = setOf("form-control")
                        type = InputType.text
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
}
/*
${formGroupRePass()}
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

            private fun formGroupControlGenre() =
                    """
             <div class="form-group">
                <label class="col-sm-2 control-label">Género</label>
                <div class="col-sm-10">
                    <div class="radio-inline">
                        <label> <input id="radiobutton1" name="sampleradiobutton" value="" type="radio">Masculino</label>
                    </div>
                    <div class="radio-inline">
                        <label> <input id="radiobutton2" name="sampleradiobutton" value="" type="radio">Femenino</label>
                    </div>
                </div>
            </div>
        """

            private fun formGroupRePass() =
                    """
            <div class="form-group">
                <label htmlfor="password" class="col-sm-2 control-label">Confirmar password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="confirmpass">
                </div>
            </div>
        """









