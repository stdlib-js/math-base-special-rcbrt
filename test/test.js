/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var rcbrt = require( './../lib' );


// FIXTURES //

var hugePositive = require( './fixtures/julia/huge_positive.json' );
var veryLargePositive = require( './fixtures/julia/very_large_positive.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var smaller = require( './fixtures/julia/smaller.json' );
var tinyPositive = require( './fixtures/julia/tiny_positive.json' );
var subnormal = require( './fixtures/julia/subnormal.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var veryLargeNegative = require( './fixtures/julia/very_large_negative.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var tinyNegative = require( './fixtures/julia/tiny_negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rcbrt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[50,500]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = veryLargePositive.expected;
	x = veryLargePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[20,50]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largePositive.expected;
	x = largePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[3,20]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[0.8,3]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[0.0,0.8]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smaller.expected;
	x = smaller.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[1e-300,1e-308]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = tinyPositive.expected;
	x = tinyPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of subnormal `x`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = subnormal.expected;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` (huge positive)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = hugePositive.expected;
	x = hugePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` (huge negative)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = hugeNegative.expected;
	x = hugeNegative.x;

	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-50,-500]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = veryLargeNegative.expected;
	x = veryLargeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-20,-50]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largeNegative.expected;
	x = largeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-20,-3]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumNegative.expected;
	x = mediumNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-3,-0.8]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallNegative.expected;
	x = smallNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-0.8,0.8]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smaller.expected;
	x = smaller.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-1e-300,-1e-308]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = tinyNegative.expected;
	x = tinyNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrt( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = rcbrt( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0.0` if provided `+infinity`', function test( t ) {
	var v = rcbrt( PINF );
	t.equal( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+0`', function test( t ) {
	var v = rcbrt( +0.0 );
	t.equal( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-0`', function test( t ) {
	var v = rcbrt( -0.0 );
	t.equal( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0.0` if provided `-infinity`', function test( t ) {
	var v = rcbrt( NINF );
	t.equal( v, 0.0, 'returns expected value' );
	t.end();
});
