package bootStrap

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlin.browser.document

fun panelFoorter()=
        document.create.div {
            classes = setOf("panel-footer")
            style = "overflow:hidden;text-align:right;"
            buttonGroup()
        }

private fun DIV.buttonGroup() {
    div {
        classes = setOf("form-group")
        colButton()
    }
}

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
    }
}