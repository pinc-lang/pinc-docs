"use strict";(self.webpackChunk_pinc_lang_docs=self.webpackChunk_pinc_lang_docs||[]).push([[81],{2864:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),o=["components"],r={id:"let-bindings",title:"Let Bindings",sidebar_position:1},s="Let Bindings",u={unversionedId:"Language Features/let-bindings",id:"Language Features/let-bindings",isDocsHomePage:!1,title:"Let Bindings",description:'let binds values to names. You might know them under the name "variable declarations".',source:"@site/docs/Language Features/let-bindings.md",sourceDirName:"Language Features",slug:"/Language Features/let-bindings",permalink:"/pinc-docs/Language Features/let-bindings",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"let-bindings",title:"Let Bindings",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pinc-docs/"},next:{title:"Primitive Types",permalink:"/pinc-docs/Language Features/primitive-types"}},d=[{value:"Optional values",id:"optional-values",children:[]},{value:"Shadowing",id:"shadowing",children:[]},{value:"Blocks and Scope",id:"blocks-and-scope",children:[]},{value:"Mutating Let Bindings",id:"mutating-let-bindings",children:[]}],m={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"let-bindings"},"Let Bindings"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"let"),' binds values to names. You might know them under the name "variable declarations". ',(0,l.kt)("br",null),"\nLet bindings are immutable by defualt, which means, that they can't be changed after they have been declared."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let greeting = "hello!";\nlet amount = 10;\nlet newAmount = 10 + amount;\n')),(0,l.kt)("h2",{id:"optional-values"},"Optional values"),(0,l.kt)("p",null,"PiNC fails compiling, when you try to add a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value to a let binding, which is not marked as nullable. ",(0,l.kt)("br",null),"\nTo mark a declaration as nullable, you have to end its name with a ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let result = 10;\nlet maybe_something? = if (result > 20) "Some value!";\n')),(0,l.kt)("p",null,"The variable ",(0,l.kt)("inlineCode",{parentName:"p"},"maybe_something")," has to be marked as nullable here, because we are only assigning a value to it, if the ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," is greater than 20."),(0,l.kt)("h2",{id:"shadowing"},"Shadowing"),(0,l.kt)("p",null,'Even though let bindings cannot change their value, they may be "modified" in another way: by "shadowing" them.'),(0,l.kt)("p",null,"Let's assume you have a declaration named ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),". ",(0,l.kt)("br",null),"\nIf you want to change the value of result, you may do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let result = 1;\nlet result = result + 5;\n\n// result is now 6\n")),(0,l.kt)("p",null,"By shadowing a variable, you are essentially redeclaring the variable with the same name. ",(0,l.kt)("br",null),"\nYou are however not changing the value of the first declaration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let amount = 1;\nlet add_amount = fn (num) -> {\n    amount + num\n};\n\nlet amount = 5;\nlet result = add_amount(2);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result")," will be 3, as the ",(0,l.kt)("inlineCode",{parentName:"p"},"add_amount")," function still only knows about the first declaration. "),(0,l.kt)("h2",{id:"blocks-and-scope"},"Blocks and Scope"),(0,l.kt)("p",null,"Bindings are always scoped within their surrounding block (",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"). ",(0,l.kt)("br",null),"\nFor example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"if (something == true) {\n    let result = 1;\n}\n\n// result is not accessible here\n")),(0,l.kt)("p",null,"Another feature of blocks is, that they implicitly return their last value. ",(0,l.kt)("br",null),"\nSo you are able to declare new bindings in the following way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let result = {\n    let part1 = 10;\n    let part2 = 20;\n\n    part1 + part2\n};\n\n// result is now 30\n// part1 and part2 are not accessible here...\n")),(0,l.kt)("h2",{id:"mutating-let-bindings"},"Mutating Let Bindings"),(0,l.kt)("p",null,"Even though let bindings are immutable by default, in some rare cases, you might need them to be mutable. ",(0,l.kt)("br",null),"\nWhen thats the case, you may mark them as mutable declarations with the ",(0,l.kt)("inlineCode",{parentName:"p"},"mutable")," keyword."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let mutable is_first = true;\n\nfor (i in 0..10) {\n    if (i != 0) {\n        is_first := false;\n    }\n\n    // ...\n}\n\n// is_first is now false\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In PiNC you are able to express a lot of things witout the need for mutation! ",(0,l.kt)("br",null),"\nWe do recommend to only use mutable values when you really need them. ",(0,l.kt)("br",null),"\nHaving a lot of mutable values may slow down the compiler, resulting in slower response times of your website."))))}p.isMDXComponent=!0}}]);