"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[640],{6640:(k,c,d)=>{d.r(c),d.d(c,{DashboardModule:()=>q});var p=d(9132),u=d(6895),g=d(4006),h=d(4418),m=d(3706),l=d(9727),t=d(4650);function b(i,s){if(1&i&&(t.TgZ(0,"tr")(1,"td")(2,"div",3),t._UZ(3,"img",4),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",5),t._uU(7),t.qZA(),t.TgZ(8,"td",5),t._uU(9),t.qZA()()),2&i){const a=s.$implicit;t.xp6(3),t.MGl("src","./assets/img/flags/",a[0],".png",t.LSH),t.xp6(2),t.hij(" ",a[1]," "),t.xp6(2),t.hij(" ",a[2]," "),t.xp6(2),t.hij(" ",a[3]," ")}}let T=(()=>{class i{constructor(){}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-md-table"]],inputs:{title:"title",subtitle:"subtitle",cardClass:"cardClass",data:"data"},decls:4,vars:1,consts:[[1,"content","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"flag"],["alt","",3,"src"],[1,"text-right"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"table",1)(2,"tbody"),t.YNc(3,b,10,4,"tr",2),t.qZA()()()),2&a&&(t.xp6(3),t.Q6J("ngForOf",e.data.dataRows))},dependencies:[u.sg],encapsulation:2,changeDetection:0}),i})();var v=d(4859),A=d(266);const U=[{path:"",children:[{path:"dashboard",component:(()=>{class i{startAnimationForLineChart(a){let e,r,n;e=0,r=80,n=500,a.on("draw",function(o){"line"===o.type||"area"===o.type?o.element.animate({d:{begin:600,dur:700,from:o.path.clone().scale(1,0).translate(0,o.chartRect.height()).stringify(),to:o.path.clone().stringify(),easing:l.Svg.Easing.easeOutQuint}}):"point"===o.type&&(e++,o.element.animate({opacity:{begin:80*e,dur:500,from:0,to:1,easing:"ease"}}))}),e=0}startAnimationForBarChart(a){let e,r,n;e=0,r=80,n=500,a.on("draw",function(o){"bar"===o.type&&(e++,o.element.animate({opacity:{begin:80*e,dur:500,from:0,to:1,easing:"ease"}}))}),e=0}ngOnInit(){this.tableData={headerRow:["ID","Name","Salary","Country","City"],dataRows:[["US","USA","2.920\t","53.23%"],["DE","Germany","1.300","20.43%"],["AU","Australia","760","10.35%"],["GB","United Kingdom\t","690","7.87%"],["RO","Romania","600","5.94%"],["BR","Brasil","550","4.34%"]]};const e={lineSmooth:l.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}},r=new l.Line("#dailySalesChart",{labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},e);this.startAnimationForLineChart(r);const o={lineSmooth:l.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}},f=new l.Line("#completedTasksChart",{labels:["12p","3p","6p","9p","12p","3a","6a","9a"],series:[[230,750,450,300,280,240,200,190]]},o);this.startAnimationForLineChart(f);const y=new l.Bar("#websiteViewsChart",{labels:["J","F","M","A","M","J","J","A","S","O","N","D"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(Z){return Z[0]}}}]]);this.startAnimationForBarChart(y),$("#worldMap").vectorMap({map:"world_en",backgroundColor:"transparent",borderColor:"#818181",borderOpacity:.25,borderWidth:1,color:"#b3b3b3",enableZoom:!0,hoverColor:"#eee",hoverOpacity:null,normalizeFunction:"linear",scaleColors:["#b6d6ff","#005ace"],selectedColor:"#c9dfaf",selectedRegions:null,showTooltip:!0,onRegionClick:function(Z,x,P){var S='You clicked "'+P+'" which has the code: '+x.toUpperCase();alert(S)}})}ngAfterViewInit(){$('[data-header-animation="true"]').each(function(){$(this);const r=$(this).parent(".card");r.find(".fix-broken-card").click(function(){const n=$(this).parent().parent().siblings(".card-header, .card-image");n.removeClass("hinge").addClass("fadeInDown"),r.attr("data-count",0),setTimeout(function(){n.removeClass("fadeInDown animate")},480)}),r.mouseenter(function(){const n=$(this),o=parseInt(n.attr("data-count"),10)+1||0;n.attr("data-count",o),o>=20&&$(this).children(".card-header, .card-image").addClass("hinge animated")})})}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:263,vars:16,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-success","card-header-icon"],[1,"card-icon"],[1,"material-icons"],[1,"card-title"],[1,"card-body"],[1,"col-md-6"],[3,"data"],[1,"col-md-6","ml-auto","mr-auto"],["id","worldMap",1,"map"],[1,"col-md-4"],[1,"card","card-chart"],["data-header-animation","true",1,"card-header","card-header-rose"],["id","websiteViewsChart",1,"ct-chart"],[1,"card-actions"],["mat-raised-button","","type","button",1,"btn","btn-danger","btn-link","fix-broken-card"],["mat-raised-button","","type","button","matTooltip","Refresh",1,"btn","btn-info","btn-link",3,"matTooltipPosition"],["mat-raised-button","","type","button","matTooltip","Change Date",1,"btn","btn-default","btn-link",3,"matTooltipPosition"],[1,"card-category"],[1,"card-footer"],[1,"stats"],["data-header-animation","true",1,"card-header","card-header-success"],["id","dailySalesChart",1,"ct-chart"],[1,"text-success"],[1,"fa","fa-long-arrow-up"],["data-header-animation","true",1,"card-header","card-header-info"],["id","completedTasksChart",1,"ct-chart"],[1,"col-lg-3","col-md-6","col-sm-6"],[1,"card","card-stats"],[1,"card-header","card-header-warning","card-header-icon"],[1,"material-icons","text-danger"],["href","#pablo"],[1,"card-header","card-header-rose","card-header-icon"],[1,"card-header","card-header-info","card-header-icon"],[1,"fa","fa-twitter"],[1,"card","card-product"],["data-header-animation","true",1,"card-header","card-header-image"],["src","./assets/img/card-2.jpg",1,"img"],[1,"card-actions","text-center"],["mat-raised-button","","type","button","matTooltip","View",1,"btn","btn-default","btn-link",3,"matTooltipPosition"],["mat-raised-button","","type","button","matTooltip","Edit",1,"btn","btn-success","btn-link",3,"matTooltipPosition"],["mat-raised-button","","type","button","matTooltip","Remove",1,"btn","btn-danger","btn-link",3,"matTooltipPosition"],[1,"card-description"],[1,"price"],["src","./assets/img/card-3.jpg",1,"img"],["src","./assets/img/card-1.jpg",1,"img"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"i",7),t._uU(8,"\ue894"),t.qZA()(),t.TgZ(9,"h4",8),t._uU(10,"Global Sales by Top Locations"),t.qZA()(),t.TgZ(11,"div",9)(12,"div",2)(13,"div",10),t._UZ(14,"app-md-table",11),t.qZA(),t.TgZ(15,"div",12),t._UZ(16,"div",13),t.qZA()()()()()(),t.TgZ(17,"div",2)(18,"div",14)(19,"div",15)(20,"div",16),t._UZ(21,"div",17),t.qZA(),t.TgZ(22,"div",9)(23,"div",18)(24,"button",19)(25,"i",7),t._uU(26,"build"),t.qZA(),t._uU(27," Fix Header! "),t.qZA(),t.TgZ(28,"button",20)(29,"i",7),t._uU(30,"refresh"),t.qZA()(),t.TgZ(31,"button",21)(32,"i",7),t._uU(33,"edit"),t.qZA()()(),t.TgZ(34,"h4",8),t._uU(35,"Website Views"),t.qZA(),t.TgZ(36,"p",22),t._uU(37,"Last Campaign Performance"),t.qZA()(),t.TgZ(38,"div",23)(39,"div",24)(40,"i",7),t._uU(41,"access_time"),t.qZA(),t._uU(42," campaign sent 2 days ago "),t.qZA()()()(),t.TgZ(43,"div",14)(44,"div",15)(45,"div",25),t._UZ(46,"div",26),t.qZA(),t.TgZ(47,"div",9)(48,"div",18)(49,"button",19)(50,"i",7),t._uU(51,"build"),t.qZA(),t._uU(52," Fix Header! "),t.qZA(),t.TgZ(53,"button",20)(54,"i",7),t._uU(55,"refresh"),t.qZA()(),t.TgZ(56,"button",21)(57,"i",7),t._uU(58,"edit"),t.qZA()()(),t.TgZ(59,"h4",8),t._uU(60,"Daily Sales"),t.qZA(),t.TgZ(61,"p",22)(62,"span",27),t._UZ(63,"i",28),t._uU(64," 55% "),t.qZA(),t._uU(65," increase in today sales."),t.qZA()(),t.TgZ(66,"div",23)(67,"div",24)(68,"i",7),t._uU(69,"access_time"),t.qZA(),t._uU(70," updated 4 minutes ago "),t.qZA()()()(),t.TgZ(71,"div",14)(72,"div",15)(73,"div",29),t._UZ(74,"div",30),t.qZA(),t.TgZ(75,"div",9)(76,"div",18)(77,"button",19)(78,"i",7),t._uU(79,"build"),t.qZA(),t._uU(80," Fix Header! "),t.qZA(),t.TgZ(81,"button",20)(82,"i",7),t._uU(83,"refresh"),t.qZA()(),t.TgZ(84,"button",21)(85,"i",7),t._uU(86,"edit"),t.qZA()()(),t.TgZ(87,"h4",8),t._uU(88,"Completed Tasks"),t.qZA(),t.TgZ(89,"p",22),t._uU(90,"Last Campaign Performance"),t.qZA()(),t.TgZ(91,"div",23)(92,"div",24)(93,"i",7),t._uU(94,"access_time"),t.qZA(),t._uU(95," campaign sent 2 days ago "),t.qZA()()()()(),t.TgZ(96,"div",2)(97,"div",31)(98,"div",32)(99,"div",33)(100,"div",6)(101,"i",7),t._uU(102,"weekend"),t.qZA()(),t.TgZ(103,"p",22),t._uU(104,"Bookings"),t.qZA(),t.TgZ(105,"h3",8),t._uU(106,"184"),t.qZA()(),t.TgZ(107,"div",23)(108,"div",24)(109,"i",34),t._uU(110,"warning"),t.qZA(),t.TgZ(111,"a",35),t._uU(112,"Get More Space..."),t.qZA()()()()(),t.TgZ(113,"div",31)(114,"div",32)(115,"div",36)(116,"div",6)(117,"i",7),t._uU(118,"equalizer"),t.qZA()(),t.TgZ(119,"p",22),t._uU(120,"Website Visits"),t.qZA(),t.TgZ(121,"h3",8),t._uU(122,"75.521"),t.qZA()(),t.TgZ(123,"div",23)(124,"div",24)(125,"i",7),t._uU(126,"local_offer"),t.qZA(),t._uU(127," Tracked from Google Analytics "),t.qZA()()()(),t.TgZ(128,"div",31)(129,"div",32)(130,"div",5)(131,"div",6)(132,"i",7),t._uU(133,"store"),t.qZA()(),t.TgZ(134,"p",22),t._uU(135,"Revenue"),t.qZA(),t.TgZ(136,"h3",8),t._uU(137,"$34,245"),t.qZA()(),t.TgZ(138,"div",23)(139,"div",24)(140,"i",7),t._uU(141,"date_range"),t.qZA(),t._uU(142," Last 24 Hours "),t.qZA()()()(),t.TgZ(143,"div",31)(144,"div",32)(145,"div",37)(146,"div",6),t._UZ(147,"i",38),t.qZA(),t.TgZ(148,"p",22),t._uU(149,"Followers"),t.qZA(),t.TgZ(150,"h3",8),t._uU(151,"+245"),t.qZA()(),t.TgZ(152,"div",23)(153,"div",24)(154,"i",7),t._uU(155,"update"),t.qZA(),t._uU(156," Just Updated "),t.qZA()()()()(),t.TgZ(157,"h3"),t._uU(158,"Manage Listings"),t.qZA(),t._UZ(159,"br"),t.TgZ(160,"div",2)(161,"div",14)(162,"div",39)(163,"div",40)(164,"a",35),t._UZ(165,"img",41),t.qZA()(),t.TgZ(166,"div",9)(167,"div",42)(168,"button",19)(169,"i",7),t._uU(170,"build"),t.qZA(),t._uU(171," Fix Header! "),t.qZA(),t.TgZ(172,"button",43)(173,"i",7),t._uU(174,"art_track"),t.qZA()(),t.TgZ(175,"button",44)(176,"i",7),t._uU(177,"edit"),t.qZA()(),t.TgZ(178,"button",45)(179,"i",7),t._uU(180,"close"),t.qZA()()(),t.TgZ(181,"h4",8)(182,"a",35),t._uU(183,"Cozy 5 Stars Apartment"),t.qZA()(),t.TgZ(184,"div",46),t._uU(185,' The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona. '),t.qZA()(),t.TgZ(186,"div",23)(187,"div",47)(188,"h4"),t._uU(189,"$899/night"),t.qZA()(),t.TgZ(190,"div",24)(191,"p",22)(192,"i",7),t._uU(193,"place"),t.qZA(),t._uU(194," Barcelona, Spain"),t.qZA()()()()(),t.TgZ(195,"div",14)(196,"div",39)(197,"div",40)(198,"a",35),t._UZ(199,"img",48),t.qZA()(),t.TgZ(200,"div",9)(201,"div",42)(202,"button",19)(203,"i",7),t._uU(204,"build"),t.qZA(),t._uU(205," Fix Header! "),t.qZA(),t.TgZ(206,"button",43)(207,"i",7),t._uU(208,"art_track"),t.qZA()(),t.TgZ(209,"button",44)(210,"i",7),t._uU(211,"edit"),t.qZA()(),t.TgZ(212,"button",45)(213,"i",7),t._uU(214,"close"),t.qZA()()(),t.TgZ(215,"h4",8)(216,"a",35),t._uU(217,"Office Studio"),t.qZA()(),t.TgZ(218,"div",46),t._uU(219,' The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK. '),t.qZA()(),t.TgZ(220,"div",23)(221,"div",47)(222,"h4"),t._uU(223,"$1.119/night"),t.qZA()(),t.TgZ(224,"div",24)(225,"p",22)(226,"i",7),t._uU(227,"place"),t.qZA(),t._uU(228," London, UK"),t.qZA()()()()(),t.TgZ(229,"div",14)(230,"div",39)(231,"div",40)(232,"a",35),t._UZ(233,"img",49),t.qZA()(),t.TgZ(234,"div",9)(235,"div",42)(236,"button",19)(237,"i",7),t._uU(238,"build"),t.qZA(),t._uU(239," Fix Header! "),t.qZA(),t.TgZ(240,"button",43)(241,"i",7),t._uU(242,"art_track"),t.qZA()(),t.TgZ(243,"button",44)(244,"i",7),t._uU(245,"edit"),t.qZA()(),t.TgZ(246,"button",45)(247,"i",7),t._uU(248,"close"),t.qZA()()(),t.TgZ(249,"h4",8)(250,"a",35),t._uU(251,"Beautiful Castle"),t.qZA()(),t.TgZ(252,"div",46),t._uU(253,' The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan. '),t.qZA()(),t.TgZ(254,"div",23)(255,"div",47)(256,"h4"),t._uU(257,"$459/night"),t.qZA()(),t.TgZ(258,"div",24)(259,"p",22)(260,"i",7),t._uU(261,"place"),t.qZA(),t._uU(262," Milan, Italy"),t.qZA()()()()()()()()),2&a&&(t.xp6(14),t.Q6J("data",e.tableData),t.xp6(14),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(22),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(25),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(88),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(28),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(28),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"),t.xp6(3),t.Q6J("matTooltipPosition","below"))},dependencies:[T,v.lW,A.gM],encapsulation:2}),i})()}]}];let q=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,p.Bz.forChild(U),g.u5,h.W,m.q]}),i})()}}]);