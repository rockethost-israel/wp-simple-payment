!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var o=n(2),r=(n.n(o),n(3)),__=(n.n(r),wp.i18n.__);(0,wp.blocks.registerBlockType)("simple-payment/simple-payment",{title:__("Simple Payment"),description:__("Simple Payment to integrate an easy form and credit card processing."),icon:"money",category:"common",keywords:[__("sSimple Paymnet Block"),__("Simple Paymnet"),__("simple-payment"),__("checkout"),__("Payment")],attributes:{id:{type:"integer"},amount:{type:"string"},product:{type:"string"},title:{type:"string"},fixed:{type:"boolean"},type:{type:"string"},form:{type:"string"},template:{type:"string"},target:{type:"string"},engine:{type:"string"},method:{type:"string"},redirect_url:{type:"string"},amount_field:{type:"string"},product_field:{type:"string"},enable_query:{type:"boolean"}},supports:{anchor:!0},edit:function(e){return[wp.element.createElement(wp.components.TextControl,{label:__("Product ID (post/page)"),value:e.attributes.id,onChange:function(t){e.setAttributes({id:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Product"),value:e.attributes.product,onChange:function(t){e.setAttributes({product:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Amount"),value:e.attributes.amount,onChange:function(t){e.setAttributes({amount:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Type"),value:e.attributes.type,onChange:function(t){e.setAttributes({type:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Form"),value:e.attributes.form,onChange:function(t){e.setAttributes({form:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Template"),value:e.attributes.template,onChange:function(t){e.setAttributes({template:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Target"),value:e.attributes.target,onChange:function(t){e.setAttributes({target:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Engine"),value:e.attributes.engine,onChange:function(t){e.setAttributes({engine:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Method"),value:e.attributes.method,onChange:function(t){e.setAttributes({method:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Redirect URL"),value:e.attributes.redirect_url,onChange:function(t){e.setAttributes({redirect_url:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Product Field"),value:e.attributes.product_field,onChange:function(t){e.setAttributes({product_field:t})}}),wp.element.createElement(wp.components.TextControl,{label:__("Amount Field"),value:e.attributes.amount_field,onChange:function(t){e.setAttributes({amount_field:t})}})]},save:function(e){var t={tag:"simple_payment",type:"single",attrs:e.attributes};return wp.shortcode.string(t)}})},function(e,t){},function(e,t){}]);