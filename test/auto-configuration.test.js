const {AutoConfiguration} = require("js-auto-configuration-for-rule-management")

describe('this is to get folder that holds all the rules of the project', function () {
    beforeEach(() => {
        jest.resetModules();
    });

    ["",[],{}].map((mockData)=>{
        test("auto-configuration should have the folder paths from the rulePaths of "+mockData,()=>{
            jest.mock('../rule.config.json', () => ({rulePaths:mockData}), {virtual:true});
            const actual = new AutoConfiguration()
            expect(actual).toHaveProperty("folders",mockData)
        })
    });

    ["**/test/rules" , ["**/test/rules"] ].map((mockData)=>{
        test("auto-configuration should take the rule from " + JSON.stringify(mockData),()=>{
            jest.mock('../rule.config.json', () => ({rulePaths:mockData}),{virtual:true});
            const autoConfiguration = new AutoConfiguration()
            const actual = autoConfiguration.generateRuleManager();
            expect(actual).toHaveLength(1)
        })
    });
    [["**/test/rules","**/test/rules2"],["**/test/rules","**/test/rules2","**/test/rules3"]  ].map((mockData)=>{
        test("auto-configuration should take the rule from " + JSON.stringify(mockData),()=>{
            jest.mock('../rule.config.json', () => ({rulePaths:mockData}),{virtual:true});
            const autoConfiguration = new AutoConfiguration()
            const actual = autoConfiguration.generateRuleManager();
            expect(actual).toHaveLength(mockData.length)
        })
    });
    [["**/test/rules4"]].map((mockData)=>{
        test("auto-configuration should take the rule from " + JSON.stringify(mockData),()=>{
            jest.mock('../rule.config.json', () => ({rulePaths:mockData}),{virtual:true});
            const autoConfiguration = new AutoConfiguration()
            const actual = autoConfiguration.generateRuleManager();
            expect(actual).toHaveLength(2)
        })
    });
    [["**/test/rules","**/test/rules4"],["**/test/rules2","**/test/rules4"],["**/test/rules3","**/test/rules4"]].map((mockData)=>{
        test("auto-configuration should take the rule from " + JSON.stringify(mockData),()=>{
            jest.mock('../rule.config.json', () => ({rulePaths:mockData}),{virtual:true});
            const autoConfiguration = new AutoConfiguration()
            const actual = autoConfiguration.generateRuleManager();
            actual.runRules()
            expect(actual.results).toEqual(["passed","passed","passed"])
        })
    });
});