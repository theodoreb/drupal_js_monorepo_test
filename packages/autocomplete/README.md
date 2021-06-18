# @drupal/a11y_autocomplete

Accessible autocomplete widget.

## Documentation and examples

### Basic use

Ensure the assets are included in the page

```
<link rel="stylesheet" href="[path]/a11y.autocomplete.css" />
<script src="[path]/a11y.autocomplete.js"></script>
```

Initialize

```
const inputGettingAutcomplete = document.querySelector('#an-input')'
const autocompleteInstance = A11yAutocomplete(inputGettingAutcomplete, options);
```

## Options

### Setting Options

Options can be set in three ways, the listed from highest precedence to lowest:

- An object literal in the input's `data-autocomplete` attribute with the format
  `{camelCaseOptionName: value}` such as `<input data-autocomplete="{maxItems: 10}" />"`
- `data-autocomplete-(hyphen delimited option name)` such as
  `<input data-autocomplete-max-items="10" />`
- Via the options argument when initializing a new instance, such as
  `A11yAutocomplete(inputGettingAutcomplete, {maxItems: 10})`

### Required options

Either the `list` or `path` option must have a value for the Autocomplete to function.
`list` is an array of predetermined items, and `path` is url that provides results
based on the input value.

If both `list` and `path` have values, `list` will take precedence. Without one
of these values set, the input will still initialize, but will have no values to return when queried.

### Options Documentation

#### `allowRepeatValues` (default: `null`)

type: `Boolean|null`
If `true`, autocomplete results can include items already included in the field.

#### `autoFocus` (default: `false`)

type: `Boolean`
Set to `true`, to focus the first result as soon as a list of results becomes visible

#### `separatorChar` (default: `','`)

type: `string`
The character used to separate multiple values in the same form

#### `firstCharacterDenylist` (default: `','`)

type: `string`
Any characters in this string will not be incorporated in a search as the first
character of a query. Typically, this string should at least include the value of `separatorChar`.

#### `minChars` (default: `1`)

type: `Number`
Minimum number of characters that must be typed before displaying autocomplete results.

#### `maxItems` (default: `20`)

type: `Number`
The maximum number of results displayed.

#### `sort` (default: `true`)

type: `Boolean`
When `true` the results are sorted prior to display. The default sorting behavior
is alphabetical, and can be customized by overriding `sortSuggestions()`.

#### `path` (default: null)

type: `null|string`
This should be a URL that returns search results. By default, when an autocomplete
search begins it queries `(the value of 'path')?q=(value typed in the autocomplete input)`.
How the autocomplete interacts with `path` can be customized by overriding `queryUrl()`

#### `list` (default: `[]`)

type: `Array`
A predefined list of autocomplete options. This can be an array of strings or objects with
`label:` and `value:`properties. If this array is not empty, this property will take
precedence over searching the remote resource specified in `path`.

#### `displayLabels` (default: `true`)

type: `Boolean`
When `true`, and when query results are provided as an object with `label:` and `value:` properties, the suggestion list
will display the item `label:`, but if selected, the input will have the value set in `value:`

#### `disabled` (default: `false`)

type: `Boolean`
When `true`, input events on the input will not trigger searches.

#### `cardinality` (default: `1`)

type: `Number`
The number of values the input can have. Set to `-1` for unlimited values.

#### `inputClass` (default: `''`)

type: `string`
Additional classes that can be added to the autocomplete input.

#### `loadingClass` (default: `''`)

type: `string`
Additional classes that can be added to the autocomplete input while waiting for
a query to return results

#### `ulClass` (default: `''`)

type: `string`
Additional classes that can be added to the results list container `<ul>`

#### `itemClass` (default: `''`)

type: `string`
Additional classes that can be added to each `<li>` item in the results list.

#### `createLiveRegion` (default: `true`)

type: `Boolean`
When `true`, initialization includes adding a live region specifically that will
convey autocomplete activity to assistive technology. This is typically only set
to `false` if a site has a centralized live region where announcements to
assitive technology should be directed to.

#### `listZindex` (default: `1`)

type: `Number`
The CSS z-index of the results list.

#### `searchDelay` (default: `300`)

type: `Number`
Time to in milliseconds after input activity before an autocomplete search is
triggered.

#### `inputAssistiveHint` (`'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.'`)

type: `string`
Message conveyed to assistive technology when the input is focused

#### `minCharAssistiveHint` (default `'Type @count or more characters for results'`)

type: `string`
When `minChar` is greater than one, this is appended to `messages.inputAssistiveHint`
so users are aware how many characters are needed to trigger a search. `@count` is
replaced with the value of `minChar`.

#### `noResultsAssistiveHint` (default: `'No results found'`)

type: `string`
Message conveyed to assistive technology when the query returns no results.

#### `moreThanMaxResultsAssistiveHint` (default: `'There are at least @count results available. Type additional characters to refine your search.'`)

type: `string`
Message conveyed to assistive technology when the number of results exceeds the
maximum amount set via the `maxItems` option. `@count` is replaced with the
value of `maxItems`.

#### `someResultsAssistiveHint` (default: `'There are @count results available.'`)

type: `string`
Message conveyed to assistive technology when the number of results exceeds one
and does not exceed the maximum amount set via the `maxItems` option. `@count` is
replaced with the number of results returned.

#### `oneResultAssistiveHint` (default: `'There is one result available.'`)

type: `string`
Message conveyed to assistive technology when there is one result.
