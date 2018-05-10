package bootStrap

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlin.browser.document
import kotlin.browser.window

fun panelFoorter()=
        document.create.div {
            classes = setOf("panel-footer")
            buttonGroup()
            style {
                +"overflow:hidden;text-align:right;"
            }
        }
      /*  """
            <div class="panel-footer" style="overflow:hidden;text-align:right;">
              ${buttonGroup()}
            </div>
 */


private fun buttonGroup() =
        document.create.div {
            classes = setOf("form-group")
            colButton()
        }

     /*   """
            <div class="form-group">
                     ${colButton()}
            </div>
        """
*/

private fun colButton() =
        document.create.div {
            classes = setOf("col-sm-offset-2 col-sm-10")
            button {
                type=ButtonType.submit
                classes= setOf("btn btn-success btn-sm")
                attributes["data-toggle"] = "modal"
                attributes["data-target"] = "#Modal"
                +"Enviar*****"
            }
            button {
                type=ButtonType.submit
                classes= setOf("btn btn-success btn-sm")
                +"Cancelar*****"
            }

    }

/*"""
            <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-success btn-sm" data-toggle="modal" data-target="#Modal" >Enviar</button>
                    <button type="submit" class="btn btn-default btn-sm" >Cancelar</button>
            </div>
        """
*/