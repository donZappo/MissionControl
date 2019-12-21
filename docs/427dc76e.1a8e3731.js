(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),o=t(6),s=(t(0),t(153)),i={id:"encounter-rulesets",title:"Encounter Rulesets"},r=[{value:"Example Ruleset",id:"example-ruleset",children:[]},{value:"Example Walkthrough",id:"example-walkthrough",children:[{value:"Set up the right special superclass",id:"set-up-the-right-special-superclass",children:[]},{value:"Create a build step",id:"create-a-build-step",children:[]},{value:"Specify AI",id:"specify-ai",children:[]},{value:"Build Spawns",id:"build-spawns",children:[]},{value:"Link Object References",id:"link-object-references",children:[]}]},{value:"Send Your Custom Ruleset To Mission Control",id:"send-your-custom-ruleset-to-mission-control",children:[]},{value:"Summary",id:"summary",children:[]}],l={id:"features/encounter-rulesets",title:"Encounter Rulesets",description:"Mission Control allows other modders to add their own contract type rulesets to be used. When added to the mod, the mod will randomly select a ruleset for a contract type from the given choices.",source:"@site/docs\\features\\encounter-rulesets.md",permalink:"/MissionControl/docs/features/encounter-rulesets",sidebar:"docs",previous:{title:"Random Spawns",permalink:"/MissionControl/docs/features/random-spawns"},next:{title:"Extended Lances",permalink:"/MissionControl/docs/features/extended-lances"}},c={rightToc:r,metadata:l},u="wrapper";function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)(u,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Mission Control allows other modders to add their own contract type rulesets to be used. When added to the mod, the mod will randomly select a ruleset for a contract type from the given choices."),Object(s.b)("p",null,"Encounter Rulesets are what control the manipulation of a mission/contract. To manipulate encounters you create lots of ",Object(s.b)("inlineCode",{parentName:"p"},"Logic")," objects and submit them to the ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterLogic")," system. Mission Control then intelligently runs these logic blocks at the correct point as the game runs."),Object(s.b)("h2",{id:"example-ruleset"},"Example Ruleset"),Object(s.b)("p",null,"Below is an example of the ",Object(s.b)("inlineCode",{parentName:"p"},"AssassinateEncounterRules")," used in Mission Control. We'll run through each bit of code to explain what is happening."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),'using UnityEngine;\nusing System;\nusing System.Collections;\nusing System.Collections.Generic;\n\nusing BattleTech;\n\nusing MissionControl.Trigger;\nusing MissionControl.Logic;\n\nnamespace MissionControl.Rules {\n  public class AssassinateEncounterRules : EncounterRules {\n    public AssassinateEncounterRules() : base() { }\n\n    public override void Build() {\n      Main.Logger.Log("[AssassinateEncounterRules] Setting up rule object references");\n      BuildAi();\n      BuildSpawns();\n      BuildAdditionalLances("AssassinateSpawn", SpawnLogic.LookDirection.AWAY_FROM_TARGET,\n        "SpawnerPlayerLance", SpawnLogic.LookDirection.AWAY_FROM_TARGET, 25f, 100f);\n    }\n\n    public void BuildAi() {\n      EncounterLogic.Add(new IssueFollowLanceOrderTrigger(new List<string>(){ "Employer" }, IssueAIOrderTo.ToLance, new List<string>() { "Player 1" }));\n    }\n\n    public void BuildSpawns() {\n      Main.Logger.Log("[AssassinateEncounterRules] Building spawns rules");\n      EncounterLogic.Add(new SpawnLanceAtEdgeOfBoundary(this, "SpawnerPlayerLance", "AssassinateSpawn"));\n      EncounterLogic.Add(new SpawnLanceAnywhere(this, "AssassinateSpawn", "SpawnerPlayerLance", 400));\n      EncounterLogic.Add(new LookAtTarget(this, "SpawnerPlayerLance", "AssassinateSpawn"));\n    }\n\n    public override void LinkObjectReferences(string mapName) {\n      ObjectLookup.Add("AssassinateSpawn", EncounterLayerData.gameObject.FindRecursive("Lance_Enemy_AssassinationTarget"));\n    }\n  }\n}\n')),Object(s.b)("h2",{id:"example-walkthrough"},"Example Walkthrough"),Object(s.b)("h3",{id:"set-up-the-right-special-superclass"},"Set up the right special superclass"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),"public class AssassinateEncounterRules : EncounterRules {\n")),Object(s.b)("p",null,"To create a ruleset you must create a class and extend the ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterRules")," superclass. This provides lots of inbuilt functionality useful for encounters and allows Mission Control to use it."),Object(s.b)("h3",{id:"create-a-build-step"},"Create a build step"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),'public override void Build() {\n  Main.Logger.Log("[AssassinateEncounterRules] Setting up rule object references");\n  BuildAi();\n  BuildSpawns();\n  BuildAdditionalLances("AssassinateSpawn", SpawnLogic.LookDirection.AWAY_FROM_TARGET,\n    "SpawnerPlayerLance", SpawnLogic.LookDirection.AWAY_FROM_TARGET, 25f, 100f);\n}\n')),Object(s.b)("p",null,"This is a special method which is required. It is called by Mission Control at the appropriate time to create the initial configuration. From here you can chain into your own methods for organisational purposes. I've used it to chain on Ai, Spawns and the special hook for ",Object(s.b)("inlineCode",{parentName:"p"},"Additional Lances")," support for this contract type."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterRules")," superclass gives you access to an easy way of enabling ",Object(s.b)("inlineCode",{parentName:"p"},"Additional Lances")," for your encounter. Here is the method hook explained in more detail."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),"BuildAdditionalLances(TargetKeyToSpawnEnemyLancesAround, DirectionToLookAtInRelationToEnemyTarget, TargetKeyToSpawnAllyLancesAround,\n  DirectionToLookAtInRelationToAllyTarget, MinDistanceForAlliesToSpawnFromAllyTarget, MaxistanceForAlliesToSpawnFromAllyTarget);\n")),Object(s.b)("p",null,"The target keys are bound at the bottom of the class with the ",Object(s.b)("inlineCode",{parentName:"p"},"LinkObjectReferences")," method. This will be explained in a moment."),Object(s.b)("h3",{id:"specify-ai"},"Specify AI"),Object(s.b)("p",null,"You can specify additional AI to be applied to the Core AI behaviour tree. You can do this as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),'public void BuildAi() {\n  EncounterLogic.Add(new IssueFollowLanceOrderTrigger(new List<string>(){ "Employer" }, IssueAIOrderTo.ToLance, new List<string>() { "Player 1" }));\n}\n')),Object(s.b)("p",null,"This method is for organisational purposes only. You can set up your AI logic in a method similar to this."),Object(s.b)("p",null,"Two things are happening here. Firstly, you add a logic block relating to AI to the ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterLogic")," property that is provided by the superclass ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterRules")," your class has access to. The ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterLogic")," list contains logic blocks of different type and that execute at different points in the game depending on their type. The main types are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"RESOURCE_REQUEST"),Object(s.b)("li",{parentName:"ul"},"CONTRACT_OVERRIDE_MANIPULATION"),Object(s.b)("li",{parentName:"ul"},"ENCOUNTER_MANIPULATION"),Object(s.b)("li",{parentName:"ul"},"SCENE_MANIPULATION")),Object(s.b)("p",null,"and these types are executed in that order depending on when the game requires them to be executed."),Object(s.b)("p",null,"Secondly, the logic block you submit is the AI logic block for assigning all the found targets with tag ",Object(s.b)("inlineCode",{parentName:"p"},"Employer")," of type ",Object(s.b)("inlineCode",{parentName:"p"},"Lance")," to follow the lance with tag ",Object(s.b)("inlineCode",{parentName:"p"},"Player 1"),". This is used to allow allies who spawn on the encounter boundary to follow the player lance into combat and not get stuck."),Object(s.b)("h3",{id:"build-spawns"},"Build Spawns"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),'public void BuildSpawns() {\n  Main.Logger.Log("[AssassinateEncounterRules] Building spawns rules");\n  EncounterLogic.Add(new SpawnLanceAtEdgeOfBoundary(this, "SpawnerPlayerLance", "AssassinateSpawn"));\n  EncounterLogic.Add(new SpawnLanceAnywhere(this, "AssassinateSpawn", "SpawnerPlayerLance", 400));\n  EncounterLogic.Add(new LookAtTarget(this, "SpawnerPlayerLance", "AssassinateSpawn"));\n}\n')),Object(s.b)("p",null,"This method is for organisational purposes only. You can set up your spawn logic in a method similar to this."),Object(s.b)("p",null,"Mission Control provides four spawn logic blocks to be used to move targets around the map. They are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"SpawnLanceAnywhere"),Object(s.b)("li",{parentName:"ul"},"SpawnLanceAroundTarget"),Object(s.b)("li",{parentName:"ul"},"SpawnLanceMembersAroundTarget"),Object(s.b)("li",{parentName:"ul"},"SpawnLanceAtEdgeBoundary")),Object(s.b)("p",null,"and there are two orientation logic blocks of:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"LookAtTarget"),Object(s.b)("li",{parentName:"ul"},"LookAwayFromTarget")),Object(s.b)("p",null,"For each of these you provide different arguments but they all are very similar. You provide the target you wish to move around, the target you wish to be the orientation target (e.g to look at after being moved and to pathfind check to) and sometimes provide the look type (TOWARDS ORIENTATION TARGET, AWAY FROM ORIENTATION TARGET), minimum and maximum spawn distance constraints."),Object(s.b)("h3",{id:"link-object-references"},"Link Object References"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),'public override void LinkObjectReferences(string mapName) {\n  ObjectLookup.Add("AssassinateSpawn", EncounterLayerData.gameObject.FindRecursive("Lance_Enemy_AssassinationTarget"));\n}\n')),Object(s.b)("p",null,"This is a very important method. Almost every logic block requires the use of keys to identify which item to move around the game map. This is how those keys are linked up to the game objects in the game scene / map. In this example, we assign the object found under the ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterLayerData")," object in the Unity game scene which has the name ",Object(s.b)("inlineCode",{parentName:"p"},"Lance_Enemy_AssassinationTarget"),", which is a spawner object for the encounter, to the key ",Object(s.b)("inlineCode",{parentName:"p"},"AssassinateSpawn"),"."),Object(s.b)("p",null,"You may notice there is no ",Object(s.b)("inlineCode",{parentName:"p"},"SpawnerPlayerLance")," entry. This is because ",Object(s.b)("inlineCode",{parentName:"p"},"SpawnerPlayerLance")," is a special key that is auto-linked for you already. It will always be available for you to use."),Object(s.b)("p",null,"To discover the name and unity game scene location of the object to link I highly recommend you use the mod ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/BTDebug"}),"BTDebug")," with the latest releases found in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/BTDebug/releases"}),"Releases")," area. It has a runtime inspector that allows you to view what objects are in the game scene / map so you can correctly link up what you need."),Object(s.b)("h2",{id:"send-your-custom-ruleset-to-mission-control"},"Send Your Custom Ruleset To Mission Control"),Object(s.b)("p",null,"You're able to provide your custom ruleset to Mission Control and it will use it. Mission Control randomly selects from all the available rulesets for a particular contract type."),Object(s.b)("p",null,"To do this you must first create your own ruleset by linking your mod to ",Object(s.b)("inlineCode",{parentName:"p"},"MissionControl.dll")," then creating it as explained above. Then, in your mod code execute code similar to the below example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),'MissionControl.Instance.AddEncounter("Assassinate", typeof(MyCustomAssassinateRuleset));  // Add a custom assassinate ruleset\n')),Object(s.b)("p",null,"If for whatever reason you wish to only have your custom rulesets running you can clear all loaded rulesets with the following code:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),"MissionControl.Instance.ClearEncounters();  // Clears all encounters for all contract types\n")),Object(s.b)("p",null,"and"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clike"}),"MissionControl.Instance.ClearEncounters(\"Assassinate\");  // Clears all encounters for only the 'Assassinate' contract type\n")),Object(s.b)("h2",{id:"summary"},"Summary"),Object(s.b)("p",null,"It's worth reviewing the code of this mod to see what already happens for the default encounter rulesets, especially looking at the ",Object(s.b)("inlineCode",{parentName:"p"},"EncounterRules.cs")," class to see what the mod already provides for you to use (e.g. it contains properties that link to the encounter object in the Unity game scene you can use)."))}p.isMDXComponent=!0},153:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return p}));var a=t(0),o=t.n(a),s=o.a.createContext({}),i=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},r=function(e){var n=i(e.components);return o.a.createElement(s.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),u=i(t),p=a,d=u[r+"."+p]||u[p]||c[p]||s;return t?o.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):o.a.createElement(d,Object.assign({},{ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[l]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<s;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);