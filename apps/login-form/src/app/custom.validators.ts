import { FormControl } from '@angular/forms';
import { EmailService } from './email.service';

export class customValidators {
    constructor(private emailService: EmailService) {

    }
    
    // static emailTaken(control: FormControl, ...emailService) {
    //     console.log(emailService)
    //     // customValidators.emailService.getEmail(control.value)
    //     //     .subscribe(isTaken => {
    //     //     // this.emailError = (isUsed === 'true')
    //     //     console.log('validator: ', isTaken)
            
    //     //     })


    //     if(true) {
    //         return {
    //             emailTaken: true
    //         }
    //     }

    //     return null
    // }
}