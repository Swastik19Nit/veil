"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8908],{11753:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/analytics/usage","title":"Usage Analytics API Specification","description":"Overview","source":"@site/docs/api/analytics/usage.md","sourceDirName":"api/analytics","slug":"/api/analytics/usage","permalink":"/veil/docs/api/analytics/usage","draft":false,"unlisted":false,"editUrl":"https://github.com/try-veil/veil/tree/main/docs/docs/api/analytics/usage.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Subscription Management Specification","permalink":"/veil/docs/api/consumer/subscriptions"},"next":{"title":"Rate Limits API Specification","permalink":"/veil/docs/api/analytics/rate-limits"}}');var r=s(23420),i=s(54942);const a={},l="Usage Analytics API Specification",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Get Usage Summary",id:"get-usage-summary",level:3},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Success Response (200 OK)",id:"success-response-200-ok",level:4},{value:"Get Detailed Usage",id:"get-detailed-usage",level:3},{value:"Query Parameters",id:"query-parameters-1",level:4},{value:"Success Response (200 OK)",id:"success-response-200-ok-1",level:4},{value:"Get Usage Trends",id:"get-usage-trends",level:3},{value:"Query Parameters",id:"query-parameters-2",level:4},{value:"Success Response (200 OK)",id:"success-response-200-ok-2",level:4},{value:"Notes",id:"notes",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"usage-analytics-api-specification",children:"Usage Analytics API Specification"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The usage analytics endpoints provide detailed API consumption metrics and usage patterns."}),"\n",(0,r.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,r.jsx)(n.h3,{id:"get-usage-summary",children:"Get Usage Summary"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /v1/analytics/usage/summary\n"})}),"\n",(0,r.jsx)(n.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apiId: string      // Filter by API (optional)\nperiod: string     // Time period (day, week, month, year)\nfrom: string       // Start date (ISO 8601)\nto: string        // End date (ISO 8601)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"success-response-200-ok",children:"Success Response (200 OK)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "status": "success",\n  "period": {\n    "from": "string", // ISO 8601 datetime\n    "to": "string", // ISO 8601 datetime\n    "duration": "string" // e.g., "30 days"\n  },\n  "summary": {\n    "totalRequests": number,\n    "successfulRequests": number,\n    "failedRequests": number,\n    "averageLatency": number, // in milliseconds\n    "p95Latency": number, // 95th percentile latency\n    "dataTransferred": number, // in bytes\n    "uniqueIPs": number\n  },\n  "byEndpoint": [\n    {\n      "path": "string",\n      "method": "string",\n      "requests": number,\n      "errors": number,\n      "averageLatency": number\n    }\n  ],\n  "byStatus": {\n    "2xx": number,\n    "3xx": number,\n    "4xx": number,\n    "5xx": number\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"get-detailed-usage",children:"Get Detailed Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /v1/analytics/usage/details\n"})}),"\n",(0,r.jsx)(n.h4,{id:"query-parameters-1",children:"Query Parameters"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apiId: string      // Filter by API (required)\nendpoint: string   // Filter by endpoint (optional)\nstatus: string     // Filter by status code (optional)\nlimit: number      // Number of records (default: 100)\noffset: number     // Pagination offset\n"})}),"\n",(0,r.jsx)(n.h4,{id:"success-response-200-ok-1",children:"Success Response (200 OK)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "status": "success",\n  "requests": [\n    {\n      "timestamp": "string", // ISO 8601 datetime\n      "endpoint": "string",\n      "method": "string",\n      "statusCode": number,\n      "latency": number,\n      "ipAddress": "string",\n      "userAgent": "string",\n      "errorDetails": {\n        "code": "string",\n        "message": "string"\n      }\n    }\n  ],\n  "pagination": {\n    "total": number,\n    "limit": number,\n    "offset": number\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"get-usage-trends",children:"Get Usage Trends"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /v1/analytics/usage/trends\n"})}),"\n",(0,r.jsx)(n.h4,{id:"query-parameters-2",children:"Query Parameters"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apiId: string      // Filter by API (optional)\nmetric: string     // Metric to analyze (requests, latency, errors)\ninterval: string   // Time interval (hour, day, week, month)\nfrom: string       // Start date (ISO 8601)\nto: string        // End date (ISO 8601)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"success-response-200-ok-2",children:"Success Response (200 OK)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "status": "success",\n  "metric": "string",\n  "interval": "string",\n  "trends": [\n    {\n      "timestamp": "string", // ISO 8601 datetime\n      "value": number,\n      "change": number, // Percentage change from previous interval\n      "trend": "up" | "down" | "stable"\n    }\n  ],\n  "analysis": {\n    "peak": {\n      "timestamp": "string",\n      "value": number\n    },\n    "average": number,\n    "trend": "string", // Overall trend description\n    "predictions": {\n      "nextInterval": number,\n      "confidence": number\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"All timestamps are in UTC"}),"\n",(0,r.jsx)(n.li,{children:"Maximum date range is 1 year"}),"\n",(0,r.jsx)(n.li,{children:"Real-time data has 60-second delay"}),"\n",(0,r.jsx)(n.li,{children:"Historical data retained for 1 year"}),"\n",(0,r.jsx)(n.li,{children:"Rate limits apply to analytics APIs"}),"\n",(0,r.jsx)(n.li,{children:"Trend analysis requires minimum 7 days data"}),"\n",(0,r.jsx)(n.li,{children:"Export functionality available for large datasets"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},54942:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(36672);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);