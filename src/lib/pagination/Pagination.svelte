<script lang="ts">
   import type { Mail } from 'src/stores';

   export let page: number;
   export let pages: Mail[][];

   const max = 5;
   let left: number;
   let right: number;
   let midPages: Mail[][];
   $: left = page - max / 2 > 0 ? Math.ceil(page - max / 2) : 0;
   $: right = left + max;
   $: midPages = pages.slice(left, right);
</script>

<ul>
   {#if left > 0}
      <li class:current={page == 1}>
         <a href={`/pages/1`}>
            <div class="pageWrapper">1</div>
         </a>
      </li>
      <li class="separator">...</li>
   {/if}

   {#each midPages as p, i}
      <li class:current={page == i + 1 + left}>
         <a href={`/pages/${i + 1 + left}`}>
            <div class="pageWrapper">
               {i + 1 + left}
            </div>
         </a>
      </li>
   {/each}

   {#if right < pages.length}
      <li class="separator">...</li>
      <li class:current={page == pages.length}>
         <a href={`/pages/${pages.length}`}>
            <div class="pageWrapper">{pages.length}</div>
         </a>
      </li>
   {/if}
</ul>

<style>
   ul {
      padding: 0;
      margin-top: 20px;
      list-style: none;
      display: flex;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
   }
   li {
      background-color: var(--white);
      width: var(--pagination-button-size);
      height: var(--pagination-button-size);
      display: grid;
      place-items: center;
      border-radius: 5px;
      user-select: none;
      cursor: pointer;
      color: var(--text-color);
      margin: 5px;
   }
   a {
      color: inherit;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
   }

   .current {
      background-color: var(--accent-color);
   }
   .current a,
   li:hover a {
      color: var(--white);
   }
   li:hover {
      background-color: var(--accent-color);
   }
   .separator {
      background-color: transparent;
      cursor: default;
   }
   .separator:hover {
      background-color: transparent;
   }
</style>
