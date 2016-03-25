/**
 * Tests for pathfinding wrapper.
 *
 * @author Eric Nguyen <eric@flux.io>
 * @version 0.0.1
 */

'use strict';

import test from 'tape';

import pathfinding from 'pathfinding';

test('Path Finding imports work.', function(t) {

  t.equal(typeof pathfinding, 'object',
      'pathfinding should export an object.');

  var finder = new pathfinding.AStarFinder();

  var grid = new pathfinding.Grid(
      5, 6,
      [[0, 0, 0, 0, 0],
       [1, 0, 1, 1, 0],
       [1, 0, 1, 0, 0],
       [0, 1, 0, 0, 0],
       [1, 0, 1, 1, 0],
       [0, 0, 1, 0, 0]]);

  var path = finder.findPath(1, 1, 4, 4, grid);

  t.deepEqual(
      path,
      [[ 1, 1 ],
       [ 1, 0 ],
       [ 2, 0 ],
       [ 3, 0 ],
       [ 4, 0 ],
       [ 4, 1 ],
       [ 4, 2 ],
       [ 4, 3 ],
       [ 4, 4 ]],
      'path finder should find the correct path.');

  t.end();
});
