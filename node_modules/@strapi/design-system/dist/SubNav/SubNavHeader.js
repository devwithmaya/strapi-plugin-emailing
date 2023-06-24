import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { useState as w, useRef as f, useEffect as D } from "react";
import { Search as I } from "@strapi/icons";
import r from "prop-types";
import K from "styled-components";
import { KeyboardKeys as P } from "../helpers/keyboardKeys.js";
import { useId as j } from "../hooks/useId.js";
import { usePrevious as k } from "../hooks/usePrevious.js";
import { SearchForm as E } from "../Searchbar/SearchForm.js";
import { Searchbar as O } from "../Searchbar/Searchbar.js";
import { Divider as F } from "../Divider/Divider.js";
import { Box as a } from "../Box/Box.js";
import { Flex as $ } from "../Flex/Flex.js";
import { Typography as q } from "../Typography/Typography.js";
import { IconButton as z } from "../IconButton/IconButton.js";
const m = K(F)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: i }) => i.colors.neutral200};
`, u = ({ as: i, label: h, searchLabel: l, searchable: g, onChange: b, value: S, onClear: y, onSubmit: C, id: v }) => {
  const [n, s] = w(!1), p = k(n), B = j(v), t = f(), c = f();
  D(() => {
    n && t.current && t.current.focus(), p && !n && c.current && c.current.focus();
  }, [n, p]);
  const T = () => {
    s((o) => !o);
  }, x = (o) => {
    y(o), t.current.focus();
  }, R = (o) => {
    o.relatedTarget?.id !== B && s(!1);
  }, L = (o) => {
    o.key === P.ESCAPE && s(!1);
  };
  return n ? /* @__PURE__ */ d(a, { paddingLeft: 4, paddingTop: 5, paddingBottom: 2, paddingRight: 4, children: [
    /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
      O,
      {
        name: "searchbar",
        value: S,
        onChange: b,
        placeholder: "e.g: strapi-plugin-abcd",
        onKeyDown: L,
        ref: t,
        onBlur: R,
        onClear: x,
        onSubmit: C,
        clearLabel: "Clear",
        size: "S",
        children: l
      }
    ) }),
    /* @__PURE__ */ e(a, { paddingLeft: 2, paddingTop: 4, children: /* @__PURE__ */ e(m, {}) })
  ] }) : /* @__PURE__ */ d(a, { paddingLeft: 6, paddingTop: 6, paddingBottom: 2, paddingRight: 4, children: [
    /* @__PURE__ */ d($, { justifyContent: "space-between", alignItems: "flex-start", children: [
      /* @__PURE__ */ e(q, { variant: "beta", as: i, children: h }),
      g && /* @__PURE__ */ e(z, { ref: c, onClick: T, label: l, icon: /* @__PURE__ */ e(I, {}) })
    ] }),
    /* @__PURE__ */ e(a, { paddingTop: 4, children: /* @__PURE__ */ e(m, {}) })
  ] });
};
u.defaultProps = {
  as: "h2",
  searchable: !1,
  onChange() {
  },
  onClear() {
  },
  onSubmit() {
  },
  value: "",
  searchLabel: "",
  id: void 0
};
u.propTypes = {
  as: r.string,
  id: r.string,
  label: r.string.isRequired,
  onChange: r.func,
  onClear: r.func,
  onSubmit: r.func,
  searchLabel: r.string,
  searchable: r.bool,
  value: r.string
};
export {
  u as SubNavHeader
};
