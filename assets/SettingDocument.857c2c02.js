import{_ as e,b as l,h as t,r as s,o as a,c as o,j as u,f as n,a as d,q as c,s as m,k as i}from"./index.7e673d3c.js";import{H as p,y as r,R as v,d as b,D as f,g as x,V as I,N as V}from"./HangulInput.91941f99.js";const N=e=>{if(null===e)return;return e.toLocaleString("ko-KR")},h={components:{HangulInput:p},setup(){const e=r(b,"document"),s=l(),a=l(""),o=l(0),u=l(0),n=l({}),d=l([]),c=l([]);t((()=>{m()}));const m=async()=>{let l=[],t=[];try{(await v(e)).docs.map((e=>{let l=e.data();l={...l,documentId:e.id},t.push(l)}));let s=0;t.forEach((e=>{e.documentIdx>s&&(s=e.documentIdx),l.push(e.documentStatus)})),u.value=s+1,c.value=l,d.value=t}catch(s){}},i=()=>{u.value=0,a.value="",o.value=0,s.value=""};return{status:s,documentNm:a,documentPrice:o,documentList:d,dcs:c,createNewDocument:async()=>{let l=s.value+u.value;n.value={documentIdx:u.value,documentNm:a.value,documentPrice:o.value,documentStatus:l};await f(e,n.value);s.value="",m(),i()},updateDocument:async(e,l)=>{const t=x(b,"document",e);try{await I(t,{documentStatus:l})}catch(s){}},deleteDocument:async e=>{const l=x(b,"document",e);try{await V(l)}catch(t){}m()},numberFormat:N}}},g={class:"grid"},y={class:"flex col-12"},k={class:"card col-4"},w=n("div",{class:"m-3"},[n("label",{for:"documentNm"},"문서명")],-1),D={class:"m-3"},U=n("div",{class:"m-3"},[n("label",{for:"documentNm"},"가격(원)")],-1),j={class:"m-3"},C=n("span",{class:"text-red"},"무료 발급문서는 숫자 0 입력",-1),P=n("div",{class:"m-3"},[n("span",{class:"text-teel"}," 신청가능 설정 ")],-1),S={class:"m-3"},_=n("label",{class:"ml-3 text-xl font-bold",for:"possible"},"신청가능",-1),H={class:"m-3"},L=n("label",{class:"ml-3 text-xl font-bold",for:"impossible"},"신청불가",-1),R=n("div",null,[n("hr")],-1),B={class:"flex justify-content-end align-items-end"},F=n("div",{class:"col-4 ml-5 text-xl"},[n("p",null,"메디패스 서비스를 통해 발급가능한"),n("p",null,"제증명서를 설정하세요"),n("br"),n("p",null,"유료 제증명서는 설정한 금액외"),n("p",null,"결제수수료가 추가 됩니다.")],-1),q={class:"grid"},E={class:"card"},K=n("div",{class:"m-3"},[n("label",{for:"documentNm"},"문서명")],-1),z={class:"m-3"},A={class:"text-xl font-bold"},G=n("div",{class:"m-3"},[n("label",{for:"documentNm"},"가격(원)")],-1),J={class:"m-3"},M={class:"text-xl font-bold"},O=n("div",{class:"m-3"},[n("span",{class:"text-teel"}," 신청가능 설정 ")],-1),Q={class:"m-3"},T=["for"],W={class:"m-3"},X=["for"],Y=n("div",null,[n("hr")],-1),Z={class:"flex justify-content-end align-items-end"};const $=e(h,[["render",function(e,l,t,p,r,v){const b=s("HangulInput"),f=s("InputNumber"),x=s("RadioButton"),I=s("Button");return a(),o("div",null,[u("1"),n("div",g,[n("div",y,[n("div",k,[w,n("div",D,[d(b,{placeholderInfo:"이름을 입력하세요",formClass:"w-full",modelValue:p.documentNm,id:"documentNm","onUpdate:modelValue":l[0]||(l[0]=e=>p.documentNm=e)},null,8,["modelValue"])]),U,n("div",j,[d(f,{inputId:"documentPrice",placeholder:"숫자만 입력",class:"w-full text-xl",modelValue:p.documentPrice,"onUpdate:modelValue":l[1]||(l[1]=e=>p.documentPrice=e)},null,8,["modelValue"]),C]),P,n("div",S,[d(x,{inputId:"possible",name:"possible",value:"possible",modelValue:p.status,"onUpdate:modelValue":l[2]||(l[2]=e=>p.status=e)},null,8,["modelValue"]),_]),n("div",H,[d(x,{inputId:"impossible",name:"impossible",value:"impossible",modelValue:p.status,"onUpdate:modelValue":l[3]||(l[3]=e=>p.status=e)},null,8,["modelValue"]),L]),R,n("div",B,[d(I,{label:"신규생성",class:"p-button-success p-button-text",onClick:p.createNewDocument},null,8,["onClick"])])]),F])]),u("1"),u("2"),n("div",q,[(a(!0),o(c,null,m(p.documentList,((e,l)=>(a(),o("div",{class:"col-4",key:l},[n("div",E,[K,n("div",z,[n("span",A,i(e.documentNm),1)]),G,n("div",J,[n("span",M,i(p.numberFormat(e.documentPrice)),1)]),O,n("div",Q,[d(x,{inputId:"possible"+e.documentIdx,name:e.documentStatus,value:"possible"+e.documentIdx,modelValue:p.dcs[l],"onUpdate:modelValue":e=>p.dcs[l]=e},null,8,["inputId","name","value","modelValue","onUpdate:modelValue"]),n("label",{class:"ml-3 text-xl font-bold",for:"possible"+e.documentIdx},"신청가능",8,T)]),n("div",W,[d(x,{inputId:"impossible"+e.documentIdx,name:"impossible",value:"impossible"+e.documentIdx,modelValue:p.dcs[l],"onUpdate:modelValue":e=>p.dcs[l]=e},null,8,["inputId","value","modelValue","onUpdate:modelValue"]),n("label",{class:"ml-3 text-xl font-bold",for:"impossible"+e.documentIdx},"신청불가",8,X)]),Y,n("div",Z,[d(I,{label:"삭제",class:"p-button-danger p-button-text",onClick:l=>p.deleteDocument(e.documentId)},null,8,["onClick"]),d(I,{label:"변경",class:"p-button-success p-button-text",onClick:t=>p.updateDocument(e.documentId,p.dcs[l])},null,8,["onClick"])])])])))),128))]),u("2")])}],["__file","/Users/jeff/Documents/jeff/dev/non_linked_dev/src/views/home/SettingDocument.vue"]]);export{$ as default};
