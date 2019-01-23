# Shopgate Connect - Energy Efficiency Labels Extension

[![GitHub license](http://dmlc.github.io/img/apache2.svg)](LICENSE)
[![Build Status](https://travis-ci.org/shopgate/ext-energy-efficiency-labels.svg?branch=master)](https://travis-ci.org/shopgate/ext-energy-efficiency-labels)
[![Coverage Status](https://coveralls.io/repos/github/shopgate/ext-energy-efficiency-labels/badge.svg?branch=master)](https://coveralls.io/github/shopgate/ext-energy-efficiency-labels?branch=master)

This extension adds energy efficiency labels to a product item on product lists, cart and favorites.

## How to use it

### Extension configuration
In order to make the extension know which product property keeps the data, there must be at least one configuration set:
```json
{
  "energyClassProperty": "name-of-the-property"
}
```

### ⚠️ Extension dependency
This extension requires [Additional Product Properties Extension] (@shopgate/products-add-properties) to be deployed as well so the energy class property is available in `product.additionalProperties` field. 

Example configuration of @shopgate/products-add-properties
```json
{
  "addProperties": "name-of-the-property"
}
```

With this config, the extension would try to find an information about the energy efficiency of a product inside of this property.
The property must be exported in a regular way to Shopgate.

Supported values of this property:
```
[
  'A+++',
  'A++',
  'A+',
  'A',
  'B',
  'C',
  'D',
  'E'
]
```

## Additional configuration
There is additional configuration possible:
```json
{
  "energyLinkProperty": "Name of the property which would be used as a link to an image with descriptive version of the energy efficiency label",
  "showOnPdp": "Defaults to true. When false EFL won't be shown on the product detail page.",
  "showInList": "Defaults to true. When false, EFL won't be shown on product lists",
  "showInCart": "Defaults to true. When false, EFL won't be shown in cart"
}
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for more information.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

This extension is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.

[Additional Product Properties Extension]: https://github.com/shopgate/ext-products-add-properties
