// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector("#style");
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n\u63A5\u4E0B\u6765\u6211\u6F14\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u5DE5\u5730\n\u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv\n\u6211\u8981\u52A0\u7684\u6837\u5F0F\u662F*/\n#div1{\n    border:1px solid red;\n    width:300px;\n    height:300px;\n}\n/* \n\u63A5\u4E0B\u6765\u6211\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n\u6CE8\u610F\u770B\u597D\u4E86\n\u9996\u5148\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,.5);\n    border:none;\n}\n/* \n\u516B\u5366\u662F\u9634\u9633\u7EC4\u6210\u7684\n\u4E00\u9ED1\u4E00\u767D\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \n\u63A5\u4E0B\u6765\u6DFB\u52A0\u4E24\u4E2A\u795E\u79D8\u7684\u5C0F\u7403\n*/\n#div1::before{\nwidth:150px;\nheight:150px;\ntop:0;\nleft:50%;\ntransform:translate(-50%);\nborder-radius:50%;\nbackground: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\nwidth:150px;\nheight:150px;\nbottom:0;\nleft:50%;\ntransform:translate(-50%);\nborder-radius:50%;\nbackground: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n"; //上面文字的回车在HTML显示的是空格，HTML里面的多个回车和空格都会被忽略为一个空格

var string2 = '';
var n = 0;
console.log(string.length);

var step = function step() {
  setTimeout(function () {
    console.log(n);

    if (string[n] === "\n") {
      //如果是回车就就加换行
      string2 += "<br>";
    } else if (string[n] === " ") {
      //这里表示空格
      string2 += "&nbsp";
    } else {
      // 不是回车就照搬
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n); //在style标签写内容,但是需要把string里面不是css的内容给注释掉

    window.scrollTo(0, 99999); //没写一句内容就把滚动条拉到最底部

    html.scrollTo(0, 99999); //没写一句内容就把div1滚动条拉到最底部，手机显示时的作用

    if (n < string.length - 1) {
      //减去最后一个索引，因为最后一个索引是访问不到的
      n++;
      step();
    }
  }, 50);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.a44ebc07.js.map