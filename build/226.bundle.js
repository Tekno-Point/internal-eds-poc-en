(self.webpackChunk_adobe_aem_boilerplate = self.webpackChunk_adobe_aem_boilerplate || []).push([[226], { 226: (e, r, n) => { n.r(r), n.d(r, { default: () => i }); const t = n(724); function a(e) { return (function (e) { if (Array.isArray(e)) return o(e); }(e)) || (function (e) { if (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null || e['@@iterator'] != null) return Array.from(e); }(e)) || (function (e, r) { if (e) { if (typeof e === 'string') return o(e, r); let n = {}.toString.call(e).slice(8, -1); return n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set' ? Array.from(e) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, r) : void 0; } }(e)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()); } function o(e, r) { (r == null || r > e.length) && (r = e.length); for (var n = 0, t = Array(r); n < r; n++)t[n] = e[n]; return t; } function i(e) { const r = []; a(e.children).forEach(((e) => { const n = e.children[0]; const t = document.createElement('summary'); t.className = 'accordion-item-label', t.append.apply(t, a(n.childNodes)); const o = e.children[1]; o.className = 'accordion-item-body'; const i = document.createElement('details'); i.className = 'accordion-item', i.append(t, o), e.replaceWith(i), r.open = !0, r.push(i); })), r.forEach(((n) => { t.isDesktop.matches && e.classList.contains('only-mobile-expandable') ? (n.disabled = !0, n.open = !0, n.ariaDisabled = !0) : n.addEventListener('toggle', (() => { n.open && r.forEach(((e) => { e !== n && (e.open = !1); })); })); })); } } }]);
