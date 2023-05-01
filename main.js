(()=>{"use strict";var e=".places",t=(document.querySelector(e),".popup-add-place"),n=document.querySelector(t).querySelector(".form"),r=document.querySelector(".form-profile"),o=document.querySelector(".form-change-avatar"),i=document.querySelector(".lead__picture-button"),l={formSelector:".form",inputSelector:".form__input",submitSelector:".button_submit",disabledButtonClass:"button_submit_inactive",inputErrorClass:"form__input_type_error",spanActiveClass:"form__input-error_active"},u={titleSelector:".place__title",imageSelector:".place__image",btnLikeActiveSelector:"button__like_active",btnLikeSelector:".button__like",btnTrashSelector:".button__trash",likeCount:".place__like-count"},a=document.querySelector(".lead__edit-button"),c=document.querySelector(".lead__title"),s=document.querySelector(".lead__subtitle"),f=document.querySelector(".form__input_type_name"),p=document.querySelector(".form__input_type_job"),y=document.querySelector(".lead__add-button"),m=(document.querySelector(".form__input_type_title"),document.querySelector(".form__input_type_url"),document.querySelector(".popup-img-big"),document.querySelector(".popup-img-big__image"),document.querySelector(".popup-img-big__image-subline"),"#place"),h=document.querySelector(".lead__picture");function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}document.querySelector(".form__input_type_avatar");var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=n,this._formElement=t,this._inputList=Array.from(t.querySelectorAll(n.inputSelector)),this._buttonElement=t.querySelector(n.submitSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._options.inputErrorClass),n.textContent=t,n.classList.add(this._options.spanActiveClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._options.inputErrorClass),t.classList.remove(this._options.spanActiveClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._options.disabledButtonClass),this._buttonElement.setAttribute("disabled","true")):(this._buttonElement.classList.remove(this._options.disabledButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var S=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var E=function(){function e(t,n,r){var o=t.data,i=t.placeElements,l=t.handleImageBig,u=t.handleRemoveCard,a=t.handleLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._myId=r,this._templateSelector=n,this._title=o.name,this._alt=o.name,this._src=o.link,this._handleImageBig=l,this._handleRemoveCard=u,this.placeElements=i,this._likes=o.likes,this._id=o._id,this.handleLike=a,this.ownerId=o.owner._id}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_isLikeActive",value:function(){var e=this;this._likes.forEach((function(t){t._id==e._myId&&(e._element.querySelector(e.placeElements.btnLikeSelector).classList.add("button__like_active"),e._element.myLike=!0)}))}},{key:"_isMyCard",value:function(){var e=this,t=this._element.querySelector(this.placeElements.btnTrashSelector);this.ownerId!=this._myId?t.remove():t.addEventListener("click",(function(){e._handleRemoveCard(e._element)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.id=this._id,this._isLikeActive(),this._isMyCard(),this._elementImage=this._element.querySelector(this.placeElements.imageSelector),this._element.querySelector(this.placeElements.titleSelector).textContent=this._title,this._element.likeCount=this._element.querySelector(this.placeElements.likeCount),this._element.likeCount.textContent=this._likes.length,this._elementImage.alt=this._title,this._elementImage.src=this._src,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(this.placeElements.btnLikeSelector).addEventListener("click",(function(){e.handleLike(e._element)})),this._elementImage.addEventListener("click",(function(){var t={src:e._src,alt:e._title,sub:e._title};e._handleImageBig(t)}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=this._getTemplate(),this._buttonToClose=this._popup.querySelector(".button_close"),this._bindebleHandleEscClose=this._handleEscClose.bind(this),this._bindebleClose=this.close.bind(this),this._bindebleHandleMouseClose=this._handleMouseClose.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._popupSelector)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleMouseClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"_setEventListeners",value:function(){document.addEventListener("keydown",this._bindebleHandleEscClose),this._buttonToClose.addEventListener("click",this._bindebleClose),this._popup.addEventListener("mousedown",this._bindebleHandleMouseClose)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._bindebleHandleEscClose),this._buttonToClose.removeEventListener("click",this._bindebleClose),this._popup.removeEventListener("mousedown",this._bindebleHandleMouseClose)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}(this,e)});function l(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,e))._element=T((t=q(n),x(l.prototype)),"_getTemplate",t).call(t),n._elementImage=n._element.querySelector(".popup-img-big__image"),n._elementImageSub=n._element.querySelector(".popup-img-big__image-subline"),n}return t=l,(n=[{key:"_generateCard",value:function(e){var t=e.sub,n=e.alt,r=e.src;return this._elementImageSub.textContent=t,this._elementImage.alt=n,this._elementImage.src=r,this._element}},{key:"open",value:function(e){T(x(l.prototype),"open",this).call(this),this._generateCard(e)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(j);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(e,t,n){var r,o=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=i.call(this,n))._handleSubmit=o,r._form=r._popup.querySelector(t.formSelector),r._subButton=r._form.querySelector(".button"),r._inputList=Array.from(r._form.querySelectorAll(t.inputSelector)),r}return t=l,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){U(N(l.prototype),"close",this).call(this),this._form.reset()}},{key:"thisButton",value:function(){return this._subButton}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(j);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var M=function(){function e(t){var n=t.profileName,r=t.profileJob;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.profileName=n,this.profileJob=r}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{profileName:this.profileName.textContent,profileJob:this.profileJob.textContent}}},{key:"setUserInfo",value:function(e,t){this.profileName.textContent=e,this.profileJob.textContent=t}}],n&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var F=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=n,this.headers=r}var t,n;return t=e,n=[{key:"getProfile",value:function(e){this.urlGet=this.baseUrl+"/users/me",fetch(this.urlGet,{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(t){e(t)})).catch((function(e){console.log(e)}))}},{key:"changeProfile",value:function(e,t,n,r){this.urlGet=this.baseUrl+"/users/me",r.textContent="Сохранение...",fetch(this.urlGet,{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){return n.setUserInfo(e.name,e.about),e})).catch((function(e){console.log(e)})).finally((function(){r.textContent="Сохранить"}))}},{key:"changeAvatar",value:function(e,t,n){this.urlGet=this.baseUrl+"/users/me/avatar",n.textContent="Сохранение...",fetch(this.urlGet,{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){return t.style.backgroundImage='url("'+e.avatar+'")',e})).catch((function(e){console.log(e)})).finally((function(){n.textContent="Изменить"}))}},{key:"getPlaces",value:function(){return this.urlGet=this.baseUrl+"/cards",fetch(this.urlGet,{headers:this.headers}).then((function(e){return e.json()}))}},{key:"putPlace",value:function(e,t){return this.urlGet=this.baseUrl+"/cards",t.textContent="Сохранение...",fetch(this.urlGet,{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()}))}},{key:"delPlace",value:function(e,t){return this.urlGet=this.baseUrl+"/cards/"+e,t.textContent="Удаление...",fetch(this.urlGet,{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).finally((function(){t.textContent="Да"}))}},{key:"toLike",value:function(e,t){this.urlGet=this.baseUrl+"/cards/"+e.id+"/likes",fetch(this.urlGet,{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(t){return e.likeCount.textContent=t.likes.length,t})).then((function(n){return e.querySelector(t.btnLikeSelector).classList.add("button__like_active"),e.myLike=!0,n})).catch((function(e){console.log(e)})).finally((function(){console.log("like")}))}},{key:"toDisLike",value:function(e,t){this.urlGet=this.baseUrl+"/cards/"+e.id+"/likes",fetch(this.urlGet,{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(t){return e.likeCount.textContent=t.likes.length,t})).then((function(n){return e.querySelector(t.btnLikeSelector).classList.remove("button__like_active"),e.myLike=!1,n})).catch((function(e){console.log(e)})).finally((function(){console.log("Dislike")}))}}],n&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),K=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"92dc896a-714f-46b7-abd9-c8be237b7915","Content-Type":"application/json"}}),Q=new M({profileName:c,profileJob:s}),W=new D({handleSubmit:function(e){var t=e.name,n=e.job,r=W.thisButton();K.changeProfile(t,n,Q,r),W.close()}},l,".popup-edit-profile");W.setEventListeners();var X=new D({handleSubmit:function(e){var t=e.avatar,n=X.thisButton();K.changeAvatar(t,h,n),X.close(),re.toggleButtonState()}},l,".popup-change-avatar");X.setEventListeners(),i.addEventListener("click",(function(){X.open()})),a.addEventListener("click",(function(){f.value=Q.getUserInfo().profileName,p.value=Q.getUserInfo().profileJob,W.open()})),K.getProfile((function(e){c.textContent=e.name,s.textContent=e.about,h.style.backgroundImage='url("'+e.avatar+'")'}));var Y=new B(".popup-img-big"),Z=new S({items:[],renderer:function(e){var t=$(e).generateCard();Z.addItem(t)}},e);function $(e){var t=new E({data:e,placeElements:u,handleImageBig:function(e){Y.open(e)},handleRemoveCard:function(e){document.querySelector(".form__input_type_cardId").value=e.id,te.open()},handleLike:function(e){e.myLike?K.toDisLike(e,u):K.toLike(e,u)}},m,"2e2becd926e5f6fe27258866");return t}new Promise((function(e,t){var n=K.getPlaces();n?e(n):t("Не пришли карты")})).then((function(e){Z.renderItems(e)})).catch((function(e){console.log(e)}));var ee=new D({handleSubmit:function(e){!function(e){var t={name:e.title,link:e.url},n=ee.thisButton();new Promise((function(e,r){var o=K.putPlace(t,n);o?e(o):r("Не сохранилась карточка")})).then((function(e){var t=$(e).generateCard();Z.prependItem(t)})).catch((function(e){console.log(e)})),ee.close(),ne.toggleButtonState()}(e)}},l,t);ee.setEventListeners(),y.addEventListener("click",(function(){ee.open()}));var te=new D({handleSubmit:function(e){var t=e.id,n=te.thisButton();new Promise((function(e,r){var o=K.delPlace(t,n);o?e(o):r("Не удалилась карточка")})).then((function(e){console.log(e),document.getElementById(t).remove()})),te.close()}},l,".popup-remove-place");te.setEventListeners(),new v(r,l).enableValidation();var ne=new v(n,l);ne.enableValidation();var re=new v(o,l);re.enableValidation()})();