import * as $ from "../src/index.js";

const list = $.construct($.vectorfloatclass);
console.log("const list = new <float>[];");
console.log("list.push(10.5) =", $.callproperty(list, null, "push", 10.5));
console.log("list[0]++ =", $.postincrementproperty(list, null, 0));
console.log("list[0] =", $.getproperty(list, null, 0));
console.log("list.length =", $.getproperty(list, null, "length"));

const listOfRegExp = $.construct($.applytype($.vectorclass, [$.regexpclass]));
console.log("const listOfRegExp = new <RegExp>[];");
console.log("listOfRegExp.push(/(?:)/gi) =", $.callproperty(listOfRegExp, null, "push", $.construct($.regexpclass, "(?:)", "gi")));

const dynamicList = $.construct($.applytype($.vectorclass, [null]));
console.log("const dynamicList = new <*>[];");
console.log("dynamicList.push(10.5) =", $.callproperty(dynamicList, null, "push", 10.5));