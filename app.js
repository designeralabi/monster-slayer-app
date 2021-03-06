function getRandomValue(max, min) { 
    return Math.floor(Math.random() * (max - min)) + min;
 }

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      counterRound: 0,
      winner: null,
      battleLogs: []
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
    startGame(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.counterRound = 0;
      this.battleLog = [];
    },
    attackMonster() {
      this.counterRound++;
      let attackStrength = getRandomValue(5, 12);
      this.monsterHealth -= attackStrength;
      this.battleLogMessage("player", "attack", attackStrength);
      this.attackPlayer();
    },
    attackPlayer() {
      let monsterAttackStrength = getRandomValue(8, 15);
      this.playerHealth -= monsterAttackStrength;
      this.battleLogMessage("monster", "attack", monsterAttackStrength);
    },
    specialAttackMonster() {
      this.counterRound++;
      let attackStrength = getRandomValue(10, 25);
      this.monsterHealth -= attackStrength;
      this.battleLogMessage("player", "Special attack", attackStrength);
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
      this.battleLogMessage("player", "healing", playerhealthrestore);
      this.attackPlayer();
    },
    surrender(){
      this.winner = 'monster';
    },
    battleLogMessage(byWho, damageType, damagePoint){
      this.battleLogs.unshift({  
        actionBy: byWho,
        actionType: damageType,
        actionValue: damagePoint,
      });
    }
  },
});

app.mount("#game");
