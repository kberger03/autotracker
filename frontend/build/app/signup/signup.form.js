"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// signup.form.ts
//The form structure for adding an user
var SignupForm = (function () {
    function SignupForm(name, email, username, password) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    return SignupForm;
}());
exports.SignupForm = SignupForm;
