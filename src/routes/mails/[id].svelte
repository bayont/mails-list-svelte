<script lang="ts">
   import { mailData, type Mail } from '../../stores';

   export let mail: Mail;

   $: mailData.update((mails) => {
      return mails.map((m) =>
         m.id === mail.id ? { ...m, is_unread: false } : m,
      );
   });
</script>

<button on:click={() => history.back()}>Back to list.</button>
<p>
   hi i'm {mail.subject}
</p>
