import{g as a}from"./main-7aQjZm04.js";import{r as i,a as o}from"./sha256-CM9ho5J3.js";var h=i();const n=a(h);var c=o();const g=a(c);/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */async function f(e,s="SHA-1",r="hex"){let t;switch(s){case"SHA-1":{t=new n;break}case"SHA-256":{t=new g;break}}return t.update(e).digest(r)}async function x(e){const r=`blob ${e.byteLength.toString()}\0`;return new n().update(r).update(e).digest("hex")}export{x as gitHashFile,f as hashFile};
