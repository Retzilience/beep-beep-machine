# Changelog

## [2.03] - 2023-03-12

### Added
- Ability to change the tempo while the metronome is playing. This allows the user to adjust the tempo on the fly without having to stop and restart the metronome.
- Added delay when changing the tempo to give users time to set the proper BPM.

### Changed
- Updated the tap tempo functionality to only take into account the last few clicks by the user when calculating the BPM. <br>This avoids skewering in tempo calculation after a long series of taps.

### Fixed
- N/A
<br>These changes greatly improved the usability of the metronome by providing a more flexible way to change the tempo, allowing the user to make adjustments without stopping and starting the metronome. Additionally, the tap tempo functionality was improved to provide more accurate results, ensuring that the tempo is more stable and consistent.

## [2.02] - 2023-03-12

### Added
- Created stand-alone versions of the CSS and JavaScript files.

### Changed
- Updated the project structure from a single HTML page to an HTML file that calls the script and CSS separately.
- Updated the commented project files to reflect the new project structure.
- Updated the README file to include information on the new project structure and usage.

### Fixed
- N/A

## [2.01] - 2023-03-10
### Added
- Added a media query to apply the `user-select: none` property only on mobile devices. This allows interaction with form elements on desktop while still preventing text selection on mobile devices.

### Changed
- Changed CSS code to remove the up and down arrows from the number input box. This allows users to change the BPM value by typing only.

### Fixed
- Fixed an issue where text selection was disabled for all elements on the page, preventing interaction with form elements like input fields on desktop.

These changes improved the usability of the metronome by allowing users to interact with form elements on desktop and providing a cleaner interface for changing BPM values.
