<template>
    <div class="demo-button">
        <NeButton @click="handleClick">禁用按钮</NeButton>
        <NeButton type="primary">主要按钮</NeButton>
        <NeButton type="success">成功按钮</NeButton>
        <NeButton type="warning">警告按钮</NeButton>
        <NeButton type="danger">危险按钮</NeButton>
    </div>
</template>

<script setup>
const handleClick = () => {
    console.log('click1')
}
</script>
