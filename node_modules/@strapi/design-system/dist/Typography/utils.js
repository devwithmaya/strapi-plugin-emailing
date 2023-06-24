import { SIGMA as e, PI as s, OMEGA as t, EPSILON as o, DELTA as l, BETA as f, ALPHA as r } from "./constants.js";
const $ = ({ ellipsis: n = !1 }) => n && `
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `, a = ({ variant: n = t, theme: i }) => {
  switch (n) {
    case r:
      return `
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;
    case f:
      return `
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;
    case l:
      return `
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;
    case o:
      return `
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;
    case t:
      return `
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;
    case s:
      return `
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;
    case e:
      return `
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;
    default:
      return `
        font-size: ${i.fontSizes[2]};
      `;
  }
}, z = ({ theme: n, textColor: i }) => n.colors[i || "neutral800"];
export {
  $ as ellipsisStyle,
  z as handleColor,
  a as variantStyle
};
