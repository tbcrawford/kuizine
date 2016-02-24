# Kuizine

## Naming Conventions and Coding Guidelines
This section will outline the naming conventions coding guidelines for each language used in the development of this app.

### General
* Use 4 spaces for tabs (replace \t character with spaces)
* Filenames shall be short, descriptive, and one-word where possible; if necessary use "this_format"
* Strive for consistency to the greatest degree possible
* Document code sufficiently, regardless of language

### HTML, CSS
* Tag attributes will be listed in alphabetical order, unless there is an appropriate reason to do otherwise
* HTML should not contain unnecessary attributes and be consistent across files
* Class names will follow "this-format"
* CSS stylesheets will follow "this-format"
* CSS styles shall be specified within an appropriate external file, not inline where possible.
* CSS will be aligned using a package called (atom-alignment)[https://atom.io/packages/atom-alignment]
* CSS should contain logical section headers using comment blocks

### PHP
* Variable and function names shall follow "this_format"

### JavaScript, AngularJS
* Variable and function names shall follow "thisFormat"
* AngularJS factory, service, etc. names shall follow "ThisFormat"

### MySQL
* Table names shall follow "This_Format"
* Table attribute names shall follow "this_format"


## Changelog

### 0.4.3
* Added primitive restaurant profile view functionality
* Added Naming Conventions and Coding Guidelines section to README

### 0.4.2
* Modified controllers, now using AngularJS factories instead
* Tweaked Browse functionality, correctly links to profile page with appended http-get format

### 0.4.1
* Updated Login and Sign Up UI
* Various UI tweaks, and CSS revisions made throughout

## 0.4
* Added primitive browse functionality
* Depending on login status, display either login or logout in nav menu
* Centered and reworded error message on login page

### 0.3.1
* UI Overhaul
* New color - #ef5350 (Light Red)
* Side menu modified to be comparable to User Interface Design Document
* Side menu items now show the current page and show the page that is 'hovered' over
* Attempt to fix header centering - currently fixed for iOS, an un-versioned push may come later to fix for Android

## 0.3
* Established connection with the database
* Added primitive login functionality
* Changed back button on home to nav button after login

### 0.2.2
* Changed back button on signup to nav button

### 0.2.1
* Nav bar icon repositioned
* Header font increased, made thinner
* Header color changed to match backend
* Side-menu icon side increased
* Side-menu spacing between icons and text positioned correctly
* Side-menu font size changed, lightened weight

## 0.2
* Template Search functionality added - Waiting for database info to query
* Template Browse functionality added - Waiting for database info to query categories

## 0.1
* Base structure created
* Swipe-menu added
* Home, Search, Browse, Favorites, Login, and Signup page templates were added
* Minor CSS rules were added to enhance look and feel
