"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["src_app_pages_tabs_pedido_pedido_module_ts"],{2837:(v,r,d)=>{d.r(r),d.d(r,{PedidoPageModule:()=>m});var l=d(6895),c=d(433),n=d(2346),a=d(1407),e=d(8256),u=d(9647),P=d(8334);const p=[{path:"",component:(()=>{class t{constructor(o,s,h){this.servicio=o,this.rutas=s,this.router=h}ngOnInit(){this.pedidos()}pedidos(){this.servicio.post(this.rutas.pedido,{Cmd:[1,2,3,0],Datos:{EmpresaId:this.rutas.EmpresaId,EstadoId:1}}).then(s=>{this.lista=s.Datos})}detalle(o){this.router.navigate(["/pedido-detalle"],{queryParams:{detalle:JSON.stringify(o)}})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u.l),e.Y36(P.R),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pedido"]],decls:7,vars:0,consts:[["color","primary"],[1,"titulo"],[1,"ion-padding"],[2,"text-align","center"]],template:function(o,s){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e._uU(3,"Pedidos"),e.qZA()()(),e.TgZ(4,"ion-content",2)(5,"div",3),e._uU(6,"A\xfan no disponible "),e.qZA()())},dependencies:[n.W2,n.Gu,n.wd,n.sr],styles:[".md[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{text-align:center}.tx[_ngcontent-%COMP%]{white-space:initial}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(p),a.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,c.u5,n.Pc,g]}),t})()}}]);