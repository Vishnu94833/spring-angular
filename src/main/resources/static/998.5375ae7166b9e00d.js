"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[998],{998:(T,d,i)=>{i.r(d),i.d(d,{BehavioralPatternModule:()=>S});var r,c,h,m=i(6895),v=i(5823),f=i(4006),y=i(9106),g=i(9299),l=i(655);class C{constructor(){r.set(this,void 0)}nextSuccessor(e){(0,l.YH)(this,r,e,"f")}handle(e){if(e>=10){const t=Math.floor(e/10),o=e%10;return console.log(`Dispensing ${t} \xa310 note`),0!==o&&(0,l.Q_)(this,r,"f").handle(o),`Dispensing ${t} \xa310 note`}(0,l.Q_)(this,r,"f").handle(e)}}r=new WeakMap;class M{constructor(){c.set(this,void 0)}nextSuccessor(e){(0,l.YH)(this,c,e,"f")}handle(e){if(e>=20){const t=Math.floor(e/20),o=e%20;return console.log(`Dispensing ${t} \xa320 note`),0!==o&&(0,l.Q_)(this,c,"f").handle(o),`Dispensing ${t} \xa320 note`}(0,l.Q_)(this,c,"f").handle(e)}}c=new WeakMap;class D{constructor(){h.set(this,void 0)}nextSuccessor(e){(0,l.YH)(this,h,e,"f")}handle(e){if(e>=50){const t=Math.floor(e/50),o=e%50;return console.log(`Dispensing ${t} \xa350 note`),0!==o&&(0,l.Q_)(this,h,"f").handle(o),`Dispensing ${t} \xa350 note`}(0,l.Q_)(this,h,"f").handle(e)}}h=new WeakMap;class x{constructor(){this.chain1=new D,this.chain2=new M,this.chain3=new C,this.chain1.nextSuccessor(this.chain2),this.chain2.nextSuccessor(this.chain3)}}var s=i(4650),A=i(4859),w=i(9549),B=i(4144),p=i(1576);const P=[{path:"chain-of-responsibility",component:(()=>{class n{constructor(){this.inputValue=""}ngOnInit(){console.log("Enter amount to withdrawal : ")}getAmount(t){const o=new x;if(parseInt(t)){const u=parseInt(t);u<10||u%10!=0?console.log("Amount should be positive and in multiple of 10s."):(o.chain1.handle(u),console.log("Now go spoil yourself"))}else console.log("Please enter a number.")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-chain-of-responsibility"]],decls:10,vars:1,consts:[["fxLayoutAlign","center center"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","10px"],["type","text","matInput","",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"click"],["fxLayout","row"]],template:function(t,o){1&t&&(s.TgZ(0,"div",0)(1,"div",1)(2,"h1"),s._uU(3," Enter amount to withdrawal : "),s.qZA(),s.TgZ(4,"mat-form-field")(5,"input",2),s.NdJ("ngModelChange",function(O){return o.inputValue=O}),s.qZA()(),s.TgZ(6,"button",3),s.NdJ("click",function(){return o.getAmount(o.inputValue)}),s._uU(7,"Click"),s.qZA()(),s.TgZ(8,"div",4),s._UZ(9,"pre"),s.qZA()()),2&t&&(s.xp6(5),s.Q6J("ngModel",o.inputValue))},dependencies:[f.Fj,f.JJ,f.On,A.lW,w.KE,B.Nt,p.xw,p.SQ,p.Wh]}),n})()}];let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[g.Bz.forChild(P),g.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[m.ez,f.u5,y.q,v.o9,R]}),n})()}}]);