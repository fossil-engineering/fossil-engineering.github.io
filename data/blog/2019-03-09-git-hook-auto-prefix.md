---
title: Automatically prefix commit message with Git hook
authors: [cat]
date: '2019-03-09'
tags: ['engineering', 'git']
summary: 'In order to find all the commits relating to a specific JIRA issue as well as find the issue relating to a specific commit quickly, my team applies a common pattern for all commit message in our projects: `[ISSUE] MESSAGE`'
---

## Problem

In order to find all the commits relating to a specific JIRA issue as well as find the issue relating to a specific commit quickly, my team applies a common pattern for all commit message in our projects: `[ISSUE] MESSAGE`

For example, `git commit -m "[ISSUE-123] Fix something"`

After a while using this convention, I think it’s a bit inconvenient and silly for us to remember and type the same issue id whenever we commit a change to the code base.

So my expectation is: After I commit a change, Git will trigger a hook that automatically prepends my message with the related issue id.

Thankfully, I figured out we can easily achieve this with a Git hook.

## Quick start

From the current project, switch to a new branch (e.g. `feature/demo`) and create a file named `prepare-commit-msg` under `<project>/.git/hooks` with following content

```
# project/.git/hooks/prepare-commit-msg:

#!/bin/bash
[[ ! -f .git/jira ]] && touch .git/jira
BRANCH=$(git rev-parse --abbrev-ref HEAD)
ISSUE=$(cat .git/jira | grep -E "^$BRANCH " | awk '{print $2}')
[[ "$ISSUE" != "" ]] && sed -i.bak -e "1s/^/[$ISSUE] /" $1 || true
```

Make it executable

```
chmod +x .git/hooks/prepare-commit-msg
```

Now, when we commit a change, e.g. `git commit -m "Fix something"`, the above script will be triggered and do the following steps:

1. Get the name of the current branch: `feature/demo`
2. Derive the issue id from the branch name: e.g. `ISSUE-123`
3. Prepend the commit message with the issue id: => `[ISSUE-123] Fix something`

Create `.git/jira` file to store issue ids along with corresponding branches

```
touch .git/jira
```

Now we can test the hook.

```
echo "feature/demo ISSUE-123" > .git/jira
git commit -m "Test" --allow-empty
# the message is now prepended with the issue id
# [ISSUE-123] Test
```

## Globalize the hook

If you have many projects and you don’t want to create prepare-commit-msg file over and over again for each project, you can make it become a global hook. [Matt Venables](Matt Venables) wrote a great post about this. Please check it out at https://coderwall.com/p/jp7d5q/create-a-global-git-commit-hook

## Alias mapping steps

As you can see even the hook becomes global, we still have to do the last step manually to map the issue id to the working branch. We can improve this by wrapping all the steps inside a single function and alias it so that we just need to call something like `jira ISSUE-123` to set up everything.

Open `~/.bashrc` file and add the following code:

```
map_jira_id () {
  [ ! -d .git ] && return 1
  [ ! -f .git/jira ] && touch .git/jira
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  MATCH=$(echo "$BRANCH" | sed 's/\//\\\//g')
  ISSUES=$(sed "/^$MATCH /d" .git/jira)
  ISSUES="$BRANCH $1\n$ISSUES"
  echo "$ISSUES" > .git/jira
}
alias jira="map_jira_id"
```

Save it and source `~/.bashrc` to apply the change

## Test

Now that we have created a global hook and a function alias. It’s time to test on another project.

From the project folder, populate hook templates (according to Matt’s post)

```
git init
```

Test if the hook work properly

```
/project2(master)$ git checkout feature/foo
/project2(feature/foo)$ jira ABC-123
/project2(feature/foo)$ git commit -m "Test" --allow-empty
# [ABC-123] Test
/project2(feature/foo)$ git checkout feature/bar
/project2(feature/bar)$ jira ABC-456
/project2(feature/bar)$ git commit -m "Test" --allow-empty
# [ABC-456] Test
```

Hope this helps!
