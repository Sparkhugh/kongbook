"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}new(function(){function n(t,e){_classCallCheck(this,n),this.container=document.getElementById(t),this.shopList=document.createElement("table"),this.cartList=document.createElement("table"),this.products=e,this.cartProducts=this.getStorage()||[],this.container.appendChild(this.shopList),this.container.appendChild(this.cartList)}return _createClass(n,[{key:"setStorage",value:function(t){localStorage.setItem("cart",JSON.stringify(t))}},{key:"getStorage",value:function(){return JSON.parse(localStorage.getItem("cart"))||[]}},{key:"init",value:function(){this.initShopList(),0<this.getStorage().length&&this.renderCartList()}},{key:"initShopList",value:function(){var e="<thead>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<th>商品ID</th>\n\t\t\t\t\t\t\t<th>商品名称</th>\n\t\t\t\t\t\t\t<th>商品图片</th>\n\t\t\t\t\t\t\t<th>商品价格</th>\n\t\t\t\t\t\t\t<th>操作</th>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t </thead>";e+="<tbody>",this.products.forEach(function(t){e+="<tr>\n\t\t\t\t\t\t\t<td>".concat(t.id,"</td>\n\t\t\t\t\t\t\t<td>").concat(t.name,'</td>\n\t\t\t\t\t\t\t<td><img src="').concat(t.pic,'"></td>\n\t\t\t\t\t\t\t<td>').concat(t.price,'</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a href="javascript:;" class="addCart">加入购物车</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>')}),e+="</tbody>",this.shopList.innerHTML=e,this.addCartListEvent()}},{key:"addCartListEvent",value:function(){var n=this;this.container.querySelectorAll(".addCart").forEach(function(t){t.onclick=function(){var t=this.parentNode.parentNode,e={id:t.children[0].innerHTML,name:t.children[1].innerHTML,pic:t.children[2].children[0].src,price:t.children[3].innerHTML};n.addToCartProducts(e),n.renderCartList()}})}},{key:"addToCartProducts",value:function(t){this.cartProducts=this.getStorage();for(var e=0;e<this.cartProducts.length;e++)if(this.cartProducts[e].id==t.id)return this.cartProducts[e].num++,void this.setStorage(this.cartProducts);t.num=1,this.cartProducts.push(t),this.setStorage(this.cartProducts)}},{key:"renderCartList",value:function(){var e="<thead>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<th>商品ID</th>\n\t\t\t\t\t\t\t<th>商品名称</th>\n\t\t\t\t\t\t\t<th>商品图片</th>\n\t\t\t\t\t\t\t<th>商品价格</th>\n\t\t\t\t\t\t\t<th>商品数量</th>\n\t\t\t\t\t\t\t<th>操作</th>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t </thead>";e+="<tbody>",this.getStorage().forEach(function(t){e+="<tr>\n\t\t\t\t\t\t\t<td>".concat(t.id,"</td>\n\t\t\t\t\t\t\t<td>").concat(t.name,'</td>\n\t\t\t\t\t\t\t<td><img src="').concat(t.pic,'"></td>\n\t\t\t\t\t\t\t<td>').concat(t.price,'</td>\n\t\t\t\t\t\t\t<td class="change">\n\t\t\t\t\t\t\t\t<span class="jian">-</span>\n\t\t\t\t\t\t\t\t').concat(t.num,'\n\t\t\t\t\t\t\t\t<span class="jia">+</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a href="javascript:;" class="del">删除</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>')}),e+="</tbody>",this.cartList.innerHTML=e,this.deleteProductEvent(),this.changeNumEvent()}},{key:"changeNumEvent",value:function(){var n=this;this.container.querySelectorAll(".change").forEach(function(t){t.onclick=function(t){t.target;var e=this.parentNode.children[0].innerHTML;"jian"==t.target.className&&n.jianNum(e),"jia"==t.target.className&&(n.jiaNum(e),n.renderCartList())}})}},{key:"jianNum",value:function(t){for(var e=this.getStorage(),n=0;n<e.length;n++)if(e[n].id==t)return e[n].num--,this.setStorage(e),this.renderCartList(),e[n].num<=0?void this.deleteFromCartProducts(t):void 0}},{key:"jiaNum",value:function(t){for(var e=this.getStorage(),n=0;n<e.length;n++)if(e[n].id==t)return e[n].num++,void this.setStorage(e)}},{key:"deleteProductEvent",value:function(){var e=this;this.container.querySelectorAll(".del").forEach(function(t){t.onclick=function(){var t=this.parentNode.parentNode.children[0].innerHTML;e.deleteFromCartProducts(t)}})}},{key:"deleteFromCartProducts",value:function(e){this.cartProducts=this.getStorage(),this.cartProducts=this.cartProducts.filter(function(t){return t.id!=e}),this.setStorage(this.cartProducts),this.renderCartList(),this.getStorage().length<1&&(this.cartList.innerHTML="")}}]),n}())("cartBox",[{name:"我和昆曲有故事",pic:"./images/img35.jpg",price:58,id:1111},{name:"南京传",pic:"./images/img36.jpg",price:88,id:2222},{name:"妙笔生辉:上海图书馆藏名家手稿",pic:"./images/img37.jpg",price:578,id:3333}]).init();