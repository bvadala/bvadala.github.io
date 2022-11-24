(()=>{"use strict";const n={maxVotes:3};var t=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function c(n){try{l(i.next(n))}catch(n){r(n)}}function u(n){try{l(i.throw(n))}catch(n){r(n)}}function l(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}l((i=i.apply(n,t||[])).next())}))};const e="votes",i="voting_locked";function o(n,t){return n.get(t||"card","shared",e,[])}function r(n){return t(this,void 0,void 0,(function*(){const t=yield o(n);if(!t)return!1;const e=yield n.member("id");return t.includes(e.id)}))}function c(n){return t(this,void 0,void 0,(function*(){return u(n)}))}function u(n){return n.get("board","shared",i,!1)}var l=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function c(n){try{l(i.next(n))}catch(n){r(n)}}function u(n){try{l(i.throw(n))}catch(n){r(n)}}function l(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}l((i=i.apply(n,t||[])).next())}))};function a(i,u){return l(this,void 0,void 0,(function*(){const a=yield function(e){return t(this,void 0,void 0,(function*(){if(yield c(e))return{canVote:!1,errorMsg:"Voting Locked"};if(!e.memberCanWriteToModel("card")||!e.isMemberSignedIn())return{canVote:!1,errorMsg:"Not a member"};if(yield r(e))return{canVote:!0};const i=(yield e.list("id","cards")).cards.map((n=>n.id)),u=yield function(n,e){return t(this,void 0,void 0,(function*(){return(yield Promise.all(e.map((e=>t(this,void 0,void 0,(function*(){const t=yield o(n,e);if(!t)return 0;const i=n.getContext().member;return t.includes(i)?1:0})))))).reduce(((n,t)=>n+t),0)}))}(e,i),l=(yield function(t){return t.get("board","shared","settings",n)}(e)).maxVotes,a=u<l;return{canVote:a,errorMsg:a?null:"Too many votes"}}))}(i);return a.canVote?[{icon:u.images.thumbsUp,text:(yield r(i))?"Vote ☑":"Vote ☐",callback:function(n){return l(this,void 0,void 0,(function*(){yield function(n){return t(this,void 0,void 0,(function*(){const t=yield o(n),i=yield n.member("id"),r=t.indexOf(i.id,0);return r>=0?t.splice(r,1):t.push(i.id),yield n.set("card","shared",e,t),!0}))}(n)}))}}]:(console.log(a.errorMsg),[])}))}function d(n){return t=this,e=void 0,o=function*(){const t=yield n.member("id"),e=(yield n.board("id","memberships")).memberships.find((n=>n.idMember===t.id));return!!e&&"admin"==e.memberType},new((i=void 0)||(i=Promise))((function(n,r){function c(n){try{l(o.next(n))}catch(n){r(n)}}function u(n){try{l(o.throw(n))}catch(n){r(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(c,u)}l((o=o.apply(t,e||[])).next())}));var t,e,i,o}function s(n,e){return o=this,r=void 0,a=function*(){if(!(yield d(n)))return[];const o=yield c(n);return[{text:o?"Unlock Voting":"Lock Voting",icon:{dark:o?e.images.lockedWhite:e.images.unlockedWhite,light:o?e.images.lockedBlack:e.images.unlockedWhite},callback:function(n){return function(n){return t(this,void 0,void 0,(function*(){const t=yield u(n);yield n.set("board","shared",i,!t)}))}(n)}}]},new((l=void 0)||(l=Promise))((function(n,t){function e(n){try{c(a.next(n))}catch(n){t(n)}}function i(n){try{c(a.throw(n))}catch(n){t(n)}}function c(t){var o;t.done?n(t.value):(o=t.value,o instanceof l?o:new l((function(n){n(o)}))).then(e,i)}c((a=a.apply(o,r||[])).next())}));var o,r,l,a}var f=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function c(n){try{l(i.next(n))}catch(n){r(n)}}function u(n){try{l(i.throw(n))}catch(n){r(n)}}function l(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}l((i=i.apply(n,t||[])).next())}))};const h=window.location.href.replace(/\/$/,""),v={baseUrl:h,images:{thumbsUp:`${h}/images/thumbs_up.svg`,thumbsUpWhite:`${h}/images/thumbs_up_white.svg`,lockedBlack:`${h}/images/locked-black.png`,lockedWhite:`${h}/images/locked-white.png`,unlockedBlack:`${h}/images/unlocked-black.png`,unlockedWhite:`${h}/images/unlocked-white.png`}};window.TrelloPowerUp.initialize({"card-buttons":n=>a(n,v),"show-settings":n=>function(n){return t=this,e=void 0,o=function*(){return(yield d(n))?n.popup({title:"ShipIt Voting - Settings",url:"settings.html"}):null},new((i=void 0)||(i=Promise))((function(n,r){function c(n){try{l(o.next(n))}catch(n){r(n)}}function u(n){try{l(o.throw(n))}catch(n){r(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(c,u)}l((o=o.apply(t,e||[])).next())}));var t,e,i,o}(n),"card-detail-badges":n=>function(n){return t=this,e=void 0,c=function*(){const t=yield r(n);if(yield d(n)){const e=yield o(n);if(!e.length)return null;let i=e.length.toString();return t&&(i+=" (including yours)"),[{text:i,color:t?"blue":null}]}return t?[{text:"Voted",color:t?"blue":null}]:null},new((i=void 0)||(i=Promise))((function(n,o){function r(n){try{l(c.next(n))}catch(n){o(n)}}function u(n){try{l(c.throw(n))}catch(n){o(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(r,u)}l((c=c.apply(t,e||[])).next())}));var t,e,i,c}(n),"card-badges":n=>function(n,t){return e=this,i=void 0,u=function*(){const e=yield r(n);if(yield d(n)){const i=yield o(n);return i.length?[{text:i.length.toString(),color:e?"blue":null,icon:e?t.images.thumbsUpWhite:t.images.thumbsUp}]:null}return e?[{text:"",color:e?"blue":null,icon:t.images.thumbsUpWhite}]:null},new((c=void 0)||(c=Promise))((function(n,t){function o(n){try{l(u.next(n))}catch(n){t(n)}}function r(n){try{l(u.throw(n))}catch(n){t(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof c?e:new c((function(n){n(e)}))).then(o,r)}l((u=u.apply(e,i||[])).next())}));var e,i,c,u}(n,v),"list-actions":n=>function(n){return t=this,e=void 0,o=function*(){return(yield d)?[{text:"Podium Reveal",callback:function(t){return n.modal({url:"reveal.html",fullscreen:!0,title:"Podium Reveal"})}}]:[]},new((i=void 0)||(i=Promise))((function(n,r){function c(n){try{l(o.next(n))}catch(n){r(n)}}function u(n){try{l(o.throw(n))}catch(n){r(n)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(c,u)}l((o=o.apply(t,e||[])).next())}));var t,e,i,o}(n),"board-buttons":n=>s(n,v),"list-sorters":n=>function(n){return f(this,void 0,void 0,(function*(){return(yield d(n))?[{text:"Most Votes",callback:function(n){return f(this,void 0,void 0,(function*(){const e=yield function(n){return t(this,void 0,void 0,(function*(){const t=yield n.list("id","cards");var e=[];for(const i of t.cards)e.push({id:i.id,title:i.name,votes:(yield o(n,i.id)).length});var i=e.sort(((n,t)=>n.votes>t.votes?-1:1));return console.log(JSON.stringify(i)),i}))}(n);return{sortedIds:e.map((n=>n.id))}}))}}]:[]}))}(n)},{helpfulStacks:!0})})();