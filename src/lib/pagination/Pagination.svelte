<script lang="ts">
   export let page: number;
   export let pagesCount: number;
</script>

<ul>
   {#each Array(pagesCount) as _, i}
      <a href={`/pages/${i + 1}`}>
         <li class:current={page == i + 1}>
            <div class="pageWrapper">
               {i + 1}
            </div>
         </li>
      </a>
   {/each}
</ul>

<style>
   ul {
      padding: 0;
      margin-top: 20px;
      list-style: none;
      display: flex;
      justify-content: space-around;
      width: 100%;
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
   }
   .current {
      background-color: var(--accent-color);
      color: var(--white);
   }
   li:hover {
      background-color: var(--accent-color);
      color: var(--white);
   }
</style>
