<script lang="ts">
   import { processDate } from '$lib/date';

   import { mailData, type Mail } from '../../stores';

   export let mail: Mail;
   $: is_unread = mail.is_unread;

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
   <a href={`/mails/${mail.id}`}>
      <div class="flexContainer">
         <div class="content">
            <p class="from">{mail.from}</p>
            <p>{mail.subject}</p>
         </div>
         <div class="details">
            <div class="date">
               {processDate(mail.sent_date)}
            </div>
            <div class="checkbox" on:click={(e) => e.stopPropagation()}>
               <input
                  type="checkbox"
                  name="toggleRead"
                  id="toggleRead"
                  checked={mail.is_unread}
                  on:click={(e) => e.stopPropagation()}
                  on:change={() => toggleRead()}
               />

               {#if is_unread}
                  <div class="hint">
                     <div>Mark as unread</div>
                  </div>
                  <span class="material-icons"> mark_email_read</span>
               {:else}
                  <div class="hint">
                     <div>Mark as read</div>
                  </div>
                  <span class="material-icons"> markunread</span>
               {/if}
            </div>
         </div>
      </div>
   </a>
</div>

<style>
   .element {
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

   .hint {
      position: absolute;
      transform: translate(-50%);
      bottom: 0;
      left: 50%;
      opacity: 0;
      width: 60px;
      padding: 10px 0;
      display: grid;
      place-items: center;
      background-color: var(--dark-background);
      font-size: var(--font-size-tiny);
      color: var(--light-gray);
   }
   .checkbox:hover .hint {
      opacity: 0.7;
   }
   .hint::after {
      content: '';
      position: absolute;
      top: -6px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 6px 8px 6px;
      border-radius: 2px;
      border-color: transparent transparent var(--dark-background) transparent;
      pointer-events: none;
   }
</style>
