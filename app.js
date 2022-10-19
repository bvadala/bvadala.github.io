(()=>{"use strict";var t={hideVotes:!1,maxVotes:3},n=function(n){return n.get("board","shared","settings",t)},e=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}a((r=r.apply(t,n||[])).next())}))},r=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},o="votes",i=function(t,n){return t.get(n||"card","shared",o,[])};function u(t){return e(this,void 0,void 0,(function(){var e,o,i,u;return r(this,(function(r){switch(r.label){case 0:return[4,c(t)];case 1:return r.sent()?[2,!0]:[4,t.list("cards")];case 2:return e=r.sent(),o=e.cards.map((function(t){return t.id})),[4,s(t,o)];case 3:return i=r.sent(),[4,n(t)];case 4:return u=r.sent().maxVotes,[2,i<u]}}))}))}function c(t){return e(this,void 0,void 0,(function(){var n,e;return r(this,(function(r){switch(r.label){case 0:return console.log("getting card votes"),[4,i(t)];case 1:return(n=r.sent())?(console.log("getting current member"),e=t.getContext().member,[2,n.includes(e)]):[2,!1]}}))}))}function a(t){return e(this,void 0,void 0,(function(){var n,e,u;return r(this,(function(r){switch(r.label){case 0:return[4,i(t)];case 1:return n=r.sent(),[4,t.member("id")];case 2:return e=r.sent(),(u=n.indexOf(e.id,0))>=0?n.splice(u,1):n.push(e.id),[4,t.set("card","shared",o,n)];case 3:return r.sent(),[2,!0]}}))}))}function s(t,n){return e(this,void 0,void 0,(function(){var o=this;return r(this,(function(u){switch(u.label){case 0:return[4,Promise.all(n.map((function(n){return e(o,void 0,void 0,(function(){var e,o;return r(this,(function(r){switch(r.label){case 0:return[4,i(t,n)];case 1:return(e=r.sent())?(o=t.getContext().member,[2,e.includes(o)?1:0]):[2,0]}}))}))})))];case 1:return[2,u.sent().reduce((function(t,n){return t+n}),0)]}}))}))}var l=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}a((r=r.apply(t,n||[])).next())}))},f=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};window.TrelloPowerUp.initialize({"card-buttons":function(t){return function(t){return l(this,void 0,void 0,(function(){var n;return f(this,(function(e){switch(e.label){case 0:return n={icon:"https://bvadala.github.io/images/thumbs_up.svg"},[4,c(t)];case 1:return[2,[(n.text=e.sent()?"Vote ☑":"Vote ☐",n.callback=function(t){return l(this,void 0,void 0,(function(){return f(this,(function(n){switch(n.label){case 0:return[4,u(t)];case 1:return n.sent()||console.log("too many votes"),[4,a(t)];case 2:return n.sent(),[2]}}))}))},n)]]}}))}))}(t)},"show-settings":function(t){return function(t){return t.popup({title:"ShipIt Voting - Settings",url:"settings.html"})}(t)}})})();