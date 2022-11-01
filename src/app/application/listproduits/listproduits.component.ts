import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {
   lesprod!:Produit[];
  constructor(private service:ProduitService) { }

  ngOnInit(): void {
    this.lesprod=this.service.getProduits();
  }

}
