
import bootStrap.panelBody
import bootStrap.panelFoorter
import bootStrap.panelHeader
import bootStrap.showDialog
import kotlin.browser.document

/**
 * Created by vicboma on 08/05/2018.
 */
fun main(args: Array<String>) {
    document.apply {
        getElementById("header")?.appendChild(panelHeader())
        getElementById("body")?.apply {
            appendChild(panelBody())
            appendChild(panelFoorter())
            appendChild(showDialog())
        }
    }
}



