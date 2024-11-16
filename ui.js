/*hammerhead|script|start*/if (typeof window !== 'undefined' && window){window['hammerhead|process-dom-method'] && window['hammerhead|process-dom-method']();if (window.__get$ && typeof __get$ === 'undefined')var __get$Loc = window.__get$Loc,__set$Loc = window.__set$Loc,__set$ = window.__set$,__get$ = window.__get$,__call$ = window.__call$,__get$Eval = window.__get$Eval,__proc$Script = window.__proc$Script,__proc$Html = window.__proc$Html,__get$PostMessage = window.__get$PostMessage,__get$ProxyUrl = window.__get$ProxyUrl,__rest$Array = window.__rest$Array,__rest$Object = window.__rest$Object,__arrayFrom$ = window.__arrayFrom$;} else {if (typeof __get$ === 'undefined')var __get$Loc = function(l){return l},__set$Loc = function(l,v){return l = v},__set$ = function(o,p,v){return o[p] = v},__get$ = function(o,p){return o[p]},__call$ = function(o,p,a){return o[p].apply(o,a)},__get$Eval = function(e){return e},__proc$Script = function(s){return s},__proc$Html = function(h){return h},__get$PostMessage = function(w,p){return arguments.length===1?w.postMessage:p},__get$ProxyUrl = function(u,d){return u},__rest$Array = function(a,i){return Array.prototype.slice.call(a, i)},__rest$Object = function(o,p){var k=Object.keys(o),n={};for(var i=0;i<k.length;++i)if(p.indexOf(k[i])<0)n[k[i]]=o[k[i]];return n},__arrayFrom$ = function(r){if(!r)return r;return!Array.isArray(r)&&"function"==typeof r[Symbol.iterator]?Array.from(r):r};if (typeof importScripts !== "undefined" && /\[native code]/g.test(importScripts.toString())) {var __getWorkerSettings$ = function () {return null};importScripts((location.origin || (location.protocol + "//" + location.host)) + "/worker-hammerhead.js");}}/*hammerhead|script|processing-header-end*/
function uiDefineExport(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("dzfbS", (function(t, r) {
    uiDefineExport(t.exports, "default", (function() {
        return n
    }
    ));
    var n = e => `/assets/map/${e}`
}
)),
r.register("1xxHS", (function(n, a) {
    uiDefineExport(n.exports, "Provider", (function() {
        return p
    }
    )),
    uiDefineExport(n.exports, "default", (function() {
        return m
    }
    ));
    var o = r("dxPgL")
      , i = "__wrap_b"
      , s = "__wrap_o"
      , l = "undefined" == typeof window ? t(o).useEffect : t(o).useLayoutEffect
      , c = (e, t, r) => {
        let n = (r = r || document.querySelector(`[data-br="${e}"]`)).parentElement
          , a = e => r.style.maxWidth = e + "px";
        r.style.maxWidth = "";
        let o, i = n.clientWidth, s = n.clientHeight, l = i / 2 - .25, c = i + .5;
        if (i) {
            for (; l + 1 < c; )
                o = Math.round((l + c) / 2),
                a(o),
                n.clientHeight === s ? c = o : l = o;
            a(c * t + i * (1 - t))
        }
        r.__wrap_o || (r.__wrap_o = new ResizeObserver(( () => {
            self.__wrap_b(0, +r.dataset.brr, r)
        }
        ))).observe(n)
    }
      , u = c.toString()
      , d = (e, r="") => t(o).createElement("script", {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: (e ? "" : `self.${i}=${u};`) + r
        }
    })
      , f = t(o).createContext(!1)
      , p =  _hh$temp0=>{var e=_hh$temp0.children;return t(o).createElement(f.Provider,{value:!0},d(!1),e);} 
      , m = ( _hh$temp1 ) => {
         var _hh$temp1$as=_hh$temp1.as,e=_hh$temp1$as===void 0?"span":_hh$temp1$as,_hh$temp1$ratio=_hh$temp1.ratio,r=_hh$temp1$ratio===void 0?1:_hh$temp1$ratio,n=_hh$temp1.children,a=__rest$Object(_hh$temp1,["as","ratio","children"]); let u = t(o).useId()
          , p = t(o).useRef()
          , m = t(o).useContext(f);
        return l(( () => {
            p.current && ( __set$(self,i,c) )(0, r, p.current)
        }
        ), [n, r]),
        l(( () => () => {
            if (!p.current)
                return;
            let e =  __get$(p.current,s) ;
            !e || (e.disconnect(),
            delete p.current[s])
        }
        ), []),
        t(o).createElement(t(o).Fragment, null, t(o).createElement(e, {
            ...a,
            "data-br": u,
            "data-brr": r,
            ref: p,
            style: {
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit"
            },
            suppressHydrationWarning: !0
        }, n), d(m, `self.${i}("${u}",${r})`))
    }
}
));

/*hammerhead|script|end*/