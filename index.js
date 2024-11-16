/*hammerhead|script|start*/if (typeof window !== 'undefined' && window){window['hammerhead|process-dom-method'] && window['hammerhead|process-dom-method']();if (window.__get$ && typeof __get$ === 'undefined')var __get$Loc = window.__get$Loc,__set$Loc = window.__set$Loc,__set$ = window.__set$,__get$ = window.__get$,__call$ = window.__call$,__get$Eval = window.__get$Eval,__proc$Script = window.__proc$Script,__proc$Html = window.__proc$Html,__get$PostMessage = window.__get$PostMessage,__get$ProxyUrl = window.__get$ProxyUrl,__rest$Array = window.__rest$Array,__rest$Object = window.__rest$Object,__arrayFrom$ = window.__arrayFrom$;} else {if (typeof __get$ === 'undefined')var __get$Loc = function(l){return l},__set$Loc = function(l,v){return l = v},__set$ = function(o,p,v){return o[p] = v},__get$ = function(o,p){return o[p]},__call$ = function(o,p,a){return o[p].apply(o,a)},__get$Eval = function(e){return e},__proc$Script = function(s){return s},__proc$Html = function(h){return h},__get$PostMessage = function(w,p){return arguments.length===1?w.postMessage:p},__get$ProxyUrl = function(u,d){return u},__rest$Array = function(a,i){return Array.prototype.slice.call(a, i)},__rest$Object = function(o,p){var k=Object.keys(o),n={};for(var i=0;i<k.length;++i)if(p.indexOf(k[i])<0)n[k[i]]=o[k[i]];return n},__arrayFrom$ = function(r){if(!r)return r;return!Array.isArray(r)&&"function"==typeof r[Symbol.iterator]?Array.from(r):r};if (typeof importScripts !== "undefined" && /\[native code]/g.test(importScripts.toString())) {var __getWorkerSettings$ = function () {return null};importScripts((location.origin || (location.protocol + "//" + location.host)) + "/worker-hammerhead.js");}}/*hammerhead|script|processing-header-end*/
function indexDefineExport(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
function n(e) {
    return e && e.__esModule ? e.default : e
}
var r = {}
  , o = {}
  , i = t.parcelRequire388b;
window.cache = r;
null == i && ((i = function(e) {
    if (e in r)
        return  __get$(r,e) .exports;
    if (e in o) {
        var t =  __get$(o,e) ;
        delete o[e];
        var n = {
            id: e,
            exports: {}
        };
        return  __set$(r,e,n) ,
        t.call(n.exports, n, n.exports),
        n.exports
    }
    var i = new Error("Cannot find module '" + e + "'");
    throw i.code = "MODULE_NOT_FOUND",
    i
}
).register = function(e, t) {
     __set$(o,e,t) 
}
,
t.parcelRequire388b = i),
i.register("cMWv8", (function(t, n) {
    var r, o;
    indexDefineExport(t.exports, "register", (function() {
        return r
    }
    ), (function(e) {
        return r = e
    }
    )),
    indexDefineExport(t.exports, "resolve", (function() {
        return o
    }
    ), (function(e) {
        return o = e
    }
    ));
    var i = {};
    r = function(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++)
             __set$(i,__get$(t,n),__get$(e,__get$(t,n))) 
    }
    ,
    o = function(e) {
        var t =  __get$(i,e) ;
        if (null == t)
            throw new Error("Could not resolve bundle with id " + e);
        return t
    }
}
)),
i.register("izFtx", (function(e, t) {
    e.exports = i("7872L")
}
)),
i.register("7872L", (function(t, n) {
    /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var r, o, a;
    indexDefineExport(t.exports, "Fragment", (function() {
        return r
    }
    ), (function(e) {
        return r = e
    }
    )),
    indexDefineExport(t.exports, "jsx", (function() {
        return o
    }
    ), (function(e) {
        return o = e
    }
    )),
    indexDefineExport(t.exports, "jsxs", (function() {
        return a
    }
    ), (function(e) {
        return a = e
    }
    ));
    var u = i("dxPgL")
      , s = Symbol.for("react.element")
      , c = Symbol.for("react.fragment")
      , l = Object.prototype.hasOwnProperty
      , f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , d = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function p(e, t, n) {
        var r, o = {}, i = null, a = null;
        for (r in void 0 !== n && (i = "" + n),
        void 0 !== t.key && (i = "" + t.key),
        void 0 !== t.ref && (a = t.ref),
        t)
            l.call(t, r) && !d.hasOwnProperty(r) && ( __set$(o,r,__get$(t,r)) );
        if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 ===  __get$(o,r)  && ( __set$(o,r,__get$(t,r)) );
        return {
            $$typeof: s,
            type: e,
            key: i,
            ref: a,
            props: o,
            _owner: f.current
        }
    }
    r = c,
    o = p,
    a = p
}
)),
i.register("dxPgL", (function(e, t) {
    e.exports = i("esqQ2")
}
)),
i.register("esqQ2", (function(t, n) {
    /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var r, o, i, a, u, s, c, l, f, d, p, h, v, g, m, y, b, x, _, w, S, E, k, C, O, T, P, A, M, j, R, N, L, D, I;
    indexDefineExport(t.exports, "Children", (function() {
        return r
    }
    ), (function(e) {
        return r = e
    }
    )),
    indexDefineExport(t.exports, "Component", (function() {
        return o
    }
    ), (function(e) {
        return o = e
    }
    )),
    indexDefineExport(t.exports, "Fragment", (function() {
        return i
    }
    ), (function(e) {
        return i = e
    }
    )),
    indexDefineExport(t.exports, "Profiler", (function() {
        return a
    }
    ), (function(e) {
        return a = e
    }
    )),
    indexDefineExport(t.exports, "PureComponent", (function() {
        return u
    }
    ), (function(e) {
        return u = e
    }
    )),
    indexDefineExport(t.exports, "StrictMode", (function() {
        return s
    }
    ), (function(e) {
        return s = e
    }
    )),
    indexDefineExport(t.exports, "Suspense", (function() {
        return c
    }
    ), (function(e) {
        return c = e
    }
    )),
    indexDefineExport(t.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", (function() {
        return l
    }
    ), (function(e) {
        return l = e
    }
    )),
    indexDefineExport(t.exports, "cloneElement", (function() {
        return f
    }
    ), (function(e) {
        return f = e
    }
    )),
    indexDefineExport(t.exports, "createContext", (function() {
        return d
    }
    ), (function(e) {
        return d = e
    }
    )),
    indexDefineExport(t.exports, "createElement", (function() {
        return p
    }
    ), (function(e) {
        return p = e
    }
    )),
    indexDefineExport(t.exports, "createFactory", (function() {
        return h
    }
    ), (function(e) {
        return h = e
    }
    )),
    indexDefineExport(t.exports, "createRef", (function() {
        return v
    }
    ), (function(e) {
        return v = e
    }
    )),
    indexDefineExport(t.exports, "forwardRef", (function() {
        return g
    }
    ), (function(e) {
        return g = e
    }
    )),
    indexDefineExport(t.exports, "isValidElement", (function() {
        return m
    }
    ), (function(e) {
        return m = e
    }
    )),
    indexDefineExport(t.exports, "lazy", (function() {
        return y
    }
    ), (function(e) {
        return y = e
    }
    )),
    indexDefineExport(t.exports, "memo", (function() {
        return b
    }
    ), (function(e) {
        return b = e
    }
    )),
    indexDefineExport(t.exports, "startTransition", (function() {
        return x
    }
    ), (function(e) {
        return x = e
    }
    )),
    indexDefineExport(t.exports, "unstable_act", (function() {
        return _
    }
    ), (function(e) {
        return _ = e
    }
    )),
    indexDefineExport(t.exports, "useCallback", (function() {
        return w
    }
    ), (function(e) {
        return w = e
    }
    )),
    indexDefineExport(t.exports, "useContext", (function() {
        return S
    }
    ), (function(e) {
        return S = e
    }
    )),
    indexDefineExport(t.exports, "useDebugValue", (function() {
        return E
    }
    ), (function(e) {
        return E = e
    }
    )),
    indexDefineExport(t.exports, "useDeferredValue", (function() {
        return k
    }
    ), (function(e) {
        return k = e
    }
    )),
    indexDefineExport(t.exports, "useEffect", (function() {
        return C
    }
    ), (function(e) {
        return C = e
    }
    )),
    indexDefineExport(t.exports, "useId", (function() {
        return O
    }
    ), (function(e) {
        return O = e
    }
    )),
    indexDefineExport(t.exports, "useImperativeHandle", (function() {
        return T
    }
    ), (function(e) {
        return T = e
    }
    )),
    indexDefineExport(t.exports, "useInsertionEffect", (function() {
        return P
    }
    ), (function(e) {
        return P = e
    }
    )),
    indexDefineExport(t.exports, "useLayoutEffect", (function() {
        return A
    }
    ), (function(e) {
        return A = e
    }
    )),
    indexDefineExport(t.exports, "useMemo", (function() {
        return M
    }
    ), (function(e) {
        return M = e
    }
    )),
    indexDefineExport(t.exports, "useReducer", (function() {
        return j
    }
    ), (function(e) {
        return j = e
    }
    )),
    indexDefineExport(t.exports, "useRef", (function() {
        return R
    }
    ), (function(e) {
        return R = e
    }
    )),
    indexDefineExport(t.exports, "useState", (function() {
        return N
    }
    ), (function(e) {
        return N = e
    }
    )),
    indexDefineExport(t.exports, "useSyncExternalStore", (function() {
        return L
    }
    ), (function(e) {
        return L = e
    }
    )),
    indexDefineExport(t.exports, "useTransition", (function() {
        return D
    }
    ), (function(e) {
        return D = e
    }
    )),
    indexDefineExport(t.exports, "version", (function() {
        return I
    }
    ), (function(e) {
        return I = e
    }
    ));
    var F = Symbol.for("react.element")
      , H = Symbol.for("react.portal")
      , $ = Symbol.for("react.fragment")
      , W = Symbol.for("react.strict_mode")
      , z = Symbol.for("react.profiler")
      , U = Symbol.for("react.provider")
      , B = Symbol.for("react.context")
      , V = Symbol.for("react.forward_ref")
      , q = Symbol.for("react.suspense")
      , G = Symbol.for("react.memo")
      , K = Symbol.for("react.lazy")
      , Y = Symbol.iterator;
    var X = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , J = Object.assign
      , Z = {};
    function Q(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = Z,
        this.updater = n || X
    }
    function ee() {}
    function te(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = Z,
        this.updater = n || X
    }
    Q.prototype.isReactComponent = {},
    Q.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }
    ,
    Q.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }
    ,
    ee.prototype = Q.prototype;
    var ne = te.prototype = new ee;
    ne.constructor = te,
    J(ne, Q.prototype),
    ne.isPureReactComponent = !0;
    var re = Array.isArray
      , oe = Object.prototype.hasOwnProperty
      , ie = {
        current: null
    }
      , ae = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ue(e, t, n) {
        var r, o = {}, i = null, a = null;
        if (null != t)
            for (r in void 0 !== t.ref && (a = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t)
                oe.call(t, r) && !ae.hasOwnProperty(r) && ( __set$(o,r,__get$(t,r)) );
        var u = arguments.length - 2;
        if (1 === u)
            o.children = n;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                 __set$(s,c,__get$(arguments,c+2)) ;
            o.children = s
        }
        if (e && e.defaultProps)
            for (r in u = e.defaultProps)
                void 0 ===  __get$(o,r)  && ( __set$(o,r,__get$(u,r)) );
        return {
            $$typeof: F,
            type: e,
            key: i,
            ref: a,
            props: o,
            _owner: ie.current
        }
    }
    function se(e) {
        return "object" == typeof e && null !== e && e.$$typeof === F
    }
    var ce = /\/+/g;
    function le(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" +  __call$(e,"replace",[/[=:]/g,function(e){return __get$(t,e);}]) 
        }("" + e.key) : t.toString(36)
    }
    function fe(e, t, n, r, o) {
        var i = typeof e;
        "undefined" !== i && "boolean" !== i || (e = null);
        var a = !1;
        if (null === e)
            a = !0;
        else
            switch (i) {
            case "string":
            case "number":
                a = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                case F:
                case H:
                    a = !0
                }
            }
        if (a)
            return o = o(a = e),
            e = "" === r ? "." + le(a, 0) : r,
            re(o) ? (n = "",
            null != e && (n =  __call$(e,"replace",[ce,"$&/"])  + "/"),
            fe(o, t, n, "", (function(e) {
                return e
            }
            ))) : null != o && (se(o) && (o = function(e, t) {
                return {
                    $$typeof: F,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                }
            }(o, n + (!o.key || a && a.key === o.key ? "" :  __call$(""+o.key,"replace",[ce,"$&/"])  + "/") + e)),
            t.push(o)),
            1;
        if (a = 0,
        r = "" === r ? "." : r + ":",
        re(e))
            for (var u = 0; u < e.length; u++) {
                var s = r + le(i =  __get$(e,u) , u);
                a += fe(i, t, n, s, o)
            }
        else if (s = function(e) {
            return null === e || "object" != typeof e ? null : "function" == typeof (e = Y &&  __get$(e,Y)  || e["@@iterator"]) ? e : null
        }(e),
        "function" == typeof s)
            for (e = s.call(e),
            u = 0; !(i = e.next()).done; )
                a += fe(i = i.value, t, n, s = r + le(i, u++), o);
        else if ("object" === i)
            throw t = String(e),
            Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return a
    }
    function de(e, t, n) {
        if (null == e)
            return e;
        var r = []
          , o = 0;
        return fe(e, r, "", "", (function(e) {
            return t.call(n, e, o++)
        }
        )),
        r
    }
    function pe(e) {
        if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function(t) {
                0 !== e._status && -1 !== e._status || (e._status = 1,
                e._result = t)
            }
            ), (function(t) {
                0 !== e._status && -1 !== e._status || (e._status = 2,
                e._result = t)
            }
            )),
            -1 === e._status && (e._status = 0,
            e._result = t)
        }
        if (1 === e._status)
            return e._result.default;
        throw e._result
    }
    var he = {
        current: null
    }
      , ve = {
        transition: null
    };
    r = {
        map: de,
        forEach: function(e, t, n) {
            de(e, (function() {
                t.apply(this, arguments)
            }
            ), n)
        },
        count: function(e) {
            var t = 0;
            return de(e, (function() {
                t++
            }
            )),
            t
        },
        toArray: function(e) {
            return de(e, (function(e) {
                return e
            }
            )) || []
        },
        only: function(e) {
            if (!se(e))
                throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    },
    o = Q,
    i = $,
    a = z,
    u = te,
    s = W,
    c = q,
    l = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: ve,
        ReactCurrentOwner: ie
    },
    f = function(e, t, n) {
        if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = J({}, e.props)
          , o = e.key
          , i = e.ref
          , a = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (i = t.ref,
            a = ie.current),
            void 0 !== t.key && (o = "" + t.key),
            e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                oe.call(t, s) && !ae.hasOwnProperty(s) && ( __set$(r,s,void 0===__get$(t,s)&&void 0!==u?__get$(u,s):__get$(t,s)) )
        }
        var s = arguments.length - 2;
        if (1 === s)
            r.children = n;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                 __set$(u,c,__get$(arguments,c+2)) ;
            r.children = u
        }
        return {
            $$typeof: F,
            type: e.type,
            key: o,
            ref: i,
            props: r,
            _owner: a
        }
    }
    ,
    d = function(e) {
        return (e = {
            $$typeof: B,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }).Provider = {
            $$typeof: U,
            _context: e
        },
        e.Consumer = e
    }
    ,
    p = ue,
    h = function(e) {
        var t = ue.bind(null, e);
        return t.type = e,
        t
    }
    ,
    v = function() {
        return {
            current: null
        }
    }
    ,
    g = function(e) {
        return {
            $$typeof: V,
            render: e
        }
    }
    ,
    m = se,
    y = function(e) {
        return {
            $$typeof: K,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: pe
        }
    }
    ,
    b = function(e, t) {
        return {
            $$typeof: G,
            type: e,
            compare: void 0 === t ? null : t
        }
    }
    ,
    x = function(e) {
        var t = ve.transition;
        ve.transition = {};
        try {
            e()
        } finally {
            ve.transition = t
        }
    }
    ,
    _ = function() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    ,
    w = function(e, t) {
        return he.current.useCallback(e, t)
    }
    ,
    S = function(e) {
        return he.current.useContext(e)
    }
    ,
    E = function() {}
    ,
    k = function(e) {
        return he.current.useDeferredValue(e)
    }
    ,
    C = function(e, t) {
        return he.current.useEffect(e, t)
    }
    ,
    O = function() {
        return he.current.useId()
    }
    ,
    T = function(e, t, n) {
        return he.current.useImperativeHandle(e, t, n)
    }
    ,
    P = function(e, t) {
        return he.current.useInsertionEffect(e, t)
    }
    ,
    A = function(e, t) {
        return he.current.useLayoutEffect(e, t)
    }
    ,
    M = function(e, t) {
        return he.current.useMemo(e, t)
    }
    ,
    j = function(e, t, n) {
        return he.current.useReducer(e, t, n)
    }
    ,
    R = function(e) {
        return he.current.useRef(e)
    }
    ,
    N = function(e) {
        return he.current.useState(e)
    }
    ,
    L = function(e, t, n) {
        return he.current.useSyncExternalStore(e, t, n)
    }
    ,
    D = function() {
        return he.current.useTransition()
    }
    ,
    I = "18.2.0"
}
)),
i.register("aCATu", (function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function u(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var s, c = [], l = !1, f = -1;
    function d() {
        l && s && (l = !1,
        s.length ? c = s.concat(c) : f = -1,
        c.length && p())
    }
    function p() {
        if (!l) {
            var e = u(d);
            l = !0;
            for (var t = c.length; t; ) {
                for (s = c,
                c = []; ++f < t; )
                    s &&  __get$(s,f) .run();
                f = -1,
                t = c.length
            }
            s = null,
            l = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function h(e, t) {
        this.fun = e,
        this.array = t
    }
    function v() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                 __set$(t,n-1,__get$(arguments,n)) ;
        c.push(new h(e,t)),
        1 !== c.length || l || u(p)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = v,
    o.addListener = v,
    o.once = v,
    o.off = v,
    o.removeListener = v,
    o.removeAllListeners = v,
    o.emit = v,
    o.prependListener = v,
    o.prependOnceListener = v,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
)),
i.register("8PXSb", (function(t, n) {
    indexDefineExport(t.exports, "useDidMount", (function() {
        return o
    }
    ));
    var r = i("dxPgL");
    function o(e) {
        (0,
        r.useEffect)((function() {
            "function" == typeof e && e()
        }
        ), [])
    }
}
)),
i.register("m0l4W", (function(t, n) {
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) :  __set$(e,t,n) ,
        e
    }
    indexDefineExport(t.exports, "default", (function() {
        return r
    }
    ))
}
)),
i.register("bUpMN", (function(t, n) {
    function r() {
        return {
            onFetch: e => {
                e.fetchFn = () => {
                    var t, n, r, a, u, s;
                    const c = null == (t = e.fetchOptions) || null == (n = t.meta) ? void 0 : n.refetchPage
                      , l = null == (r = e.fetchOptions) || null == (a = r.meta) ? void 0 : a.fetchMore
                      , f = null == l ? void 0 : l.pageParam
                      , d = "forward" === (null == l ? void 0 : l.direction)
                      , p = "backward" === (null == l ? void 0 : l.direction)
                      , h = (null == (u = e.state.data) ? void 0 : u.pages) || []
                      , v = (null == (s = e.state.data) ? void 0 : s.pageParams) || [];
                    let g = v
                      , m = !1;
                    const y = e.options.queryFn || ( () => Promise.reject("Missing queryFn"))
                      , b = (e, t, n, r) => (g = r ? [t, ...g] : [...g, t],
                    r ? [n, ...e] : [...e, n])
                      , x = (t, n, r, o) => {
                        if (m)
                            return Promise.reject("Cancelled");
                        if (void 0 === r && !n && t.length)
                            return Promise.resolve(t);
                        const i = {
                            queryKey: e.queryKey,
                            pageParam: r,
                            meta: e.options.meta
                        };
                        var a;
                        a = i,
                        Object.defineProperty(a, "signal", {
                            enumerable: !0,
                            get: () => {
                                var t, n;
                                return null != (t = e.signal) && t.aborted ? m = !0 : null == (n = e.signal) || n.addEventListener("abort", ( () => {
                                    m = !0
                                }
                                )),
                                e.signal
                            }
                        });
                        const u = y(i);
                        return Promise.resolve(u).then((e => b(t, r, e, o)))
                    }
                    ;
                    let _;
                    if (h.length)
                        if (d) {
                            const t = void 0 !== f
                              , n = t ? f : o(e.options, h);
                            _ = x(h, t, n)
                        } else if (p) {
                            const t = void 0 !== f
                              , n = t ? f : i(e.options, h);
                            _ = x(h, t, n, !0)
                        } else {
                            g = [];
                            const t = void 0 === e.options.getNextPageParam;
                            _ = !c || !h[0] || c(h[0], 0, h) ? x([], t, v[0]) : Promise.resolve(b([], v[0], h[0]));
                            for (let n = 1; n < h.length; n++)
                                _ = _.then((r => {
                                    if (!c || ! __get$(h,n)  || c( __get$(h,n) , n, h)) {
                                        const i = t ?  __get$(v,n)  : o(e.options, r);
                                        return x(r, t, i)
                                    }
                                    return Promise.resolve(b(r,  __get$(v,n) ,  __get$(h,n) ))
                                }
                                ))
                        }
                    else
                        _ = x([]);
                    return _.then((e => ({
                        pages: e,
                        pageParams: g
                    })))
                }
            }
        }
    }
    function o(e, t) {
        return null == e.getNextPageParam ? void 0 : e.getNextPageParam( __get$(t,t.length-1) , t)
    }
    function i(e, t) {
        return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
    }
    indexDefineExport(t.exports, "infiniteQueryBehavior", (function() {
        return r
    }
    ))
}
)),
i("cMWv8").register(JSON.parse('{"byhhr":"index.6161fbb3.js","d0JaM":"Container.cc842324.js","8RIYa":"NotionContent.41f6b4af.js","2nG1U":"NotionContent.ee373401.css","XbWV0":"LatexRenderer.36f0f51c.js","lRXuX":"LatexRenderer.a98ff630.js","k5itq":"SchoolLibrary.09cf25c2.js","4CBJC":"Container.b29df429.js","9DpCO":"Container.85156922.js","2nRel":"Container.bc9b4ab7.js","6aHNF":"Container.ccb6fb28.js","7oSR4":"Container.67040ebc.js","aLUjp":"Container.13cf96d1.js","hUu2z":"Container.aeb4b46a.js","51hW1":"Container.53333845.js","lsr53":"Container.80fb95fb.js","aKTuc":"Container.1be6800f.js","5kzbk":"Container.e26903a2.js","9bkd0":"Container.53097aa1.js","p9PZU":"Container.4240b823.js","lzJG6":"Container.08523835.js","fLq6x":"Container.dcf251ac.js","eJPnE":"Container.8d414c6d.js","2pfL9":"Container.cb930b99.js","6Wf0g":"Container.d89399b6.js","eBp6a":"Container.a869d037.js","3R8qq":"Container.579ac790.js","4pmhl":"Container.90d2acdc.js","cKxS7":"Container.97ca7edf.js","iFE7S":"Container.c9001b44.js","dcMjo":"Container.5254e0f8.js","i5Sd9":"App.4e533908.js","7HEwm":"App.cf84e774.js","jgBRi":"App.7ca24d07.js","9m0FG":"PreviewComponent.8ff0d924.js","5vjoH":"PreviewComponent.4b9335f2.js","amSUy":"PreviewComponent.fc6165f6.js","e3HbM":"PreviewComponent.9376ea98.js","d1Jn1":"PreviewComponent.442b3926.js","azRlG":"App.b9f8beaa.js","8MylR":"App.92d581db.js","ggXXg":"App.1125ee70.js","6PFSX":"Container.2f7e35db.js","ktpgs":"CheckoutSuccess.2b3cce21.js","5fFUZ":"App.604ad43f.js","8Xrka":"NotFound.18d79ec3.js","bJeNl":"ErrorPage.8474ff46.js","fhcXk":"Redirector.382e4eef.js","fRyLc":"App.88802eb4.js","ktdBg":"play.2d306b0c.js","iz62w":"play.3edf5f32.css","9k4VC":"play.2477aaf3.js","8n6f5":"play.a06387af.js","4o23N":"play.9e8f9a1d.js","5CPH7":"App.9e876253.js","9AtOa":"DamagerDevice.ecbf0891.js","8Pzty":"CameraPointDevice.d11bffb8.js","8ire8":"BlockingZoneDevice.68e44fea.js","k8lID":"CharacterDevice.b63041ba.js","7zeOK":"ClassDevice.a996387f.js","caoA5":"TerrainLayerAppearanceDevice.e096c789.js","lO4Hq":"BackgroundTilesZoneDevice.3540db6c.js","f48pJ":"ProceduralTerrainZoneInstructionDevice.dd1f8ced.js","8IXYQ":"ProceduralTerrainZoneDevice.d69e7585.js","eve0s":"DialogueActionDevice.bd053590.js","6E3hI":"DialogueDevice.5bbcdfdf.js","eQ2w9":"ScorebarDevice.f9604780.js","hZcyB":"OutlineDevice.b7d74e22.js","jrAhR":"BallZoneDevice.ce5351de.js","lBL50":"BallDevice.ac2cde3a.js","629lH":"DamageBoostDevice.a8d39799.js","7hHP9":"CheckpointDevice.d0d63953.js","cPchY":"PlayerPositonDetectorDevice.e2562d11.js","lqrZ7":"CaptureFlagZoneDevice.b67eeeff.js","3UJK7":"CheckerDevice.85de1875.js","4XRxp":"ItemImageDevice.357d2e61.js","2JTt4":"MoodDevice.30fab6ed.js","4LmNO":"PlayerAppearanceModifierDevice.f2ab7c25.js","2axnq":"WaypointDevice.48515f7b.js","6ijpe":"TriggerDevice.afefa4e9.js","5v2AS":"CounterDevice.b6c07dfd.js","48Ew4":"ItemGranterDevice.a643ccf9.js","5LpVu":"TeleporterDevice.9c306e7b.js","4vib1":"CharacterSpawnPadDevice.24d57108.js","eT1Zz":"TextBillboardDevice.fe1a73d0.js","7Inhv":"PropDevice.7e6b22d8.js","6Lf5a":"BarrierDevice.0e3eea20.js","4THcq":"ButtonDevice.add6abac.js","cp9dc":"DroppedItemDevice.4fb0549d.js","jXdNn":"PropertyDevice.3d08022d.js","11Mke":"MapOptionsDevice.acf4dff4.js","6mzzp":"TeamSettingsDevice.f4f84f4a.js","ajmL4":"ImageBillboardDevice.4e4fa20b.js","gcZcu":"GimkitLiveQuestionDevice.6c11b154.js","au92s":"ZoneDevice.600a7520.js","4MzCH":"TextExplainerDevice.465c21b6.js","4Jn2g":"RelayDevice.6ac85827.js","kgK5D":"CameraSizeDevice.d96e1f20.js","jXEAJ":"MusicDevice.f702c754.js","kkMyG":"SpeedDevice.784c6481.js","1iZYn":"SoundEffectDevice.b7bfbbb3.js","loWrx":"InventoryItemManagerDevice.b3f2eda3.js","afqP8":"GUIDevice.0edc42a1.js","67EoX":"LifecycleDevice.fc481619.js","9tgSf":"EndGameDevice.a9cfc364.js","h1N5u":"CountdownDevice.5c2b1611.js","ej0sb":"ShadowDevice.12f1fc31.js","cgRYl":"CharacterProximityDevice.266987ff.js","9vK7j":"RepeaterDevice.fdc60ee6.js","25Pg5":"TeamSwitcherDevice.7caa2205.js","6Jexl":"NotificationDevice.d4971cea.js","7jjmq":"EndOfGameWidgetDevice.de5e313d.js","bAPE5":"VendingMachineDevice.040536af.js","dyesg":"RespawnDevice.0a062591.js","cbyR0":"XPDevice.f2dea820.js","g0K04":"FlagDevice.bb859bc5.js","8nPr2":"AssignmentCheckpointDevice.16cfc3c2.js","1jqqo":"AssignmentContextDevice.c0f45a53.js","foiAT":"WireRepeaterDevice.b2efa177.js","kBXSR":"MovementMeterDevice.291bd747.js","5dwpr":"PlacedStickerDevice.0e194650.js","lvu7f":"CraftingTableDevice.71776a17.js","5sr2P":"CraftingRecipeDevice.7b3d33d9.js","bKH1D":"StartingInventoryDevice.f5d941fb.js","by2Ti":"HealthGranterDevice.21d155db.js","5Ylb8":"SentryDevice.e1c47dd3.js","kO8uF":"KnockoutMangerDevice.935bab27.js","bfcqn":"LaserBeamDevice.94c809d1.js","9ZNjr":"LaserBeamManagerDevice.09645be6.js","9MhBP":"CosmosModifierDevice.36250c3a.js","lCwPA":"PasswordLockDevice.f1eb0c56.js","2giRN":"ItemSpawnerDevice.7828a415.js","imhDl":"TagZoneDevice.622e74b1.js","8M0iz":"App.c755e20d.js","jHvfD":"App.8013efde.js","foLWp":"App.679ce6b9.js","4Qi0u":"App.bd9e1ef4.js","frQLx":"App.369d41b4.js","2B53J":"App.ac16f96a.js","lha6M":"App.422f0873.js","dyK3Y":"Overview.fe44eeb7.js","6QM5f":"Requirements.40dbc768.js","7c0ET":"Form.2ce927e2.js","g2zA9":"Form.42b69027.js","59b3K":"App.cf33dba7.js","bE4sK":"App.71ea1580.js","dkjp3":"App.a9fdef44.js","dS1l6":"App.3eeb22ca.js","1DeXF":"App.cf53641f.js","lbvmG":"AnimatedBackground.6655a617.js","4Aokt":"App.deb979b4.js","hbSX4":"App.02bf02f8.js","9X1v7":"App.f7b63769.js","ahxgS":"Modal.577226ad.js","ak8Jj":"App.51c66f2a.js","ewWue":"App.340be249.js","jNcGw":"App.2d364ab2.js","5k4Xg":"App.0b1b8741.js","lJJ5C":"App.cdd1656c.js","4C0oD":"App.4cfd0e84.js","iVQut":"App.b4b5f3cd.js","2qWLq":"App.f22887f5.js","a7ZoB":"App.3a13084b.js","dtPXb":"App.502d3200.js","gHPTk":"App.04c388f9.js","20MtU":"App.0f822199.js","5UTJS":"App.a6fcb013.js","j8LtF":"InAppContainer.f5356038.js","gD0ll":"App.e5a3cfb1.js","5rXIQ":"App.bdf23f47.js","fOYib":"App.5c711d0f.js","gpLVf":"App.139d34bf.js","5PEeR":"App.6221e838.js","chacp":"App.6363cda1.js","bzGr9":"App.0fe68619.js","4ezKd":"App.8d5ccd4d.js","3ZPCR":"QRCode.ce68e6bc.js","huKj7":"App.247eae9f.css","6LP7Q":"KaTeX_AMS-Regular.4cd18550.woff2","30RYS":"KaTeX_Caligraphic-Bold.7d84fcea.woff2","dspcN":"KaTeX_Caligraphic-Regular.7e34eae2.woff2","9VX3S":"KaTeX_Fraktur-Bold.db0fea8b.woff2","4PY47":"KaTeX_Fraktur-Regular.7a216293.woff2","jAPlC":"KaTeX_Main-BoldItalic.c09d0cf1.woff2","jfIPS":"KaTeX_Main-Bold.88cef7b1.woff2","fK2li":"KaTeX_Main-Italic.de0e580d.woff2","1AewY":"KaTeX_Main-Regular.e2dbd876.woff2","a9LLW":"KaTeX_Math-BoldItalic.6cf39e99.woff2","fngLf":"KaTeX_Math-Italic.0470e72d.woff2","lHLy9":"KaTeX_SansSerif-Bold.b444b1f5.woff2","kvBFt":"KaTeX_SansSerif-Italic.6a451fb7.woff2","1WSfc":"KaTeX_SansSerif-Regular.e52904c3.woff2","14aLX":"KaTeX_Script-Regular.9f85c0f7.woff2","4LNIi":"KaTeX_Size1-Regular.263f0826.woff2","eRNwD":"KaTeX_Size2-Regular.7ddce1f2.woff2","3EMBL":"KaTeX_Size3-Regular.8e605720.woff2","3yhyj":"KaTeX_Size4-Regular.595ce6e5.woff2","l2Zbw":"KaTeX_Typewriter-Regular.21beea8e.woff2","2wSdb":"App.7df7f150.js","kDceZ":"Container.171c7adf.js","fssmI":"App.cdadd727.js","i4DYV":"App.8caab22a.js","hA5iD":"App.8a83c3fe.js","lwI13":"App.cb58b8b6.js","3aZlG":"App.08da61a1.js","ekSZn":"host.7c7234fc.js","j1dP9":"Chart.660ec4d8.js","2c6W2":"App.fa4ed76e.js","a81N8":"App.56686d4a.js","ehgOg":"App.9f5f6d75.js","i012j":"App.6109e595.js","fXlsg":"Redirector.1d8013bb.js","8f76t":"App.67271626.js","efntQ":"App.c36c54a4.js","d2pPD":"App.c490fae6.js","ktz88":"App.b03fcc50.js","gVke5":"App.0235b670.js","lH7jS":"App.d8b16edc.js","lmz2b":"BulkAnalytics.32aed6fe.js","9Zi0B":"App.aa79f3b5.js","kt0Oc":"App.4a8701b0.js","gQAl3":"App.52c285e1.js","75ml8":"App.f796f9d1.js","9j7N3":"Wrapper.4d3da30a.js","kyLED":"App.042018d0.js","10HjT":"App.1bfd2ac6.js","2IpKk":"App.aa6f310e.js","5e7Jl":"App.eb0c273e.js","eRVLY":"App.45d2d9d3.js","j8pN9":"App.8598b96e.js","9ymkO":"Entry.bbf0257d.js","g48TY":"App.2fde6d6d.js","8JTl7":"App.c98d3b92.js","7EhUq":"App.3372c30e.js","c9HSC":"App.79f8ff0c.js","5INPR":"App.a5d2bab7.js","gFrF5":"App.5c301f88.js","hDnNf":"index.498d1789.css"}'));
/*hammerhead|script|end*/