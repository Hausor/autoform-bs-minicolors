hausor:autoform-bs-minicolors
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "bootstrap-minicolors", which renders an input using the [jquery-minicolors](http://labs.abeautifulsite.net/jquery-minicolors/) plugin.

## Prerequisites

Bootstrap and the plugin library must be installed separately.

In a Meteor app directory, enter:

```
$ meteor add twbs:bootstrap
$ meteor add hausor:autoform-bs-minicolors
$ meteor add aldeed:autoform
```

## Installation

In a Meteor app directory, enter:

```
$ meteor add hausor:autoform-bs-minicolors
```

## Usage

Specify "bootstrap-minicolors" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  date: {
    type: Date,
    autoform: {
      type: "bootstrap-minicolors"
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```js
{{> afQuickField name="typeTest" type="bootstrap-minicolors"}}

{{> afFieldInput name="typeTest" type="bootstrap-minicolors"}}
```

## Automatic Type Conversions

This input type is intended to be used with `type: String` schema keys.

## Demo

[Live](http://autoform-bs-minicolors.meteor.com)

## Test

To see tests just run:

    meteor test-packages --driver-package respondly:test-reporter hausor:autoform-bs-minicolors
    
## Origin

This repo is a part of [hausor.com](http://hausor.com) - meteorjs app for buildind and sharing floor plans.

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.
