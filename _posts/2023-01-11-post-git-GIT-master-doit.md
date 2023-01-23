---
title: "GIT MASTER"
search: true
categories:
  - GIT
last_modified_at: 2023-01-10T08:06:00-05:00
tags:
  - GIT
  - GIT COMMANDS
toc: true
toc_sticky: true
---

![](../assets/images/2023-01-11-post-git-GIT-master-doit/headway-5QgIuuBxKwM-unsplash.jpg)

#### 📗 Git Commands List


##### 🔓📎 GIT 저장소 개념 📎

```
git의 저장소는 3가지 단계로 나누어 집니다. 
커밋한 소스가 보관되는 저장소 Repository
프로젝트 파일들이 있는 **🌟작업트리** WorkTree
저장소와 작업트리사이의 버퍼영역으로 커밋될 대상이 저장되는 **🌟스테이징** Staging

git은 빈 디렉토리는 추적하지 않습니다. 
형상관리를 하지 않을 파일은 **.gitignore** 파일에 추가 함
**HEAD**는 현재 브랜치의 가장 최신커밋을 의미 함
기본원격 저장소를 **origin**이라고 함
```

#### 🔓 git commands  → 


* 🌈 A list of my commonly used Git commands
```bash
  $ git init . 🌟
  $ git branch <localID> 🌟
  $ git switch origin <localID> 🌟
  $ git remote add <name>:remoteName <url>:"https//github.com\reponame\projectname"
                             명령어는 url으로 원격 저장소를 등록
  $ git remote -v   🌟
  $ origin  https://github.com/jagarian1/client.git (fetch)
  $ origin  https://github.com/jagarian1/client.git (push)
  $ git add . 🌟 준비 영역에 파일 추가 -A 준비 영역에 새 파일과 변경된 파일을 모두 추가
  $ git rm -r [file-name.txt]	  파일(또는 폴더) 제거
  $ git commit -m 'v1.0UpdatContents' 🌟
  $ git status 🌟
  $ git log --all --oneline 🌟
  $ git pull origin localId OR git pull origin master 🌟
  $ git push origin master  🌟
```


#### 🌟 git 환경설정 명령어 

💡 git config →  [Git - git-config Documentation (git-scm.com)](https://git-scm.com/docs/git-config)

- git config --global --list
    *  리포지토리 또는 전역옵션 설정정보 조회 가져오기 
    *  --global 옵션은 전역설정에 대한 옵션

- git config --global user.name "사용자명"
    * 사용자명을 등록합니다 (필수) 🌟

- git config --global user.email "이메일주소”
    *  이메일 주소를 등록합니다. (필수) 🌟

- git config --global color.ui “auto”
    *  터미널에 표시되는 메시지에 칼라를 표시

- git --version *  현재 git 버전을 확인 

#### 💡 git init 
- git init      로컬 Git 리포지토리 초기화 , 현재 디렉토리에 git 저장소를 생성

#### 💡 git status
    *    🌟 상태 확인
#### 💡 git clone
    * git clone ssh://git@github.com/[username]/[repository-name]
    * git	원격 저장소의 로컬 사본 작성

#### 💡 git commit 

#### 💡 git commit
    * git commit -m "커밋메시지”
    *  스테이징 영역에 올라가 있는 파일들을 커밋 함
    *  -m 은 커밋메시지를 주는 옵션으로 여러 줄의 커밋메시지를 쓸 경우 -m 을 여러개 사용할 수 있습니다.
    *  -a  옵션을 사용하면 스테이징에 올리는 작업과 커밋을 동시에 할 수 있습니다.
   ​     (추적되지 않는 파일은 추가하지 않습니다.)
    * -m 을 사용하지 않을때 -v옵션을 사용하면 편집기에 커밋하려는 변경사항의 다른점을 보여줍니다.
    *  특정파일만 커밋하려면 마지막에 파일명을 추가해주면 됩니다.

    *  git commit -C HEAD -a --amend <fileName>  
       지정한 커밋의 로그메시지를 다시 사용하여 기존커밋을 수정
    *  -C  를 사용하면 기존메시지를 수정할 수 있는 편집기를 실행

#### 💡 git diff 
    *  스테이징영역과 현재 작업트리의 차이점을 보여줍니다.
        --cached 옵션을 추가하면 스테이징영역과 저장소의 차이점을 볼 수 있다.
    *  git diff HEAD를 입력하면 저장소, 스테이징영역, 작업트리의 차이점을 모두 볼 수 있다.
    *  파라미터로 log와 동일하게 범위를 지정할 수 있으며
        --stat  추가하면 변경사항에 대한 통계를 볼 수 있습니다.

#### 💡 git mv
    *  git mv fileName newFileName  
    *  기존에 존재하는 파일을 새파일로 이동합니다. 변경이력은 그대로 유지합니다.

#### 💡 git checkout 
    * git checkout  fileName
    * 현재 브랜치에서, 입력한 브랜치가 위치한 커밋으로 이동 
    * **git checkout** -b new_branch. 로컬 브랜치를 생성하면서 해당 브랜치로 이동하기 
    * 원격 브랜치를 트래킹 하면서 원격과 동일한 이름의 로컬브랜치를 생성 및 이동

#### 💡 git remote  
    * 원격저장소인  <remote>  브렌치를 핸들링 하는 명령어

#### 💡 git clone 
    *  git clone  저장소 주소 폴더명 <origin URL : “http://githup.com/idName/projectName”>
    *  원격저장소를 복제하여 저장소를 생성합니다. 폴더명을 생략가능

#### 💡 git fetch
    *  원격저장소의 변경사항 가져와서 원격브랜치를 갱신

#### 💡 git branch
    * 현재 존재하는 브랜치를 조회  -r 옵션을 사용하면 원격저장소의 브랜치를 확인할 수 있습니다.

#### 💡 git branch
    * git branch <브랜치명B> <브랜치명A> 
    * 브랜치명A 에서 새로운 브랜치 브랜치명 B를 만듭니다.
    * (git에서 기본 브랜치는 master 라는 이름을 사용합니다.)

#### 💡 git branch
    * git branch <브랜치명>  브랜치명의 새로운 브랜치를 만듭니다.

#### 💡 git branch
    * git branch -d <브랜치명>  브랜치를 삭제 

#### 💡 git branch
    * git branch -m <존재하는브랜치명> <새로운 브랜치명> 
    * 존재하는 브랜치를 새로운 브랜치로 변경
    * 이미 존재하는 브랜치명이 있을 경우에는 에러가 나는데 -M 옵션을 사용하면 
  ​     이미 있는 브랜치의 경우에도 덮어씁니다.

#### 💡  git tag
    * git tag <태그명> <브랜치명>
    * 브랜치명의 현재시점에 태그명으로 된 태그
    * git tag만 입력하면 현재 존재하는 태그 목록을 볼 수 있습니다.

#### 💡 git checkout 
    * git checkout <브랜치명/태그명>
    * 해당 브랜치나 태그로 작업트리를 변경

#### 💡 git checkout
    * git checkout -b <브랜치명B> <브랜치명A>
    * 브랜치명A에서 브랜치명B라는 새로운 브랜치를 만들면서 체크아웃

#### 💡 git rebase 
    * git rebase <브랜치명>
    * 브랜치명의 변경사항을 현재 브랜치에 적용

#### 💡 git merge
    * git merge <브랜치명>
    * 브랜치명의 브랜치를 현재 브랜치로 합칩니다.
    * --squash 옵션을 주면 브랜치명의 모든 커밋을 하나의 커밋

#### 💡 git cherry-pick  master 
    * 일부 기존 커밋에 의해 도입 된 변경 사항 적용 변경사항을 커밋하고 현재 브랜치에 커밋으로 만듭니다.
    * -n 옵션을 주면 작업트리에 합치지만 커밋은 하지 않기 때문에 여러개의 커밋을 합쳐서 커밋

    *  [버전 2.39.1 ▾](https://git-scm.com/docs/git-cherry-pick#) git-cherry-pick 2.39.1에서 마지막으로 업데이트되었습니다.

---


#### 💡 git pull
    * 저장소에서 소스를 받아온다

```bash
git pull -h :enter
usage: git pull [<options>] [<repository> [<refspec>...]]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    --recurse-submodules[=<on-demand>]
                          control for recursive fetching of submodules

Options related to merging
    -r, --rebase[=(false|true|merges|interactive)]
                          incorporate changes by rebasing rather than merging
    -n                    do not show a diffstat at the end of the merge
    --stat                show a diffstat at the end of the merge
    --log[=<n>]           add (at most <n>) entries from shortlog to merge commit message
    --signoff[=...]       add a Signed-off-by trailer
    --squash              create a single commit instead of doing a merge
    --commit              perform a commit if the merge succeeds (default)
    --edit                edit message before committing
    --cleanup <mode>      how to strip spaces and #comments from message
    --ff                  allow fast-forward
    --ff-only             abort if fast-forward is not possible
    --verify              control use of pre-merge-commit and commit-msg hooks
    --verify-signatures   verify that the named commit has a valid GPG signature
    --autostash           automatically stash/stash pop before and after
    -s, --strategy <strategy>
                          merge strategy to use
    -X, --strategy-option <option=value>
                          option for selected merge strategy
    -S, --gpg-sign[=<key-id>]
                          GPG sign commit
    --allow-unrelated-histories
                          allow merging unrelated histories

Options related to fetching
    --all                 fetch from all remotes
    -a, --append          append to .git/FETCH_HEAD instead of overwriting
    --upload-pack <path>  path to upload pack on remote end
    -f, --force           force overwrite of local branch
    -t, --tags            fetch all tags and associated objects
    -p, --prune           prune remote-tracking branches no longer on remote
    -j, --jobs[=<n>]      number of submodules pulled in parallel
    --dry-run             dry run
    -k, --keep            keep downloaded pack
    --depth <depth>       deepen history of shallow clone
    --shallow-since <time>
                          deepen history of shallow repository based on time
    --shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --deepen <n>          deepen history of shallow clone
    --unshallow           convert to a complete repository
    --update-shallow      accept refs that update .git/shallow
    --refmap <refmap>     specify fetch refmap
    -o, --server-option <server-specific>
                          option to transmit
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --negotiation-tip <revision>
                          report that we have only objects reachable from this object
    --show-forced-updates
                          check for forced-updates on all updated branches
    --set-upstream        set upstream for git pull/fetch
```

#### 💡 git push 
    * 저장소에 소스를 올린다. 분기를 원격 저장소로 푸시

```bash
git push -h :enter
usage: git push [<options>] [<repository> [<refspec>...]]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --repo <repository>   repository
    --all                 push all refs
    --mirror              mirror all refs
    -d, --delete          delete refs
    --tags                push tags (can't be used with --all or --mirror)
    -n, --dry-run         dry run
    --porcelain           machine-readable output
    -f, --force           force updates
    --force-with-lease[=<refname>:<expect>]
                          require old value of ref to be at this value
    --force-if-includes   require remote updates to be integrated locally
    --recurse-submodules (check|on-demand|no)
                          control recursive pushing of submodules
    --thin                use thin pack
    --receive-pack <receive-pack>
                          receive pack program
    --exec <receive-pack>
                          receive pack program
    -u, --set-upstream    변경 사항을 원격 저장소에 푸시 (그리고 분기 기억)
    --progress            force progress reporting
    --prune               prune locally removed refs
    --no-verify           bypass pre-push hook
    --follow-tags         push missing but relevant tags
    --signed[=(yes|no|if-asked)]
                          GPG sign the push
    --atomic              request atomic transaction on remote side
    -o, --push-option <server-specific>
                          option to transmit
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
```

#### 💡 검사 및 비교
    * git log	변경사항 보기
    * git log --summary	변경 내용 보기(자세히)
    * git log --oneline	변경사항 보기(간단히)
    * git diff [source branch] [target branch]	병합하기 전에 변경 내용 미리 보기
---

#### 💡 git submodule
    * submodule * 연관된 하위모듈을 확인  🌨
- git submodule add 저장소주소 서브모듈경로
    * 새로운 하위모듈을 해당경로에 추가
    * 추가만하고 초기화 하지는 않으며 커밋 해쉬 앞에 마이나스(-) 표시

- git submodule init 서브모듈경로
    * 서브모듈을 초기화 

- git submodule update 서브모듈경로
    * 서브모듈의 변경사항을 적용합니다. 
    저장소의 최신커밋을 추적하지 않습니다.
---

#### 💡 warning Issue
-  warning: LF will be replaced by CRLF in src/App.js.
- 📌 git 오류  → git config --global core.autocrlf true

```bash
 warning: LF will be replaced by CRLF in src/App.js.
 The file will have its original line endings in your working directory
  * 경고 : fileName.txt에서 LF는CRLF로 대체됩니다.
  * 파일은 작업 디렉토리에 원래 줄 끝이 있습니다.
  * 해결 : git config --global core.autocrlf true
```

+ git config --global core.autocrlf true 
    * **input** : 이건 리눅스에서 한방향으로 적용 할떄 옵션을 줍니다.

   리눅스는 테스트 못함.

>  출처 : https://git-scm.com/docs 
------

- Created: 2022년 12월 10일 오전 12:06
- Last Edited Time: 2023년 1월 10일 오후 4:09
- Status: In Progress