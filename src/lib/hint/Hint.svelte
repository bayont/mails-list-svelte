<script lang="ts">
   export let message: string;
</script>

<div class="hintWrapper">
   <div class="hint">
      <div>
         {message}
      </div>
   </div>
</div>

<style>
   .hintWrapper {
      position: absolute;
      text-align: center;
      font-size: var(--font-size-tiny);
      color: var(--light-gray);
      width: 100%;
      height: 100%;
      bottom: 0;
      display: flex;
   }

   .hint {
      position: absolute;
      transform: translate(-50%);
      bottom: 0;
      left: 50%;
      opacity: 0;
      width: 60px;
      padding: 10px 0;
      display: grid;
      place-items: center;
      background-color: var(--dark-background);
   }
   .hintWrapper:hover .hint {
      opacity: 0.7;
   }
   .hint::after {
      content: '';
      position: absolute;
      top: -6px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 6px 8px 6px;
      border-radius: 2px;
      border-color: transparent transparent var(--dark-background) transparent;
      pointer-events: none;
   }
</style>
