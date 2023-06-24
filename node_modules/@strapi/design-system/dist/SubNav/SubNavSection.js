import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { useState as u, Children as f } from "react";
import r from "prop-types";
import b from "styled-components";
import { SubNavSectionLabel as v } from "./SubNavSectionLabel.js";
import { useId as x } from "../hooks/useId.js";
import { Box as d } from "../Box/Box.js";
import { Flex as C } from "../Flex/Flex.js";
import { Badge as S } from "../Badge/Badge.js";
const k = b(d)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: i }) => i.colors.neutral500};
    }
  }
`, p = ({ collapsable: i, label: s, badgeLabel: t, children: c, id: m }) => {
  const [n, h] = u(!0), l = x(m);
  return /* @__PURE__ */ a(C, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ o(k, { paddingLeft: 6, paddingTop: 1, paddingBottom: 1, paddingRight: 4, children: /* @__PURE__ */ a(d, { position: "relative", paddingRight: t ? 6 : 0, children: [
      /* @__PURE__ */ o(
        v,
        {
          onClick: () => {
            h((e) => !e);
          },
          ariaExpanded: n,
          ariaControls: l,
          collapsable: i,
          label: s
        }
      ),
      t && /* @__PURE__ */ o(
        S,
        {
          backgroundColor: "neutral150",
          textColor: "neutral600",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          children: t
        }
      )
    ] }) }),
    (!i || n) && /* @__PURE__ */ o("ol", { id: l, children: f.map(c, (e, g) => /* @__PURE__ */ o("li", { children: e }, g)) })
  ] });
};
p.defaultProps = {
  badgeLabel: null,
  children: void 0,
  collapsable: !1,
  id: void 0
};
p.propTypes = {
  badgeLabel: r.string,
  children: r.node,
  collapsable: r.bool,
  id: r.string,
  label: r.string.isRequired
};
export {
  p as SubNavSection
};
