(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{79055:function(e,t,r){Promise.resolve().then(r.bind(r,50603)),Promise.resolve().then(r.bind(r,13724)),Promise.resolve().then(r.bind(r,41010)),Promise.resolve().then(r.bind(r,50090)),Promise.resolve().then(r.bind(r,79802)),Promise.resolve().then(r.bind(r,15934)),Promise.resolve().then(r.bind(r,30563)),Promise.resolve().then(r.bind(r,8750)),Promise.resolve().then(r.bind(r,11763)),Promise.resolve().then(r.bind(r,65286)),Promise.resolve().then(r.bind(r,13591)),Promise.resolve().then(r.bind(r,16166)),Promise.resolve().then(r.bind(r,89253)),Promise.resolve().then(r.bind(r,34994)),Promise.resolve().then(r.bind(r,77541)),Promise.resolve().then(r.bind(r,38369)),Promise.resolve().then(r.bind(r,93920)),Promise.resolve().then(r.bind(r,42213)),Promise.resolve().then(r.bind(r,3427)),Promise.resolve().then(r.bind(r,80667)),Promise.resolve().then(r.bind(r,58593)),Promise.resolve().then(r.bind(r,21429)),Promise.resolve().then(r.bind(r,99481)),Promise.resolve().then(r.bind(r,47563)),Promise.resolve().then(r.bind(r,93192)),Promise.resolve().then(r.bind(r,49772)),Promise.resolve().then(r.bind(r,64493)),Promise.resolve().then(r.bind(r,30594)),Promise.resolve().then(r.bind(r,63944)),Promise.resolve().then(r.bind(r,39708)),Promise.resolve().then(r.bind(r,38553)),Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,26538))},26538:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(57437),i=r(18785),s=r(62177),a=r(20703),o=r(12165),d=r(8792);function l(e){let{item:t}=e;return(0,n.jsxs)(d.default,{onClick:()=>o.Z.setLocalStorage("currentNFT",t),href:{pathname:"/detail/"},className:"w-[250px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in",children:[(0,n.jsx)(a.default,{src:t.img,width:250,height:250,alt:"Picture of the author"}),(0,n.jsxs)("div",{className:"px-2 py-4 relative pt-12",children:[(0,n.jsxs)("div",{className:"w-[90%] text-sm rounded-2xl text-[#fff] flex flex-col items-center font-bold py-1 px-4 bg-[#f87171] overflow-hidden absolute z-1 -top-8 left-[5%]",children:[(0,n.jsxs)("div",{className:"w-full flex items-center overflow-hidden",children:[(0,n.jsx)(s.lFK,{className:"mr-2"}),(0,n.jsx)("span",{children:t.deadline})]}),(0,n.jsxs)("div",{className:"w-full flex items-center overflow-hidden",children:[(0,n.jsx)("span",{className:"mr-2",children:"bid:"}),(0,n.jsx)("span",{children:t.currentBid})]}),(0,n.jsxs)("div",{className:"w-full flex items-center overflow-hidden",children:[(0,n.jsx)("span",{className:"mr-2",children:"bidder:"}),(0,n.jsx)("span",{className:"flex-1 truncate",children:t.currentBidder})]})]}),(0,n.jsx)("p",{className:"font-bold text-lg mb-1",children:t.name}),(0,n.jsxs)("div",{className:"text-xs",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("p",{children:"起拍价："}),(0,n.jsx)("p",{children:t.price})]}),(0,n.jsxs)("div",{className:"flex mt-0.5",children:[(0,n.jsx)("p",{children:"类型："}),(0,n.jsx)("p",{children:t.tags.join(" \xb7 ")})]})]})]})]})}var c=r(33181),u=r(2265),m=e=>{let{url:t,query:r}=e,{data:n,loading:i,error:s,postData:a}=(0,c.q)(t);return(0,u.useEffect)(()=>{(async()=>{try{a({query:r})}catch(e){console.error(e)}finally{console.log("finally")}})()},[]),{data:n,loading:i,error:s}},f=r(55641);function p(){let{data:e,loading:t,error:r}=m({url:"https://api.studio.thegraph.com/query/76625/auctionclub0/version/latest",query:"\n    {\n      auctionCancelleds {\n        id\n        auctionId\n        blockNumber\n        blockTimestamp\n      }\n      highestBidIncreaseds{\n        id\n        bidder\n        amount\n        transactionHash\n      }\n      auctionCreateds{\n        id\n        auctionId\n        seller\n        startingPrice\n        _startTime\n        transactionHash\n      }\n    }\n    "}),{nfts:a,loading:o,error:d}=(0,f.yh)("0xcef6df73404baeccdaa5986615233b0e7e442e2d"),[c,p]=(0,u.useState)([]),[h,x]=(0,u.useState)(!0),[g,b]=(0,u.useState)(null);if((0,u.useEffect)(()=>{if(console.log(g,"dddd"),!t&&!o&&e&&a)try{let t=a.map(t=>{let r=null==e?void 0:e.data.auctionCreateds.find(e=>e.auctionId===t.tokenId);return{tokenId:parseInt(t.tokenId.toString(),10),contractAddress:t.contractAddress,img:t.img,price:r?r.startingPrice:t.price,tags:t.tags,currentBid:"N/A",currentBidder:"N/A",deadline:r?new Date(1e3*r._startTime).toISOString():t.deadline,name:t.name,description:t.description,isOwner:t.isOwner}});p(t)}catch(e){b(e.message)}finally{x(!1)}},[t,o,e,a]),t||o||h)return(0,n.jsx)("p",{children:"Loading..."});if(r||d||g)return(0,n.jsxs)("p",{children:["Error:",r||d||g]});console.log(c,a,e,g,"``````````````````````````");let v=c.length?c:[{tokenId:1,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:2,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x8888888111122222233444444",deadline:"2024-01-01 00:00:00"},{tokenId:3,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["英式拍卖","pleasure","狂热"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:7,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"10ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:4,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"0.5ETH",tags:["荷兰拍卖","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:5,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"6ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:6,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"}];return(0,n.jsx)("div",{className:"my-20 flex place-content-center relative",children:(0,n.jsxs)("div",{className:"md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10",children:[(0,n.jsxs)("div",{className:"flex justify-between font-bold text-lg",children:[(0,n.jsx)("div",{children:"Market"}),(0,n.jsxs)("div",{className:"flex items-center cursor-pointer",children:["more",(0,n.jsx)(s.XCv,{className:"w-5 h-5"})]})]}),(0,n.jsx)(i.xr,{size:"3",radius:"full",type:"always",scrollbars:"horizontal",children:(0,n.jsx)("div",{className:"flex justify-between mb-5 mt-5",children:v.map((e,t)=>(0,n.jsx)(l,{item:e},t))})})]})})}},55641:function(e,t,r){"use strict";r.d(t,{hj:function(){return o},yh:function(){return d}});var n=r(2265),i=r(33181),s=r(39296);let a=async e=>(0,i.r)(e),o=e=>{let[t,r]=(0,n.useState)([]),[o,d]=(0,n.useState)(!0),[l,c]=(0,n.useState)(null),u=(0,s.m)();return(0,n.useEffect)(()=>{let t=e===(null==u?void 0:u.address);console.log("isOwner:",t),(async()=>{try{let n=(await (0,i.r)("https://testnets-api.opensea.io/api/v2/chain/sepolia/account/".concat(e.toString(),"/nfts"))).nfts.map(async e=>{if(!e.metadata_url)return{tokenId:e.identifier,contractAddress:e.contract,img:"",price:"N/A",tags:[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:"Unknown",description:"No description available",isOwner:t};let r=await a(e.metadata_url);return{tokenId:e.identifier,contractAddress:e.contract,img:r.image||"",price:"N/A",tags:r.attributes?r.attributes.map(e=>"".concat(e.trait_type||"N/A",":").concat(e.value||"N/A")):[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:r.name||"Unknown",description:r.description||"No description available",isOwner:t}}),s=await Promise.all(n);r(s)}catch(e){c(e.message)}finally{d(!1)}})()},[e]),{nfts:t,loading:o,error:l}},d=e=>{let[t,r]=(0,n.useState)([]),[o,d]=(0,n.useState)(!0),[l,c]=(0,n.useState)(null),u=(0,s.m)();return(0,n.useEffect)(()=>{let t=e===(null==u?void 0:u.address);console.log("isOwner:",t),(async()=>{try{let n=(await (0,i.r)("https://testnets-api.opensea.io/api/v2/chain/sepolia/contract/".concat(e.toString(),"/nfts"))).nfts.map(async e=>{if(!e.metadata_url)return{tokenId:e.identifier,contractAddress:e.contract,img:"",price:"N/A",tags:[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:"Unknown",description:"No description available",isOwner:t};let r=await a(e.metadata_url);return{tokenId:e.identifier,contractAddress:e.contract,img:r.image||"",price:"N/A",tags:r.attributes?r.attributes.map(e=>"".concat(e.trait_type||"N/A",":").concat(e.value||"N/A")):[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:r.name||"Unknown",description:r.description||"No description available",isOwner:t}}),s=await Promise.all(n);r(s)}catch(e){c(e.message)}finally{d(!1)}})()},[e]),{nfts:t,loading:o,error:l}}},33181:function(e,t,r){"use strict";r.d(t,{q:function(){return s},r:function(){return i}});var n=r(2265);let i=async e=>{let t=await fetch(e);if(!t.ok)throw Error("Failed to fetch: ".concat(t.statusText));return t.json()},s=e=>{let[t,r]=(0,n.useState)(null),[i,s]=(0,n.useState)(!1),[a,o]=(0,n.useState)(null);return{data:t,loading:i,error:a,postData:async t=>{s(!0),o(null);try{let n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw Error("Error: ".concat(n.status));let i=await n.json();r(i)}catch(e){o(e.message)}finally{s(!1)}}}}},12165:function(e,t){"use strict";class r{static setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}static getLocalStorage(e){{let t=localStorage.getItem(e);return t?JSON.parse(t):null}}static removeLocalStorage(e){localStorage.removeItem(e)}static setSessionStorage(e,t){sessionStorage.setItem(e,JSON.stringify(t))}static getSessionStorage(e){{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null}}static removeSessionStorage(e){sessionStorage.removeItem(e)}static setCookie(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;{let n=new Date;n.setTime(n.getTime()+864e5*r);let i="expires=".concat(n.toUTCString());document.cookie="".concat(e,"=").concat(t,"; ").concat(i,"; path=/")}}static getCookie(e){{let t="".concat(e,"="),r=document.cookie.split(";");for(let e=0;e<r.length;e++){let n=r[e];for(;" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}}static deleteCookie(e){document.cookie="".concat(e,"=; Max-Age=-99999999;")}}t.Z=r},41010:function(e,t,r){"use strict";r.r(t),r.d(t,{AspectRatio:function(){return a}});var n=r(14749),i=r(2265),s=r(29586);let a=(0,i.forwardRef)((e,t)=>{let{ratio:r=1,style:a,...o}=e;return(0,i.createElement)("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/r}%`},"data-radix-aspect-ratio-wrapper":""},(0,i.createElement)(s.WV.div,(0,n.Z)({},o,{ref:t,style:{...a,position:"absolute",top:0,right:0,bottom:0,left:0}})))})},34994:function(e,t,r){"use strict";r.r(t),r.d(t,{Portal:function(){return n.h}});var n=r(37881)},38553:function(e,t,r){"use strict";r.r(t),r.d(t,{VisuallyHidden:function(){return n.T}});var n=r(11780)}},function(e){e.O(0,[8310,643,8268,6819,2971,8069,1744],function(){return e(e.s=79055)}),_N_E=e.O()}]);