import{s as $,n as f,c as x}from"../chunks/scheduler.kAlY8CUs.js";import{S,i as j,e as u,t as h,s as q,c as d,a as v,b as g,d as l,f as y,g as m,h as b,j as E}from"../chunks/index.ekL1LAoL.js";import{p as C}from"../chunks/stores.laTWaXrc.js";function H(p){let a,s=p[0].status+"",r,o,n,i=p[0].error?.message+"",c;return{c(){a=u("h1"),r=h(s),o=q(),n=u("p"),c=h(i)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(l),o=y(e),n=d(e,"P",{});var _=v(n);c=g(_,i),_.forEach(l)},m(e,t){m(e,a,t),b(a,r),m(e,o,t),m(e,n,t),b(n,c)},p(e,[t]){t&1&&s!==(s=e[0].status+"")&&E(r,s),t&1&&i!==(i=e[0].error?.message+"")&&E(c,i)},i:f,o:f,d(e){e&&(l(a),l(o),l(n))}}}function P(p,a,s){let r;return x(p,C,o=>s(0,r=o)),[r]}class A extends S{constructor(a){super(),j(this,a,P,H,$,{})}}export{A as component};
