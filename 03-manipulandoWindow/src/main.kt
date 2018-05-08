
import kotlin.browser.document
import kotlin.browser.window

/**
 * Created by vicboma on 08/05/2018.
 */

fun main(args: Array<String>) {

    window.alert("Mensaje de alerta")

    window.confirm("Mensaje de confirmación")

    document.body?.appendChild(
            document.createElement("button")
                    .apply {
                        textContent="Cerrar ventana"
                        addEventListener("click",{
                            window.close()
                        })
                    }
    )
}
