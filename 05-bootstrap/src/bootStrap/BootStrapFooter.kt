package bootStrap

import kotlinx.html.*
import kotlin.browser.document
import kotlin.browser.window

fun panelFoorter()=
        """
            <div class="panel-footer" style="overflow:hidden;text-align:right;">
              ${buttonGroup()}
            </div>
        """

private fun buttonGroup() =
        """
            <div class="form-group">
                     ${colButton()}
            </div>
        """


private fun colButton() =
        """
            <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-success btn-sm" data-toggle="modal" data-target="#Modal" >Enviar</button>
                    <button type="submit" class="btn btn-default btn-sm" >Cancelar</button>
            </div>
        """
