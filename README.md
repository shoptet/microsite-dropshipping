# Shoptet "dropshipping" microsite template

## Prerequisities

- Node.js https://nodejs.org/en/
- Sass https://sass-lang.com/

## Usage

- Install latest version of Wordpress from https://wordpress.org/download/
- `cd path_to_wordpress/wp-content/`
- `rm -rf plugins`
- `git clone git@github.com:Shoptet/shoptet-wp-plugins.git plugins`
- `cd path_to_wordpress/wp-content/themes/`
- `git clone git@github.com:Shoptet/shoptet-wp-theme.git shoptet-wp-theme`
- `cd shoptet-wp-theme`
- `git submodule init`
- `git submodule update`
- `git clone git@github.com:Shoptet/microsite-dropshipping.git src`
- `cd src`
- `npm install` - only for first time
- `grunt` - enable watch mode for SCSS & JS files
- `grunt build` - build CSS & JS files

Go to WP admin and:
- set **shoptet-wp-theme** template
- activate installed plugins

## Workflow
- DO NOT edit anything outside **src** repository*
- you can use `src/functions.php`, e.g. for registering new widgets
- you can create custom page templates in `src` folder
- use as many shared parts as possible, use `template-parts` folder
- log in to admin in **editor** role to avoid unwanted theme changes
- when the theme is ready, attach complete export from Wordpress

-----
* in justified cases you can make pull request as well for
git@github.com:Shoptet/microsite-styles.git or
git@github.com:Shoptet/shoptet-wp-theme.git
