function getRandomValue(max, min) { 
    return Math.floor(Math.random() * (max - min)) + min;
 }

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      counterRound: 0,
      winner: null
    };
  },
  watch: {
    playerHealth() {
      if (this.playerHealth <=0 && this.monsterHealth <=0) {
        this.winner = 'draw';
      }else if(this.playerHealth <= 0){
        this.winner = 'monster';
      }
    },
    monsterHealth(){
      if (this.monsterHealth <=0 && this.playerHealth <=0){
        this.winner = 'draw';
      }else if(this.monsterHealth <= 0){
         this.winner = 'player';
      }
    }
  },
  computed: {
    playerHealthBar() {
      if (this.playerHealth < 0){
        return {width: '0%'};
      }
      return { width: this.playerHealth + "%" };
    },
    monsterHealthBar() {
      if (this.monsterHealth < 0){
        return {width: '0%'};
      }
      return { width: this.monsterHealth + "%" };
    },
    useSpecialAttack() {
      return this.counterRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.counterRound++;
      let attackStrength = getRandomValue(5, 12);
      this.monsterHealth -= attackStrength;
      this.attackPlayer();
    },
    attackPlayer() {
      let monsterAttackStrength = getRandomValue(8, 15);
      this.playerHealth -= monsterAttackStrength;
    },
    specialAttackMonster() {
      this.counterRound++;
      let attackStrength = getRandomValue(10, 25);
      this.monsterHealth -= attackStrength;
      this.attackPlayer();
    },
    healPlayer() {
      this.counterRound++;
      const playerhealthrestore = getRandomValue(8, 20);
      if (this.playerHealth + playerhealthrestore > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += playerhealthrestore;
      }
      this.attackPlayer();
    },
  },
});

app.mount("#game");
