function getRandomValue(max, min) { 
    return Math.floor(Math.random() * (max - min)) + min;
 }

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      counterRound: 0
    };
  },
  computed: {
    playerHealthBar() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealthBar() {
      return { width: this.monsterHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
        this.counterRound++;
      let attackStrength = getRandomValue(5, 12);
      this.monsterHealth -= attackStrength;
      console.log(attackStrength);
      this.attackPlayer();
    },
    attackPlayer() {
      let monsterAttackStrength = getRandomValue(8, 5);
      this.playerHealth -= monsterAttackStrength;
      console.log(monsterAttackStrength);
    },
    specialAttackMonster() {
        this.counterRound++;
      let attackStrength = getRandomValue(10, 25);
      this.monsterHealth -= attackStrength;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
