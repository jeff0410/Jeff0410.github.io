import{_ as e,b as l,h as t,r as s,o as a,c as o,j as u,f as d,a as n,s as c,v as m,k as i}from"./index.daf3867c.js";import{D as p,y as r,R as v,d as b,a as f,g as x,V as I,N as V}from"./DataInput.db722cba.js";const N=e=>{if(null===e)return;return e.toLocaleString("ko-KR")},h={components:{DataInput:p},setup(){const e=r(b,"document"),s=l(),a=l(""),o=l(0),u=l(0),d=l({}),n=l([]),c=l([]);t((()=>{m()}));const m=async()=>{let l=[],t=[];try{(await v(e)).docs.map((e=>{let l=e.data();l={...l,documentId:e.id},t.push(l)}));let s=0;t.forEach((e=>{e.documentIdx>s&&(s=e.documentIdx),l.push(e.documentStatus)})),u.value=s+1,c.value=l,n.value=t}catch(s){}},i=()=>{u.value=0,a.value="",o.value=0,s.value=""};return{status:s,documentNm:a,documentPrice:o,documentList:n,dcs:c,createNewDocument:async()=>{let l=s.value+u.value;d.value={documentIdx:u.value,documentNm:a.value,documentPrice:o.value,documentStatus:l};await f(e,d.value);s.value="",m(),i()},updateDocument:async(e,l)=>{const t=x(b,"document",e);try{await I(t,{documentStatus:l})}catch(s){}},deleteDocument:async e=>{const l=x(b,"document",e);try{await V(l)}catch(t){}m()},numberFormat:N}}},D={class:"grid"},y={class:"flex col-12"},k={class:"card col-4"},w=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"문서명")],-1),U={class:"m-3"},g=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"가격(원)")],-1),j={class:"m-3"},C=d("span",{class:"text-red"},"무료 발급문서는 숫자 0 입력",-1),P=d("div",{class:"m-3"},[d("span",{class:"text-teel"}," 신청가능 설정 ")],-1),S={class:"m-3"},_=d("label",{class:"ml-3 text-xl font-bold",for:"possible"},"신청가능",-1),L={class:"m-3"},R=d("label",{class:"ml-3 text-xl font-bold",for:"impossible"},"신청불가",-1),B=d("div",null,[d("hr")],-1),F={class:"flex justify-content-end align-items-end"},E=d("div",{class:"col-4 ml-5 text-xl"},[d("p",null,"메디패스 서비스를 통해 발급가능한"),d("p",null,"제증명서를 설정하세요"),d("br"),d("p",null,"유료 제증명서는 설정한 금액외"),d("p",null,"결제수수료가 추가 됩니다.")],-1),K={class:"grid"},q={class:"card"},z=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"문서명")],-1),A={class:"m-3"},G={class:"text-xl font-bold"},H=d("div",{class:"m-3"},[d("label",{for:"documentNm"},"가격(원)")],-1),J={class:"m-3"},M={class:"text-xl font-bold"},O=d("div",{class:"m-3"},[d("span",{class:"text-teel"}," 신청가능 설정 ")],-1),Q={class:"m-3"},T=["for"],W={class:"m-3"},X=["for"],Y=d("div",null,[d("hr")],-1),Z={class:"flex justify-content-end align-items-end"};const $=e(h,[["render",function(e,l,t,p,r,v){const b=s("DataInput"),f=s("InputNumber"),x=s("RadioButton"),I=s("Button");return a(),o("div",null,[u("1"),d("div",D,[d("div",y,[d("div",k,[w,d("div",U,[n(b,{placeholderInfo:"이름을 입력하세요",fromClass:"w-full",modelValue:p.documentNm,id:"documentNm","onUpdate:modelValue":l[0]||(l[0]=e=>p.documentNm=e)},null,8,["modelValue"])]),g,d("div",j,[n(f,{inputId:"documentPrice",placeholder:"숫자만 입력",class:"w-full text-xl",modelValue:p.documentPrice,"onUpdate:modelValue":l[1]||(l[1]=e=>p.documentPrice=e)},null,8,["modelValue"]),C]),P,d("div",S,[n(x,{inputId:"possible",name:"possible",value:"possible",modelValue:p.status,"onUpdate:modelValue":l[2]||(l[2]=e=>p.status=e)},null,8,["modelValue"]),_]),d("div",L,[n(x,{inputId:"impossible",name:"impossible",value:"impossible",modelValue:p.status,"onUpdate:modelValue":l[3]||(l[3]=e=>p.status=e)},null,8,["modelValue"]),R]),B,d("div",F,[n(I,{label:"신규생성",class:"p-button-success p-button-text",onClick:p.createNewDocument},null,8,["onClick"])])]),E])]),u("1"),u("2"),d("div",K,[(a(!0),o(c,null,m(p.documentList,((e,l)=>(a(),o("div",{class:"col-4",key:l},[d("div",q,[z,d("div",A,[d("span",G,i(e.documentNm),1)]),H,d("div",J,[d("span",M,i(p.numberFormat(e.documentPrice)),1)]),O,d("div",Q,[n(x,{inputId:"possible"+e.documentIdx,name:e.documentStatus,value:"possible"+e.documentIdx,modelValue:p.dcs[l],"onUpdate:modelValue":e=>p.dcs[l]=e},null,8,["inputId","name","value","modelValue","onUpdate:modelValue"]),d("label",{class:"ml-3 text-xl font-bold",for:"possible"+e.documentIdx},"신청가능",8,T)]),d("div",W,[n(x,{inputId:"impossible"+e.documentIdx,name:"impossible",value:"impossible"+e.documentIdx,modelValue:p.dcs[l],"onUpdate:modelValue":e=>p.dcs[l]=e},null,8,["inputId","value","modelValue","onUpdate:modelValue"]),d("label",{class:"ml-3 text-xl font-bold",for:"impossible"+e.documentIdx},"신청불가",8,X)]),Y,d("div",Z,[n(I,{label:"삭제",class:"p-button-danger p-button-text",onClick:l=>p.deleteDocument(e.documentId)},null,8,["onClick"]),n(I,{label:"변경",class:"p-button-success p-button-text",onClick:t=>p.updateDocument(e.documentId,p.dcs[l])},null,8,["onClick"])])])])))),128))]),u("2")])}],["__file","/Users/jeff/Documents/jeff/dev/non_linked_dev/src/views/home/SettingDocument.vue"]]);export{$ as default};
