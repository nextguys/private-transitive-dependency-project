import { component } from 'lively.morphic/components/core.js';
import { pt } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';

export const transitiveComponent = component({
  extent: pt(100, 100),
  fill: Color.red
});
