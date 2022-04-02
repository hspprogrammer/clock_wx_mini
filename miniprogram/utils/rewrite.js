 import {
   setStorage,
   getStorage,
   removeStorage
 } from "./storage"
 import {
   cloudEnv
 } from "./config"
 import {
   emit,
   on,
   remove
 } from './events';


 function rewritePage() {
   const cPage = Page;

   Page = function Page(options) {
     if (!options['onLoad']) options['onLoad'] = function () {};

     options['$$on'] = on;
     options['$$emit'] = emit;
     options['$$remove'] = remove;
     options['$storage'] = (key, value) => {
       if (value) {
         return setStorage(key, value)
       } else {
         return getStorage(key)
       }
     }
     options['$removeStorage'] = removeStorage
     const hooks = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom'];
     Object.keys(options).forEach((v) => {
         const cusFunc = options[v];
         typeof options[v] === 'function' && (options[v] = function (e) {
             if (hooks.indexOf(v) === -1) {
               return cusFunc && cusFunc.apply(this, [...arguments]);
             } else {
               if (v === 'onLoad') {
                 if (getApp().globalData['userId']) {
                   return cusFunc && cusFunc.apply(this, [...arguments]);
                 } else {
                   getApp()[v === 'onLoad' ? 'checkLoginByLoad' : 'checkLoginByShow'] = async () => {
                     return cusFunc && cusFunc.apply(this, [...arguments]);
                   }
                 }
               }else{
                return cusFunc && cusFunc.apply(this, [...arguments]);
               }
             }
           })
         }) 
         
         return cPage(options)
     }


   }

   function rewriteComponent() {
     const cComponent = Component;
     Component = function Component(options) {
       options['methods'] = {
         ...options['methods'],
         $$on: on,
         $$emit: emit,
         $$remove: remove,
         $storage: function (key, data) {
           if (value) {
             return setStorage(key, value)
           } else {
             return getStorage(key)
           }
         },
         $removeStorage: removeStorage
       }
       return cComponent(options);
     }
   }

   rewritePage();

   rewriteComponent();