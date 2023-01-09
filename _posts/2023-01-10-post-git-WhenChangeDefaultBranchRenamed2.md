---
title:  "When U git Change Default Branch Renamed!"
search: true
categories: 
  - Git Study
last_modified_at: 2023-01-10T08:06:00-05:00
tags:
  - GIT commands
---


# 2023-01-10 git 명령어 정리

- git 에서 default 브렌치를 이름 변경하면 로컬에서 cmd 창에 아래와 같이 작업
- 브렌치 마스터에서 변경된 이름으로 하고
- 패치해서 origin  브렌치 -u 변경된브렌치 이름으로
- 리모트 명령으로 origin의 모든것을 set-head 해줍니다.
- 그렇게 하면 로컬에서 잘 인식 됩니다….

# When Change Default Branch Renamed

```bash
git branch -m master devlop 
git fetch origin 
git branch -u origin/devlop devlop 
git remote set-head origin -a
```

