package bootStrap

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlin.browser.document

fun showDialog() =
        document.create.div {
            classes= setOf("modal fade")
            id="Modal"
            attributes["tabindex"] ="-1"
            role ="dialog"
            attributes["aria-labelledby"] ="exampleModalLabel"
            attributes["aria-hidden"]="true"
            dialogModal()
        }

private fun DIV.dialogModal() {
    div {
        classes = setOf("modal-dialog")
        role = "document"
        containerModal()
    }
}

private fun DIV.containerModal() {
    div {
        classes = setOf("modal-content")
        headerModal()
        bodyModal()
        footerModal()
    }
}

private fun DIV.headerModal() {
    div {
        classes = setOf("modal-header")
        h5 {
            classes = setOf("modal-title")
            id = "exampleModalLabel"
            +"Solicitud realizada con éxito"
        }
        button {
            type = ButtonType.button
            classes = setOf("close")
            attributes["data-dismiss"] = "modal"
            attributes["aria-label"] = "Close"
            span {
                attributes["aria-hidden"] = "true"
                +"x"
            }
        }
    }
}

private fun DIV.bodyModal() {
    div {
        classes = setOf("modal-body")
        +"Su formulario se ha rellenado correctamente "
    }
}

private fun DIV.footerModal() {
    div {
        classes = setOf("modal-footer")
        button {
            type = ButtonType.button
            classes = setOf("btn btn-secondary")
            attributes["data-dismiss"] = "modal"
            +"Aceptar"
        }
        span { }
        button {
            type = ButtonType.button
            classes = setOf("btn btn-primary")
            attributes["data-dismiss"] = "modal"
            +"Cancelar"
        }
    }
}





