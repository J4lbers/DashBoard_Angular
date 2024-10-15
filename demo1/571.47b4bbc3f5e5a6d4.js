"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[571],{571:(se,h,s)=>{s.r(h),s.d(h,{WizardsModule:()=>ue});var d=s(6814),a=s(6223),g=s(1274),b=s(7304),m=s(5619);const T={accountType:"personal",accountTeamSize:"50+",accountName:"",accountPlan:"1",businessName:"Keenthemes Inc.",businessDescriptor:"KEENTHEMES",businessType:"1",businessDescription:"",businessEmail:"corp@support.com",nameOnCard:"Max Doe",cardNumber:"4111 1111 1111 1111",cardExpiryMonth:"1",cardExpiryYear:"2",cardCvv:"123",saveCard:"1"};var e=s(5879),f=s(8704);let x=(()=>{class t{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(n){this.fb=n}ngOnInit(){this.initForm(),this.updateParentModel({},!0)}initForm(){this.form=this.fb.group({accountType:[this.defaultValues.accountType,[a.kI.required]]});const n=this.form.valueChanges.subscribe(r=>{this.updateParentModel(r,!0)});this.unsubscribe.push(n)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(r){return new(r||t)(e.Y36(a.qu))};static \u0275cmp=e.Xpm({type:t,selectors:[["app-step1"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:30,vars:1,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","d-flex","align-items-center","text-gray-900"],["ngbTooltip","Billing is issued based on your selected account type",1,"fas","fa-exclamation-circle","ms-2","fs-7"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[1,"fv-row",3,"formGroup"],[1,"row"],[1,"col-lg-6"],["formControlName","accountType","name","accountType","type","radio","id","kt_create_account_form_account_type_personal","value","personal",1,"btn-check"],["for","kt_create_account_form_account_type_personal",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","p-7","d-flex","align-items-center","mb-10"],["name","address-book",1,"fs-1","me-5"],[1,"d-block","fw-bold","text-start"],[1,"text-gray-900","fw-bolder","d-block","fs-4","mb-2"],["formControlName","accountType","name","accountType","type","radio","id","kt_create_account_form_account_type_corporate","value","corporate",1,"btn-check"],["for","kt_create_account_form_account_type_corporate",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","p-7","d-flex","align-items-center"],["name","briefcase",1,"fs-1","me-5"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2," Choose Account Type "),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"div",3),e._uU(5," If you need more info, please check out "),e.TgZ(6,"a",4),e._uU(7," Help Page "),e.qZA(),e._uU(8," . "),e.qZA()(),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7),e._UZ(12,"input",8),e.TgZ(13,"label",9),e._UZ(14,"app-keenicon",10),e.TgZ(15,"span",11)(16,"span",12),e._uU(17,"Personal Account"),e.qZA(),e.TgZ(18,"span",3),e._uU(19," If you need more info, please check it out "),e.qZA()()()(),e.TgZ(20,"div",7),e._UZ(21,"input",13),e.TgZ(22,"label",14),e._UZ(23,"app-keenicon",15),e.TgZ(24,"span",11)(25,"span",12),e._uU(26,"Corporate Account"),e.qZA(),e.TgZ(27,"span",3),e._uU(28," Create corporate account to mane users "),e.qZA()()()(),e._UZ(29,"div",16),e.qZA()()),2&r&&(e.xp6(9),e.Q6J("formGroup",o.form))},dependencies:[a.Fj,a._,a.JJ,a.JL,a.sg,a.u,g._L,f.q],encapsulation:2})}return t})();function C(t,i){1&t&&(e.TgZ(0,"div",42),e._uU(1," Team Account name is required "),e.qZA())}let q=(()=>{class t{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(n){this.fb=n}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({accountTeamSize:[this.defaultValues.accountTeamSize,[a.kI.required]],accountName:[this.defaultValues.accountName,[a.kI.required]],accountPlan:[this.defaultValues.accountPlan,[a.kI.required]]});const n=this.form.valueChanges.subscribe(r=>{this.updateParentModel(r,this.checkForm())});this.unsubscribe.push(n)}checkForm(){return!this.form.get("accountName")?.hasError("required")}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(r){return new(r||t)(e.Y36(a.qu))};static \u0275cmp=e.Xpm({type:t,selectors:[["app-step2"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:82,vars:2,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[3,"formGroup"],[1,"mb-10","fv-row"],[1,"d-flex","align-items-center","form-label","mb-3"],["ngbTooltip","Provide your team size to help us setup your billing",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["data-kt-buttons","true",1,"row","mb-2"],[1,"col"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_1","value","1-1",1,"btn-check"],["for","kt_account_team_size_select_1",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],[1,"fw-bolder","fs-3"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_2","value","2-10",1,"btn-check"],["for","kt_account_team_size_select_2",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_3","value","10-50",1,"btn-check"],["for","kt_account_team_size_select_3",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_4","value","50+",1,"btn-check"],["for","kt_account_team_size_select_4",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],[1,"form-text"],[1,"form-label","mb-3","required"],["formControlName","accountName","type","text","placeholder","Team Account name",1,"form-control","form-control-lg","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"mb-0","fv-row"],[1,"d-flex","align-items-center","form-label","mb-5"],["ngbTooltip","Monthly billing will be based on your account plan",1,"fas","fa-exclamation-circle","ms-2","fs-7"],[1,"mb-0"],[1,"d-flex","flex-stack","mb-5","cursor-pointer"],[1,"d-flex","align-items-center","me-2"],[1,"symbol","symbol-50px","me-6"],[1,"symbol-label"],["name","bank",1,"fs-1"],[1,"d-flex","flex-column"],[1,"fw-bolder","text-gray-800","text-hover-primary","fs-5"],[1,"fs-6","fw-bold","text-gray-500"],[1,"form-check","form-check-custom","form-check-solid"],["formControlName","accountPlan","type","radio","value","1",1,"form-check-input"],["name","chart",1,"fs-1"],["formControlName","accountPlan","type","radio","value","2",1,"form-check-input"],[1,"d-flex","flex-stack","mb-0","cursor-pointer"],["name","chart-pie-4",1,"fs-1"],["formControlName","accountPlan","type","radio","value","3",1,"form-check-input"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Account Info"),e.qZA(),e.TgZ(3,"div",2),e._uU(4," If you need more info, please check out "),e.TgZ(5,"a",3),e._uU(6," Help Page"),e.qZA(),e._uU(7,". "),e.qZA()(),e.TgZ(8,"div",4)(9,"div",5)(10,"label",6),e._uU(11," Specify Team Size"),e._UZ(12,"i",7),e.qZA(),e.TgZ(13,"div",8)(14,"div",9),e._UZ(15,"input",10),e.TgZ(16,"label",11)(17,"span",12),e._uU(18,"1-1"),e.qZA()()(),e.TgZ(19,"div",9),e._UZ(20,"input",13),e.TgZ(21,"label",14)(22,"span",12),e._uU(23,"2-10"),e.qZA()()(),e.TgZ(24,"div",9),e._UZ(25,"input",15),e.TgZ(26,"label",16)(27,"span",12),e._uU(28,"10-50"),e.qZA()()(),e.TgZ(29,"div",9),e._UZ(30,"input",17),e.TgZ(31,"label",18)(32,"span",12),e._uU(33,"50+"),e.qZA()()()(),e.TgZ(34,"div",19),e._uU(35," Customers will see this shortened version of your statement descriptor "),e.qZA()(),e.TgZ(36,"div",5)(37,"label",20),e._uU(38,"Team Account Name"),e.qZA(),e._UZ(39,"input",21),e.YNc(40,C,2,0,"div",22),e.qZA(),e.TgZ(41,"div",23)(42,"label",24),e._uU(43," Select Account Plan"),e._UZ(44,"i",25),e.qZA(),e.TgZ(45,"div",26)(46,"label",27)(47,"span",28)(48,"span",29)(49,"span",30),e._UZ(50,"app-keenicon",31),e.qZA()(),e.TgZ(51,"span",32)(52,"span",33),e._uU(53," Company Account "),e.qZA(),e.TgZ(54,"span",34),e._uU(55," Use images to enhance your post flow "),e.qZA()()(),e.TgZ(56,"span",35),e._UZ(57,"input",36),e.qZA()(),e.TgZ(58,"label",27)(59,"span",28)(60,"span",29)(61,"span",30),e._UZ(62,"app-keenicon",37),e.qZA()(),e.TgZ(63,"span",32)(64,"span",33),e._uU(65," Developer Account "),e.qZA(),e.TgZ(66,"span",34),e._uU(67," Use images to your post time "),e.qZA()()(),e.TgZ(68,"span",35),e._UZ(69,"input",38),e.qZA()(),e.TgZ(70,"label",39)(71,"span",28)(72,"span",29)(73,"span",30),e._UZ(74,"app-keenicon",40),e.qZA()(),e.TgZ(75,"span",32)(76,"span",33),e._uU(77," Testing Account "),e.qZA(),e.TgZ(78,"span",34),e._uU(79," Use images to enhance time travel rivers "),e.qZA()()(),e.TgZ(80,"span",35),e._UZ(81,"input",41),e.qZA()()()()()),2&r){let u;e.xp6(8),e.Q6J("formGroup",o.form),e.xp6(32),e.Q6J("ngIf",(null==(u=o.form.get("accountName"))?null:u.hasError("required"))&&(null==(u=o.form.get("accountName"))?null:u.touched))}},dependencies:[d.O5,a.Fj,a._,a.JJ,a.JL,a.sg,a.u,g._L,f.q],encapsulation:2})}return t})();function k(t,i){1&t&&(e.TgZ(0,"div",24),e._uU(1," Business Name is required "),e.qZA())}function S(t,i){1&t&&(e.TgZ(0,"div",24),e._uU(1," Shortened Descriptor is required "),e.qZA())}function w(t,i){1&t&&(e.TgZ(0,"div",24),e._uU(1," Contact Email is required "),e.qZA())}function N(t,i){1&t&&(e.TgZ(0,"div",24),e._uU(1," Wrong email format "),e.qZA())}let U=(()=>{class t{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(n){this.fb=n}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({businessName:[this.defaultValues.businessName,[a.kI.required]],businessDescriptor:[this.defaultValues.businessDescriptor,[a.kI.required]],businessType:[this.defaultValues.businessType,[a.kI.required]],businessDescription:[this.defaultValues.businessDescription],businessEmail:[this.defaultValues.businessEmail,[a.kI.required,a.kI.email]]});const n=this.form.valueChanges.subscribe(r=>{this.updateParentModel(r,this.checkForm())});this.unsubscribe.push(n)}checkForm(){return!(this.form.get("businessName")?.hasError("required")||this.form.get("businessDescriptor")?.hasError("required")||this.form.get("businessType")?.hasError("required")||this.form.get("businessEmail")?.hasError("required")||this.form.get("businessEmail")?.hasError("email"))}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(r){return new(r||t)(e.Y36(a.qu))};static \u0275cmp=e.Xpm({type:t,selectors:[["app-step3"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:48,vars:5,consts:[[1,"pb-10","pb-lg-12"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[3,"formGroup"],[1,"fv-row","mb-10"],[1,"form-label","required"],["name","businessName","formControlName","businessName",1,"form-control","form-control-lg","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"d-flex","align-items-center","form-label"],[1,"required"],["name","businessDescriptor","formControlName","businessDescriptor",1,"form-control","form-control-lg","form-control-solid"],[1,"form-text"],["name","businessType","formControlName","businessType",1,"form-select","form-select-lg","form-select-solid"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],[1,"form-label"],["name","businessDescription","rows","3","formControlName","businessDescription",1,"form-control","form-control-lg","form-control-solid"],[1,"fv-row","mb-0"],[1,"fs-6","fw-bold","form-label","required"],["name","businessEmail","formControlName","businessEmail",1,"form-control","form-control-lg","form-control-solid"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Business Details"),e.qZA(),e.TgZ(3,"div",2),e._uU(4," If you need more info, please check out "),e.TgZ(5,"a",3),e._uU(6,"Help Page"),e.qZA(),e._uU(7,". "),e.qZA()(),e.TgZ(8,"div",4)(9,"div",5)(10,"label",6),e._uU(11,"Business Name"),e.qZA(),e._UZ(12,"input",7),e.YNc(13,k,2,0,"div",8),e.qZA(),e.TgZ(14,"div",5)(15,"label",9)(16,"span",10),e._uU(17,"Shortened Descriptor"),e.qZA()(),e._UZ(18,"input",11),e.YNc(19,S,2,0,"div",8),e.TgZ(20,"div",12),e._uU(21," Customers will see this shortened version of your statement descriptor "),e.qZA()(),e.TgZ(22,"div",5)(23,"label",6),e._uU(24,"Corporation Type"),e.qZA(),e.TgZ(25,"select",13)(26,"option",14),e._uU(27,"S Corporation"),e.qZA(),e.TgZ(28,"option",14),e._uU(29,"C Corporation"),e.qZA(),e.TgZ(30,"option",15),e._uU(31,"Sole Proprietorship"),e.qZA(),e.TgZ(32,"option",16),e._uU(33,"Non-profit"),e.qZA(),e.TgZ(34,"option",17),e._uU(35,"Limited Liability"),e.qZA(),e.TgZ(36,"option",18),e._uU(37,"General Partnership"),e.qZA()()(),e.TgZ(38,"div",5)(39,"label",19),e._uU(40,"Business Description"),e.qZA(),e._UZ(41,"textarea",20),e.qZA(),e.TgZ(42,"div",21)(43,"label",22),e._uU(44,"Contact Email"),e.qZA(),e._UZ(45,"input",23),e.YNc(46,w,2,0,"div",8),e.YNc(47,N,2,0,"div",8),e.qZA()()),2&r){let u,l,c,p;e.xp6(8),e.Q6J("formGroup",o.form),e.xp6(5),e.Q6J("ngIf",(null==(u=o.form.get("businessName"))?null:u.hasError("required"))&&(null==(u=o.form.get("businessName"))?null:u.touched)),e.xp6(6),e.Q6J("ngIf",(null==(l=o.form.get("businessDescriptor"))?null:l.hasError("required"))&&(null==(l=o.form.get("businessDescriptor"))?null:l.touched)),e.xp6(27),e.Q6J("ngIf",(null==(c=o.form.get("businessEmail"))?null:c.hasError("required"))&&(null==(c=o.form.get("businessEmail"))?null:c.touched)),e.xp6(1),e.Q6J("ngIf",(null==(p=o.form.get("businessEmail"))?null:p.hasError("email"))&&(null==(p=o.form.get("businessEmail"))?null:p.touched))}},dependencies:[d.O5,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u],encapsulation:2})}return t})();function J(t,i){1&t&&(e.TgZ(0,"div",59),e._uU(1," Name on card is required "),e.qZA())}function Q(t,i){1&t&&(e.TgZ(0,"div",59),e._uU(1," Card number is required "),e.qZA())}function E(t,i){1&t&&(e.TgZ(0,"div",59),e._uU(1," Expiration month is required "),e.qZA())}function I(t,i){1&t&&(e.TgZ(0,"div",59),e._uU(1," Expiration year is required "),e.qZA())}function V(t,i){1&t&&(e.TgZ(0,"div",59),e._uU(1," CVV is required "),e.qZA())}let A=(()=>{class t{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(n){this.fb=n}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({nameOnCard:[this.defaultValues.nameOnCard,[a.kI.required]],cardNumber:[this.defaultValues.cardNumber,[a.kI.required]],cardExpiryMonth:[this.defaultValues.cardExpiryMonth,[a.kI.required]],cardExpiryYear:[this.defaultValues.cardExpiryYear,[a.kI.required]],cardCvv:[this.defaultValues.cardCvv,[a.kI.required]],saveCard:["1"]});const n=this.form.valueChanges.subscribe(r=>{this.updateParentModel(r,this.checkForm())});this.unsubscribe.push(n)}checkForm(){return!(this.form.get("nameOnCard")?.hasError("required")||this.form.get("cardNumber")?.hasError("required")||this.form.get("cardExpiryMonth")?.hasError("required")||this.form.get("cardExpiryYear")?.hasError("required")||this.form.get("cardCvv")?.hasError("required"))}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(r){return new(r||t)(e.Y36(a.qu))};static \u0275cmp=e.Xpm({type:t,selectors:[["app-step4"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:105,vars:6,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"text-primary","fw-bolder"],[3,"formGroup"],[1,"d-flex","flex-column","mb-7","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","form-label","mb-2"],[1,"required"],["ngbTooltip","Specify a card holder's name",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["formControlName","nameOnCard","type","text","placeholder","Name on card",1,"form-control","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"required","fs-6","fw-bold","form-label","mb-2"],[1,"position-relative"],["formControlName","cardNumber","type","text","placeholder","Enter card number",1,"form-control","form-control-solid"],[1,"position-absolute","translate-middle-y","top-50","end-0","me-5"],["src","./assets/media/svg/card-logos/visa.svg","alt","",1,"h-25px"],["src","./assets/media/svg/card-logos/mastercard.svg","alt","",1,"h-25px"],["src","./assets/media/svg/card-logos/american-express.svg","alt","",1,"h-25px"],[1,"row","mb-10"],[1,"col-md-8","fv-row"],[1,"row","fv-row"],[1,"col-6"],["formControlName","cardExpiryMonth",1,"form-select","form-select-solid"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["value","7"],["value","8"],["value","9"],["value","10"],["value","11"],["value","12"],["formControlName","cardExpiryYear",1,"form-select","form-select-solid"],["value","2021"],["value","2022"],["value","2023"],["value","2024"],["value","2025"],["value","2026"],["value","2027"],["value","2028"],["value","2029"],["value","2030"],["value","2031"],[1,"col-md-4","fv-row"],["ngbTooltip","Enter a card CVV code",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["formControlName","cardCvv","type","text","minlength","3","maxlength","4","placeholder","CVV",1,"form-control","form-control-solid"],[1,"position-absolute","translate-middle-y","top-50","end-0","me-3"],["name","credit-cart",1,"fs-1"],[1,"d-flex","flex-stack"],[1,"me-5"],[1,"fs-6","fw-bold","form-label"],[1,"fs-7","fw-bold","text-gray-500"],[1,"form-check","form-switch","form-check-custom","form-check-solid"],["formControlName","saveCard","type","checkbox","value","1",1,"form-check-input"],[1,"form-check-label","fw-bold","text-gray-500"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Billing Details"),e.qZA(),e.TgZ(3,"div",2),e._uU(4," If you need more info, please check out "),e.TgZ(5,"a",3),e._uU(6,"Help Page"),e.qZA(),e._uU(7,". "),e.qZA()(),e.TgZ(8,"div",4)(9,"div",5)(10,"label",6)(11,"span",7),e._uU(12,"Name On Card"),e.qZA(),e._UZ(13,"i",8),e.qZA(),e._UZ(14,"input",9),e.YNc(15,J,2,0,"div",10),e.qZA(),e.TgZ(16,"div",5)(17,"label",11),e._uU(18,"Card Number"),e.qZA(),e.TgZ(19,"div",12),e._UZ(20,"input",13),e.YNc(21,Q,2,0,"div",10),e.TgZ(22,"div",14),e._UZ(23,"img",15)(24,"img",16)(25,"img",17),e.qZA()()(),e.TgZ(26,"div",18)(27,"div",19)(28,"label",11),e._uU(29,"Expiration Date"),e.qZA(),e.TgZ(30,"div",20)(31,"div",21)(32,"select",22),e._UZ(33,"option"),e.TgZ(34,"option",23),e._uU(35,"1"),e.qZA(),e.TgZ(36,"option",24),e._uU(37,"2"),e.qZA(),e.TgZ(38,"option",25),e._uU(39,"3"),e.qZA(),e.TgZ(40,"option",26),e._uU(41,"4"),e.qZA(),e.TgZ(42,"option",27),e._uU(43,"5"),e.qZA(),e.TgZ(44,"option",28),e._uU(45,"6"),e.qZA(),e.TgZ(46,"option",29),e._uU(47,"7"),e.qZA(),e.TgZ(48,"option",30),e._uU(49,"8"),e.qZA(),e.TgZ(50,"option",31),e._uU(51,"9"),e.qZA(),e.TgZ(52,"option",32),e._uU(53,"10"),e.qZA(),e.TgZ(54,"option",33),e._uU(55,"11"),e.qZA(),e.TgZ(56,"option",34),e._uU(57,"12"),e.qZA()(),e.YNc(58,E,2,0,"div",10),e.qZA(),e.TgZ(59,"div",21)(60,"select",35),e._UZ(61,"option"),e.TgZ(62,"option",36),e._uU(63,"2021"),e.qZA(),e.TgZ(64,"option",37),e._uU(65,"2022"),e.qZA(),e.TgZ(66,"option",38),e._uU(67,"2023"),e.qZA(),e.TgZ(68,"option",39),e._uU(69,"2024"),e.qZA(),e.TgZ(70,"option",40),e._uU(71,"2025"),e.qZA(),e.TgZ(72,"option",41),e._uU(73,"2026"),e.qZA(),e.TgZ(74,"option",42),e._uU(75,"2027"),e.qZA(),e.TgZ(76,"option",43),e._uU(77,"2028"),e.qZA(),e.TgZ(78,"option",44),e._uU(79,"2029"),e.qZA(),e.TgZ(80,"option",45),e._uU(81,"2030"),e.qZA(),e.TgZ(82,"option",46),e._uU(83,"2031"),e.qZA()(),e.YNc(84,I,2,0,"div",10),e.qZA()()(),e.TgZ(85,"div",47)(86,"label",6)(87,"span",7),e._uU(88,"CVV"),e.qZA(),e._UZ(89,"i",48),e.qZA(),e.TgZ(90,"div",12),e._UZ(91,"input",49),e.YNc(92,V,2,0,"div",10),e.TgZ(93,"div",50),e._UZ(94,"app-keenicon",51),e.qZA()()()(),e.TgZ(95,"div",52)(96,"div",53)(97,"label",54),e._uU(98,"Save Card for further billing?"),e.qZA(),e.TgZ(99,"div",55),e._uU(100," If you need more info, please check budget planning "),e.qZA()(),e.TgZ(101,"label",56),e._UZ(102,"input",57),e.TgZ(103,"span",58),e._uU(104,"Save Card"),e.qZA()()()()),2&r){let u,l,c,p,v;e.xp6(8),e.Q6J("formGroup",o.form),e.xp6(7),e.Q6J("ngIf",(null==(u=o.form.get("nameOnCard"))?null:u.hasError("required"))&&(null==(u=o.form.get("nameOnCard"))?null:u.touched)),e.xp6(6),e.Q6J("ngIf",(null==(l=o.form.get("cardNumber"))?null:l.hasError("required"))&&(null==(l=o.form.get("cardNumber"))?null:l.touched)),e.xp6(37),e.Q6J("ngIf",(null==(c=o.form.get("cardExpiryMonth"))?null:c.hasError("required"))&&(null==(c=o.form.get("cardExpiryMonth"))?null:c.touched)),e.xp6(26),e.Q6J("ngIf",(null==(p=o.form.get("cardExpiryYear"))?null:p.hasError("required"))&&(null==(p=o.form.get("cardExpiryYear"))?null:p.touched)),e.xp6(8),e.Q6J("ngIf",(null==(v=o.form.get("cardCvv"))?null:v.hasError("required"))&&(null==(v=o.form.get("cardCvv"))?null:v.touched))}},dependencies:[d.O5,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.JL,a.wO,a.nD,a.sg,a.u,g._L,f.q],encapsulation:2})}return t})(),y=(()=>{class t{constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["app-step5"]],decls:21,vars:0,consts:[[1,"pb-8","pb-lg-10"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],[1,"link-primary","fw-bolder","cursor-pointer"],[1,"mb-0"],[1,"fs-6","text-gray-600","mb-5"],[1,"notice","d-flex","bg-light-warning","rounded","border-warning","border","border-dashed","p-6"],[1,"svg-icon","fs-2tx","text-warning","me-4"],[1,"d-flex","flex-stack","flex-grow-1"],[1,"fw-bold"],[1,"text-gray-800","fw-bolder"],[1,"fs-6","text-gray-600"],[1,"fw-bolder","cursor-pointer"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Your Are Done!"),e.qZA(),e.TgZ(3,"div",2),e._uU(4," If you need more info, please "),e.TgZ(5,"a",3),e._uU(6," Sign In"),e.qZA(),e._uU(7,". "),e.qZA()(),e.TgZ(8,"div",4)(9,"div",5),e._uU(10," Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience. "),e.qZA(),e.TgZ(11,"div",6),e._UZ(12,"span",7),e.TgZ(13,"div",8)(14,"div",9)(15,"h4",10),e._uU(16,"We need your attention!"),e.qZA(),e.TgZ(17,"div",11),e._uU(18," To start using great tools, please, please "),e.TgZ(19,"a",12),e._uU(20," Create Team Platform"),e.qZA()()()()()())},encapsulation:2})}return t})();function $(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step1",11),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function M(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step2",11),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function Y(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step3",11),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function P(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step4",11),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function z(t,i){1&t&&(e.ynx(0),e._UZ(1,"app-step5",12),e.BQk())}function B(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"button",13),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.prevStep())}),e._UZ(2,"app-keenicon",14),e._uU(3," Back "),e.qZA(),e.BQk()}}function F(t,i){1&t&&(e.ynx(0),e._uU(1),e._UZ(2,"app-keenicon",17),e.BQk()),2&t&&(e.xp6(1),e.hij(" Continue "," "," "))}function D(t,i){1&t&&(e.ynx(0),e._uU(1," Submit "),e.BQk())}function O(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"div")(2,"button",15),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.nextStep())}),e.TgZ(3,"span",16),e.YNc(4,F,3,1,"ng-container",8),e.YNc(5,D,2,0,"ng-container",8),e.qZA()()(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(2),e.Q6J("disabled",!n.isCurrentFormValid$.value),e.xp6(2),e.Q6J("ngIf",n.currentStep$.value<n.formsCount-1),e.xp6(1),e.Q6J("ngIf",n.currentStep$.value===n.formsCount-1)}}const _=function(t,i){return{current:t,completed:i}},H=function(t){return{current:t}};let L=(()=>{class t{formsCount=5;account$=new m.X(T);currentStep$=new m.X(1);isCurrentFormValid$=new m.X(!1);unsubscribe=[];constructor(){}ngOnInit(){}updateAccount=(n,r)=>{const u={...this.account$.value,...n};this.account$.next(u),this.isCurrentFormValid$.next(r)};nextStep(){const n=this.currentStep$.value+1;n>this.formsCount||this.currentStep$.next(n)}prevStep(){const n=this.currentStep$.value-1;0!==n&&this.currentStep$.next(n)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["app-horizontal"]],decls:30,vars:26,consts:[[1,"card"],[1,"card-body"],["id","kt_create_account_stepper",1,"stepper","stepper-links","d-flex","flex-column","pt-15"],[1,"stepper-nav","mb-5"],[1,"stepper-item",3,"ngClass"],[1,"stepper-title"],["noValidate","","id","kt_create_account_form",1,"mx-auto","mw-600px","w-100","pt-15","pb-10"],[1,"current"],[4,"ngIf"],[1,"d-flex","flex-stack","pt-15"],[1,"mr-2"],[1,"w-100",3,"updateParentModel","defaultValues"],[1,"w-100"],["type","button",1,"btn","btn-lg","btn-light-primary","me-3",3,"click"],["name","arrow-left",1,"fs-3","ms-4","me-1"],["type","button",1,"btn","btn-lg","btn-primary","me-3",3,"disabled","click"],[1,"indicator-label"],["name","arrow-right",1,"fs-3","ms-2","me-0"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),e._uU(6,"Account Type"),e.qZA()(),e.TgZ(7,"div",4)(8,"h3",5),e._uU(9,"Account Info"),e.qZA()(),e.TgZ(10,"div",4)(11,"h3",5),e._uU(12,"Business Info"),e.qZA()(),e.TgZ(13,"div",4)(14,"h3",5),e._uU(15,"Billing Details"),e.qZA()(),e.TgZ(16,"div",4)(17,"h3",5),e._uU(18,"Completed"),e.qZA()()(),e.TgZ(19,"form",6)(20,"div",7),e.YNc(21,$,2,2,"ng-container",8),e.YNc(22,M,2,2,"ng-container",8),e.YNc(23,Y,2,2,"ng-container",8),e.YNc(24,P,2,2,"ng-container",8),e.YNc(25,z,2,0,"ng-container",8),e.qZA(),e.TgZ(26,"div",9)(27,"div",10),e.YNc(28,B,4,0,"ng-container",8),e.qZA(),e.YNc(29,O,6,3,"ng-container",8),e.qZA()()()()()),2&r&&(e.xp6(4),e.Q6J("ngClass",e.WLB(12,_,1===o.currentStep$.value,o.currentStep$.value>1)),e.xp6(3),e.Q6J("ngClass",e.WLB(15,_,2===o.currentStep$.value,o.currentStep$.value>2)),e.xp6(3),e.Q6J("ngClass",e.WLB(18,_,3===o.currentStep$.value,o.currentStep$.value>3)),e.xp6(3),e.Q6J("ngClass",e.WLB(21,_,4===o.currentStep$.value,o.currentStep$.value>4)),e.xp6(3),e.Q6J("ngClass",e.VKq(24,H,5===o.currentStep$.value)),e.xp6(5),e.Q6J("ngIf",1===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",2===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",3===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",4===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",5===o.currentStep$.value),e.xp6(3),e.Q6J("ngIf",1!==o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",o.currentStep$.value!==o.formsCount))},dependencies:[d.mk,d.O5,a._Y,a.JL,f.q,x,q,U,A,y],encapsulation:2})}return t})();function W(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step1",19),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function X(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step2",19),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function G(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step3",19),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function j(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-step4",19),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("updateParentModel",n.updateAccount)("defaultValues",n.account$.value)}}function K(t,i){1&t&&(e.ynx(0),e._UZ(1,"app-step5",20),e.BQk())}function R(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"button",21),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.prevStep())}),e._UZ(2,"app-keenicon",22),e._uU(3," Back "),e.qZA(),e.BQk()}}function ee(t,i){1&t&&(e.ynx(0),e._uU(1),e._UZ(2,"app-keenicon",25),e.BQk()),2&t&&(e.xp6(1),e.hij(" Continue "," "," "))}function te(t,i){1&t&&(e.ynx(0),e._uU(1," Submit "),e.BQk())}function ne(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"div")(2,"button",23),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.nextStep())}),e.TgZ(3,"span",24),e.YNc(4,ee,3,1,"ng-container",16),e.YNc(5,te,2,0,"ng-container",16),e.qZA()()(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(2),e.Q6J("disabled",!n.isCurrentFormValid$.value),e.xp6(2),e.Q6J("ngIf",n.currentStep$.value<n.formsCount-1),e.xp6(1),e.Q6J("ngIf",n.currentStep$.value===n.formsCount-1)}}const Z=function(t,i){return{current:t,completed:i}},oe=function(t){return{current:t}},re=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["app-wizards"]],decls:1,vars:0,template:function(r,o){1&r&&e._UZ(0,"router-outlet")},dependencies:[b.lC],encapsulation:2})}return t})(),children:[{path:"horizontal",component:L},{path:"vertical",component:(()=>{class t{formsCount=5;account$=new m.X(T);currentStep$=new m.X(1);isCurrentFormValid$=new m.X(!1);unsubscribe=[];constructor(){}ngOnInit(){}updateAccount=(n,r)=>{const u={...this.account$.value,...n};this.account$.next(u),this.isCurrentFormValid$.next(r)};nextStep(){const n=this.currentStep$.value+1;n>this.formsCount||this.currentStep$.next(n)}prevStep(){const n=this.currentStep$.value-1;0!==n&&this.currentStep$.next(n)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["app-vertical"]],decls:75,vars:26,consts:[["id","kt_create_account_stepper",1,"stepper","stepper-pills","stepper-column","d-flex","flex-column","flex-xl-row","flex-row-fluid"],[1,"card","d-flex","justify-content-center","justify-content-xl-start","flex-row-auto","w-100","w-xl-300px","w-xxl-400px","me-9"],[1,"card-body","px-6","px-lg-10","px-xxl-15","py-20"],[1,"stepper-nav"],[1,"stepper-item",3,"ngClass"],[1,"stepper-wrapper"],[1,"stepper-icon","w-40px","h-40px"],[1,"stepper-check","fas","fa-check"],[1,"stepper-number"],[1,"stepper-label"],[1,"stepper-title"],[1,"stepper-desc","fw-semibold"],[1,"stepper-line","h-40px"],[1,"d-flex","flex-row-fluid","flex-center","bg-body","rounded"],["noValidate","","id","kt_create_account_form",1,"py-20","w-100","w-xl-700px","px-9"],[1,"current"],[4,"ngIf"],[1,"d-flex","flex-stack","pt-10"],[1,"mr-2"],[1,"w-100",3,"updateParentModel","defaultValues"],[1,"w-100"],["type","button",1,"btn","btn-lg","btn-light-primary","me-3",3,"click"],["name","arrow-left",1,"fs-3","ms-1"],["type","button",1,"btn","btn-lg","btn-primary","me-3",3,"disabled","click"],[1,"indicator-label"],["name","arrow-right",1,"fs-3","ms-2","me-0"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"i",7),e.TgZ(8,"span",8),e._uU(9,"1"),e.qZA()(),e.TgZ(10,"div",9)(11,"h3",10),e._uU(12," Account Type "),e.qZA(),e.TgZ(13,"div",11),e._uU(14," Setup Your Account Details "),e.qZA()()(),e._UZ(15,"div",12),e.qZA(),e.TgZ(16,"div",4)(17,"div",5)(18,"div",6),e._UZ(19,"i",7),e.TgZ(20,"span",8),e._uU(21,"2"),e.qZA()(),e.TgZ(22,"div",9)(23,"h3",10),e._uU(24," Account Settings "),e.qZA(),e.TgZ(25,"div",11),e._uU(26," Setup Your Account Settings "),e.qZA()()(),e._UZ(27,"div",12),e.qZA(),e.TgZ(28,"div",4)(29,"div",5)(30,"div",6),e._UZ(31,"i",7),e.TgZ(32,"span",8),e._uU(33,"3"),e.qZA()(),e.TgZ(34,"div",9)(35,"h3",10),e._uU(36," Business Info "),e.qZA(),e.TgZ(37,"div",11),e._uU(38," Your Business Related Info "),e.qZA()()(),e._UZ(39,"div",12),e.qZA(),e.TgZ(40,"div",4)(41,"div",5)(42,"div",6),e._UZ(43,"i",7),e.TgZ(44,"span",8),e._uU(45,"4"),e.qZA()(),e.TgZ(46,"div",9)(47,"h3",10),e._uU(48," Billing Details "),e.qZA(),e.TgZ(49,"div",11),e._uU(50," Set Your Payment Methods "),e.qZA()()(),e._UZ(51,"div",12),e.qZA(),e.TgZ(52,"div",4)(53,"div",5)(54,"div",6),e._UZ(55,"i",7),e.TgZ(56,"span",8),e._uU(57,"5"),e.qZA()(),e.TgZ(58,"div",9)(59,"h3",10),e._uU(60," Completed "),e.qZA(),e.TgZ(61,"div",11),e._uU(62," Woah, we are here "),e.qZA()()()()()()(),e.TgZ(63,"div",13)(64,"form",14)(65,"div",15),e.YNc(66,W,2,2,"ng-container",16),e.YNc(67,X,2,2,"ng-container",16),e.YNc(68,G,2,2,"ng-container",16),e.YNc(69,j,2,2,"ng-container",16),e.YNc(70,K,2,0,"ng-container",16),e.qZA(),e.TgZ(71,"div",17)(72,"div",18),e.YNc(73,R,4,0,"ng-container",16),e.qZA(),e.YNc(74,ne,6,3,"ng-container",16),e.qZA()()()()),2&r&&(e.xp6(4),e.Q6J("ngClass",e.WLB(12,Z,1===o.currentStep$.value,o.currentStep$.value>1)),e.xp6(12),e.Q6J("ngClass",e.WLB(15,Z,2===o.currentStep$.value,o.currentStep$.value>2)),e.xp6(12),e.Q6J("ngClass",e.WLB(18,Z,3===o.currentStep$.value,o.currentStep$.value>3)),e.xp6(12),e.Q6J("ngClass",e.WLB(21,Z,4===o.currentStep$.value,o.currentStep$.value>4)),e.xp6(12),e.Q6J("ngClass",e.VKq(24,oe,5===o.currentStep$.value)),e.xp6(14),e.Q6J("ngIf",1===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",2===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",3===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",4===o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",5===o.currentStep$.value),e.xp6(3),e.Q6J("ngIf",1!==o.currentStep$.value),e.xp6(1),e.Q6J("ngIf",o.currentStep$.value!==o.formsCount))},dependencies:[d.mk,d.O5,a._Y,a.JL,f.q,x,q,U,A,y],encapsulation:2})}return t})()},{path:"",redirectTo:"horizontal",pathMatch:"full"},{path:"**",redirectTo:"horizontal",pathMatch:"full"}]}];let ae=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[b.Bz.forChild(re),b.Bz]})}return t})();var ie=s(4955);let ue=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[d.ez,ae,a.UX,g.HK,ie.m]})}return t})()}}]);