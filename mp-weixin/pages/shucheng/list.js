(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shucheng/list"],{1540:function(t,e,n){"use strict";n.r(e);var r=n("8609"),i=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},"18d5":function(t,e,n){"use strict";(function(t){n("7717"),n("921b");r(n("66fd"));var e=r(n("4128"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"2f60":function(t,e,n){"use strict";var r=n("91ab"),i=n.n(r);i.a},4128:function(t,e,n){"use strict";n.r(e);var r=n("4218"),i=n("1540");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("2f60");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},4218:function(t,e,n){"use strict";var r={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"db78"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("shucheng","修改")),r=t.isAuth("shucheng","删除"),i=t.__map(t.list,(function(e,n){var r=e.tupianfengmian.split(",");return{$orig:t.__get_orig(e),g0:r}})),s=t.isAuth("shucheng","新增");t.$mp.data=Object.assign({},{$root:{m0:n,m1:r,l0:i,m2:s}})},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}))},8609:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))}}var a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"小说名称"},{queryName:"作者"},{queryName:"出版社"}],sactiveItem:{padding:"0 28rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"#333",color:"#fff",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"#fff",color:"#333",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},queryIndex:0,list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},onShow:function(){var t=o(r.default.mark((function t(){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),t.next=3,this.$api.list("xiaoshuofenlei",{page:1,limit:100});case 3:e=t.sent,e.data.list.splice(0,0,{id:0,xiaoshuofenlei:"全部"}),this.categoryList=e.data.list,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.xiaoshuomingcheng="",this.searchForm.zuozhe="",this.searchForm.chubanshe=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=o(r.default.mark((function t(e){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:e.num,limit:e.size},"全部"!=this.categoryName&&(n.xiaoshuofenlei="%"+this.categoryName+"%"),t.next=4,this.$api.list("shucheng",n);case 4:i=t.sent,1==e.num&&(this.list=[]),this.list=this.list.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onDetailTap:function(t){this.$utils.jump("./detail?id=".concat(t.id))},onUpdateTap:function(t){this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var n=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=o(r.default.mark((function t(i){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=5;break}return t.next=3,n.$api.del("shucheng",JSON.stringify([e]));case 3:n.hasNext=!0,n.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()})},search:function(){var t=o(r.default.mark((function t(){var e,n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.xiaoshuomingcheng&&(e["xiaoshuomingcheng"]="%"+this.searchForm.xiaoshuomingcheng+"%"),this.searchForm.zuozhe&&(e["zuozhe"]="%"+this.searchForm.zuozhe+"%"),this.searchForm.chubanshe&&(e["chubanshe"]="%"+this.searchForm.chubanshe+"%"),t.next=7,this.$api.list("shucheng",e);case 7:n=t.sent,1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=a}).call(this,n("543d")["default"])},"91ab":function(t,e,n){}},[["18d5","common/runtime","common/vendor"]]]);