<script lang="ts">
   import type { Mail } from 'src/stores';

   export let mail: Mail;
</script>

<div class="element">
   <a href={`mails/${mail.id}`}>
      <p>{mail.subject}</p>
   </a>
</div>

<style>
</style>
