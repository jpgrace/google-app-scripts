# Google App Scripts #
These scripts are simple utilities for manipulating GSuite documents like spreadsheets.

## Getting Started ##

To use this script:

1. Go to the spreadsheet that you'd like to use it in.
2. Click on "Tools > Script Editor..."
3. Name the script & project.
4. Copy and paste the script from this repo to the file on GSuite.

## System Config ##

This project has no dependencies.

## Usage ###

### PERCENTCOMPLETE ###
This script is used to calculate the percentage that a project is complete. It was designed to quickly determine how much work is remaining by inputing in a `baseline`, `current`, and `target` metrics for a specific KPI.

## Contributing ##

Fixes or changes should be submitted as PRs.

### Testing ###

Testing is very rudimentary. There are a number of conditional assertions written within the same file that print either PASS or FAIL to the console. To run the tests, run: `node PERCENTCOMPLETE.js`.

## Owner ##

This project is maintained by `jpgrace`.