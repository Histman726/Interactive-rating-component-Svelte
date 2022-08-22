<script>
    export let rating = 0;
</script>

<img src="images/illustration-thank-you.svg" alt="" class="thank-image" />

<p class="thanks-rating">You selected {rating} out of 5</p>

<h1>Thank You</h1>

<p class="thanks-secondary-message">
    We appreciate you taking the time to give a rating. If you ever need more
    support, don’t hesitate to get in touch!
</p>

<style>
    .thank-image {
        @apply self-center mb-7;
    }
    .thanks-rating {
        background-color: #242a30;
        color: #b6753f;
        border-radius: 60px;
        @apply text-center self-center text-sm mb-10;
        line-height: 14px;
        padding: 10px 20px;
    }
    h1 {
        font-family: "Overpass", sans-serif;
        @apply text-center self-center text-white font-normal mb-6;
    }

    .thanks-secondary-message {
        color: rgb(172, 165, 154);
        @apply text-center self-center;
    }
</style>
