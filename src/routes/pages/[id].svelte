<script lang="ts">
   import MailList from '$lib/mailList/MailList.svelte';

   export let page: number;
</script>

<MailList {page} />
