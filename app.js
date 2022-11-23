(()=>{"use strict";const n={maxVotes:3};var t=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function u(n){try{l(i.next(n))}catch(n){r(n)}}function c(n){try{l(i.throw(n))}catch(n){r(n)}}function l(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,c)}l((i=i.apply(n,t||[])).next())}))};const e="votes",i="locked_lists";function o(n,t){return n.get(t||"card","shared",e,[])}function r(n){return t(this,void 0,void 0,(function*(){const t=yield o(n);if(!t)return!1;const e=yield n.member("id");return t.includes(e.id)}))}function u(n,e){return t(this,void 0,void 0,(function*(){return e||(e=(yield n.list("id")).id),(yield c(n)).includes(e)}))}function c(n){return n.get("board","shared",i,[])}var l=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function u(n){try{l(i.next(n))}catch(n){r(n)}}function c(n){try{l(i.throw(n))}catch(n){r(n)}}function l(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,c)}l((i=i.apply(n,t||[])).next())}))};function d(i,u){return l(this,void 0,void 0,(function*(){return[{icon:u.images.thumbsUp,text:(yield r(i))?"Vote      ☑":"Vote      ☐",callback:function(i){return l(this,void 0,void 0,(function*(){(yield function(e){return t(this,void 0,void 0,(function*(){if(yield r(e))return!0;const i=(yield e.list("id","cards")).cards.map((n=>n.id)),u=yield function(n,e){return t(this,void 0,void 0,(function*(){return(yield Promise.all(e.map((e=>t(this,void 0,void 0,(function*(){const t=yield o(n,e);if(!t)return 0;const i=n.getContext().member;return t.includes(i)?1:0})))))).reduce(((n,t)=>n+t),0)}))}(e,i),c=(yield function(t){return t.get("board","shared","settings",n)}(e)).maxVotes;return u<c}))}(i))?yield function(n){return t(this,void 0,void 0,(function*(){const t=yield o(n),i=yield n.member("id"),r=t.indexOf(i.id,0);return r>=0?t.splice(r,1):t.push(i.id),yield n.set("card","shared",e,t),!0}))}(i):console.log("too many votes")}))}}]}))}function s(n){return t=this,e=void 0,o=function*(){const t=yield n.member("id"),e=(yield n.board("id","memberships")).memberships.find((n=>n.idMember===t.id));return!!e&&"admin"==e.memberType},new((i=void 0)||(i=Promise))((function(n,r){function u(n){try{l(o.next(n))}catch(n){r(n)}}function c(n){try{l(o.throw(n))}catch(n){r(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(u,c)}l((o=o.apply(t,e||[])).next())}));var t,e,i,o}function a(n){return e=this,o=void 0,l=function*(){return(yield s)?[{text:(yield u(n))?"Lock Voting ☑":"Lock Voting",callback:function(n){return function(n,e){return t(this,void 0,void 0,(function*(){e||(e=(yield n.list("id")).id);const t=yield c(n),o=t.indexOf(e,0);o>=0?t.splice(o,1):t.push(e),yield n.set("board","shared",i,t)}))}(n)}},{text:"Podium Reveal",callback:function(t){return n.modal({url:"reveal.html",fullscreen:!0,title:"Podium Reveal"})}}]:[]},new((r=void 0)||(r=Promise))((function(n,t){function i(n){try{c(l.next(n))}catch(n){t(n)}}function u(n){try{c(l.throw(n))}catch(n){t(n)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(n){n(e)}))).then(i,u)}c((l=l.apply(e,o||[])).next())}));var e,o,r,l}const f=window.location.href.replace(/\/$/,""),h={baseUrl:f,images:{thumbsUp:`${f}/images/thumbs_up.svg`,thumbsUpWhite:`${f}/images/thumbs_up_white.svg`}};window.TrelloPowerUp.initialize({"card-buttons":n=>d(n,h),"show-settings":n=>function(n){return t=this,e=void 0,o=function*(){return(yield s(n))?n.popup({title:"ShipIt Voting - Settings",url:"settings.html"}):null},new((i=void 0)||(i=Promise))((function(n,r){function u(n){try{l(o.next(n))}catch(n){r(n)}}function c(n){try{l(o.throw(n))}catch(n){r(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(u,c)}l((o=o.apply(t,e||[])).next())}));var t,e,i,o}(n),"card-detail-badges":n=>function(n){return t=this,e=void 0,u=function*(){const t=yield r(n);if(yield s(n)){const e=yield o(n);return e.length?[{text:e.length.toString(),color:t?"blue":null}]:null}return t?[{text:"Voted",color:t?"blue":null}]:null},new((i=void 0)||(i=Promise))((function(n,o){function r(n){try{l(u.next(n))}catch(n){o(n)}}function c(n){try{l(u.throw(n))}catch(n){o(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(r,c)}l((u=u.apply(t,e||[])).next())}));var t,e,i,u}(n),"card-badges":n=>function(n,t){return e=this,i=void 0,c=function*(){const e=yield r(n);if(yield s(n)){const i=yield o(n);return i.length?[{text:i.length.toString(),color:e?"blue":null,icon:e?t.images.thumbsUpWhite:t.images.thumbsUp}]:null}return e?[{text:"",color:e?"blue":null,icon:t.images.thumbsUpWhite}]:null},new((u=void 0)||(u=Promise))((function(n,t){function o(n){try{l(c.next(n))}catch(n){t(n)}}function r(n){try{l(c.throw(n))}catch(n){t(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof u?e:new u((function(n){n(e)}))).then(o,r)}l((c=c.apply(e,i||[])).next())}));var e,i,u,c}(n,h),"list-actions":n=>a(n)},{helpfulStacks:!0})})();