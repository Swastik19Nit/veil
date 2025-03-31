"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5876],{45618:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/analytics/rate-limits","title":"Rate Limits API Specification","description":"Overview","source":"@site/docs/api/analytics/rate-limits.md","sourceDirName":"api/analytics","slug":"/api/analytics/rate-limits","permalink":"/veil/docs/api/analytics/rate-limits","draft":false,"unlisted":false,"editUrl":"https://github.com/try-veil/veil/tree/main/docs/docs/api/analytics/rate-limits.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Usage Analytics API Specification","permalink":"/veil/docs/api/analytics/usage"},"next":{"title":"Introduction","permalink":"/veil/docs/swagger/veil-api-management"}}');var s=i(23420),r=i(54942);const a={},l="Rate Limits API Specification",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Get Rate Limit Status",id:"get-rate-limit-status",level:3},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Success Response (200 OK)",id:"success-response-200-ok",level:4},{value:"Update Rate Limits",id:"update-rate-limits",level:3},{value:"Request Body",id:"request-body",level:4},{value:"Success Response (200 OK)",id:"success-response-200-ok-1",level:4},{value:"Get Rate Limit History",id:"get-rate-limit-history",level:3},{value:"Query Parameters",id:"query-parameters-1",level:4},{value:"Success Response (200 OK)",id:"success-response-200-ok-2",level:4},{value:"Notes",id:"notes",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"rate-limits-api-specification",children:"Rate Limits API Specification"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The rate limits endpoints allow users to view and configure API usage limits and throttling settings."}),"\n",(0,s.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsx)(n.h3,{id:"get-rate-limit-status",children:"Get Rate Limit Status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET /v1/analytics/rate-limits/status\n"})}),"\n",(0,s.jsx)(n.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apiId: string      // Filter by API (optional)\nwindow: string     // Time window (minute, hour, day, month)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"success-response-200-ok",children:"Success Response (200 OK)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "status": "success",\n  "timestamp": "string", // ISO 8601 datetime\n  "limits": [\n    {\n      "apiId": "string",\n      "endpoint": "string",\n      "window": "string",\n      "limit": number,\n      "current": {\n        "used": number,\n        "remaining": number,\n        "resetAt": "string" // ISO 8601 datetime\n      },\n      "throttling": {\n        "status": "normal" | "warning" | "critical",\n        "currentRate": number, // Requests per second\n        "maxRate": number\n      }\n    }\n  ],\n  "quotaStatus": {\n    "monthly": {\n      "limit": number,\n      "used": number,\n      "remaining": number,\n      "resetDate": "string" // ISO 8601 datetime\n    },\n    "daily": {\n      "limit": number,\n      "used": number,\n      "remaining": number,\n      "resetTime": "string" // ISO 8601 datetime\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"update-rate-limits",children:"Update Rate Limits"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PATCH /v1/analytics/rate-limits/config\n"})}),"\n",(0,s.jsx)(n.h4,{id:"request-body",children:"Request Body"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "apiId": "string",\n  "limits": {\n    "perSecond": number, // Requests per second\n    "perMinute": number,\n    "perHour": number,\n    "perDay": number,\n    "perMonth": number\n  },\n  "throttling": {\n    "enabled": boolean,\n    "softLimit": number, // Percentage of limit for warnings\n    "hardLimit": number, // Percentage for blocking\n    "burstSize": number // Maximum burst size\n  },\n  "quotas": {\n    "monthly": {\n      "limit": number,\n      "notifyAt": number[] // Percentage thresholds for notifications\n    },\n    "daily": {\n      "limit": number,\n      "notifyAt": number[]\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"success-response-200-ok-1",children:"Success Response (200 OK)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "status": "success",\n  "message": "Rate limits updated",\n  "config": {\n    "apiId": "string",\n    "effectiveFrom": "string", // ISO 8601 datetime\n    "limits": {\n      "perSecond": number,\n      "perMinute": number,\n      "perHour": number,\n      "perDay": number,\n      "perMonth": number\n    },\n    "throttling": {\n      "enabled": boolean,\n      "softLimit": number,\n      "hardLimit": number,\n      "burstSize": number\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"get-rate-limit-history",children:"Get Rate Limit History"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET /v1/analytics/rate-limits/history\n"})}),"\n",(0,s.jsx)(n.h4,{id:"query-parameters-1",children:"Query Parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apiId: string      // Filter by API (required)\nfrom: string       // Start date (ISO 8601)\nto: string        // End date (ISO 8601)\nwindow: string     // Aggregation window (hour, day)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"success-response-200-ok-2",children:"Success Response (200 OK)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "status": "success",\n  "history": [\n    {\n      "timestamp": "string", // ISO 8601 datetime\n      "requestRate": number,\n      "limitUtilization": number, // Percentage\n      "throttledRequests": number,\n      "blockedRequests": number,\n      "quotaUtilization": {\n        "daily": number,\n        "monthly": number\n      }\n    }\n  ],\n  "summary": {\n    "averageUtilization": number,\n    "peakUtilization": number,\n    "throttlingEvents": number,\n    "blockingEvents": number\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Rate limits are enforced in real-time"}),"\n",(0,s.jsx)(n.li,{children:"Burst allowance provides flexibility for traffic spikes"}),"\n",(0,s.jsx)(n.li,{children:"Soft limits trigger warnings but allow requests"}),"\n",(0,s.jsx)(n.li,{children:"Hard limits result in request blocking"}),"\n",(0,s.jsx)(n.li,{children:"Historical data retained for 90 days"}),"\n",(0,s.jsx)(n.li,{children:"Rate limit changes take effect immediately"}),"\n",(0,s.jsx)(n.li,{children:"Default limits based on subscription plan"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},54942:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(36672);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);