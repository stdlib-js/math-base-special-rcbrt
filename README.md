<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Reciprocal Cube Root

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the reciprocal of the principal [cube root][cube-root] of a double-precision floating-point number.

<section class="intro">

The reciprocal of the principal [cube root][cube-root] is defined as

<!-- <equation class="equation" label="eq:reciprocal_cube_root" align="center" raw="\operatorname{rcbrt}(x)=\frac{1}{\sqrt[3]{x}}" alt="Reciprocal cube root"> -->

<div class="equation" align="center" data-raw-text="\operatorname{rcbrt}(x)=\frac{1}{\sqrt[3]{x}}" data-equation="eq:reciprocal_cube_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b569df0e375cb7d535781320bf5e2299a0fbff25/lib/node_modules/@stdlib/math/base/special/rcbrt/docs/img/equation_reciprocal_cube_root.svg" alt="Reciprocal cube root">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import rcbrt from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-rcbrt@esm/index.mjs';
```

#### rcbrt( x )

Computes the reciprocal (inverse) cube root of a double-precision floating-point number.

```javascript
var v = rcbrt( 1.0 );
// returns 1.0

v = rcbrt( 8.0 );
// returns 0.5

v = rcbrt( 1000.0 );
// returns 0.1

v = rcbrt( 0.0 );
// returns Infinity

v = rcbrt( NaN );
// returns NaN

v = rcbrt( Infinity );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import rcbrt from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-rcbrt@esm/index.mjs';

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'rcbrt(%d) = %d', x, rcbrt( x ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cbrt`][@stdlib/math/base/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the principal cube root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-rcbrt.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-rcbrt

[test-image]: https://github.com/stdlib-js/math-base-special-rcbrt/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/math-base-special-rcbrt/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-rcbrt/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-rcbrt?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-rcbrt.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-rcbrt/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-rcbrt/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-rcbrt/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-rcbrt/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-rcbrt/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-rcbrt/main/LICENSE

[cube-root]: https://en.wikipedia.org/wiki/Cube_root

<!-- <related-links> -->

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math-base-special-cbrt/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
