<script context="module" lang="ts">
   export const prerender = true;
</script>

<script lang="ts">
   import MailList from '$lib/mailList/MailList.svelte';
</script>

<svelte:head>
   <title>Inbox</title>
   <meta name="description" content="Inbox made in svelte" />
</svelte:head>

<section>
   <MailList />
</section>

<style>
   section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
   }
</style>
