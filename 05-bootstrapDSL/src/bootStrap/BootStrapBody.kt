package bootStrap

fun panelBody() =
        """
            <div class="panel-body">
                <form class="form-horizontal" role="form">
                    ${formGroupName()}
                    ${formGroupEmail()}
                    ${formGroupPass()}
                    ${formGroupRePass()}
                    ${formGroupControlGenre()}
                    ${formGroupControlCountry()}
                    ${formControlAddress()}
                    ${formControlLegal()}
                </form>
            </div>
        """

private fun formControlLegal() =
       ""/*
        formGroup
                 """
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                <label> <input type="checkbox"> Acepto los terminos y condiciones</label>
                            </div>
                        </div>
                 """
        }

*/
        private fun formControlAddress() =
                """
            <div class="form-group">
                <label htmlfor="Address" class="col-sm-2 control-label">Dirección</label>
                <div class="col-sm-10">
                    <textarea name="" cols="" rows="" class="form-control"></textarea>
                </div>
            </div>
        """

            private fun formGroupControlCountry() =
                    """
            <div class="form-group">
                <label htmlfor="State" class="col-sm-2 control-label">País</label>
                <div class="col-sm-10">
                    <select class="form-control">
                        <option>España</option>
                        <option>Francia</option>
                        <option>Italia</option>
                        <option>Otros</option>
                    </select>
                </div>
            </div>
        """

            private fun formGroupControlGenre() =
                    """
             <div class="form-group">
                <label class="col-sm-2 control-label">Género</label>
                <div class="col-sm-10">
                    <div class="radio-inline">
                        <label> <input id="radiobutton1" name="sampleradiobutton" value="" type="radio">Masculino</label>
                    </div>
                    <div class="radio-inline">
                        <label> <input id="radiobutton2" name="sampleradiobutton" value="" type="radio">Femenino</label>
                    </div>
                </div>
            </div>
        """

            private fun formGroupRePass() =
                    """
            <div class="form-group">
                <label htmlfor="password" class="col-sm-2 control-label">Confirmar password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="confirmpass">
                </div>
            </div>
        """

            private fun formGroupPass() =
                    """
            <div class="form-group">
            <label htmlfor="password" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="pass">
            </div>
            </div>
        """

            private fun formGroupEmail() =
                    """
            <div class="form-group">
                <label htmlfor="gmail" class="col-sm-2 control-label">Gmail</label>
                <div class="col-sm-10">
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon">@</span>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                </div>
            </div>
        """


            private fun formGroupName() =
                    """
             <div class="form-group">
                <label htmlfor="name" class="col-sm-2 control-label">Nombre </label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="_email">
                </div>
             </div>
        """

