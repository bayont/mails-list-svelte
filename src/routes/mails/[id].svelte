<script lang="ts">
   import { mailData, type Mail } from '../../stores';

   export let mail: Mail;

   $: mailData.update((mails) => {
      return mails.map((m) =>
         m.id === mail.id ? { ...m, is_unread: false } : m,
      );
   });
</script>

<a href="/">Back to list.</a>
<p>
   hi i'm {mail.subject}
</p>
