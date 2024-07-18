<template>
  <TheHeader>
    <div class="help-gameplay-view__header-title">How to play minesweeper?</div>
  </TheHeader>
  <div class="help-view__paragraph">
    <div class="help-view__title">Objective</div>
    <div class="help-view__text">
      Clear the board by revealing all non-mine cells without clicking on any mines.
    </div>
  </div>
  <div class="help-view__paragraph">
    <div class="help-view__title">Starting the Game</div>
    <div class="help-view__text">
      Tap any cell to start the game. This will reveal the cell and possibly some neighboring cells.
    </div>
  </div>
  <div class="help-view__paragraph">
    <div class="help-view__title">Revealing Cells</div>
    <div class="help-view__text">
      <ul>
        <li>Tap a cell to reveal it.</li>
        <li>If the cell contains a mine, the game is over.</li>
        <li>If the cell doesn't contain a mine, it will show a number.</li>
        <li>The number indicates how many mines are in the eight surrounding cells.</li>
      </ul>
    </div>
  </div>
  <div class="help-view__paragraph">
    <div class="help-view__title">Using Flags</div>
    <div class="help-view__text">
      <ul>
        <li>Long tap a cell to place a flag if you suspect there's a mine underneath.</li>
        <li>Long tap again to remove the flag if you change your mind.</li>
        <li>Use flags to keep track of where you think the mines are.</li>
      </ul>
    </div>
  </div>
  <div class="help-view__paragraph">
    <div class="help-view__title">Clearing Safe Cells</div>
    <div class="help-view__text">
      <ul>
        <li>Use the numbers as clues to figure out which nearby cells are safe to click.</li>
        <li>Continue revealing cells while avoiding mines.</li>
      </ul>
    </div>
  </div>
  <div class="help-view__paragraph">
    <div class="help-view__title">Winning the Game</div>
    <div class="help-view__text">
      <ul>
        <li>You win the game by revealing all cells that do not contain mines.</li>
        <li>All mines can be flagged, but flagging is optional for winning.</li>
      </ul>
    </div>
  </div>
  <div class="help-view__paragraph">
    <div class="help-view__title">Losing the Game</div>
    <div class="help-view__text">
      <ul>
        <li>The game is lost if you tap a cell containing a mine.</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader.vue';

  export default {
    name: 'HelpGameplayView',
    components: {
      TheHeader
    }
  }
</script>

<style lang="scss">
  .help-gameplay-view {


    &__header-title {
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: 600
    }
  }
</style>