(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1432],{1625:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/scholarships/add",function(){return t(1069)}])},7081:function(e,a,t){"use strict";var s=t(5893);t(7294);let l=e=>{let{children:a,className:t,gradient:l,...n}=e;return(0,s.jsx)("button",{className:"".concat(l||"grad-to-right","  ").concat(t||""),...n,children:a})};a.Z=l},7403:function(e,a,t){"use strict";var s=t(3977),l=t(6650);let n=(0,s.ZF)({apiKey:"AIzaSyA_RWmWVRuQC-785kQ40sEdwNnz6Yb6sBM",authDomain:"brilliant-brains-7e04f.firebaseapp.com",projectId:"brilliant-brains-7e04f",storageBucket:"brilliant-brains-7e04f.appspot.com",messagingSenderId:"838066145252",appId:"1:838066145252:web:503b26af450ef5b3dd69f1"}),r=(0,l.cF)(n);a.Z=r},1926:function(e,a,t){"use strict";var s=t(7294),l=t(6650),n=t(7403),r=t(7632);let i=()=>{let[e,a]=(0,s.useState)(null),[t,i]=(0,s.useState)(!1),[d,c]=(0,s.useState)(null),[o,u]=(0,s.useState)(null),m=(0,r.Z)(),p=e=>{a(null),c(0),i(!0);let t=(0,l.iH)(n.Z,"images/".concat(m)),s=(0,l.B0)(t,e);s.on("state_changed",e=>{let a=e.bytesTransferred/e.totalBytes*100;switch(c(a),console.log("Upload is "+a+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},e=>{a(null==e?void 0:e.message),i(!1),console.log("error",e)},()=>{a(null),c(100),i(!1),(0,l.Jt)(s.snapshot.ref).then(e=>{console.log("File available at",e),u(e)})})};return{url:o,uploadImage:p,error:e,progress:d,setError:a,loading:t,setUrl:u}};a.Z=i},1069:function(e,a,t){"use strict";t.r(a);var s=t(5893),l=t(7294),n=t(9008),r=t.n(n),i=t(8705),d=t(2396),c=t(7081),o=t(1163),u=t(3029),m=t(2920),p=t(1974),x=t(1926);let h={name:"",start:"",end:"",category:"",requirements:""},b=()=>{let[e,a]=(0,l.useReducer)((e,a)=>"reset"===a.type?h:{...e,[a.type]:a.payload},h),{url:t,uploadImage:n,error:d,progress:b,setError:g,loading:f}=(0,x.Z)();(0,l.useRef)(null);let y=(0,o.useRouter)(),{loading:j,error:v,data:N,post:k}=(0,u.Z)({api:"/scholarships",onSuccess:()=>{(0,m.Am)("Scholarship Added"),a({type:"reset"}),y.push("/admin/scholarships")}}),w=a=>{a.preventDefault(),k(e)};return(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Brilliant Brains"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/faviconimg.png"})]}),(j||f)&&(0,s.jsx)(p.Z,{modalOpen:!0}),(0,s.jsxs)("div",{className:"p-4 py-12 sm:px-12 h-full overflow-y-auto",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 justify-between mb-16",children:[(0,s.jsx)("h1",{className:"text-3xl text-black/70 font-argentinum",children:"Add scholarships"}),(0,s.jsx)(c.Z,{onClick:()=>y.push("/admin/scholarships"),className:"text-white px-4 sm:px-6 py-2 rounded-xl text-sm",children:"View scholarships"})]}),(0,s.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:w,children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"name",className:"text-black/70",children:"Name"}),(0,s.jsx)("input",{required:!0,onChange:e=>a({type:"name",payload:e.target.value}),value:null==e?void 0:e.name,type:"text",name:"name",id:"name",className:"border border-black/20 rounded-md p-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"category",className:"text-black/70",children:"Category"}),(0,s.jsx)("input",{required:!0,onChange:e=>a({type:"category",payload:e.target.value}),value:null==e?void 0:e.category,type:"text",name:"category",id:"category",className:"border border-black/20 rounded-md p-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"start",className:"text-black/70",children:"Start"}),(0,s.jsx)("input",{maxLength:120,required:!0,onChange:e=>a({type:"start",payload:e.target.value}),value:null==e?void 0:e.start,type:"date",name:"start",id:"start",className:"border border-black/20 rounded-md p-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"end",className:"text-black/70",children:"End"}),(0,s.jsx)("input",{maxLength:120,required:!0,onChange:e=>a({type:"end",payload:e.target.value}),value:null==e?void 0:e.end,type:"date",name:"end",id:"end",className:"border border-black/20 rounded-md p-2"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"content",className:"text-black/70",children:"Requirements"}),(0,s.jsx)("textarea",{minLength:200,maxLength:450,rows:3,required:!0,onChange:e=>a({type:"requirements",payload:e.target.value}),value:null==e?void 0:e.requirements,name:"requirements",id:"requirements",className:"border border-black/20 rounded-md p-2"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4 mt-8",children:[(0,s.jsx)(c.Z,{type:"submit",className:"text-white px-4 sm:px-6 py-2 rounded-md text-sm",children:"Submit"}),(0,s.jsx)("button",{onClick:()=>a({type:"reset"}),className:"text-black/60 px-4 sm:px-6 py-2 rounded-xl text-sm",children:"Clear"})]})]})]})]})};a.default=(0,d.Z)(b)}},function(e){e.O(0,[1228,3874,5445,4617,4980,8907,5937,4090,6865,1100,4730,9774,2888,179],function(){return e(e.s=1625)}),_N_E=e.O()}]);