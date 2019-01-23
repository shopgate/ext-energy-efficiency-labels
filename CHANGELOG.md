# Changelog
 All notable changes to this project will be documented in this file.
 The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

 ## [Unreleased]
### Added
### Changed
### Fixed

### Removed
## [v.2.0.0] - 2019-01-23
### 🔥 Changed (breaking changes)
- Updated selectors to use new RouteContext approach introduced in PWA v6.0. **Breaking change**: PWA 6.x required
- Updated `Link` component import. **Breaking change**: PWA 6.x required
### Fixed
- Changelog typo
## [v.1.0.2] - 2018-11-09
### Fixed
- Modified Label component to account for location prop passed from product list view.

## [v.1.0.1] - 2018-10-23
### Fixed
- Hotfixed a product list view where labels where overflowing the viewbox by putting the labels on the bottom edge of a list item.
- Used `React.Fragment` in `Label` component as a substitute of `Array` to avoid need of having keys.

## v.1.0.0 - 2018-10-02
### Added
First extension version.

[Unreleased]: https://github.com/shopgate/ext-energy-efficiency-labels/compare/v.1.0.1...HEAD
[v.2.0.0]: https://github.com/shopgate/ext-energy-efficiency-labels/compare/v.1.0.2...v.2.0.0
[v.1.0.2]: https://github.com/shopgate/ext-energy-efficiency-labels/compare/v.1.0.1...v.1.0.2
[v.1.0.1]: https://github.com/shopgate/ext-energy-efficiency-labels/compare/v.1.0.0...v.1.0.1
