(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fbda9d8"],{"0b83":function(t,e,a){},"22d9":function(t,e,a){"use strict";var r=a("0b83"),n=a.n(r);n.a},"3f06":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"position-relative"},[t.loading?a("div",{staticClass:"overlay",class:{"white-transparent":t.white}},[a("spinner")],1):t._e(),t._t("default")],2)},n=[],o=a("cf21"),i={components:{Spinner:o["a"]},props:{loading:{default:!1},white:{type:Boolean,default:!1}}},s=i,c=(a("22d9"),a("2877")),u=Object(c["a"])(s,r,n,!1,null,"6cc85e67",null);e["a"]=u.exports},4796:function(t,e,a){"use strict";var r=a("5ad7"),n=a.n(r);n.a},"5ad7":function(t,e,a){},6545:function(t,e,a){},e2f3:function(t,e,a){"use strict";var r=a("6545"),n=a.n(r);n.a},fe9f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-9 bg-muted d-flex flex-column"},[a("loading-overlay",{staticClass:"flex-fill overflow-h",attrs:{loading:t.loadingOverlay}},[a("div",{staticClass:"d-flex flex-row-reverse"},[a("button",{staticClass:"m-4 btn btn-primary",attrs:{round:""},on:{click:function(e){return t.showAddModal()}}},[a("i",{staticClass:"las la-plus-circle"}),t._v("Add Product Category ")])]),a("div",{staticClass:"row"},t._l(t.pCategoryAndProductList,(function(e){return a("div",{key:e.ID,staticClass:"col-6 p-2"},[a("div",{staticClass:"tag-container px-2 py-3"},[a("div",[a("span",{staticClass:"tag px-3 py-2",on:{click:function(a){return t.showEditModal(e)}}},[t._v(t._s(e.Name))])]),a("div",{staticClass:"mt-3"},[a("span",{staticClass:"stag px-2 py-1",on:{click:function(a){return t.addProduct(e)}}},[t._v("+ Add")]),t._l(e.Products,(function(r){return a("span",{key:r.ID,staticClass:"stag px-2 py-1 m-1",on:{click:function(a){return t.showActionsModal(r,e)}}},[t._v(t._s(r.Name))])}))],2)])])})),0)]),a("product-modal",{on:{addProduct:t.appendProduct,updateProduct:t.editProduct,deleteProduct:t.removeProduct}}),a("modal",{attrs:{name:"productCategoryModal",height:"auto",width:"400"},on:{"before-open":t.beforeOpen,opened:t.focus}},[a("div",{staticClass:"form"},[a("label",[t._v("Product Category Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pCategoryName,expression:"pCategoryName"}],ref:"pCategoryName",staticClass:"textbox form-control",attrs:{placeholder:" Enter Product Category Name",type:"text"},domProps:{value:t.pCategoryName},on:{input:function(e){e.target.composing||(t.pCategoryName=e.target.value)}}}),a("div",{staticClass:"d-flex flex-row-reverse justify-content-between align-items-center"},["Update"==t.btnpCategory?a("button",{staticClass:"m-2 btn btn-primary",on:{click:t.updateProductCategory}},[t._v("Update")]):t._e(),"Update"==t.btnpCategory?a("a",{staticClass:"text-danger mr-2",on:{click:t.removeProductCategory}},[a("i",{staticClass:"lar la-trash-alt"}),t._v(" Delete ")]):t._e(),"Add"==t.btnpCategory?a("button",{staticClass:"m-2 btn btn-primary",on:{click:t.addProductCategory}},[t._v("Add")]):t._e()]),a("div",{staticClass:"clearfix"})])])],1)},n=[],o=(a("4de4"),a("c740"),a("4160"),a("caad"),a("d81d"),a("a434"),a("d3b7"),a("2532"),a("159b"),a("96cf"),a("89ba")),i=a("bc3a"),s=a.n(i),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"product",height:"auto",width:"400"},on:{"before-open":t.beforeOpen,opened:t.focus}},[a("loading-overlay",{attrs:{white:"",loading:t.loading}},[a("div",{staticClass:"p-2"},[[a("div",{staticClass:"mb-2"},[a("span",{staticClass:"tag px-3 py-2"},[t._v(t._s(t.parentpCategory.Name))])]),a("small",{staticClass:"text-muted"},[t._v("Product Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",staticClass:"form-control",domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),a("div",{staticClass:"d-flex flex-row-reverse justify-content-between align-items-center"},[t.editModal?a("button",{staticClass:"btn btn-primary my-2 btn-sm",on:{click:t.update}},[t._v("Update")]):t._e(),t.editModal?a("a",{staticClass:"text-danger mr-2",on:{click:t.remove}},[a("i",{staticClass:"lar la-trash-alt"}),t._v(" Delete ")]):a("button",{staticClass:"btn btn-primary my-2 btn-sm",on:{click:t.add}},[t._v("Add")])])]],2)])],1)},u=[],d=a("3f06"),p={components:{LoadingOverlay:d["a"]},data:function(){return{input:"",parentpCategory:{},product:{},loading:!1}},methods:{resetModal:function(){this.input="",this.product={}},beforeOpen:function(t){this.resetModal();var e=t.params,a=e.parentpCategory,r=e.editModal,n=e.product;this.parentpCategory=a,r&&(this.editModal=r),n&&(this.product=n,this.input=n.Name)},focus:function(){this.$refs.input.focus()},update:function(){var t=this;this.input&&(this.exists||(this.loading=!0,s.a.post("updateProduct",{ID:this.product.ID,Name:this.input,ProductCategoryID:this.parentpCategory.ID}).then((function(e){200==e.status&&t.$emit("updateProduct",e.data)})).catch().finally((function(e){t.loading=!1,t.$modal.hide("product")}))))},remove:function(){var t=this;this.loading=!0,s.a.post("removeProduct",{ID:this.product.ID,Name:this.input,ProductCategoryID:this.parentpCategory.ID}).then((function(e){200==e.status&&t.$emit("deleteProduct",e.data)})).catch().finally((function(e){t.loading=!1,t.$modal.hide("product")}))},add:function(){var t=this;this.input&&(this.exists||(this.loading=!0,s.a.post("addProduct",{Name:this.input,ProductCategoryID:this.parentpCategory.ID}).then((function(e){200==e.status&&t.$emit("addProduct",e.data)})).catch().finally((function(e){t.loading=!1,t.$modal.hide("product")}))))}},computed:{exists:function(){return this.parentpCategory.Products.map((function(t){return t.Name})).includes(this.input)},editModal:function(){return this.product.ID}}},l=p,f=a("2877"),g=Object(f["a"])(l,c,u,!1,null,null,null),h=g.exports,m={components:{ProductModal:h,LoadingOverlay:d["a"]},data:function(){return{product:"",pCategoryName:"",productName:"",pCategoryAndProductList:[],productList:[],pCategoryID:0,productID:0,btnpCategory:"",btnproduct:"",selected:"",btnAdd:!1,parentTag:{},loadingOverlay:!1}},methods:{addProduct:function(t){this.$modal.show("product",{parentpCategory:t})},showActionsModal:function(t,e){this.$modal.show("product",{parentpCategory:e,product:t})},showAddModal:function(){this.pCategoryName="",this.btnpCategory="Add",this.$modal.show("productCategoryModal")},showEditModal:function(t){this.pCategoryName=t.Name,this.pCategoryID=t.ID,this.btnpCategory="Update",this.$modal.show("productCategoryModal")},add:function(){},getpCategoryAndProduct:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingOverlay=!0,t.next=4,s.a.get("pcategorysandproducts").then((function(t){e.pCategoryAndProductList=t.data})).finally((function(){e.loadingOverlay=!1}));case 4:t.sent,t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",null);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),addProductCategory:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.pCategoryName){t.next=2;break}return t.abrupt("return");case 2:if(!this.exists){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,s.a.post("addpCategory",{Name:this.pCategoryName});case 7:t.sent,this.$modal.hide("productCategoryModal"),this.getpCategoryAndProduct(),t.next=15;break;case 12:return t.prev=12,t.t0=t["catch"](4),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,this,[[4,12]])})));function e(){return t.apply(this,arguments)}return e}(),updateProductCategory:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.pCategoryName){t.next=2;break}return t.abrupt("return");case 2:if(!this.exists){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,s.a.post("updatepCategory",{ID:this.pCategoryID,Name:this.pCategoryName});case 7:t.sent,this.$modal.hide("productCategoryModal"),this.getpCategoryAndProduct(),t.next=15;break;case 12:return t.prev=12,t.t0=t["catch"](4),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,this,[[4,12]])})));function e(){return t.apply(this,arguments)}return e}(),removeProductCategory:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("removepCategory",{ID:this.pCategoryID});case 3:t.sent,this.$modal.hide("productCategoryModal"),this.getpCategoryAndProduct(),t.next=11;break;case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),focus:function(t){"productCategoryModal"==t&&this.$refs.pCategoryName.focus()},appendProduct:function(t){this.pCategoryAndProductList.forEach((function(e){e.ID===t.ProductCategoryID&&e.Products.push(t)}))},editProduct:function(t){var e=this.pCategoryAndProductList.findIndex((function(e){return e.ID==t.ProductCategoryID})),a=this.pCategoryAndProductList[e].Products.filter((function(e){return e.ID==t.ID}));a[0].Name=t.Name},removepCategory:function(t){var e=this.pCategoryAndProductList.findIndex((function(t){return t.ID==pCategoryID}));this.pCategoryAndProductList.splice(e,1)},removeProduct:function(t){var e=this.pCategoryAndProductList.findIndex((function(e){return e.ID==t.ProductCategoryID})),a=this.pCategoryAndProductList[e].Products.findIndex((function(e){return e.ID==t.ID}));this.pCategoryAndProductList[e].Products.splice(a,1)}},mounted:function(){this.getpCategoryAndProduct()},computed:{exists:function(){return this.pCategoryAndProductList.map((function(t){return t.Name})).includes(this.pCategoryName)}}},y=m,C=(a("e2f3"),a("4796"),Object(f["a"])(y,r,n,!1,null,"7087c358",null));e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-5fbda9d8.bbf93c4c.js.map