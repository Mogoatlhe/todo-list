import Swal from "sweetalert2";

export class SweetAlert{

    constructor(type, title, text){
        Swal.fire({
            icon: type,
            title: title,
            text: text
        })
    }
}