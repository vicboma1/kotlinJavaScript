
import bootStrap.panelBody
import bootStrap.panelFoorter
import bootStrap.panelHeader
import bootStrap.showDialog
import kotlin.browser.document

/**
 * Created by vicboma on 08/05/2018.
 */
fun main(args: Array<String>) {
    injectHtml(
        """
         ${panelBody()}"""
    )
}

private fun injectHtml(innerHtml: String, panel:String = "panel") =
        document.getElementById(panel)
               ?.apply {
                   appendChild(panelHeader())
                   innerHTML = innerHtml
                   appendChild(panelFoorter())
                   appendChild(showDialog())
               }