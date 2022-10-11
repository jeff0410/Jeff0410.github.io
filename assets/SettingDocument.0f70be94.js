import{_ as e,b as l,h as t,r as a,o as s,c as n,j as u,f as o,a as d,s as c,v as i,w as m,k as p}from"./index.13d45fc2.js";import{D as r,y as v,R as f,n as b,d as x,a as I,g as y,V,N as C}from"./DataInput.f328d6e8.js";const h={components:{DataInput:r},setup(){const e=v(x,"document"),a=l(),s=l(""),n=l(""),u=l(0),o=l({}),d=l([]),c=l([]),i=l(!0),m=l(["w-full","p-invalid"]),p=l(0),r=l(""),h=l(!1);t((()=>{w()}));const w=async()=>{let l=[],t=[];try{(await f(e)).docs.map((e=>{let l=e.data();l={...l,documentId:e.id},t.push(l)}));let a=0;t.forEach((e=>{e.documentIdx>a&&(a=e.documentIdx),l.push(e.documentStatus)})),u.value=a+1,c.value=l,d.value=t}catch(a){}},k=()=>{if(""===s.value)return void(p.value=1);if(""===n.value)return void(p.value=2);if(void 0===a.value||null===a.value||""===a.value)return;let e=a.value+u.value,l=n.value.replace(/(,)/g,"");o.value={documentIdx:u.value,documentNm:s.value,documentPrice:l,documentStatus:e},h.value=!0,p.value=0,i.value=!1},D=()=>{u.value=0,n.value="",s.value="",a.value="",i.value=!0,r.value="",h.value=!1};return{status:a,documentNm:s,documentPrice:n,documentList:d,dcs:c,inputClass:m,emptyInput:p,dialogHeader:r,isComfirm:h,comfirm:()=>{k(),r.value="발급문서 생성 확인"},createNewDocument:async()=>{if(!i.value)try{await I(e,o.value)}catch(l){}w(),D()},updateDocument:async(e,l)=>{const t=y(x,"document",e);try{await V(t,{documentStatus:l})}catch(a){}},deleteDocument:async e=>{const l=y(x,"document",e);try{await C(l)}catch(t){}w()},numberFormat:b,resetData:D}}},w={class:"grid"},k={class:"flex col-12"},D={class:"card col-4"},g=o("div",{class:"m-3"},[o("label",{for:"documentNm"},"문서명")],-1),N={class:"m-3"},U=o("div",{class:"m-3"},[o("label",{for:"documentNm"},"가격(원)")],-1),j={class:"m-3"},P=o("span",{class:"text-red"},"무료 발급문서는 숫자 0 입력",-1),_=o("div",{class:"m-3"},[o("span",{class:"text-teel"}," 신청가능 설정 ")],-1),S={class:"m-3"},B=o("label",{class:"ml-3 text-xl font-bold",for:"possible"},"신청가능",-1),F={class:"m-3"},H=o("label",{class:"ml-3 text-xl font-bold",for:"impossible"},"신청불가",-1),L=o("div",null,[o("hr")],-1),R={class:"flex justify-content-end align-items-end"},T=o("div",{class:"col-4 ml-5 text-xl"},[o("p",null,"메디패스 서비스를 통해 발급가능한"),o("p",null,"제증명서를 설정하세요"),o("br"),o("p",null,"유료 제증명서는 설정한 금액외"),o("p",null,"결제수수료가 추가 됩니다.")],-1),E={class:"grid"},q={class:"card"},z=o("div",{class:"m-3"},[o("label",{for:"documentNm"},"문서명")],-1),A={class:"m-3"},G={class:"text-xl font-bold"},J=o("div",{class:"m-3"},[o("label",{for:"documentNm"},"가격(원)")],-1),K={class:"m-3"},M={class:"text-xl font-bold"},O=o("div",{class:"m-3"},[o("span",{class:"text-teel"}," 신청가능 설정 ")],-1),Q={class:"m-3"},W=["for"],X={class:"m-3"},Y=["for"],Z=o("div",null,[o("hr")],-1),$={class:"flex justify-content-end align-items-end"},ee={class:"createUser"},le={class:"flex align-items-center justify-content-between"},te=o("span",null,"문서명 : ",-1),ae={class:"flex align-items-center justify-content-between"},se=o("span",null,"가격 : ",-1),ne={class:"flex align-items-center justify-content-between"},ue=o("span",null,"신청가능여부 : ",-1);const oe=e(h,[["render",function(e,l,t,r,v,f){const b=a("DataInput"),x=a("RadioButton"),I=a("Button"),y=a("Dialog");return s(),n("div",null,[u("1"),o("div",w,[o("div",k,[o("div",D,[g,o("div",N,[d(b,{placeholderInfo:"이름을 입력하세요",inputClass:1===r.emptyInput?r.inputClass:["w-full"],modelValue:r.documentNm,id:"documentNm",inputType:"name","onUpdate:modelValue":l[0]||(l[0]=e=>r.documentNm=e)},null,8,["inputClass","modelValue"])]),U,o("div",j,[d(b,{placeholderInfo:"숫자만 입력 하세요",inputClass:2===r.emptyInput?r.inputClass:["w-full"],modelValue:r.documentPrice,id:"documentPrice",inputType:"price","onUpdate:modelValue":l[1]||(l[1]=e=>r.documentPrice=e)},null,8,["inputClass","modelValue"]),P]),_,o("div",S,[d(x,{inputId:"possible",name:"possible",value:"possible",modelValue:r.status,"onUpdate:modelValue":l[2]||(l[2]=e=>r.status=e)},null,8,["modelValue"]),B]),o("div",F,[d(x,{inputId:"impossible",name:"impossible",value:"impossible",modelValue:r.status,"onUpdate:modelValue":l[3]||(l[3]=e=>r.status=e)},null,8,["modelValue"]),H]),L,o("div",R,[d(I,{label:"신규생성",class:"p-button-success p-button-text",onClick:r.comfirm},null,8,["onClick"])])]),T])]),u("1"),u("2"),o("div",E,[(s(!0),n(c,null,i(r.documentList,((e,l)=>(s(),n("div",{class:"col-4",key:l},[o("div",q,[z,o("div",A,[o("span",G,p(e.documentNm),1)]),J,o("div",K,[o("span",M,p(r.numberFormat(e.documentPrice)),1)]),O,o("div",Q,[d(x,{inputId:"possible"+e.documentIdx,name:e.documentStatus,value:"possible"+e.documentIdx,modelValue:r.dcs[l],"onUpdate:modelValue":e=>r.dcs[l]=e},null,8,["inputId","name","value","modelValue","onUpdate:modelValue"]),o("label",{class:"ml-3 text-xl font-bold",for:"possible"+e.documentIdx},"신청가능",8,W)]),o("div",X,[d(x,{inputId:"impossible"+e.documentIdx,name:"impossible",value:"impossible"+e.documentIdx,modelValue:r.dcs[l],"onUpdate:modelValue":e=>r.dcs[l]=e},null,8,["inputId","value","modelValue","onUpdate:modelValue"]),o("label",{class:"ml-3 text-xl font-bold",for:"impossible"+e.documentIdx},"신청불가",8,Y)]),Z,o("div",$,[d(I,{label:"삭제",class:"p-button-danger p-button-text",onClick:l=>r.deleteDocument(e.documentId)},null,8,["onClick"]),d(I,{label:"변경",class:"p-button-success p-button-text",onClick:t=>r.updateDocument(e.documentId,r.dcs[l])},null,8,["onClick"])])])])))),128))]),u("2"),d(y,{header:r.dialogHeader,closable:!1,visible:r.isComfirm,"onUpdate:visible":l[4]||(l[4]=e=>r.isComfirm=e),breakpoints:{"960px":"75vw","640px":"90vw"},style:{width:"250px"},modal:!0},{footer:m((()=>[d(I,{label:"취소",icon:"pi pi-times",class:"p-button-text",onClick:r.resetData},null,8,["onClick"]),d(I,{label:"생성",icon:"pi pi-check",class:"p-button-text",onClick:r.createNewDocument,autofocus:""},null,8,["onClick"])])),default:m((()=>[o("div",ee,[o("div",le,[te,o("span",null,p(r.documentNm),1)]),o("div",ae,[se,o("span",null,p(r.documentPrice),1)]),o("div",ne,[ue,o("span",null,p("possible"===r.status?"신청가능":"신청불가"),1)])])])),_:1},8,["header","visible"])])}],["__file","/Users/jeff/Documents/jeff/dev/non_linked_dev/src/views/home/SettingDocument.vue"]]);export{oe as default};
