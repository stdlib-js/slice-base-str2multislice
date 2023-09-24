/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var trim = require( '@stdlib/string-base-trim' );
var str2slice = require( '@stdlib/slice-base-str2slice' );
var MultiSlice = require( '@stdlib/slice-multi' );


// VARIABLES //

var PREFIX = 'MultiSlice(';

/**
* Regular expression matching the argument separator.
*
* @private
* @name RE_SEP
* @type {RegExp}
*/
var RE_SEP = /\s*,\s*/;

/**
* Regular expression matching an integer value.
*
* @private
* @name RE_INTEGER
* @type {RegExp}
*/
var RE_INTEGER = /^-?[0-9]+$/;


// MAIN //

/**
* Parses a string-serialized MultiSlice object.
*
* ## Notes
*
* -   The function returns `null` if provided an invalid string.
*
* @param {string} str - input string
* @returns {(MultiSlice|null)} MultiSlice object (or null)
*
* @example
* var s = str2multislice( 'MultiSlice(null,null,null)' );
* // returns <MultiSlice>
*
* var v = s.data;
* // returns [ null, null, null ]
*
* @example
* var s = str2multislice( 'MultiSlice(10,Slice(0,10,1),null)' );
* // returns <MultiSlice>
*
* var v = s.data;
* // returns [ 10, <Slice>, null ]
*
* @example
* var s = str2multislice( 'MultiSlice(foo,bar)' );
* // returns null
*/
function str2multislice( str ) {
	var args;
	var arg;
	var n;
	var v;
	var i;
	if ( str.substring( 0, PREFIX.length ) !== PREFIX ) {
		return null;
	}
	n = str.length - 1;
	if ( str[ n ] !== ')' ) {
		return null;
	}
	str = trim( str.substring( PREFIX.length, n ) );
	str = str.split( RE_SEP );
	n = str.length;

	// Check for an empty slice (i.e., `MultiSlice()`)...
	if ( n === 1 && str[ 0 ] === '' ) {
		return new MultiSlice();
	}
	args = [];
	for ( i = 0; i < n; i++ ) {
		v = str[ i ];
		if ( v[ 0 ] === 'S' ) {
			v = str.slice( i, i+3 ).join( ',' );
			arg = str2slice( v );
			if ( arg === null ) {
				return null;
			}
			i += 2; // skip over the `Slice(...)` arguments
		} else if ( v === 'null' ) {
			arg = null;
		} else if ( RE_INTEGER.test( v ) ) {
			arg = parseInt( v, 10 );
		} else {
			return null;
		}
		args.push( arg );
	}
	return MultiSlice.apply( null, args );
}


// EXPORTS //

module.exports = str2multislice;
