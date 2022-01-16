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
            console.log(attackStrength);
            this.attackPlayer();
        },
        attackPlayer(){
            let monsterAttackStrength = getRandomValue(15, 7);
            console.log(monsterAttackStrength);
        }
    },
});

app.mount("#game");
