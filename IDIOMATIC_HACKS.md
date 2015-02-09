

**Discarded Arguments**

Prevents Sass from throwing an error when more than the expected number of arguments are present.

```JS
function isEven(value) {
    return value % 2 == 0;
}

isEven(4, 4, [1, 2, 3, 4, 5]); // ignores other arguments
```

```SCSS
@function is-even($value, $args...) {
    @return $value % 2 == 0;
}

$foo: call(is-even, 4, 4, 1 2 3 4 5); // ignores other arguments
```