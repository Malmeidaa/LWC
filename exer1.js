import { LightningElement } from "lwc";

export default class App extends LightningElement {
 empresa ="MamacoCorp";
 cnpj="00.111.222/0001-11";
 endereco="Rua da rua, 0000";
 produto ="Melancia";
 descricao="Vermelhinha e docinha";
 preco=19.9;
 oferta1="Leve 1 pague2";
 oferta2="Leve 5 pague 10";
 visible = true;
 visible1 = true;
 

 esconder(){
    this.visible1 = !this.visible1;
 }
 

      
 }
       


