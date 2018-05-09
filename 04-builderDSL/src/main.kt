import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.div
import kotlinx.html.js.onClickFunction
import kotlin.browser.document
import kotlin.browser.window

/**
 * Created by vicboma on 08/05/2018.
 */
fun main(args: Array<String>) {

    document.getElementById("parent")
            ?.appendChild(
                    document.create.form {
                        action = "#"
                        method = FormMethod.post
                        encType = FormEncType.multipartFormData

                        inputRow("Nombre ", "name")
                        inputRow("Email ", "email")
                        inputMessage()
                        submitButton()
                    }
            )
}

private fun FORM.submitButton() {
    button {
        text("Enviar")
        id = "submit_button"

        onClickFunction = {
            window.alert("Mensaje envíado")
        }
    }
}

private fun FORM.inputRow(labelName : String, inputName: String) {
    div {
        id = "row"
        label {
            htmlFor = labelName
            text("$labelName: ")
        }
        br
        input {
            id = inputName
            name = inputName
            type = InputType.text
            value = ""
            size = "30"
        }
        br
        span {
            id = "{$inputName}_validation"
        }
    }
}

private fun FORM.inputMessage() {
    div {
        id = "row"
        label {
            htmlFor = "mensaje"
            text("Mensaje: ")
        }
        br
        textArea {
            id = "mensaje"
            name = "mensaje"
            rows = "7"
            cols="30"
        }
        br
        span {
            id = "mensaje_validation"
        }
    }
}
