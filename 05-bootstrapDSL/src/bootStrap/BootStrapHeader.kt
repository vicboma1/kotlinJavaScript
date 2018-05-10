package bootStrap

import kotlinx.html.classes
import kotlinx.html.dom.create
import kotlinx.html.h3
import kotlinx.html.js.div
import kotlin.browser.document

/*
<div class="panel-heading">
    <h3 class="panel-title text-center">Formulario</h3>
</div>
*/
fun panelHeader() =
        document.create.div {
            classes = setOf("panel-heading")
            h3 {
                classes = setOf("panel-title text-center")
                +"Formulario w/ Kotlin JS - vicboma1"
            }
        }

