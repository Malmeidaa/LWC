import { LightningElement } from "lwc";

export default class App extends LightningElement {
 
 visible = true;
 visible1 = false;

 esconder(){
   this.visible =! this.visible;
   this.visible1 =! this.visible1;
 }

}
