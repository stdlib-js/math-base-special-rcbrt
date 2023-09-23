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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Reciprocal Cube Root

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the reciprocal of the principal [cube root][cube-root] of a double-precision floating-point number.

<section class="intro">

The reciprocal of the principal [cube root][cube-root] is defined as

<!-- <equation class="equation" label="eq:reciprocal_cube_root" align="center" raw="\operatorname{rcbrt}(x)=\frac{1}{\sqrt[3]{x}}" alt="Reciprocal cube root"> -->

```math
\mathop{\mathrm{rcbrt}}(x)=\frac{1}{\sqrt[3]{x}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{rcbrt}(x)=\frac{1}{\sqrt[3]{x}}" data-equation="eq:reciprocal_cube_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b569df0e375cb7d535781320bf5e2299a0fbff25/lib/node_modules/@stdlib/math/base/special/rcbrt/docs/img/equation_reciprocal_cube_root.svg" alt="Reciprocal cube root">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-rcbrt
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var rcbrt = require( '@stdlib/math-base-special-rcbrt' );
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

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var rcbrt = require( '@stdlib/math-base-special-rcbrt' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'rcbrt(%d) = %d', x, rcbrt( x ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/rcbrt.h"
```

#### stdlib_base_rcbrt( x )

Computes the reciprocal (inverse) [cube root][cube-root] of a double-precision floating-point number.

```c
double y = stdlib_base_rcbrt( 8.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_rcbrt( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/rcbrt.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, 9.0, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_rcbrt( x[ i ] );
        printf( "rcbrt(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cbrt`][@stdlib/math/base/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the principal cube root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-rcbrt.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-rcbrt

[test-image]: https://github.com/stdlib-js/math-base-special-rcbrt/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-rcbrt/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-rcbrt/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-rcbrt?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-rcbrt.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-rcbrt/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

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

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math-base-special-cbrt

<!-- </related-links> -->

</section>

<!-- /.links -->
