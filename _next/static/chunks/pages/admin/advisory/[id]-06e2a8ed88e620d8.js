(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9776],{2053:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/advisory/[id]",function(){return t(9193)}])},7081:function(e,a,t){"use strict";var l=t(5893);t(7294);let s=e=>{let{children:a,className:t,gradient:s,...n}=e;return(0,l.jsx)("button",{className:"".concat(s||"grad-to-right","  ").concat(t||""),...n,children:a})};a.Z=s},6270:function(e,a,t){"use strict";var l=t(5893),s=t(918),n=t(7294),i=t(6650),r=t(7403),o=t(7632),c=t(1974);let d=e=>{let{height:a,className:t,editorRef:d}=e,[u,m]=(0,n.useState)(!1),[p,h]=(0,n.useState)(null),b=(0,o.Z)(),g=(e,a)=>{h(0),m(!0);let t=(0,i.iH)(r.Z,"images/".concat(b)),l=(0,i.B0)(t,e.blob());return l.on("state_changed",e=>{let a=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+a+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},e=>(m(!1),console.log("error",e),e),async()=>{m(!1);let e=await (0,i.Jt)(l.snapshot.ref);return console.log("File available only at at",e),e}),new Promise((e,a)=>{})};return(0,l.jsxs)(l.Fragment,{children:[u&&(0,l.jsx)(c.Z,{modalOpen:!0}),(0,l.jsx)(s.M,{apiKey:"lfp1sibdc44a0qoqpita2999rwr01nnq7abmtwh1pnhb8boe",onInit:(e,a)=>d.current=a,initialValue:"",init:{images_upload_handler:g,height:a||300,menubar:"file edit view format tools table help",plugins:["advlist","autolink","lists","link","image","charmap","preview","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","code","help","wordcount","print","paste","importcss","autosave","save","directionality","visualchars","template","codesample","hr","pagebreak","nonbreaking","toc","imagetools","textpattern","noneditable","charmap","quickbars","emoticons"],toolbar:"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}})]})};a.Z=d},7403:function(e,a,t){"use strict";var l=t(3977),s=t(6650);let n=(0,l.ZF)({apiKey:"AIzaSyA_RWmWVRuQC-785kQ40sEdwNnz6Yb6sBM",authDomain:"brilliant-brains-7e04f.firebaseapp.com",projectId:"brilliant-brains-7e04f",storageBucket:"brilliant-brains-7e04f.appspot.com",messagingSenderId:"838066145252",appId:"1:838066145252:web:503b26af450ef5b3dd69f1"}),i=(0,s.cF)(n);a.Z=i},1926:function(e,a,t){"use strict";var l=t(7294),s=t(6650),n=t(7403),i=t(7632);let r=()=>{let[e,a]=(0,l.useState)(null),[t,r]=(0,l.useState)(!1),[o,c]=(0,l.useState)(null),[d,u]=(0,l.useState)(null),m=(0,i.Z)(),p=e=>{a(null),c(0),r(!0);let t=(0,s.iH)(n.Z,"images/".concat(m)),l=(0,s.B0)(t,e);l.on("state_changed",e=>{let a=e.bytesTransferred/e.totalBytes*100;switch(c(a),console.log("Upload is "+a+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},e=>{a(null==e?void 0:e.message),r(!1),console.log("error",e)},()=>{a(null),c(100),r(!1),(0,s.Jt)(l.snapshot.ref).then(e=>{console.log("File available at",e),u(e)})})};return{url:d,uploadImage:p,error:e,progress:o,setError:a,loading:t,setUrl:u}};a.Z=r},9193:function(e,a,t){"use strict";t.r(a);var l=t(5893),s=t(7294),n=t(9008),i=t.n(n),r=t(8705),o=t(2396),c=t(7081),d=t(1163),u=t(3029),m=t(2920),p=t(1974),h=t(1926),b=t(6270),g=t(5675),x=t.n(g);let f={email:"",name:"",image:"",number:"",title:"",description:""},v=()=>{let[e,a]=(0,s.useState)(!1),[t,n]=(0,s.useReducer)((e,a)=>"reset"===a.type?f:"update"===a.type&&"string"!=typeof a.data?{...e,...a.data}:{...e,[a.type]:a.payload},f),{url:o,setUrl:g,uploadImage:v,error:y,progress:j,setError:k,loading:N}=(0,h.Z)(),w=(0,d.useRouter)(),{id:Z}=w.query,_=(0,s.useRef)(null),{loading:C,error:E,data:S,post:B}=(0,u.Z)({api:"/advisory/".concat(Z),method:"PATCH",onSuccess:()=>{var e;(0,m.Am)("Advisory Board Member Added"),n({type:"reset"}),null===(e=_.current)||void 0===e||e.setContent(""),g(""),w.push("/admin/advisory")}}),F=e=>{var a;e.preventDefault(),B({...t,description:null===(a=_.current)||void 0===a?void 0:a.getContent()})};(0,s.useEffect)(()=>{o&&n({type:"image",payload:o})},[o]);let q=(0,s.useCallback)(async()=>{try{var e;a(!0);let t=await fetch("/api/advisory/".concat(Z)),l=await t.json();if(!t.ok)throw Error(l.message);n({type:"update",data:l}),null===(e=_.current)||void 0===e||e.setContent(l.description)}catch(e){console.log({error:e})}a(!1)},[Z]);return(0,s.useEffect)(()=>{q()},[Z,q]),(0,l.jsxs)(r.Z,{children:[(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:"Brilliant Brains"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("link",{rel:"icon",href:"/faviconimg.png"})]}),(C||e||N)&&(0,l.jsx)(p.Z,{modalOpen:!0}),(0,l.jsxs)("div",{className:"p-4 py-12 sm:px-12 h-full overflow-y-auto",children:[(0,l.jsxs)("div",{className:"flex items-center gap-4 justify-between mb-16",children:[(0,l.jsx)("h1",{className:"text-3xl text-black/70 font-argentinum",children:"Edit Board Member"}),(0,l.jsx)(c.Z,{onClick:()=>w.push("/admin/advisory"),className:"text-white px-4 sm:px-6 py-2 rounded-xl text-sm",children:"View Advisory"})]}),(0,l.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:F,children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("label",{htmlFor:"name",className:"text-black/70",children:"Name"}),(0,l.jsx)("input",{required:!0,onChange:e=>n({type:"name",payload:e.target.value}),value:null==t?void 0:t.name,type:"text",name:"name",id:"name",className:"border border-black/20 rounded-md p-2"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("label",{htmlFor:"email",className:"text-black/70",children:"Email"}),(0,l.jsx)("input",{required:!0,onChange:e=>n({type:"email",payload:e.target.value}),value:null==t?void 0:t.email,type:"email",name:"email",id:"email",className:"border border-black/20 rounded-md p-2"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("label",{htmlFor:"number",className:"text-black/70",children:"Phone"}),(0,l.jsx)("input",{required:!0,onChange:e=>n({type:"number",payload:e.target.value}),value:null==t?void 0:t.number,type:"tel",name:"number",id:"number",className:"border border-black/20 rounded-md p-2"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("label",{htmlFor:"title",className:"text-black/70",children:"Title"}),(0,l.jsx)("input",{required:!0,onChange:e=>n({type:"title",payload:e.target.value}),value:null==t?void 0:t.title,type:"text",name:"title",id:"title",className:"border border-black/20 rounded-md p-2"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("label",{htmlFor:"description",className:"text-black/70",children:"Description"}),(0,l.jsx)(b.Z,{editorRef:_})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("span",{className:"text-black/70",children:"Upload Image"}),(null==t?void 0:t.image)&&(0,l.jsx)(x(),{width:100,height:100,src:null==t?void 0:t.image,alt:"",className:"h-24 w-24 bg-gray-100 object-cover z-10 relative"}),(0,l.jsx)("input",{type:"file",name:"image",id:"image",className:"",onChange:e=>v(e.target.files[0])})]}),(0,l.jsx)("div",{className:"flex items-center gap-4 mt-8",children:(0,l.jsx)(c.Z,{type:"submit",className:"text-white px-4 sm:px-6 py-2 rounded-xl text-sm",children:"Update advisory"})})]})]})]})};a.default=(0,o.Z)(v)}},function(e){e.O(0,[1228,3874,5445,4617,4980,8907,5937,4090,6865,1100,918,4730,9774,2888,179],function(){return e(e.s=2053)}),_N_E=e.O()}]);