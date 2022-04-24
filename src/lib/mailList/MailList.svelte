<script lang="ts">
   import MailElement from '$lib/mailElement/MailElement.svelte';

   import { mailData, type Mail } from '../../stores';

   let mails: Mail[];

   mailData.subscribe((value) => {
      mails = value;
   });
</script>

<div class="flexTable">
   <ul>
      {#each mails as mail, i}
         <li>
            <MailElement {mail} />
         </li>
      {/each}
   </ul>
</div>

<style>
   .flexTable {
      width: min(1000px, 100%);
      background-color: #fafafa;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 2px 5px 2px #eee;
   }
   ul {
      list-style: none;
      padding: 0;
   }
</style>
