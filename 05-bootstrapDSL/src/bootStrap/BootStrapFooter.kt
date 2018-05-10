package bootStrap

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlin.browser.document


/*
<div class="panel-footer" style="overflow:hidden;text-align:right;">
     ${buttonGroup()}
</div>
*/
fun panelFoorter()=
        document.create.div {
            classes = setOf("panel-footer")
            style = "overflow:hidden;text-align:right;"
            buttonGroup()
        }

/*
<div class="form-group">
     ${colButton()}
</div>
*/
private fun DIV.buttonGroup() {
    div {
        classes = setOf("form-group")
        colButton()
    }
}

/*
<div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-success btn-sm" data-toggle="modal" data-target="#Modal" >Enviar</button>
        <button type="submit" class="btn btn-default btn-sm" >Cancelar</button>
</div>
*/
private fun DIV.colButton() {
    div {
        classes = setOf("col-sm-offset-2 col-sm-10")
        button {
            type = ButtonType.submit
            classes = setOf("btn btn-success btn-sm")
            attributes["data-toggle"] = "modal"
            attributes["data-target"] = "#Modal"
            +"Enviar"
        }
        span {  }
        button {
            type = ButtonType.submit
            classes = setOf("btn btn-default btn-sm")
            +"Cancelar"
        }
    }
}