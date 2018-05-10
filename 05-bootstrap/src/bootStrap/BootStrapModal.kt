package bootStrap

fun showDialog() =
        """
         <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                ${content()}
            </div>
        </div>
    """

private fun content() =
        """
            <div class="modal-content">
                ${header()}
                ${body()}
                ${footer()}
            </div>
        """

private fun footer() =
        """
             <div class="modal-footer">
                ${button("btn btn-secondary","Cerrar")}
                ${button("btn btn-primary","Aceptar")}
            </div>
        """

private fun button(_class:String, title:String ) = """<button type="button" class="${_class}" data-dismiss="modal">${title}</button>"""

private fun body() =
    """
        <div class="modal-body">
            Su formulario se ha rellenado correctamente"
        </div>
    """

private fun header() =
        """
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud realizada con éxito</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        """



