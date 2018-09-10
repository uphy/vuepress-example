<template>
    <div>
        <h1>{{ $page.frontmatter.changelog.title}}</h1>
        <div v-for="item in $page.frontmatter.changelog.items">
            <h2>{{item.date}} {{item.version}}
                <Badge v-if="item.beta" text="beta" />
            </h2>
            {{ item.description }}
        </div>
        <Content/>
    </div>
</template>
