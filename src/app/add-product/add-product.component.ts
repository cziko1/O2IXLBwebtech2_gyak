import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm :FormGroup;
  name : string;
  price : number;
  quality : string;
  weight : number;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private appService: AppService

  ) { this.validatorForm(); }

  ngOnInit(): void {
  }

  validatorForm() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quality: ['', [Validators.required]],
      weight: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      alert('nem sikerült az új terméket felvenni :(');
      return false;

    } else {
      this.appService.addProduct(this.productForm.value).subscribe(
        (res) => {
          alert('Hophop, új termékek kerültek fel a Webshopra. Nézzük meg!');
          this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
        }, (error) => {
          console.log(error);
        });
    }
  }
}
