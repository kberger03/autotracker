// addVehicleModal.form.ts
export class addVehicleModalForm {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public color: string,
        public pdriver: string,
        public nickname: string
    ) { }
}