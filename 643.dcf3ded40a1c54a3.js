"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[643],{4310:(O,p,t)=>{t.d(p,{P:()=>R});var l=t(6895),T=t(4006),u=t(7489),d=t(3706),v=t(3055),a=t(529),m=t(263),c=t(2340),C=t(4004),s=t(262),e=t(4650);let Z=(()=>{class o{constructor(i,r){this.httpCliente=i,this.authService=r}getHeaders(){return{headers:new a.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.authService.getToken()}`})}}getPeriodoAdsList(){return this.httpCliente.get(`${c.N.baseUrlBackend}/elementos-tela/periodo-ads`,this.getHeaders()).pipe((0,C.U)(r=>r),(0,s.K)(r=>{throw r.error}))}}return o.\u0275fac=function(i){return new(i||o)(e.LFG(a.eN),e.LFG(m.e))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var U=t(9132),A=t(7009),f=t(3238),q=t(9549),E=t(4385),S=t(4859),D=t(266);function P(o,h){if(1&o&&(e.TgZ(0,"mat-option",26),e._uU(1),e.qZA()),2&o){const i=h.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.label," ")}}function I(o,h){if(1&o){const i=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"h4",9),e._uU(5,"Dados Gerais - "),e.TgZ(6,"b"),e._uU(7),e.qZA()()(),e.TgZ(8,"div",10)(9,"div",3)(10,"div",20)(11,"mat-form-field")(12,"mat-label"),e._uU(13,"Per\xedodo"),e.qZA(),e.TgZ(14,"mat-select",21),e.NdJ("valueChange",function(n){e.CHM(i);const g=e.oxw();return e.KtG(g.periodoSelecionado=n)})("selectionChange",function(){e.CHM(i);const n=e.oxw();return e.KtG(n.carregarDados(n.periodoSelecionado))}),e.YNc(15,P,2,2,"mat-option",22),e.qZA()()(),e.TgZ(16,"div",23),e._uU(17," Link relat\xf3rio do cliente: "),e.TgZ(18,"button",24),e.NdJ("click",function(){e.CHM(i);const n=e.oxw();return e.KtG(n.copyText(n.urlCliente))}),e._UZ(19,"i",25),e._uU(20),e.qZA()()()()()()()}if(2&o){const i=e.oxw();e.xp6(7),e.Oqu(i.cliente.nomeEmpresa),e.xp6(7),e.Q6J("value",i.periodoSelecionado),e.xp6(1),e.Q6J("ngForOf",i.periodoList),e.xp6(5),e.hij(" ",i.urlCliente," ")}}let R=(()=>{class o{constructor(i,r,n,g,_,y){this.clienteService=i,this.elementosTelaService=r,this.activatedRoute=n,this.router=g,this.locationStrategy=_,this._snackBar=y,this.idCliente=this.activatedRoute.snapshot.params.idCliente,this.cliente={nomeEmpresa:"",metric:{clicks:"",cpc:"",custoTotal:"",impression:"",invalidClicks:""}},this.periodoSelecionado="TODAY",this.periodoList=[],this.linkPublicRelatorioCliente="asd",this.urlCliente=""}ngOnInit(){this.carregarDados(this.periodoSelecionado),this.carregarCombos()}copyText(i){navigator.clipboard.writeText(i),this._snackBar.open("Link copiado!","Ok")}obterUrlQueryParams(){var i={periodo:null,public:!1};return this.activatedRoute.queryParams.subscribe(r=>{i.periodo=r.periodo,i.public=r.public}),i}carregarDados(i){null!=this.idCliente&&(this.obterUrlQueryParams().public?this.requisicoesHTTP(this.idCliente,this.obterUrlQueryParams().periodo):this.requisicoesHTTP(this.idCliente,i)),this.montarUrlCliente(i)}montarUrlCliente(i){var r=window.location.href;r=r.split("#")[0],this.urlCliente=r=r+"#/public/relatorio-cliente/"+this.idCliente+"?periodo="+i+"&public=true"}requisicoesHTTP(i,r){this.clienteService.getClienteById(i).subscribe(n=>{if(this.cliente=function L(o){return{id:o.id,nome:o.nome,nomeEmpresa:o.nomeEmpresa,metric:{clicks:"",cpc:"",custoTotal:"",impression:"",invalidClicks:""}}}(n),""!=n.adwords){var g=n.adwords.replace(/-/g,"");this.clienteService.getMetrics(g,r).subscribe(_=>{this.cliente.metric=function N(o){return{clicks:o.clicks,cpc:o.cpc,custoTotal:o.custoTotal,impression:o.impression,invalidClicks:o.invalidClicks}}(_)})}})}carregarCombos(){this.elementosTelaService.getPeriodoAdsList().subscribe(i=>{u.each(i,r=>{this.periodoList.push({value:r.value,label:r.label})})})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(v.$),e.Y36(Z),e.Y36(U.gz),e.Y36(U.F0),e.Y36(l.S$),e.Y36(A.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-relatorio-cliente"]],inputs:{showFilters:"showFilters"},standalone:!0,features:[e.jDz],decls:201,vars:6,consts:[[1,"main-content"],[1,"container-fluid"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-info","card-header-icon"],[1,"card-icon"],[1,"material-icons"],[1,"card-title"],[1,"card-body"],[1,"col-xl-3","col-lg-4","col-md-6","col-sm-6"],[1,"card","card-stats"],[1,"card-header","card-header-success","card-header-icon"],[1,"card-category"],[1,"card-footer"],[1,"fa","fa-whatsapp"],[1,"card-header","card-header-warning","card-header-icon"],[1,"col-md-8"],[1,"card-header","card-header-danger","card-header-icon"],[1,"col-3"],[3,"value","valueChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-9"],["mat-raised-button","","matTooltip","Clique para copiar o link",1,"btn","btn-link","btn-twitter",3,"click"],[1,"fa","fa-link"],[3,"value"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,I,21,4,"div",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"i",8),e._uU(9,"insert_chart"),e.qZA()(),e.TgZ(10,"h4",9),e._uU(11,"Dados de Resultado"),e.qZA()(),e.TgZ(12,"div",10)(13,"div",3)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",7)(18,"i",8),e._uU(19,"mail"),e.qZA()(),e.TgZ(20,"p",14),e._uU(21,"FORMUL\xc1RIOS PREENCHIDOS"),e.qZA(),e.TgZ(22,"h3",9),e._uU(23,"000"),e.qZA()(),e._UZ(24,"div",15),e.qZA()(),e.TgZ(25,"div",11)(26,"div",12)(27,"div",13)(28,"div",7),e._UZ(29,"i",16),e.qZA(),e.TgZ(30,"p",14),e._uU(31,"CONTATOS POR WHATSAPP"),e.qZA(),e.TgZ(32,"h3",9),e._uU(33,"000"),e.qZA()(),e._UZ(34,"div",15),e.qZA()(),e.TgZ(35,"div",11)(36,"div",12)(37,"div",13)(38,"div",7)(39,"i",8),e._uU(40,"call"),e.qZA()(),e.TgZ(41,"p",14),e._uU(42,"LIGA\xc7\xd5ES"),e.qZA(),e.TgZ(43,"h3",9),e._uU(44,"0000"),e.qZA()(),e._UZ(45,"div",15),e.qZA()(),e.TgZ(46,"div",11)(47,"div",12)(48,"div",13)(49,"div",7)(50,"i",8),e._uU(51,"apps"),e.qZA()(),e.TgZ(52,"p",14),e._uU(53,"TOTAL DE CONTATOS"),e.qZA(),e.TgZ(54,"h3",9),e._uU(55,"0000"),e.qZA()(),e._UZ(56,"div",15),e.qZA()(),e.TgZ(57,"div",11)(58,"div",12)(59,"div",6)(60,"div",7)(61,"i",8),e._uU(62,"apps"),e.qZA()(),e.TgZ(63,"p",14),e._uU(64,"M\xc9DIA CONTATOS POR DIA"),e.qZA(),e.TgZ(65,"h3",9),e._uU(66,"0000"),e.qZA()(),e._UZ(67,"div",15),e.qZA()(),e.TgZ(68,"div",11)(69,"div",12)(70,"div",6)(71,"div",7)(72,"i",8),e._uU(73,"menu"),e.qZA()(),e.TgZ(74,"p",14),e._uU(75,"AN\xdaNCIOS / CONTATO"),e.qZA(),e.TgZ(76,"h3",9),e._uU(77,"0000"),e.qZA()(),e._UZ(78,"div",15),e.qZA()(),e.TgZ(79,"div",11)(80,"div",12)(81,"div",6)(82,"div",7)(83,"i",8),e._uU(84,"contact_phone"),e.qZA()(),e.TgZ(85,"p",14),e._uU(86,"CLIQUES / CONTATO"),e.qZA(),e.TgZ(87,"h3",9),e._uU(88,"000"),e.qZA()(),e._UZ(89,"div",15),e.qZA()(),e.TgZ(90,"div",11)(91,"div",12)(92,"div",6)(93,"div",7)(94,"i",8),e._uU(95,"trending_up"),e.qZA()(),e.TgZ(96,"p",14),e._uU(97,"% CONTATOS / ACESSOS"),e.qZA(),e.TgZ(98,"h3",9),e._uU(99,"000"),e.qZA()(),e._UZ(100,"div",15),e.qZA()(),e.TgZ(101,"div",11)(102,"div",12)(103,"div",17)(104,"div",7)(105,"i",8),e._uU(106,"attach_money"),e.qZA()(),e.TgZ(107,"p",14),e._uU(108,"CUSTO POR CONTATO"),e.qZA(),e.TgZ(109,"h3",9),e._uU(110,"000"),e.qZA()(),e._UZ(111,"div",15),e.qZA()(),e.TgZ(112,"div",11)(113,"div",12)(114,"div",17)(115,"div",7)(116,"i",8),e._uU(117,"ads_click"),e.qZA()(),e.TgZ(118,"p",14),e._uU(119,"CLIQUES PERSONALIZADOS LP"),e.qZA(),e.TgZ(120,"h3",9),e._uU(121,"000"),e.qZA()(),e._UZ(122,"div",15),e.qZA()()()()()()(),e.TgZ(123,"div",3)(124,"div",4)(125,"div",5)(126,"div",6)(127,"div",7)(128,"i",8),e._uU(129,"query_stats"),e.qZA()(),e.TgZ(130,"div",3)(131,"div",18)(132,"h4",9),e._uU(133,"Dados Estat\xedsticos"),e.qZA()()()(),e.TgZ(134,"div",10)(135,"div",3)(136,"div",11)(137,"div",12)(138,"div",6)(139,"div",7)(140,"i",8),e._uU(141,"menu"),e.qZA()(),e.TgZ(142,"p",14),e._uU(143,"QUANTIDADE DE AN\xdaNCIOS"),e.qZA(),e.TgZ(144,"h3",9),e._uU(145),e.qZA()(),e._UZ(146,"div",15),e.qZA()(),e.TgZ(147,"div",11)(148,"div",12)(149,"div",6)(150,"div",7)(151,"i",8),e._uU(152,"open_in_browser"),e.qZA()(),e.TgZ(153,"p",14),e._uU(154,"ACESSOS AO SITE"),e.qZA(),e.TgZ(155,"h3",9),e._uU(156),e.qZA()(),e._UZ(157,"div",15),e.qZA()(),e.TgZ(158,"div",11)(159,"div",12)(160,"div",6)(161,"div",7)(162,"i",8),e._uU(163,"trending_up"),e.qZA()(),e.TgZ(164,"p",14),e._uU(165,"% ACESSOS / AN\xdaNCIOS (CTR)"),e.qZA(),e._UZ(166,"h3",9),e.qZA(),e._UZ(167,"div",15),e.qZA()(),e.TgZ(168,"div",11)(169,"div",12)(170,"div",19)(171,"div",7)(172,"i",8),e._uU(173,"close"),e.qZA()(),e.TgZ(174,"p",14),e._uU(175,"CLIQUES INV\xc1LIDOS"),e.qZA(),e.TgZ(176,"h3",9),e._uU(177),e.qZA()(),e._UZ(178,"div",15),e.qZA()(),e.TgZ(179,"div",11)(180,"div",12)(181,"div",17)(182,"div",7)(183,"i",8),e._uU(184,"attach_money"),e.qZA()(),e.TgZ(185,"p",14),e._uU(186,"CUSTO TOTAL"),e.qZA(),e.TgZ(187,"h3",9),e._uU(188),e.qZA()(),e._UZ(189,"div",15),e.qZA()(),e.TgZ(190,"div",11)(191,"div",12)(192,"div",17)(193,"div",7)(194,"i",8),e._uU(195,"attach_money"),e.qZA()(),e.TgZ(196,"p",14),e._uU(197,"CUSTO POR CLIQUE (CPC)"),e.qZA(),e.TgZ(198,"h3",9),e._uU(199),e.qZA()(),e._UZ(200,"div",15),e.qZA()()()()()()()()()),2&i&&(e.xp6(2),e.Q6J("ngIf",r.showFilters),e.xp6(143),e.Oqu(r.cliente.metric.impression),e.xp6(11),e.Oqu(r.cliente.metric.clicks),e.xp6(21),e.Oqu(r.cliente.metric.invalidClicks),e.xp6(11),e.hij("R$ ",r.cliente.metric.custoTotal,""),e.xp6(11),e.hij("R$ ",r.cliente.metric.cpc,""))},dependencies:[d.q,f.ey,q.KE,q.hX,E.gD,S.lW,D.gM,T.UX,l.ez,l.sg,l.O5]}),o})()},1114:(O,p,t)=>{t.d(p,{b:()=>u});var l=t(4650),T=t(9132);let u=(()=>{class d{constructor(a){this.router=a}canActivate(a,m){const c=a.paramMap.get("idCliente");return!!this.possuiApenasNumeros(c)||(this.router.navigate(["clientes"]),!1)}possuiApenasNumeros(a){return/^\d+$/.test(a)}}return d.\u0275fac=function(a){return new(a||d)(l.LFG(T.F0))},d.\u0275prov=l.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3055:(O,p,t)=>{t.d(p,{$:()=>m});var l=t(529),T=t(263),u=t(2340),d=t(4004),v=t(262),a=t(4650);let m=(()=>{class c{constructor(s,e){this.httpCliente=s,this.authService=e}getHeaders(){return new l.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.authService.getToken()}`})}getAllClientes(){return this.httpCliente.get(`${u.N.baseUrlBackend}/cliente/get-all`,{headers:this.getHeaders()}).pipe((0,d.U)(e=>e),(0,v.K)(e=>{throw e.error}))}getClienteById(s){return this.httpCliente.get(`${u.N.baseUrlBackend}/cliente/get/${s}`,{headers:this.getHeaders()}).pipe((0,d.U)(Z=>Z),(0,v.K)(Z=>{throw Z.error}))}getMetrics(s,e){const Z=`${u.N.baseUrlBackend}/cliente/metrics/${s}`,U=(new l.LE).set("periodo",e);return this.httpCliente.get(Z,{headers:this.getHeaders(),params:U}).pipe((0,d.U)(A=>A),(0,v.K)(A=>{throw A.error}))}}return c.\u0275fac=function(s){return new(s||c)(a.LFG(l.eN),a.LFG(T.e))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);