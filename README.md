# js-auto-configuration-for-rule-management

## What is the purpose of this project?
the purpose is to have a way to write [Rules](https://github.com/Megamanjoker/js-rule-management/blob/main/src/rule.js) to add to a [Rule Manager](https://github.com/Megamanjoker/js-rule-management/blob/main/src/rule-manager.js)

## How do I use this project?
1. Create a rule.config.json at the root directory
2. Add a json with a rulePaths property
   1. This can be a String or Array of Strings
   2. The string must be formatted like [Glob](https://github.com/isaacs/node-glob)
      1. Example - "**/rules"
   2. The string will have "../" prefixed to the path for the require()
   3. The string will have "/*.js" suffixed to the path for the require()
4. create a new AutoConfiguration
5. run the AutoConfiguration.generateRuleManager to get a [Rule Manager](https://github.com/Megamanjoker/js-rule-management/blob/main/src/rule-manager.js)