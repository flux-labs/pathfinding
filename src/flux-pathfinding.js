'use strict';

import pathfinding from 'pathfinding';

/**
 * A wrapper for https://github.com/qiao/PathFinding.js, suitable for use
 * within a Flux Code Block.
 *
 * TODO(eric): Uses A*. Enable other pathfinding algorithms.
 *
 * To build this bundle yourself, see ps://github.com/flux-labs/pathfinding.
 *
 * @author Eric Nguyen <eric@flux.io>
 * @version 0.0.1
 *
 * @param {Number} startX x-position of the starting point on the grid.
 * @param {Number} startY y-position of the starting point on the grid.
 * @param {Number} endX x-position of the ending point on the grid.
 * @param {Number} endY y-position of the ending point on the grid.
 * @param {Array.<Array>} grid A 2d array of 0's and 1's. 0 represents an
 *     unobstructed position. 1 represents an obstructed position.
 *
 * @return {Object} A return object with a "path" property containing an array of
 *      unit coordinates indicating the shortest path found.
 */
function run(startX, startY, endX, endY, grid) {
  var finder = new pathfinding.AStarFinder({
    allowDiagonal: true
  });
  var path = finder.findPath(
      startX, startY, endX, endY,
      new pathfinding.Grid(grid[0].length, grid.length, grid));

  return {
    path: path
  };
}

// Note: This is currently the only accepted export syntax for ES6 code blocks.
// E.g. exporting the run function above directly causes rollup to transpile to
// a module export syntax that our NBWs do not recognize.
export default {
  run: run
}
