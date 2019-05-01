---
title: "Git Åpner I Less"
date: 2019-04-27T10:43:52+02:00
draft: false
tags: ['Git', 'Tips og triks']
category: []
---
# Git åpner log, diff etc. i less
I korte trekk: git log, git diff, git stash list og så videre åpner i _less_.

Less er et program får å se innholdet i en tekstfil via terminalen. Det vil si at jeg må lukke dette hver gang jeg er ferdig med å se på innholdet. Altså megakjedelig.

Løsningen er å pipe til _cat_, som viser innholdet direkte i standard ut.

![git log with less](/images/git-log-less.png)
<a class="post__image-link" href="../../images/git-log-less.png">See full size</a>
![git log with cat](/images/git-log-cat.png)
<a class="post__image-link" href="../../images/git-log-cat.png">See full size</a>