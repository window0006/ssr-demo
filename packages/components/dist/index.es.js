import Se from "react";
var X = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function lr() {
  if (Te) return F;
  Te = 1;
  var C = Se, E = Symbol.for("react.element"), j = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, I = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(_, f, O) {
    var p, y = {}, h = null, W = null;
    O !== void 0 && (h = "" + O), f.key !== void 0 && (h = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (p in f) T.call(f, p) && !$.hasOwnProperty(p) && (y[p] = f[p]);
    if (_ && _.defaultProps) for (p in f = _.defaultProps, f) y[p] === void 0 && (y[p] = f[p]);
    return { $$typeof: E, type: _, key: h, ref: W, props: y, _owner: I.current };
  }
  return F.Fragment = j, F.jsx = x, F.jsxs = x, F;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function fr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var C = Se, E = Symbol.for("react.element"), j = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), _ = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), H = Symbol.iterator, Pe = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var S = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ce("error", e, t);
      }
    }
    function Ce(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var je = !1, xe = !1, ke = !1, De = !1, Fe = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === $ || Fe || e === I || e === O || e === p || De || e === W || je || xe || ke || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === y || e.$$typeof === x || e.$$typeof === _ || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case j:
          return "Portal";
        case $:
          return "Profiler";
        case I:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return Q(r) + ".Consumer";
          case x:
            var t = e;
            return Q(t._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case h: {
            var o = e, u = o._payload, i = o._init;
            try {
              return b(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, k = 0, ee, re, te, ne, ae, ie, oe;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function $e() {
      {
        if (k === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, ie = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        k++;
      }
    }
    function We() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: ee
            }),
            info: R({}, e, {
              value: re
            }),
            warn: R({}, e, {
              value: te
            }),
            error: R({}, e, {
              value: ne
            }),
            group: R({}, e, {
              value: ae
            }),
            groupCollapsed: R({}, e, {
              value: ie
            }),
            groupEnd: R({}, e, {
              value: oe
            })
          });
        }
        k < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = S.ReactCurrentDispatcher, N;
    function Y(e, r, t) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            N = n && n[1] || "";
          }
        return `
` + N + e;
      }
    }
    var B = !1, L;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ye();
    }
    function se(e, r) {
      if (!e || B)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, $e();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (d) {
              n = d;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (d) {
              n = d;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (d) {
            n = d;
          }
          e();
        }
      } catch (d) {
        if (d && n && typeof d.stack == "string") {
          for (var a = d.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var g = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, g), g;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = u, We(), Error.prepareStackTrace = o;
      }
      var w = e ? e.displayName || e.name : "", m = w ? Y(w) : "";
      return typeof e == "function" && L.set(e, m), m;
    }
    function Le(e, r, t) {
      return se(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ve(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case O:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Le(e.render);
          case y:
            return V(e.type, r, t);
          case h: {
            var n = e, o = n._payload, u = n._init;
            try {
              return V(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, le = {}, fe = S.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, o) {
      {
        var u = Function.call.bind(D);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, M(o), c("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ue = Array.isArray;
    function J(e) {
      return Ue(e);
    }
    function Ne(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(e)), ce(e);
    }
    var de = S.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge;
    function qe(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      typeof e.ref == "string" && de.current;
    }
    function ze(e, r) {
      {
        var t = function() {
          pe || (pe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var He = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), Ke(r) && (ve(r.key), a = "" + r.key), qe(r) && (v = r.ref, Ge(r, o));
        for (u in r)
          D.call(r, u) && !Je.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(i, l), v && Xe(i, l);
        }
        return He(e, a, v, o, n, de.current, i);
      }
    }
    var q = S.ReactCurrentOwner, ye = S.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function be() {
      {
        if (q.current) {
          var e = b(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      return "";
    }
    var Ee = {};
    function er(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== q.current && (n = " It was passed a child from " + b(e._owner.type) + "."), P(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function he(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && _e(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = we(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              G(i.value) && _e(i.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var o = b(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var Re = {};
    function me(e, r, t, n, o, u) {
      {
        var i = Ae(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Qe();
          v ? a += v : a += be();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === E ? (s = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = Ze(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (J(g)) {
                for (var w = 0; w < g.length; w++)
                  he(g[w], e);
                Object.freeze && Object.freeze(g);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(g, e);
        }
        if (D.call(r, "key")) {
          var m = b(e), d = Object.keys(r).filter(function(sr) {
            return sr !== "key";
          }), z = d.length > 0 ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[m + z]) {
            var ur = d.length > 0 ? "{" + d.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, z, m, ur, m), Re[m + z] = !0;
          }
        }
        return e === T ? tr(l) : rr(l), l;
      }
    }
    function nr(e, r, t) {
      return me(e, r, t, !0);
    }
    function ar(e, r, t) {
      return me(e, r, t, !1);
    }
    var ir = ar, or = nr;
    A.Fragment = T, A.jsx = ir, A.jsxs = or;
  }()), A;
}
process.env.NODE_ENV === "production" ? X.exports = lr() : X.exports = fr();
var cr = X.exports;
const dr = ({
  children: C,
  onClick: E,
  variant: j = "primary"
}) => /* @__PURE__ */ cr.jsx(
  "button",
  {
    onClick: E,
    className: `px-4 py-2 rounded ${j === "primary" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`,
    children: C
  }
);
export {
  dr as Button
};
