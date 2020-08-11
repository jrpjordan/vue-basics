<template>
    <HeaderFooterCard>
        <template slot="header">Featured</template>
        <template slot="body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </template>
        <template slot="footer">Two days ago</template>
    </HeaderFooterCard>
</template>

<script>
import HeaderFooterCard from './HeaderFooterCard.vue';
export default {
    name: 'ParentApp',
}
</script>