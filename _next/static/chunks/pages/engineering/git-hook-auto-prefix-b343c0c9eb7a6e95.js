(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{313:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/engineering/git-hook-auto-prefix",function(){return i(7402)}])},7845:function(e,t,i){"use strict";var n=i(5893),a=i(5988),o=(new Date).getFullYear();t.Z={titleSuffix:" - Fossil Engineering",cusdis:{appId:"a24f35d3-16f9-43a9-b637-712998af86c1"},footer:(0,n.jsxs)("small",{style:{display:"block",marginTop:"8rem"},className:"jsx-7c359fde634f3543",children:[(0,n.jsx)("time",{className:"jsx-7c359fde634f3543",children:o})," \xa9 Fossil Engineering Blog.",(0,n.jsx)("a",{href:"/feed.xml",className:"jsx-7c359fde634f3543",children:"RSS"}),(0,n.jsx)(a.default,{id:"7c359fde634f3543",children:"a.jsx-7c359fde634f3543 {float:right}\n@media screen and (max-width:480px) {article.jsx-7c359fde634f3543 {padding-top:2rem;\npadding-bottom:4rem}}"})]})}},7402:function(e,t,i){"use strict";i.r(t);i(7294);var n=i(3905),a=i(8941),o=i.n(a),r=i(3805),l=i(7845);function m(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=function(e){return(0,r.withSSG)(o()({filename:"git-hook-auto-prefix.md",route:"/engineering/git-hook-auto-prefix",meta:{title:"Automatically prefix commit message with Git hook",date:"2019/3/09",description:"In order to find all the commits relating to a specific JIRA issue as well as find the issue relating to a specific commit quickly, my team applies a common pattern for all commit message in our projects: `[ISSUE] MESSAGE`",tag:"engineering",author:"Cat Vu"},pageMap:[{name:"engineering",children:[{name:"docker-size",route:"/engineering/docker-size",frontMatter:{title:"Gi\u1ea3m k\xedch th\u01b0\u1edbc Docker image cho \u1ee9ng d\u1ee5ng Ruby on Rails",date:"2020/1/4",description:"Vi\u1ec7c gi\u1ea3m dung l\u01b0\u1ee3ng Docker image tu\xe2n theo nguy\xean t\u1eafc c\u01a1 b\u1ea3n nh\u1ea5t ch\xednh l\xe0 lo\u1ea1i b\u1ecf c\xe1c th\xe0nh ph\u1ea7n kh\xf4ng c\u1ea7n thi\u1ebft trong Docker image",tag:"engineering",author:"Loi Nguyen"}},{name:"git-hook-auto-prefix",route:"/engineering/git-hook-auto-prefix",frontMatter:{title:"Automatically prefix commit message with Git hook",date:"2019/3/09",description:"In order to find all the commits relating to a specific JIRA issue as well as find the issue relating to a specific commit quickly, my team applies a common pattern for all commit message in our projects: `[ISSUE] MESSAGE`",tag:"engineering",author:"Cat Vu"}},{name:"index",route:"/engineering",frontMatter:{type:"posts",title:"Engineering",date:"2021-11-11T00:00:00.000Z"}}],route:"/engineering"},{name:"index",route:"/",frontMatter:{type:"posts",title:"All",date:"2021-11-11T00:00:00.000Z"}},{name:"life",children:[{name:"1234",route:"/life/1234",frontMatter:{title:"1,234 days \u2014 Day 1 at Fossil",date:"2020/02/27",description:"A thousand-ish more days later, I could definitely testify to the jaded Day 1 philosophy by Amazon CEO Jeff Bezos: Every day here has felt just like Day 1.",tag:"Life at Fossil, Careers",author:"Nga Vu"}},{name:"index",route:"/life",frontMatter:{type:"posts",title:"Life at Fossil",date:"2021-11-11T00:00:00.000Z"}}],route:"/life"},{name:"tags",children:[{name:"[tag]",route:"/tags/[tag]",frontMatter:{type:"tag",title:"Tagged Posts"}}],route:"/tags"}]},l.Z))(e)};function d(e){var t=e.components,i=m(e,["components"]);return(0,n.mdx)(s,Object.assign({components:t},i),(0,n.mdx)("h1",null,"Automatically prefix commit message with Git hook"),(0,n.mdx)("h2",null,"Problem"),(0,n.mdx)("p",null,"In order to find all the commits relating to a specific JIRA issue as well as find the issue relating to a specific commit quickly, my team applies a common pattern for all commit message in our projects: ",(0,n.mdx)("inlineCode",{parentName:"p"},"[ISSUE] MESSAGE")),(0,n.mdx)("p",null,"For example, ",(0,n.mdx)("inlineCode",{parentName:"p"},'git commit -m "[ISSUE-123] Fix something"')),(0,n.mdx)("p",null,"After a while using this convention, I think it\u2019s a bit inconvenient and silly for us to remember and type the same issue id whenever we commit a change to the code base."),(0,n.mdx)("p",null,"So my expectation is: After I commit a change, Git will trigger a hook that automatically prepends my message with the related issue id."),(0,n.mdx)("p",null,"Thankfully, I figured out we can easily achieve this with a Git hook."),(0,n.mdx)("h2",null,"Quick start"),(0,n.mdx)("p",null,"From the current project, switch to a new branch (e.g. ",(0,n.mdx)("inlineCode",{parentName:"p"},"feature/demo"),") and create a file named ",(0,n.mdx)("inlineCode",{parentName:"p"},"prepare-commit-msg")," under ",(0,n.mdx)("inlineCode",{parentName:"p"},"<project>/.git/hooks")," with following content"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},'# project/.git/hooks/prepare-commit-msg:\n\n#!/bin/bash\n[[ ! -f .git/jira ]] && touch .git/jira\nBRANCH=$(git rev-parse --abbrev-ref HEAD)\nISSUE=$(cat .git/jira | grep -E "^$BRANCH " | awk \'{print $2}\')\n[[ "$ISSUE" != "" ]] && sed -i.bak -e "1s/^/[$ISSUE] /" $1 || true\n')),(0,n.mdx)("p",null,"Make it executable"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"chmod +x .git/hooks/prepare-commit-msg\n")),(0,n.mdx)("p",null,"Now, when we commit a change, e.g. ",(0,n.mdx)("inlineCode",{parentName:"p"},'git commit -m "Fix something"'),", the above script will be triggered and do the following steps:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Get the name of the current branch: ",(0,n.mdx)("inlineCode",{parentName:"li"},"feature/demo")),(0,n.mdx)("li",{parentName:"ol"},"Derive the issue id from the branch name: e.g. ",(0,n.mdx)("inlineCode",{parentName:"li"},"ISSUE-123")),(0,n.mdx)("li",{parentName:"ol"},"Prepend the commit message with the issue id: => ",(0,n.mdx)("inlineCode",{parentName:"li"},"[ISSUE-123] Fix something"))),(0,n.mdx)("p",null,"Create ",(0,n.mdx)("inlineCode",{parentName:"p"},".git/jira")," file to store issue ids along with corresponding branches"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"touch .git/jira\n")),(0,n.mdx)("p",null,"Now we can test the hook."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},'echo "feature/demo ISSUE-123" > .git/jira\ngit commit -m "Test" --allow-empty\n# the message is now prepended with the issue id\n# [ISSUE-123] Test\n')),(0,n.mdx)("h2",null,"Globalize the hook"),(0,n.mdx)("p",null,"If you have many projects and you don\u2019t want to create prepare-commit-msg file over and over again for each project, you can make it become a global hook. [Matt Venables](Matt Venables) wrote a great post about this. Please check it out at ",(0,n.mdx)("a",{href:"https://coderwall.com/p/jp7d5q/create-a-global-git-commit-hook",parentName:"p"},"https://coderwall.com/p/jp7d5q/create-a-global-git-commit-hook")),(0,n.mdx)("h2",null,"Alias mapping steps"),(0,n.mdx)("p",null,"As you can see even the hook becomes global, we still have to do the last step manually to map the issue id to the working branch. We can improve this by wrapping all the steps inside a single function and alias it so that we just need to call something like ",(0,n.mdx)("inlineCode",{parentName:"p"},"jira ISSUE-123")," to set up everything."),(0,n.mdx)("p",null,"Open ",(0,n.mdx)("inlineCode",{parentName:"p"},"~/.bashrc")," file and add the following code:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},'map_jira_id () {\n  [ ! -d .git ] && return 1\n  [ ! -f .git/jira ] && touch .git/jira\n  BRANCH=$(git rev-parse --abbrev-ref HEAD)\n  MATCH=$(echo "$BRANCH" | sed \'s/\\//\\\\\\//g\')\n  ISSUES=$(sed "/^$MATCH /d" .git/jira)\n  ISSUES="$BRANCH $1\\n$ISSUES"\n  echo "$ISSUES" > .git/jira\n}\nalias jira="map_jira_id"\n')),(0,n.mdx)("p",null,"Save it and source ",(0,n.mdx)("inlineCode",{parentName:"p"},"~/.bashrc")," to apply the change"),(0,n.mdx)("h2",null,"Test"),(0,n.mdx)("p",null,"Now that we have created a global hook and a function alias. It\u2019s time to test on another project."),(0,n.mdx)("p",null,"From the project folder, populate hook templates (according to Matt\u2019s post)"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"git init\n")),(0,n.mdx)("p",null,"Test if the hook work properly"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},'/project2(master)$ git checkout feature/foo\n/project2(feature/foo)$ jira ABC-123\n/project2(feature/foo)$ git commit -m "Test" --allow-empty\n# [ABC-123] Test\n/project2(feature/foo)$ git checkout feature/bar\n/project2(feature/bar)$ jira ABC-456\n/project2(feature/bar)$ git commit -m "Test" --allow-empty\n# [ABC-456] Test\n')),(0,n.mdx)("p",null,"Hope this helps!"))}d.isMDXComponent=!0,t.default=d}},function(e){e.O(0,[774,686,888,179],(function(){return t=313,e(e.s=t);var t}));var t=e.O();_N_E=t}]);