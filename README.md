# Sassdash
**[Read the complete documentation here: davidkpiano.github.io/sassdash](http://davidkpiano.github.io/sassdash)**

![Sassdash logo](https://raw.githubusercontent.com/davidkpiano/sassdash/master/sassdash.png)

[![Join the chat at https://gitter.im/davidkpiano/sassdash](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/davidkpiano/sassdash?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

It's [lodash](http://www.lodash.com) for Sass. Sassdash.

**Why?** Developed with Sass toolkit developer in mind, Sassdash gives you nearly the full expressive power of [lodash for JavaScript](http://www.lodash.com), inside your SCSS projects. Developers can also build SCSS libraries on top of Sassdash for concepts such as advanced animation composition and timing, 3D CSS rendering, geometrical rendering, complex grid frameworks, and more.

Sassdash is a **collection of utility functions**, just like lodash. Sassdash never outputs any CSS declarations as it provides no mixins to do so (except for [`_rules`](https://davidkpiano.github.io/sassdash/sassdoc/index.html#mixin-_rules), which is pretty handy).

## Getting Started
This library contains most of the implementable functions from [lodash](http://lodash.com). [See below](#available-functions) to see which functions are included.

1. `npm install sassdash` or `bower install sassdash`
2. `@import 'path/to/sassdash'` in your project
3. Use your new powers wisely.

FYI: Neither Compass nor Eyeglass are required. Sassdash works in both Ruby Sass and Libsass (latest versions)!

## Using Sassdash
If you are familiar with lodash, Sassdash will feel very natural to you.

```scss
$maps: (
  ('name': 'barney', 'age': 36),
  ('name': 'fred', 'age': 40)
);

_pluck($maps, 'name'); // ('barney', 'fred')
```

Functions **are chainable** in Sassdash via `_(...)`, but there is **no lazy evaluation**. Results are output immediately. Since Sass does not have a natural concept of method linking, linking in Sassdash is done by having each link represent:

* The **method name** (first item)
* The **arguments** (2nd - nth items)

```scss
$foobar: ('a' 'b' 'c', 'd' 'e' 'f', 'g' 'h' 'i');

_($foobar,
  _map _join,
  _reduce _str-concat,
  _concat 'jkl',
  _join ' -- '); // 'abcdefghi -- jkl'
```

Also, just as in lodash, iteratee functions (such as those used with `_map`) are called with three arguments: `$value, $index, $collection`. Keep this in mind when passing in your functions as iteratee functions. If your function only expects the `$value` argument, you can either:

* Discard the rest of the arguments in the function definition: `@function is-even($value, $args...) { ... }`
* Wrap the function with `_ary`: `_map($list, _ary(is-even));`

However, **native Sass functions as iteratees are automatically guarded**! You can simply include them as an interatee:

```scss
$capitals: ('Tallahassee', 'Springfield', 'Austin');

$uppercase-capitals: _map($capitals, to-upper-case);
// => ('TALLAHASSEE', 'SPRINGFIELD', 'AUSTIN')
```

## Running Tests
There are *over 700* unit tests. With node-sass, they usually take under 10 seconds to run. With Ruby Sass, they may take anywhere from 1 to 2 minutes.

1. `cd path/to/sassdash`
2. [`bower install true`](https://github.com/ericam/true)
3. `true-cli tests/tests.scss`

## New Functions
Sassdash includes a number of helper functions not available in lodash, which include utility functions and implementations of native Javascript functions:

* **`char` functions** - `_char-at`, `_char-code`, `_char-code-at`
* **`number` functions** - `_parse-float` (alias `_to-number`) - similar to JavaScript `parseFloat`
* **`value` functions** - `_memo` for easy cache manipulation
* **`list` functions** - `_reverse`, `_concat`, and `_splice`
* **`string` functions** - `_str-concat` and `_join` (list to string)

\* **Example:**
```scss
$map: ('foo': ('bar': ('baz': 'quo')));
$list: (1, ('a': 2), 3);

$baz: _get($map, 'foo' 'bar' 'baz'); // => 'quo'
$something: _get($list, 2 'a'); // => 2

// You can also do this:
$baz: _get($map, 'foo.bar.baz'); // => 'quo'

$map: _set($map, 'foo' 'bar' 'test', 42);
// => ('foo': ('bar': ('baz': 'quo', 'test': 42)))

$list: _set($list, 2 'a', 42);
// => (1, ('a': 42), 3)
```

## Available lodash Functions

* :x: - Not implemented
* :clock130: - Coming soon

#### List (Array)
Sassdash | lodash
---------|-------
_chunk | _.chunk
_compact | _.compact
_difference | _.difference
_drop | _.drop
_drop-right | _.dropRight
_drop-right-while | _.dropRightWhile
_drop-while | _.dropWhile
_fill | _.fill
_find-index | _.findIndex
_find-last-index | _.findLastIndex
_first | _.first
_flatten | _.flatten
_flatten-deep | _.flattenDeep
_head | _.head → first
_index-of | _.indexOf
_initial | _.initial
_intersection | _.intersection
_last | _.last
_last-index-of | _.lastIndexOf
_object | _.object → zipObject
_pull | _.pull
:x: | _.pullAt
:x: | _.remove
_rest | _.rest
_slice | _.slice
:clock130: | _.sortedIndex
:clock130: | _.sortedLastIndex
_tail | _.tail → rest
_take | _.take
_take-right | _.takeRight
_take-right-while | _.takeRightWhile
_take-while | _.takeWhile
_union | _.union
_uniq | _.uniq
_unique | _.unique → uniq
_unzip | _.unzip
_without | _.without
_xor | _.xor
_zip | _.zip
_zip-map | _.zipObject

#### Chain
Sassdash | lodash
---------|-------
_ | _
:x: | _.chain
:x: | _.tap
:x: | _.thru

#### Collection
Sassdash | lodash
---------|-------
_all | _.all → every
_any | _.any → some
_at | _.at
_collect | _.collect → map
_contains | _.contains → includes
_count-by | _.countBy
_detect | _.detect → find
_each | _.each → forEach
_each-right | _.eachRight → forEachRight
_every | _.every
_filter | _.filter
_find | _.find
_find-last | _.findLast
_find-where | _.findWhere
_foldl | _.foldl → reduce
_foldr | _.foldr → reduceRight
_for-each | _.forEach
_for-each-right | _.forEachRight
_group-by | _.groupBy
_include | _.include → includes
_includes | _.includes
_index-by | _.indexBy
_inject | _.inject → reduce
_invoke | _.invoke
_map | _.map
_partition | _.partition
_pluck | _.pluck
_reduce | _.reduce
_reduce-right | _.reduceRight
_reject | _.reject
_sample | _.sample
_select | _.select → filter
_shuffle | _.shuffle
_size | _.size
_some | _.some
_sort-by | _.sortBy
_sort-by-all | _.sortByAll
_sort-by-order | _.sortByOrder
_where | _.where

#### Date
Sassdash | lodash
---------|-------
:x: | _.now

#### Function
Sassdash | lodash
---------|-------
_after | _.after
_ary | _.ary
_backflow | _.backflow → flowRight
_before | _.before
_bind | _.bind
:clock130: | _.bindAll
:clock130: | _.bindKey
_compose | _.compose → flowRight
:x: | _.curry
:x: | _.curryRight
:x: | _.debounce
:x: | _.defer
:x: | _.delay
_flow | _.flow
_flow-right | _.flowRight
_memoize | _.memoize
_negate | _.negate
_once | _.once
_partial | _.partial
_partial-right | _.partialRight
:clock130: | _.rearg
:clock130: | _.spread
:x: | _.throttle
:x: | _.wrap

#### Lang
Sassdash | lodash
---------|-------
:x: | _.clone
:x: | _.cloneDeep
_is-arglist | _.isArguments
_is-list | _.isArray
_is-boolean | _.isBoolean
:x: | _.isDate
:x: | _.isElement
_is-empty | _.isEmpty
_is-equal | _.isEqual
_is-error | _.isError
_is-finite | _.isFinite
_is-function | _.isFunction
_is-match | _.isMatch
:x: | _.isNaN
_is-native | _.isNative
_is-null | _.isNull
_is-number | _.isNumber
_is-map | _.isObject
_is-plain-map | _.isPlainObject
:x: | _.isRegExp
_is-string | _.isString
:x: | _.isTypedArray
:x: | _.isUndefined
_to-list | _.toArray
_to-map | _.toPlainObject

#### Math
Sassdash | lodash
---------|-------
_add | _.add
_max | _.max
_min | _.min
_sum | _.sum

#### Number
Sassdash | lodash
---------|-------
:clock130: | _.inRange
_rand | _.random

#### Object
Sassdash | lodash
---------|-------
_assign | _.assign
_create | _.create
_defaults | _.defaults
_extend | _.extend → assign
_find-key | _.findKey
_find-last-key | _.findLastKey
_for-in | _.forIn
_for-in-right | _.forInRight
_for-own | _.forOwn
_for-own-right | _.forOwnRight
_functions | _.functions
_has | _.has
_invert | _.invert
_keys | _.keys
_keys-in | _.keysIn
_map-values | _.mapValues
_merge | _.merge
_methods | _.methods → functions
_omit | _.omit
_pairs | _.pairs
_pick | _.pick
_result | _.result
:x: | _.transform
_values | _.values
_values-in | _.valuesIn

#### String
Sassdash | lodash
---------|-------
_camel-case | _.camelCase
_capitalize | _.capitalize
:x: | _.deburr
_ends-with | _.endsWith
_escape | _.escape
:x: | _.escapeRegExp
_kebab-case | _.kebabCase
_pad | _.pad
_pad-left | _.padLeft
_pad-right | _.padRight
_parse-int | _.parseInt
_repeat | _.repeat
_snake-case | _.snakeCase
_start-case | _.startCase
_starts-with | _.startsWith
:x: | _.template
_trim | _.trim
_trim-left | _.trimLeft
_trim-right | _.trimRight
_trunc | _.trunc
_unescape | _.unescape
_words | _.words

#### Utility
Sassdash | lodash
---------|-------
:x: | _.attempt
_callback | _.callback
_constant | _.constant
_identity | _.identity
_iteratee | _.iteratee → callback
_matches | _.matches
_matches-property | _.matchesProperty
:x: | _.mixin
:x: | _.noConflict
_noop | _.noop
_property | _.property
_property-of | _.propertyOf
_range | _.range
:x: | _.runInContext
_times | _.times
_unique-id | _.uniqueId
