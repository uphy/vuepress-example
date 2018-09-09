## Installation

Download from [GitHub Releases](https://github.com/uphy/vuepress-example/releases) and extract the binary.

## Usage

```console
$ hello
Hello
```

You can also specify your name with the first argument.

```console
$ hello uphy
Hello uphy
```

@startuml
actor User
component hello
User -> hello: USERNAME
@enduml