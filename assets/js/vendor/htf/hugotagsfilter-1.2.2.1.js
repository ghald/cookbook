!(function l(r, a, o) {
  function h(e, t) {
    if (!a[e]) {
      if (!r[e]) {
        var s = "function" == typeof require && require;
        if (!t && s) return s(e, !0);
        if (u) return u(e, !0);
        var i = new Error("Cannot find module '" + e + "'");
        throw ((i.code = "MODULE_NOT_FOUND"), i);
      }
      var n = (a[e] = { exports: {} });
      r[e][0].call(
        n.exports,
        function(t) {
          return h(r[e][1][t] || t);
        },
        n,
        n.exports,
        l,
        r,
        a,
        o
      );
    }
    return a[e].exports;
  }
  for (var u = "function" == typeof require && require, t = 0; t < o.length; t++)
    h(o[t]);
  return h;
})({
    1: [
      function(t, e, s) {
        "use strict";
        var i = (function() {
          function i(t, e) {
            for (var s = 0; s < e.length; s++) {
              var i = e[s];
              (i.enumerable = i.enumerable || !1), (i.configurable = !0),
              "value" in i && (i.writable = !0), Object.defineProperty(t,
                i.key, i);
            }
          }
          return function(t, e, s) {
            return e && i(t.prototype, e), s && i(t, s), t;
          };
        })();
        /**
         * @name 'Hugo Tags Filter'
         * @version 1.2.2
         * @license MIT
         * @author PointyFar
         */
        var n = (function() {
          function l(t) {
            !(function(t, e) {
              if (!(t instanceof e)) throw new TypeError(
                "Cannot call a class as a function");
            })(this, l);
            (this.FILTERS =
              t && t.filters ?
              t.filters :
              [
                  {
        name: 'categories',
        prefix: 'categories-',
        buttonClass: 'categories-button',
        allSelector: '#SelectAllCaterogies',
        attrName: 'data-categories',
        selectedPrefix: 'scategories-',
        countPrefix: 'ccategories-',
      },
      {
        name: 'regime',
        prefix: 'regime-',
        buttonClass: 'regime-button',
        allSelector: '#tfSelectAllRegimes',
        attrName: 'data-regime',
        selectedPrefix: 'sregime-',
        countPrefix: 'cregime-',
      },
              ]),
            (this.showItemClass = t && t.showItemClass ? t.showItemClass :
              "tf-show"),
            (this.activeButtonClass = t && t.activeButtonClass ? t.activeButtonClass :
              "active"),
            (this.filterItemClass = t && t.filterItemClass ? t.filterItemClass :
              "tf-filter-item"),
            (this.counterSelector = t && t.counterSelector ? t.counterSelector :
              "selectedItemCount"),
            (this.populateCount = !(!t || !t.populateCount) && t.populateCount),
            (this.setDisabledButtonClass = !(!t || !t.setDisabledButtonClass) &&
              t.setDisabledButtonClass),
            (this.filterItems = document.getElementsByClassName(this.filterItemClass)),
            (this.selectedItemCount = 0),
            (this.filterValues = {});
            for (var e = 0; e < this.FILTERS.length; e++) {
              (this.FILTERS[e].buttonTotal = document.getElementsByClassName(
                this.FILTERS[e].buttonClass).length), (this.FILTERS[e].selected = []),
              (this.FILTERS[e].values = []);
              var s = document.getElementsByClassName(this.FILTERS[e].buttonClass);
              this.filterValues[this.FILTERS[e].name] = [];
              for (var i = 0; i < s.length; i++) {
                var n = s[i].id.replace(this.FILTERS[e].prefix, "");
                this.filterValues[this.FILTERS[e].name][n] = { count: 0,
                  selected: 0 };
              }
            }
            this.showCheck(this.FILTERS[0].name, !0);
          }
          return (
            i(l, [{
                key: "initFilterCount",
                value: function(t, e) {
                  if (e)
                    for (var s in t)
                      for (var i = 0; i < this.filterItems.length; i++)
                        for (var n = this.getAttrs(s, this.filterItems[
                            i]), l = 0; l < n.length; l++) t[s][n[l]]
                          .count++, t[s][n[l]].selected++;
                  else {
                    var r = document.getElementsByClassName(this.showItemClass);
                    for (var s in t)
                      for (var a in t[s]) t[s][a].selected = 0;
                    for (l = 0; l < r.length; l++)
                      for (s in t) {
                        n = this.getAttrs(s, r[l]);
                        for (var o = 0; o < n.length; o++) t[s][n[o]]
                          .selected++;
                      }
                  }
                  return t;
                },
              },
              {
                key: "populateCounters",
                value: function(t) {
                  if (this.populateCount)
                    for (var e = 0; e < this.FILTERS.length; e++) {
                      var s = this.FILTERS[e].name,
                        i = this.FILTERS[e].countPrefix,
                        n = this.FILTERS[e].selectedPrefix;
                      if (i || n)
                        for (var l in t[s]) {
                          if (i) document.getElementById("" + i + l)
                            .textContent = t[s][l].count;
                          if (n) {
                            var r = document.getElementById("" + n +
                              l);
                            (r.textContent = t[s][l].selected),
                            this.setDisabledButtonClass &&
                              (0 == r.textContent ?
                                this.addClassIfMissing(document.getElementById(
                                    this.FILTERS[e].prefix + l),
                                  this.setDisabledButtonClass) :
                                this.delClassIfPresent(document.getElementById(
                                    this.FILTERS[e].prefix + l),
                                  this.setDisabledButtonClass));
                          }
                        }
                    }
                },
              },
              {
                key: "getAttrs",
                value: function(t, e) {
                  return e
                    .getAttribute("data-" + t)
                    .split(" ")
                    .filter(function(t) {
                      return 0 < t.length;
                    });
                },
              },
              {
                key: "showAll",
                value: function(t) {
                  for (var e = 0; e < this.FILTERS.length; e++) t ?
                    this.FILTERS[e].name === t && (this.FILTERS[e].selected = []) :
                    (this.FILTERS[e].selected = []);
                  this.showCheck(t);
                },
              },
              {
                key: "checkFilter",
                value: function(t, e) {
                  for (var s = document.querySelector("#" + e + t),
                      i = 0; i < this.FILTERS.length; i++)
                    this.FILTERS[i].prefix === e &&
                    (0 <= this.FILTERS[i].selected.indexOf(t) ?
                      (this.FILTERS[i].selected.splice(t, 1), this.delClassIfPresent(
                        s, this.activeButtonClass)) :
                      (this.FILTERS[i].selected.push(t), this.addClassIfMissing(
                        s, this.activeButtonClass)),
                      this.delClassIfPresent(document.querySelector(
                        this.FILTERS[i].allSelector), this.activeButtonClass),
                      this.showCheck(this.FILTERS[i].name));
                },
              },
              {
                key: "showCheck",
                value: function(t, e) {
                  for (var s = 0; s < this.FILTERS.length; s++)
                    if (this.FILTERS[s].name === t && (0 === this.FILTERS[
                          s].selected.length || this.FILTERS[s].selected
                        .length === this.FILTERS[s].buttonTotal)) {
                      for (var i = document.getElementsByClassName(
                          this.FILTERS[s].buttonClass), n = 0; n <
                        i.length; n++) this.delClassIfPresent(i[n],
                        this.activeButtonClass);
                      this.addClassIfMissing(document.querySelector(
                        this.FILTERS[s].allSelector), this.activeButtonClass);
                    }
                  for (s = this.selectedItemCount = 0; s < this.filterItems
                    .length; s++) {
                    this.delClassIfPresent(this.filterItems[s],
                      this.showItemClass);
                    var l = 0;
                    for (n = 0; n < this.FILTERS.length; n++) this.checkVisibility(
                      this.FILTERS[n].selected, this.filterItems[
                        s].getAttribute(this.FILTERS[n].attrName)
                    ) && l++;
                    l === this.FILTERS.length && (this.filterItems[
                        s].classList.contains(this.showItemClass) ||
                      (this.selectedItemCount++, this.addClassIfMissing(
                        this.filterItems[s], this.showItemClass
                      )));
                  }
                  document.getElementById(this.counterSelector) &&
                    (document.getElementById(this.counterSelector).textContent =
                      "" + this.selectedItemCount), this.checkButtonCounts(
                      e);
                },
              },
              {
                key: "checkButtonCounts",
                value: function(t) {
                  (this.filterValues = this.initFilterCount(this.filterValues,
                    t)), this.populateCounters(this.filterValues);
                },
              },
              {
                key: "checkVisibility",
                value: function(t, e) {
                  if (0 < t.length) {
                    for (var s = 0; s < t.length; s++) {
                      if (
                        0 <=
                        e
                        .split(" ")
                        .filter(function(t) {
                          return 0 < t.length;
                        })
                        .indexOf(t[s])
                      )
                        return !0;
                    }
                    return !1;
                  }
                  return !0;
                },
              },
              {
                key: "addClassIfMissing",
                value: function(t, e) {
                  t.classList.contains(e) || t.classList.add(e);
                },
              },
              {
                key: "delClassIfPresent",
                value: function(t, e) {
                  t.classList.contains(e) && t.classList.remove(e);
                },
              },
            ]),
            l
          );
        })();
        window.HugoTagsFilter = n;
      },
      {},
    ],
  }, {},
  [1]
);