"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["src_app_pages_tabs_favorito_favorito_module_ts"],{6598:(y,d,n)=>{n.r(d),n.d(d,{FavoritoPageModule:()=>Z});var g=n(6895),m=n(433),i=n(2346),c=n(1407),v=n(6052),t=n(8256),p=n(9647),f=n(8334);function h(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"ion-list")(1,"div",5),t.NdJ("click",function(){const s=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.verDetalle(s))}),t.TgZ(2,"ion-item")(3,"ion-thumbnail",6),t._UZ(4,"img",7),t.qZA(),t.TgZ(5,"ion-toolbar")(6,"ion-label")(7,"ion-label",8),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"ion-label",9)(14,"ion-buttons",10)(15,"ion-button",11),t.NdJ("click",function(){const s=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.eliminar(s))}),t._UZ(16,"ion-icon",12),t.qZA()()()()()()()}if(2&e){const o=a.$implicit,r=t.oxw();t.xp6(4),t.Q6J("src",r.rutas.apiUrl+"ServicioAux/GetImageRest3?CarpetaCod=4&ImagenCod="+o.ProductoCod+".jpg",t.LSH),t.xp6(4),t.Oqu(o.ProductoNombre),t.xp6(2),t.hij(" ",o.LineaDes,""),t.xp6(2),t.Oqu(o.GrupoDes)}}const P=[{path:"",component:(()=>{class e{constructor(o,r,l,s){this.router=o,this.nav=r,this.servicio=l,this.rutas=s}ngOnInit(){this.favoritos()}favoritos(){v.K.get({key:"favorito"}).then(o=>{this.lista=JSON.parse(o.value)})}back(){this.nav.back()}doRefresh(o){setTimeout(()=>{this.favoritos(),o.target.complete()},1e3)}eliminar(o){this.lista=this.lista.filter(r=>r.ProductoId!=o.ProductoId),v.K.set({key:"favorito",value:JSON.stringify(this.lista)})}verDetalle(o){this.servicio.post(this.rutas.productoDetalle,{Cmd:[1,3,2,0],Datos:{EmpresaId:1,GestionId:1,ProductoId:o.ProductoId}}).then(l=>{this.router.navigate(["/producto-detalle"],{queryParams:{producto:JSON.stringify(o),detalle:JSON.stringify(l.Datos[0])}})})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.F0),t.Y36(i.SH),t.Y36(p.l),t.Y36(f.R))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorito"]],decls:8,vars:1,consts:[["color","primary"],[1,"titulo"],[1,"ion-padding"],["slot","fixed",3,"ionRefresh"],[4,"ngFor","ngForOf"],["button","",3,"click"],["slot","start"],[1,"img",3,"src"],[1,"tx"],["slot","secondary"],["slot","secondary",1,"add"],[3,"click"],["slot","icon-only","color","primary","name","trash"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),t._uU(3,"Favorito"),t.qZA()()(),t.TgZ(4,"ion-content",2)(5,"ion-refresher",3),t.NdJ("ionRefresh",function(s){return r.doRefresh(s)}),t._UZ(6,"ion-refresher-content"),t.qZA(),t.YNc(7,h,17,4,"ion-list",4),t.qZA()),2&o&&(t.xp6(7),t.Q6J("ngForOf",r.lista))},dependencies:[g.sg,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.Ie,i.Q$,i.q_,i.nJ,i.Wo,i.Bs,i.wd,i.sr],styles:[".md[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{text-align:center}.img[_ngcontent-%COMP%]{object-fit:resize;height:100%;width:auto!important;border:0;padding:0}"]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(P),c.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,m.u5,i.Pc,F]}),e})()}}]);