<script lang="ts">
  import { iconColor } from "./config";
  import { writable } from "svelte/store";

  export let active = writable(false);
</script>

<style>
  .icon-container {
    transition: transform 0.2s ease-in-out;
    display: block;
    width: 2rem;
    height: 2rem;
  }
  .icon {
    width: 100%;
    height: 100%;
  }
  .icon #top-line, .icon #bottom-line {
    transition: transform 0.2s ease-in-out;
  }
  .icon #middle-line {
    transition: opacity 0.2s ease-in-out;
  }
  /* .active .icon #top-line {
    transform: translate(10px,0) rotate(45deg);
  } */
</style>

<main>
  <span class="icon-container" class:active={$active}>
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      id="svg941"
      version="1.1"
      class="icon"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 40 40">
      <g stroke={iconColor} 
          stroke-width="2"
          stroke-linecap="round">
          <line transform={$active ? "translate(8 1) rotate(45 5 5)":""} id="top-line" x1="10" y1="10" x2="30" y2="10" />
          <line opacity={$active ? "0":"1"} id="middle-line" x1="10" y1="20" x2="30" y2="20" />
          <line transform={$active ? "translate(8 -1) rotate(-45 5 35 )":""} id="bottom-line" x1="10" y1="30" x2="30" y2="30" />
      </g>
    </svg>
  </span>
</main>