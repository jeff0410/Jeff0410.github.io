import{_ as e,g as l,l as s,r as a,o as t,c as o,e as n,a as d,b as c,u,v as m,t as i}from"./index.cefe66d5.js";import{i as p,l as r,y as v,R as b,D as f}from"./index.esm.69c479f4.js";const x=v(r(p({apiKey:"AIzaSyCmRes3faYcZ6CX5xu5xl8aS9CP70Nskqs",authDomain:"non-linked-service.firebaseapp.com",projectId:"non-linked-service",storageBucket:"non-linked-service.appspot.com",messagingSenderId:"175424890872",appId:"1:175424890872:web:ac900f91d029e67052180d",measurementId:"G-XD05M5WD4K"})),"document"),I={setup(){const e=l(),a=l(""),t=l(0),o=l(0),n=l({}),d=l([]);s((()=>{c()}));const c=async()=>{const e=await b(x);d.value=e.docs.map((e=>e.data()));let l=0;d.value.forEach((e=>{e.documentIdx>l&&(l=e.documentIdx)})),o.value=l+1};return{status:e,documentNm:a,documentPrice:t,documentList:d,createNewDocument:async()=>{let l=e.value+o.value;n.value={documentIdx:o.value,documentNm:a.value,documentPrice:t.value,documentStatus:l};await f(x,n.value)}}}},V={class:"grid"},N={class:"flex col-12"},g={class:"card col-4"},y=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"문서명")],-1),k={class:"m-3"},w=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"가격(원)")],-1),D={class:"m-3"},j=d("span",{class:"text-red"},"무료 발급문서는 숫자 0 입력",-1),P=d("div",{class:"m-3"},[d("span",{class:"text-teel"}," 신청가능 설정 ")],-1),h={class:"m-3"},U=d("label",{class:"ml-3 text-xl font-bold",for:"possible1"},"신청가능",-1),C={class:"m-3"},S=d("label",{class:"ml-3 text-xl font-bold",for:"impossible"},"신청불가",-1),B=d("div",null,[d("hr")],-1),R={class:"flex justify-content-end align-items-end"},_=d("div",{class:"col-4 ml-5 text-xl"},[d("p",null,"메디패스 서비스를 통해 발급가능한"),d("p",null,"제증명서를 설정하세요"),d("br"),d("p",null,"유료 제증명서는 설정한 금액외"),d("p",null,"결제수수료가 추가 됩니다.")],-1),K={class:"grid"},L={class:"card"},X=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"문서명")],-1),q={class:"m-3"},z={class:"text-xl font-bold"},A=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"가격(원)")],-1),E={class:"m-3"},G={class:"text-xl font-bold"},M=d("div",{class:"m-3"},[d("span",{class:"text-teel"}," 신청가능 설정 ")],-1),T={class:"m-3"},W=d("label",{class:"ml-3 text-xl font-bold",for:"possible0001"},"신청가능",-1),Y={class:"m-3"},Z=d("label",{class:"ml-3 text-xl font-bold",for:"impossible"},"신청불가",-1),F=d("div",null,[d("hr")],-1),H={class:"flex justify-content-end align-items-end"};const J=e(I,[["render",function(e,l,s,p,r,v){const b=a("InputText"),f=a("InputNumber"),x=a("RadioButton"),I=a("Button");return t(),o("div",null,[n("1"),d("div",V,[d("div",N,[d("div",g,[y,d("div",k,[c(b,{id:"documentNm",class:"w-full text-xl",modelValue:p.documentNm,"onUpdate:modelValue":l[0]||(l[0]=e=>p.documentNm=e),placeholder:"이름을 입력하세요"},null,8,["modelValue"])]),w,d("div",D,[c(f,{inputId:"documentPrice",placeholder:"숫자만 입력",class:"w-full text-xl",modelValue:p.documentPrice,"onUpdate:modelValue":l[1]||(l[1]=e=>p.documentPrice=e)},null,8,["modelValue"]),j]),P,d("div",h,[c(x,{inputId:"possible1",name:"possible1",value:"possible",modelValue:p.status,"onUpdate:modelValue":l[2]||(l[2]=e=>p.status=e)},null,8,["modelValue"]),U]),d("div",C,[c(x,{inputId:"impossible",name:"impossible",value:"impossible",modelValue:p.status,"onUpdate:modelValue":l[3]||(l[3]=e=>p.status=e)},null,8,["modelValue"]),S]),B,d("div",R,[c(I,{label:"신규생성",class:"p-button-success p-button-text",onClick:p.createNewDocument},null,8,["onClick"])])]),_])]),n("1"),n("2"),d("div",K,[(t(!0),o(u,null,m(p.documentList,((e,s)=>(t(),o("div",{class:"col-4",key:s},[d("div",L,[X,d("div",q,[d("span",z,i(e.documentNm),1)]),A,d("div",E,[d("span",G,i(e.documentPrice),1)]),M,d("div",T,[c(x,{inputId:"possible0001",name:"possible",value:"possible0001"}),W]),d("div",Y,[c(x,{inputId:"impossible",name:"impossible",value:"impossible",modelValue:p.status,"onUpdate:modelValue":l[4]||(l[4]=e=>p.status=e)},null,8,["modelValue"]),Z]),F,d("div",H,[c(I,{label:"삭제",class:"p-button-danger p-button-text"}),c(I,{label:"변경",class:"p-button-success p-button-text"})])])])))),128))]),n("2")])}],["__file","/Users/jeff/Documents/jeff/test/sample/started/my-vue-app/src/views/test/SettingDocument.vue"]]);export{J as default};
