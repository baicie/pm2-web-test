<template>
  <div :class="[createClassName('page')]" :style="bodyStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
// # config import
import { createClassName } from "../../utils";
import "./index.less";
import { demo } from "./index";
// # base state
defineProps(demo);
// # pinia
// # computed
// # watch
// # function
</script>
