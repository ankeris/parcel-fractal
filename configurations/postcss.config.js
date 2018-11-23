const stylelint = require("stylelint");
const stylelintConfig = require("./.stylelintrc.json");
const settings = require("../settings");
const rootFolder = settings.root_folder;

console.log(stylelintConfig);

module.exports = {
  plugins: [
    require('postcss-css-variables'),
    require('postcss-cssnext'),
    require('postcss-import')({
      plugins: [
        stylelint({
          config: stylelintConfig
        }),
        require('postcss-custom-properties')({
          preserve: false,
          variables: require(rootFolder + "/components/_base/_variables.css")

        })
      ]
    }),
    require('postcss-nested'),
    require('cssnano')
  ]
}