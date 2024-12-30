"use strict";(self.webpackChunktranslate_freebun_ai_docs=self.webpackChunktranslate_freebun_ai_docs||[]).push([[5668],{6346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Fast-AI-JSON-Translator/features","title":"Features","description":"Why not use a better tool to translate JSON files?","source":"@site/docs/Fast-AI-JSON-Translator/features.md","sourceDirName":"Fast-AI-JSON-Translator","slug":"/Fast-AI-JSON-Translator/features","permalink":"/docs/Fast-AI-JSON-Translator/features","draft":false,"unlisted":false,"editUrl":"https://github.com/freebun-ai/website/edit/main/docs/Fast-AI-JSON-Translator/features.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"Welcome","permalink":"/docs/intro"},"next":{"title":"Getting Started","permalink":"/docs/Fast-AI-JSON-Translator/getting-started"}}');var r=t(4848),a=t(8453);const i={sidebar_position:0},o="Features",l={},d=[{value:"Key Features",id:"key-features",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"features",children:"Features"})}),"\n",(0,r.jsx)(n.p,{children:"Why not use a better tool to translate JSON files?"}),"\n",(0,r.jsx)(n.p,{children:"The Fast AI JSON Translator API translates JSON objects between languages using AI, leveraging models like OpenAI's GPT-4, Google's Gemini, Anthropic's Claude, and Deepseek.\nIt's designed for efficiency, remembering previous translations to minimize processing time and cost."}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AI-Powered Translation:"})," Employs advanced AI models (OpenAI, Google, Anthropic, Deepseek) for high-quality translations. The user can select their preferred model."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Supported Languages"})," All languages from ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes",children:"ISO 639-1"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Memory/Caching:"})," Stores translated key-value pairs based on ",(0,r.jsx)(n.code,{children:"documentId"})," and ",(0,r.jsx)(n.code,{children:"appId"}),", translating only new or changed content in subsequent requests. This significantly reduces processing overhead for updated documents."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Array order changed detection:"})," Detects if a position of an element in an array was changed and will not translate the moved objects again. This will reduce the speed of the translation and not translate items that are already translated. (Only if a cached translation exists)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Customizable Settings:"})," Offers granular control over translation parameters, including:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"locale"}),(0,r.jsx)(n.strong,{children:":"})," Target languages (ISO 639 codes). Can be set per JSON object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"excludedFieldsRegex"}),(0,r.jsx)(n.strong,{children:":"})," Regular expression defining fields to exclude from translation. Defaults to a pattern excluding common technical fields (IDs, UUIDs, etc.)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"translationType"}),(0,r.jsx)(n.strong,{children:":"})," Specifies the translation style (LITERAL_TRANSLATION, STANDARD_TRANSLATION, CULTURAL_ADAPTATION, CREATIVE_INTERPRETATION, FREEFORM_TRANSLATION). Defaults to ",(0,r.jsx)(n.code,{children:"STANDARD_TRANSLATION"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"contextPrompt"}),(0,r.jsx)(n.strong,{children:":"})," Provides additional context to the AI model, influencing the translation's tone and style"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reset"}),(0,r.jsx)(n.strong,{children:":"})," Forces a full translation of a document, even if a cached version exists. Useful for significant content changes."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);