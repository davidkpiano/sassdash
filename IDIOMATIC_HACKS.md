

### Discarded Arguments

Prevents Sass from throwing an error when more than the expected number of arguments are present by appending `$args...` to the arguments.

```JS
// JavaScript
function isEven(value) {
    return value % 2 == 0;
}

isEven(4, 4, [1, 2, 3, 4, 5]); // ignores other arguments
```

```SCSS
// SCSS
@function is-even($value, $args...) {
    @return $value % 2 == 0;
}

$foo: call(is-even, 4, 4, 1 2 3 4 5); // ignores other arguments
```

### List Traversal

To maintain integrity with lodash.js, traversal is mainly done with a `@while` loop. This should be refactored in the future using idiomatic SCSS `@for` or `@each` loops, unless **break conditions** are necessary.

- `var index = -1` => `$index: 1`
- `var length = array.length` => `$length: length($list)`
- `++index` => `$index: $index + 1`

```JS
// JavaScript
var index = -1,
    length = array.length;

while (++index < length) {
  // access array[index]
}
```

```SCSS
// SCSS
$index: 1;
$length: length($list);

@while ($index <= $length) {
  // access nth($list, $index)
  $index: $index + 1;
}
```