'use strict';

import pathfinding from 'pathfinding';

/**
 * A wrapper for https://github.com/qiao/PathFinding.js, suitable for use
 * within a Flux Code Block.
 *
 * To build this bundle yourself, see ps://github.com/flux-labs/pathfinding.
 *
 * @author Eric Nguyen <eric@flux.io>
 * @version 0.0.1
 */
function run(startX, startY, endX, endY, grid) {
	var finder = new pathfinding.AStarFinder();
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
