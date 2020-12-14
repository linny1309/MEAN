import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

import { imageType } from '../../validators/image-type.validator';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      lastName: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      phoneNumber: new FormControl(null,
          {validators: [Validators.required, Validators.minLength(13)] ,
          }),
      dob: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      state: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      city: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      zip: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      institution: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      degree: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      gradYear: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      major: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      minor: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      org: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      position: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      jobStart: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      jobEnd: new FormControl(null,
        {validators: [Validators.required, Validators.minLength(2)] ,
        }),
      image: new FormControl(null,
        {validators: [Validators.required], asyncValidators: [imageType]
        }),
      totalExp: new FormControl(null,
        {validators: [Validators.required], asyncValidators: [imageType]
        }),
      skills: new FormControl(null,
        {validators: [Validators.required], asyncValidators: [imageType]
        })
    });
  }

}
