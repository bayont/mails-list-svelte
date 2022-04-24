<script lang="ts">
   import { processDate } from '$lib/date';
   import Hint from '$lib/hint/Hint.svelte';

   import { mailData, type Mail } from '../../stores';

   export let mail: Mail;
   let is_unread = mail.is_unread;

   const toggleRead = () => {
      is_unread = !is_unread;
      mailData.update((mails) => {
         return mails.map((m) =>
            m.id === mail.id ? { ...m, is_unread: !m.is_unread } : m,
         );
      });
   };
</script>

<div class="element" class:unread={is_unread}>
   <a href={`mails/${mail.id}`}>
      <div class="flexContainer">
         <div class="content">
            <p class="from">{mail.from}</p>
            <p>{mail.subject}</p>
         </div>
         <div class="details">
            <div class="date">
               {processDate(mail.sent_date)}
            </div>
            <div class="checkbox">
               <input
                  type="checkbox"
                  name="toggleRead"
                  id="toggleRead"
                  checked={mail.is_unread}
                  on:click={(e) => e.stopPropagation()}
                  on:change={() => toggleRead()}
               />

               {#if is_unread}
                  <Hint message="Mark as unread" />
                  <span class="material-icons"> mark_email_read</span>
               {:else}
                  <Hint message="Mark as read" />
                  <span class="material-icons"> markunread</span>
               {/if}
            </div>
         </div>
      </div>
   </a>
</div>

<style>
   .element {
      border-bottom: 2px solid var(--light-gray);
      padding: 0 20px;
   }
   .element:hover {
      background-color: var(--light-gray);
   }
   .unread .from {
      font-weight: var(--weight-thick);
   }
   .flexContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
   }
   .checkbox {
      position: relative;
      color: var(--text-color);
   }

   input[type='checkbox'] {
      cursor: pointer;
      appearance: none;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
   }
   .content {
      width: 80%;
   }

   .details {
      position: relative;
      display: flex;
      width: min(150px, 20%);
      align-items: center;
   }
   .checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
   }

   .date {
      bottom: 10px;
      text-align: center;
      width: 100%;
      font-size: var(--font-size-small);
      color: var(--text-color);
   }
</style>
