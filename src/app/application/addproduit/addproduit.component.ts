import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];
  constructor(private service:FormBuilder, private prodservice:ProduitService) { }
  productForm!: FormGroup;


  // productForm: FormGroup = new FormGroup({
  //   reference:new FormControl(0,{nonNullable:true}),
  //   libelle: new FormControl(''),
  //   madeIn: new FormControl('Tunisie',{nonNullable:true}),
  //   categorie: new FormControl('Accessoires',{nonNullable:true}),
  //   nouveau : new FormControl(true,{nonNullable:true})
  //   });


    onSubmitForm()
    {
      console.log(this.productForm.value);
      console.log(this.productForm.value.reference);
      console.log(this.productForm.value['libelle']);
      console.log(this.productForm.get('madeIn')?.value);
      console.log(this.productForm.controls['categorie'].value);
      this.prodservice.addProduit(this.productForm.value);


    }

    onReset()
    {
      this.productForm.reset();
      this.productForm.get('madeIn')?.setValue('Autre');
      this.productForm.get('categorie')?.setValue('Fourniture');
    }
     
    


  ngOnInit(): void {
    
      this.productForm = this.service.nonNullable.group({
      reference:[0],
      libelle: [''],
      madeIn: ['Tunisie'],
      categorie: ['Accessoires'],
      nouveau : true
      })
      this.productForm.get('nouveau')?.setValue(false);
      
      
  }

}
