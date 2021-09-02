import { Component, OnInit } from '@angular/core';
import { FlashCardModel } from '../../../../Models/flashcard.models';
import { ListarProductoService } from '../../../../services/Producto/listar-producto.service';
import { NgForm } from '@angular/forms';
import { FlashCardService } from '../../../../services/flash-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-flash-card',
  templateUrl: './crear-flash-card.component.html',
  styleUrls: ['./crear-flash-card.component.css']
})
export class CrearFlashCardComponent implements OnInit {
  flashcard = new FlashCardModel();
  productos:any[]=[];
  constructor(private listarProductoService:ListarProductoService, private flashcardService:FlashCardService, private router:Router) { }

  ngOnInit(): void {
    this.listarProductoService.all().subscribe(resp=>{
      this.productos=resp[2];
    })
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log('formulario invalido');
    }
    this.flashcardService.crear(this.flashcard,localStorage.getItem('token')).subscribe((resp:any)=>{

      this.router.navigate(['/flashcard'])

    })
  }


}
