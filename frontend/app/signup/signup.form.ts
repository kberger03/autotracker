// signup.form.ts
//The form structure for adding an user
export class SignupForm {
    constructor(
        public name: string,
        public email: string,
        public username: string,
        public password: string
    ) { }
}