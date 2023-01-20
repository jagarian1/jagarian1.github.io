---
title: "GIT MASTER"
search: true
categories:
  - GIT
last_modified_at: 2023-01-10T08:06:00-05:00
tags:
  - GIT
  - GIT COMMANDS
---

# GIT 마스터 해보자.

Created: 2022년 12월 10일 오전 12:06
Created By: SHJ
Last Edited By: SHJ
Last Edited Time: 2023년 1월 10일 오후 4:09
Status: In Progress

[git pull ](GIT%20%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%20%E1%84%92%E1%85%A2%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A1%20914ad1570d9c4694802a7c5b0c189fab/git%20pull%20e5a7cb75e2c14298a60fc5f36e6e9561.csv)

## GIT 마스터 하기

### 명령어 → 정리해보자.

#### git 오류 해결 →

```bash
 warning: LF will be replaced by CRLF in src/App.js.
 The file will have its original line endings in your working directory
  * 경고 : bora.txt에서 LF는CRLF로 대체됩니다.
  * 파일은 작업 디렉토리에 원래 줄 끝이 있습니다.

  * 해결 : git config --global core.autocrlf true

  * git config --global core.autocrlf true //**input** ==> 이건 리눅스에서 한방향으로 적용 할떄 옵션을 줍니다.
```

### git 각종 명령어 →

```bash
* 🌈 명령어 정리
  1.  git init . 🌟
  2.  git branch localID 🌟
  3.  git switch origin localID 🌟
  4.  git remote add <name>:remoteName <url>:"https//github.com\reponame\projectname"
                     명령어는 url으로 원격 저장소를 등록
  5.  git remote -v   //확인 🌟
  6.  origin  https://github.com/jagarian1/client.git (fetch)
  7.  origin  https://github.com/jagarian1/client.git (push)
  8.  git add . 🌟
  9.  git commit -m 'v1.0UpdatContents' 🌟
  10. git status 🌟🌟
  11. git log --all --oneline 🌟
  12. git pull origin localId OR git pull origin master 🌟
  13. git push origin master  🌟
```

1. git init
2. git branch localID
3. git **switch** origin localID : 브렌치 변경
4. git remote add <name> <url> 명령어는 url으로 원격 저장소를 등록
5. git remote -v : 리모트 저장소 리스트 출력
6. git add . : 또는 —all
7. git commit -m 'UpdatContents' // 처음에 띠어쓰기하면 오류닙니다.
8. git status -- 상태보기 어디에 위치하는지 등등
9. git log --all --oneline //한줄로 로그 보기
10. git pull origin localId : pull 저장소의 소스를 당겨오는  
     OR git pull origin master : 리모트의 마스터 브렌치를 모두 당겨오는
11. git push origin master // 해당 브렌치로 모두 반영

## 🌟 git 환경설정 명령어

<aside>
💡 환경 설정

</aside>

```html
git의 저장소는 3가지 단계로 나누어 집니다. 커밋한 소스가 보관되는 저장소와 현재
프로젝트 파일들이 있는 **🌟작업트리**, 저장소와 작업트리사이의 버퍼영역으로
커밋될 대상이 저장되는 **🌟스테이징** 영역입니다. git은 빈 디렉토리는 추적하지
않습니다. 형상관리를 하지 않을 파일은 **.gitignore** 파일에 추가합니다.
**HEAD**는 현재 브랜치의 가장 최신커밋을 의미한다. 기본원격 저장소를
**origin**이라고 부릅니다.
```

- git config --global --list
  :: 🚩 현재 설정정보 조회할 수 있습니다. 🌟

           🚩 --global 옵션은 전역설정에 대한 옵션이며 현재 프로젝트에만 적용할때는 주지 않습니다. 🌟

- git config --global user.name "사용자명"

       :: 🚩사용자명을 등록합니다 (필수) 🌟

- git config --global user.email "이메일주소”

       :: 🚩 이메일 주소를 등록합니다. (필수) 🌟

- git config --global color.ui “auto”

       :: 🚩 터미널에 표시되는 메시지에 칼라를 표시해줌 🌟

- git --version :: 🚩 현재 git 버전을 확인합니다.
- git init

       ::  🚩 현재 디렉토리에 git 저장소를 생성합니다. 🌟

- git commit -m "커밋메시지”

       ::  🚩 스테이징 영역에 올라가 있는 파일들을 커밋합니다.
       ::  🚩 -m 은 커밋메시지를 주는 옵션으로 여러 줄의 커밋메시지를 쓸 경우 -m 을 여러개 사용할 수 있습니다.
       ::  🚩 -a  옵션을 사용하면 스테이징에 올리는 작업과 커밋을 동시에 할 수 있습니다.

                (추적되지 않는 파일은 추가하지 않습니다.)
       ::  🚩-m 을 사용하지 않을때 -v옵션을 사용하면 편집기에 커밋하려는 변경사항의 다른점을 보여줍니다.
       ::  🚩 특정파일만 커밋하려면 마지막에 파일명을 추가해주면 됩니다.

- git commit -C HEAD -a --amend <fileName>

       ::  🚩 지정한 커밋의 로그메시지를 다시 사용하여 기존커밋을 수정합니다.
       ::  🚩 -C  를 사용하면 기존메시지를 수정할 수 있는 편집기를 실행해 줍니다.

- git status

       :: 🚩🌟🌟

- git diff :
  :: 🚩 스테이징영역과 현재 작업트리의 차이점을 보여줍니다.
  :: 🚩 --cached 옵션을 추가하면 스테이징영역과 저장소의 차이점을 볼 수 있다.
- :: 🚩 git diff HEAD를 입력하면 저장소, 스테이징영역, 작업트리의 차이점을 모두 볼 수 있다.
  :: 🚩 파라미터로 log와 동일하게 범위를 지정할 수 있으며
  :: 🚩 --stat를 추가하면 변경사항에 대한 통계를 볼 수 있습니다.

- git mv 파일명 새파일명  
  :: 🚩 기존에 존재하는 파일을 새파일로 이동합니다. 변경이력은 그대로 유지합니다.
- git checkout -- 파일명
  :: 🚩아직 스테이징이나 커밋을 하지 않은 파일의 변경내용을 취소하고 이전 커밋상태로 돌립니다.
  svn에서 revert와 동일합니다.

### Branch와 Tag

- git branch
  :: 🚩현재 존재하는 브랜치를 조회합니다. -r 옵션을 사용하면 원격저장소의 브랜치를 확인할 수 있습니다.
- git branch 브랜치명B 브랜치명A
  :: 🚩브랜치명A에서 새로운 브랜치 브랜치명B를 만듭니다.
  :: 🚩(git에서 기본 브랜치는 master라는 이름을 사용합니다.)
- git branch 브랜치명
  :: 🚩브랜치명의 새로운 브랜치를 만듭니다.(체크아웃은 하지 않습니다.)
- git branch -d 브랜치명
  :: 🚩브랜치를 삭제합니다.
- git branch -m 존재하는브랜치명 새로운브랜치명
  :: 🚩존재하는 브랜치를 새로운브랜치로 변경합니다.
  :: 🚩이미 존재하는 브랜치명이 있을 경우에는 에러가 나는데 -M 옵션을 사용하면 이미 있는 브랜치의 경우에도 덮어씁니다.
- git tag 태그명 브랜치명
  :: 🚩브랜치명의 현재시점에 태그명으로 된 태그를 붙힙니다.
  :: 🚩git tag만 입력하면 현재 존재하는 태그 목록을 볼 수 있습니다.
- git checkout 브랜치명/태그명
  :: 🚩 해당 브랜치나 태그로 작업트리를 변경합니다.
- git checkout -b 브랜치명B 브랜치명A
  :: 🚩 브랜치명A에서 브랜치명B라는 새로운 브랜치를 만들면서 체크아웃을 합니다.
- git rebase 브랜치명
  :: 🚩 브랜치명의 변경사항을 현재 브랜치에 적용합니다.
- git merge 브랜치명
  :: 🚩 브랜치명의 브랜치를 현재 브랜치로 합칩니다.
  :: 🚩 --squash 옵션을 주면 브랜치명의 모든 커밋을 하나의 커밋으로 만듭니다.
- git cherry-pick 커밋명
  :: 🚩 커밋명의 특정 커밋만을 선택해서 현재 브랜치에 커밋으로 만듭니다.
  :: 🚩 -n 옵션을 주면 작업트리에 합치지만 커밋은 하지 않기 때문에 여러개의 커밋을 합쳐서 커밋할 수 있습니다.

---

### 원격저장소 -모르면 리모트 핸들링이 안돼 🌟

- 원격저장소인 remote 브렌치를 핸들링 하는 명령어를 알아보자.
- git clone 저장소주소 폴더명 <origin URL : “http://githup.com/idName/projectName”>
  :: 🚩 원격저장소를 복제하여 저장소를 생성합니다. 폴더명을 생략가능합니다.

- git fetch

      :: 🚩 원격저장소의 변경사항 가져와서 원격브랜치를 갱신합니다.

## GIT pull 과 push 의 옵션을 확인해보자

### usage: git pull [<options>] [<repository> [<refspec>...]]

- usage: git pull

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

### usage: git push [<options>] [<repository> [<refspec>...]]

- git push

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
      -u, --set-upstream    set upstream for git pull/status
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

### 서브모듈 - 몰라도 되

- git submodule

  - git submodule

  :: 🚩 연관된 하위모듈을 확인할 수 있습니다.

  - git submodule add 저장소주소 서브모듈경로

  :: 🚩 새로운 하위모듈을 해당경로에 추가합니다.

  :: 🚩 추가만하고 초기화 하지는 않으며 커밋 해쉬 앞에 마이나스(-) 표시가 나타납니다.

  - git submodule init 서브모듈경로

  :: 🚩 서브모듈을 초기화 합니다.

  - git submodule update 서브모듈경로

  :: 🚩 서브모듈의 변경사항을 적용합니다. \_저장소의 최신커밋을 추적하지 않습니다.

추가 : Software Engineer Manager Freelancer
