const RuleManager = require("js-rule-management/src/rule-manager");
const {globSync} = require('glob');

module.exports = class AutoConfiguration {
    folders = require("../rule.config.json").rulePaths
    generateRuleManager = () => {
        const ruleManager = new RuleManager();
        if(this.folders instanceof Array){
            const folderStrings = this.folders.map((value)=>globSync(value+'/*.js', { ignore: 'node_modules/**' })).flat()
            folderStrings.map((value)=>require("../"+value)).forEach(value => ruleManager.push(value))
            return ruleManager
        }
        const folderStrings = globSync(this.folders+'/*.js', { ignore: 'node_modules/**' })
        ruleManager.push(folderStrings.map(value => require("../"+value)))
        return ruleManager;
    }
}
