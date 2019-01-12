Feature: word-sorter

Scenario: an empty input file
  Given an empty input file
  Then return null

Scenario: CSV file with concurrent commas
  Given concurrent commas which indicate empty cells
  Then eliminate these empty cells

Scenario: mixed cases
  Given two words, one capitalized and one lowercase
  When CSV data is separated into unique words in an array
  Then capitalize all words prior to sorting

Scenario: special characters
  Given data with special characters
  Then sort by ASCII order

Scenario: sort in descending order
  Given a set of data from a CSV file
  Then check that data is in descending order
  