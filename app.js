(()=>{"use strict";function n(n){return t=this,e=void 0,o=function*(){const t=yield n.member("id"),e=yield n.board("id","memberships");console.log("currentMember: "+JSON.stringify(t)),console.log("board: "+JSON.stringify(e));const i=e.memberships.find((n=>n.idMember===t.id));return!!i&&"admin"===i.memberType},new((i=void 0)||(i=Promise))((function(n,r){function u(n){try{d(o.next(n))}catch(n){r(n)}}function c(n){try{d(o.throw(n))}catch(n){r(n)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(u,c)}d((o=o.apply(t,e||[])).next())}));var t,e,i,o}const t={hideVotes:!1,maxVotes:3};var e=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function u(n){try{d(i.next(n))}catch(n){r(n)}}function c(n){try{d(i.throw(n))}catch(n){r(n)}}function d(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,c)}d((i=i.apply(n,t||[])).next())}))};const i="votes";function o(n,t){return n.get(t||"card","shared",i,[])}function r(n){return e(this,void 0,void 0,(function*(){const t=yield o(n);if(!t)return!1;const e=yield n.member("id");return t.includes(e.id)}))}var u=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function u(n){try{d(i.next(n))}catch(n){r(n)}}function c(n){try{d(i.throw(n))}catch(n){r(n)}}function d(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,c)}d((i=i.apply(n,t||[])).next())}))};function c(n){return u(this,void 0,void 0,(function*(){return[{icon:"https://bvadala.github.io/images/thumbs_up.svg",text:(yield r(n))?"Vote      ☑":"Vote      ☐",callback:function(n){return u(this,void 0,void 0,(function*(){(yield function(n){return e(this,void 0,void 0,(function*(){if(yield r(n))return!0;const i=(yield n.list("cards")).cards.map((n=>n.id)),u=yield function(n,t){return e(this,void 0,void 0,(function*(){return(yield Promise.all(t.map((t=>e(this,void 0,void 0,(function*(){const e=yield o(n,t);if(!e)return 0;const i=n.getContext().member;return e.includes(i)?1:0})))))).reduce(((n,t)=>n+t),0)}))}(n,i),c=(yield(n=>n.get("board","shared","settings",t))(n)).maxVotes;return u<c}))}(n))||console.log("too many votes"),yield function(n){return e(this,void 0,void 0,(function*(){const t=yield o(n),e=yield n.member("id"),r=t.indexOf(e.id,0);return r>=0?t.splice(r,1):t.push(e.id),yield n.set("card","shared",i,t),!0}))}(n)}))}}]}))}window.TrelloPowerUp.initialize({"card-buttons":n=>c(n),"show-settings":t=>function(t){return u(this,void 0,void 0,(function*(){return(yield n(t))?t.popup({title:"ShipIt Voting - Settings",url:"settings.html"}):null}))}(t),"card-detail-badges":t=>function(t){return u(this,void 0,void 0,(function*(){const e=yield r(t);if(yield n(t)){const n=yield o(t);return n.length?[{text:n.length.toString(),color:e?"blue":null}]:null}return e?[{text:"Voted",color:e?"blue":null}]:null}))}(t)},{appKey:"b445ad95c251c40201f35f25bd3956a2",appName:"ShipIt Voting",helpfulStacks:!0})})();