# sassdash

[![Join the chat at https://gitter.im/davidkpiano/sassdash](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/davidkpiano/sassdash?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

It's lodash for Sass. Sassdash.

**NOTE: This is still a work in progress!**

## Getting Started
This library contains most of the (Sass-implementable) functions from [lodash](http://lodash.com).

1. [`git clone https://github.com/davidkpiano/sassdash.git sassdash`](https://github.com/davidkpiano/sassdash.git) inside your project (preferably in a `vendors/` directory)
2. `@import 'path/to/sassdash'` in your project
3. Use your new powers wisely.

## Running Tests
**WARNING:** There are *over 400* unit tests, and more to come. Running them all takes between 30 seconds and 2 minutes.

1. `cd path/to/sassdash`
2. [`gem install true`](https://github.com/ericam/true)
3. `true-cli tests/true-tests.scss`
