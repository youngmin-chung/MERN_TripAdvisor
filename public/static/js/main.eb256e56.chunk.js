;(this.webpackJsonpbackend = this.webpackJsonpbackend || []).push([
  [0],
  {
    106: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(10),
        c = a(27),
        l = a(22),
        s = a(35),
        i = a(12),
        u = a(78),
        m = a.n(u),
        p = a(137),
        d = a(79),
        g = Object(d.a)({
          typography: { useNextVariants: !0 },
          palette: {
            common: { black: '#000', white: '#fff' },
            background: { paper: '#fff', default: '#fafafa' },
            primary: {
              light: 'rgba(227, 140, 64, 1)',
              main: 'rgba(139, 87, 42, 1)',
              dark: 'rgba(90, 55, 24, 1)',
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff4081',
              main: '#f50057',
              dark: '#c51162',
              contrastText: '#fff',
            },
            error: {
              light: '#e57373',
              main: '#f44336',
              dark: '#d32f2f',
              contrastText: '#fff',
            },
            text: {
              primary: 'rgba(0, 0, 0, 0.87)',
              secondary: 'rgba(0, 0, 0, 0.54)',
              disabled: 'rgba(0, 0, 0, 0.38)',
              hint: 'rgba(0, 0, 0, 0.38)',
            },
          },
        }),
        f = a(15),
        b = a.n(f),
        h = a(24),
        v = a(138),
        y = a(141),
        E = a(142),
        x = a(143),
        S = a(144),
        k = a(145),
        j = a(146),
        O = (a(62), a(29)),
        w = a.n(O),
        A = function (e) {
          var t = e.props,
            a = Object(n.useReducer)(
              function (e, t) {
                return Object(l.a)(Object(l.a)({}, e), t)
              },
              { msg: '', snackBarMsg: '', contactServer: !1, resArr: [] }
            ),
            o = Object(c.a)(a, 2),
            s = o[0],
            i = o[1]
          Object(n.useEffect)(function () {
            u()
          }, [])
          var u = (function () {
            var e = Object(h.a)(
              b.a.mark(function e() {
                var a, n, r
                return b.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            i({ contactServer: !0 }),
                            t('Runing setup...'),
                            (e.next = 5),
                            fetch(
                              'https://mern-trip-advisor.herokuapp.com/graphql',
                              {
                                method: 'POST',
                                headers: {
                                  'Content-Type':
                                    'application/json; charset=utf-8',
                                },
                                body: JSON.stringify({
                                  query: '{setupalerts} ',
                                }),
                              }
                            )
                          )
                        case 5:
                          return (a = e.sent), (e.next = 8), a.json()
                        case 8:
                          ;(n = e.sent),
                            (r = n.data),
                            i({
                              contactServer: !0,
                              resArr: r.setupalerts
                                .replace(/([.])\s*(?=[A-Z])/g, '$1|')
                                .split('|'),
                            }),
                            t('Alert collection setup completed.'),
                            (e.next = 18)
                          break
                        case 14:
                          ;(e.prev = 14),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            i({
                              msg: 'Problem loading server data - '.concat(
                                e.t0.message
                              ),
                            })
                        case 18:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 14]]
                )
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
          return r.a.createElement(
            p.a,
            { theme: g },
            r.a.createElement(
              v.a,
              { style: { color: 'brown' } },
              r.a.createElement(
                y.a,
                { style: { textAlign: 'center' } },
                r.a.createElement('img', {
                  src: w.a,
                  style: { width: '25%' },
                  alt: 'global_image',
                }),
                r.a.createElement('br', null),
                r.a.createElement(E.a, {
                  title: 'World Wide Travel Alerts',
                  color: 'inherit',
                  style: {
                    textAlign: 'center',
                    paddingTop: '1vh',
                    fontWeight: 'bold',
                  },
                })
              ),
              r.a.createElement(E.a, {
                title: 'Alert Setup - Details',
                color: 'inherit',
                style: { textAlign: 'center', fontSize: '1em' },
              }),
              r.a.createElement(
                y.a,
                null,
                r.a.createElement(
                  x.a,
                  { size: 'small', 'aria-label': 'a dense table' },
                  r.a.createElement(
                    S.a,
                    null,
                    s.resArr.map(function (e) {
                      return r.a.createElement(
                        k.a,
                        { key: e },
                        r.a.createElement(
                          j.a,
                          { component: 'th', scope: 'row' },
                          e
                        )
                      )
                    })
                  )
                )
              )
            )
          )
        },
        T = a(47),
        C = function () {
          return r.a.createElement(
            p.a,
            { theme: g },
            r.a.createElement(
              v.a,
              { style: { color: 'brown' } },
              r.a.createElement(
                y.a,
                { style: { textAlign: 'center' } },
                r.a.createElement('img', {
                  src: w.a,
                  style: { width: '25%' },
                  alt: 'global_image',
                }),
                r.a.createElement('br', null),
                r.a.createElement(E.a, {
                  title: 'World Wide Travel Alerts',
                  color: 'inherit',
                  style: {
                    textAlign: 'center',
                    paddingTop: '1vh',
                    fontWeight: 'bold',
                  },
                }),
                r.a.createElement(
                  T.a,
                  {
                    color: 'primary',
                    style: {
                      float: 'right',
                      paddingRight: '1vh',
                      fontSize: 'smaller',
                    },
                  },
                  '\xa9YC- 2021'
                )
              )
            )
          )
        },
        I = a(156),
        L = a(150),
        W = a(157),
        M = function (e) {
          var t = e.props,
            a = Object(n.useReducer)(
              function (e, t) {
                return Object(l.a)(Object(l.a)({}, e), t)
              },
              {
                msg: '',
                snackBarMsg: '',
                snackBarAddMsg: '',
                name: '',
                country: '',
                alert: '',
                countryname: '',
                text: '',
                date: '',
                contactServer: !1,
                showMsg: !1,
                countryList: [],
              }
            ),
            o = Object(c.a)(a, 2),
            s = o[0],
            i = o[1]
          Object(n.useEffect)(function () {
            u()
          }, [])
          var u = (function () {
              var e = Object(h.a)(
                b.a.mark(function e() {
                  var a, n, r
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              i({
                                contactServer: !0,
                                snackBarMsg:
                                  'Attempting to load users from server...',
                              }),
                              (e.next = 4),
                              fetch(
                                'https://mern-trip-advisor.herokuapp.com/graphql',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type':
                                      'application/json; charset=utf-8',
                                  },
                                  body: JSON.stringify({
                                    query: '{alerts{name, text, date}} ',
                                  }),
                                }
                              )
                            )
                          case 4:
                            return (a = e.sent), (e.next = 7), a.json()
                          case 7:
                            ;(n = e.sent),
                              (r = n.data),
                              i({ countryList: r.alerts, contactServer: !0 }),
                              t('found '.concat(r.alerts.length, ' countries')),
                              (e.next = 17)
                            break
                          case 13:
                            ;(e.prev = 13),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              i({
                                msg: 'Problem loading server data - '.concat(
                                  e.t0.message
                                ),
                              })
                          case 17:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            m = (function () {
              var e = Object(h.a)(
                b.a.mark(function e() {
                  var a, n, r, o, c
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = new Date()),
                              (a = new Date(a.getTime())),
                              (n =
                                a.getFullYear().toString() +
                                '-' +
                                (2 === (a.getMonth() + 1).toString().length
                                  ? (a.getMonth() + 1).toString()
                                  : '0' + (a.getMonth() + 1).toString()) +
                                '-' +
                                (2 === a.getDate().toString().length
                                  ? a.getDate().toString()
                                  : '0' + a.getDate().toString()) +
                                ' ' +
                                (2 === a.getHours().toString().length
                                  ? a.getHours().toString()
                                  : '0' + a.getHours().toString()) +
                                ':' +
                                (2 ===
                                (5 * parseInt(a.getMinutes() / 5)).toString()
                                  .length
                                  ? (
                                      5 * parseInt(a.getMinutes() / 5)
                                    ).toString()
                                  : '0' +
                                    (
                                      5 * parseInt(a.getMinutes() / 5)
                                    ).toString()) +
                                ':' +
                                (2 ===
                                (5 * parseInt(a.getSeconds() / 5)).toString()
                                  .length
                                  ? (
                                      5 * parseInt(a.getSeconds() / 5)
                                    ).toString()
                                  : '0' +
                                    (
                                      5 * parseInt(a.getSeconds() / 5)
                                    ).toString())),
                              (r = {
                                user: s.name,
                                name: s.country,
                                text: s.alert,
                                date: n,
                              }),
                              (e.prev = 4),
                              (e.next = 7),
                              fetch(
                                'https://mern-trip-advisor.herokuapp.com/graphql',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type':
                                      'application/json; charset=utf-8',
                                  },
                                  body: JSON.stringify({
                                    query: 'mutation{postadvisory(user: "'
                                      .concat(r.user, '",name: "')
                                      .concat(r.name, '", text:"')
                                      .concat(r.text, '", date: "')
                                      .concat(
                                        r.date,
                                        '") {user, name, text, date}}'
                                      ),
                                  }),
                                }
                              )
                            )
                          case 7:
                            return (o = e.sent), (e.next = 10), o.json()
                          case 10:
                            ;(c = e.sent),
                              i({ showMsg: !0, name: '', country: '' }),
                              t(
                                'added advisory on ' + c.data.postadvisory.date
                              ),
                              (e.next = 18)
                            break
                          case 15:
                            ;(e.prev = 15),
                              (e.t0 = e.catch(4)),
                              i({ snackbarMsg: e.t0.message, showMsg: !0 })
                          case 18:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[4, 15]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            d =
              void 0 === s.name ||
              '' === s.name ||
              void 0 === s.country ||
              '' === s.country
          return r.a.createElement(
            p.a,
            { theme: g },
            r.a.createElement(
              v.a,
              { style: { color: 'brown' } },
              r.a.createElement(
                y.a,
                { style: { textAlign: 'center' } },
                r.a.createElement('img', {
                  src: w.a,
                  style: { width: '25%' },
                  alt: 'global_image',
                }),
                r.a.createElement('br', null),
                r.a.createElement(E.a, {
                  title: 'World Wide Travel Alerts',
                  color: 'inherit',
                  style: {
                    textAlign: 'center',
                    paddingTop: '1vh',
                    fontWeight: 'bold',
                  },
                })
              ),
              r.a.createElement(E.a, {
                title: 'Add Advisory',
                style: { textAlign: 'center', fontWeight: 'bold' },
              }),
              r.a.createElement(
                y.a,
                null,
                r.a.createElement(I.a, {
                  onChange: function (e) {
                    i({ name: e.target.value })
                  },
                  helperText: "Enter user's name here",
                  value: s.name,
                }),
                r.a.createElement('br', null),
                r.a.createElement(W.a, {
                  id: 'lab8users',
                  value: '',
                  options: s.countryList.map(function (e) {
                    return e.name
                  }),
                  getOptionLabel: function (e) {
                    return e
                  },
                  style: { width: 300 },
                  onChange: function (e, t) {
                    var a = s.countryList.find(function (e) {
                      return e.name === t
                    })
                    i({ alert: a.text, country: t })
                  },
                  renderInput: function (e) {
                    return r.a.createElement(
                      I.a,
                      Object.assign({}, e, {
                        label: 'countries',
                        variant: 'outlined',
                        fullWidth: !0,
                      })
                    )
                  },
                }),
                r.a.createElement('br', null),
                r.a.createElement(
                  y.a,
                  null,
                  r.a.createElement(T.a, { style: { color: 'brown' } }, s.msg)
                ),
                r.a.createElement(
                  L.a,
                  {
                    type: 'button',
                    variant: 'contained',
                    color: 'primary',
                    style: { marginLeft: '28%', marginTop: '8%' },
                    disabled: d,
                    onClick: m,
                  },
                  'ADD ADVISORY'
                )
              )
            )
          )
        },
        q = a(147),
        B = a(161),
        P = a(151),
        R = a(158),
        D = a(152),
        z = a(83),
        J = a(153),
        N = function (e) {
          var t = e.props,
            a = Object(n.useReducer)(
              function (e, t) {
                return Object(l.a)(Object(l.a)({}, e), t)
              },
              {
                msg: '',
                selectedComplete: '',
                radioBtn: 'traveller',
                travellers: [],
                regions: [],
                subregions: [],
                selectedList: [],
                tableInfo: [],
              }
            ),
            o = Object(c.a)(a, 2),
            s = o[0],
            i = o[1]
          Object(n.useEffect)(function () {
            u(), m(), d()
          }, [])
          var u = (function () {
              var e = Object(h.a)(
                b.a.mark(function e() {
                  var a, n, r, o
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch(
                                'https://mern-trip-advisor.herokuapp.com/graphql',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type':
                                      'application/json; charset=utf-8',
                                    Accept: 'application/json',
                                  },
                                  body: JSON.stringify({
                                    query: '{ advisory }',
                                  }),
                                }
                              )
                            )
                          case 3:
                            return (a = e.sent), (e.next = 6), a.json()
                          case 6:
                            ;(n = e.sent),
                              (r = n.data),
                              [],
                              (o = r.advisory),
                              i({ selectedList: o, travellers: o }),
                              t('found '.concat(o.length, ' travellers')),
                              (e.next = 18)
                            break
                          case 14:
                            ;(e.prev = 14),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              i({
                                msg: 'Problem loading server data - '.concat(
                                  e.t0.message
                                ),
                              })
                          case 18:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 14]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            m = (function () {
              var e = Object(h.a)(
                b.a.mark(function e() {
                  var t, a, n, r
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch(
                                'https://mern-trip-advisor.herokuapp.com/graphql',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type':
                                      'application/json; charset=utf-8',
                                    Accept: 'application/json',
                                  },
                                  body: JSON.stringify({
                                    query: '{ regions }',
                                  }),
                                }
                              )
                            )
                          case 3:
                            return (t = e.sent), (e.next = 6), t.json()
                          case 6:
                            ;(a = e.sent),
                              (n = a.data),
                              [],
                              (r = n.regions),
                              i({ regions: r }),
                              (e.next = 17)
                            break
                          case 13:
                            ;(e.prev = 13),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              i({
                                msg: 'Problem loading server data - '.concat(
                                  e.t0.message
                                ),
                              })
                          case 17:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            d = (function () {
              var e = Object(h.a)(
                b.a.mark(function e() {
                  var t, a, n, r
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch(
                                'https://mern-trip-advisor.herokuapp.com/graphql',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type':
                                      'application/json; charset=utf-8',
                                    Accept: 'application/json',
                                  },
                                  body: JSON.stringify({
                                    query: '{ subregions }',
                                  }),
                                }
                              )
                            )
                          case 3:
                            return (t = e.sent), (e.next = 6), t.json()
                          case 6:
                            ;(a = e.sent),
                              (n = a.data),
                              [],
                              (r = n.subregions),
                              i({ subregions: r }),
                              (e.next = 17)
                            break
                          case 13:
                            ;(e.prev = 13),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              i({
                                msg: 'Problem loading server data - '.concat(
                                  e.t0.message
                                ),
                              })
                          case 17:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            f = (function () {
              var e = Object(h.a)(
                b.a.mark(function e(t, a) {
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null === a) {
                            e.next = 4
                            break
                          }
                          return i((s.selectedComplete = a)), (e.next = 4), O()
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function (t, a) {
                return e.apply(this, arguments)
              }
            })(),
            O = (function () {
              var e = Object(h.a)(
                b.a.mark(function e() {
                  var a, n, r, o, c
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(e.prev = 0),
                              (a = ''),
                              (e.t0 = s.radioBtn),
                              (e.next =
                                'traveller' === e.t0
                                  ? 5
                                  : 'region' === e.t0
                                  ? 7
                                  : 'subregion' === e.t0
                                  ? 9
                                  : 11)
                            break
                          case 5:
                            return (
                              (a = '{ nameforadvisory(user: "'.concat(
                                s.selectedComplete,
                                '"){user, name, text, date} }'
                              )),
                              e.abrupt('break', 12)
                            )
                          case 7:
                            return (
                              (a = '{ alertsforregion(region: "'.concat(
                                s.selectedComplete,
                                '") {country name text date region subregion} }'
                              )),
                              e.abrupt('break', 12)
                            )
                          case 9:
                            return (
                              (a = '{ alertsforsubregion(subregion: "'.concat(
                                s.selectedComplete,
                                '") {country name text date region subregion} }'
                              )),
                              e.abrupt('break', 12)
                            )
                          case 11:
                            return e.abrupt('break', 12)
                          case 12:
                            return (
                              (e.next = 14),
                              fetch(
                                'https://mern-trip-advisor.herokuapp.com/graphql',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type':
                                      'application/json; charset=utf-8',
                                    Accept: 'application/json',
                                  },
                                  body: JSON.stringify({ query: a }),
                                }
                              )
                            )
                          case 14:
                            return (n = e.sent), (e.next = 17), n.json()
                          case 17:
                            ;(r = e.sent),
                              (o = r.data),
                              (c = []),
                              (e.t1 = s.radioBtn),
                              (e.next =
                                'traveller' === e.t1
                                  ? 23
                                  : 'region' === e.t1
                                  ? 25
                                  : 'subregion' === e.t1
                                  ? 27
                                  : 29)
                            break
                          case 23:
                            return (
                              (c = o.nameforadvisory), e.abrupt('break', 30)
                            )
                          case 25:
                            return (
                              (c = o.alertsforregion), e.abrupt('break', 30)
                            )
                          case 27:
                            return (
                              (c = o.alertsforsubregion), e.abrupt('break', 30)
                            )
                          case 29:
                            return e.abrupt('break', 30)
                          case 30:
                            i({ tableInfo: c }),
                              t(
                                'found '
                                  .concat(c.length, ' alerts for ')
                                  .concat(s.selectedComplete)
                              ),
                              (e.next = 38)
                            break
                          case 34:
                            ;(e.prev = 34),
                              (e.t2 = e.catch(0)),
                              console.log(e.t2),
                              i({
                                msg: 'Problem loading server data - '.concat(
                                  e.t2.message
                                ),
                              })
                          case 38:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 34]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return r.a.createElement(
            p.a,
            { theme: g },
            r.a.createElement(
              v.a,
              { style: { color: 'brown' } },
              r.a.createElement(
                y.a,
                { style: { textAlign: 'center' } },
                r.a.createElement('img', {
                  src: w.a,
                  style: { width: '25%' },
                  alt: 'global_image',
                }),
                r.a.createElement('br', null),
                r.a.createElement(E.a, {
                  title: 'World Wide Travel Alerts',
                  color: 'inherit',
                  style: {
                    fontSize: 15,
                    textAlign: 'center',
                    paddingTop: '3vh',
                    fontWeight: 'bold',
                  },
                })
              ),
              r.a.createElement(E.a, {
                title: 'List Advisories By:',
                color: 'inherit',
                style: { textAlign: 'center', fontSize: '2em' },
              }),
              r.a.createElement(
                y.a,
                { style: { marginLeft: '5%', textAlign: 'center' } },
                r.a.createElement(
                  q.a,
                  { style: { width: '200%' } },
                  r.a.createElement(
                    B.a,
                    {
                      row: !0,
                      defaultValue: s.radioBtn,
                      style: { fontSize: '10', color: 'brown' },
                      name: 'radiobuttons',
                      onChange: function (e) {
                        switch (
                          (i((s.radioBtn = e.target.value)), s.radioBtn)
                        ) {
                          case 'traveller':
                            i(
                              (s.selectedList = s.travellers),
                              (s.tableInfo = [])
                            )
                            break
                          case 'region':
                            i((s.selectedList = s.regions), (s.tableInfo = []))
                            break
                          case 'subregion':
                            i(
                              (s.selectedList = s.subregions),
                              (s.tableInfo = [])
                            )
                            break
                          default:
                            i((s.selectedList = []), (s.tableInfo = []))
                        }
                        t(
                          'found '
                            .concat(s.selectedList.length, ' ')
                            .concat(s.radioBtn, 's')
                        )
                      },
                    },
                    r.a.createElement(P.a, {
                      value: 'traveller',
                      control: r.a.createElement(R.a, { color: 'primary' }),
                      label: 'Traveller',
                    }),
                    r.a.createElement(P.a, {
                      value: 'region',
                      control: r.a.createElement(R.a, { color: 'primary' }),
                      label: 'Region',
                    }),
                    r.a.createElement(P.a, {
                      value: 'subregion',
                      control: r.a.createElement(R.a, { color: 'primary' }),
                      label: 'Subregion',
                    })
                  )
                ),
                r.a.createElement('br', null),
                r.a.createElement(W.a, {
                  id: 'dataSelected',
                  value: '',
                  options: s.selectedList.map(function (e) {
                    return e
                  }),
                  getOptionLabel: function (e) {
                    return e
                  },
                  style: { marginTop: '5%', width: 320 },
                  onChange: f,
                  renderInput: function (e) {
                    return r.a.createElement(
                      I.a,
                      Object.assign({}, e, {
                        label: s.radioBtn,
                        variant: 'outlined',
                        fullWidth: !0,
                      })
                    )
                  },
                }),
                s.tableInfo.length > 0 &&
                  r.a.createElement(
                    D.a,
                    {
                      component: z.a,
                      style: { marginTop: '5%', marginRight: '3%' },
                    },
                    r.a.createElement(
                      x.a,
                      { stickyHeader: !0 },
                      r.a.createElement(
                        J.a,
                        null,
                        r.a.createElement(
                          k.a,
                          null,
                          r.a.createElement(
                            j.a,
                            {
                              style: {
                                color: 'brown',
                                fontSize: 18,
                                fontWeight: 'bold',
                              },
                            },
                            'Country'
                          ),
                          r.a.createElement(
                            j.a,
                            {
                              align: 'left',
                              style: {
                                color: 'brown',
                                fontSize: 18,
                                fontWeight: 'bold',
                              },
                            },
                            'Alert Information'
                          )
                        )
                      ),
                      r.a.createElement(
                        S.a,
                        null,
                        s.tableInfo.map(function (e, t) {
                          return r.a.createElement(
                            k.a,
                            { key: t },
                            r.a.createElement(
                              j.a,
                              {
                                style: {
                                  color: 'brown',
                                  fontSize: 15,
                                  fontWeight: 'bold',
                                },
                                component: 'th',
                              },
                              e.name
                            ),
                            r.a.createElement(
                              j.a,
                              {
                                style: {
                                  color: 'brown',
                                  fontSize: 15,
                                  fontWeight: 'bold',
                                },
                                component: 'td',
                              },
                              e.text,
                              r.a.createElement('br', null),
                              e.date
                            )
                          )
                        })
                      )
                    )
                  )
              )
            )
          )
        },
        H = a(154),
        V = a(155),
        _ = a(149),
        Y = a(80),
        F = a(162),
        Z = a(160),
        $ = function () {
          var e = Object(n.useReducer)(
              function (e, t) {
                return Object(l.a)(Object(l.a)({}, e), t)
              },
              { snackbarMsg: '', contactServer: !1 }
            ),
            t = Object(c.a)(e, 2),
            a = t[0],
            o = t[1],
            u = Object(n.useState)(null),
            d = Object(c.a)(u, 2),
            f = d[0],
            b = d[1],
            h = function () {
              b(null)
            },
            v = function (e) {
              o({ snackbarMsg: e, contactServer: !0 })
            }
          return r.a.createElement(
            p.a,
            { theme: g },
            r.a.createElement(
              H.a,
              { position: 'static' },
              r.a.createElement(
                V.a,
                null,
                r.a.createElement(
                  T.a,
                  { variant: 'h6', color: 'inherit' },
                  'TRIP ADVISOR - 2021'
                ),
                r.a.createElement(
                  _.a,
                  {
                    onClick: function (e) {
                      b(e.currentTarget)
                    },
                    color: 'inherit',
                    style: { marginLeft: 'auto', paddingRight: '1vh' },
                  },
                  r.a.createElement(m.a, null)
                ),
                r.a.createElement(
                  Y.a,
                  {
                    id: 'casestudy-menu',
                    anchorEl: f,
                    open: Boolean(f),
                    onClose: h,
                  },
                  r.a.createElement(
                    F.a,
                    { component: s.b, to: '/home', onClick: h },
                    'Home'
                  ),
                  r.a.createElement(
                    F.a,
                    { component: s.b, to: '/alerts', onClick: h },
                    'Reset Alerts'
                  ),
                  r.a.createElement(
                    F.a,
                    { component: s.b, to: '/addadvisory', onClick: h },
                    'Add Advisory'
                  ),
                  r.a.createElement(
                    F.a,
                    { component: s.b, to: '/listadvisory', onClick: h },
                    'List Advisories'
                  )
                )
              )
            ),
            r.a.createElement(
              'div',
              null,
              r.a.createElement(i.b, {
                exact: !0,
                path: '/',
                render: function () {
                  return r.a.createElement(i.a, { to: '/home' })
                },
              }),
              r.a.createElement(i.b, {
                path: '/alerts',
                render: function () {
                  return r.a.createElement(A, { props: v })
                },
              }),
              r.a.createElement(i.b, {
                path: '/addadvisory',
                render: function () {
                  return r.a.createElement(M, { props: v })
                },
              }),
              r.a.createElement(i.b, {
                path: '/listadvisory',
                render: function () {
                  return r.a.createElement(N, { props: v })
                },
              }),
              r.a.createElement(i.b, { path: '/home', component: C })
            ),
            r.a.createElement(Z.a, {
              open: a.contactServer,
              message: a.snackbarMsg,
              autoHideDuration: 2e3,
              onClose: function () {
                o({ contactServer: !1 })
              },
            })
          )
        }
      Object(o.render)(
        r.a.createElement(s.a, null, r.a.createElement($, null)),
        document.querySelector('#root')
      )
    },
    29: function (e, t, a) {
      e.exports = a.p + 'static/media/worldwide.9e5d399c.png'
    },
    62: function (e, t, a) {},
    94: function (e, t, a) {
      e.exports = a(106)
    },
  },
  [[94, 1, 2]],
])
//# sourceMappingURL=main.eb256e56.chunk.js.map
