(this["webpackJsonplibrary-books"]=this["webpackJsonplibrary-books"]||[]).push([[0],{10:function(t,e,a){t.exports={container:"Library_container__1gmlh",body:"Library_body__vtWTl",content:"Library_content__3jYIr",sidebar:"Library_sidebar__HRVT5",active:"Library_active__39alU"}},15:function(t,e,a){t.exports={content:"Search_content__1pZ7A",search:"Search_search__3tW7O",searchList:"Search_searchList__1DZ6J",load:"Search_load__1pSqx",loading:"Search_loading__1cxi9"}},16:function(t,e,a){t.exports={header:"Header_header__173C0",title:"Header_title__23v8R",burger:"Header_burger__2ruWz",active:"Header_active__V-pdU"}},3:function(t,e,a){t.exports={book:"Content_book__35hS5",exit:"Content_exit__2zI5o",description:"Content_description__3GjXB",h1:"Content_h1__26yGa",p:"Content_p__3-aU4",like_book:"Content_like_book__1VCuL",top:"Content_top__3QX1L",content:"Content_content__Ymays",avatar:"Content_avatar__27BtB"}},31:function(t,e,a){t.exports={exit:"ExitButton_exit__32S_a"}},37:function(t,e,a){},59:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a(17),r=a.n(i),c=(a(37),a(32)),o=a(7),s=a.n(o),u=a.p+"static/media/heart.e1a8c95e.svg",l=a(9),h=a.n(l),d=a(5),v=a(12),j=a(19),b=a(20),g=a(1),f=a(8),p=a.n(f),O=a(13),x=a(14),k=a.n(x),m="https://openlibrary.org",y=function(){var t=Object(O.a)(p.a.mark((function t(e,a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search.json?title=",t.next=3,k.a.get(m+"/search.json?title="+e+"&page=".concat(a,"&limit=15"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),_=function(){var t=Object(O.a)(p.a.mark((function t(e){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(m+e+".json");case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(O.a)(p.a.mark((function t(e,a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(m+"/search/authors.json?q="+e+"&page=".concat(a,"&limit=30"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),N=function(){var t=Object(O.a)(p.a.mark((function t(e){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://openlibrary.org/subjects/literature.json"+"?offset=".concat(e,"&limit=15"));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=new(function(){function t(){Object(j.a)(this,t),this.currentPage=void 0,this.description=void 0,this.searchValue="",this.searchData=[],this.defaultBooks=[],this.loading=!1,this.countPage=1,this.fetching=!1,this.searchAuthot=[],this.category="default",this.offset=0,Object(g.d)(this),this.addDefaultBooks()}return Object(b.a)(t,[{key:"setCurrentPage",value:function(t){this.currentPage=t}},{key:"setDescription",value:function(t){var e=this;this.description=void 0,_(t).then((function(t){return Object(g.g)((function(){return e.description=Object(v.a)({},t)}))}))}},{key:"changeDataList",value:function(t){this.searchData=t,this.searchAuthot=t}},{key:"addData",value:function(){var t=this;""!==this.searchValue&&(this.loading=!0),y(this.searchValue,1).then((function(e){return Object(g.g)((function(){return t.searchData=Object(d.a)(e.docs)}))})).then((function(){return Object(g.g)((function(){return t.loading=!1}))})).then((function(){return Object(g.g)((function(){return t.countPage=1}))}))}},{key:"lazyData",value:function(){var t=this;this.searchData.length>0&&"books"===this.category&&(this.countPage+=1,this.loading=!0,y(this.searchValue,this.countPage).then((function(e){return Object(g.g)((function(){return t.searchData=[].concat(Object(d.a)(t.searchData),Object(d.a)(e.docs))}))})).then((function(){return Object(g.g)((function(){return t.loading=!1}))})).then((function(){return Object(g.g)((function(){return t.fetching=!1}))}))),"default"===this.category&&(console.log(this.loading),this.offset+=15,this.loading=!0,N(this.offset).then((function(e){return Object(g.g)((function(){return t.defaultBooks=[].concat(Object(d.a)(t.defaultBooks),Object(d.a)(e.works))}))})).then((function(){return Object(g.g)((function(){return t.loading=!1}))})).then((function(){return Object(g.g)((function(){return t.fetching=!1}))})))}},{key:"addAuthors",value:function(){var t=this;""!==this.searchValue&&(this.loading=!0),A(this.searchValue,1).then((function(e){return t.searchAuthot=Object(d.a)(e.docs)})).then((function(){return t.loading=!1})).then((function(){return t.countPage=1})),console.log(this.searchAuthot.length)}},{key:"lazyDataAuthors",value:function(){var t=this;this.searchAuthot.length>0&&(this.countPage+=1,this.loading=!0,A(this.searchValue,this.countPage).then((function(e){return t.searchAuthot=[].concat(Object(d.a)(t.searchAuthot),Object(d.a)(e.docs))})).then((function(){return t.loading=!1})).then((function(){return t.fetching=!1})))}},{key:"addDefaultBooks",value:function(){var t=this;this.loading=!0,N(1).then((function(e){return Object(g.g)((function(){return t.defaultBooks=Object(d.a)(e.works)}))})).then((function(){return Object(g.g)((function(){return t.loading=!1}))}))}},{key:"changeSearchValue",value:function(t){this.searchValue=t}},{key:"changeFetching",value:function(t){this.fetching=t}},{key:"changeCategory",value:function(t){this.category=t}}]),t}()),w=a(0),C=function(t){t.onData,t.favoritesList;var e=t.category,a=function(t){B.changeCategory(t)};return Object(w.jsxs)("div",{className:s.a.container,children:[Object(w.jsxs)("div",{className:s.a.favorites,onClick:function(){return a("favorites")},children:[Object(w.jsx)("img",{src:u,alt:"favorites icon"}),Object(w.jsx)("span",{className:h()(s.a.title,["favorites"===e&&s.a.active]),children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]}),Object(w.jsx)("div",{className:s.a.category,children:Object(w.jsxs)("ul",{className:s.a.category__list,children:[Object(w.jsx)("li",{className:h()(s.a.category__item,["authors"===e&&s.a.active]),onClick:function(){return a("authors")},children:"\u0410\u0432\u0442\u043e\u0440\u044b"}),Object(w.jsx)("li",{className:h()(s.a.category__item,["books"===e&&s.a.active]),onClick:function(){return a("books")},children:"\u041a\u043d\u0438\u0433\u0438"})]})})]})},D=a(6),F=a.n(D),M=a.p+"static/media/favoriteActive.105438c8.svg",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAC0CAMAAACAPG9BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRFbIcmjaBa29vb5ePp8fHxprOD+fn5xMq0uMGg1dfPzdHD3uTN4eDj3Nzcc4wx3t7eBSlohAAABJJJREFUeNrsnNt25SAIhjXU8TBE3/9tR5POsSYbkCTtLLnoWrs3+RYiCj+JKc+bmQyTYTJ8cob1bvvIsMLbvQbrR4a3b/faW5dhuXEhliOGG+NwMkyG/5cB3+0pBoT27D3p4v7jXgYEWJIPzm7mXEix/gtvZEAo3tmczS/L2boQAe5iQFiDzduDf1v7aR2dYowBcCPIH6xiNAq8nAEh9QneMWxAuJgBMeRTM7m64lIGiC6bFxDGesJ6iBkgWvMCYXMFAULK0BAywUwOLyGEDEhE2D1xCQMiFaFZgisYwNEJsrEL6jOAz4YD4UCdARbOSjQ7DwkRg+MRtNUAXQaIXDfkukGVGRwb4Tws+QwSN5hTRwgYQmYzVEcU1GPAwl+K5oiTRMVmgCRwQ4UImgxeglDz1Ip6a+FkDDaqMeBqZQwnAcFmiDKGbLwegywkW1Di8wxOj8HnLGVAPQapH8pkUI6HJI0HxX0hzg8Bns+TijmqSM+LpHhmBSFDwcfvDw4U/bBYoxsOAgaQLMZphSG404oWQ/dejaL6IqoytIpXEJG6dRbfEedukNW8ibs1gnrd3UottSJLyoCsC35N0/o9EN7paV6shLgvRw+JinBRb5DckjInd9nxPq2neMLk1wgj/WrCclC6tEN9+9dNc1rLfEy/wHDmCqp0MKrjVFf0fdHkJH+DjrNLOe6jlrMJWh7v0bOaKyAGa/+Q9XZFzTPURQV9sz4tBdfkzeqCpnAGv9yrb76rrFBiTNViXJvAyhJ61fTuxrEZX/GesweTYTJcwLC2IRT419pMynoTw/Z0LDF5H6o5V/94n5Yd6waGNvkS9yGUX4flZttMSkiRmLHlDNXb9cy078ek+fvY3GgqSCoEb0j1bvw5BXN6n22jMemaOy3i0mZQiHd75xfUrrMQ6AQ7hfUFdLXF4inTF/9QJNDrw7TLm+H3QOqKrFr9SYRgjagv1ypf1GCoBbewZb4XGwoMWOQIJwU4h0HaJ34FwWBAHEM4HMagMyB79ILakqEzgM9GAaKzRckMIBVPXvfOqQwawXCkOVMZVFbiQOckMuCq44bNEVKGpOSGnsBHZfBaCJ3FeIDBShmCIsP6hRmcIkOcDJNhMkyG/5BBM1cv88zqqr5PMAB+4XtUfp4haTKUxxnE92qdSm8fyHicoTMpRWUoegxJyoB6tV4UMugdWp2BczJDMFcdWQwGtdq/iBme7z8UiFoMQd6HUUsQcgbZ6CZtmJPMUJR6YlbeE5O8lUXcmgyGoJQecIBBZ3P2xsZu7tN2W/dkBp2N0Z1xpjOonFrdxj2dQUE6OHiBkaEdaJxa3UlGBkNSYRjTUFQ2hh9i0AjKUS1JI1v336nlMPhrQpLFoFBrhTFtUfw60N8huT6ssR5MnHO05uHju3dw8xjW8aB0o3q3QpYa1twrhB30Q/+9Yh7D4NF58B4GjyGNZiiFOZDlinDgzsOMBURS8EOBkQ6AsSqzSUMZ4vBtWuZaDGUIr8Iw1hKKXIaD70QGIza7ML95ePiVxu9ie+N9+/ETfAPzM3wL9EGbDJNhMnxOhh8CDACxwNkk4C9HdgAAAABJRU5ErkJggg==",P=function(t){var e=t.title,a=t.img,n=t.name,i=t.authorPhoto,r=t.item,c=t.changePage,o=t.page,s=t.favorites,u=t.url,l=t.category,h=1===s.filter((function(t){return t.page.key===r.key})).length;return Object(w.jsxs)("li",{className:o===r?F.a.card+" "+F.a.active:F.a.card,onClick:function(){return c(r,u)},children:[Object(w.jsxs)("div",{className:F.a.avatarBox,children:[Object(w.jsx)("img",{className:F.a.avatar,src:"http://covers.openlibrary.org/".concat(a?"b":"a","/olid/").concat(a||i,"-M.jpg"),alt:"book card"}),Object(w.jsx)("img",{className:F.a.defaultAvatar,src:E,alt:"avatar"})]}),Object(w.jsxs)("div",{className:F.a.textBox,children:[Object(w.jsx)("div",{className:F.a.mainText,children:e||n}),Object(w.jsxs)("div",{className:F.a.secondaryTextBox,children:[Object(w.jsx)("div",{className:F.a.secondaryText,children:e}),h&&"favorites"!==l&&Object(w.jsx)("button",{className:F.a.buttonCard,children:Object(w.jsx)("img",{src:M,alt:"asd"})})]})]})]})},S=a(15),L=a.n(S),U=a.p+"static/media/search.79e97e09.svg",J=a(21),Q=Object(J.a)((function(t){var e,a=t.data,i=t.changePage,r=t.page,c=t.favorites,o=t.category,s=B.searchValue,u=B.loading,l=B.fetching;e=null===a||void 0===a?void 0:a.map((function(t){return Object(w.jsx)(P,{category:o,page:r,favorites:c,changePage:i,item:t,authorPhoto:t.key,url:t.key,name:t.name,title:t.title,img:t.cover_edition_key},t.key)}));Object(n.useEffect)((function(){l&&console.log(l),B.lazyData()}),[l]);return Object(w.jsxs)("div",{className:L.a.content,children:[Object(w.jsxs)("div",{className:L.a.search,children:[Object(w.jsx)("img",{src:U,alt:"search"}),Object(w.jsx)("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a...",onChange:function(t){var e=t.target.value;B.changeSearchValue(e),"favorites"===o&&console.log(e)},value:s,onKeyUp:function(t){"Enter"===t.key&&("books"===o?B.addData():"authors"===o&&(console.log("hi"),B.addAuthors()))}})]}),Object(w.jsxs)("ul",{className:L.a.searchList,onScroll:function(t){t.target.scrollHeight-(t.target.scrollTop+500)<100&&B.changeFetching(!0)},children:[e,u&&Object(w.jsx)("div",{className:L.a.load})]})]})})),R=a(3),I=a.n(R),T=a.p+"static/media/exit.69a4530d.png",G=a(31),V=a.n(G),H=function(t){var e=t.changePage;return Object(w.jsx)("button",{className:V.a.exit,onClick:function(){return e(void 0,"")},children:Object(w.jsx)("img",{src:T,alt:"exit"})})},W=function(t){var e,a=t.page,n=t.info,i=t.onFavorites,r=t.favorites,c=t.removeFavorite,o=t.changePage,s=1===r.filter((function(t){return t.page.title===a.title})).length,l=n.description;"undefined"!=typeof l&&(e="string"===typeof l?l:l.value);return Object(w.jsxs)("div",{className:I.a.description,children:[function(){var t=window.innerWidth;return window.onresize=function(){t=window.innerWidth},t}()<760&&Object(w.jsx)("div",{children:Object(w.jsx)(H,{changePage:o})}),Object(w.jsxs)("div",{className:I.a.top,children:[Object(w.jsx)("div",{className:I.a.avatar,children:n.covers?Object(w.jsx)("img",{src:"http://covers.openlibrary.org/b/id/".concat(n.covers[0],"-M.jpg"),alt:"label",className:I.a.book}):Object(w.jsx)("img",{src:E,alt:"\u0430\u0432\u0442\u043e\u0440"})}),Object(w.jsxs)("div",{className:I.a.content,children:[Object(w.jsx)("h1",{className:I.a.h1,children:n.title}),Object(w.jsxs)("p",{onClick:function(){var t;(t=n.authors)&&B.setDescription(t[0].author.key)},children:["\u0410\u0432\u0442\u043e\u0440: ",n.authors[0].name]}),a.publish_date&&Object(w.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438: ",a.publish_date[0]]}),s?Object(w.jsx)("button",{onClick:function(){return t=a.key,void c(t);var t},children:Object(w.jsx)("img",{src:M,alt:"like",className:I.a.like_book})}):Object(w.jsx)("button",{onClick:function(){i(a,n)},children:Object(w.jsx)("img",{src:u,alt:"like",className:I.a.like_book})})]})]}),l?Object(w.jsxs)("p",{className:I.a.p,children:[" ",e," "]}):Object(w.jsx)("h2",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 =("})]})},X=a(10),z=a.n(X),Z=function(t){var e,a=t.page,n=t.info,i=t.favorites,r=t.onFavorites,c=t.removeFavorite,o=t.changePage,s=1===i.filter((function(t){return t.page.name===(null===a||void 0===a?void 0:a.name)})).length;return Object(w.jsxs)("div",{className:I.a.description,children:[function(){var t=window.innerWidth;return window.onresize=function(){t=window.innerWidth},t}()<760&&Object(w.jsx)("div",{children:Object(w.jsx)(H,{changePage:o})}),Object(w.jsxs)("div",{className:I.a.top,children:[Object(w.jsx)("div",{className:I.a.avatar,children:(null===n||void 0===n?void 0:n.photos)?Object(w.jsx)("img",{src:"http://covers.openlibrary.org/b/id/".concat(n.photos[0],"-M.jpg"),alt:"label",className:I.a.book}):Object(w.jsx)("img",{src:E,alt:"\u0430\u0432\u0442\u043e\u0440"})}),Object(w.jsxs)("div",{className:I.a.content,children:[Object(w.jsx)("h1",{className:I.a.h1,children:null===n||void 0===n?void 0:n.name}),Object(w.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",null===n||void 0===n?void 0:n.birth_date]}),Object(w.jsxs)("p",{children:["\u041b\u0443\u0447\u0448\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430: ",null===a||void 0===a?void 0:a.top_work," "]}),s?Object(w.jsx)("button",{onClick:function(){return c(null===a||void 0===a?void 0:a.key)},children:Object(w.jsx)("img",{src:M,alt:"like",className:I.a.like_book})}):Object(w.jsx)("button",{onClick:function(){r(a,n)},children:Object(w.jsx)("img",{src:u,alt:"like",className:I.a.like_book})})]})]}),Object(w.jsxs)("p",{className:I.a.p,children:[null===n||void 0===n||null===(e=n.bio)||void 0===e?void 0:e.value," "]})]})},Y=a(16),q=a.n(Y),K=function(t){var e=t.sidebar,a=t.onSidebar;return Object(w.jsxs)("header",{className:q.a.header,children:[Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC6klEQVRoge3ZyY9VRRQG8B8tRm3sthkSbBGQIYFEwBFCTFzpQsXIzhB0wwpYsWALif+Cf4EbIAQkDnFiSwKExJHgwgUtkZYpytAKtNAv7eLUtW9fbvPuw0e4kPslJ911q+rU+U6dqrzUR4MGDW6HabfpG8cY/sLVZL/hVLKf8R2GuxTLfLyIFXgm2XzMSNaH6W1iLsV4RTuH/diMRR34X4Qt+BjnO1ivFO12hMjMTAxgEIuxBC/hWTxUmHcMe7EPZwp98/AuNmBNoa+FE/geJzGEs7iEy6IK2sU8JZEpM5DQh9ewE99gNDevlb69kexg+pb1j+Jr7Eg++roQT9cm9mMjDuC6W8vieurbmMbelXiKA+84AwmzsT3nZztm/Q9/lePrNpG77WdSu6cLC9QCDZG6oSFSNzRE6oaGSN3QEKkbGiJ1Q0OkbmiI1A0NkbqhIVI3NETqhoZI3fDAEJleYcwpjCQ7I8SeIfyAH8XDdDfwGJ7HC0K6WChkjH4VHrzzWsN44VuV99oxoWl8i0P4Cn8WxhT9ZpiDt/AqVgutpUpii/FNKzovW/BhPC4y0itUpiUiY6uE2PNEbnwLh/E59gihJu/3KSEpvINXTBaJrggp77gJoedXXBPV8Dduton3v45OX817sBxb8UlaMPNzE5/m2p+lb1l7JM3ZgmVlAbXBpHjLduScyMKl9PeKEDyHcdqEEFosIXgUb+M9vIlHCv3/iPLbjS+FalXEHFFmC7FAyHVPi53vFTJgL57McygjUhXnTZyPo8ku5Ppn4n1sS+0PsUskKMNcrBVl9nIiMLfDOG4hkrUHRO32i4wOiozMS7YsLThY4vQnkfEvhCjaMnEOsv/XYp046M+V+DgrdvwX/J5sWNyYN0RJtoRAWlpanWIWVopsZpaX1v4Qh/6j1N6E9UKSy3ARR8QFcVQc9PyO3RP0iFvsA1FuU+nkJ0WZva7adXvPsVRIz0PJdoir+75Fjwfop1CDqvgXjC3cGiA9Xu0AAAAASUVORK5CYII=",alt:"label"}),Object(w.jsx)("h1",{className:q.a.title,children:"Library"}),Object(w.jsx)("button",{onClick:function(){return a(!e)},className:h()(q.a.burger,[e&&q.a.active]),children:Object(w.jsx)("span",{})})]})};var $=new(function(){function t(){Object(j.a)(this,t),this.favorites=[],this.data=localStorage.getItem("favorite"),Object(g.d)(this),this.addFavoritesFromLocal()}return Object(b.a)(t,[{key:"addFavorite",value:function(t,e){this.favorites=[{page:Object(v.a)({},t),info:Object(v.a)({},e)}].concat(Object(d.a)(this.favorites)),this.setLocalStorage()}},{key:"removeFavorites",value:function(t){this.favorites=this.favorites.filter((function(e){return e.page.key!==t})),this.setLocalStorage()}},{key:"addFavoritesFromLocal",value:function(){null!=this.data&&(this.favorites=Object(d.a)(JSON.parse(this.data)))}},{key:"setLocalStorage",value:function(){localStorage.setItem("favorite",JSON.stringify(this.favorites))}}]),t}()),tt=Object(J.a)((function(){var t,e,a,i=$.favorites,r=B.currentPage,o=B.description,s=Object(n.useState)(!1),u=Object(c.a)(s,2),l=u[0],d=u[1],v=B.category;switch(v){case"books":a=B.searchData;break;case"favorites":a=i.map((function(t){return t.page}));break;case"default":a=B.defaultBooks;break;default:a=B.searchAuthot}var j,b=function(t,e){B.setCurrentPage(t),"author"===(null===t||void 0===t?void 0:t.type)?B.setDescription("/authors/"+e):B.setDescription(e)},f=function(t,e){$.addFavorite(t,e)},p=function(t){$.removeFavorites(t)};o&&void 0!==(null===(t=o.type)||void 0===t?void 0:t.key)&&r&&(console.log(Object(g.h)(null===(j=o.type)||void 0===j?void 0:j.key)),"/type/work"===o.type.key&&function(t){return"/type/work"===t.type.key}(o)?e=Object(w.jsx)(W,{removeFavorite:p,favorites:i,onFavorites:f,page:r,info:o,changePage:b}):"/type/author"===o.type.key&&function(t){return"/type/author"===t.type.key}(o)&&(e=Object(w.jsx)(Z,{removeFavorite:p,favorites:i,onFavorites:f,page:r,info:o,changePage:b})));return Object(w.jsxs)("div",{className:z.a.container,children:[Object(w.jsx)(K,{onSidebar:d,sidebar:l}),Object(w.jsxs)("main",{onClick:function(){return d(!1)},className:z.a.body,children:[Object(w.jsx)("div",{onClick:function(t){return t.stopPropagation()},className:h()(z.a.sidebar,[l&&z.a.active]),children:Object(w.jsx)(C,{category:v,favoritesList:i,onData:function(t){B.changeDataList(t)}})}),Object(w.jsxs)("div",{className:z.a.content,children:[window.innerWidth>=761&&Object(w.jsx)(Q,{category:v,favorites:i,page:r,data:a,changePage:b}),void 0===(null===r||void 0===r?void 0:r.type)&&window.innerWidth<=760?Object(w.jsx)(Q,{category:v,favorites:i,page:r,data:a,changePage:b}):null,e]})]})]})})),et=function(){return Object(w.jsx)("div",{className:"App",style:{height:"100vh"},children:Object(w.jsx)(tt,{})})};r.a.render(Object(w.jsx)(et,{}),document.getElementById("root"))},6:function(t,e,a){t.exports={card:"BookCard_card__1Nw7k",active:"BookCard_active__2V8Kr",avatarBox:"BookCard_avatarBox__37uWM",avatar:"BookCard_avatar__RB3qE",defaultAvatar:"BookCard_defaultAvatar__eZb0E",textBox:"BookCard_textBox__4qRdX",mainText:"BookCard_mainText__3KojC",secondaryTextBox:"BookCard_secondaryTextBox__1Tvye",secondaryText:"BookCard_secondaryText__3qSpD",buttonCard:"BookCard_buttonCard__2Ab7T"}},7:function(t,e,a){t.exports={container:"Favorites_container__BSD2I",favorites:"Favorites_favorites__2XS6j",title:"Favorites_title__2c2c7",category__item:"Favorites_category__item__29XJ8",active:"Favorites_active__2-hHI"}}},[[59,1,2]]]);
//# sourceMappingURL=main.cae19459.chunk.js.map