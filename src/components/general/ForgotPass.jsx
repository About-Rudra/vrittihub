import React from 'react';


function ForgotPass() {

    return (
        <div id="forgotPassContainer">
            <div id="forgotPassh1">
                <h1>Reset Password?</h1>
            </div>
            <div id="forgotPassForm"><form>
                <div class="form-group">
                    <label for="exampleInputEmail1">New Password</label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
                </div>

                <button type="submit" class="btn btn-primary" id="submitButton" >Submit</button>
            </form></div>
        </div>
    );
}
export default ForgotPass;