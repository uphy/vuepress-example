<template>
    <div class="title-container">
        <h1 class="title">
            {{ $page.frontmatter.title }}
        </h1>
        <div class="description-container">
            <span class="description">{{ $page.frontmatter.description }}</span>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.title-container {
    margin-bottom: 0.5rem;

    .title {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 0;
        border-bottom: 1px solid #888;
    }

    .description-container {
        text-align: right
        .description {
            color: #333;
            font-size: 0.9rem;
        }
    }
}
</style>

