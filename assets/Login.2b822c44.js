import{_ as e,o as l,c as a,e as s}from"./index.8023d88d.js";const t={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"};const n=e({data:()=>({email:"",password:"",checked:!1}),computed:{logoColor(){return this.$appState.darkTheme?"white":"dark"}}},[["render",function(e,n,r,i,o,d){return l(),a("div",t,[s(' <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">\n            <div class="col-12 mt-5 xl:mt-0 text-center">\n                <img :src="\'layout/images/logo-\' + logoColor + \'.svg\'" alt="Sakai logo" class="mb-5" style="width:81px; height:60px;">\n            </div>\n            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">\n                <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">\n                    <div class="text-center mb-5">\n                        <img src="layout/images/avatar.png" alt="Image" height="50" class="mb-3">\n                        <div class="text-900 text-3xl font-medium mb-3">Welcome, Isabel!</div>\n                        <span class="text-600 font-medium">Sign in to continue</span>\n                    </div>\n                \n                    <div class="w-full md:w-10 mx-auto">\n                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>\n                        <InputText id="email1" v-model="email" type="text" class="w-full mb-3" placeholder="Email" style="padding:1rem;" />\n                \n                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>\n                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>\n                \n                        <div class="flex align-items-center justify-content-between mb-5">\n                            <div class="flex align-items-center">\n                                <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2"></Checkbox>\n                                <label for="rememberme1">Remember me</label>\n                            </div>\n                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>\n                        </div>\n                        <Button label="Sign In" class="w-full p-3 text-xl"></button>\n                    </div>\n                </div>\n            </div>\n        </div> ')])}],["__scopeId","data-v-78ff0242"],["__file","/Users/jeff/Documents/jeff/test/sample/started/my-vue-app/src/pages/Login.vue"]]);export{n as default};