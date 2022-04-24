<script lang="ts">
   import { chunk } from '$lib/chunk';

   import MailElement from '$lib/mailElement/MailElement.svelte';

   import { mailData, type Mail } from '../../stores';
   import Pagination from '../pagination/Pagination.svelte';

   let mails: Mail[];
   export let page: number = 1;
   let currentPage: Mail[];

   mailData.subscribe((value) => {
      mails = value;
   });

   $: pages = chunk<Mail>(mails, 5);
   $: currentPage = pages[page - 1];
</script>

<div class="flexTable">
   <ul>
      {#each currentPage as mail, i}
         <li>
            <MailElement {mail} />
         </li>
      {/each}
   </ul>
</div>
<Pagination {page} {pages} />

<style>
   .flexTable {
      width: min(1000px, 100%);
      background-color: #fafafa;
      border-radius: 20px;
      box-shadow: 0 2px 5px 2px #eee;
      height: 400px;
      display: flex;
      justify-content: center;
   }
   ul {
      list-style: none;
      padding: 0;

      overflow: auto;
      width: 90%;
   }
   li {
      border-bottom: 2px solid var(--light-gray);
   }
   li:last-child {
      border-bottom: none;
   }
</style>
