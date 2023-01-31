---
title:  "When U git Change Default Branch Renamed!"
search: true
categories: 
  - posts
last_modified_at: 2023-01-10
tags:
  - GIT 
toc: true
toc_sticky: true
---


##### ✨ git Default Branch Renamed

+ github 에서 default 브렌치를 이름 변경하면 로컬에서 cmd 창에 아래와 같이 작업 

  1. 브렌치 마스터에서 변경된 이름으로 하고  ✨

  2. fetch origin  branch -u 변경된 branch 이름으로 ✨

  3. remote 명령으로 origin의 모든것을 set-head 해줍니다. ✨

   

##### ✨ commands

```bash
git branch -m master devlop 
git fetch origin 
git branch -u origin/devlop devlop 
git remote set-head origin -a 
```

