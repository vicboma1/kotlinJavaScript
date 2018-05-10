import bootStrap.panelBody
import bootStrap.panelFoorter
import bootStrap.panelHeader
import bootStrap.showDialog
import kotlin.browser.document
import
/**
 * Created by vicboma on 08/05/2018.
 */
fun main(args: Array<String>) {
    injectHtml(
        """
         ${panelHeader()}
         ${panelBody()}
         ${panelFoorter()}
         ${showDialog()}
        """
    )

    html


}

private fun injectHtml(innerHtml: String, panel:String = "panel") =
        document.getElementById(panel)
               ?.apply {
                    innerHTML = innerHtml
               }