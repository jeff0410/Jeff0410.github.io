import{_ as t,P as e,o as i,c as n,e as o}from"./index.57ad7b83.js";const l={class:"grid"};const a=t({data:()=>({display:!1,displayConfirmation:!1,visibleLeft:!1,visibleRight:!1,visibleTop:!1,visibleBottom:!1,visibleFull:!1,products:null,selectedProduct:null}),productService:null,created(){this.productService=new e},mounted(){this.productService.getProductsSmall().then((t=>this.products=t))},methods:{open(){this.display=!0},close(){this.display=!1},openConfirmation(){this.displayConfirmation=!0},closeConfirmation(){this.displayConfirmation=!1},toggle(t){this.$refs.op.toggle(t)},toggleDataTable(t){this.$refs.op2.toggle(t)},formatCurrency:t=>t.toLocaleString("en-US",{style:"currency",currency:"USD"}),onProductSelect(t){this.$refs.op.hide(),this.$toast.add({severity:"info",summary:"Product Selected",detail:t.data.name,life:3e3})},confirm(t){this.$confirm.require({target:t.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},[["render",function(t,e,a,s,r,c){return i(),n("div",l,[o(' <div class="col-12 lg:col-6">\n\t\t\t<div class="card p-fluid">\n\t\t\t\t<h5>Dialog</h5>\n\t\t\t\t<Dialog header="Dialog" v-model:visible="display" :breakpoints="{\'960px\': \'75vw\'}" :style="{width: \'30vw\'}" :modal="true">\n\t\t\t\t\t<p class="line-height-3 m-0">\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n\t\t\t\t\t\tin voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\t\t\t\t\t\tExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t\t</p>\n\t\t\t\t\t<template #footer>\n\t\t\t\t\t\t<Button label="Ok" @click="close" icon="pi pi-check" class="p-button-outlined"/>\n\t\t\t\t\t</template>\n\t\t\t\t</Dialog>\n\t\t\t\t<Button label="Show" icon="pi pi-external-link" style="width: auto" @click="open"/>\n\t\t\t</div>\n\t\t\t<div class="card p-fluid">\n\t\t\t\t<h5>Overlay Panel</h5>\n\t\t\t\t<div class="grid formgrid">\n\t\t\t\t\t<div class="col-6">\n\t\t\t\t\t\t<Button type="button" label="Image" @click="toggle" class="p-button-success"/>\n\t\t\t\t\t\t<OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">\n\t\t\t\t\t\t\t<img src="images/nature/nature9.jpg" alt="Nature 9" />\n\t\t\t\t\t\t</OverlayPanel>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-6">\n\t\t\t\t\t\t<Button type="button" label="DataTable" @click="toggleDataTable" class="p-button-success"/>\n\t\t\t\t\t\t<OverlayPanel ref="op2" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px">\n\t\t\t\t\t\t\t<DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect" responsiveLayout="scroll">\n\t\t\t\t\t\t\t\t<Column field="name" header="Name" :sortable="true" headerStyle="min-width:10rem;"></Column>\n\t\t\t\t\t\t\t\t<Column header="Image" headerStyle="min-width:10rem;">\n\t\t\t\t\t\t\t\t\t<template #body="slotProps">\n\t\t\t\t\t\t\t\t\t\t<img :src="\'images/product/\' + slotProps.data.image" :alt="slotProps.data.image" width="100" class="shadow-2" />\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t\t\t<Column field="price" header="Price" :sortable="true" headerStyle="min-width:8rem;">\n\t\t\t\t\t\t\t\t\t<template #body="slotProps">\n\t\t\t\t\t\t\t\t\t\t{{formatCurrency(slotProps.data.price)}}\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t\t</DataTable>\n\t\t\t\t\t\t</OverlayPanel>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-12 lg:col-6">\n\t\t\t<div class="card p-fluid">\n\t\t\t\t<h5>Confirmation</h5>\n\t\t\t\t<Button label="Delete" icon="pi pi-trash" class="p-button-danger" style="width: auto" @click="openConfirmation" />\n\t\t\t\t<Dialog header="Confirmation" v-model:visible="displayConfirmation" :style="{width: \'350px\'}" :modal="true">\n\t\t\t\t\t<div class="flex align-items-center justify-content-center">\n\t\t\t\t\t\t<i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />\n\t\t\t\t\t\t<span>Are you sure you want to proceed?</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<template #footer>\n\t\t\t\t\t\t<Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/>\n\t\t\t\t\t\t<Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus />\n\t\t\t\t\t</template>\n\t\t\t\t</Dialog>\n\t\t\t</div>\n\t\t\t<div class="card">\n\t\t\t\t<h5>Sidebar</h5>\n\t\t\t\t<Sidebar v-model:visible="visibleLeft" :baseZIndex="1000">\n\t\t\t\t\t<h1 style="font-weight:normal">Left Sidebar</h1>\n\t\t\t\t</Sidebar>\n\n\t\t\t\t<Sidebar v-model:visible="visibleRight" :baseZIndex="1000" position="right">\n\t\t\t\t\t<h1 style="font-weight:normal">Right Sidebar</h1>\n\t\t\t\t</Sidebar>\n\n\t\t\t\t<Sidebar v-model:visible="visibleTop" :baseZIndex="1000" position="top">\n\t\t\t\t\t<h1 style="font-weight:normal">Top Sidebar</h1>\n\t\t\t\t</Sidebar>\n\n\t\t\t\t<Sidebar v-model:visible="visibleBottom" :baseZIndex="1000" position="bottom">\n\t\t\t\t\t<h1 style="font-weight:normal">Bottom Sidebar</h1>\n\t\t\t\t</Sidebar>\n\n\t\t\t\t<Sidebar v-model:visible="visibleFull" :baseZIndex="1000" position="full">\n\t\t\t\t\t<h1 style="font-weight:normal">Full Screen</h1>\n\t\t\t\t</Sidebar>\n\n\t\t\t\t<Button icon="pi pi-arrow-right" class="p-button-warning" @click="visibleLeft = true" style="margin-right:.25em" />\n\t\t\t\t<Button icon="pi pi-arrow-left" class="p-button-warning" @click="visibleRight = true" style="margin-right:.25em" />\n\t\t\t\t<Button icon="pi pi-arrow-down" class="p-button-warning" @click="visibleTop = true" style="margin-right:.25em" />\n\t\t\t\t<Button icon="pi pi-arrow-up" class="p-button-warning" @click="visibleBottom = true" style="margin-right:.25em" />\n\t\t\t\t<Button icon="pi pi-external-link" class="p-button-warning" @click="visibleFull = true"  />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-12 lg:col-6">\n\t\t\t<div class="card">\n\t\t\t\t<h5>Tooltip</h5>\n\t\t\t\t<div class="formgroup-inline">\n\t\t\t\t\t<div class="field">\n\t\t\t\t\t\t<InputText type="text" placeholder="Username" v-tooltip="\'Your username\'" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<Button type="button" label="Save" icon="pi pi-check" v-tooltip="\'Click to proceed\'" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-12 lg:col-6">\n\t\t\t<div class="card">\n\t\t\t\t<h5>ConfirmPopup</h5>\n\t\t\t\t<ConfirmPopup></ConfirmPopup>\n\t\t\t\t<Button ref="popup" @click="confirm($event)" icon="pi pi-check" label="Confirm" class="mr-2"></Button>\n\t\t\t</div>\n\t\t</div> ')])}],["__file","/Users/jeff/Documents/jeff/test/sample/started/my-vue-app/src/components/OverlayDemo.vue"]]);export{a as default};
