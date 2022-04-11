import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  listaCompras = this.carrinho.listar()
  comprados = this.carrinho.listar()

  constructor(
    private carrinho : CarrinhoService,
    private produto: ProdutoService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  total(){
    return this.comprados.map((item)=> item.preco).reduce((a,b)=> a + b, 0);

  }

  parcela(){
    return this.total()/12
  }

  confirmar(){
    this.carrinho.limpar()
    this.router.navigate(['/home'])
    alert('Compra realizada com sucesso, volte sempre 😁')

  }

  limpar(){
    this.carrinho.limpar()
    alert('Carrinho limpado com sucesso!')
  }

}
