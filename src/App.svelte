<script lang="ts">
  import { getSolutions } from "./lib/decoder-ring";

  let app: HTMLElement;
  let ciphertext = '';
  let results: string[];

  function decode() {
    results = getSolutions(ciphertext);
  }


</script>

<style>
  .decoder {
    width: 50%;
    margin: 0 auto;
  }

  .decoder {
    text-align: left;
  }

  .decoder textarea {
    width: 100%;
    height: 5em;
    padding: 1em;
  }

  .decoder .output {
    width: 100%;
    min-width: 100%;
    height: 40%;
    min-height: 10em;
    background-color: #3b3b3b;
    border: 1px solid #858585;
  }
  
</style>

<main>
  <div id="main-app" bind:this={app} >
    <div class="decoder">
      <h1>Act 3 ARG Decoder</h1>

      <h2>Ciphertext</h2>
      <p>
        <textarea name='ciphertext' bind:value={ciphertext} placeholder='Numbers here'/>

      </p>
      <p>
        <button on:click={decode}>Decode</button>
      </p>
      <p class='output'>
        {#if results}
        <ul >

          {#each results as result}
            <li>{`${result}\n`}</li>
          {/each}
        </ul>
        {/if}
      </p>
    
    </div>
  </div>
</main>
