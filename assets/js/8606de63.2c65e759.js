"use strict";(self.webpackChunkdam=self.webpackChunkdam||[]).push([[679],{5008:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"tech/HTTP/content-security-policy","title":"\ucee8\ud150\uce20 \ubcf4\uc548 \uc815\ucc45 (CSP)","description":"Content Security Policy","source":"@site/docs/tech/HTTP/content-security-policy.md","sourceDirName":"tech/HTTP","slug":"/tech/HTTP/content-security-policy","permalink":"/dam.github.io/docs/tech/HTTP/content-security-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/j23h0728/dam.github.io/docs/tech/HTTP/content-security-policy.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"techGroup","previous":{"title":"HTTP","permalink":"/dam.github.io/docs/category/http"}}');var c=s(4848),i=s(8453);const r={sidebar_position:1},t="\ucee8\ud150\uce20 \ubcf4\uc548 \uc815\ucc45 (CSP)",d={},h=[{value:"Content Security Policy",id:"content-security-policy",level:2},{value:"Threats(\uc704\ud611)",id:"threats\uc704\ud611",level:2},{value:"<strong>1. \ud06c\ub85c\uc2a4 \uc0ac\uc774\ud2b8 \uc2a4\ud06c\ub9ac\ud305(XSS) \uc644\ud654</strong>",id:"1-\ud06c\ub85c\uc2a4-\uc0ac\uc774\ud2b8-\uc2a4\ud06c\ub9ac\ud305xss-\uc644\ud654",level:3},{value:"<strong>2. \ud328\ud0b7 \uc2a4\ub2c8\ud551 \uacf5\uaca9 \uc644\ud654</strong>",id:"2-\ud328\ud0b7-\uc2a4\ub2c8\ud551-\uacf5\uaca9-\uc644\ud654",level:3},{value:"CSP \uc0ac\uc6a9\ud558\uae30",id:"csp-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\uc815\ucc45 \uc9c0\uc815\ud558\uae30",id:"\uc815\ucc45-\uc9c0\uc815\ud558\uae30",level:3},{value:"\uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc0ac\ub840",id:"\uc77c\ubc18\uc801\uc778-\uc0ac\uc6a9-\uc0ac\ub840",level:3},{value:"\uc815\ucc45 \ud14c\uc2a4\ud2b8\ud558\uae30",id:"\uc815\ucc45-\ud14c\uc2a4\ud2b8\ud558\uae30",level:2},{value:"\ubcf4\uace0 \ud65c\uc131\ud654",id:"\ubcf4\uace0-\ud65c\uc131\ud654",level:2},{value:"\uc704\ubc18 \ubcf4\uace0\uc11c \uc608\uc2dc",id:"\uc704\ubc18-\ubcf4\uace0\uc11c-\uc608\uc2dc",level:2}];function x(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\ucee8\ud150\uce20-\ubcf4\uc548-\uc815\ucc45-csp",children:"\ucee8\ud150\uce20 \ubcf4\uc548 \uc815\ucc45 (CSP)"})}),"\n",(0,c.jsx)(e.h2,{id:"content-security-policy",children:"Content Security Policy"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\ud06c\ub85c\uc2a4 \uc0ac\uc774\ud2b8 \uc2a4\ud06c\ub9bd\ud305(XSS)\uacfc \ub370\uc774\ud130 \uc8fc\uc785 \uacf5\uaca9\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud55c ",(0,c.jsx)(e.strong,{children:"\ucd94\uac00 \ubcf4\uc548 \uacc4\uce35"})]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\ud06c\ub85c\uc2a4 \uc0ac\uc774\ud2b8 \uc2a4\ud06c\ub9bd\ud305(XSS)"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc6f9 \uc11c\ubc84 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc785\ub825\uac12 \uac80\uc99d\uc774 \ubbf8\ud761\ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \ucde8\uc57d\uc810","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\ube0c\ub77c\uc6b0\uc800\uac00 \uc11c\ubc84\uc5d0\uc11c \ubc1b\uc740 \ucf58\ud150\uce20\ub97c \uc2e0\ub8b0\ud55c\ub2e4\ub294 \uc810\uc744 \uc545\uc6a9\ud55c \uac83"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.li,{children:"\uc6f9 \uc0ac\uc774\ud2b8 \uad00\ub9ac\uc790\uac00 \uc544\ub2cc \uc774\uac00 \uc6f9 \ud398\uc774\uc9c0\uc5d0 \uc545\uc131 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0bd\uc785\ud558\ub294 \uac83"}),"\n",(0,c.jsxs)(e.li,{children:["\uac00\uc7a5 \ubc1c\uc0dd\ud558\uae30 \uc26c\uc6b4 \uc2dc\ub098\ub9ac\uc624","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uac8c\uc2dc\ud310 \ub4f1 \uc0ac\uc6a9\uc790 \uc785\ub825 \ucf58\ud150\uce20\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\ud55c \ub0b4\uc6a9\uc744 \uc544\ubb34\ub7f0 \ud544\ud130\ub9c1 \uc5c6\uc774 \uacf5\uac1c\ud558\ub294 \uac83","\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\ud14d\uc2a4\ud2b8 \uc0c1\uc790\uc5d0 \uc545\uc758\uc801\uc778 \uc2a4\ud06c\ub9bd\ud2b8 \uc0bd\uc785 \ud6c4 \ub370\uc774\ud130 \uc785\ub825"}),"\n",(0,c.jsx)(e.li,{children:"\uc6f9 \uc11c\ube44\uc2a4 \ucabd \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc785\ub825\ub41c \uac12\uc744 \uc804\ud600 \ud655\uc778 \ud558\uc9c0 \uc54a\uc740\ucc44 HTML \uc5d0 \ub123\uc5b4 \ubc14\ub85c \ucd9c\ub825"}),"\n",(0,c.jsx)(e.li,{children:"\uc545\uc758\uc801\uc778 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc0bd\uc785\ub41c \ucc44\ub85c \uac8c\uc2dc \ub418\uc5b4 \ucf58\ud150\uce20\ub97c \ubcf4\ub294 \uc0ac\ub78c\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uadf8\ub300\ub85c \uc2e4\ud589"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\uacf5\uaca9 \uc720\ud615 : \ub370\uc774\ud130 \uc808\ub3c4, \uc0ac\uc774\ud2b8 \ud6fc\uc190, \ub9ec \uc6e8\uc5b4 \ubc30\ud3ec \ub4f1"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\uc6f9 \uc11c\ubc84\ub294 HTTP \ud5e4\ub354\uc5d0 ",(0,c.jsx)(e.strong,{children:"Content-Security-Policy"})," \ud5e4\ub354\ub97c \ud3ec\ud568\uc2dc\ucf1c, \ube0c\ub77c\uc6b0\uc800\uac00 \ud2b9\uc815 \ub9ac\uc18c\uc2a4\ub9cc \ub85c\ub4dc\ud558\ub3c4\ub85d \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:"Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com;\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\uc774\ub807\uac8c \uc124\uc815\ud558\uba74 \uc545\uc131 \uc2a4\ud06c\ub9bd\ud2b8\ub098 \ub9ac\uc18c\uc2a4\uac00 \ub85c\ub4dc\ub418\uc9c0 \uc54a\ub3c4\ub85d \ubc29\uc9c0\ud558\uc5ec, ",(0,c.jsx)(e.strong,{children:"XSS"})," \ub4f1\uc758 \uacf5\uaca9\uc744 \ucc28\ub2e8\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"<meta>"})," \uc694\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc815\ucc45\uc744 \uad6c\uc131\ud560 \uc218\ub3c4 \uc788\ub2e4."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:"<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; img-src https://*; child-src 'none';\" />\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.admonition,{type:"info",children:(0,c.jsx)(e.p,{children:"CSP \uc704\ubc18 \ubcf4\uace0\uc11c \uc804\uc1a1\uacfc \uac19\uc740 \uc77c\ubd80 \uae30\ub2a5\uc740 HTTP \ud5e4\ub354\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."})}),"\n",(0,c.jsxs)(e.h2,{id:"threats\uc704\ud611",children:[(0,c.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#threats",children:"Threats"}),"(\uc704\ud611)"]}),"\n",(0,c.jsx)(e.h3,{id:"1-\ud06c\ub85c\uc2a4-\uc0ac\uc774\ud2b8-\uc2a4\ud06c\ub9ac\ud305xss-\uc644\ud654",children:(0,c.jsx)(e.strong,{children:"1. \ud06c\ub85c\uc2a4 \uc0ac\uc774\ud2b8 \uc2a4\ud06c\ub9ac\ud305(XSS) \uc644\ud654"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"CSP \uc8fc\uc694 \ubaa9\ud45c : XSS \uacf5\uaca9\uc744 \uc644\ud654\ud558\uace0 \ubcf4\uace0\ud558\ub294 \uac83"}),"\n",(0,c.jsxs)(e.li,{children:["\uc11c\ubc84 \uad00\ub9ac\uc790\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud55c \uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc720\ud6a8\ud55c \uc18c\uc2a4\ub85c \uac04\uc8fc\ud574\uc57c\ud558\ub294 \ucd9c\ucc98(\ub3c4\uba54\uc778)\uc744 \uc9c0\uc815\ud558\uc5ec XSS \uacf5\uaca9\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\ub2e4.","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["CSP \ud638\ud658 \ube0c\ub77c\uc6b0\uc800\ub294 \ud5c8\uc6a9\ud55c \ub3c4\uba54\uc778\uc5d0\uc11c \ubc1b\uc740 \uc18c\uc2a4 \ud30c\uc77c\uc5d0\uc11c \ub85c\ub4dc\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub9cc \uc2e4\ud589","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'self'\n example.com *.example.com\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["HTML \uc18d\uc131\uc744 \ud3ec\ud568\ud55c \uc778\ub77c\uc778 \uc2a4\ud06c\ub9bd\ud2b8 \ubc0f \uc774\ubca4\ud2b8 \ucc98\ub9ac \ub4f1\uc758 \ub2e4\ub978 \ubaa8\ub4e0 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubb34\uc2dc","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'self';\n\tscript-src 'self'; style-src 'self';\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"default-src 'self'"}),": \ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\ub97c \ub3d9\uc77c\ud55c \ucd9c\ucc98\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ud55c\ub2e4."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"script-src 'self'"}),": \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ub3d9\uc77c\ud55c \ucd9c\ucc98\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ub418\uba70, \uc778\ub77c\uc778 \uc2a4\ud06c\ub9bd\ud2b8\ub098 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \ucc28\ub2e8\ub41c\ub2e4."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"'unsafe-inline'"}),"\uc744 \uba85\uc2dc\ud558\uc9c0 \uc54a\uc73c\uba74 \uc778\ub77c\uc778 \uc2a4\ud06c\ub9bd\ud2b8\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ucc28\ub2e8"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"2-\ud328\ud0b7-\uc2a4\ub2c8\ud551-\uacf5\uaca9-\uc644\ud654",children:(0,c.jsx)(e.strong,{children:"2. \ud328\ud0b7 \uc2a4\ub2c8\ud551 \uacf5\uaca9 \uc644\ud654"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\ud328\ud0b7 \uc2a4\ub2c8\ud551(Packet Sniffing)"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \uc804\uc1a1\ub418\ub294 \ub370\uc774\ud130\ub97c \ub3c4\uccad\ud558\uac70\ub098 \uac00\ub85c\ucc44\ub294 \ud589\uc704"}),"\n",(0,c.jsxs)(e.li,{children:["\uacf5\uaca9\uc790\ub294 \ub124\ud2b8\uc6cc\ud06c \uc0c1\uc5d0\uc11c \uc624\uac00\ub294 \ud328\ud0b7(\ub370\uc774\ud130)\uc744 \uac10\uc2dc\ud558\uace0, \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790 \uc774\ub984, \ube44\ubc00\ubc88\ud638, \ucfe0\ud0a4, \uc138\uc158 \uc815\ubcf4\uc640 \uac19\uc740 ",(0,c.jsx)(e.strong,{children:"\ubbfc\uac10\ud55c \ub370\uc774\ud130\ub97c \ud6d4\uce60 \uc218 \uc788\ub2e4"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,c.jsx)(e.strong,{children:"\ub9ac\uc18c\uc2a4\uc758 \ucd9c\ucc98"}),"\ub97c \uc81c\ud55c\ud558\uc9c0\ub9cc,\n",(0,c.jsx)(e.strong,{children:"HTTPS"})," \uac19\uc740 \uc548\uc804\ud55c \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\ub2e4."]}),"\n",(0,c.jsxs)(e.li,{children:["\uc608\uc2dc ) \ubaa8\ub4e0 \ucf58\ud150\uce20\uac00 HTTPS\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\ub4dc\ub418\ub3c4\ub85d \uc9c0\uc815 \uac00\ub2a5","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src https:;\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"HSTS (HTTP Strict Transport Security)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\ubaa8\ub4e0 \ucfe0\ud0a4\uc5d0 secure \uc18d\uc131\uc744 \ud45c\uc2dc\ud558\uace0 HTTP \ud398\uc774\uc9c0\ub294 \ud574\ub2f9 HTTPS \ud398\uc774\uc9c0\ub85c \uc790\ub3d9 \ub9ac\ub514\ub809\uc158\uc744 \uc81c\uacf5\ud55c\ub2e4."}),"\n",(0,c.jsxs)(e.li,{children:["HTTP \ud5e4\ub354 Strict-Transport-Security\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube0c\ub77c\uc6b0\uc800\uac00 \uc554\ud638\ud654\ub41c \ucc44\ub110\uc744 \ud1b5\ud574\uc11c\ub9cc \uc0ac\uc774\ud2b8\uc5d0 \uc5f0\uacb0\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\ub2e4.","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Strict-Transport-Security: max-age=31536000; includeSubDomains\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"csp-\uc0ac\uc6a9\ud558\uae30",children:"CSP \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,c.jsx)(e.p,{children:"HTTP \ud5e4\ub354\uc5d0 Content-Security-Policy\ub97c \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ucd94\uac00\ud558\uace0 \uc0ac\uc6a9\uc790 \uc5d0\uc774\uc804\ud2b8\uac00 \ud574\ub2f9 \ud398\uc774\uc9c0\uc5d0 \ub300\ud574 \ub85c\ub4dc\ud560 \uc218 \uc788\ub294 \ub9ac\uc18c\uc2a4\ub97c \uc81c\uc5b4\ud558\ub294 \uac12\uc744 \uc9c0\uc815"}),"\n",(0,c.jsx)(e.p,{children:"content-Security-Plicy\ub85c \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130 \uc18d\uc131"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\ud0a4\uc6cc\ub4dc / \ub370\uc774\ud130 \uc18d\uc131"}),(0,c.jsx)(e.th,{children:"\uc124\uba85"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"none"}),(0,c.jsx)(e.td,{children:"\ub85c\ub4dc\ub97c \uae08\uc9c0\ud55c\ub2e4."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"self"}),(0,c.jsx)(e.td,{children:"\uac19\uc740 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud55c\ub2e4."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"unsafe-inline"}),(0,c.jsxs)(e.td,{children:["\uc2a4\ud06c\ub9bd\ud2b8 \ubc0f \uc778\ub77c\uc778\uc758 ",(0,c.jsx)(e.code,{children:"<script>"}),"\ud0dc\uadf8, ",(0,c.jsx)("br",{})," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 : \ud45c\uae30, \uc778\ub77c\uc778\uc758 ",(0,c.jsx)(e.code,{children:"<style>"}),"\uc744 \ud5c8\uac00\ud55c\ub2e4.",(0,c.jsx)("br",{})," - XSS\uc758 \uc704\ud5d8 \uc874\uc7ac"]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"unsafe-eval"}),(0,c.jsxs)(e.td,{children:["\ubb38\uc790\uc5f4\uc744 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c\uc11c \uc2e4\ud589\ud558\ub294 ",(0,c.jsx)(e.code,{children:"eval()"}),", ",(0,c.jsx)(e.code,{children:"new Function()"}),", ",(0,c.jsx)(e.code,{children:"setTimeout()"})," \ub4f1\uc758 \uc2e4\ud589\uc744 \ud5c8\uac00\ud55c\ub2e4. ",(0,c.jsx)("br",{})," - XSS\uc758 \uc704\ud5d8 \uc874\uc7ac"]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"data:"}),(0,c.jsx)(e.td,{children:"data URI\ub97c \ud5c8\uac00\ud55c\ub2e4."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"mediastream"}),(0,c.jsxs)(e.td,{children:["mediastream",":URI"," \ud5c8\uac00\ud55c\ub2e4."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"bolb:"}),(0,c.jsxs)(e.td,{children:["blob",":URI"," \ub97c \ud5c8\uac00\ud55c\ub2e4."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"filesystem:"}),(0,c.jsxs)(e.td,{children:["filesystem",":URI"," \ub97c \ud5c8\uac00\ud55c\ub2e4."]})]})]})]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"mediastream: \ub370\uc774\ud130 \uc18d\uc131 - HTML5 \uc2a4\ud2b8\ub9ac\ubc0d\uc5d0 \uc0ac\uc6a9"}),"\n",(0,c.jsxs)(e.li,{children:["data: \ub370\uc774\ud130 \uc18d\uc131 - BASE64\ub85c \uc778\ucf54\ub529 \ub41c \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc758 \ubb38\uc790\uc5f4\uc744 ",(0,c.jsx)(e.code,{children:"<image>"})," \ud0dc\uadf8\uc758 \uc18c\uc2a4\ub85c \uc124\uc815\ud558\uac70\ub098 CSS \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\ub97c \uc0bd\uc785\ud558\uc5ec \uc774\ubbf8\uc9c0\ub97c \ud45c\uc2dc\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\uc815\ucc45-\uc9c0\uc815\ud558\uae30",children:"\uc815\ucc45 \uc9c0\uc815\ud558\uae30"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"// HTTP \ud5e4\ub354\nContent-Security-Policy: policy\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["default-src","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"CSP \uad6c\ubb38\uc774 \uc815\uc758\ub418\uc9c0 \uc54a\uc558\uc744 \ub54c \uc774\ub97c \ub300\uccb4\ud558\ub294 \uc6a9\ub3c4"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\uc778\ub77c\uc778 \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589 \ubc29\uc9c0 \ubc0f ",(0,c.jsx)(e.code,{children:"eval()"})," \uc0ac\uc6a9 \ucc28\ub2e8 \ud558\ub824\uba74, default-src \ub610\ub294 script-src \uc9c0\uc2dc\ubb38 \ud3ec\ud568 \ud544\uc694"]}),"\n",(0,c.jsxs)(e.li,{children:["\uc778\ub77c\uc778 \uc2a4\ud0c0\uc77c\uc774 ",(0,c.jsx)(e.code,{children:"<style>"})," \uc694\uc18c \ub610\ub294 ",(0,c.jsx)(e.code,{children:"style"})," \uc18d\uc131\uc5d0 \uc801\uc6a9\ub418\ub294 \uac83\uc744 \uc81c\ud55c \ud558\ub824\uba74 default-src \ub610\ub294 style-src \uc9c0\uc2dc\ubb38 \ud3ec\ud568 \ud544\uc694"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\uc77c\ubc18\uc801\uc778-\uc0ac\uc6a9-\uc0ac\ub840",children:"\uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc0ac\ub840"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\uc608\uc81c 1)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\ubaa8\ub4e0 \ucf58\ud150\uce20\uac00 \uc0ac\uc774\ud2b8 \uc790\uccb4 \ucd9c\ucc98(\ud558\uc704 \ub3c4\uba54\uc778 \uc81c\uc678)\uc5d0\uc11c \uc624\uae30\ub97c \uc6d0\ud568","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'self'\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\uc608\uc81c"})," 2)","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub3c4\uba54\uc778 \ubc0f \ubaa8\ub4e0 \ud558\uc704 \ub3c4\uba54\uc778\uc758 \ucf58\ud150\uce20\ub97c \ud5c8\uc6a9","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["CSP \uac00 \uc124\uc815\ub41c \ub3c4\uba54\uc778\uacfc \ub3d9\uc77c\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4.","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\ud2b9\uc815 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub3c4\uba54\uc778"}),"\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \ub9ac\uc18c\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815 \uac00\ub2a5.\n\uc608\ub97c \ub4e4\uc5b4, example.com\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 CDN(Content Delivery Network)\uc774\ub098 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud5c8\uc6a9\ud558\ub294 \uac83."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'self'\n example.com *.example.com\n"})}),"\n"]}),"\n",(0,c.jsx)(e.li,{children:"\u2018self\u2019 : CSP\uac00 \uc124\uc815\ub41c \uc6f9\uc0ac\uc774\ud2b8\uc758 \ub3d9\uc77c \ucd9c\ucc98(same-origin)\uc5d0\uc11c \ub9ac\uc18c\uc2a4\ub97c \ub85c\ub4dc \uac00\ub2a5"}),"\n",(0,c.jsx)(e.li,{children:"\uc6f9 \ud398\uc774\uc9c0\uac00 \ud638\uc2a4\ud305\ub41c \uc11c\ubc84\ub85c\ubd80\ud130\ub9cc \uc2a4\ud06c\ub9bd\ud2b8, \uc774\ubbf8\uc9c0, \uc2a4\ud0c0\uc77c \uc2dc\ud2b8 \ub4f1\uc744 \ub85c\ub4dc\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\uc608\uc81c 3)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc790\uc2e0\uc758 \ucf58\ud150\uce20\uc5d0 \ubaa8\ub4e0 \uc6d0\ubcf8 \uc774\ubbf8\uc9c0\ub97c \ud3ec\ud568\ud560 \uc218 \uc788\uac8c \ud5c8\uc6a9\ud558\uc9c0\ub9cc,\n\uc624\ub514\uc624 \ub610\ub294 \ube44\ub514\uc624 \ubbf8\ub514\uc5b4\ub294 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \uacf5\uae09\uc790\ub85c \uc81c\ud55c\ud558\uace0\n\ubaa8\ub4e0 \uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \ud638\uc2a4\ud305\ud558\ub294 \ud2b9\uc815 \uc11c\ubc84\ub85c\ub9cc \uc81c\ud55c","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'self';\nimg-src *;\nmedia-src example.org example.net;\nscript-src userscripts.example.com\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\uc774\ubbf8\uc9c0\ub294 \ucd9c\ucc98\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub85c\ub4dc \uac00\ub2a5 (\u2019*\u2019: \uc640\uc77c\ub4dc \uce74\ub4dc)"}),"\n",(0,c.jsxs)(e.li,{children:["\ubbf8\ub514\uc5b4\ub294 example.org \ubc0f ",(0,c.jsx)(e.a,{href:"http://example.net",children:"example.net"})," \uc5d0\uc11c\ub9cc \ud5c8\uc6a9, \ud558\uc704 \ub3c4\uba54\uc778 \ube44\ud5c8\uc6a9"]}),"\n",(0,c.jsx)(e.li,{children:"userscripts.example.com \uc5d0\uc11c \uc628 \uc2a4\ud06c\ub9bd\ud2b8\ub9cc \uc2e4\ud589 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\uc608\uc81c 4)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc628\ub77c\uc778 \ubc45\ud0b9 \uc0ac\uc774\ud2b8\uc758 \uc6f9 \uc0ac\uc774\ud2b8 \uad00\ub9ac\uc790\ub294 \uacf5\uaca9\uc790\uac00 \uc694\uccad\uc744 \ub3c4\uccad\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574\n\ubaa8\ub4e0 \ucf58\ud150\uce20\uac00 TLS\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\ub4dc\ub418\uc5c8\ub294\uc9c0 \ud655\uc778","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src\nhttps://onlinebanking.example.com\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\uc608\uc81c 4)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc804\uc790 \uba54\uc77c\uc5d0 HTML\uc744 \ud5c8\uc6a9\ud558\uace0 \uc5b4\ub514\uc5d0\uc11c\ub098 \ub85c\ub4dc\ub41c \uc774\ubbf8\uc9c0 \ud5c8\uc6a9\nJavascript \ub610\ub294 \uae30\ud0c0 \uc7a0\uc7ac\uc801 \uc704\ud5d8\ud55c \ucf58\ud150\uce20\ub294 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\uc74c","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'self'\n*.example.com; img-src *\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"script-src\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 default-src \uc0ac\uc6a9\ud574\uc11c, \uc6d0\ubcf8 \uc11c\ubc84\uc5d0\uc11c\ub9cc \uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub4dc \uac00\ub2a5\ud558\uac8c \ud568"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\uc815\ucc45-\ud14c\uc2a4\ud2b8\ud558\uae30",children:"\uc815\ucc45 \ud14c\uc2a4\ud2b8\ud558\uae30"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Content-Security-Policy\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \uc2e4\uc2dc\ud558\ub294 \uac80\uc0ac","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc624\ub958\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucabd\uc5d0 \ud45c\uc2dc\ub41c\ub2e4.","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\ube0c\ub77c\uc6b0\uc800\uc758 \uac1c\ubc1c\uc790 \ub3c4\uad6c(console)\uc5d0\uc11c \ud655\uc778 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\uc11c\ubc84 \uac1c\ubc1c\uc790\uac00 \uadf8 \uc624\ub958\ub97c \ubc14\ub85c \ubcfc \uc218 \uc5c6\ub2e4.","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uadf8\ub7ec\ub098 \uc624\ub958 \ubcf4\uace0\uc11c\ub97c \ubcf4\ub0bc \uacf3\uc744 \uc9c0\uc815\ud574, \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc624\ub958 \uc815\ubcf4\ub97c \uc11c\ubc84\ub85c \ud1b5\uc9c0\ud560 \uc218 \uc788\ub2e4.","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"report-uri"}),"\ub098 ",(0,c.jsx)(e.strong,{children:"report-to"}),"\ub97c \uc0ac\uc6a9\ud574 \uc704\ubc18 \ubcf4\uace0\uc11c\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\ub2e4. \uc774\ub97c \uc704\ud55c \uc678\ubd80 \uc11c\ube44\uc2a4\ub3c4 \uc874\uc7ac\ud55c\ub2e4(\uc608: Report URI)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["CSP\ub294 ",(0,c.jsx)(e.strong,{children:"XSS \ub300\ucc45"}),"\uc73c\ub85c \ub9e4\uc6b0 \uac15\ub825\ud55c \uc218\ub2e8\uc774 \ub420 \uc218 \uc788\uc9c0\ub9cc, \ub108\ubb34 \uc5c4\uaca9\ud55c \uc124\uc815\uc740 \uc815\uc0c1\uc801\uc778 \uc6f9\uc0ac\uc774\ud2b8 \ub3d9\uc791\uc744 \ubc29\ud574\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"Content-Security-Policy-Report-Only"})," \ud5e4\ub354\ub97c \uc0ac\uc6a9\ud558\uba74 \uc815\ucc45 \uc704\ubc18 \uc0ac\ud56d\uc744 \ubcf4\uace0\ub9cc \ud558\uace0, \uc2e4\uc81c\ub85c \ucc28\ub2e8\ud558\uc9c0\ub294 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ubbf8\ub9ac \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4.","\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"Content-Security-Policy-Report-Only: policy\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc778\ub77c\uc778 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubaa8\ub450 \uc911\uc9c0\ud558\uba74, ",(0,c.jsx)(e.strong,{children:"Google Analytics"}),"\uc640 \uac19\uc740 \ub3c4\uad6c\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4. \uc774 \uacbd\uc6b0, \uc801\uc808\ud55c \uc124\uc815\uc744 \ud1b5\ud574 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc57c \ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\ubcf4\uace0-\ud65c\uc131\ud654",children:"\ubcf4\uace0 \ud65c\uc131\ud654"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\uc77c\ubc18\uc801\uc73c\ub85c \uc704\ubc18 \ubcf4\uace0\uc11c\ub294 \uc804\uc1a1\ub418\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,c.jsx)(e.li,{children:"\ubcf4\uace0\uc11c\ub97c \uc804\ub2ec\ubc1b\uc744 \ud558\ub098 \uc774\uc0c1\uc758 URI\ub97c report-to \uc815\ucc45 \uc9c0\uc2dc\ubb38\uc5d0 \uc9c0\uc815 \ud544\uc694"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'self';\nreport-to\nhttp://reportcollector.example.com/collector.cgi\n\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\uc11c\ubc84\uc5d0\uc11c \ubcf4\uace0\uc11c\ub97c \uc218\uc2e0\ud558\ub3c4\ub85d \uc124\uc815"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\uc704\ubc18-\ubcf4\uace0\uc11c-\uc608\uc2dc",children:"\uc704\ubc18 \ubcf4\uace0\uc11c \uc608\uc2dc"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"http://example.com/signup.html%EC%97%90",children:"http://example.com/signup.html\uc5d0"})," \uc788\ub294 \ud398\uc774\uc9c0"]}),"\n",(0,c.jsx)(e.li,{children:"cdn.example.com\uc758 \uc2a4\ud0c0\uc77c\uc2dc\ud2b8\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ud56d\ubaa9\uc740 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc124\uc815"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"Content-Security-Policy: default-src 'none';\nstyle-src cdn.example.com;\nreport-to /_/csp-reports\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:'<!doctype html>\n<html lang="en-US">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Sign Up</title>\n    <link rel="stylesheet" href="css/style.css" />\n  </head>\n  <body>\n    \uc5ec\uae30\uc5d0 \ucee8\ud150\uce20.\n  </body>\n</html>\n\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\ubb38\uc81c\uc810 :","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc2a4\ud0c0\uc77c\uc2dc\ud2b8\ub294\xa0",(0,c.jsx)(e.code,{children:"cdn.example.com"}),"\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ud560 \uc218 \uc788\uc9c0\ub9cc\n\uc6f9\uc0ac\uc774\ud2b8\ub294 \uc790\uccb4 \uc6d0\ubcf8(",(0,c.jsx)(e.code,{children:"http://example.com"}),")\uc5d0\uc11c \uc2a4\ud0c0\uc77c\uc2dc\ud2b8\ub97c \ub85c\ub4dc\ud558\ub824\uace0 \ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\uc704\ubc18\ubcf4\uace0\uc11c :","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["CSP\ub97c \uc801\uc6a9\ud560 \uc218 \uc788\ub294 \ube0c\ub77c\uc6b0\uc800\ub294 \ubb38\uc11c\ub97c \ubc29\ubb38\ud560 \ub54c \uc704\ubc18 \ubcf4\uace0\uc11c\ub97c\xa0",(0,c.jsx)(e.code,{children:"http://example.com/_/csp-reports"}),"\uc5d0 POST \uc694\uccad\uc73c\ub85c \ubcf4\ub0b8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "csp-report": {\n    "blocked-uri": "http://example.com/css/style.css", // \uc704\ubc18\uacbd\ub85c\n    "disposition": "report",\n    "document-uri": "http://example.com/signup.html",\n    "effective-directive": "style-src-elem",\n    "original-policy": "default-src \'none\'; style-src cdn.example.com; report-to /_/csp-reports",\n    "referrer": "",\n    "status-code": 200,\n    "violated-directive": "style-src-elem"\n  }\n}\n'})}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>t});var l=s(6540);const c={},i=l.createContext(c);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);