(()=>{"use strict";var t=function(t,n,e,o){return new(e||(e=Promise))((function(i,r){function c(t){try{a(o.next(t))}catch(t){r(t)}}function d(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,d)}a((o=o.apply(t,n||[])).next())}))};const n=window.TrelloPowerUp.iframe();n.render((function(){!function(n){var e,o,i,r;e=this,o=void 0,r=function*(){const e=yield function(n){return t(this,void 0,void 0,(function*(){const e=yield n.list("id","cards");let o=[];for(const t of e.cards)o.push({cardId:t.id,title:t.name,rank:0});const i=yield n.member("id"),r=yield function(n,e,o){return t(this,void 0,void 0,(function*(){return yield n.get("board","shared",`votes_${e}_${o}`,[])}))}(n,e.id,i.id);return r&&r.vote&&(r.vote.forEach((t=>{let n=o.find((n=>n.cardId==t[0]));n&&(n.rank=t[1])})),o.sort(((t,n)=>t.rank>n.rank?-1:1))),o}))}(n);let o=document.querySelector("#ballotCardBody");e.forEach((t=>{let n=o.insertRow();n.insertCell().appendChild(document.createTextNode(t.title));for(let o=1;o<6;o++){let i=n.insertCell();var e=document.createElement("input");e.type="radio",e.id=`${t.cardId}_${o}`,e.className="voteRadioBtn",e.name=`choice_${o}`,e.value=t.cardId,i.appendChild(e)}}))},new((i=void 0)||(i=Promise))((function(t,n){function c(t){try{a(r.next(t))}catch(t){n(t)}}function d(t){try{a(r.throw(t))}catch(t){n(t)}}function a(n){var e;n.done?t(n.value):(e=n.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,d)}a((r=r.apply(e,o||[])).next())}))}(n)}))})();