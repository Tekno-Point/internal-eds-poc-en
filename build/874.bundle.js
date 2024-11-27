/*! For license information please see 874.bundle.js.LICENSE.txt */

(self.webpackChunk_adobe_aem_boilerplate = self.webpackChunk_adobe_aem_boilerplate || []).push([[146, 874], {
  146: (t, e, r) => {
    r.r(e), r.d(e, { default: () => y }); const n = r(927); function o(t) { return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, o(t); } function a() {
      a = function () { return e; }; let t; var e = {}; const r = Object.prototype; const n = r.hasOwnProperty; const i = Object.defineProperty || function (t, e, r) { t[e] = r.value; }; const c = typeof Symbol === 'function' ? Symbol : {}; const u = c.iterator || '@@iterator'; const l = c.asyncIterator || '@@asyncIterator'; const s = c.toStringTag || '@@toStringTag'; function f(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r, enumerable: !0, configurable: !0, writable: !0,
        }), t[e];
      } try { f({}, ''); } catch (t) { f = function (t, e, r) { return t[e] = r; }; } function p(t, e, r, n) { const o = e && e.prototype instanceof b ? e : b; const a = Object.create(o.prototype); const c = new N(n || []); return i(a, '_invoke', { value: j(t, r, c) }), a; } function h(t, e, r) { try { return { type: 'normal', arg: t.call(e, r) }; } catch (t) { return { type: 'throw', arg: t }; } }e.wrap = p; const d = 'suspendedStart'; const y = 'suspendedYield'; const v = 'executing'; const m = 'completed'; const g = {}; function b() {} function w() {} function x() {} let L = {}; f(L, u, (function () { return this; })); const E = Object.getPrototypeOf; const k = E && E(E(W([]))); k && k !== r && n.call(k, u) && (L = k); const S = x.prototype = b.prototype = Object.create(L); function O(t) { ['next', 'throw', 'return'].forEach(((e) => { f(t, e, (function (t) { return this._invoke(e, t); })); })); } function _(t, e) { function r(a, i, c, u) { const l = h(t[a], t, i); if (l.type !== 'throw') { const s = l.arg; const f = s.value; return f && o(f) == 'object' && n.call(f, '__await') ? e.resolve(f.__await).then(((t) => { r('next', t, c, u); }), ((t) => { r('throw', t, c, u); })) : e.resolve(f).then(((t) => { s.value = t, c(s); }), ((t) => r('throw', t, c, u))); }u(l.arg); } let a; i(this, '_invoke', { value(t, n) { function o() { return new e(((e, o) => { r(t, n, e, o); })); } return a = a ? a.then(o, o) : o(); } }); } function j(e, r, n) { let o = d; return function (a, i) { if (o === v) throw Error('Generator is already running'); if (o === m) { if (a === 'throw') throw i; return { value: t, done: !0 }; } for (n.method = a, n.arg = i; ;) { const c = n.delegate; if (c) { const u = P(c, n); if (u) { if (u === g) continue; return u; } } if (n.method === 'next')n.sent = n._sent = n.arg; else if (n.method === 'throw') { if (o === d) throw o = m, n.arg; n.dispatchException(n.arg); } else n.method === 'return' && n.abrupt('return', n.arg); o = v; const l = h(e, r, n); if (l.type === 'normal') { if (o = n.done ? m : y, l.arg === g) continue; return { value: l.arg, done: n.done }; }l.type === 'throw' && (o = m, n.method = 'throw', n.arg = l.arg); } }; } function P(e, r) { const n = r.method; const o = e.iterator[n]; if (o === t) return r.delegate = null, n === 'throw' && e.iterator.return && (r.method = 'return', r.arg = t, P(e, r), r.method === 'throw') || n !== 'return' && (r.method = 'throw', r.arg = new TypeError(`The iterator does not provide a '${n}' method`)), g; const a = h(o, e.iterator, r.arg); if (a.type === 'throw') return r.method = 'throw', r.arg = a.arg, r.delegate = null, g; const i = a.arg; return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, r.method !== 'return' && (r.method = 'next', r.arg = t), r.delegate = null, g) : i : (r.method = 'throw', r.arg = new TypeError('iterator result is not an object'), r.delegate = null, g); } function T(t) { const e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function A(t) { const e = t.completion || {}; e.type = 'normal', delete e.arg, t.completion = e; } function N(t) { this.tryEntries = [{ tryLoc: 'root' }], t.forEach(T, this), this.reset(!0); } function W(e) { if (e || e === '') { const r = e[u]; if (r) return r.call(e); if (typeof e.next === 'function') return e; if (!isNaN(e.length)) { let a = -1; const i = function r() { for (;++a < e.length;) if (n.call(e, a)) return r.value = e[a], r.done = !1, r; return r.value = t, r.done = !0, r; }; return i.next = i; } } throw new TypeError(`${o(e)} is not iterable`); } return w.prototype = x, i(S, 'constructor', { value: x, configurable: !0 }), i(x, 'constructor', { value: w, configurable: !0 }), w.displayName = f(x, s, 'GeneratorFunction'), e.isGeneratorFunction = function (t) { const e = typeof t === 'function' && t.constructor; return !!e && (e === w || (e.displayName || e.name) === 'GeneratorFunction'); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, f(t, s, 'GeneratorFunction')), t.prototype = Object.create(S), t; }, e.awrap = function (t) { return { __await: t }; }, O(_.prototype), f(_.prototype, l, (function () { return this; })), e.AsyncIterator = _, e.async = function (t, r, n, o, a) { void 0 === a && (a = Promise); const i = new _(p(t, r, n, o), a); return e.isGeneratorFunction(r) ? i : i.next().then(((t) => (t.done ? t.value : i.next()))); }, O(S), f(S, s, 'Generator'), f(S, u, (function () { return this; })), f(S, 'toString', (() => '[object Generator]')), e.keys = function (t) { const e = Object(t); const r = []; for (const n in e)r.push(n); return r.reverse(), function t() { for (;r.length;) { const n = r.pop(); if (n in e) return t.value = n, t.done = !1, t; } return t.done = !0, t; }; }, e.values = W, N.prototype = {
        constructor: N, reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(A), !e) for (const r in this)r.charAt(0) === 't' && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop() { this.done = !0; const t = this.tryEntries[0].completion; if (t.type === 'throw') throw t.arg; return this.rval; }, dispatchException(e) { if (this.done) throw e; const r = this; function o(n, o) { return c.type = 'throw', c.arg = e, r.next = n, o && (r.method = 'next', r.arg = t), !!o; } for (let a = this.tryEntries.length - 1; a >= 0; --a) { const i = this.tryEntries[a]; var c = i.completion; if (i.tryLoc === 'root') return o('end'); if (i.tryLoc <= this.prev) { const u = n.call(i, 'catchLoc'); const l = n.call(i, 'finallyLoc'); if (u && l) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0); if (this.prev < i.finallyLoc) return o(i.finallyLoc); } else if (u) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0); } else { if (!l) throw Error('try statement without catch or finally'); if (this.prev < i.finallyLoc) return o(i.finallyLoc); } } } }, abrupt(t, e) { for (let r = this.tryEntries.length - 1; r >= 0; --r) { const o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) { var a = o; break; } }a && (t === 'break' || t === 'continue') && a.tryLoc <= e && e <= a.finallyLoc && (a = null); const i = a ? a.completion : {}; return i.type = t, i.arg = e, a ? (this.method = 'next', this.next = a.finallyLoc, g) : this.complete(i); }, complete(t, e) { if (t.type === 'throw') throw t.arg; return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), g; }, finish(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), A(r), g; } }, catch(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const r = this.tryEntries[e]; if (r.tryLoc === t) { const n = r.completion; if (n.type === 'throw') { var o = n.arg; A(r); } return o; } } throw Error('illegal catch attempt'); }, delegateYield(e, r, n) { return this.delegate = { iterator: W(e), resultName: r, nextLoc: n }, this.method === 'next' && (this.arg = t), g; },
      }, e;
    } function i(t, e, r, n, o, a, i) { try { var c = t[a](i); var u = c.value; } catch (t) { return void r(t); }c.done ? e(u) : Promise.resolve(u).then(n, o); } function c(t) { return function () { const e = this; const r = arguments; return new Promise(((n, o) => { const a = t.apply(e, r); function c(t) { i(a, n, o, c, u, 'next', t); } function u(t) { i(a, n, o, c, u, 'throw', t); }c(void 0); })); }; } function u(t) { const e = document.createElement('div'); return t.Style && (e.className = t.Style), e.classList.add('field-wrapper', ''.concat(t.Type, '-wrapper')), e.dataset.fieldset = t.Fieldset, e; } const l = []; function s(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''; const r = (0, n.L4)('form-'.concat(t.Name).concat(e)); l[r] = l[r] || 0; const o = l[r] ? '-'.concat(l[r]) : ''; return l[r] += 1, ''.concat(r).concat(o); } function f(t) { const e = document.createElement('label'); return e.id = s(t, '-label'), e.innerHTML = t.Label || t.Name, e.setAttribute('for', t.Id), t.Mandatory.toLowerCase() !== 'true' && t.Mandatory.toLowerCase() !== 'x' || (e.dataset.required = !0), e; } function p(t, e) { t.id = e.Id, t.name = e.Name, t.required = e.Mandatory && (e.Mandatory.toLowerCase() === 'true' || e.Mandatory.toLowerCase() === 'x'), t.placeholder = e.Placeholder, t.value = e.Value; } const h = function (t) { const e = document.createElement('input'); e.type = t.Type, p(e, t); const r = u(t); const n = f(t); return e.setAttribute('aria-labelledby', n.id), r.append(e), t.Type === 'radio' || t.Type === 'checkbox' ? r.append(n) : r.prepend(n), { field: e, fieldWrapper: r }; }; const d = {
      select: (function () { const t = c(a().mark((function t(e) { let r; let n; let o; let i; let c; let l; return a().wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: if (p(r = document.createElement('select'), e), n = function (t) { const e = t.text; const n = t.value; const o = document.createElement('option'); return o.text = e.trim(), o.value = n.trim(), o.value === r.value && o.setAttribute('selected', ''), r.add(o), o; }, e.Placeholder && n({ text: e.Placeholder, value: '' }).setAttribute('disabled', ''), !e.Options) { t.next = 19; break; } if (o = [], !e.Options.startsWith('https://')) { t.next = 17; break; } return i = new URL(e.Options), t.next = 10, fetch(''.concat(i.pathname).concat(i.search)); case 10: return c = t.sent, t.next = 13, c.json(); case 13: t.sent.data.forEach(((t) => { o.push({ text: t.Option, value: t.Value || t.Option }); })), t.next = 18; break; case 17: o = e.Options.split(',').map(((t) => ({ text: t.trim(), value: t.trim().toLowerCase() }))); case 18: o.forEach(((t) => n(t))); case 19: return (l = u(e)).append(r), l.prepend(f(e)), t.abrupt('return', { field: r, fieldWrapper: l }); case 23: case 'end': return t.stop(); } }), t); }))); return function (e) { return t.apply(this, arguments); }; }()), heading(t) { const e = u(t); const r = t.Style && t.Style.includes('sub-heading') ? 3 : 2; const n = document.createElement('h'.concat(r)); return n.innerHTML = t.Value || t.Label, n.id = t.Id, e.append(n), { field: n, fieldWrapper: e }; }, plaintext(t) { const e = u(t); const r = document.createElement('p'); return r.innerHTML = t.Value || t.Label, r.id = t.Id, e.append(r), { field: r, fieldWrapper: e }; }, 'text-area': function (t) { const e = document.createElement('textarea'); p(e, t); const r = u(t); const n = f(t); return e.setAttribute('aria-labelledby', n.id), r.append(e), r.prepend(n), { field: e, fieldWrapper: r }; }, toggle(t) { const e = h(t); const r = e.field; const n = e.fieldWrapper; r.type = 'checkbox', r.value || (r.value = 'on'), r.classList.add('toggle'), n.classList.add('selection-wrapper'); const o = document.createElement('div'); o.classList.add('switch'), o.append(r), n.append(o); const a = document.createElement('span'); return a.classList.add('slider'), o.append(a), a.addEventListener('click', (() => { r.checked = !r.checked; })), { field: r, fieldWrapper: n }; }, submit(t) { const e = document.createElement('button'); e.textContent = t.Label || t.Name, e.classList.add('button'), e.type = 'submit'; const r = u(t); return r.append(e), { field: e, fieldWrapper: r }; }, confirmation(t, e) { return e.dataset.confirmation = new URL(t.Value).pathname, {}; }, fieldset(t) { const e = document.createElement('fieldset'); if (p(e, t), t.Label) { const r = document.createElement('legend'); r.textContent = t.Label, e.append(r); } const n = u(t); return n.append(e), { field: e, fieldWrapper: n }; }, checkbox(t) { const e = h(t); const r = e.field; const n = e.fieldWrapper; return r.value || (r.value = 'checked'), n.classList.add('selection-wrapper'), { field: r, fieldWrapper: n }; }, radio(t) { const e = h(t); const r = e.field; const n = e.fieldWrapper; return r.value || (r.value = t.Label || 'on'), n.classList.add('selection-wrapper'), { field: r, fieldWrapper: n }; },
    }; function y(t, e) { return v.apply(this, arguments); } function v() { return (v = c(a().mark((function t(e, r) { let n; let o; let i; return a().wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: return e.Id = e.Id || s(e), n = e.Type.toLowerCase(), o = d[n] || h, t.next = 5, o(e, r); case 5: return i = t.sent, t.abrupt('return', i.fieldWrapper); case 7: case 'end': return t.stop(); } }), t); })))).apply(this, arguments); }
  },
  874: (t, e, r) => {
    r.r(e), r.d(e, { default: () => y }); const n = r(146); function o(t) { return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, o(t); } function a() {
      a = function () { return e; }; let t; var e = {}; const r = Object.prototype; const n = r.hasOwnProperty; const i = Object.defineProperty || function (t, e, r) { t[e] = r.value; }; const c = typeof Symbol === 'function' ? Symbol : {}; const u = c.iterator || '@@iterator'; const l = c.asyncIterator || '@@asyncIterator'; const s = c.toStringTag || '@@toStringTag'; function f(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r, enumerable: !0, configurable: !0, writable: !0,
        }), t[e];
      } try { f({}, ''); } catch (t) { f = function (t, e, r) { return t[e] = r; }; } function p(t, e, r, n) { const o = e && e.prototype instanceof b ? e : b; const a = Object.create(o.prototype); const c = new N(n || []); return i(a, '_invoke', { value: j(t, r, c) }), a; } function h(t, e, r) { try { return { type: 'normal', arg: t.call(e, r) }; } catch (t) { return { type: 'throw', arg: t }; } }e.wrap = p; const d = 'suspendedStart'; const y = 'suspendedYield'; const v = 'executing'; const m = 'completed'; const g = {}; function b() {} function w() {} function x() {} let L = {}; f(L, u, (function () { return this; })); const E = Object.getPrototypeOf; const k = E && E(E(W([]))); k && k !== r && n.call(k, u) && (L = k); const S = x.prototype = b.prototype = Object.create(L); function O(t) { ['next', 'throw', 'return'].forEach(((e) => { f(t, e, (function (t) { return this._invoke(e, t); })); })); } function _(t, e) { function r(a, i, c, u) { const l = h(t[a], t, i); if (l.type !== 'throw') { const s = l.arg; const f = s.value; return f && o(f) == 'object' && n.call(f, '__await') ? e.resolve(f.__await).then(((t) => { r('next', t, c, u); }), ((t) => { r('throw', t, c, u); })) : e.resolve(f).then(((t) => { s.value = t, c(s); }), ((t) => r('throw', t, c, u))); }u(l.arg); } let a; i(this, '_invoke', { value(t, n) { function o() { return new e(((e, o) => { r(t, n, e, o); })); } return a = a ? a.then(o, o) : o(); } }); } function j(e, r, n) { let o = d; return function (a, i) { if (o === v) throw Error('Generator is already running'); if (o === m) { if (a === 'throw') throw i; return { value: t, done: !0 }; } for (n.method = a, n.arg = i; ;) { const c = n.delegate; if (c) { const u = P(c, n); if (u) { if (u === g) continue; return u; } } if (n.method === 'next')n.sent = n._sent = n.arg; else if (n.method === 'throw') { if (o === d) throw o = m, n.arg; n.dispatchException(n.arg); } else n.method === 'return' && n.abrupt('return', n.arg); o = v; const l = h(e, r, n); if (l.type === 'normal') { if (o = n.done ? m : y, l.arg === g) continue; return { value: l.arg, done: n.done }; }l.type === 'throw' && (o = m, n.method = 'throw', n.arg = l.arg); } }; } function P(e, r) { const n = r.method; const o = e.iterator[n]; if (o === t) return r.delegate = null, n === 'throw' && e.iterator.return && (r.method = 'return', r.arg = t, P(e, r), r.method === 'throw') || n !== 'return' && (r.method = 'throw', r.arg = new TypeError(`The iterator does not provide a '${n}' method`)), g; const a = h(o, e.iterator, r.arg); if (a.type === 'throw') return r.method = 'throw', r.arg = a.arg, r.delegate = null, g; const i = a.arg; return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, r.method !== 'return' && (r.method = 'next', r.arg = t), r.delegate = null, g) : i : (r.method = 'throw', r.arg = new TypeError('iterator result is not an object'), r.delegate = null, g); } function T(t) { const e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function A(t) { const e = t.completion || {}; e.type = 'normal', delete e.arg, t.completion = e; } function N(t) { this.tryEntries = [{ tryLoc: 'root' }], t.forEach(T, this), this.reset(!0); } function W(e) { if (e || e === '') { const r = e[u]; if (r) return r.call(e); if (typeof e.next === 'function') return e; if (!isNaN(e.length)) { let a = -1; const i = function r() { for (;++a < e.length;) if (n.call(e, a)) return r.value = e[a], r.done = !1, r; return r.value = t, r.done = !0, r; }; return i.next = i; } } throw new TypeError(`${o(e)} is not iterable`); } return w.prototype = x, i(S, 'constructor', { value: x, configurable: !0 }), i(x, 'constructor', { value: w, configurable: !0 }), w.displayName = f(x, s, 'GeneratorFunction'), e.isGeneratorFunction = function (t) { const e = typeof t === 'function' && t.constructor; return !!e && (e === w || (e.displayName || e.name) === 'GeneratorFunction'); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, f(t, s, 'GeneratorFunction')), t.prototype = Object.create(S), t; }, e.awrap = function (t) { return { __await: t }; }, O(_.prototype), f(_.prototype, l, (function () { return this; })), e.AsyncIterator = _, e.async = function (t, r, n, o, a) { void 0 === a && (a = Promise); const i = new _(p(t, r, n, o), a); return e.isGeneratorFunction(r) ? i : i.next().then(((t) => (t.done ? t.value : i.next()))); }, O(S), f(S, s, 'Generator'), f(S, u, (function () { return this; })), f(S, 'toString', (() => '[object Generator]')), e.keys = function (t) { const e = Object(t); const r = []; for (const n in e)r.push(n); return r.reverse(), function t() { for (;r.length;) { const n = r.pop(); if (n in e) return t.value = n, t.done = !1, t; } return t.done = !0, t; }; }, e.values = W, N.prototype = {
        constructor: N, reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(A), !e) for (const r in this)r.charAt(0) === 't' && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop() { this.done = !0; const t = this.tryEntries[0].completion; if (t.type === 'throw') throw t.arg; return this.rval; }, dispatchException(e) { if (this.done) throw e; const r = this; function o(n, o) { return c.type = 'throw', c.arg = e, r.next = n, o && (r.method = 'next', r.arg = t), !!o; } for (let a = this.tryEntries.length - 1; a >= 0; --a) { const i = this.tryEntries[a]; var c = i.completion; if (i.tryLoc === 'root') return o('end'); if (i.tryLoc <= this.prev) { const u = n.call(i, 'catchLoc'); const l = n.call(i, 'finallyLoc'); if (u && l) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0); if (this.prev < i.finallyLoc) return o(i.finallyLoc); } else if (u) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0); } else { if (!l) throw Error('try statement without catch or finally'); if (this.prev < i.finallyLoc) return o(i.finallyLoc); } } } }, abrupt(t, e) { for (let r = this.tryEntries.length - 1; r >= 0; --r) { const o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) { var a = o; break; } }a && (t === 'break' || t === 'continue') && a.tryLoc <= e && e <= a.finallyLoc && (a = null); const i = a ? a.completion : {}; return i.type = t, i.arg = e, a ? (this.method = 'next', this.next = a.finallyLoc, g) : this.complete(i); }, complete(t, e) { if (t.type === 'throw') throw t.arg; return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), g; }, finish(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), A(r), g; } }, catch(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const r = this.tryEntries[e]; if (r.tryLoc === t) { const n = r.completion; if (n.type === 'throw') { var o = n.arg; A(r); } return o; } } throw Error('illegal catch attempt'); }, delegateYield(e, r, n) { return this.delegate = { iterator: W(e), resultName: r, nextLoc: n }, this.method === 'next' && (this.arg = t), g; },
      }, e;
    } function i(t) { return (function (t) { if (Array.isArray(t)) return c(t); }(t)) || (function (t) { if (typeof Symbol !== 'undefined' && t[Symbol.iterator] != null || t['@@iterator'] != null) return Array.from(t); }(t)) || (function (t, e) { if (t) { if (typeof t === 'string') return c(t, e); let r = {}.toString.call(t).slice(8, -1); return r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set' ? Array.from(t) : r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0; } }(t)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()); } function c(t, e) { (e == null || e > t.length) && (e = t.length); for (var r = 0, n = Array(e); r < e; r++)n[r] = t[r]; return n; } function u(t, e, r, n, o, a, i) { try { var c = t[a](i); var u = c.value; } catch (t) { return void r(t); }c.done ? e(u) : Promise.resolve(u).then(n, o); } function l(t) { return function () { const e = this; const r = arguments; return new Promise(((n, o) => { const a = t.apply(e, r); function i(t) { u(a, n, o, i, c, 'next', t); } function c(t) { u(a, n, o, i, c, 'throw', t); }i(void 0); })); }; } function s(t, e) { return f.apply(this, arguments); } function f() { return (f = l(a().mark((function t(e, r) { let o; let i; let c; let u; let l; return a().wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: return o = new URL(e), i = o.pathname, t.next = 3, fetch(i); case 3: return c = t.sent, t.next = 6, c.json(); case 6: return u = t.sent, (l = document.createElement('form')).dataset.action = r, t.next = 11, Promise.all(u.data.map(((t) => (0, n.default)(t, l)))); case 11: return t.sent.forEach(((t) => { t && l.append(t); })), l.querySelectorAll('fieldset').forEach(((t) => { l.querySelectorAll('[data-fieldset="'.concat(t.name, '"')).forEach(((e) => { t.append(e); })); })), t.abrupt('return', l); case 16: case 'end': return t.stop(); } }), t); })))).apply(this, arguments); } function p(t) { const e = {}; return i(t.elements).forEach(((t) => { t.name && t.type !== 'submit' && !t.disabled && (t.type === 'radio' ? t.checked && (e[t.name] = t.value) : t.type === 'checkbox' ? t.checked && (e[t.name] = e[t.name] ? ''.concat(e[t.name], ',').concat(t.value) : t.value) : e[t.name] = t.value); })), e; } function h(t) { return d.apply(this, arguments); } function d() { return (d = l(a().mark((function t(e) { let r; let n; let o; let i; return a().wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: if (e.getAttribute('data-submitting') !== 'true') { t.next = 2; break; } return t.abrupt('return'); case 2: return r = e.querySelector('button[type="submit"]'), t.prev = 3, e.setAttribute('data-submitting', 'true'), r.disabled = !0, n = p(e), t.next = 9, fetch(e.dataset.action, { method: 'POST', body: JSON.stringify({ data: n }), headers: { 'Content-Type': 'application/json' } }); case 9: if (!(o = t.sent).ok) { t.next = 14; break; }e.dataset.confirmation && (window.location.href = e.dataset.confirmation), t.next = 18; break; case 14: return t.next = 16, o.text(); case 16: throw i = t.sent, new Error(i); case 18: t.next = 23; break; case 20: t.prev = 20, t.t0 = t.catch(3), console.error(t.t0); case 23: return t.prev = 23, e.setAttribute('data-submitting', 'false'), r.disabled = !1, t.finish(23); case 27: case 'end': return t.stop(); } }), t, null, [[3, 20, 23, 27]]); })))).apply(this, arguments); } function y(t) { return v.apply(this, arguments); } function v() { return (v = l(a().mark((function t(e) { let r; let n; let o; let c; return a().wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: if (r = i(e.querySelectorAll('a')).map(((t) => t.href)), n = r.find(((t) => t.startsWith(window.location.origin) && t.endsWith('.json'))), o = r.find(((t) => t !== n)), n && o) { t.next = 5; break; } return t.abrupt('return'); case 5: return t.next = 7, s(n, o); case 7: c = t.sent, e.replaceChildren(c), c.addEventListener('submit', ((t) => { if (t.preventDefault(), c.checkValidity())h(c); else { const e = c.querySelector(':invalid:not(fieldset)'); e && (e.focus(), e.scrollIntoView({ behavior: 'smooth' })); } })); case 10: case 'end': return t.stop(); } }), t); })))).apply(this, arguments); }
  },
}]);
