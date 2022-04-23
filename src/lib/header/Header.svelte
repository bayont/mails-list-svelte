<script lang="ts">
   import 'material-icons/iconfont/material-icons.css';
</script>

<header>
   <div class="logo">
      <span class="material-icons"> inbox </span>
      <div class="innerLogoText">Inbox</div>
   </div>
</header>

<style>
   header {
      display: flex;
      justify-content: center;
   }
   .logo {
      position: relative;
   }
   .material-icons {
      font-size: 96px;
      color: var(--accent-color);
   }
   .innerLogoText {
      font-size: 16px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -100%);
      font-weight: var(--weight-thin);
      font-family: var(--font-custom);
   }
</style>
