(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9XZr":function(e,t,a){"use strict";var n=a("XKFU"),l=a("Lgjv"),r=a("ol8x"),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);n(n.P+n.F*c,"String",{padStart:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=(a("7VC1"),function(e){var t=e.id,a=e.exclusive,r=e.checked,c=e.className,o=e.onChange,s=Object(n.useRef)(null),u=a?{type:"radio",open:"(",close:")"}:{type:"checkbox",open:"[",close:"]"},i=u.type,m=u.open,f=u.close,d=function(e){var t;e.preventDefault(),null===(t=s.current)||void 0===t||t.focus()};return l.a.createElement("span",{className:c},l.a.createElement("span",{className:"cursor-pointer",onClick:o,onMouseDown:d},m),l.a.createElement("input",{ref:s,id:t,type:i,checked:r,className:"focus:bg-white focus:text-black focus:font-bold focus:outline-none",onChange:o}),l.a.createElement("span",{className:"cursor-pointer",onClick:o,onMouseDown:d},f))}),c=function(e,t){return t?e+" "+t:e},o=function(e){var t=e.value,a=e.className,n=void 0===a?"":a,r=e.disabled,o=e.onChange,s=function(){o(t+1)},u=function(){o(t?t-1:0)};return l.a.createElement("span",{className:c("flex",n)},l.a.createElement("input",{type:"text",value:t,inputMode:"numeric",className:"min-w-0 flex-grow",disabled:r,onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey||e.key.length>1||/^\d$/.test(e.key)))switch(e.preventDefault(),e.key){case"+":return void s();case"-":u()}},onWheel:function(e){r||(e.preventDefault(),e.stopPropagation(),e.deltaY>0?u():s())},onChange:function(e){if(/^\d*$|^0x[\dA-Fa-f]+$/.test(e.target.value)){var t=parseInt(e.target.value);t>=0?o(t):e.target.value.length||o(0)}}}),l.a.createElement("div",null,l.a.createElement("button",{className:"block up-arrow-white focus:up-arrow-black focus:bg-white focus:outline-none leading-half w-4 h-2",disabled:r,onClick:s}),l.a.createElement("button",{className:"block down-arrow-white focus:down-arrow-black focus:bg-white focus:outline-none leading-half w-4 h-2",disabled:r,onClick:u})))},s=a("Gd3o"),u=function(e){return e.value.length<3?e.value:(e.selectionStart||0)>2?e.value.slice(e.value.length-2,e.value.length):e.value.slice(0,2)},i=function(e){var t=e.className,a=void 0===t?"":t,i=e.onChange,m=Object(n.useState)("moo!"),f=m[0],d=m[1],p=Object(n.useState)("default"),g=p[0],h=p[1],b=Object(n.useState)("say"),E=b[0],v=b[1],w=Object(n.useState)(),N=w[0],y=w[1],k=Object(n.useState)("oo"),x=k[0],C=k[1],S=Object(n.useState)(""),j=S[0],O=S[1],M=Object(n.useState)(30),T=M[0],D=M[1],$=Object(n.useState)(!1),A=$[0],I=$[1];return Object(n.useEffect)((function(){var e={cow:g,eyes:"small"!==g||x.length?x.padEnd(2):"..",tongue:j.padEnd(2),wrap:!A&&T};i("say"===E?Object(s.b)(f,e):Object(s.c)(f,e))})),l.a.createElement("div",{className:c("flex flex-col p-2",a)},l.a.createElement("div",{className:"grid row-gap-2 col-gap-4 grid-cols-12 leading-none mb-2"},l.a.createElement("fieldset",{className:"col-span-5"},l.a.createElement("legend",null,"Cow"),l.a.createElement("select",{value:g,className:"w-full arrows-white focus:arrows-black focus:bg-white focus:text-black focus:outline-none focus:no-focusring",onChange:function(e){h(e.target.value)}},s.a)),l.a.createElement("fieldset",{className:"col-span-7"},l.a.createElement("legend",null,"Action"),l.a.createElement("div",{className:"grid gap-1 grid-cols-7"},l.a.createElement("div",{className:"col-span-3"},l.a.createElement(r,{id:"say",exclusive:!0,checked:"say"===E,onChange:function(){v("say")}}),l.a.createElement("label",{htmlFor:"say",className:"cursor-pointer"},"Say")),l.a.createElement("div",{className:"col-span-4"},l.a.createElement(r,{id:"think",exclusive:!0,checked:"think"===E,onChange:function(){v("think")}}),l.a.createElement("label",{htmlFor:"think",className:"cursor-pointer"},"Think")))),l.a.createElement("fieldset",{className:"col-span-5"},l.a.createElement("legend",null,"Mode"),l.a.createElement("select",{value:N,className:"w-full arrows-white focus:arrows-black focus:bg-white focus:text-black focus:outline-none focus:no-focusring",onChange:function(e){var t=Object(s.d)(e.target.value),a=t.eyes,n=t.tongue;C(a),O(n),y(e.target.value)}},s.f)),l.a.createElement("fieldset",{className:"col-span-3"},l.a.createElement("legend",null,"Eyes"),l.a.createElement("input",{type:"text",value:x,autoCapitalize:"off",spellCheck:!1,className:"outline-none w-full",onChange:function(e){var t=u(e.target),a=Object(s.e)({eyes:t,tongue:j});C(t),y(a)}})),l.a.createElement("fieldset",{className:"col-span-4"},l.a.createElement("legend",null,"Tongue"),l.a.createElement("input",{type:"text",value:j,autoCapitalize:"off",spellCheck:!1,className:"outline-none w-full",onChange:function(e){var t=u(e.target),a=Object(s.e)({eyes:x,tongue:t});O(t),y(a)}})),l.a.createElement("fieldset",{className:"col-span-12"},l.a.createElement("legend",null,"Wrap column"),l.a.createElement("div",{className:"grid gap-4 grid-cols-12"},l.a.createElement("div",{className:"col-span-5 pr-2"},l.a.createElement(o,{value:T,disabled:A,onChange:D})),l.a.createElement("div",{className:"col-span-7 pl-2"},l.a.createElement(r,{id:"nowrap",checked:A,onChange:function(){I(!A)}}),l.a.createElement("label",{htmlFor:"nowrap",className:"cursor-pointer"},"No wrap"))))),l.a.createElement("fieldset",{className:"md:flex-grow"},l.a.createElement("legend",null,"Message"),l.a.createElement("textarea",{value:f,autoCapitalize:"off",spellCheck:!1,className:"bg-black outline-none w-full h-full min-h-2 resize-y md:min-h-full md:resize-none",onChange:function(e){d(e.target.value)}})))},m=(a("f3/d"),a("a1Th"),a("Btvt"),a("XfO3"),a("HEwt"),a("rGqo"),a("rE2o"),a("ioFf"),a("9XZr"),a("SRfc"),a("pIFo"),a("7V9T"));function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var p=[],g=0,h={x:NaN,y:NaN},b=function(e){e.preventDefault(),e.stopPropagation()},E=function(e){h.x=e.clientX,h.y=e.clientY},v=function(e){var t=e.className,a=e.children,r=Object(n.useRef)(null),o=Object(n.useState)(!1),s=o[0],u=o[1],i=Object(n.useState)([]),d=i[0],v=i[1];return Object(n.useEffect)((function(){var e;null===(e=document)||void 0===e||e.execCommand("defaultParagraphSeparator",void 0,"br"),r.current&&(r.current.innerHTML="help<br><br>",r.current.dispatchEvent(new InputEvent("input",{bubbles:!0})))}),[]),l.a.createElement("div",{className:c("flex flex-col max-w-full px-px",t)},a,l.a.createElement("pre",{className:"block whitespace-pre-wrap break-all flex-grow",onPaste:b,onMouseDown:E,onMouseUp:function(e){var t;h.x===e.clientX&&h.y===e.clientY&&(e.preventDefault(),e.stopPropagation(),null===(t=r.current)||void 0===t||t.focus())}},d,l.a.createElement(m.a,{root:s,dir:"moo"}),l.a.createElement("span",{ref:r,autoCapitalize:"off",spellCheck:!1,contentEditable:!0,suppressContentEditableWarning:!0,className:"outline-none",onKeyDown:function(e){switch(e.keyCode){case 38:g>p.length&&(g=p.length);var t=g;do{g--}while(g>=0&&p[g].root!==s);g<0&&(g=t);break;case 40:g<-1&&(g=-1);do{g++}while(g<p.length&&p[g].root!==s);break;default:return}e.preventDefault(),e.stopPropagation();var a=g>=0&&g<p.length;e.currentTarget.innerHTML=(a?p[g].command:"")+"<br>"},onInput:function(e){if(/(?:\n|<br>).+$/.test(e.currentTarget.innerHTML)){var t=e.currentTarget.innerHTML.replace(/(?:\n|<br>)/g,"");if(t.trim()&&(p.push({command:t,root:s}),g=p.length),/^\s*(?:sudo\s+)*clear(?:\s+.*)?$/.test(t))return v([]),void(e.currentTarget.innerHTML="<br>");var a=d.length,n=[l.a.createElement(m.a,{key:a,root:s,dir:"moo",output:t})],r=null;if(r=t.match(/^\s*(?:sudo\s+)*echo(\s+.+)?$/))r[1]&&n.push(l.a.createElement("span",{key:a+1},r[1].trim(),"\n"));else if(/^(?:sudo\s+)*exit(?:\s+.*)?$/.test(t))u(!1),s&&n.push(l.a.createElement("span",{key:a+1},"exit","\n"));else if(/^(?:sudo\s+)*help(?:\s+.*)?$/.test(t))n.push(l.a.createElement("span",{key:a+1,className:"break-normal"},"Moo! Developed by Erick Rincones.","\n","Special thanks to Aury Rincones.","\n","Licensed under the ",l.a.createElement("a",{href:"https://github.com/erincones/moo/blob/master/LICENSE",className:"underline"},"MIT license"),".","\n","\n","These shell commands are defined internally. Type `help' to see this list.","\n","\n",l.a.createElement("ul",{className:"cols-2 gap-0 max-w-content"},l.a.createElement("li",{className:"truncate"},"clear"),l.a.createElement("li",{className:"truncate"},"echo [STRING]"),l.a.createElement("li",{className:"truncate"},"help"),l.a.createElement("li",{className:"truncate"},"history [-c]"),l.a.createElement("li",{className:"truncate"},"ls"),l.a.createElement("li",{className:"truncate"},"sudo [COMMAND]"))));else if(r=t.match(/^\s*(?:sudo\s+)*history(\s+-c)?(?:\s+.+)?$/))if(r[1])p.splice.apply(p,[0,p.length].concat(f(p.filter((function(e){return e.root!==s})))));else{var c,o=p.filter((function(e){return e.root===s})).map((function(e,t,a){var n=e.command;return 0===t&&(c=String(a.length).length),"  "+String(t+1).padStart(c)+"  "+n}));o.push(""),n.push(l.a.createElement("span",{key:a+1},o.join("\n")))}else/^\s*(?:sudo\s+)*ls(?:\s+.*)?$/.test(t)?n.push(l.a.createElement("span",{key:a+1},l.a.createElement("span",{className:"font-bold text-blue-light"},"."),"  ",l.a.createElement("span",{className:"font-bold text-blue-light"},".."),"\n")):/^\s*(sudo\s+)+su(?:\s+.*)?$/.test(t)?u(!0):(r=t.match(/^\s*(?:sudo\s+)*((?!sudo\b)\S+)(?:\s+.*)?$/))&&n.push(l.a.createElement("span",{key:a+1},"moo!: ",r[1],": command not found","\n"));v([].concat(f(d),n)),e.currentTarget.innerHTML="<br>"}}},l.a.createElement("br",null))))},w=a("mXc6"),N={x:NaN,y:NaN},y=function(e){N.x=e.clientX,N.y=e.clientY},k=function(e){if(N.x===e.clientX&&N.y===e.clientY&&window.getSelection){e.preventDefault(),e.stopPropagation();var t=window.getSelection(),a=document.createRange();a.selectNodeContents(e.currentTarget),null==t||t.removeAllRanges(),null==t||t.addRange(a)}};t.default=function(){var e=Object(n.useState)(""),t=e[0],a=e[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null),l.a.createElement("div",{className:"scrolling-touch grid grid-flow-row md:grid-flow-col md:grid-cols-12 md:h-screen"},l.a.createElement(i,{className:"md:col-start-8 md:col-span-5 md:h-full",onChange:function(e){return a(e)}}),l.a.createElement(v,{className:"cursor-text md:col-start-1 md:col-span-7"},l.a.createElement("pre",{className:"overflow-x-auto",onMouseDown:y,onMouseUp:k},t))))}}}]);