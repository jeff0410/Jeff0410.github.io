import{_ as e,r as t,o as a,c as s,a as i,b as n,w as o,m as l,n as r,h as c,t as u,e as m,p as d,i as p}from"./index.8023d88d.js";const g={data:()=>({customEvents:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],horizontalEvents:["2020","2021","2022","2023"]})},v=e=>(d("data-v-9b7bee90"),e=e(),p(),e),h={class:"grid"},b={class:"col-12"},f={class:"card"},_=v((()=>i("h4",null,"Timeline",-1))),q=v((()=>i("h5",null,"Custom Timeline",-1))),w=["src","alt"],y=v((()=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",-1))),z=v((()=>i("h5",{style:{"margin-top":"5em"}},"Horizontal - Alternate Align",-1))),j=c("   ");const x=e(g,[["render",function(e,d,p,g,v,x){const k=t("Button"),B=t("Card"),C=t("Timeline");return a(),s("div",h,[i("div",b,[i("div",f,[_,q,n(C,{value:v.customEvents,align:"alternate",class:"customized-timeline"},{marker:o((e=>[i("span",{class:"flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2",style:l({backgroundColor:e.item.color})},[i("i",{class:r(e.item.icon)},null,2)],4)])),content:o((e=>[n(B,null,{title:o((()=>[c(u(e.item.status),1)])),subtitle:o((()=>[c(u(e.item.date),1)])),content:o((()=>[e.item.image?(a(),s("img",{key:0,src:"images/product/"+e.item.image,alt:e.item.name,width:"200",class:"shadow-2 mb-3"},null,8,w)):m("v-if",!0),y,n(k,{label:"Read more",class:"p-button-text"})])),_:2},1024)])),_:1},8,["value"]),z,n(C,{value:v.horizontalEvents,layout:"horizontal",align:"alternate"},{content:o((e=>[c(u(e.item),1)])),opposite:o((()=>[j])),_:1},8,["value"])])])])}],["__scopeId","data-v-9b7bee90"],["__file","/Users/jeff/Documents/jeff/test/sample/started/my-vue-app/src/pages/TimelineDemo.vue"]]);export{x as default};