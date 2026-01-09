<script lang="ts">
  import { plaintextArray, getSolutions } from "./lib/decoder-ring";

  let app: HTMLElement;
  let ciphertext = '';
  let results: string[];

  let targetOptions = plaintextArray.slice().sort();
  let selectedOption = 'A';

  function decode() {
    results = getSolutions(ciphertext, selectedOption);
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

  .decoder ul {
    list-style: none;
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
        <label for="target-select">
          Rotate based on:
          <select name="target-select" id="target-select" bind:value={selectedOption}>
            {#each targetOptions as o}
              <option value={o}>{o}</option>
            {/each}
          </select>
        </label>
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
