<script>
  import ThankYou from "./lib/ThankYou.svelte";
</script>

<main>
  <div class="star rate-state">
    <img src="images/icon-star.svg" alt="" />
  </div>
  <h1 class="rating-primary rate-state">How did we do?</h1>

  <p class="rate-state">
    Please let us know how we did with your support request. All feedback is
    appreciated to help us improve our offering!
  </p>

  <div class="ratings rate-state">
    <div class="rate rate-state" id="1">1</div>
    <div class="rate rate-state" id="2">2</div>
    <div class="rate rate-state" id="3">3</div>
    <div class="rate rate-state" id="4">4</div>
    <div class="rate rate-state" id="5">5</div>
  </div>

  <button class="rate-state submit">SUBMIT</button>
  <ThankYou />
</main>

<style>
  main {
    background: radial-gradient(
      circle at 40% 30%,
      rgb(37, 42, 53) 10%,
      rgba(23, 31, 43, 1) 100%
    );
    @apply w-96 h-96 max-w-xsm p-4 rounded-3xl flex flex-col justify-center items-start;
  }
</style>
