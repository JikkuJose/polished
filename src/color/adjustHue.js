// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue('#448'),
 *   background: adjustHue('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue('#448')};
 *   background: ${adjustHue('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#5b4488";
 *   background: "rgba(136,100,205,0.7)";
 * }
 */
function adjustHue(degree: number, color: string): string {
  const hslColor = parseToHsl(color)
  return toColorString({
    ...hslColor,
    hue: (hslColor.hue + degree) % 360,
  })
}

export default adjustHue
