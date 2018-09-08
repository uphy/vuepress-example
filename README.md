# VuePress Example

This is VuePress example project.

## Branch design

|Branch|Description|
|---|---|
|master|Document source branch.  This also has source files of your programs or libraries. |
|gh-pages|Generated document branch.  This branch always has only 1 commit which contains the lates document. |

## Deploy

This command overwrites gh-pages with the latest generated document.

```console
$ docs/deploy.sh
```