function getRandomValue(max, min) { 
    return Math.floor(Math.random() * (max - min)) + min;
 }

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods: {
        attackMonster(){
            let attackStrength = getRandomValue(13, 5);
            this.monsterHealth -= attackStrength;
            console.log(attackStrength);
            this.attackPlayer();
        },
        attackPlayer(){
            let monsterAttackStrength = getRandomValue(15, 7);
            this.playerHealth -= monsterAttackStrength;
            console.log(monsterAttackStrength);
        }
    },
});

app.mount("#game");
